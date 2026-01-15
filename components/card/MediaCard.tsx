import { Flame } from "lucide-react";
import Image from "next/image";

export default function MediaCard({
  UrlImage,
  Name,
  Reco,
}: {
  UrlImage: string;
  Name: string;
  Reco: number;
}) {
  return (
    <div className="w-75 h-40 rounded-[10px] relative shrink-0 ">
      {/* Image background */}
      <Image
        src={UrlImage}
        alt={`Banniere ${Name}`}
        className="rounded-[10px] object-cover"
        fill
      />
      {/* Flamme de recommandation */}
      <div className="absolute bg-black/60 bottom-1 left-1 flex flex-row rounded-md items-center justify-center gap-1 py-1 px-1.5 ">
        <Flame size={18} className="text-[#CC4700]" />
        <span className="font-regular text-sm text-white">{Reco} %</span>
      </div>
    </div>
  );
}
