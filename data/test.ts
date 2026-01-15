export interface Media {
  id: number;
  afficheV: string;
  afficheH: string;
  background: string;
  title: string;
  description: string;
  année: number;
  recommandations: number;
  link: string;
  categorie: "Film" | "Série" | "Documentaire" | "Animation";

  // Pour les films
  realisateur?: string;
  durée?: number;

  // Pour les séries
  saisons?: number;
  épisode?: number;

  classification: string;
  note: number;
  noteTMDB: number;
  statut: "Disponible" | "Bientôt disponible" | "Indisponible";
  genres: string[];
  acteurs: string[];
}

export interface Plateforme {
  id: number;
  name: string;
  afficheH: string;
  link: string;
}

export interface Acteur {
  id: number;
  name: string;
  photo: string;
  biography: string;
  birthDate: string;
  placeOfBirth: string;
}

export const mediaData = [
  {
    id: 1,
    afficheV: "/test/afficheV-1.jpg",
    afficheH: "/test/afficheH-1.jpg",
    background: "/test/background-1.jpg",
    title: "Spider-Man : Homecoming",
    description:
      "Après ses spectaculaires débuts dans Captain America : Civil War, le jeune Peter Parker découvre peu à peu sa nouvelle identité, celle de Spider-Man, le super-héros lanceur de toile. Galvanisé par son expérience avec les Avengers, Peter rentre chez lui auprès de sa tante May, sous l’œil attentif de son nouveau mentor, Tony Stark. Il s’efforce de reprendre sa vie d’avant, mais au fond de lui, Peter rêve de se prouver qu’il est plus que le sympathique super héros du quartier. L’apparition d’un nouvel ennemi, le Vautour, va mettre en danger tout ce qui compte pour lui...",
    année: 2017,
    recommandations: 73,
    link: "https://example.com/media1",
    categorie: "Film",

    // -----
    realisateur: "Jon Watts",
    durée: 133,
    classification: "Tous publics",
    note: 8.5,
    noteTMDB: 7.3,
    statut: "Disponible",
    genres: ["Action", "Adventure", "Science Fiction"],

    // -----
    acteurs: ["Tom Holland", "Michael Kaeton", "Robert Downey Jr."],
  },
  {
    id: 2,
    afficheV: "/test/afficheV-1.jpg",
    afficheH: "/test/afficheH-1.jpg",
    background: "/test/background-1.jpg",
    title: "Joker",
    description:
      "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
    année: 2019,
    recommandations: 81,
    link: "https://example.com/media1",
    categorie: "Film",

    // -----
    realisateur: "Tood Phillips",
    durée: 122,
    classification: "12+",
    note: 7.9,
    noteTMDB: 8.1,
    statut: "Disponible",
    genres: ["Crime", "Thriller", "Drame"],

    // -----
    acteurs: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
  },
  {
    id: 3,
    afficheV: "/test/afficheV-1.jpg",
    afficheH: "/test/afficheH-1.jpg",
    background: "/test/background-1.jpg",
    title: "John Wick : Chapitre 4",
    description:
      "John Wick affronte ses adversaires les plus redoutables dans ce quatrième volet de la série. De New York à Osaka, en passant par Paris et Berlin, John Wick mène un combat contre la Grande Table, la terrible organisation criminelle qui a mis sa tête à prix, en affrontant ses tueurs les plus dangereux...",
    année: 2023,
    recommandations: 77,
    link: "https://example.com/media1",
    categorie: "Film",

    // -----
    realisateur: "Chand Stahelski",
    durée: 169,
    classification: "12+",
    note: 7,
    noteTMDB: 7.7,
    statut: "Disponible",
    genres: ["Action", "Thriller", "Crime"],

    // -----
    acteurs: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
  },
  {
    id: 4,
    afficheV: "/test/afficheV-1.jpg",
    afficheH: "/test/afficheH-1.jpg",
    background: "/test/background-1.jpg",
    title: "The Beekeeper",
    description:
      "La quête brutale de vengeance d’un homme prend des proportions démesurées alors que son passé d’agent secret d’une puissante organisation clandestine connue sous le nom des Apiculteurs est révélé.",
    année: 2024,
    recommandations: 73,
    link: "https://example.com/media1",
    categorie: "Film",

    // -----
    realisateur: "David Ayer",
    durée: 105,
    classification: "16+",
    note: 7,
    noteTMDB: 7.3,
    statut: "Disponible",
    genres: ["Action", "Thriller", "Crime"],

    // -----
    acteurs: ["Jason Statham", "Emmy Raver-Lampman", "Josh Hutcherson"],
  },
  {
    id: 5,
    afficheV: "/test/afficheV-1.jpg",
    afficheH: "/test/afficheH-1.jpg",
    background: "/test/background-1.jpg",
    title: "En plein vol",
    description:
      "Un pro du braquage tente le coup du siècle avec une équipe chevronnée : dérober 500 millions de dollars en or... dans un avion en plein vol !",
    année: 2024,
    recommandations: 64,
    link: "https://example.com/media1",
    categorie: "Film",

    // -----
    realisateur: "F.Gary Gray",
    durée: 104,
    classification: "13+",
    note: 5,
    noteTMDB: 6.4,
    statut: "Disponible",
    genres: ["Action", "Comédie", "Crime"],

    // -----
    acteurs: ["Kevin Hart", "Gugu Mbatha-Raw", "Sam Worthington"],
  },
  {
    id: 6,
    afficheV: "/test/afficheV-1.jpg",
    afficheH: "/test/afficheH-1.jpg",
    background: "/test/background-1.jpg",
    title: "Sinners",
    description:
      "Alors qu’ils cherchent à s’affranchir d’un lourd passé, deux frères jumeaux reviennent dans leur ville natale pour repartir à zéro. Mais ils comprennent qu’une puissance maléfique bien plus redoutable guette leur retour avec impatience.",
    année: 2025,
    recommandations: 75,
    link: "https://example.com/media1",
    categorie: "Film",

    // -----
    realisateur: "Ryan Coogler",
    durée: 138,
    classification: "12+",
    note: 7,
    noteTMDB: 7.5,
    statut: "Disponible",
    genres: ["Horreur", "Thriller", "Action"],

    // -----
    acteurs: ["Michael B. Jordan", "Hailee Steinfeld", "Miles Caton"],
  },
  {
    id: 7,
    afficheV: "/test/afficheV-1.jpg",
    afficheH: "/test/afficheH-1.jpg",
    background: "/test/background-1.jpg",
    title: "Le Monde incroyable de Gumball",
    description:
      "Le quotidien de Gumball, un chaton bleu âgé 12 ans, ainsi que son compagnon Darwin, un poisson rouge domestique, devenu son frère adoptif après que des bras et des jambes lui aient poussé. Gumball et sa famille vivent à Elmore, une ville imaginaire, semblant appartenir au monde réel, mais qui est habitée par toutes sortes de créatures animées.",
    année: 2011,
    recommandations: 85,
    link: "https://example.com/media1",
    categorie: "Série",

    // -----
    saisons: 8,
    épisode: 280,
    classification: "aucune",
    note: 8.1,
    noteTMDB: 8.5,
    statut: "Disponible",
    genres: [
      "Animation",
      "Comédie",
      "Familial",
      "Science Fiction & Fantastique",
    ],

    // -----
    acteurs: ["", "", ""],
  },
  {
    id: 8,
    afficheV: "/test/afficheV-1.jpg",
    afficheH: "/test/afficheH-1.jpg",
    background: "/test/background-1.jpg",
    title: "Stranger Things",
    description:
      "Quand un jeune garçon disparaît, une petite ville découvre une affaire mystérieuse, des expériences secrètes, des forces surnaturelles terrifiantes... et une fillette.",
    année: "2016",
    recommandations: "100",
    link: "https://example.com/media1",
    categorie: "Série",

    // -----
    saisons: 5,
    épisode: 42,
    classification: "16+",
    note: 8.5,
    noteTMDB: 8.6,
    statut: "Disponible",
    genres: ["Science Fiction & Fantastique", "Mystère", "Action & Aventure"],

    // -----
    acteurs: ["Winona Ryder", "David Harbour", "Millie Bobby Brown"],
  },
  {
    id: 9,
    afficheV: "/test/afficheV-1.jpg",
    afficheH: "/test/afficheH-1.jpg",
    background: "/test/background-1.jpg",
    title: "The Rookie : Le Flic de Los Angeles",
    description:
      "Lorsque sa femme le quitte et que son fils part à la fac, John Nolan, la quarantaine, est à un tournant de sa vie et décide de réaliser un vieux rêve : devenir flic ! Il part vivre à Los Angeles et se retrouve, malgré son âge, un bleu parmi les bleus...",
    année: "2018",
    recommandations: "85",
    link: "https://example.com/media1",
    categorie: "Série",

    // -----
    saisons: 8,
    épisode: 132,
    classification: "10+",
    note: 8,
    noteTMDB: 8.5,
    statut: "Disponible",
    genres: ["Crime", "Drame", "Comédie"],

    // -----
    acteurs: ["Nathan Fillion", "Melissa O'Neil", "Eric Winter"],
  },
];

