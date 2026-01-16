import MediaCarrousel from "@/components/carrousel/MediaCarrousel";
import Header from "@/components/navbar/Header";
import BannerMedia from "@/components/page/BannerMedia";
import { films } from "@/data/test";

export default function Movie() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <BannerMedia data={films} />
      <main className="flex w-full flex-col items-center p-10 gap-10">
        {/* Importation de la liste des médias */}
        <MediaCarrousel data={films} title="Films Populaires" />
      </main>
    </div>
  );
}
