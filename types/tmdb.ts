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
