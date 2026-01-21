import Image from "next/image";

type UserStats = {
  label: string;
  value: number;
};

type UserFavoritesMedia = {
  id: number;
  title: string;
  poster: string;
};

export default function MembersCard({
  ImageUser,
  UserName,
  UserStats,
  UserFavoritesMedia,
}: {
  ImageUser: string;
  UserName: string;
  UserStats: UserStats[];
  UserFavoritesMedia: UserFavoritesMedia[];
}) {
  return (
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
            {UserStats.map((stat) => (
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
          {UserFavoritesMedia.map((media) => (
            <div
              key={media.id}
              className="relative h-20 w-14 shrink-0 border border-transparent rounded-md hover:border-stream hover:scale-110 transition-all"
            >
              <Image
                src={media.poster}
                alt={media.title}
                fill
                className="object-cover select-none pointer-events-none rounded-md "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
