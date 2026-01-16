"use client";
import { useParams } from "next/navigation";

import {
  ButtonViewMedia,
  ButtonViewMediaSteam,
} from "@/components/button/ButtonViewMedia";
import Header from "@/components/navbar/Header";
import { allMedia, Film, Serie, acteursData } from "@/data/test";
import {
  ListChecks,
  NotebookPen,
  Share2,
  Star,
  TicketCheck,
  TriangleAlert,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ViewMedia() {
  const params = useParams();

  // 1. Correction : On garde l'ID en string tel qu'il est dans tes données ("f1", "s1")
  const MediaId = params.id as string;

  // 2. Correction : On cherche avec .id (minuscule)
  const media = allMedia.find((m) => m.id === MediaId);

  if (!media) {
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

  const isFilm = media.categorie === "Film";

  const filmData = media as Film;
  const serieData = media as Serie;

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-center p-10 gap-10 pt-25 relative">
        {/* Image de fond avec flou */}
        <Image
          src={media.afficheH}
          alt={`Banniere ${media.title}`}
          fill
          className="absolute inset-0 object-cover opacity-40 blur-[2px]"
        />

        {/* Page contenaire avec les infos du média */}
        <div className="w-full flex-1 flex flex-row gap-10 h-full z-10 text-white">
          {/* Affiche du média */}
          <div className=" w-137.5 relative rounded-lg shrink-0 ">
            <Image
              src={media.afficheV}
              alt={`Affiche de ${media.title}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Infos du média */}
          <div className="flex flex-col gap-6 ">
            {/* Nom du média */}
            <h1 className="text-2xl font-bold uppercase">
              {media.title} ({media.année})
            </h1>

            {/* Synopsis (Résumé du média) */}
            <InfosMedia title="Synopsis">
              <p className="text-[#D1D5DB] font-regular text-base">
                {media.description}
              </p>
            </InfosMedia>

            {/* Informations rapides dans un tableau */}
            <div className="grid grid-cols-3 gap-4">
              {isFilm && (
                <>
                  <InfosMedia title="Réalisateur">
                    <InfosText text={filmData.realisateur} />
                  </InfosMedia>

                  <InfosMedia title="Durée">
                    <InfosText text={`${filmData.durée} min`} />
                  </InfosMedia>
                </>
              )}

              {!isFilm && (
                <>
                  <InfosMedia title="Saisons">
                    <InfosText text={serieData.saisons} />
                  </InfosMedia>

                  <InfosMedia title="Épisodes">
                    <InfosText text={serieData.épisode} />
                  </InfosMedia>
                </>
              )}

              <InfosMedia title="Année">
                <InfosText text={media.année} />
              </InfosMedia>

              <InfosMedia title="Classification">
                <InfosText text={media.classification} />
              </InfosMedia>

              <InfosMedia title="Note Absolute Stream">
                <InfosText text={`${media.note}/10`} />
              </InfosMedia>

              <InfosMedia title="Note">
                <InfosText text={`${media.noteTMDB}/10`} />
              </InfosMedia>

              <InfosMedia title="Statut">
                <InfosText text={media.statut} />
              </InfosMedia>
            </div>

            {/* Genres du média */}
            <InfosMedia title="Genres">
              <div className="flex flex-row gap-2">
                {media.genres.map((genre) => (
                  <button
                    key={genre}
                    className="px-4 py-2 bg-[#FFFFFF]/10 rounded-md inline-block"
                  >
                    <p className="text-[#D1D5DB] font-regular text-sm">
                      {genre}
                    </p>
                  </button>
                ))}
              </div>
            </InfosMedia>

            {/* Acteurs du média */}
            <InfosMedia title="Acteurs principaux">
              <div className="grid grid-cols-3 gap-4">
                {/* 1. On vérifie si media.acteurs existe et n'est pas vide */}
                {media.acteurs && media.acteurs.length > 0 ? (
                  media.acteurs.map((acteur) => (
                    <Link
                      href={"#"}
                      key={acteur.id}
                      className="px-4 py-2 bg-[#FFFFFF]/10 rounded-md flex flex-row items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full relative">
                        <Image
                          src={
                            acteursData.find((a) => a.id === acteur.id)
                              ?.photo || "/placeholder_actor.png"
                          }
                          alt={acteur.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="text-white font-medium text-base">
                          {acteur.name}
                        </p>
                        <p className="text-[#D1D5DB] font-regular text-sm">
                          {acteur.role}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  /* 3. Message si aucun acteur n'est renseigné (ex: Gumball) */
                  <p className="text-[#D1D5DB] italic text-sm col-span-3">
                    Information sur les acteurs non disponible pour ce média.
                  </p>
                )}
              </div>
            </InfosMedia>

            {/* Avertisement sur la source des informations */}
            <div className="flex flex-row items-center justify-start px-4 py-2 bg-stream/30 border border-stream rounded-[10px] gap-4">
              <TriangleAlert className="text-stream" />
              <p className="text-white font-regular text-sm">
                Les infos proviennent de la base de données publique{" "}
                <a href="https://www.themoviedb.org/" className="text-stream">
                  TMDB
                </a>
                .<br></br> Il peut y avoir des erreurs ou des différences de
                dates de sortie selon le pays (ex: pas la même date en France
                qu&apos;en Amérique).
              </p>
            </div>

            {/* Actions possibles sur le média */}
            <InfosMedia title="Actions possibles">
              <div className="flex flex-row gap-2">
                {/* Importation du composant ButtonViewMedia avec ses variantes */}
                <ButtonViewMediaSteam text="Bande annonce">
                  <Video />
                </ButtonViewMediaSteam>

                <ButtonViewMedia text="Mettre une note">
                  <NotebookPen />
                </ButtonViewMedia>

                <ButtonViewMedia text="Ajouter au favoris">
                  <Star />
                </ButtonViewMedia>

                <ButtonViewMedia text="Ajouter à une liste">
                  <ListChecks />
                </ButtonViewMedia>

                <ButtonViewMedia text="Déjà vu">
                  <TicketCheck />
                </ButtonViewMedia>

                <ButtonViewMedia text="Partager">
                  <Share2 />
                </ButtonViewMedia>
              </div>
            </InfosMedia>
          </div>
        </div>
      </main>
    </div>
  );
}

// Creation dun mini composants pour les infos rapides
export function InfosMedia({
  title,

  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-lg font-semibold ">{title}</h3>
      {children}
    </div>
  );
}

// Creation dun mini composants pour garder le meme syles sur les infos
export function InfosText({ text }: { text: string | number | undefined }) {
  return <p className="text-[#D1D5DB] font-regular text-base">{text}</p>;
}
