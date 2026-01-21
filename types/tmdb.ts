/**
 * Types pour les données de l'API TMDb (The Movie Database)
 */

export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  voteAverage: number;
  runtime?: number;
  genres?: Genre[];
}

export interface PopularMoviesResponse {
  success: boolean;
  count?: number;
  movies?: Movie[];
  error?: string;
}

export interface MovieDetailsResponse {
  success: boolean;
  movie?: Movie;
  error?: string;
}
export interface TMDBmovie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  release_date: string;
}
export interface TMDBtv {
  id: number;
  name: string;
  title?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  release_date?: string;
}
