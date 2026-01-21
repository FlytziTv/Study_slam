"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import MediaCard from "@/components/card/MediaCard";
import Header from "@/components/navbar/Header";
import {
  ChevronDown,
  Clock4,
  Film,
  FolderOpen,
  ListChecks,
  Search,
  Star,
  TicketCheck,
  Tv,
} from "lucide-react";
// import { Camera } from "lucide-react";
import Image from "next/image";

import { users } from "@/data/test";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface MediaItem {
  id: string;
  title: string;
  afficheH: string;
  recommandations: number;
}

export default function Profile() {
  const params = useParams();
  // État pour stocker les médias favoris de l'utilisateur
  const [favoriteMedia, setFavoriteMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Récupérer l'ID de l'utilisateur depuis l'URL (ex: /profile/1)
  const userId = parseInt(params.id as string);

  // Chercher l'utilisateur dans les données locales
  const user = users.find((u) => u.id === userId);

  // Effect pour charger les films favoris depuis l'API TMDB au chargement de la page
  useEffect(() => {
    async function fetchFavorites() {
      if (!user || !user.favoritesMedia) {
        setLoading(false);
        return;
      }

      try {
        // Créer une promesse pour chaque ID de film favori
        // Les IDs sont maintenant des IDs TMDB (ex: "550" pour Fight Club)
        const mediaPromises = user.favoritesMedia.map(async (mediaId) => {
          const response = await fetch(`/api/tmdb/movie/${mediaId}`);
          if (!response.ok) return null;
          const data = await response.json();
          if (!data.success || !data.movie) return null;

          // Transformer les données pour correspondre à notre interface
          return {
            id: data.movie.id.toString(),
            title: data.movie.title,
            afficheH: data.movie.backdropPath
              ? `https://image.tmdb.org/t/p/w780${data.movie.backdropPath}`
              : "/placeholder.jpg",
            recommandations: Math.round(data.movie.voteAverage * 10),
          };
        });

        // Attendre que tous les films soient récupérés en parallèle
        const results = await Promise.all(mediaPromises);
        // Filtrer les films non trouvés (null)
        setFavoriteMedia(results.filter((m) => m !== null) as MediaItem[]);
      } catch (error) {
        console.error("Erreur récupération favoris:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Média non trouvé</h1>
          <Link href="/" className="text-stream underline">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />

      <main
        key={user.id}
        className="flex min-h-screen w-full flex-col items-center  pt-15 relative"
      >
        {/* Bannière et contenu du profil */}
        <div className="w-full flex flex-row gap-10 relative px-20 py-10">
          {/* Bannière de fond avec flou */}
          {user.bannerUrl && (
            <Image
              src={user.bannerUrl}
              alt={`Bannière de ${user.name}`}
              fill
              className="inset-0 object-cover opacity-30 blur-[2px] select-none pointer-events-none"
            />
          )}

          {/* Contenu du profil */}
          <div className="relative w-40 h-40 shrink-0">
            {/* Photo de profile */}
            <Image
              src={user.avatarUrl}
              alt={`Photo de profil ${user.name}`}
              fill
              className="rounded-full border-2 border-stream object-cover select-none pointer-events-none"
            />
            {/* Icon pour changer la photo de profil si cest son profil */}

            {/* <div className="p-2.5 rounded-full bg-stream absolute bottom-1 right-2 cursor-pointer">
              <Camera size={20} />
            </div> */}
          </div>
          <div className="relative flex flex-col w-full gap-4 justify-center">
            <div className="flex flex-col">
              {/* Nom d'utilisateur */}
              <h1 className="text-4xl font-bold text-white">{user.name}</h1>
              {/* Date d'inscription */}
              <p className="text-[#A1A1A1] font-regular text-base">
                est membre depuis {user.createdAt}
              </p>
            </div>

            {/* Statistiques utilisateur */}
            <div className="flex flex-row gap-4 items-center">
              {user.StatsProfile.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-[#FFFFFF]/10 rounded-lg py-2 w-full"
                >
                  <span className="text-stream font-semibold text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-white font-regular text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* menu choix des listes */}
        <div className="border-y border-[#262626] w-full py-4 flex flex-row gap-4 items-center justify-center">
          <Button variant="stream">
            <Film />
            Ma Watchlist ( {user.infos.watchlist} )
          </Button>
          <Button>
            <Star />
            Mes Favoris ( {user.infos.favoris} )
          </Button>
          <Button>
            <TicketCheck />
            Mes Vus ( {user.infos.vus} )
          </Button>
          <Button>
            <Clock4 />
            En Cours ( {user.infos.enCours} )
          </Button>
          <Button>
            <ListChecks />
            Mes Listes ( {user.infos.listes} )
          </Button>
        </div>

        {/* listes des médias */}
        <div className="flex flex-col gap-10 w-full p-10 pt-4">
          {/* menu de filtres */}
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-white font-bold text-2xl">
              Film et séries dans la watchlist
            </h2>
            <div className="flex flex-row gap-2">
              {/* Input rechercher */}
              <div className="relative ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4.5" />
                <Input
                  type="text"
                  placeholder="Rechercher par nom..."
                  className="pl-10 w-90 "
                />
              </div>

              {/* Bouton de filtre */}
              <Button variant="stream">Tous</Button>

              <Button>
                <Film />
                Films
              </Button>

              <Button>
                <Tv />
                Séries
              </Button>

              <Button>
                <FolderOpen />
                Collections
              </Button>

              {/* Drop Menu */}
              <button className="flex flex-row items-center justify-center px-4 py-2 bg-[#FFFFFF]/10 rounded-md gap-4 transition-all [&_svg:not([class*='size-'])]:size-4.5 [&_svg]:shrink-0 ">
                <p className="text-white font-regular text-sm">
                  Date d&apos;ajout
                </p>
                <ChevronDown />
              </button>
            </div>
          </div>

          {/* Affichage des médias de la watchlist */}
          <div className="flex flex-row gap-4 flex-wrap">
            {loading ? (
              <p className="text-white">Chargement...</p>
            ) : favoriteMedia.length > 0 ? (
              favoriteMedia.map((media) => (
                <MediaCard
                  key={media.id}
                  Id={media.id}
                  UrlImage={media.afficheH}
                  Name={media.title}
                  Reco={media.recommandations}
                />
              ))
            ) : (
              <p className="text-white/50">Aucun média dans la watchlist</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
