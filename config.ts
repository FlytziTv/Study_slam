export const CONFIG = {
  // TMDb
  TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY || '',
  TMDB_BASE_URL: 'https://api.themoviedb.org/3',
  TMDB_IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  
  // API locale
  API_BASE_URL: '/api',
} as const;
