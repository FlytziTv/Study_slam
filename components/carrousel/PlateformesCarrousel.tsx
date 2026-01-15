import PlateformesCard from "@/components/card/PlateformesCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

type plateformesData = {
  id: number;
  name: string;
  afficheH: string;
  link: string;
};

export default function PlateformesCarrousel({
  data,
}: {
  data: plateformesData[];
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center">
        {/* Titre de la liste */}
        <h2 className="font-bold text-2xl text-white ">
          Plateformes de streaming
        </h2>
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
      {/* Carrousel des plateformes via le mapping des données */}
      <div className="flex flex-row gap-2 overflow-x-hidden">
        {data.map((media) => (
          <PlateformesCard
            key={media.id}
            UrlImage={media.afficheH}
            Name={media.name}
          />
        ))}
      </div>
    </div>
  );
}
