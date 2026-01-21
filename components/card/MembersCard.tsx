"use client";

import Image from "next/image";
import MediaVCard from "./MediaVCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type UserStats = {
  label: string;
  value: number;
};

interface MediaItem {
  id: string;
  title: string;
  posterPath: string;
}

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
  const router = useRouter();
  // État pour stocker les médias favoris récupérés depuis l'API
  const [favoriteMedia, setFavoriteMedia] = useState<MediaItem[]>([]);

  // Effect pour récupérer les détails des films favoris depuis l'API TMDB
  useEffect(() => {
    async function fetchFavorites() {
      if (!UserFavoritesIds || UserFavoritesIds.length === 0) return;

      try {
        // Limiter à 4 favoris pour l'affichage sur la carte membre
        const limitedIds = UserFavoritesIds.slice(0, 4);

        // Créer un tableau de promesses pour récupérer tous les films en parallèle
        const mediaPromises = limitedIds.map(async (mediaId) => {
          const response = await fetch(`/api/tmdb/movie/${mediaId}`);
          if (!response.ok) return null;
          const data = await response.json();
          if (!data.success || !data.movie) return null;

          return {
            id: data.movie.id.toString(),
            title: data.movie.title,
            posterPath: data.movie.posterPath
              ? `https://image.tmdb.org/t/p/w200${data.movie.posterPath}` // Image petite taille pour les miniatures
              : "/placeholder.jpg",
          };
        });

        // Attendre que toutes les requêtes soient terminées
        const results = await Promise.all(mediaPromises);
        // Filtrer les résultats null (films non trouvés) et mettre à jour l'état
        setFavoriteMedia(results.filter((m) => m !== null) as MediaItem[]);
      } catch (error) {
        console.error("Erreur récupération favoris:", error);
      }
    }

    fetchFavorites();
  }, [UserFavoritesIds]);

  return (
    // lien vers le profil de l'utilisateur
    <div
      onClick={() => router.push(`/profile/${Id}`)}
      className="flex flex-row gap-4 items-center p-4 bg-white/8 rounded-lg w-full cursor-pointer"
    >
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
        <div
          className="flex flex-row items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {favoriteMedia.map((media) => (
            <MediaVCard
              key={media.id}
              UrlImage={media.posterPath}
              Name={media.title}
              Id={media.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
