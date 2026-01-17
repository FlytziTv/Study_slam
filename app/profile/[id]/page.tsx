"use client";
import { useParams } from "next/navigation";

import { allMedia } from "@/data/test";
import {
  ButtonViewMedia,
  ButtonViewMediaSteam,
} from "@/components/button/ButtonViewMedia";
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

export default function Profile() {
  const params = useParams();

  // On récupère l'ID de l'URL (ex: "1" pour Chaïna92i)
  const userId = parseInt(params.id as string);

  // On cherche l'utilisateur correspondant dans les données
  const user = users.find((u) => u.id === userId);

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
          <ButtonViewMediaSteam
            text={`Ma Watchlist ( ${user.infos.watchlist} )`}
          >
            <Film />
          </ButtonViewMediaSteam>
          <ButtonViewMedia text={`Mes Favoris ( ${user.infos.favoris} )`}>
            <Star />
          </ButtonViewMedia>
          <ButtonViewMedia text={`Mes Vus ( ${user.infos.vus} )`}>
            <TicketCheck />
          </ButtonViewMedia>
          <ButtonViewMedia text={`En Cours ( ${user.infos.enCours} )`}>
            <Clock4 />
          </ButtonViewMedia>
          <ButtonViewMedia text={`Mes Listes ( ${user.infos.listes} )`}>
            <ListChecks />
          </ButtonViewMedia>
        </div>

        {/* listes des médias */}
        <div className="flex flex-col gap-10 w-full p-10 pt-4">
          {/* menu de filtres */}
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-white font-bold text-2xl">
              Film et séries dans la watchlist
            </h2>
            <div className="flex flex-row gap-4">
              {/* Input rechercher */}
              <div className="relative ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4.5" />
                <input
                  type="text"
                  placeholder="Rechercher par nom..."
                  className="text-white pl-10 px-4 py-2 bg-[#FFFFFF]/10 rounded-md w-90 font-regular text-sm"
                />
              </div>

              {/* Bouton de filtre */}
              <ButtonViewMediaSteam text="Tous"></ButtonViewMediaSteam>
              <ButtonViewMedia text="Films">
                <Film />
              </ButtonViewMedia>
              <ButtonViewMedia text="Séries">
                <Tv />
              </ButtonViewMedia>
              <ButtonViewMedia text="Collections">
                <FolderOpen />
              </ButtonViewMedia>

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
            {user.favoritesMedia?.map((mediaId) => {
              // On cherche le média complet dans allMedia
              const media = allMedia.find((m) => m.id === mediaId);

              // Sécurité si l'ID ne correspond à rien
              if (!media) return null;

              return (
                <MediaCard
                  key={media.id}
                  Id={media.id} // N'oublie pas de passer l'ID pour le Link interne de MediaCard
                  UrlImage={media.afficheH} // Ou afficheV selon ton choix de design
                  Name={media.title}
                  Reco={media.recommandations}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
