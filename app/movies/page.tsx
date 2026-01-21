import Header from "@/components/navbar/Header";
import MediaCarrousel from "@/components/carrousel/MediaCarrousel";
import PlateformesCarrousel from "@/components/carrousel/PlateformesCarrousel";
import BannerMedia from "@/components/page/BannerMedia";
import { plateformesData } from "@/data/test";

type CarouselItem = {
  id: string;
  title: string;
  afficheH: string;
  recommandations: number;
};

type BannerItem = {
  id: string;
  title: string;
  background: string;
  logo: string;
  description: string;
};

type MoviesResponse = { success?: boolean; movies?: RawMedia[] };
type SeriesResponse = { success?: boolean; series?: RawMedia[] };

type RawMedia = {
  id?: string | number;
  title?: string;
  Name?: string;
  afficheH?: string;
  UrlImage?: string;
  recommandations?: number;
  Reco?: number;
  background?: string;
  logo?: string;
  description?: string;
};

async function fetchJson<T>(url: string) {
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch (err) {
    console.error("movies page fetch error", err);
    return null;
  }
}

function mapToCarousel(items: RawMedia[]): CarouselItem[] {
  return items.map((item) => ({
    id: String(item.id ?? ""),
    title: item.title ?? item.Name ?? "",
    afficheH: item.afficheH ?? item.UrlImage ?? "",
    recommandations: item.recommandations ?? item.Reco ?? 0,
  }));
}

function mapToBanner(items: RawMedia[]): BannerItem[] {
  return items.map((item) => ({
    id: String(item.id ?? ""),
    title: item.title ?? item.Name ?? "",
    background: item.background ?? item.afficheH ?? "",
    logo: item.logo ?? "",
    description: item.description ?? "",
  }));
}

export default async function MoviesPage() {
  const moviesRes = await fetchJson<MoviesResponse>(
    "http://localhost:3000/api/tmdb/popular-movies",
  );
  const seriesRes = await fetchJson<SeriesResponse>(
    "http://localhost:3000/api/tmdb/popular-series",
  );

  const movies: CarouselItem[] =
    moviesRes?.success && moviesRes.movies
      ? mapToCarousel(moviesRes.movies)
      : [];

  const shows: CarouselItem[] =
    seriesRes?.success && seriesRes.series
      ? mapToCarousel(seriesRes.series)
      : [];

  // Utiliser le premier film disponible pour la bannière
  const bannerData: BannerItem[] =
    moviesRes?.success && moviesRes.movies && moviesRes.movies.length > 0
      ? mapToBanner([moviesRes.movies[0]])
      : [];

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      <Header />
      <BannerMedia data={bannerData} />
      <main className="flex min-h-screen w-full flex-col items-center p-10 gap-10 pt-25">
        <PlateformesCarrousel data={plateformesData} />
        <MediaCarrousel data={shows} title="Séries Populaires" />
        <MediaCarrousel data={movies} title="Films Populaires" />
      </main>
    </div>
  );
}
