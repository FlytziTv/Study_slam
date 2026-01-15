import Image from "next/image";

export default function PlateformesCard({
  UrlImage,
  Name,
}: {
  UrlImage: string;
  Name: string;
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
    </div>
  );
}
