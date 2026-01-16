import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MediaCard({
  UrlImage,
  Name,
  Reco,
  Id,
}: {
  UrlImage: string;
  Name: string;
  Reco: number;
  Id: string;
}) {
  return (
    <Link href={`/view_media/${Id}`}>
      <div className="w-74.25 aspect-video rounded-[10px] relative shrink-0 ">
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
    </Link>
  );
}