export const plateformesData = [
  {
    id: 1,
    name: "Apple TV+",
    afficheH: "/test/plateformes/apple_tv.png",
    link: "https://platformA.com",
  },
  {
    id: 2,
    name: "DC Comics",
    afficheH: "/test/plateformes/dc_comics.png",
    link: "https://platformB.com",
  },
  {
    id: 3,
    name: "Disney+",
    afficheH: "/test/plateformes/disney_plus.png",
    link: "https://platformA.com",
  },
  {
    id: 4,
    name: "Marvel Studio",
    afficheH: "/test/plateformes/marvel_studio.png",
    link: "https://platformA.com",
  },
  {
    id: 5,
    name: "Netflix",
    afficheH: "/test/plateformes/netflix.png",
    link: "https://platformA.com",
  },
  {
    id: 6,
    name: "Paramount+",
    afficheH: "/test/plateformes/paramount_plus.png",
    link: "https://platformA.com",
  },
  {
    id: 7,
    name: "Prime Video",
    afficheH: "/test/plateformes/prime_video.png",
    link: "https://platformA.com",
  },
  {
    id: 8,
    name: "Warner Bros.",
    afficheH: "/test/plateformes/warner_bros.png",
    link: "https://platformA.com",
  },
];

export const acteursData = [
  {
    id: 1,
    name: "Tom Holland",
    photo:
      "https://media.themoviedb.org/t/p/w300_and_h450_face/mBGcYEyDjK8oBqvyKwBv0Y88jIe.jpg",
    biography:
      "Tom Holland, né le 1er juin 1996 à Londres, est un acteur et danseur britannique. Célèbre pour son rôle de Spider-Man dans l’univers Marvel, dès Captain America: Civil War (2016) et dans Spider-Man: No Way Home (2021), il séduit par son énergie et son agilité. Il débute sur scène dans Billy Elliot (2008-2010) à Londres. Au cinéma, il brille dans The Impossible (2012), In the Heart of the Sea (2015) et Uncharted (2022). En 2023, il joue dans la série The Crowded Room. Formé à la BRIT School, Holland est aussi producteur et soutient des œuvres caritatives. En couple avec Zendaya, il est une star montante d’Hollywood.",
    birthDate: "1 juin 1996",
    placeOfBirth: "Surrey, England, UK",
  },
];
