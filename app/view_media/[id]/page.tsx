import Header from "@/components/navbar/Header";
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
import { Button } from "@/components/ui/Button";

interface Actor {
  id: number;
  name: string;
  character: string;
  profilePath: string | null;
}

interface MediaDetails {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  voteAverage: number;
  runtime?: number;
  genres: { id: number; name: string }[];
  cast?: Actor[];
}

// Fonction pour récupérer les détails d'un film depuis l'API TMDB
// Cette fonction est appelée côté serveur (Server Component)
async function getMediaDetails(id: string): Promise<MediaDetails | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/tmdb/movie/${id}`, {
      cache: "no-store", // Désactiver le cache pour avoir toujours les données à jour
    });

    if (!response.ok) return null;

    const data = await response.json();
    return data.success ? data.movie : null;
  } catch (error) {
    console.error("Erreur récupération média:", error);
    return null;
  }
}

export default async function ViewMedia({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const mediaData = await getMediaDetails(id);

  if (!mediaData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Média non trouvé</h1>
          <Link href="/movies" className="text-stream underline">
            Retour aux films
          </Link>
        </div>
      </div>
    );
  }

  const posterUrl = mediaData.posterPath
    ? `https://image.tmdb.org/t/p/w500${mediaData.posterPath}`
    : "/placeholder.jpg";
  const backdropUrl = mediaData.backdropPath
    ? `https://image.tmdb.org/t/p/original${mediaData.backdropPath}`
    : "/placeholder.jpg";
  const releaseYear = mediaData.releaseDate
    ? new Date(mediaData.releaseDate).getFullYear()
    : "N/A";

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-center p-10 gap-10 pt-25 relative">
        {/* Image de fond avec flou */}
        <Image
          src={backdropUrl}
          alt={`Banniere ${mediaData.title}`}
          fill
          className="absolute inset-0 object-cover opacity-40 blur-[2px]"
        />

        {/* Page contenaire avec les infos du média */}
        <div className="w-full flex-1 flex flex-row gap-10 h-full z-10 text-white">
          {/* Affiche du média */}
          <div className=" w-137.5 relative rounded-lg shrink-0 ">
            <Image
              src={posterUrl}
              alt={`Affiche de ${mediaData.title}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Infos du média */}
          <div className="flex flex-col gap-6 ">
            {/* Nom du média */}
            <h1 className="text-2xl font-bold uppercase">
              {mediaData.title} ({releaseYear})
            </h1>

            {/* Synopsis (Résumé du média) */}
            <InfosMedia title="Synopsis">
              <p className="text-[#D1D5DB] font-regular text-base">
                {mediaData.overview || "Aucune description disponible."}
              </p>
            </InfosMedia>

            {/* Informations rapides dans un tableau */}
            <div className="grid grid-cols-3 gap-4">
              {mediaData.runtime && (
                <InfosMedia title="Durée">
                  <InfosText text={`${mediaData.runtime} min`} />
                </InfosMedia>
              )}

              <InfosMedia title="Année">
                <InfosText text={releaseYear} />
              </InfosMedia>

              <InfosMedia title="Note TMDB">
                <InfosText text={`${mediaData.voteAverage.toFixed(1)}/10`} />
              </InfosMedia>

              <InfosMedia title="Date de sortie">
                <InfosText
                  text={
                    mediaData.releaseDate
                      ? new Date(mediaData.releaseDate).toLocaleDateString(
                          "fr-FR",
                        )
                      : "N/A"
                  }
                />
              </InfosMedia>
            </div>

            {/* Genres du média */}
            <InfosMedia title="Genres">
              <div className="flex flex-row gap-2 flex-wrap">
                {mediaData.genres.map((genre) => (
                  <Button key={genre.id} className="text-[#D1D5DB]">
                    {genre.name}
                  </Button>
                ))}
              </div>
            </InfosMedia>

            {/* Acteurs du média */}
            <InfosMedia title="Acteurs principaux">
              {mediaData.cast && mediaData.cast.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {mediaData.cast.map((actor) => (
                    <div
                      key={actor.id}
                      className="flex items-center gap-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={
                            actor.profilePath
                              ? `https://image.tmdb.org/t/p/w185${actor.profilePath}`
                              : "/placeholder_actor.png"
                          }
                          alt={actor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start min-w-0">
                        <p className="text-white font-medium text-base truncate w-full">
                          {actor.name}
                        </p>
                        <p className="text-[#D1D5DB] font-regular text-sm truncate w-full">
                          {actor.character}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#D1D5DB] italic text-sm">
                  Information sur les acteurs non disponible.
                </p>
              )}
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
                {/* Importation du composant Button avec ses variantes */}

                <Button variant="stream">
                  <Video />
                  Bande annonce
                </Button>

                <Button>
                  <NotebookPen />
                  Mettre une note
                </Button>

                <Button>
                  <Star />
                  Ajouter au favoris
                </Button>

                <Button>
                  <ListChecks />
                  Ajouter à une liste
                </Button>

                <Button>
                  <TicketCheck />
                  Déjà vu
                </Button>

                <Button>
                  <Share2 />
                  Partager
                </Button>
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
