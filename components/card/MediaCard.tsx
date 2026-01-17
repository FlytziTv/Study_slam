import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button/Button";

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

        <Button
          variant="recommended"
          size="recommended"
          className="absolute bottom-1 left-1"
        >
          <Flame className="text-[#CC4700]" />
          {Reco} %
        </Button>
      </div>
    </Link>
  );
}
