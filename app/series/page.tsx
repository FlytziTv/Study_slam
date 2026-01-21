import MediaCarrousel from "@/components/carrousel/MediaCarrousel";
import Header from "@/components/navbar/Header";
import BannerMedia from "@/components/page/BannerMedia";

type SeriesItem = {
  id: string;
  title: string;
  afficheH: string;
  background: string;
  logo: string;
  description: string;
  recommandations: number;
};

async function getSeries() {
  try {
    const res = await fetch("http://localhost:3000/api/tmdb/popular-series", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.success ? data.series : [];
  } catch {
    return [];
  }
}

export default async function Series() {
  const series = await getSeries();
  const bannerData = series.length > 0 ? [series[0]] : [];

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <BannerMedia data={bannerData} />
      <main className="flex w-full flex-col items-center p-10 gap-10">
        {/* Importation de la liste des médias */}
        <MediaCarrousel data={series} title="Séries Populaires" />
      </main>
    </div>
  );
}
