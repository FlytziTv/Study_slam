// Base commune à tous les médias
interface Media {
  id: string; // Changé en string car tu utilises "f1", "s1"
  afficheV: string;
  afficheH: string;
  background: string;
  title: string;
  description: string;
  année: number;
  recommandations: number;
  link: string;
  categorie: "Film" | "Série" | "Documentaire" | "Animation";
  classification: string;
  note: number;
  noteTMDB: number;
  statut: "Disponible" | "Bientôt disponible" | "Indisponible";
  genres: string[];
}

// Spécifique aux Films
export interface Film extends Media {
  realisateur: string;
  durée: number;
  acteurs: { acteur: string; role: string; photo?: string | undefined }[];
}

// Spécifique aux Séries
export interface Serie extends Media {
  saisons: number;
  épisode: number;
  acteurs: { acteur: string; role: string }[] | string[]; // Pour accepter tes deux formats
}

// Définitions des types pour les plateformes et acteurs
export interface Plateforme {
  id: number;
  name: string;
  afficheH: string;
  link: string;
}

// Définitions des types pour les acteurs
export interface Acteur {
  id: number;
  name: string;
  photo: string;
  biography: string;
  birthDate: string;
  placeOfBirth: string;
}

// fausse liste de films pour faire les tests visuel sans avoir besoin de l'API
export const films: Film[] = [
  {
    id: "f1",
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
    acteurs: [
      { acteur: "Tom Holland", role: "Peter Parker / Spider-Man" },
      { acteur: "Michael Kaeton", role: "Adrian Toomes / Vulture" },
      { acteur: "Robert Downey Jr.", role: "Tony Stark / Iron Man" },
    ],
  },
  {
    id: "f2",
    afficheV: "/test/afficheV-2.jpg",
    afficheH: "/test/afficheH-2.jpg",
    background: "/test/background-2.jpg",
    title: "Joker",
    description:
      "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
    année: 2019,
    recommandations: 81,
    link: "https://example.com/media2",
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
    acteurs: [
      { acteur: "Joaquin Phoenix", role: "Arthur Fleck / Joker" },
      { acteur: "Robert De Niro", role: "Murray Franklin" },
      { acteur: "Zazie Beetz", role: "Sophie Dumond" },
    ],
  },
  {
    id: "f3",
    afficheV: "/test/afficheV-3.jpg",
    afficheH: "/test/afficheH-3.jpg",
    background: "/test/background-3.jpg",
    title: "John Wick : Chapitre 4",
    description:
      "John Wick affronte ses adversaires les plus redoutables dans ce quatrième volet de la série. De New York à Osaka, en passant par Paris et Berlin, John Wick mène un combat contre la Grande Table, la terrible organisation criminelle qui a mis sa tête à prix, en affrontant ses tueurs les plus dangereux...",
    année: 2023,
    recommandations: 77,
    link: "https://example.com/media3",
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
    acteurs: [
      { acteur: "Keanu Reeves", role: "John Wick" },
      { acteur: "Donnie Yen", role: "Caine" },
      { acteur: "Bill Skarsgård", role: "Marquis" },
    ],
  },
  {
    id: "f4",
    afficheV: "/test/afficheV-4.jpg",
    afficheH: "/test/afficheH-4.jpg",
    background: "/test/background-4.jpg",
    title: "The Beekeeper",
    description:
      "La quête brutale de vengeance d’un homme prend des proportions démesurées alors que son passé d’agent secret d’une puissante organisation clandestine connue sous le nom des Apiculteurs est révélé.",
    année: 2024,
    recommandations: 73,
    link: "https://example.com/media4",
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
    acteurs: [
      {
        acteur: "Jason Statham",
        role: "Adam Clay",
        photo:
          "https://image.tmdb.org/t/p/w500/o7sfT7EBtzxwiJiKmCafoebJQ2q.jpg",
      },
      {
        acteur: "Emmy Raver-Lampman",
        role: "Agent Verona Parker",
        photo:
          "https://image.tmdb.org/t/p/w500/cBkHUBzqoqrnkxDXWlqQmm91pD2.jpg",
      },
      {
        acteur: "Josh Hutcherson",
        role: "Derek Danforth",
        photo:
          "https://image.tmdb.org/t/p/w500/f0eosZ1Fx0VBUyspq8K2f8sUSBn.jpg",
      },
    ],
  },
  {
    id: "f5",
    afficheV: "/test/afficheV-5.jpg",
    afficheH: "/test/afficheH-5.jpg",
    background: "/test/background-5.jpg",
    title: "En plein vol",
    description:
      "Un pro du braquage tente le coup du siècle avec une équipe chevronnée : dérober 500 millions de dollars en or... dans un avion en plein vol !",
    année: 2024,
    recommandations: 64,
    link: "https://example.com/media5",
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
    acteurs: [
      { acteur: "Kevin Hart", role: "Cyrus Whitaker" },
      { acteur: "Gugu Mbatha-Raw", role: "Abby Gladwell" },
      { acteur: "Sam Worthington", role: "Dennis Huxley" },
    ],
  },
  {
    id: "f6",
    afficheV: "/test/afficheV-6.jpg",
    afficheH: "/test/afficheH-6.jpg",
    background: "/test/background-6.jpg",
    title: "Sinners",
    description:
      "Alors qu’ils cherchent à s’affranchir d’un lourd passé, deux frères jumeaux reviennent dans leur ville natale pour repartir à zéro. Mais ils comprennent qu’une puissance maléfique bien plus redoutable guette leur retour avec impatience.",
    année: 2025,
    recommandations: 75,
    link: "https://example.com/media6",
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
    acteurs: [
      { acteur: "Michael B. Jordan", role: "Smoke / Stack" },
      { acteur: "Hailee Steinfeld", role: "Mary" },
      { acteur: "Miles Caton", role: "Sammie Moore" },
    ],
  },
];

