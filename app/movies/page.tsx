import MediaCarrousel from "@/components/carrousel/MediaCarrousel";
import PlateformesCarrousel from "@/components/carrousel/PlateformesCarrousel";
import Header from "@/components/navbar/Header";
import { allMedia, films, series, plateformesData } from "@/data/test";

export default function Movie() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-center p-10 gap-10 pt-25">
        {/* Importation de la liste des plateformes de streaming */}
        <PlateformesCarrousel data={plateformesData} />
        {/* Importation de la liste des médias */}
        <MediaCarrousel data={series} title="Séries Populaires" />
        {/* Importation de la liste des médias */}
        <MediaCarrousel data={films} title="Films Populaires" />
      </main>
    </div>
  );
}
