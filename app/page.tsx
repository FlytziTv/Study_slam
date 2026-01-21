import MediaCarrousel from "@/components/carrousel/MediaCarrousel";
import PlateformesCarrousel from "@/components/carrousel/PlateformesCarrousel";
import Header from "@/components/navbar/Header";
import BannerMedia from "@/components/page/BannerMedia";
import { plateformesData } from "@/data/test";

async function getMoviesAndSeries() {
  try {
    const [moviesRes, seriesRes] = await Promise.all([
      fetch("http://localhost:3000/api/tmdb/popular-movies", {
        cache: "no-store",
      }),
      fetch("http://localhost:3000/api/tmdb/popular-series", {
        cache: "no-store",
      }),
    ]);

    const moviesData = await moviesRes.json();
    const seriesData = await seriesRes.json();

    const movies = moviesData.success ? moviesData.movies : [];
    const series = seriesData.success ? seriesData.series : [];

    return { movies, series, allMedia: [...movies, ...series] };
  } catch {
    return { movies: [], series: [], allMedia: [] };
  }
}

export default async function Home() {
  const { movies, series, allMedia } = await getMoviesAndSeries();
  const bannerData = allMedia.length > 0 ? [allMedia[0]] : [];

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <BannerMedia data={bannerData} />
      <main className="flex flex-col w-full justify-center p-10 gap-10">
        {/* Header */}

        {/* Importation de la liste des plateformes de streaming */}
        <PlateformesCarrousel data={plateformesData} />

        <MediaCarrousel data={movies} title="Films Populaires" />
        <MediaCarrousel data={series} title="Séries Populaires" />
      </main>
    </div>
  );
}
