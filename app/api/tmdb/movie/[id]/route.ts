import { NextResponse } from "next/server";

/**
 * API Route pour récupérer les détails d'un film par son ID
 * GET /api/tmdb/movie/[id]
 *
 * @example GET /api/tmdb/movie/550 (Fight Club)
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // 1. Récupération de la clé API
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Clé API TMDb manquante" },
      { status: 500 }
    );
  }

  // 2. Récupération de l'ID depuis l'URL
  const { id } = await params;

  // 3. Validation de l'ID (doit être un nombre)
  if (!id || isNaN(Number(id))) {
    return NextResponse.json(
      { error: "ID de film invalide" },
      { status: 400 } // 400 = Bad Request (erreur client)
    );
  }

  // 4. Appel à l'API TMDb
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ error: "Film non trouvé" }, { status: 404 });
      }
      throw new Error(`Erreur TMDb: ${response.statusText}`);
    }

    const movie = await response.json();

    // 5. Retour des données formatées
    return NextResponse.json({
      success: true,
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
        runtime: movie.runtime,
        genres: movie.genres,
      },
    });
  } catch (error) {
    console.error("Erreur API TMDb:", error);
    return NextResponse.json(
      { success: false, error: "Échec de la récupération du film" },
      { status: 500 }
    );
  }
}
