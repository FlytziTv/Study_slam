import { TMDBtv } from "@/types/tmdb";
import { NextResponse } from "next/server";

/**
 * API Route pour récupérer les séries populaires depuis TMDb
 * GET /api/tmdb/popular-series
 */
export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Clé API TMDb manquante" },
      { status: 500 },
    );
  }

  try {
    // Récupérer 3 pages de séries populaires en parallèle (20 séries par page = 60 séries au total)
    const pages = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=fr-FR&page=1`,
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=fr-FR&page=2`,
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=fr-FR&page=3`,
      ),
    ]);

    // Convertir toutes les réponses en JSON
    const dataPages = await Promise.all(pages.map((r) => r.json()));

    // Fusionner tous les résultats en un seul tableau
    const allResults = dataPages.flatMap((d) => d.results);

    // Filtrer pour ne garder que les séries complètes (avec images ET description)
    const validSeries = allResults.filter(
      (serie: TMDBtv) =>
        serie.poster_path &&
        serie.backdrop_path &&
        serie.overview &&
        serie.overview.trim() !== "",
    );

    // Transformer les données TMDb pour correspondre à la structure attendue par nos composants
    const series = validSeries.map((serie: TMDBtv) => ({
      id: serie.id.toString(),
      UrlImage: serie.poster_path
        ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
        : "",
      Name: serie.name, // Les séries utilisent 'name' au lieu de 'title'
      Reco: Math.round(serie.vote_average * 10), // Convertir note sur 10 en pourcentage
      afficheV: serie.poster_path
        ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
        : "",
      afficheH: serie.backdrop_path
        ? `https://image.tmdb.org/t/p/w780${serie.backdrop_path}`
        : "",
      background: serie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${serie.backdrop_path}` // Image haute résolution pour la bannière
        : "",
      logo: "", // Le logo n'est pas disponible dans l'API de base
      title: serie.name,
      description: serie.overview || "Aucune description disponible.",
      année: serie.first_air_date // Les séries utilisent 'first_air_date' au lieu de 'release_date'
        ? new Date(serie.first_air_date).getFullYear()
        : 0,
      note: serie.vote_average,
      recommandations: Math.round(serie.vote_average * 10),
    }));

    return NextResponse.json({
      success: true,
      count: series.length,
      series: series,
    });
  } catch (error) {
    console.error("Erreur API TMDB:", error);
    return NextResponse.json(
      { success: false, error: "Échec de l'apppel à l'API TMDb" },
      { status: 500 },
    );
  }
}
