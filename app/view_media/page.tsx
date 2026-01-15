import {
  ButtonViewMedia,
  ButtonViewMediaSteam,
} from "@/components/button/ButtonViewMedia";
import Header from "@/components/navbar/Header";
import { films } from "@/data/test";
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

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-center p-10 gap-10 pt-25 relative">
        {/* Image de fond avec flou */}
        <Image
          src={films[3].afficheH}
          alt={`Banniere ${films[3].title}`}
          fill
          className="absolute inset-0 object-cover opacity-40 blur-[2px]"
        />

        {/* Page contenaire avec les infos du média */}
        <div className="w-full flex-1 flex flex-row gap-10 h-full z-10 text-white">
          {/* Affiche du média */}
          <div className=" w-[35%] relative rounded-lg ">
            <Image
              src={films[3].afficheV}
              alt={`Affiche de ${films[3].title}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Infos du média */}
          <div className="flex flex-col gap-6">
            {/* Nom du média */}
            <h1 className="text-2xl font-bold uppercase">
              {films[3].title} ({films[3].année})
            </h1>

            {/* Synopsis (Résumé du média) */}
            <InfosMedia title="Synopsis">
              <p className="text-[#D1D5DB] font-regular text-base">
                {films[3].description}
              </p>
            </InfosMedia>

            {/* Informations rapides dans un tableau */}
            <div className="grid grid-cols-3 gap-4">
              <InfosMedia title="Réalisateur">
                <InfosText text={films[3].realisateur} />
              </InfosMedia>
              <InfosMedia title="Durée">
                <InfosText text={films[3].durée} />
              </InfosMedia>
              <InfosMedia title="Année">
                <InfosText text={films[3].année} />
              </InfosMedia>
              <InfosMedia title="Classification">
                <InfosText text={films[3].classification} />
              </InfosMedia>
              <InfosMedia title="Note Absolute Stream">
                <InfosText text={`${films[3].note}/10`} />
              </InfosMedia>
              <InfosMedia title="Note">
                <InfosText text={`${films[3].noteTMDB}/10`} />
              </InfosMedia>
              <InfosMedia title="Statut">
                <InfosText text={films[3].statut} />
              </InfosMedia>
            </div>

            {/* Genres du média */}
            <InfosMedia title="Genres">
              <div className="flex flex-row gap-2">
                {films[3].genres.map((genre) => (
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
            <InfosMedia title="Genres">
              <div className="grid grid-cols-3 gap-4">
                {films[3].acteurs.map((acteur) => (
                  <button
                    key={acteur.acteur}
                    className="px-4 py-2 bg-[#FFFFFF]/10 rounded-md flex flex-row items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full relative">
                      <Image
                        src={acteur.photo || "/placeholder_actor.png"}
                        alt={acteur.acteur}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-white font-medium text-base">
                        {acteur.acteur}
                      </p>
                      <p className="text-[#D1D5DB] font-regular text-sm">
                        {acteur.role}
                      </p>
                    </div>
                  </button>
                ))}
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
