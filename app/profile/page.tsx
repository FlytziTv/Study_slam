"use client";

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

import { allMedia } from "@/data/test";

export default function Profile() {
  const fake_users = {
    username: "Flytzi",
    avatarUrl: "https://avatars.githubusercontent.com/u/150966588?v=4",
    bannerUrl: "/test/background-4.jpg",
    createdAt: "janvier 2023",
    stats: [
      {
        label: "Notes moyennes",
        value: 8.4,
      },
      {
        label: "Films regardés",
        value: 124,
      },
      {
        label: "Séries regardées",
        value: 32,
      },
      {
        label: "Heures regardées",
        value: 256,
      },
      {
        label: "Nombre de favoris",
        value: 45,
      },
    ],
    infos: {
      watchlist: 42,
      favoris: 45,
      vus: 124,
      enCours: 7,
      listes: 5,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-center  pt-15 relative">
        {/* Bannière et contenu du profil */}
        <div className="w-full flex flex-row gap-10 relative px-20 py-10">
          {/* Bannière de fond avec flou */}
          <Image
            src={fake_users.bannerUrl}
            alt={`Bannière de ${fake_users.username}`}
            fill
            className="inset-0 object-cover opacity-30 blur-[2px] select-none pointer-events-none"
          />

          {/* Contenu du profil */}
          <div className="relative w-40 h-40 shrink-0">
            {/* Photo de profile */}
            <Image
              src={fake_users.avatarUrl}
              alt={`Photo de profil ${fake_users.username}`}
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
              <h1 className="text-4xl font-bold text-white">
                {fake_users.username}
              </h1>
              {/* Date d'inscription */}
              <p className="text-[#A1A1A1] font-regular text-base">
                est membre depuis {fake_users.createdAt}
              </p>
            </div>
            {/* Statistiques utilisateur */}
            <div className="flex flex-row gap-4 items-center">
              {fake_users.stats.map((stat) => (
                <div
                  key={stat.label}
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
            text={`Ma Watchlist ( ${fake_users.infos.watchlist} )`}
          >
            <Film />
          </ButtonViewMediaSteam>
          <ButtonViewMedia text={`Mes Favoris ( ${fake_users.infos.favoris} )`}>
            <Star />
          </ButtonViewMedia>
          <ButtonViewMedia text={`Mes Vus ( ${fake_users.infos.vus} )`}>
            <TicketCheck />
          </ButtonViewMedia>
          <ButtonViewMedia text={`En Cours ( ${fake_users.infos.enCours} )`}>
            <Clock4 />
          </ButtonViewMedia>
          <ButtonViewMedia text={`Mes Listes ( ${fake_users.infos.listes} )`}>
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
          <div className=" flex flex-row gap-2 flex-wrap">
            {allMedia.map((media) => (
              <MediaCard
                key={media.id}
                UrlImage={media.afficheH}
                Name={media.title}
                Reco={media.recommandations}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
