"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Définition du type MediaItem
interface MediaItem {
  id: string;
  background: string;
  logo: string;
  title: string;
  description: string;
}

export default function BannerMedia({ data }: { data: MediaItem[] }) {
  // gestion de l'index pour changer de média toutes les 10 secondes
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect pour changer de média toutes les 10 secondes
  useEffect(() => {
    // On vérifie que data existe et n'est pas vide
    if (!data || data.length === 0) return;

    // changement de l'index toutes les 10 secondes
    const interval = setInterval(() => {
      // si on arrive à la fin du tableau, on revient au début
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);

    // nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [data]);

  // Si pas de données, on affiche rien ou un squelette
  if (!data || data.length === 0) return null;

  // récupération du média actuel
  const media = data[currentIndex];

  // creation du variable maxChar qui recupere la description du media et la raccourci si elle depasse 232 caracteres
  const maxChar =
    // si la description depasse 232 caracteres, on la coupe et on ajoute "..." a la fin
    media.description.length > 232
      ? media.description.substring(0, 232) + "..."
      : media.description;

  return (
    // taille de la banniere
    <div className="relative w-full h-162.5">
      <div className="relative w-full h-162.5">
        {/* Image de la banniere (Background) */}
        <Image
          src={media.background}
          alt={media.background}
          fill
          className="object-cover object-top"
          priority
        />
        {/* degrader pour avoir un meilleur contraste (transition en bas de l'image) */}
        <div className=" absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Information rapide sur le média */}
      <div className="absolute bottom-10 left-10 z-10 text-white w-175 flex flex-col gap-4">
        {/* logo du média */}
        <Image src={media.logo} alt={media.title} width={450} height={450} />
        {/* description du média (raccourci une certaine longueur) */}
        <p className="font-light text-base description-banner">{maxChar}</p>
        {/* Boutons d'actions */}
        <div className="flex gap-4">
          <button className="flex flex-row items-center justify-center px-4 py-2 bg-[#FFFFFF] hover:bg-[#d1d1d1] border border-transparent rounded-lg gap-2 transition-all [&_svg:not([class*='size-'])]:size-4.5 [&_svg]:shrink-0 ">
            <Play className="text-black" />
            <p className="text-black font-regular text-base">
              Voir la bande-annonce
            </p>
          </button>

          <Link
            href={`/view_media/${media.id}`}
            className="group flex flex-row items-center justify-center px-4 py-2 bg-black/50 hover:bg-white border border-white rounded-lg gap-2 transition-all duration-200 [&_svg:not([class*='size-'])]:size-4.5 [&_svg]:shrink-0 "
          >
            <p className="text-white font-regular text-base group-hover:text-black">
              En savoir plus
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
