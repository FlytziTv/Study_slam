import { TMDBmovie } from "@/types/tmdb";
import { NextResponse } from "next/server";

/**
 * API Route pour récupérer les films populaires depuis TMDb
 * GET /api/tmdb/popular
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
    // Récupérer 3 pages de films populaires en parallèle (20 films par page = 60 films au total)
    // Promise.all permet de lancer les 3 requêtes simultanément pour optimiser les performances
    const pages = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`,
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=2`,
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=3`,
      ),
    ]);

    // Convertir toutes les réponses en JSON
    const dataPages = await Promise.all(pages.map((r) => r.json()));

    // Fusionner tous les résultats en un seul tableau avec flatMap
    const allResults = dataPages.flatMap((d) => d.results);

    // Filtrer pour ne garder que les films complets (avec images ET description)
    // Cela évite d'afficher des films sans affiches ou en noir et blanc
    const validMovies = allResults.filter(
      (movie: TMDBmovie) =>
        movie.poster_path &&
        movie.backdrop_path &&
        movie.overview &&
        movie.overview.trim() !== "",
    );

    // Transformer les données TMDb pour correspondre à la structure attendue
    const movies = validMovies.map((movie: TMDBmovie) => ({
      id: movie.id.toString(),
      UrlImage: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "",
      Name: movie.title,
      Reco: Math.round(movie.vote_average * 10), // Convertir note sur 10 en pourcentage
      afficheV: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "",
      afficheH: movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
        : "",
      background: movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : "",
      logo: "",
      title: movie.title,
      description: movie.overview || "Aucune description disponible.",
      année: movie.release_date
        ? new Date(movie.release_date).getFullYear()
        : 0,
      note: movie.vote_average,
      recommandations: Math.round(movie.vote_average * 10),
    }));

    return NextResponse.json({
      success: true,
      count: movies.length,
      movies: movies,
    });
  } catch (error) {
    console.error("Erreur API TMDB:", error);
    return NextResponse.json(
      { success: false, error: "Échec de l'apppel à l'API TMDb" },
      { status: 500 },
    );
  }
}
