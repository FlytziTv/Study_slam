import MediaCarrousel from "@/components/carrousel/MediaCarrousel";
import PlateformesCarrousel from "@/components/carrousel/PlateformesCarrousel";
import Header from "@/components/navbar/Header";
import BannerMedia from "@/components/page/BannerMedia";
import { allMedia, films, plateformesData, series } from "@/data/test";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <BannerMedia data={allMedia} />
      <main className="flex flex-col w-full justify-center p-10 gap-10">
        {/* Header */}

        {/* Importation de la liste des plateformes de streaming */}
        <PlateformesCarrousel data={plateformesData} />

        <MediaCarrousel data={films} title="Films Populaires" />
        <MediaCarrousel data={series} title="Séries Populaires" />
      </main>
    </div>
  );
}
