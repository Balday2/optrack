export interface ICommune {
  commune_id: number;
  nom: string;
  prefecture_id: number;
}

export const findCommuneById = (id: number) => {
  return communeData.find((commune) => commune.commune_id === id);
};

export const communeData: ICommune[] = [
  {
    commune_id: 1,
    nom: "COMMUNE URBAINE",
    prefecture_id: 1,
  },
  {
    commune_id: 2,
    nom: "DOUPROU",
    prefecture_id: 1,
  },
  {
    commune_id: 3,
    nom: "KOBA",
    prefecture_id: 1,
  },
  {
    commune_id: 4,
    nom: "KOLIA",
    prefecture_id: 1,
  },
  {
    commune_id: 5,
    nom: "LISSO",
    prefecture_id: 1,
  },
  {
    commune_id: 6,
    nom: "MANKOUNTAN",
    prefecture_id: 1,
  },
  {
    commune_id: 7,
    nom: "TAMITA",
    prefecture_id: 1,
  },
  {
    commune_id: 8,
    nom: "TOUGNIFILY",
    prefecture_id: 1,
  },
  {
    commune_id: 9,
    nom: "COMMUNE URBAINE",
    prefecture_id: 2,
  },
  {
    commune_id: 10,
    nom: "BINTIMODIA",
    prefecture_id: 2,
  },
  {
    commune_id: 11,
    nom: "DABISS",
    prefecture_id: 2,
  },
  {
    commune_id: 12,
    nom: "KAMSAR",
    prefecture_id: 2,
  },
  {
    commune_id: 13,
    nom: "KANFARANDE",
    prefecture_id: 2,
  },
  {
    commune_id: 14,
    nom: "KOLABOUI",
    prefecture_id: 2,
  },
  {
    commune_id: 15,
    nom: "MALAPOUYA",
    prefecture_id: 2,
  },
  {
    commune_id: 16,
    nom: "SANGAREDI",
    prefecture_id: 2,
  },
  {
    commune_id: 17,
    nom: "SANSALE",
    prefecture_id: 2,
  },
  {
    commune_id: 18,
    nom: "TANENE",
    prefecture_id: 2,
  },
  {
    commune_id: 19,
    nom: "COMMUNE URBAINE",
    prefecture_id: 3,
  },
  {
    commune_id: 20,
    nom: "BAGUINET",
    prefecture_id: 3,
  },
  {
    commune_id: 21,
    nom: "BANGUIGNY",
    prefecture_id: 3,
  },
  {
    commune_id: 22,
    nom: "TORMELIN",
    prefecture_id: 3,
  },
  {
    commune_id: 23,
    nom: "COMMUNE URBAINE",
    prefecture_id: 4,
  },
  {
    commune_id: 24,
    nom: "FOULAMORY",
    prefecture_id: 4,
  },
  {
    commune_id: 25,
    nom: "KAKONI",
    prefecture_id: 4,
  },
  {
    commune_id: 26,
    nom: "KOUMBIA",
    prefecture_id: 4,
  },
  {
    commune_id: 27,
    nom: "KOUNSITEL",
    prefecture_id: 4,
  },
  {
    commune_id: 28,
    nom: "MALANTA",
    prefecture_id: 4,
  },
  {
    commune_id: 29,
    nom: "TOUBA",
    prefecture_id: 4,
  },
  {
    commune_id: 30,
    nom: "WENDOU M'BOUR",
    prefecture_id: 4,
  },
  {
    commune_id: 31,
    nom: "COMMUNE URBAINE",
    prefecture_id: 5,
  },
  {
    commune_id: 32,
    nom: "GUINGAN",
    prefecture_id: 5,
  },
  {
    commune_id: 33,
    nom: "KAMABY",
    prefecture_id: 5,
  },
  {
    commune_id: 34,
    nom: "SAMBAILO",
    prefecture_id: 5,
  },
  {
    commune_id: 35,
    nom: "SAREBOIDO",
    prefecture_id: 5,
  },
  {
    commune_id: 36,
    nom: "TERMESSE",
    prefecture_id: 5,
  },
  {
    commune_id: 37,
    nom: "YOUKOUNKOUN",
    prefecture_id: 5,
  },
  {
    commune_id: 38,
    nom: "DIXINN",
    prefecture_id: 6,
  },
  {
    commune_id: 39,
    nom: "KALOUM",
    prefecture_id: 7,
  },
  {
    commune_id: 40,
    nom: "KASSA",
    prefecture_id: 7,
  },
  {
    commune_id: 41,
    nom: "MATAM",
    prefecture_id: 8,
  },
  {
    commune_id: 42,
    nom: "MATOTO",
    prefecture_id: 9,
  },
  {
    commune_id: 43,
    nom: "RATOMA",
    prefecture_id: 10,
  },
  {
    commune_id: 44,
    nom: "COMMUNE URBAINE",
    prefecture_id: 11,
  },
  {
    commune_id: 45,
    nom: "ARFAMOUSSAYA",
    prefecture_id: 11,
  },
  {
    commune_id: 46,
    nom: "BANKO",
    prefecture_id: 11,
  },
  {
    commune_id: 47,
    nom: "BISSIKIRIMA",
    prefecture_id: 11,
  },
  {
    commune_id: 48,
    nom: "DOGOMET",
    prefecture_id: 11,
  },
  {
    commune_id: 49,
    nom: "KANKAMA",
    prefecture_id: 11,
  },
  {
    commune_id: 50,
    nom: "KINDOYE",
    prefecture_id: 11,
  },
  {
    commune_id: 51,
    nom: "KONINDOU",
    prefecture_id: 11,
  },
  {
    commune_id: 52,
    nom: "N'DEMA",
    prefecture_id: 11,
  },
  {
    commune_id: 53,
    nom: "COMMUNE URBAINE",
    prefecture_id: 12,
  },
  {
    commune_id: 54,
    nom: "BANORA",
    prefecture_id: 12,
  },
  {
    commune_id: 55,
    nom: "DIALAKORO",
    prefecture_id: 12,
  },
  {
    commune_id: 56,
    nom: "DIATIFERE",
    prefecture_id: 12,
  },
  {
    commune_id: 57,
    nom: "GAGNAKALY",
    prefecture_id: 12,
  },
  {
    commune_id: 58,
    nom: "KALINKO",
    prefecture_id: 12,
  },
  {
    commune_id: 59,
    nom: "LANSANAYA",
    prefecture_id: 12,
  },
  {
    commune_id: 60,
    nom: "SELOUMA",
    prefecture_id: 12,
  },
  {
    commune_id: 61,
    nom: "COMMUNE URBAINE",
    prefecture_id: 13,
  },
  {
    commune_id: 62,
    nom: "BANIAN",
    prefecture_id: 13,
  },
  {
    commune_id: 63,
    nom: "BEINDOU",
    prefecture_id: 13,
  },
  {
    commune_id: 64,
    nom: "HEREMAKONO",
    prefecture_id: 13,
  },
  {
    commune_id: 65,
    nom: "KOBIKORO",
    prefecture_id: 13,
  },
  {
    commune_id: 66,
    nom: "MARELLA",
    prefecture_id: 13,
  },
  {
    commune_id: 67,
    nom: "NIALIA",
    prefecture_id: 13,
  },
  {
    commune_id: 68,
    nom: "PASSAYAH",
    prefecture_id: 13,
  },
  {
    commune_id: 69,
    nom: "SANDENIA",
    prefecture_id: 13,
  },
  {
    commune_id: 70,
    nom: "SONGOYAH",
    prefecture_id: 13,
  },
  {
    commune_id: 71,
    nom: "TINDO",
    prefecture_id: 13,
  },
  {
    commune_id: 72,
    nom: "TIRO",
    prefecture_id: 13,
  },
  {
    commune_id: 73,
    nom: "COMMUNE URBAINE",
    prefecture_id: 14,
  },
  {
    commune_id: 74,
    nom: "ALBADARIA",
    prefecture_id: 14,
  },
  {
    commune_id: 75,
    nom: "BANAMA",
    prefecture_id: 14,
  },
  {
    commune_id: 76,
    nom: "BARDOU",
    prefecture_id: 14,
  },
  {
    commune_id: 77,
    nom: "BEINDOU",
    prefecture_id: 14,
  },
  {
    commune_id: 78,
    nom: "FERMESSADOU",
    prefecture_id: 14,
  },
  {
    commune_id: 79,
    nom: "FIRAWA",
    prefecture_id: 14,
  },
  {
    commune_id: 80,
    nom: "GBANGBADOU",
    prefecture_id: 14,
  },
  {
    commune_id: 81,
    nom: "KONDIADOU",
    prefecture_id: 14,
  },
  {
    commune_id: 82,
    nom: "MANFRAN",
    prefecture_id: 14,
  },
  {
    commune_id: 83,
    nom: "SANGARDO",
    prefecture_id: 14,
  },
  {
    commune_id: 84,
    nom: "YENDE MILLIMOU",
    prefecture_id: 14,
  },
  {
    commune_id: 85,
    nom: "YOMBIRO",
    prefecture_id: 14,
  },
  {
    commune_id: 86,
    nom: "COMMUNE URBAINE",
    prefecture_id: 15,
  },
  {
    commune_id: 87,
    nom: "BALANDOU",
    prefecture_id: 15,
  },
  {
    commune_id: 88,
    nom: "BATE NAFADJI",
    prefecture_id: 15,
  },
  {
    commune_id: 89,
    nom: "BOULA",
    prefecture_id: 15,
  },
  {
    commune_id: 90,
    nom: "GBEREDOU - BARANAMA",
    prefecture_id: 15,
  },
  {
    commune_id: 91,
    nom: "KARIFAMORIAH",
    prefecture_id: 15,
  },
  {
    commune_id: 92,
    nom: "KOUMBAN",
    prefecture_id: 15,
  },
  {
    commune_id: 93,
    nom: "MAMOUROUDOU",
    prefecture_id: 15,
  },
  {
    commune_id: 94,
    nom: "MISSAMANA",
    prefecture_id: 15,
  },
  {
    commune_id: 95,
    nom: "MORIBAYA",
    prefecture_id: 15,
  },
  {
    commune_id: 96,
    nom: "SABADOU - BARANAMA",
    prefecture_id: 15,
  },
  {
    commune_id: 97,
    nom: "TINTIOULEN",
    prefecture_id: 15,
  },
  {
    commune_id: 98,
    nom: "TOKOUNOU",
    prefecture_id: 15,
  },
  {
    commune_id: 99,
    nom: "COMMUNE URBAINE",
    prefecture_id: 16,
  },
  {
    commune_id: 100,
    nom: "BANANKORO",
    prefecture_id: 16,
  },
  {
    commune_id: 101,
    nom: "DAMARO",
    prefecture_id: 16,
  },
  {
    commune_id: 102,
    nom: "KOMODOU",
    prefecture_id: 16,
  },
  {
    commune_id: 103,
    nom: "KONSANKORO",
    prefecture_id: 16,
  },
  {
    commune_id: 104,
    nom: "LINKO",
    prefecture_id: 16,
  },
  {
    commune_id: 105,
    nom: "SIBIRIBARO",
    prefecture_id: 16,
  },
  {
    commune_id: 106,
    nom: "SOROMAYA",
    prefecture_id: 16,
  },
  {
    commune_id: 107,
    nom: "COMMUNE URBAINE",
    prefecture_id: 17,
  },
  {
    commune_id: 108,
    nom: "BABILA",
    prefecture_id: 17,
  },
  {
    commune_id: 109,
    nom: "BALATO",
    prefecture_id: 17,
  },
  {
    commune_id: 110,
    nom: "BANFELE",
    prefecture_id: 17,
  },
  {
    commune_id: 111,
    nom: "BARO",
    prefecture_id: 17,
  },
  {
    commune_id: 112,
    nom: "CISSELA",
    prefecture_id: 17,
  },
  {
    commune_id: 113,
    nom: "DOUAKO",
    prefecture_id: 17,
  },
  {
    commune_id: 114,
    nom: "DOURA",
    prefecture_id: 17,
  },
  {
    commune_id: 115,
    nom: "KIGNERO",
    prefecture_id: 17,
  },
  {
    commune_id: 116,
    nom: "KOMOLAKOURA",
    prefecture_id: 17,
  },
  {
    commune_id: 117,
    nom: "KOUMANA",
    prefecture_id: 17,
  },
  {
    commune_id: 118,
    nom: "SANGUIANA",
    prefecture_id: 17,
  },
  {
    commune_id: 119,
    nom: "COMMUNE URBAINE",
    prefecture_id: 18,
  },
  {
    commune_id: 120,
    nom: "BALANDOU-GOUBA",
    prefecture_id: 18,
  },
  {
    commune_id: 121,
    nom: "DIALAKORO",
    prefecture_id: 18,
  },
  {
    commune_id: 122,
    nom: "FARALAKO",
    prefecture_id: 18,
  },
  {
    commune_id: 123,
    nom: "KANTOUMANINA",
    prefecture_id: 18,
  },
  {
    commune_id: 124,
    nom: "KINIERAN",
    prefecture_id: 18,
  },
  {
    commune_id: 125,
    nom: "KONDIANA-KORO",
    prefecture_id: 18,
  },
  {
    commune_id: 126,
    nom: "KOUNDIAN",
    prefecture_id: 18,
  },
  {
    commune_id: 127,
    nom: "MORODOU",
    prefecture_id: 18,
  },
  {
    commune_id: 128,
    nom: "NIANTANINA",
    prefecture_id: 18,
  },
  {
    commune_id: 129,
    nom: "SALADOU",
    prefecture_id: 18,
  },
  {
    commune_id: 130,
    nom: "SANSANDO",
    prefecture_id: 18,
  },
  {
    commune_id: 131,
    nom: "COMMUNE URBAINE",
    prefecture_id: 19,
  },
  {
    commune_id: 132,
    nom: "BANKON",
    prefecture_id: 19,
  },
  {
    commune_id: 133,
    nom: "DOKO",
    prefecture_id: 19,
  },
  {
    commune_id: 134,
    nom: "FRANWALIA",
    prefecture_id: 19,
  },
  {
    commune_id: 135,
    nom: "KINIEBAKOURA",
    prefecture_id: 19,
  },
  {
    commune_id: 136,
    nom: "KINTINIAN",
    prefecture_id: 19,
  },
  {
    commune_id: 137,
    nom: "MALEAH",
    prefecture_id: 19,
  },
  {
    commune_id: 138,
    nom: "NABOU",
    prefecture_id: 19,
  },
  {
    commune_id: 139,
    nom: "NIAGASSOLA",
    prefecture_id: 19,
  },
  {
    commune_id: 140,
    nom: "NIANDANKORO",
    prefecture_id: 19,
  },
  {
    commune_id: 141,
    nom: "NORASSOBA",
    prefecture_id: 19,
  },
  {
    commune_id: 142,
    nom: "NOUNKOUNKAN",
    prefecture_id: 19,
  },
  {
    commune_id: 143,
    nom: "SIGUIRINI",
    prefecture_id: 19,
  },
  {
    commune_id: 144,
    nom: "COMMUNE URBAINE",
    prefecture_id: 20,
  },
  {
    commune_id: 145,
    nom: "KOURIAH",
    prefecture_id: 20,
  },
  {
    commune_id: 146,
    nom: "MANEYAH",
    prefecture_id: 20,
  },
  {
    commune_id: 147,
    nom: "WONKIFONG",
    prefecture_id: 20,
  },
  {
    commune_id: 148,
    nom: "COMMUNE URBAINE",
    prefecture_id: 21,
  },
  {
    commune_id: 149,
    nom: "BADY",
    prefecture_id: 21,
  },
  {
    commune_id: 150,
    nom: "FALESSADE",
    prefecture_id: 21,
  },
  {
    commune_id: 151,
    nom: "KHORIRA",
    prefecture_id: 21,
  },
  {
    commune_id: 152,
    nom: "OUASSOU",
    prefecture_id: 21,
  },
  {
    commune_id: 153,
    nom: "TANENE BOURAMAYA",
    prefecture_id: 21,
  },
  {
    commune_id: 154,
    nom: "TONDON",
    prefecture_id: 21,
  },
  {
    commune_id: 155,
    nom: "COMMUNE URBAINE",
    prefecture_id: 22,
  },
  {
    commune_id: 156,
    nom: "ALLASSOYAH",
    prefecture_id: 22,
  },
  {
    commune_id: 157,
    nom: "BENTY",
    prefecture_id: 22,
  },
  {
    commune_id: 158,
    nom: "FARMOREAH",
    prefecture_id: 22,
  },
  {
    commune_id: 159,
    nom: "KABACK",
    prefecture_id: 22,
  },
  {
    commune_id: 160,
    nom: "KAKOSSA",
    prefecture_id: 22,
  },
  {
    commune_id: 161,
    nom: "KALIAH",
    prefecture_id: 22,
  },
  {
    commune_id: 162,
    nom: "MAFERENYAH",
    prefecture_id: 22,
  },
  {
    commune_id: 163,
    nom: "MOUSSAYAH",
    prefecture_id: 22,
  },
  {
    commune_id: 164,
    nom: "SIKHOUROU",
    prefecture_id: 22,
  },
  {
    commune_id: 165,
    nom: "COMMUNE URBAINE",
    prefecture_id: 23,
  },
  {
    commune_id: 166,
    nom: "BANGOUYA",
    prefecture_id: 23,
  },
  {
    commune_id: 167,
    nom: "DAMAKANIA",
    prefecture_id: 23,
  },
  {
    commune_id: 168,
    nom: "FRIGUIAGBE",
    prefecture_id: 23,
  },
  {
    commune_id: 169,
    nom: "KOLENTE",
    prefecture_id: 23,
  },
  {
    commune_id: 170,
    nom: "MADINA OULA",
    prefecture_id: 23,
  },
  {
    commune_id: 171,
    nom: "MAMBIA",
    prefecture_id: 23,
  },
  {
    commune_id: 172,
    nom: "MOLOTA",
    prefecture_id: 23,
  },
  {
    commune_id: 173,
    nom: "SAMAYA",
    prefecture_id: 23,
  },
  {
    commune_id: 174,
    nom: "SOUGUETA",
    prefecture_id: 23,
  },
  {
    commune_id: 175,
    nom: "COMMUNE URBAINE",
    prefecture_id: 24,
  },
  {
    commune_id: 176,
    nom: "BROUWAL",
    prefecture_id: 24,
  },
  {
    commune_id: 177,
    nom: "DARAMAGNAKI",
    prefecture_id: 24,
  },
  {
    commune_id: 178,
    nom: "GOUGOUDJE",
    prefecture_id: 24,
  },
  {
    commune_id: 179,
    nom: "KOBA",
    prefecture_id: 24,
  },
  {
    commune_id: 180,
    nom: "KOLLET",
    prefecture_id: 24,
  },
  {
    commune_id: 181,
    nom: "KONSOTAMI",
    prefecture_id: 24,
  },
  {
    commune_id: 182,
    nom: "MISSIRA",
    prefecture_id: 24,
  },
  {
    commune_id: 183,
    nom: "SANTOU",
    prefecture_id: 24,
  },
  {
    commune_id: 184,
    nom: "SAREKALY",
    prefecture_id: 24,
  },
  {
    commune_id: 185,
    nom: "SINTA",
    prefecture_id: 24,
  },
  {
    commune_id: 186,
    nom: "SOGOLON",
    prefecture_id: 24,
  },
  {
    commune_id: 187,
    nom: "TARIHOYE",
    prefecture_id: 24,
  },
  {
    commune_id: 188,
    nom: "THIONTHIAN",
    prefecture_id: 24,
  },
  {
    commune_id: 189,
    nom: "COMMUNE URBAINE",
    prefecture_id: 25,
  },
  {
    commune_id: 190,
    nom: "FAFAYA",
    prefecture_id: 25,
  },
  {
    commune_id: 191,
    nom: "GADHA WOUNDOU",
    prefecture_id: 25,
  },
  {
    commune_id: 192,
    nom: "MATAKAOU",
    prefecture_id: 25,
  },
  {
    commune_id: 193,
    nom: "MISSIRA",
    prefecture_id: 25,
  },
  {
    commune_id: 194,
    nom: "PILIMINI",
    prefecture_id: 25,
  },
  {
    commune_id: 195,
    nom: "COMMUNE URBAINE",
    prefecture_id: 26,
  },
  {
    commune_id: 196,
    nom: "DALEIN",
    prefecture_id: 26,
  },
  {
    commune_id: 197,
    nom: "DARALABE",
    prefecture_id: 26,
  },
  {
    commune_id: 198,
    nom: "DIARI",
    prefecture_id: 26,
  },
  {
    commune_id: 199,
    nom: "DIONFO",
    prefecture_id: 26,
  },
  {
    commune_id: 200,
    nom: "GARAMBE",
    prefecture_id: 26,
  },
  {
    commune_id: 201,
    nom: "HAFIA",
    prefecture_id: 26,
  },
  {
    commune_id: 202,
    nom: "KALAN",
    prefecture_id: 26,
  },
  {
    commune_id: 203,
    nom: "KOURAMANGUI",
    prefecture_id: 26,
  },
  {
    commune_id: 204,
    nom: "NOUSSY",
    prefecture_id: 26,
  },
  {
    commune_id: 205,
    nom: "POPODARA",
    prefecture_id: 26,
  },
  {
    commune_id: 206,
    nom: "SANNOUN",
    prefecture_id: 26,
  },
  {
    commune_id: 207,
    nom: "TOUNTOUROUN",
    prefecture_id: 26,
  },
  {
    commune_id: 208,
    nom: "COMMUNE URBAINE",
    prefecture_id: 27,
  },
  {
    commune_id: 209,
    nom: "BALAYA",
    prefecture_id: 27,
  },
  {
    commune_id: 210,
    nom: "DIOUNTOU",
    prefecture_id: 27,
  },
  {
    commune_id: 211,
    nom: "HERICO",
    prefecture_id: 27,
  },
  {
    commune_id: 212,
    nom: "KORBE",
    prefecture_id: 27,
  },
  {
    commune_id: 213,
    nom: "LAFOU",
    prefecture_id: 27,
  },
  {
    commune_id: 214,
    nom: "LINSAN SARAN",
    prefecture_id: 27,
  },
  {
    commune_id: 215,
    nom: "MANDA SARAN",
    prefecture_id: 27,
  },
  {
    commune_id: 216,
    nom: "PARAWOL",
    prefecture_id: 27,
  },
  {
    commune_id: 217,
    nom: "SAGALE",
    prefecture_id: 27,
  },
  {
    commune_id: 218,
    nom: "THIANGUEL BORY",
    prefecture_id: 27,
  },
  {
    commune_id: 219,
    nom: "COMMUNE URBAINE",
    prefecture_id: 28,
  },
  {
    commune_id: 220,
    nom: "BALAKI",
    prefecture_id: 28,
  },
  {
    commune_id: 221,
    nom: "DONGHEL SIGON",
    prefecture_id: 28,
  },
  {
    commune_id: 222,
    nom: "DOUGOUNTOUNNY",
    prefecture_id: 28,
  },
  {
    commune_id: 223,
    nom: "FOUGOU",
    prefecture_id: 28,
  },
  {
    commune_id: 224,
    nom: "GAYAH",
    prefecture_id: 28,
  },
  {
    commune_id: 225,
    nom: "HIDAYATOU",
    prefecture_id: 28,
  },
  {
    commune_id: 226,
    nom: "LEBEKERE",
    prefecture_id: 28,
  },
  {
    commune_id: 227,
    nom: "MADINA SALAMBANDE",
    prefecture_id: 28,
  },
  {
    commune_id: 228,
    nom: "MADINA WORA",
    prefecture_id: 28,
  },
  {
    commune_id: 229,
    nom: "TELIRE",
    prefecture_id: 28,
  },
  {
    commune_id: 230,
    nom: "TOUBA BAGADADJI",
    prefecture_id: 28,
  },
  {
    commune_id: 231,
    nom: "YEMBERING",
    prefecture_id: 28,
  },
  {
    commune_id: 232,
    nom: "COMMUNE URBAINE",
    prefecture_id: 29,
  },
  {
    commune_id: 233,
    nom: "FATAKO",
    prefecture_id: 29,
  },
  {
    commune_id: 234,
    nom: "FELLO KOUNDOUA",
    prefecture_id: 29,
  },
  {
    commune_id: 235,
    nom: "KANSAGUI",
    prefecture_id: 29,
  },
  {
    commune_id: 236,
    nom: "KOIN",
    prefecture_id: 29,
  },
  {
    commune_id: 237,
    nom: "KOLLANGUI",
    prefecture_id: 29,
  },
  {
    commune_id: 238,
    nom: "KOLLET",
    prefecture_id: 29,
  },
  {
    commune_id: 239,
    nom: "KONAH",
    prefecture_id: 29,
  },
  {
    commune_id: 240,
    nom: "KOURATONGO",
    prefecture_id: 29,
  },
  {
    commune_id: 241,
    nom: "TANGALY",
    prefecture_id: 29,
  },
  {
    commune_id: 242,
    nom: "COMMUNE URBAINE",
    prefecture_id: 30,
  },
  {
    commune_id: 243,
    nom: "BODIE",
    prefecture_id: 30,
  },
  {
    commune_id: 244,
    nom: "DITINN",
    prefecture_id: 30,
  },
  {
    commune_id: 245,
    nom: "KAALA",
    prefecture_id: 30,
  },
  {
    commune_id: 246,
    nom: "KANKALABE",
    prefecture_id: 30,
  },
  {
    commune_id: 247,
    nom: "KEBALY",
    prefecture_id: 30,
  },
  {
    commune_id: 248,
    nom: "KOBA",
    prefecture_id: 30,
  },
  {
    commune_id: 249,
    nom: "MAFARA",
    prefecture_id: 30,
  },
  {
    commune_id: 250,
    nom: "MITTY",
    prefecture_id: 30,
  },
  {
    commune_id: 251,
    nom: "MOMBEYA",
    prefecture_id: 30,
  },
  {
    commune_id: 252,
    nom: "COMMUNE URBAINE",
    prefecture_id: 31,
  },
  {
    commune_id: 253,
    nom: "BOULLIWEL",
    prefecture_id: 31,
  },
  {
    commune_id: 254,
    nom: "DOUNET",
    prefecture_id: 31,
  },
  {
    commune_id: 255,
    nom: "GONGORET",
    prefecture_id: 31,
  },
  {
    commune_id: 256,
    nom: "KEGNEKO",
    prefecture_id: 31,
  },
  {
    commune_id: 257,
    nom: "KONKOURE",
    prefecture_id: 31,
  },
  {
    commune_id: 258,
    nom: "NIAGARA",
    prefecture_id: 31,
  },
  {
    commune_id: 259,
    nom: "OURE-KABA",
    prefecture_id: 31,
  },
  {
    commune_id: 260,
    nom: "POREDAKA",
    prefecture_id: 31,
  },
  {
    commune_id: 261,
    nom: "SARAMOUSSAYA",
    prefecture_id: 31,
  },
  {
    commune_id: 262,
    nom: "SOYAH",
    prefecture_id: 31,
  },
  {
    commune_id: 263,
    nom: "TEGUEREYA",
    prefecture_id: 31,
  },
  {
    commune_id: 264,
    nom: "TIMBO",
    prefecture_id: 31,
  },
  {
    commune_id: 265,
    nom: "TOLO",
    prefecture_id: 31,
  },
  {
    commune_id: 266,
    nom: "COMMUNE URBAINE",
    prefecture_id: 32,
  },
  {
    commune_id: 267,
    nom: "BANTIGNEL",
    prefecture_id: 32,
  },
  {
    commune_id: 268,
    nom: "BROUWAL TAPPE",
    prefecture_id: 32,
  },
  {
    commune_id: 269,
    nom: "DONGHOL TOUMA",
    prefecture_id: 32,
  },
  {
    commune_id: 270,
    nom: "GONGORE",
    prefecture_id: 32,
  },
  {
    commune_id: 271,
    nom: "LEY MIRO",
    prefecture_id: 32,
  },
  {
    commune_id: 272,
    nom: "MACI",
    prefecture_id: 32,
  },
  {
    commune_id: 273,
    nom: "NINGUELANDE",
    prefecture_id: 32,
  },
  {
    commune_id: 274,
    nom: "SANGAREAH",
    prefecture_id: 32,
  },
  {
    commune_id: 275,
    nom: "SINTALY",
    prefecture_id: 32,
  },
  {
    commune_id: 276,
    nom: "TIMBI MADINA",
    prefecture_id: 32,
  },
  {
    commune_id: 277,
    nom: "TIMBI TOUNNI",
    prefecture_id: 32,
  },
  {
    commune_id: 278,
    nom: "COMMUNE URBAINE",
    prefecture_id: 33,
  },
  {
    commune_id: 279,
    nom: "BOOLA",
    prefecture_id: 33,
  },
  {
    commune_id: 280,
    nom: "DIARAGUERELA",
    prefecture_id: 33,
  },
  {
    commune_id: 281,
    nom: "DIASSODOU",
    prefecture_id: 33,
  },
  {
    commune_id: 282,
    nom: "FOUALAH",
    prefecture_id: 33,
  },
  {
    commune_id: 283,
    nom: "GBACKEDOU",
    prefecture_id: 33,
  },
  {
    commune_id: 284,
    nom: "GBESSOBA",
    prefecture_id: 33,
  },
  {
    commune_id: 285,
    nom: "KARALA",
    prefecture_id: 33,
  },
  {
    commune_id: 286,
    nom: "KOUMANDOU",
    prefecture_id: 33,
  },
  {
    commune_id: 287,
    nom: "MOUSSADOU",
    prefecture_id: 33,
  },
  {
    commune_id: 288,
    nom: "NIONSOMORIDOU",
    prefecture_id: 33,
  },
  {
    commune_id: 289,
    nom: "SAMANA",
    prefecture_id: 33,
  },
  {
    commune_id: 290,
    nom: "SINKO",
    prefecture_id: 33,
  },
  {
    commune_id: 291,
    nom: "SOKOURALA",
    prefecture_id: 33,
  },
  {
    commune_id: 292,
    nom: "COMMUNE URBAINE",
    prefecture_id: 34,
  },
  {
    commune_id: 293,
    nom: "BOLODOU",
    prefecture_id: 34,
  },
  {
    commune_id: 294,
    nom: "FANGAMANDOU",
    prefecture_id: 34,
  },
  {
    commune_id: 295,
    nom: "GUENDEMBOU",
    prefecture_id: 34,
  },
  {
    commune_id: 296,
    nom: "KASSADOU",
    prefecture_id: 34,
  },
  {
    commune_id: 297,
    nom: "KOUNDOU",
    prefecture_id: 34,
  },
  {
    commune_id: 298,
    nom: "NONGOA",
    prefecture_id: 34,
  },
  {
    commune_id: 299,
    nom: "OUENDE-KENEMA",
    prefecture_id: 34,
  },
  {
    commune_id: 300,
    nom: "TEKOULO",
    prefecture_id: 34,
  },
  {
    commune_id: 301,
    nom: "TEMMESSADOU",
    prefecture_id: 34,
  },
  {
    commune_id: 302,
    nom: "COMMUNE URBAINE",
    prefecture_id: 35,
  },
  {
    commune_id: 303,
    nom: "BOSSOU",
    prefecture_id: 35,
  },
  {
    commune_id: 304,
    nom: "FOUMBADOU",
    prefecture_id: 35,
  },
  {
    commune_id: 305,
    nom: "GAMA BEREMA",
    prefecture_id: 35,
  },
  {
    commune_id: 306,
    nom: "GUEASSO",
    prefecture_id: 35,
  },
  {
    commune_id: 307,
    nom: "KOKOTA",
    prefecture_id: 35,
  },
  {
    commune_id: 308,
    nom: "LAINE",
    prefecture_id: 35,
  },
  {
    commune_id: 309,
    nom: "N'ZOO",
    prefecture_id: 35,
  },
  {
    commune_id: 310,
    nom: "TOUNKARATA",
    prefecture_id: 35,
  },
  {
    commune_id: 311,
    nom: "COMMUNE URBAINE",
    prefecture_id: 36,
  },
  {
    commune_id: 312,
    nom: "BALIZIA",
    prefecture_id: 36,
  },
  {
    commune_id: 313,
    nom: "BINIKALA",
    prefecture_id: 36,
  },
  {
    commune_id: 314,
    nom: "BOFOSSOU",
    prefecture_id: 36,
  },
  {
    commune_id: 315,
    nom: "DARO",
    prefecture_id: 36,
  },
  {
    commune_id: 316,
    nom: "FASSANKONI",
    prefecture_id: 36,
  },
  {
    commune_id: 317,
    nom: "KOUANKAN",
    prefecture_id: 36,
  },
  {
    commune_id: 318,
    nom: "KOYAMAH",
    prefecture_id: 36,
  },
  {
    commune_id: 319,
    nom: "N'ZEBELA",
    prefecture_id: 36,
  },
  {
    commune_id: 320,
    nom: "OREMAI",
    prefecture_id: 36,
  },
  {
    commune_id: 321,
    nom: "PANZIAZOU",
    prefecture_id: 36,
  },
  {
    commune_id: 322,
    nom: "SENGBEDOU",
    prefecture_id: 36,
  },
  {
    commune_id: 323,
    nom: "SEREDOU",
    prefecture_id: 36,
  },
  {
    commune_id: 324,
    nom: "VASSEREDOU",
    prefecture_id: 36,
  },
  {
    commune_id: 325,
    nom: "WATANKA",
    prefecture_id: 36,
  },
  {
    commune_id: 326,
    nom: "COMMUNE URBAINE",
    prefecture_id: 37,
  },
  {
    commune_id: 327,
    nom: "BOUNOUMA",
    prefecture_id: 37,
  },
  {
    commune_id: 328,
    nom: "GOUECKE",
    prefecture_id: 37,
  },
  {
    commune_id: 329,
    nom: "KOBELA",
    prefecture_id: 37,
  },
  {
    commune_id: 330,
    nom: "KOROPARA",
    prefecture_id: 37,
  },
  {
    commune_id: 331,
    nom: "KOULE",
    prefecture_id: 37,
  },
  {
    commune_id: 332,
    nom: "PALE",
    prefecture_id: 37,
  },
  {
    commune_id: 333,
    nom: "SAMOE",
    prefecture_id: 37,
  },
  {
    commune_id: 334,
    nom: "SOULOUTA",
    prefecture_id: 37,
  },
  {
    commune_id: 335,
    nom: "WOMEY",
    prefecture_id: 37,
  },
  {
    commune_id: 336,
    nom: "YALENZOU",
    prefecture_id: 37,
  },
  {
    commune_id: 337,
    nom: "COMMUNE URBAINE",
    prefecture_id: 38,
  },
  {
    commune_id: 338,
    nom: "BANIE",
    prefecture_id: 38,
  },
  {
    commune_id: 339,
    nom: "BHETA",
    prefecture_id: 38,
  },
  {
    commune_id: 340,
    nom: "BIGNAMOU",
    prefecture_id: 38,
  },
  {
    commune_id: 341,
    nom: "BOWE",
    prefecture_id: 38,
  },
  {
    commune_id: 342,
    nom: "DIECKE",
    prefecture_id: 38,
  },
  {
    commune_id: 343,
    nom: "PELA",
    prefecture_id: 38,
  },
];
