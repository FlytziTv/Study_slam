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
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`Erreur TMDB: ${response.statusText}`);
    }

    const data = await response.json();

    // Transformer les données TMDb pour correspondre à la structure attendue
    const series = data.results.map((series: TMDBtv) => ({
      id: series.id.toString(),
      UrlImage: series.poster_path
        ? `https://image.tmdb.org/t/p/w500${series.poster_path}`
        : "",
      Name: series.title,
      Reco: Math.round(series.vote_average * 10), // Convertir note sur 10 en pourcentage
      afficheV: series.poster_path
        ? `https://image.tmdb.org/t/p/w500${series.poster_path}`
        : "",
      afficheH: series.backdrop_path
        ? `https://image.tmdb.org/t/p/w780${series.backdrop_path}`
        : "",
      title: series.title,
      description: series.overview,
      année: series.release_date
        ? new Date(series.release_date).getFullYear()
        : 0,
      note: series.vote_average,
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
      { status: 500 }
    );
  }
}