// fausse liste de séries pour faire les tests visuel sans avoir besoin de l'API
export const series: Serie[] = [
  {
    id: "s1",
    afficheV: "/test/afficheV-7.jpg",
    afficheH: "/test/afficheH-7.jpg",
    background: "/test/background-7.jpg",
    title: "Le Monde incroyable de Gumball",
    description:
      "Le quotidien de Gumball, un chaton bleu âgé 12 ans, ainsi que son compagnon Darwin, un poisson rouge domestique, devenu son frère adoptif après que des bras et des jambes lui aient poussé. Gumball et sa famille vivent à Elmore, une ville imaginaire, semblant appartenir au monde réel, mais qui est habitée par toutes sortes de créatures animées.",
    année: 2011,
    recommandations: 85,
    link: "https://example.com/media7",
    categorie: "Série",

    // -----
    saisons: 2,
    épisode: 280,

    // -----
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
    id: "s2",
    afficheV: "/test/afficheV-8.jpg",
    afficheH: "/test/afficheH-8.jpg",
    background: "/test/background-8.jpg",
    title: "Stranger Things",
    description:
      "Quand un jeune garçon disparaît, une petite ville découvre une affaire mystérieuse, des expériences secrètes, des forces surnaturelles terrifiantes... et une fillette.",
    année: 2016,
    recommandations: 100,
    link: "https://example.com/media8",
    categorie: "Série",

    // -----
    saisons: 5,
    épisode: 42,

    // -----
    classification: "16+",
    note: 8.5,
    noteTMDB: 8.6,
    statut: "Disponible",
    genres: ["Science Fiction & Fantastique", "Mystère", "Action & Aventure"],

    // -----
    acteurs: [
      { acteur: "Winona Ryder", role: "Joyce Byers" },
      { acteur: "David Harbour", role: "Jim Hopper" },
      { acteur: "Millie Bobby Brown", role: "Eleven / Jane Hopper" },
    ],
  },
  {
    id: "s3",
    afficheV: "/test/afficheV-9.jpg",
    afficheH: "/test/afficheH-9.jpg",
    background: "/test/background-9.jpg",
    title: "The Rookie : Le Flic de Los Angeles",
    description:
      "Lorsque sa femme le quitte et que son fils part à la fac, John Nolan, la quarantaine, est à un tournant de sa vie et décide de réaliser un vieux rêve : devenir flic ! Il part vivre à Los Angeles et se retrouve, malgré son âge, un bleu parmi les bleus...",
    année: 2018,
    recommandations: 85,
    link: "https://example.com/media9",
    categorie: "Série",

    // -----
    saisons: 8,
    épisode: 132,

    // -----
    classification: "10+",
    note: 8,
    noteTMDB: 8.5,
    statut: "Disponible",
    genres: ["Crime", "Drame", "Comédie"],

    // -----
    acteurs: [
      { acteur: "Nathan Fillion", role: "John Nolan" },
      { acteur: "Melissa O'Neil", role: "Lucy Chen" },
      { acteur: "Eric Winter", role: "Tim Bradford" },
    ],
  },
];

// liste combinée de tous les médias pour faire les tests visuel sans avoir besoin de l'API
export const allMedia = [...films, ...series];

