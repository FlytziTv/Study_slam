"use client";

import { useState } from "react";
import Header from "@/components/navbar/Header";
import { PopularMoviesResponse, MovieDetailsResponse } from "@/types/tmdb";

/**
 * Page de test pour les APIs TMDb
 * URL: /api-test
 */
export default function ApiTestPage() {
  const [popularMovies, setPopularMovies] =
    useState<PopularMoviesResponse | null>(null);
  const [movieDetails, setMovieDetails] = useState<MovieDetailsResponse | null>(
    null
  );
  const [movieId, setMovieId] = useState("550"); // Fight Club par défaut
  const [loading, setLoading] = useState(false);

  // Test de l'API /api/tmdb/popular
  const testPopularMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/tmdb/popular");
      const data: PopularMoviesResponse = await response.json();
      setPopularMovies(data);
      console.log("✅ Films populaires:", data);
    } catch (error) {
      console.error("❌ Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  // Test de l'API /api/tmdb/movie/[id]
  const testMovieDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/tmdb/movie/${movieId}`);
      const data: MovieDetailsResponse = await response.json();
      setMovieDetails(data);
      console.log("✅ Détails du film:", data);
    } catch (error) {
      console.error("❌ Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-start p-10 pt-20">
        <h1 className="text-4xl font-bold text-white mb-8">
          🧪 Page de Test des APIs
        </h1>

        {/* Test 1: Films populaires */}
        <div className="bg-gray-900 p-6 rounded-lg mb-6 w-full">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Test 1: Films Populaires
          </h2>
          <button
            onClick={testPopularMovies}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Chargement..." : "Tester GET /api/tmdb/popular"}
          </button>

          {popularMovies && (
            <div className="mt-4 bg-gray-800 p-4 rounded">
              <p className="text-green-400 font-mono">
                ✅ Succès: {popularMovies.count || 0} films récupérés
              </p>
              <pre className="text-white text-xs mt-2 overflow-auto max-h-60">
                {JSON.stringify(popularMovies, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Test 2: Détails d'un film */}
        <div className="bg-gray-900 p-6 rounded-lg w-full">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Test 2: Détails d&apos;un Film
          </h2>
          <div className="flex gap-4 items-center mb-4">
            <input
              type="text"
              value={movieId}
              onChange={(e) => setMovieId(e.target.value)}
              placeholder="ID du film (ex: 550)"
              className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
            />
            <button
              onClick={testMovieDetails}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded disabled:opacity-50"
            >
              {loading ? "Chargement..." : "Tester GET /api/tmdb/movie/[id]"}
            </button>
          </div>

          <p className="text-gray-400 text-sm mb-4">
            💡 IDs de test: 550 (Fight Club), 278 (Shawshank), 238 (Godfather)
          </p>

          {movieDetails && (
            <div className="mt-4 bg-gray-800 p-4 rounded">
              {movieDetails.success ? (
                <>
                  <p className="text-green-400 font-mono mb-2">
                    ✅ Succès: {movieDetails.movie?.title}
                  </p>
                  <pre className="text-white text-xs overflow-auto max-h-60">
                    {JSON.stringify(movieDetails, null, 2)}
                  </pre>
                </>
              ) : (
                <p className="text-red-400 font-mono">
                  ❌ Erreur: {movieDetails.error}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-gray-900 p-6 rounded-lg mt-6 w-full">
          <h3 className="text-xl font-semibold text-white mb-3">
            📚 Comment Utiliser
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>1. Cliquez sur les boutons pour tester chaque API</li>
            <li>2. Ouvrez la console (F12) pour voir les logs détaillés</li>
            <li>3. Les résultats s&apos;affichent en JSON ci-dessous</li>
            <li>4. Testez avec différents IDs de films</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
