import Image from "next/image";
import Link from "next/link";
import { allMedia } from "@/data/test";
import MediaVCard from "./MediaVCard";

type UserStats = {
  label: string;
  value: number;
};

export default function MembersCard({
  Id,
  ImageUser,
  UserName,
  UserStats,
  UserFavoritesIds,
}: {
  Id: number;
  ImageUser: string;
  UserName: string;
  UserStats: UserStats[];
  UserFavoritesIds: string[];
}) {
  return (
    // lien vers le profil de l'utilisateur
    <Link href={`/profile/${Id}`}>
      <div className="flex flex-row gap-4 items-center p-4 bg-white/8 rounded-lg w-full">
        <div className="relative h-35 w-35 shrink-0">
          {/* Photo de profil de {User} */}
          <Image
            src={ImageUser}
            alt={`Photo de profil de ${ImageUser}`}
            fill
            className="rounded-full border-2 object-cover select-none pointer-events-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start gap-0">
            {/* Nom de l'utilisateur */}
            <h1 className="text-2xl font-bold text-white">{UserName}</h1>
            {/* Liste des statistiques de l'utilisateur */}
            <div className="flex flex-row gap-2">
              {UserStats?.map((stat) => (
                <span
                  key={stat.label}
                  className="font-regular text-sm text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
                >
                  {stat.value} {stat.label}
                </span>
              ))}
            </div>
          </div>

          {/* Liste des médias favoris de l'utilisateur */}
          <div className="flex flex-row items-center gap-2">
            {UserFavoritesIds?.map((mediaId) => {
              // On cherche le média correspondant dans allMedia
              const media = allMedia.find((m) => m.id === mediaId);

              // Si le média n'existe pas, on n'affiche rien
              if (!media) return null;

              return (
                <MediaVCard
                  key={media.id}
                  UrlImage={media.afficheV}
                  Name={media.title}
                  Id={media.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