// liste de plateformes pour faire les tests visuel sans avoir besoin de l'API (peut possiblement être utilisé dans le futur avec l'API)
export const plateformesData = [
  {
    id: 1,
    name: "Apple TV+",
    afficheH: "/plateformes/apple_tv.png",
    link: "https://platformA.com",
  },
  {
    id: 2,
    name: "DC Comics",
    afficheH: "/plateformes/dc_comics.png",
    link: "https://platformB.com",
  },
  {
    id: 3,
    name: "Disney+",
    afficheH: "/plateformes/disney_plus.png",
    link: "https://platformA.com",
  },
  {
    id: 4,
    name: "Marvel Studios",
    afficheH: "/plateformes/marvel_studios.png",
    link: "https://platformA.com",
  },
  {
    id: 5,
    name: "Netflix",
    afficheH: "/plateformes/netflix.png",
    link: "https://platformA.com",
  },
  {
    id: 6,
    name: "Paramount+",
    afficheH: "/plateformes/paramount_plus.png",
    link: "https://platformA.com",
  },
  {
    id: 7,
    name: "Prime Video",
    afficheH: "/plateformes/prime_video.png",
    link: "https://platformA.com",
  },
  {
    id: 8,
    name: "Warner Bros.",
    afficheH: "/plateformes/warner_bros.png",
    link: "https://platformA.com",
  },
];

