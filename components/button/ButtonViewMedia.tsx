// Creation d'un Components bouton pour visualiser les médias avec icône et texte
export function ButtonViewMedia({
  children,
  text,
}: {
  children?: React.ReactNode;
  text: string;
}) {
  return (
    <button className="flex flex-row items-center justify-center px-4 py-2 bg-[#FFFFFF]/10 rounded-md gap-2 transition-all [&_svg:not([class*='size-'])]:size-4.5 [&_svg]:shrink-0 ">
      {children}
      <p className="text-white font-regular text-sm">{text}</p>
    </button>
  );
}

// Creation d'un Components bouton pour visualiser les médias avec icône et texte, spécifique à Steam (couleurs du background)
export function ButtonViewMediaSteam({
  children,
  text,
}: {
  children?: React.ReactNode;
  text: string;
}) {
  return (
    <button className="flex flex-row items-center justify-center px-4 py-2 bg-stream rounded-md gap-2 transition-all [&_svg:not([class*='size-'])]:size-4.5 [&_svg]:shrink-0 ">
      {children}
      <p className="text-white font-regular text-sm">{text}</p>
    </button>
  );
}
