import MediaCard from "@/components/card/MediaCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Film, Serie } from "@/data/test";

// On définit un type qui accepte soit un Film, soit une Série
type AnyMedia = Film | Serie;

export default function MediaCarrousel({
  data,
  title,
}: {
  data: AnyMedia[];
  title: string;
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center">
        {/* Titre de la liste */}
        <h2 className="font-bold text-2xl text-white ">{title}</h2>
        {/* Menu des button de navigation du carrousel */}
        <div className="flex flex-row gap-1.5">
          <button className="flex items-center justify-center p-1.5 border border-[#262626] bg-background hover:bg-[#262626] hover:text-[#fafafa] rounded-full transition-all [&_svg:not([class*='size-'])]:size-4.5 [&_svg]:shrink-0 ">
            <ChevronLeft size={18} />
          </button>
          <button className="flex items-center justify-center p-1.5 border border-[#262626] bg-background hover:bg-[#262626] hover:text-[#fafafa] rounded-full transition-all [&_svg:not([class*='size-'])]:size-4.5 [&_svg]:shrink-0 ">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      {/* Carrousel des médias via le mapping des données */}
      <div className="flex flex-row gap-2 overflow-x-hidden">
        {data.map((media) => (
          <MediaCard
            key={media.id}
            UrlImage={media.afficheH}
            Name={media.title}
            Reco={media.recommandations}
            Id={media.id}
          />
        ))}
      </div>
    </div>
  );
}