// liste d'acteurs pour faire les tests visuel sans avoir besoin de l'API
export const acteursData = [
  {
    id: 1,
    name: "Tom Holland",
    photo: "https://image.tmdb.org/t/p/w500/mBGcYEyDjK8oBqvyKwBv0Y88jIe.jpg",
    biography:
      "Tom Holland, né le 1er juin 1996 à Londres, est un acteur et danseur britannique. Célèbre pour son rôle de Spider-Man dans l’univers Marvel, dès Captain America: Civil War (2016) et dans Spider-Man: No Way Home (2021), il séduit par son énergie et son agilité. Il débute sur scène dans Billy Elliot (2008-2010) à Londres. Au cinéma, il brille dans The Impossible (2012), In the Heart of the Sea (2015) et Uncharted (2022). En 2023, il joue dans la série The Crowded Room. Formé à la BRIT School, Holland est aussi producteur et soutient des œuvres caritatives. En couple avec Zendaya, il est une star montante d’Hollywood.",
    birthDate: "1 juin 1996",
    placeOfBirth: "Surrey, England, UK",
  },
  {
    id: 2,
    name: "Michael Kaeton",
    photo: "https://image.tmdb.org/t/p/w500/w6fwAQ7IwEFqtzByA1Wyz2Dwp7R.jpg",
    biography:
      "Michael John Douglas (né le 5 septembre 1951), mieux connu sous le nom de Michael Keaton, est un acteur américain, bien connu pour ses premiers rôles comiques dans des films tels que Night Shift, Mr. Mom, Johnny Dangerously, Beetlejuice, et pour son interprétation dramatique de Batman dans Batman dans Batman et Batman Returns de Tim Burton, ainsi que pour ses rôles principaux dans d'autres films tels que The Paper, Jackie Brown, Jack Frost, White Noise, Cars, The Other Guys et Toy Story 3.",
    birthDate: "5 septembre 1951",
    placeOfBirth: "Coraopolis, Pennsylvania, USA",
  },
  {
    id: 3,
    name: "Robert Downey Jr.",
    photo: "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
    biography:
      "Robert Downey Jr., né le 4 avril 1965 à New York, est un acteur et scénariste américain. Révélé à la fin des années 1980, il est nommé pour l'Oscar du meilleur acteur en 1993 pour son interprétation de Charlie Chaplin dans' 'Chaplin'. Cependant, il connaît ensuite une période difficile en raison de graves problèmes de drogue et d'alcool qui le conduisent en prison. Une fois rétabli, il fait un retour en force en 2008 en incarnant Iron Man dans les films de l'Univers cinématographique Marvel, franchise dans laquelle il joue un rôle central pendant plus d'une décennie. Cette performance lui vaut de devenir en 2013 l'un des acteurs les mieux payés au monde. Son retour est également marqué par les succès de 'Sherlock Holmes' (2009) et 'Sherlock Holmes : Jeu d'ombres' (2011) de Guy Ritchie, où il tient le rôle-titre. En 2023, il incarne Lewis Strauss dans le biopic 'Oppenheimer', un rôle qui lui vaut le Golden Globe du meilleur acteur dans un second rôle et le Screen Actors Guild Award du meilleur acteur dans un second rôle. Pour ce même rôle, il reçoit l’Oscar du meilleur acteur dans un second rôle le 11 mars 2024.",
    birthDate: "4 avril 1965",
    placeOfBirth: "New York City, New York, USA",
  },
  {
    id: 4,
    name: "Joaquin Phoenix",
    photo: "https://image.tmdb.org/t/p/w500/u38k3hQBDwNX0VA22aQceDp9Iyv.jpg",
    biography:
      "L'acteur de cinéma américain Joaquin Rafael Phoenix, né Joaquin Rafael Bottom s'est aventuré derrière la caméra, réalisant des clips musicaux, produisant des films et des émissions de télévision. Phoenix a enregistré un album, la bande originale de 'Walk the Line'. Il est également connu pour son travail d'activiste social, en particulier en tant que défenseur des droits des animaux. Phoenix a d'abord occupé des postes d'acteur dans deux émissions de télévision avec son frère. Il fait ses débuts sur grand écran dans Cap sur les étoiles (1986), jouant le rôle de Max. Son premier rôle principal fut dans Russkies (1987). Phoenix a été l'un des producteurs exécutifs de l'émission de télévision 4Real, une série d'une demi-heure qui met en vedette des célébrités invitées dans le cadre d'aventures mondiales. Il figure également sur la liste des producteurs du film La Nuit nous appartient (2007). Il a réalisé des vidéoclips pour les groupes suivants : Ringside, She Wants Revenge, People in Planes, Arckid, Albert Hammond Jr., and Silversun Pickups.",
    birthDate: "28 octobre 1974",
    placeOfBirth: "San Juan, Puerto Rico",
  },
  {
    id: 5,
    name: "Robert De Niro",
    photo: "https://image.tmdb.org/t/p/w500/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg",
    biography:
      "Robert Mario Anthony De Niro est un acteur, réalisateur et producteur de cinéma italo-américain né le 17 août 1943 à New York. Réputé pour ses nombreux films culte, tels que Taxi Driver, Le Parrain 2, Il était une fois en Amérique, Brazil, Heat, Raging Bull, Les Affranchis, Casino ou encore Voyage au bout de l'enfer, De Niro a remporté de nombreuses récompenses comme l'Oscar du meilleur acteur, l'Oscar du meilleur acteur dans un second rôle et deux Golden Globe (dont un pour l'ensemble de sa carrière en 2011). Ses interprétations extrêmement travaillées et sa filmographie très éclectique lui ont permis de devenir l'un des acteurs les plus reconnus de l'histoire du cinéma.",
    birthDate: "17 août 1943",
    placeOfBirth: "Greenwich Village, New York City, New York, USA",
  },
  {
    id: 6,
    name: "Zazie Beetz",
    photo: "https://image.tmdb.org/t/p/w500/ijrT4pvALvxU0gphea4YxDnDh6e.jpg",
    biography:
      "Zazie Beetz est une actrice américaine née en Allemagne, surtout connue pour le rôle de Vanessa sur Atlanta. En 2016, elle est également apparue dans la série d'anthologie Netflix Easy. Se produisant dans les théâtres communautaires et sur les scènes locales depuis l'enfance, Zazie a trouvé sa joie à l'école primaire et a grandi en jouant les filles. Née en Allemagne et originaire de New York, Zazie a grandi entre Washington Heights et Berlin, parlant allemand et anglais avec sa famille à la maison. Elle a reçu une formation de la Harlem School of the Arts et de la LaGuardia Arts Highschool, mais elle a pris le temps d'étudier le français, de se sentir fantaisiste et de vivre à Paris pendant son séjour au Skidmore College. Le théâtre a continué à vivre aux côtés de son amour pour la langue et les voyages, alors, après avoir obtenu son diplôme en 2013, elle a décidé de rassembler son courage et de poursuivre une carrière dans le spectacle. Vivant maintenant à Harlem, elle a depuis lors eu l'occasion de travailler sur divers films new-yorkais et est heureuse de se retrouver sur divers décors, avec toutes sortes de personnes colorées - naviguant sur son chemin en tant qu'actrice de travail. Elle a étudié avec Will Bond et Gameela Wright, a collaboré avec le réalisateur Bart Freundlich et jouera dans la prochaine série télévisée de Donald Glover ! Zazie est fière de faire partie de cette communauté d'artistes non conventionnelle mais magnifique, et a le cœur ouvert pour tout ce qui est à venir.",
    birthDate: "1 juin 1991",
    placeOfBirth: "Mitte, Berlin, Germany",
  },
  {
    id: 7,
    name: "Keanu Reeves",
    photo: "https://image.tmdb.org/t/p/w500/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg",
    biography:
      "Keanu Charles Reeves est un acteur canadien, né le 2 septembre 1964 à Beyrouth (Liban). Il accède à la célébrité avec les films Point Break (1991), Speed(1994) et la trilogie Matrix (1999, 2003, 2003), dans lequel il joue le personnage de Neo. Parallèlement à sa carrière d'acteur, il est bassiste dans le groupe grunge Dogstar, de 1991 à 2002, et plus récemment dans le groupe Becky. Dans l'émission Entertainment Tonight, en 2006, Keanu Reeves a été inclus dans le « Top 10 des stars préférées des américains ». Le 31 janvier 2005, il a reçu une étoile sur le Walk of Fame à Hollywood.",
    birthDate: "2 septembre 1964",
    placeOfBirth: "Beirut, Lebanon",
  },
  {
    id: 8,
    name: "Donnie Yen",
    photo: "https://image.tmdb.org/t/p/w500/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg",
    biography:
      "Donnie Yen, né le 27 juillet 1963 à Canton en Chine, est un acteur et chorégraphe d'action chinois.",
    birthDate: "27 juillet 1963",
    placeOfBirth: "Guangzhou, Guangdong, China",
  },
  {
    id: 9,
    name: "Bill Skarsgård",
    photo: "https://image.tmdb.org/t/p/w500/wGQidITqyDl4Igmq9TCQjRpegsk.jpg",
    biography:
      "Bill Skarsgård est un acteur suédois, né le 9 août 1990 à Stockholm dans le quartier de Vällingby. Il est notamment connu pour son rôle dans Simple Simon et pour son interprétation du clown Grippe-Sou / Pennywise dans les adaptations cinématographiques (Ça et Ça : Chapitre 2) du roman de Stephen King.",
    birthDate: "9 août 1990",
    placeOfBirth: "Vällingby, Sweden",
  },
  {
    id: 10,
    name: "Jason Statham",
    photo: "https://image.tmdb.org/t/p/w500/o7sfT7EBtzxwiJiKmCafoebJQ2q.jpg",
    biography:
      "Bien avant d'être connu, Jason Statham eut un premier casting à l'âge de 12 ans, à l'issue duquel il fut refusé. Au début des années 1990, son physique musclé lui permet de faire de la figuration dans deux vidéo-clips : d'abord en 1992, dans le clip de Comin'on Strong des The Shamen, dans lequel il danse de façon sensuelle en slip léopard puis, en 1994, dans le clip du single Run to the Sun du groupe britannique Erasure, dans lequel il prend des postures de culturiste sur le planétarium surmontant l'horloge universelle de l'Alexanderplatz (Berlin), le corps enduit de maquillage argenté et vêtu d'un simple caleçon. Par la suite, il gagne sa vie en tant que mannequin pour la chaîne de vêtements French Connection. Jason Statham au Festival international du film de Toronto en 2011. Ce n'est qu'en 1998, déjà âgé de 30 ans, que Jason Statham obtient son premier rôle au cinéma, dans le film Arnaques, Crimes et Botanique, parce qu'il connaissait la femme d'un investisseur qui l'a présenté à Guy Ritchie, qui recherchait des acteurs pour son film. Après ce premier film, l'acteur retournera avec Guy Ritchie deux ans après pour Snatch, tu braques ou tu raques (2000) et cinq ans plus tard pour Revolver. Mais c'est seulement en 2002, avec son rôle principal dans Le Transporteur, qu'il devient célèbre. Depuis, il a été vu dans des films d'actions comme The One, où il joue aux côtés de Jet Li qu'il retrouvera dans Rogue : L'Ultime Affrontement (War) ou Expendables : Unité spéciale, Cellular, Chaos, Hyper Tension et Hyper Tension 2, ainsi que dans des comédies comme La Panthère Rose (apparition non créditée au générique). En 2005, il reprend le rôle de Frank Martin dans Le Transporteur 2, dans lequel il apparaît comme simple chauffeur pour une famille fortunée de Miami, en Floride. Il a délaissé un temps le film d'action pour tourner Braquage à l'anglaise, de Roger Donaldson, film policier sur un braquage de banque d'après une histoire vraie. Il tourna également Course à la mort, reprise du film La Course à la mort de l'an 2000 qui mettait autrefois en scène David Carradine et Sylvester Stallone. En 2008, il est à l'affiche du film Le Transporteur 3 dans lequel il reprend le rôle de Frank Martin. En 2010, il joue dans Expendables : Unité spéciale avec Sylvester Stallone. Il reprend son rôle de Lee Christmas dans Expendables 2 : Unité spéciale, film sorti le 22 août 2012, et dans Expendables 3. Jason est également présent dans le film Homefront, sorti en salle courant 2013 et scénarisé par Sylvester Stallone. En 2013, l'acteur fait un caméo à la fin de Fast & Furious 6, dans lequel il incarne le frère du principal antagoniste. Il reprendra son rôle dans le septième opus, sorti en avril 2015, cette fois-ci comme antagoniste principal. En 2015, il obtient de bonnes critiques pour sa prestation dans la comédie d'action Spy.",
    birthDate: "26 juillet 1967",
    placeOfBirth: "Shirebrook, Derbyshire, England, UK",
  },
  {
    id: 11,
    name: "Emmy Raver-Lampman",
    photo: "https://image.tmdb.org/t/p/w500/cBkHUBzqoqrnkxDXWlqQmm91pD2.jpg",
    biography:
      "Emmy Raver-Lampman est une actrice américaine, connue principalement pour ses interprétations de Rebecca dans la série A Million Little Things (2018) et d'Allison Hargreeves dans la série Netflix à succès Umbrella Academy (2019).",
    birthDate: "5 septembre 1988",
    placeOfBirth: "Norfolk, Virginia, USA",
  },
  {
    id: 12,
    name: "Josh Hutcherson",
    photo: "https://image.tmdb.org/t/p/w500/f0eosZ1Fx0VBUyspq8K2f8sUSBn.jpg",
    biography:
      "Joshua Ryan 'Josh' Hutcherson (né le 12 octobre 1992) est un acteur de cinéma et de télévision américain. Il a commencé à travailler au début des années 2000, jouant dans plusieurs rôles mineurs au cinéma et à la télévision. Il a acquis une plus grande visibilité avec des rôles majeurs dans les films Little Manhattan et Zathura de 2005, la comédie RV de 2006, le film d'aventure familiale Firehouse Dog de 2007, et les adaptations cinématographiques de Bridge to Terabithia, Journey to the Center of the Earth et Cirque du Freak : L'assistant du vampire. Le 30 mars 2008, Hutcherson a remporté un Young Artist Award (pour Leading Young Actor). Hutcherson a également participé à l'édition Celebrity Teens de l'émission à succès MTV Cribs, et il est prêt à jouer Robert dans le remake de Red Dawn.",
    birthDate: "12 octobre 1992",
    placeOfBirth: "Union, Kentucky, USA",
  },
  {
    id: 13,
    name: "Kevin Hart",
    photo: "https://image.tmdb.org/t/p/w500/byiNydUlM6oP8diA7WMvYbNM7a1.jpg",
    biography:
      "Kevin Darnell Hart, né le 6 juillet 1979 à Philadelphie (Pennsylvanie, États-Unis), est un comédien, acteur, producteur et homme d’affaires. Issu d’un milieu modeste et élevé par sa mère, Hart se fait connaître par ses prestations de stand-up, remportant divers concours amateurs. Sa carrière à la télévision débute en 2001 dans la série Undeclared. Il devient une figure majeure du cinéma comique avec des rôles dans Scary Movie 3, Ride Along, Get Hard, Jumanji : Bienvenue dans la jungle, ainsi que des succès d’animation comme The Secret Life of Pets. Parallèlement, il fonde des sociétés de production et médias, notamment Laugh Out Loud et HartBeat Productions. Hart est aussi reconnu pour ses spectacles de stand-up, ses tournées, ainsi que pour son influence culturelle internationale.",
    birthDate: "6 juillet 1979",
    placeOfBirth: "Philadelphia, Pennsylvania, USA",
  },
  {
    id: 14,
    name: "Gugu Mbatha-Raw",
    photo: "https://image.tmdb.org/t/p/w500/sHAnv0kw5JHzWBOP7gAezwqgl8J.jpg",
    biography:
      "Gugulethu Sophia Mbatha, MBE (née le 21 avril 1983), connue sous le nom de Gugu Mbatha-Raw, est une actrice anglaise. Travaillant à la télévision britannique et dans des productions scéniques, elle s'est fait connaître dans la série Doctor Who dans le rôle de Tish Jones, sœur de Martha Jones. Elle a attiré l'attention dans des productions américaines, en commençant par un rôle de soutien dans la comédie de Tom Hanks Larry Crowne, et des rôles principaux dans la série télévisée de courte durée Undercovers and Touch. Elle a été acclamée par la critique pour ses performances dans le drame britannique Belle (2013) et le drame romantique Beyond the Lights (2014), et a reçu de nombreuses nominations de la critique du monde entier. En 2015, Mbatha-Raw a créé le rôle-titre dans la pièce de Jessica Swale Nell Gwynn, une actrice et maîtresse du roi Charles II d'Angleterre et d'Écosse. Elle a été mise en nomination pour le prix Evening Standard Theatre Award de la meilleure actrice pour son interprétation. Son interprétation en tant que Kelly dans le célèbre 'San Junipero', épisode de la troisième saison de la série culte Black Mirror, a été très appréciée.",
    birthDate: "21 avril 1983",
    placeOfBirth: "Oxford, Oxfordshire, England UK",
  },
  {
    id: 15,
    name: "Sam Worthington",
    photo: "https://image.tmdb.org/t/p/w500/mflBcox36s9ZPbsZPVOuhf6axaJ.jpg",
    biography:
      "Samuel Henry John 'Sam' Worthington est un acteur australien, surtout connu pour les portraits de Jake Sully dans Avatar, Marcus Wright dans Terminator Salvation et Perseus dans Clash of the Titans et sa suite, Wrath of the Titans, et Alex Mason dans le jeu vidéo Call of Duty : Black Ops et sa suite Call of Duty : Black Ops II. En 2004, Worthington a reçu le prix du meilleur film australien pour son rôle principal dans Somersault. Il a joué principalement dans des rôles principaux dans une variété de films à petit budget avant de passer aux grands films de studio, allant du drame romantique et de la comédie dramatique à la science-fiction et à l'action.",
    birthDate: "2 août 1976",
    placeOfBirth: "Godalming, Surrey, England, UK",
  },
  {
    id: 16,
    name: "Michael B. Jordan",
    photo: "https://image.tmdb.org/t/p/w500/515xNvaMC6xOEOlo0sFqW69ZqUH.jpg",
    biography:
      "Michael Bakari Jordan (né le 9 février 1987) est un acteur américain. Les rôles à la télévision de Jordan comprennent Wallace dans la série The Wire de HBO (2002), Reggie Montgomery dans la série télévisée All My Children de ABC (2003-2006) et Vince Howard dans la série dramatique Friday Night Lights de NBC (2009-2011). Jordan a notamment tourné Oscar Grant dans le film Fruitvale Station (2013), qui lui a valu de nombreux éloges de la critique, le flambeau humain dans le film Fantastic Four (2015) et Adonis Creed dans la suite du film Rocky Creed (2015). Parmi les autres performances cinématographiques, citons Red Tails (2012), Chronicle (2012), That Awkward Moment (2014) et le film de superhéros de Marvel Studios Black Panther (2018). Il collabore fréquemment avec le cinéaste Ryan Coogler.",
    birthDate: "9 février 1987",
    placeOfBirth: "Santa Ana, California, USA",
  },

  {
    id: 17,
    name: "Hailee Steinfeld",
    photo: "https://image.tmdb.org/t/p/w500/fItdOWdrHNRGGRRD9NFQWtO5L1t.jpg",
    biography:
      "Hailee Steinfeld (née le 11 décembre 1996) est une actrice américaine. Elle est devenue célèbre pour son interprétation de Mattie Ross dans le film True Grit de 2010, pour lequel elle a été nominée pour un Oscar de la meilleure actrice dans un second rôle et un BAFTA Award de la meilleure actrice dans un rôle principal. Steinfeld est née à Tarzana, Los Angeles, fille de Cheri (née Domasin), architecte d'intérieur, et Peter Steinfeld, entraîneur personnel. Elle a un frère aîné, Griffin (né le 9 janvier 1994), qui est un pilote professionnel de NASCAR. Son oncle paternel est l'entraîneur de fitness Jake Steinfeld, et son grand-oncle maternel est l'ancien enfant acteur Larry Domasin.",
    birthDate: "11 décembre 1996",
    placeOfBirth: "Tarzana, Los Angeles, California, USA",
  },
  {
    id: 18,
    name: "Miles Caton",
    photo: "https://image.tmdb.org/t/p/w500/yff2DK1Sc2baRGHbSfcmwMwX8HW.jpg",
    biography: "Aucune biographie disponible.",
    birthDate: "3 mars 2005",
    placeOfBirth: "Brooklyn, New York City, New York, USA",
  },
  {
    id: 21,
    name: "Winona Ryder",
    photo: "https://image.tmdb.org/t/p/w500/b2WcWMCJFb2eNFOJrExwevIBTSp.jpg",
    biography:
      "Winona Ryder, née Winona Laura Horowitz le 29 octobre 1971 à Winona dans le Minnesota, est une actrice américaine. Débutant au cinéma avec *Lucas* (1986), elle s'impose rapidement avec *Beetlejuice* (1988) de Tim Burton, dans le rôle iconique de Lydia Deetz, suivi de *Heathers* (1988), *Edward aux mains d'argent* (1990) et *Dracula* (1992). Les années 1990 marquent son apogée avec des performances acclamées dans *Le Temps de l'innocence* (1993), lui valant un Golden Globe de la meilleure actrice dans un second rôle et une nomination à l'Oscar, et *Les Quatre Filles du docteur March* (1994), pour laquelle elle obtient une seconde nomination à l'Oscar de la meilleure actrice. Parmi ses autres films notables figurent *Reality Bites* (1994), *Little Women* (1994) et *Girl, Interrupted* (1999). Après une pause dans les années 2000, elle revient avec *Black Swan* (2010) et surtout la série Netflix *Stranger Things* (2016-2025), où elle incarne Joyce Byers, rôle qui lui vaut des nominations aux Golden Globes et Screen Actors Guild Awards. En 2024, elle reprend Lydia Deetz dans *Beetlejuice Beetlejuice* de Tim Burton, succès critique et commercial. Récompensée d'un Golden Globe et nommée deux fois aux Oscars, Winona Ryder réside entre Los Angeles et New York.",
    birthDate: "29 octobre 1971",
    placeOfBirth: "Winona, Minnesota, USA",
  },
  {
    id: 19,
    name: "David Harbour",
    photo: "https://image.tmdb.org/t/p/w500/qMFtMWlYVtFVyBoBhX5IoA5sN5a.jpg",
    biography:
      "David Kenneth Harbour (né le 10 avril 1975) est un acteur américain. Il a été nominé pour deux Primetime Emmy Awards, un Tony Award et un Golden Globe Award. Il a débuté sa carrière d'acteur dans des productions théâtrales shakespeariennes. Après ses débuts professionnels à Broadway dans la reprise de L'Artificier en 1999, il a été nommé aux Tony Awards pour sa performance dans la production de Qui a peur de Virginia Woolf ?. Il a fait ses débuts à la télévision dans New York, police judiciaire en 1999 et a tenu des seconds rôles dans des films tels que Le Secret de Brokeback Mountain (2005), La Route de la vengeance (2008) et Black Mass (2015). Harbour s'est fait connaître mondialement grâce à son interprétation de Jim Hopper dans la série de science-fiction Netflix Stranger Things (2016-présent), pour laquelle il a reçu un Critics' Choice Television Award et a été nominé à deux Primetime Emmy Awards. Parmi ses rôles principaux au cinéma, on compte le personnage principal de Hellboy (2019), le Père Noël dans Violent Night (2022) et un ancien pilote dans le film sportif Gran Turismo (2023). Dans l'univers cinématographique Marvel, Harbour incarne Red Guardian depuis le film Black Widow (2021).",
    birthDate: "10 avril 1975",
    placeOfBirth: "New York City, New York, USA",
  },
  {
    id: 20,
    name: "Millie Bobby Brown",
    photo: "https://image.tmdb.org/t/p/w500/k9KGzGDVhXKfOGpoN62MNuXL28q.jpg",
    biography:
      "Millie Brown est née en 2004 en Espagne de parents britanniques. Elle déménage en 2011 à Orlando en Floride avec sa famille. C'est là que la jeune Millie se fait repérer en 2013 par un dénicheur de talents hollywoodien qui arrive à convaincre les parents de la fillette qu'elle possède des instincts innés de comédienne. Ni une ni deux, la petite famille fait ses valises direction Los Angeles où Millie ne tarde pas à engager un agent. En moins de trois mois de présence dans la ville californienne, l'actrice obtient le rôle de la jeune Alice dans la série Once Upon a Time in Wonderland. La jeune comédienne se voit ensuite offrir le rôle de Madison O'Donnell dans Intruders où elle s'illustre dans la peau de cette petite fille spéciale. Elle apparaît ensuite dans NCIS, Modern Family et Grey's Anatomy avant de décrocher un rôle d'importance, celui d'Eleven dans la série fantastique Netflix, Stranger Things. Millie y campe à nouveau une fillette étrange et spéciale, cette fois-ci dotée de super-pouvoirs, notamment la télékinésie.",
    birthDate: "19 février 2004",
    placeOfBirth: "Marbella, Málaga, Andalusia, Spain",
  },

  {
    id: 21,
    name: "Nathan Fillion",
    photo: "https://image.tmdb.org/t/p/w500/q31mXXgnN5PsuIjEqaaAPvBDvHc.jpg",
    biography: "Aucune biographie disponible.",
    birthDate: "27 mars 1971",
    placeOfBirth: "Edmonton, Alberta, Canada",
  },
  {
    id: 22,
    name: "Melissa O'Neil",
    photo: "https://image.tmdb.org/t/p/w500/9KqgbNttW79hAP9xQ5Ffd2fjGk.jpg",
    biography: "Aucune biographie disponible.",
    birthDate: "12 juillet 1988",
    placeOfBirth: "Calgary, Alberta, Canada",
  },
  {
    id: 23,
    name: "Eric Winter",
    photo: "https://image.tmdb.org/t/p/w500/tDQSZv5rHm4s2hwwVWpp5EMQ0w9.jpg",
    biography: "Aucune biographie disponible.",
    birthDate: "17 juillet 1976",
    placeOfBirth: "La Mirada, California, USA",
  },
];
