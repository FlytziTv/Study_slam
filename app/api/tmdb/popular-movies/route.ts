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
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`Erreur TMDB: ${response.statusText}`);
    }

    const data = await response.json();

    // Transformer les données TMDb pour correspondre à la structure attendue
    const movies = data.results.map((movie: TMDBmovie) => ({
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
      title: movie.title,
      description: movie.overview,
      année: movie.release_date
        ? new Date(movie.release_date).getFullYear()
        : 0,
      note: movie.vote_average,
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
      { status: 500 }
    );
  }
}
