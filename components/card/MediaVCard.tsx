import Image from "next/image";
import Link from "next/link";

export default function MediaVCard({
  UrlImage,
  Name,
  Id,
}: {
  UrlImage: string;
  Name: string;
  Id: string;
}) {
  return (
    <Link href={`/view_media/${Id}`}>
      <div className="relative h-20 w-14 shrink-0 border border-transparent rounded-md hover:border-stream hover:scale-110 transition-all">
        <Image
          src={UrlImage}
          alt={`Banniere ${Name}`}
          fill
          className="object-cover rounded-md"
        />
      </div>
    </Link>
  );
}
