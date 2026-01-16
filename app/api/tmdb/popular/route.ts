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

    return NextResponse.json({
      success: true,
      count: data.results.length,
      movies: data.results,
    });
  } catch (error) {
    console.error("Erreur API TMDB:", error);
    return NextResponse.json(
      { success: false, error: "Échec de l'apppel à l'API TMDb" },
      { status: 500 }
    );
  }
}
