/**
 * Service pour récupérer les données depuis l'API TMDB
 */

interface MediaItem {
  id: string;
  title: string;
  afficheV: string;
  afficheH: string;
  description: string;
  année: number;
  recommandations: number;
  note: number;
  categorie: string;
  genres?: string[];
}

/**
 * Récupère les films populaires depuis l'API TMDB
 */
export async function getPopularMovies(): Promise<MediaItem[]> {
  try {
    const response = await fetch("/api/tmdb/popular-movies", {
      cache: "no-store", // Désactive le cache pour toujours avoir les données à jour
    });

    if (!response.ok) {
      console.error("Erreur lors de la récupération des films");
      return [];
    }

    const data = await response.json();
    return data.movies || [];
  } catch (error) {
    console.error("Erreur:", error);
    return [];
  }
}

/**
 * Récupère les séries populaires depuis l'API TMDB
 */
export async function getPopularSeries(): Promise<MediaItem[]> {
  try {
    const response = await fetch("/api/tmdb/popular-series", {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Erreur lors de la récupération des séries");
      return [];
    }

    const data = await response.json();
    return data.series || [];
  } catch (error) {
    console.error("Erreur:", error);
    return [];
  }
}

/**
 * Récupère tous les médias (films + séries)
 */
export async function getAllMedia(): Promise<MediaItem[]> {
  const [movies, series] = await Promise.all([
    getPopularMovies(),
    getPopularSeries(),
  ]);

  return [...movies, ...series];
}

/**
 * Récupère les détails d'un film spécifique
 */
export async function getMovieDetails(id: string): Promise<MediaItem | null> {
  try {
    const response = await fetch(`/api/tmdb/movie/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Erreur lors de la récupération du film");
      return null;
    }

    const data = await response.json();
    return data.movie || null;
  } catch (error) {
    console.error("Erreur:", error);
    return null;
  }
}
