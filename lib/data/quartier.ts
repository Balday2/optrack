export interface IQuartier {
  quartier_id: number;
  nom: string;
  commune_id: number;
}

export const findQuartierById = (id: number) => {
  return quartierData.find((quartier) => quartier.quartier_id === id);
};

export const quartierData: IQuartier[] = [
  {
    quartier_id: 1,
    nom: "ALMAMYA I",
    commune_id: 1,
  },
  {
    quartier_id: 2,
    nom: "ALMAMYA II",
    commune_id: 1,
  },
  {
    quartier_id: 3,
    nom: "BALANDOUGOU",
    commune_id: 1,
  },
  {
    quartier_id: 4,
    nom: "BOLONDE I",
    commune_id: 1,
  },
  {
    quartier_id: 5,
    nom: "BOLONDE II",
    commune_id: 1,
  },
  {
    quartier_id: 6,
    nom: "DAR ES SALAM",
    commune_id: 1,
  },
  {
    quartier_id: 7,
    nom: "DOBIRET",
    commune_id: 1,
  },
  {
    quartier_id: 8,
    nom: "DOMINGHIA",
    commune_id: 1,
  },
  {
    quartier_id: 9,
    nom: "FARENGHIA",
    commune_id: 1,
  },
  {
    quartier_id: 10,
    nom: "KHATIA",
    commune_id: 1,
  },
  {
    quartier_id: 11,
    nom: "KOSSINSING",
    commune_id: 1,
  },
  {
    quartier_id: 12,
    nom: "LAKHATA",
    commune_id: 1,
  },
  {
    quartier_id: 13,
    nom: "LONKING",
    commune_id: 1,
  },
  {
    quartier_id: 14,
    nom: "MARARA",
    commune_id: 1,
  },
  {
    quartier_id: 15,
    nom: "SAKAMA",
    commune_id: 1,
  },
  {
    quartier_id: 16,
    nom: "SEKHEBADE",
    commune_id: 1,
  },
  {
    quartier_id: 17,
    nom: "THIA",
    commune_id: 1,
  },
  {
    quartier_id: 18,
    nom: "TORODOYAH",
    commune_id: 1,
  },
  {
    quartier_id: 19,
    nom: "WALIA",
    commune_id: 1,
  },
  {
    quartier_id: 20,
    nom: "WEREYAH",
    commune_id: 1,
  },
  {
    quartier_id: 21,
    nom: "YIMMAYA",
    commune_id: 1,
  },
  {
    quartier_id: 22,
    nom: "BANDEYINDE",
    commune_id: 2,
  },
  {
    quartier_id: 23,
    nom: "BOUREKHEBADE",
    commune_id: 2,
  },
  {
    quartier_id: 24,
    nom: "DOUPROU",
    commune_id: 2,
  },
  {
    quartier_id: 25,
    nom: "KOUKOUDE",
    commune_id: 2,
  },
  {
    quartier_id: 26,
    nom: "KOUMBAYAH",
    commune_id: 2,
  },
  {
    quartier_id: 27,
    nom: "KOUNDINDE",
    commune_id: 2,
  },
  {
    quartier_id: 28,
    nom: "POUKHOUN",
    commune_id: 2,
  },
  {
    quartier_id: 29,
    nom: "SIRANKA",
    commune_id: 2,
  },
  {
    quartier_id: 30,
    nom: "SOBANET",
    commune_id: 2,
  },
  {
    quartier_id: 31,
    nom: "BANGOUYA",
    commune_id: 3,
  },
  {
    quartier_id: 32,
    nom: "BASSENGUE",
    commune_id: 3,
  },
  {
    quartier_id: 33,
    nom: "BOORO KITTO",
    commune_id: 3,
  },
  {
    quartier_id: 34,
    nom: "DIXINN I",
    commune_id: 3,
  },
  {
    quartier_id: 35,
    nom: "DIXINN II",
    commune_id: 3,
  },
  {
    quartier_id: 36,
    nom: "DONYA",
    commune_id: 3,
  },
  {
    quartier_id: 37,
    nom: "KARAMOKHOYA",
    commune_id: 3,
  },
  {
    quartier_id: 38,
    nom: "KOBARARE",
    commune_id: 3,
  },
  {
    quartier_id: 39,
    nom: "KONIBALE",
    commune_id: 3,
  },
  {
    quartier_id: 40,
    nom: "KOTEYA - KITTO",
    commune_id: 3,
  },
  {
    quartier_id: 41,
    nom: "M'BENDIA",
    commune_id: 3,
  },
  {
    quartier_id: 42,
    nom: "MAKINSY",
    commune_id: 3,
  },
  {
    quartier_id: 43,
    nom: "SAYONYA",
    commune_id: 3,
  },
  {
    quartier_id: 44,
    nom: "SOUGUEBOUNYI",
    commune_id: 3,
  },
  {
    quartier_id: 45,
    nom: "TABORIAH I",
    commune_id: 3,
  },
  {
    quartier_id: 46,
    nom: "TABORIAH II",
    commune_id: 3,
  },
  {
    quartier_id: 47,
    nom: "TANENE",
    commune_id: 3,
  },
  {
    quartier_id: 48,
    nom: "TATEMA",
    commune_id: 3,
  },
  {
    quartier_id: 49,
    nom: "TINTIMA",
    commune_id: 3,
  },
  {
    quartier_id: 50,
    nom: "YANGOYA - KITTO",
    commune_id: 3,
  },
  {
    quartier_id: 51,
    nom: "YARAYAH",
    commune_id: 3,
  },
  {
    quartier_id: 52,
    nom: "BOOTA",
    commune_id: 4,
  },
  {
    quartier_id: 53,
    nom: "FAREMA",
    commune_id: 4,
  },
  {
    quartier_id: 54,
    nom: "FATAGBOLO",
    commune_id: 4,
  },
  {
    quartier_id: 55,
    nom: "GOBIDJE",
    commune_id: 4,
  },
  {
    quartier_id: 56,
    nom: "KHALO",
    commune_id: 4,
  },
  {
    quartier_id: 57,
    nom: "KOLIA - CENTRE",
    commune_id: 4,
  },
  {
    quartier_id: 58,
    nom: "KOLIA-TAFORI",
    commune_id: 4,
  },
  {
    quartier_id: 59,
    nom: "KORERA",
    commune_id: 4,
  },
  {
    quartier_id: 60,
    nom: "KOUNFA",
    commune_id: 4,
  },
  {
    quartier_id: 61,
    nom: "LALAFANYE",
    commune_id: 4,
  },
  {
    quartier_id: 62,
    nom: "LONGO",
    commune_id: 4,
  },
  {
    quartier_id: 63,
    nom: "MADINA-HOUBOU",
    commune_id: 4,
  },
  {
    quartier_id: 64,
    nom: "MELLEKHOURE",
    commune_id: 4,
  },
  {
    quartier_id: 65,
    nom: "TAGBE",
    commune_id: 4,
  },
  {
    quartier_id: 66,
    nom: "YOYAH",
    commune_id: 4,
  },
  {
    quartier_id: 67,
    nom: "BONDY",
    commune_id: 5,
  },
  {
    quartier_id: 68,
    nom: "DETEKHOUNDOU-KHOUN",
    commune_id: 5,
  },
  {
    quartier_id: 69,
    nom: "GOBIDJE",
    commune_id: 5,
  },
  {
    quartier_id: 70,
    nom: "LISSO CENTRE",
    commune_id: 5,
  },
  {
    quartier_id: 71,
    nom: "MISSIRA MORIYAH",
    commune_id: 5,
  },
  {
    quartier_id: 72,
    nom: "N'DANTARY",
    commune_id: 5,
  },
  {
    quartier_id: 73,
    nom: "SENGUELENKHOURE",
    commune_id: 5,
  },
  {
    quartier_id: 74,
    nom: "TAMALAN",
    commune_id: 5,
  },
  {
    quartier_id: 75,
    nom: "TOUBA",
    commune_id: 5,
  },
  {
    quartier_id: 76,
    nom: "WONDETTY",
    commune_id: 5,
  },
  {
    quartier_id: 77,
    nom: "BIGORI",
    commune_id: 6,
  },
  {
    quartier_id: 78,
    nom: "BONGOLON",
    commune_id: 6,
  },
  {
    quartier_id: 79,
    nom: "DANSI",
    commune_id: 6,
  },
  {
    quartier_id: 80,
    nom: "KAKALA",
    commune_id: 6,
  },
  {
    quartier_id: 81,
    nom: "KALEXES",
    commune_id: 6,
  },
  {
    quartier_id: 82,
    nom: "KATONGORON",
    commune_id: 6,
  },
  {
    quartier_id: 83,
    nom: "KOLON",
    commune_id: 6,
  },
  {
    quartier_id: 84,
    nom: "MADIA",
    commune_id: 6,
  },
  {
    quartier_id: 85,
    nom: "MANKOUNTAN CENTRE",
    commune_id: 6,
  },
  {
    quartier_id: 86,
    nom: "SIBALI",
    commune_id: 6,
  },
  {
    quartier_id: 87,
    nom: "TOUMBETTA",
    commune_id: 6,
  },
  {
    quartier_id: 88,
    nom: "YAMPONI",
    commune_id: 6,
  },
  {
    quartier_id: 89,
    nom: "DONYA",
    commune_id: 7,
  },
  {
    quartier_id: 90,
    nom: "DOTERET",
    commune_id: 7,
  },
  {
    quartier_id: 91,
    nom: "FOUTOUBOUNYI",
    commune_id: 7,
  },
  {
    quartier_id: 92,
    nom: "GANGANTA",
    commune_id: 7,
  },
  {
    quartier_id: 93,
    nom: "GBASSAYA",
    commune_id: 7,
  },
  {
    quartier_id: 94,
    nom: "KELEYA",
    commune_id: 7,
  },
  {
    quartier_id: 95,
    nom: "KHAMBAYA",
    commune_id: 7,
  },
  {
    quartier_id: 96,
    nom: "KHORIRA",
    commune_id: 7,
  },
  {
    quartier_id: 97,
    nom: "MISSIRA",
    commune_id: 7,
  },
  {
    quartier_id: 98,
    nom: "MOURAYA",
    commune_id: 7,
  },
  {
    quartier_id: 99,
    nom: "SOUMBOUYADI",
    commune_id: 7,
  },
  {
    quartier_id: 100,
    nom: "TAMITA CENTRE",
    commune_id: 7,
  },
  {
    quartier_id: 101,
    nom: "YEMBERING",
    commune_id: 7,
  },
  {
    quartier_id: 102,
    nom: "YENGUISSA",
    commune_id: 7,
  },
  {
    quartier_id: 103,
    nom: "BRIKA",
    commune_id: 8,
  },
  {
    quartier_id: 104,
    nom: "DIOGOYA",
    commune_id: 8,
  },
  {
    quartier_id: 105,
    nom: "FONFO",
    commune_id: 8,
  },
  {
    quartier_id: 106,
    nom: "FOULAYAH",
    commune_id: 8,
  },
  {
    quartier_id: 107,
    nom: "KALEKALA",
    commune_id: 8,
  },
  {
    quartier_id: 108,
    nom: "KANTELY",
    commune_id: 8,
  },
  {
    quartier_id: 109,
    nom: "KHANTATA",
    commune_id: 8,
  },
  {
    quartier_id: 110,
    nom: "KHISSILING",
    commune_id: 8,
  },
  {
    quartier_id: 111,
    nom: "KIFFINDA",
    commune_id: 8,
  },
  {
    quartier_id: 112,
    nom: "KINYAYA",
    commune_id: 8,
  },
  {
    quartier_id: 113,
    nom: "MAMYA",
    commune_id: 8,
  },
  {
    quartier_id: 114,
    nom: "MINTANI",
    commune_id: 8,
  },
  {
    quartier_id: 115,
    nom: "MONCHON",
    commune_id: 8,
  },
  {
    quartier_id: 116,
    nom: "NALOUKHOURE",
    commune_id: 8,
  },
  {
    quartier_id: 117,
    nom: "TAMBAYA",
    commune_id: 8,
  },
  {
    quartier_id: 118,
    nom: "TANENE",
    commune_id: 8,
  },
  {
    quartier_id: 119,
    nom: "TOMATA",
    commune_id: 8,
  },
  {
    quartier_id: 120,
    nom: "TOUGNIFILY CENTRE",
    commune_id: 8,
  },
  {
    quartier_id: 121,
    nom: "BARALANDE",
    commune_id: 9,
  },
  {
    quartier_id: 122,
    nom: "CORRERAH",
    commune_id: 9,
  },
  {
    quartier_id: 123,
    nom: "DIBIA",
    commune_id: 9,
  },
  {
    quartier_id: 124,
    nom: "DIOUMAYA",
    commune_id: 9,
  },
  {
    quartier_id: 125,
    nom: "GOREYE",
    commune_id: 9,
  },
  {
    quartier_id: 126,
    nom: "GUILLERE",
    commune_id: 9,
  },
  {
    quartier_id: 127,
    nom: "KADIGUIRA",
    commune_id: 9,
  },
  {
    quartier_id: 128,
    nom: "KOUGNEWADE I",
    commune_id: 9,
  },
  {
    quartier_id: 129,
    nom: "KOUGNEWADE II",
    commune_id: 9,
  },
  {
    quartier_id: 130,
    nom: "KOULIFANYA",
    commune_id: 9,
  },
  {
    quartier_id: 131,
    nom: "LAMBANYI",
    commune_id: 9,
  },
  {
    quartier_id: 132,
    nom: "MADINA",
    commune_id: 9,
  },
  {
    quartier_id: 133,
    nom: "TOMBOYA",
    commune_id: 9,
  },
  {
    quartier_id: 134,
    nom: "WAKRYA",
    commune_id: 9,
  },
  {
    quartier_id: 135,
    nom: "YOMBOYA",
    commune_id: 9,
  },
  {
    quartier_id: 136,
    nom: "BINTIMODIA-CENTRE",
    commune_id: 10,
  },
  {
    quartier_id: 137,
    nom: "GARAMA",
    commune_id: 10,
  },
  {
    quartier_id: 138,
    nom: "KANKACO",
    commune_id: 10,
  },
  {
    quartier_id: 139,
    nom: "KATACO",
    commune_id: 10,
  },
  {
    quartier_id: 140,
    nom: "KOFTONDEN",
    commune_id: 10,
  },
  {
    quartier_id: 141,
    nom: "KOLIA SANAMATO",
    commune_id: 10,
  },
  {
    quartier_id: 142,
    nom: "LINTANG",
    commune_id: 10,
  },
  {
    quartier_id: 143,
    nom: "MAREN",
    commune_id: 10,
  },
  {
    quartier_id: 144,
    nom: "BHOUNDOULENGUE",
    commune_id: 11,
  },
  {
    quartier_id: 145,
    nom: "DABISS",
    commune_id: 11,
  },
  {
    quartier_id: 146,
    nom: "HAMDALAYE",
    commune_id: 11,
  },
  {
    quartier_id: 147,
    nom: "KOUDA",
    commune_id: 11,
  },
  {
    quartier_id: 148,
    nom: "NYAMAYARA",
    commune_id: 11,
  },
  {
    quartier_id: 149,
    nom: "PARA BOLE",
    commune_id: 11,
  },
  {
    quartier_id: 150,
    nom: "SILIKONKO",
    commune_id: 11,
  },
  {
    quartier_id: 151,
    nom: "TOMBOYAH",
    commune_id: 11,
  },
  {
    quartier_id: 152,
    nom: "BINARI",
    commune_id: 12,
  },
  {
    quartier_id: 153,
    nom: "FILIMA",
    commune_id: 12,
  },
  {
    quartier_id: 154,
    nom: "KAKILENSI",
    commune_id: 12,
  },
  {
    quartier_id: 155,
    nom: "KAMAKOULOUN",
    commune_id: 12,
  },
  {
    quartier_id: 156,
    nom: "KAMSAR CENTRE",
    commune_id: 12,
  },
  {
    quartier_id: 157,
    nom: "KAMSAR CITE",
    commune_id: 12,
  },
  {
    quartier_id: 158,
    nom: "KASSONGONY",
    commune_id: 12,
  },
  {
    quartier_id: 159,
    nom: "KATONGORO",
    commune_id: 12,
  },
  {
    quartier_id: 160,
    nom: "KAWASS",
    commune_id: 12,
  },
  {
    quartier_id: 161,
    nom: "KOUFFIN",
    commune_id: 12,
  },
  {
    quartier_id: 162,
    nom: "M'BOTTINY",
    commune_id: 12,
  },
  {
    quartier_id: 163,
    nom: "MADINA-BORBOFF",
    commune_id: 12,
  },
  {
    quartier_id: 164,
    nom: "MISSIRA",
    commune_id: 12,
  },
  {
    quartier_id: 165,
    nom: "TAIGBE",
    commune_id: 12,
  },
  {
    quartier_id: 166,
    nom: "BOFFA-DAR",
    commune_id: 13,
  },
  {
    quartier_id: 167,
    nom: "DABRIBON",
    commune_id: 13,
  },
  {
    quartier_id: 168,
    nom: "DOBALY",
    commune_id: 13,
  },
  {
    quartier_id: 169,
    nom: "KADIGNET",
    commune_id: 13,
  },
  {
    quartier_id: 170,
    nom: "KALAGBA",
    commune_id: 13,
  },
  {
    quartier_id: 171,
    nom: "KAMBILAM",
    commune_id: 13,
  },
  {
    quartier_id: 172,
    nom: "KANFARANDE",
    commune_id: 13,
  },
  {
    quartier_id: 173,
    nom: "KAPKIN",
    commune_id: 13,
  },
  {
    quartier_id: 174,
    nom: "KAPSINE",
    commune_id: 13,
  },
  {
    quartier_id: 175,
    nom: "KASMAK",
    commune_id: 13,
  },
  {
    quartier_id: 176,
    nom: "KATFOURA",
    commune_id: 13,
  },
  {
    quartier_id: 177,
    nom: "KIBANCO",
    commune_id: 13,
  },
  {
    quartier_id: 178,
    nom: "KOUKOUBA",
    commune_id: 13,
  },
  {
    quartier_id: 179,
    nom: "LANSANAYA",
    commune_id: 13,
  },
  {
    quartier_id: 180,
    nom: "TARIKOURE",
    commune_id: 13,
  },
  {
    quartier_id: 181,
    nom: "BOKARIA",
    commune_id: 14,
  },
  {
    quartier_id: 182,
    nom: "DABANKOU",
    commune_id: 14,
  },
  {
    quartier_id: 183,
    nom: "DACONTA",
    commune_id: 14,
  },
  {
    quartier_id: 184,
    nom: "DIAKHABIYA",
    commune_id: 14,
  },
  {
    quartier_id: 185,
    nom: "DIASSIA",
    commune_id: 14,
  },
  {
    quartier_id: 186,
    nom: "FODECONTEYA",
    commune_id: 14,
  },
  {
    quartier_id: 187,
    nom: "KAMIKOLO",
    commune_id: 14,
  },
  {
    quartier_id: 188,
    nom: "KOLABOUI-CENTRE",
    commune_id: 14,
  },
  {
    quartier_id: 189,
    nom: "LEFOUREBOUI",
    commune_id: 14,
  },
  {
    quartier_id: 190,
    nom: "SARABAYA",
    commune_id: 14,
  },
  {
    quartier_id: 191,
    nom: "SATENEYA",
    commune_id: 14,
  },
  {
    quartier_id: 192,
    nom: "SOGOBOLY",
    commune_id: 14,
  },
  {
    quartier_id: 193,
    nom: "SONGOLON",
    commune_id: 14,
  },
  {
    quartier_id: 194,
    nom: "TABONDEYA",
    commune_id: 14,
  },
  {
    quartier_id: 195,
    nom: "TASSARA",
    commune_id: 14,
  },
  {
    quartier_id: 196,
    nom: "TASSIBOM",
    commune_id: 14,
  },
  {
    quartier_id: 197,
    nom: "BALLA",
    commune_id: 15,
  },
  {
    quartier_id: 198,
    nom: "DJOLOL",
    commune_id: 15,
  },
  {
    quartier_id: 199,
    nom: "HAFIA",
    commune_id: 15,
  },
  {
    quartier_id: 200,
    nom: "KOUSIKANSE",
    commune_id: 15,
  },
  {
    quartier_id: 201,
    nom: "MALAPOUYA",
    commune_id: 15,
  },
  {
    quartier_id: 202,
    nom: "AYE-KOYE",
    commune_id: 16,
  },
  {
    quartier_id: 203,
    nom: "BALANDOUGOU",
    commune_id: 16,
  },
  {
    quartier_id: 204,
    nom: "BAPPA-SERGENT",
    commune_id: 16,
  },
  {
    quartier_id: 205,
    nom: "BOULLERE",
    commune_id: 16,
  },
  {
    quartier_id: 206,
    nom: "GUILDHE",
    commune_id: 16,
  },
  {
    quartier_id: 207,
    nom: "KOURAWEL",
    commune_id: 16,
  },
  {
    quartier_id: 208,
    nom: "LAVAGE",
    commune_id: 16,
  },
  {
    quartier_id: 209,
    nom: "SILIDARA",
    commune_id: 16,
  },
  {
    quartier_id: 210,
    nom: "SOUCKA",
    commune_id: 16,
  },
  {
    quartier_id: 211,
    nom: "THIANKOUNNAYE",
    commune_id: 16,
  },
  {
    quartier_id: 212,
    nom: "WOSSOU",
    commune_id: 16,
  },
  {
    quartier_id: 213,
    nom: "FIFF",
    commune_id: 17,
  },
  {
    quartier_id: 214,
    nom: "GALLE-TCHOLLA",
    commune_id: 17,
  },
  {
    quartier_id: 215,
    nom: "SANSALE CENTRE",
    commune_id: 17,
  },
  {
    quartier_id: 216,
    nom: "TANENE-KANDIAFARA",
    commune_id: 17,
  },
  {
    quartier_id: 217,
    nom: "YARGA",
    commune_id: 17,
  },
  {
    quartier_id: 218,
    nom: "BOUSSOURA",
    commune_id: 18,
  },
  {
    quartier_id: 219,
    nom: "DANBANTCHAN",
    commune_id: 18,
  },
  {
    quartier_id: 220,
    nom: "DJIGUITY",
    commune_id: 18,
  },
  {
    quartier_id: 221,
    nom: "KABOYE",
    commune_id: 18,
  },
  {
    quartier_id: 222,
    nom: "KATOUGOUMA",
    commune_id: 18,
  },
  {
    quartier_id: 223,
    nom: "KIMIYA",
    commune_id: 18,
  },
  {
    quartier_id: 224,
    nom: "KINTAO-DAKONTA",
    commune_id: 18,
  },
  {
    quartier_id: 225,
    nom: "N'DAGHARA",
    commune_id: 18,
  },
  {
    quartier_id: 226,
    nom: "TANENE",
    commune_id: 18,
  },
  {
    quartier_id: 227,
    nom: "ALPHA YAYA DIALLO",
    commune_id: 19,
  },
  {
    quartier_id: 228,
    nom: "AVIATION I",
    commune_id: 19,
  },
  {
    quartier_id: 229,
    nom: "AVIATION II",
    commune_id: 19,
  },
  {
    quartier_id: 230,
    nom: "FATALA",
    commune_id: 19,
  },
  {
    quartier_id: 231,
    nom: "KATOUROU I ECOLE",
    commune_id: 19,
  },
  {
    quartier_id: 232,
    nom: "KATOUROU I MOSQUEE",
    commune_id: 19,
  },
  {
    quartier_id: 233,
    nom: "KATOUROU II",
    commune_id: 19,
  },
  {
    quartier_id: 234,
    nom: "KATOUROU III",
    commune_id: 19,
  },
  {
    quartier_id: 235,
    nom: "KOLONFIKHE",
    commune_id: 19,
  },
  {
    quartier_id: 236,
    nom: "KONDEKHOURE",
    commune_id: 19,
  },
  {
    quartier_id: 237,
    nom: "KOUNSIKHIMBELY",
    commune_id: 19,
  },
  {
    quartier_id: 238,
    nom: "SABENDE 1",
    commune_id: 19,
  },
  {
    quartier_id: 239,
    nom: "SABENDE 2",
    commune_id: 19,
  },
  {
    quartier_id: 240,
    nom: "TABOSSY I",
    commune_id: 19,
  },
  {
    quartier_id: 241,
    nom: "TIGUE LAKO",
    commune_id: 19,
  },
  {
    quartier_id: 242,
    nom: "TIGUE MOSQUEE",
    commune_id: 19,
  },
  {
    quartier_id: 243,
    nom: "BAGUINET CENTRE",
    commune_id: 20,
  },
  {
    quartier_id: 244,
    nom: "BAGUINET KIRATAGUI",
    commune_id: 20,
  },
  {
    quartier_id: 245,
    nom: "DORONYI",
    commune_id: 20,
  },
  {
    quartier_id: 246,
    nom: "FANDJETA",
    commune_id: 20,
  },
  {
    quartier_id: 247,
    nom: "FRIA-VILLAGE",
    commune_id: 20,
  },
  {
    quartier_id: 248,
    nom: "GNANKAKHOURE",
    commune_id: 20,
  },
  {
    quartier_id: 249,
    nom: "MADINA",
    commune_id: 20,
  },
  {
    quartier_id: 250,
    nom: "SIMBAKHOULOUN",
    commune_id: 20,
  },
  {
    quartier_id: 251,
    nom: "HORE-PARA",
    commune_id: 21,
  },
  {
    quartier_id: 252,
    nom: "KOOLA",
    commune_id: 21,
  },
  {
    quartier_id: 253,
    nom: "MADINA-TOSSOKERE",
    commune_id: 21,
  },
  {
    quartier_id: 254,
    nom: "MISSIRA",
    commune_id: 21,
  },
  {
    quartier_id: 255,
    nom: "SODIORE",
    commune_id: 21,
  },
  {
    quartier_id: 256,
    nom: "TOULEL",
    commune_id: 21,
  },
  {
    quartier_id: 257,
    nom: "DOUMBOUKOUNSSY",
    commune_id: 22,
  },
  {
    quartier_id: 258,
    nom: "MAMBORI  FOREYA",
    commune_id: 22,
  },
  {
    quartier_id: 259,
    nom: "MAMBORI KONKOBAYA",
    commune_id: 22,
  },
  {
    quartier_id: 260,
    nom: "TANENE",
    commune_id: 22,
  },
  {
    quartier_id: 261,
    nom: "TORMELEN",
    commune_id: 22,
  },
  {
    quartier_id: 262,
    nom: "WOULOUNKOBI",
    commune_id: 22,
  },
  {
    quartier_id: 263,
    nom: "BARKERE",
    commune_id: 23,
  },
  {
    quartier_id: 264,
    nom: "BASSANTO",
    commune_id: 23,
  },
  {
    quartier_id: 265,
    nom: "DANDOU",
    commune_id: 23,
  },
  {
    quartier_id: 266,
    nom: "HAFIA",
    commune_id: 23,
  },
  {
    quartier_id: 267,
    nom: "HOUMBAYA",
    commune_id: 23,
  },
  {
    quartier_id: 268,
    nom: "KANYAN",
    commune_id: 23,
  },
  {
    quartier_id: 269,
    nom: "MADINA KEMBERA",
    commune_id: 23,
  },
  {
    quartier_id: 270,
    nom: "SINTHIOUROU",
    commune_id: 23,
  },
  {
    quartier_id: 271,
    nom: "TOULON",
    commune_id: 23,
  },
  {
    quartier_id: 272,
    nom: "FOULAMORY CENTRE",
    commune_id: 24,
  },
  {
    quartier_id: 273,
    nom: "KANKODI",
    commune_id: 24,
  },
  {
    quartier_id: 274,
    nom: "KITHIAR",
    commune_id: 24,
  },
  {
    quartier_id: 275,
    nom: "TABANDJAN",
    commune_id: 24,
  },
  {
    quartier_id: 276,
    nom: "BOULLERE",
    commune_id: 25,
  },
  {
    quartier_id: 277,
    nom: "DAR - ES - SALAM",
    commune_id: 25,
  },
  {
    quartier_id: 278,
    nom: "GALLE DARA",
    commune_id: 25,
  },
  {
    quartier_id: 279,
    nom: "KABOBO",
    commune_id: 25,
  },
  {
    quartier_id: 280,
    nom: "KAKONI CENTRE",
    commune_id: 25,
  },
  {
    quartier_id: 281,
    nom: "KASSAYA BAMBA",
    commune_id: 25,
  },
  {
    quartier_id: 282,
    nom: "MADINA",
    commune_id: 25,
  },
  {
    quartier_id: 283,
    nom: "N'DANTARI",
    commune_id: 25,
  },
  {
    quartier_id: 284,
    nom: "SINTHIOUROU WARA",
    commune_id: 25,
  },
  {
    quartier_id: 285,
    nom: "TELIRE",
    commune_id: 25,
  },
  {
    quartier_id: 286,
    nom: "BHOULY",
    commune_id: 26,
  },
  {
    quartier_id: 287,
    nom: "DARA BOWE",
    commune_id: 26,
  },
  {
    quartier_id: 288,
    nom: "DOMBIYADI",
    commune_id: 26,
  },
  {
    quartier_id: 289,
    nom: "GUIDALY",
    commune_id: 26,
  },
  {
    quartier_id: 290,
    nom: "HAKOUNDE THIANGUI",
    commune_id: 26,
  },
  {
    quartier_id: 291,
    nom: "KAMELE",
    commune_id: 26,
  },
  {
    quartier_id: 292,
    nom: "KEMBERA",
    commune_id: 26,
  },
  {
    quartier_id: 293,
    nom: "KOUMBIA CENTRE",
    commune_id: 26,
  },
  {
    quartier_id: 294,
    nom: "MADINA BOWE",
    commune_id: 26,
  },
  {
    quartier_id: 295,
    nom: "MADINA GUILEDJI",
    commune_id: 26,
  },
  {
    quartier_id: 296,
    nom: "N'DIOURIA",
    commune_id: 26,
  },
  {
    quartier_id: 297,
    nom: "NETERE",
    commune_id: 26,
  },
  {
    quartier_id: 298,
    nom: "PETY",
    commune_id: 26,
  },
  {
    quartier_id: 299,
    nom: "BOUKOUNA",
    commune_id: 27,
  },
  {
    quartier_id: 300,
    nom: "DENGUETERI",
    commune_id: 27,
  },
  {
    quartier_id: 301,
    nom: "HIMAYA",
    commune_id: 27,
  },
  {
    quartier_id: 302,
    nom: "KENERY",
    commune_id: 27,
  },
  {
    quartier_id: 303,
    nom: "KOUNSITEL CENTRE",
    commune_id: 27,
  },
  {
    quartier_id: 304,
    nom: "DOGHI DABHI",
    commune_id: 28,
  },
  {
    quartier_id: 305,
    nom: "GOUNGOUROU",
    commune_id: 28,
  },
  {
    quartier_id: 306,
    nom: "HILIME",
    commune_id: 28,
  },
  {
    quartier_id: 307,
    nom: "KOUNSI",
    commune_id: 28,
  },
  {
    quartier_id: 308,
    nom: "MALANTA CENTRE",
    commune_id: 28,
  },
  {
    quartier_id: 309,
    nom: "N'DANTABA",
    commune_id: 28,
  },
  {
    quartier_id: 310,
    nom: "BITTING",
    commune_id: 29,
  },
  {
    quartier_id: 311,
    nom: "KALIA",
    commune_id: 29,
  },
  {
    quartier_id: 312,
    nom: "KOLOSSA",
    commune_id: 29,
  },
  {
    quartier_id: 313,
    nom: "NATA",
    commune_id: 29,
  },
  {
    quartier_id: 314,
    nom: "SAALY",
    commune_id: 29,
  },
  {
    quartier_id: 315,
    nom: "SOOLOU",
    commune_id: 29,
  },
  {
    quartier_id: 316,
    nom: "TAMBI",
    commune_id: 29,
  },
  {
    quartier_id: 317,
    nom: "TOUBA",
    commune_id: 29,
  },
  {
    quartier_id: 318,
    nom: "BARKERE",
    commune_id: 30,
  },
  {
    quartier_id: 319,
    nom: "MAWBA",
    commune_id: 30,
  },
  {
    quartier_id: 320,
    nom: "N'DALAOU",
    commune_id: 30,
  },
  {
    quartier_id: 321,
    nom: "PARAWALI",
    commune_id: 30,
  },
  {
    quartier_id: 322,
    nom: "SINTHIROU - TOUMBE",
    commune_id: 30,
  },
  {
    quartier_id: 323,
    nom: "TENKETA",
    commune_id: 30,
  },
  {
    quartier_id: 324,
    nom: "WALINGUI",
    commune_id: 30,
  },
  {
    quartier_id: 325,
    nom: "WENDOU M'BOUR CENTRE",
    commune_id: 30,
  },
  {
    quartier_id: 326,
    nom: "ATHIABALY",
    commune_id: 31,
  },
  {
    quartier_id: 327,
    nom: "BOUSSOURA",
    commune_id: 31,
  },
  {
    quartier_id: 328,
    nom: "ECOLE",
    commune_id: 31,
  },
  {
    quartier_id: 329,
    nom: "HAFIA",
    commune_id: 31,
  },
  {
    quartier_id: 330,
    nom: "HAMDALLAYE",
    commune_id: 31,
  },
  {
    quartier_id: 331,
    nom: "KANDAIDA",
    commune_id: 31,
  },
  {
    quartier_id: 332,
    nom: "ACKOUL",
    commune_id: 32,
  },
  {
    quartier_id: 333,
    nom: "GUINGAN CENTRE",
    commune_id: 32,
  },
  {
    quartier_id: 334,
    nom: "KIFFAYA",
    commune_id: 32,
  },
  {
    quartier_id: 335,
    nom: "KOUDIAN",
    commune_id: 32,
  },
  {
    quartier_id: 336,
    nom: "LONDAL",
    commune_id: 32,
  },
  {
    quartier_id: 337,
    nom: "POUGHAR",
    commune_id: 32,
  },
  {
    quartier_id: 338,
    nom: "THIAGUIS",
    commune_id: 32,
  },
  {
    quartier_id: 339,
    nom: "AKADASSO",
    commune_id: 33,
  },
  {
    quartier_id: 340,
    nom: "DOUKOURELLA",
    commune_id: 33,
  },
  {
    quartier_id: 341,
    nom: "KAMABY I",
    commune_id: 33,
  },
  {
    quartier_id: 342,
    nom: "KAMABY II",
    commune_id: 33,
  },
  {
    quartier_id: 343,
    nom: "SINTHIAN PATHE",
    commune_id: 33,
  },
  {
    quartier_id: 344,
    nom: "TABADEL",
    commune_id: 33,
  },
  {
    quartier_id: 345,
    nom: "KAPPARABINA",
    commune_id: 34,
  },
  {
    quartier_id: 346,
    nom: "MISSIRAH",
    commune_id: 34,
  },
  {
    quartier_id: 347,
    nom: "SALEMATA",
    commune_id: 34,
  },
  {
    quartier_id: 348,
    nom: "SAMBAILO CENTRE",
    commune_id: 34,
  },
  {
    quartier_id: 349,
    nom: "SAMBALDE",
    commune_id: 34,
  },
  {
    quartier_id: 350,
    nom: "ALTOU",
    commune_id: 35,
  },
  {
    quartier_id: 351,
    nom: "BARKERE",
    commune_id: 35,
  },
  {
    quartier_id: 352,
    nom: "BESSEOURO",
    commune_id: 35,
  },
  {
    quartier_id: 353,
    nom: "KATHIAOUROU",
    commune_id: 35,
  },
  {
    quartier_id: 354,
    nom: "KOUTTAN",
    commune_id: 35,
  },
  {
    quartier_id: 355,
    nom: "MADINA BADIAR",
    commune_id: 35,
  },
  {
    quartier_id: 356,
    nom: "MAROU",
    commune_id: 35,
  },
  {
    quartier_id: 357,
    nom: "PAOUNKA",
    commune_id: 35,
  },
  {
    quartier_id: 358,
    nom: "SANKA",
    commune_id: 35,
  },
  {
    quartier_id: 359,
    nom: "SAREBOIDO I",
    commune_id: 35,
  },
  {
    quartier_id: 360,
    nom: "SAREBOIDO II",
    commune_id: 35,
  },
  {
    quartier_id: 361,
    nom: "SAREKALY",
    commune_id: 35,
  },
  {
    quartier_id: 362,
    nom: "SINTHIAN SEKOU",
    commune_id: 35,
  },
  {
    quartier_id: 363,
    nom: "SOUNKOUTOU",
    commune_id: 35,
  },
  {
    quartier_id: 364,
    nom: "BOTOMELI",
    commune_id: 36,
  },
  {
    quartier_id: 365,
    nom: "HAMDALLAYE",
    commune_id: 36,
  },
  {
    quartier_id: 366,
    nom: "IDHAR",
    commune_id: 36,
  },
  {
    quartier_id: 367,
    nom: "KOSSI",
    commune_id: 36,
  },
  {
    quartier_id: 368,
    nom: "KOUBIA",
    commune_id: 36,
  },
  {
    quartier_id: 369,
    nom: "LAMBAGOL",
    commune_id: 36,
  },
  {
    quartier_id: 370,
    nom: "LEY - KONE",
    commune_id: 36,
  },
  {
    quartier_id: 371,
    nom: "NANDOUMBA",
    commune_id: 36,
  },
  {
    quartier_id: 372,
    nom: "TERMESSE CENTRE",
    commune_id: 36,
  },
  {
    quartier_id: 373,
    nom: "ITHIOU",
    commune_id: 37,
  },
  {
    quartier_id: 374,
    nom: "KIDACK",
    commune_id: 37,
  },
  {
    quartier_id: 375,
    nom: "OURACK",
    commune_id: 37,
  },
  {
    quartier_id: 376,
    nom: "OUYANE",
    commune_id: 37,
  },
  {
    quartier_id: 377,
    nom: "YOUKOUNKOUN CENTRE",
    commune_id: 37,
  },
  {
    quartier_id: 378,
    nom: "BELLE-VUE ECOLE",
    commune_id: 38,
  },
  {
    quartier_id: 379,
    nom: "BELLE-VUE MARCHE 1",
    commune_id: 38,
  },
  {
    quartier_id: 380,
    nom: "BELLE-VUE MARCHE 2",
    commune_id: 38,
  },
  {
    quartier_id: 381,
    nom: "CAMAYENNE",
    commune_id: 38,
  },
  {
    quartier_id: 382,
    nom: "CAMEROUN",
    commune_id: 38,
  },
  {
    quartier_id: 383,
    nom: "DIXINN CENTRE 1",
    commune_id: 38,
  },
  {
    quartier_id: 384,
    nom: "DIXINN CENTRE 2",
    commune_id: 38,
  },
  {
    quartier_id: 385,
    nom: "DIXINN GARE",
    commune_id: 38,
  },
  {
    quartier_id: 386,
    nom: "DIXINN GARE RAILS",
    commune_id: 38,
  },
  {
    quartier_id: 387,
    nom: "DIXINN MOSQUEE",
    commune_id: 38,
  },
  {
    quartier_id: 388,
    nom: "DIXINN PORT",
    commune_id: 38,
  },
  {
    quartier_id: 389,
    nom: "HAFIA 1",
    commune_id: 38,
  },
  {
    quartier_id: 390,
    nom: "HAFIA 2",
    commune_id: 38,
  },
  {
    quartier_id: 391,
    nom: "HAFIA 3",
    commune_id: 38,
  },
  {
    quartier_id: 392,
    nom: "HAFIA CHATEAU D'EAU",
    commune_id: 38,
  },
  {
    quartier_id: 393,
    nom: "HAFIA MINIERE 1",
    commune_id: 38,
  },
  {
    quartier_id: 394,
    nom: "HAFIA MINIERE 2",
    commune_id: 38,
  },
  {
    quartier_id: 395,
    nom: "HAFIA MINIERE CENTRE",
    commune_id: 38,
  },
  {
    quartier_id: 396,
    nom: "HAFIA MOSQUEE",
    commune_id: 38,
  },
  {
    quartier_id: 397,
    nom: "KENIEN",
    commune_id: 38,
  },
  {
    quartier_id: 398,
    nom: "LANDREAH",
    commune_id: 38,
  },
  {
    quartier_id: 399,
    nom: "MINIERE CITE",
    commune_id: 38,
  },
  {
    quartier_id: 400,
    nom: "ALMAMYA I",
    commune_id: 39,
  },
  {
    quartier_id: 401,
    nom: "ALMAMYA II",
    commune_id: 39,
  },
  {
    quartier_id: 402,
    nom: "BOULBINET",
    commune_id: 39,
  },
  {
    quartier_id: 403,
    nom: "CORONTHIE I",
    commune_id: 39,
  },
  {
    quartier_id: 404,
    nom: "CORONTHIE II",
    commune_id: 39,
  },
  {
    quartier_id: 405,
    nom: "KOULEWONDY",
    commune_id: 39,
  },
  {
    quartier_id: 406,
    nom: "MANQUEPAS",
    commune_id: 39,
  },
  {
    quartier_id: 407,
    nom: "SANDERVALIA",
    commune_id: 39,
  },
  {
    quartier_id: 408,
    nom: "SANS-FIL",
    commune_id: 39,
  },
  {
    quartier_id: 409,
    nom: "TEMINETAYE",
    commune_id: 39,
  },
  {
    quartier_id: 410,
    nom: "TOMBO",
    commune_id: 39,
  },
  {
    quartier_id: 411,
    nom: "KASSA 1",
    commune_id: 40,
  },
  {
    quartier_id: 412,
    nom: "KASSA 2",
    commune_id: 40,
  },
  {
    quartier_id: 413,
    nom: "KASSA 3",
    commune_id: 40,
  },
  {
    quartier_id: 414,
    nom: "KOROMANDJA",
    commune_id: 40,
  },
  {
    quartier_id: 415,
    nom: "MANGUE",
    commune_id: 40,
  },
  {
    quartier_id: 416,
    nom: "ROOM",
    commune_id: 40,
  },
  {
    quartier_id: 417,
    nom: "FOTOBA",
    commune_id: 40,
  },
  {
    quartier_id: 418,
    nom: "BONFI",
    commune_id: 41,
  },
  {
    quartier_id: 419,
    nom: "BONFI MARCHE",
    commune_id: 41,
  },
  {
    quartier_id: 420,
    nom: "BONFI ROUTIERE",
    commune_id: 41,
  },
  {
    quartier_id: 421,
    nom: "BOUSSOURA",
    commune_id: 41,
  },
  {
    quartier_id: 422,
    nom: "CARRIERE CENTRE",
    commune_id: 41,
  },
  {
    quartier_id: 423,
    nom: "CARRIERE CITE",
    commune_id: 41,
  },
  {
    quartier_id: 424,
    nom: "COLEAH CENTRE",
    commune_id: 41,
  },
  {
    quartier_id: 425,
    nom: "COLEAH CITE",
    commune_id: 41,
  },
  {
    quartier_id: 426,
    nom: "COLEAH DOMINO",
    commune_id: 41,
  },
  {
    quartier_id: 427,
    nom: "COLEAH IMPRIMERIE",
    commune_id: 41,
  },
  {
    quartier_id: 428,
    nom: "HERMAKONON",
    commune_id: 41,
  },
  {
    quartier_id: 429,
    nom: "HERMAKONON MOSQUEE",
    commune_id: 41,
  },
  {
    quartier_id: 430,
    nom: "LANSEBOUNDJI",
    commune_id: 41,
  },
  {
    quartier_id: 431,
    nom: "MADINA CENTRE",
    commune_id: 41,
  },
  {
    quartier_id: 432,
    nom: "MADINA CITE",
    commune_id: 41,
  },
  {
    quartier_id: 433,
    nom: "MADINA ECOLE",
    commune_id: 41,
  },
  {
    quartier_id: 434,
    nom: "MADINA MARCHE",
    commune_id: 41,
  },
  {
    quartier_id: 435,
    nom: "MADINA MOSQUEE",
    commune_id: 41,
  },
  {
    quartier_id: 436,
    nom: "MAFANCO",
    commune_id: 41,
  },
  {
    quartier_id: 437,
    nom: "MAFANCO CENTRE",
    commune_id: 41,
  },
  {
    quartier_id: 438,
    nom: "MATAM",
    commune_id: 41,
  },
  {
    quartier_id: 439,
    nom: "MATAM CENTRE",
    commune_id: 41,
  },
  {
    quartier_id: 440,
    nom: "MATAM LIDO",
    commune_id: 41,
  },
  {
    quartier_id: 441,
    nom: "TOUGUIWONDY",
    commune_id: 41,
  },
  {
    quartier_id: 442,
    nom: "BEHANZIN",
    commune_id: 42,
  },
  {
    quartier_id: 443,
    nom: "CITE DE L'AIR",
    commune_id: 42,
  },
  {
    quartier_id: 444,
    nom: "DABOMPA",
    commune_id: 42,
  },
  {
    quartier_id: 445,
    nom: "DABOMPA PLATEAU",
    commune_id: 42,
  },
  {
    quartier_id: 446,
    nom: "DABONDY I",
    commune_id: 42,
  },
  {
    quartier_id: 447,
    nom: "DABONDY II",
    commune_id: 42,
  },
  {
    quartier_id: 448,
    nom: "DABONDY III",
    commune_id: 42,
  },
  {
    quartier_id: 449,
    nom: "DABONDY ECOLE",
    commune_id: 42,
  },
  {
    quartier_id: 450,
    nom: "DABONDY RAILS",
    commune_id: 42,
  },
  {
    quartier_id: 451,
    nom: "DAR ES SALAM",
    commune_id: 42,
  },
  {
    quartier_id: 452,
    nom: "ENTA MARCHE",
    commune_id: 42,
  },
  {
    quartier_id: 453,
    nom: "GBESSIA CENTRE",
    commune_id: 42,
  },
  {
    quartier_id: 454,
    nom: "GBESSIA CITE II",
    commune_id: 42,
  },
  {
    quartier_id: 455,
    nom: "GBESSIA CITE I",
    commune_id: 42,
  },
  {
    quartier_id: 456,
    nom: "GBESSIA CITE III",
    commune_id: 42,
  },
  {
    quartier_id: 457,
    nom: "GBESSIA ECOLE",
    commune_id: 42,
  },
  {
    quartier_id: 458,
    nom: "GBESSIA PORT I",
    commune_id: 42,
  },
  {
    quartier_id: 459,
    nom: "GBESSIA PORT II",
    commune_id: 42,
  },
  {
    quartier_id: 460,
    nom: "KISSOSSO",
    commune_id: 42,
  },
  {
    quartier_id: 461,
    nom: "KISSOSSO PLATEAU",
    commune_id: 42,
  },
  {
    quartier_id: 462,
    nom: "LANSANAYAH",
    commune_id: 42,
  },
  {
    quartier_id: 463,
    nom: "MATOTO CENTRE",
    commune_id: 42,
  },
  {
    quartier_id: 464,
    nom: "MATOTO KHABITAYA",
    commune_id: 42,
  },
  {
    quartier_id: 465,
    nom: "MATOTO MARCHE",
    commune_id: 42,
  },
  {
    quartier_id: 466,
    nom: "SANGOYAH MARCHE",
    commune_id: 42,
  },
  {
    quartier_id: 467,
    nom: "SANGOYAH MOSQUEE",
    commune_id: 42,
  },
  {
    quartier_id: 468,
    nom: "SIMBAYA I",
    commune_id: 42,
  },
  {
    quartier_id: 469,
    nom: "SIMBAYA II",
    commune_id: 42,
  },
  {
    quartier_id: 470,
    nom: "SIMBAYA ECOLE",
    commune_id: 42,
  },
  {
    quartier_id: 471,
    nom: "TANENE MARCHE",
    commune_id: 42,
  },
  {
    quartier_id: 472,
    nom: "TANENE MOSQUEE",
    commune_id: 42,
  },
  {
    quartier_id: 473,
    nom: "TOMBOLIA",
    commune_id: 42,
  },
  {
    quartier_id: 474,
    nom: "TOMBOLIA PLATEAU",
    commune_id: 42,
  },
  {
    quartier_id: 475,
    nom: "YIMBAYA ECOLE",
    commune_id: 42,
  },
  {
    quartier_id: 476,
    nom: "YIMBAYA PERMANENCE",
    commune_id: 42,
  },
  {
    quartier_id: 477,
    nom: "YIMBAYA PORT",
    commune_id: 42,
  },
  {
    quartier_id: 478,
    nom: "YIMBAYA TANNERIE",
    commune_id: 42,
  },
  {
    quartier_id: 479,
    nom: "BANTOUNKA I",
    commune_id: 43,
  },
  {
    quartier_id: 480,
    nom: "BANTOUNKA II",
    commune_id: 43,
  },
  {
    quartier_id: 481,
    nom: "DAR ES SALAM I",
    commune_id: 43,
  },
  {
    quartier_id: 482,
    nom: "DAR ES SALAM II",
    commune_id: 43,
  },
  {
    quartier_id: 483,
    nom: "HAMDALLAYE I",
    commune_id: 43,
  },
  {
    quartier_id: 484,
    nom: "HAMDALLAYE II",
    commune_id: 43,
  },
  {
    quartier_id: 485,
    nom: "HAMDALLAYE MOSQUEE",
    commune_id: 43,
  },
  {
    quartier_id: 486,
    nom: "KAPORO CENTRE",
    commune_id: 43,
  },
  {
    quartier_id: 487,
    nom: "KAPORO RAILS",
    commune_id: 43,
  },
  {
    quartier_id: 488,
    nom: "KIPE",
    commune_id: 43,
  },
  {
    quartier_id: 489,
    nom: "KOBAYA",
    commune_id: 43,
  },
  {
    quartier_id: 490,
    nom: "KOLOMA I",
    commune_id: 43,
  },
  {
    quartier_id: 491,
    nom: "KOLOMA II",
    commune_id: 43,
  },
  {
    quartier_id: 492,
    nom: "KOLOMA SOLOPRIMO",
    commune_id: 43,
  },
  {
    quartier_id: 493,
    nom: "LAMBANDJI",
    commune_id: 43,
  },
  {
    quartier_id: 494,
    nom: "NASSOUROULAYE",
    commune_id: 43,
  },
  {
    quartier_id: 495,
    nom: "NONGO",
    commune_id: 43,
  },
  {
    quartier_id: 496,
    nom: "NONGO TAADY",
    commune_id: 43,
  },
  {
    quartier_id: 497,
    nom: "RATOMA CENTRE",
    commune_id: 43,
  },
  {
    quartier_id: 498,
    nom: "RATOMA DISPENSAIRE",
    commune_id: 43,
  },
  {
    quartier_id: 499,
    nom: "SIMBAYA GARE",
    commune_id: 43,
  },
  {
    quartier_id: 500,
    nom: "SONFONIA CENTRE I",
    commune_id: 43,
  },
  {
    quartier_id: 501,
    nom: "SONFONIA CENTRE II",
    commune_id: 43,
  },
  {
    quartier_id: 502,
    nom: "SONFONIA GARE I",
    commune_id: 43,
  },
  {
    quartier_id: 503,
    nom: "SONFONIA GARE II",
    commune_id: 43,
  },
  {
    quartier_id: 504,
    nom: "SOUMANBOSSIA",
    commune_id: 43,
  },
  {
    quartier_id: 505,
    nom: "TAOUYAH",
    commune_id: 43,
  },
  {
    quartier_id: 506,
    nom: "WANINDARA I",
    commune_id: 43,
  },
  {
    quartier_id: 507,
    nom: "WANINDARA II",
    commune_id: 43,
  },
  {
    quartier_id: 508,
    nom: "WANINDARA III",
    commune_id: 43,
  },
  {
    quartier_id: 509,
    nom: "WAREYAH",
    commune_id: 43,
  },
  {
    quartier_id: 510,
    nom: "YATTAYA",
    commune_id: 43,
  },
  {
    quartier_id: 511,
    nom: "YATTAYA FOSSIDET",
    commune_id: 43,
  },
  {
    quartier_id: 512,
    nom: "YEMBEYA",
    commune_id: 43,
  },
  {
    quartier_id: 513,
    nom: "BABILAYA",
    commune_id: 44,
  },
  {
    quartier_id: 514,
    nom: "BANIRE",
    commune_id: 44,
  },
  {
    quartier_id: 515,
    nom: "DABOLAKORO",
    commune_id: 44,
  },
  {
    quartier_id: 516,
    nom: "FOUNDENG I",
    commune_id: 44,
  },
  {
    quartier_id: 517,
    nom: "FOUNDENG II",
    commune_id: 44,
  },
  {
    quartier_id: 518,
    nom: "HAMDALLAYE",
    commune_id: 44,
  },
  {
    quartier_id: 519,
    nom: "HEREMAKONON",
    commune_id: 44,
  },
  {
    quartier_id: 520,
    nom: "KALELA",
    commune_id: 44,
  },
  {
    quartier_id: 521,
    nom: "KAMBAYA",
    commune_id: 44,
  },
  {
    quartier_id: 522,
    nom: "KONKRONYA",
    commune_id: 44,
  },
  {
    quartier_id: 523,
    nom: "SINCERY",
    commune_id: 44,
  },
  {
    quartier_id: 524,
    nom: "SOGNESSA",
    commune_id: 44,
  },
  {
    quartier_id: 525,
    nom: "TINKISSO",
    commune_id: 44,
  },
  {
    quartier_id: 526,
    nom: "ARFAMOUSSAYA CENTRE",
    commune_id: 45,
  },
  {
    quartier_id: 527,
    nom: "FADAMA",
    commune_id: 45,
  },
  {
    quartier_id: 528,
    nom: "FELLA-HAMDALLAYE",
    commune_id: 45,
  },
  {
    quartier_id: 529,
    nom: "BADIKO",
    commune_id: 46,
  },
  {
    quartier_id: 530,
    nom: "BANDANKELEN",
    commune_id: 46,
  },
  {
    quartier_id: 531,
    nom: "DALADO",
    commune_id: 46,
  },
  {
    quartier_id: 532,
    nom: "DIABARY-DALADO",
    commune_id: 46,
  },
  {
    quartier_id: 533,
    nom: "HERAKO",
    commune_id: 46,
  },
  {
    quartier_id: 534,
    nom: "HEREMAKONO",
    commune_id: 46,
  },
  {
    quartier_id: 535,
    nom: "KALLELA",
    commune_id: 46,
  },
  {
    quartier_id: 536,
    nom: "KEBEYA I",
    commune_id: 46,
  },
  {
    quartier_id: 537,
    nom: "KEBEYA II",
    commune_id: 46,
  },
  {
    quartier_id: 538,
    nom: "MORIGBEYA",
    commune_id: 46,
  },
  {
    quartier_id: 539,
    nom: "NAFADJI",
    commune_id: 46,
  },
  {
    quartier_id: 540,
    nom: "NIANDAN",
    commune_id: 46,
  },
  {
    quartier_id: 541,
    nom: "SOUARELA",
    commune_id: 46,
  },
  {
    quartier_id: 542,
    nom: "BALAYAN",
    commune_id: 47,
  },
  {
    quartier_id: 543,
    nom: "BASSY",
    commune_id: 47,
  },
  {
    quartier_id: 544,
    nom: "DIBAMBA",
    commune_id: 47,
  },
  {
    quartier_id: 545,
    nom: "HAMDALLAYE",
    commune_id: 47,
  },
  {
    quartier_id: 546,
    nom: "KAMBAYA",
    commune_id: 47,
  },
  {
    quartier_id: 547,
    nom: "KANKANFODEYA",
    commune_id: 47,
  },
  {
    quartier_id: 548,
    nom: "KOLON",
    commune_id: 47,
  },
  {
    quartier_id: 549,
    nom: "LOPPE",
    commune_id: 47,
  },
  {
    quartier_id: 550,
    nom: "SAMPOLIA",
    commune_id: 47,
  },
  {
    quartier_id: 551,
    nom: "TINKISSO",
    commune_id: 47,
  },
  {
    quartier_id: 552,
    nom: "TOUMANIA",
    commune_id: 47,
  },
  {
    quartier_id: 553,
    nom: "DABOLA- BERETE",
    commune_id: 48,
  },
  {
    quartier_id: 554,
    nom: "DOGOMET CENTRE   II",
    commune_id: 48,
  },
  {
    quartier_id: 555,
    nom: "DOGOMET CENTRE  I",
    commune_id: 48,
  },
  {
    quartier_id: 556,
    nom: "FELLO-N'DIANDY",
    commune_id: 48,
  },
  {
    quartier_id: 557,
    nom: "KOBOLONIA",
    commune_id: 48,
  },
  {
    quartier_id: 558,
    nom: "KOOLO-HINDE",
    commune_id: 48,
  },
  {
    quartier_id: 559,
    nom: "SARIFOULA-BAFING",
    commune_id: 48,
  },
  {
    quartier_id: 560,
    nom: "SEGAYA",
    commune_id: 48,
  },
  {
    quartier_id: 561,
    nom: "SITA-KOTO",
    commune_id: 48,
  },
  {
    quartier_id: 562,
    nom: "TOTYA",
    commune_id: 48,
  },
  {
    quartier_id: 563,
    nom: "BOUKA",
    commune_id: 49,
  },
  {
    quartier_id: 564,
    nom: "DIGUILIN",
    commune_id: 49,
  },
  {
    quartier_id: 565,
    nom: "KANKAMA CENTRE",
    commune_id: 49,
  },
  {
    quartier_id: 566,
    nom: "SAKOLA",
    commune_id: 49,
  },
  {
    quartier_id: 567,
    nom: "KINDOYE I",
    commune_id: 50,
  },
  {
    quartier_id: 568,
    nom: "KINDOYE II",
    commune_id: 50,
  },
  {
    quartier_id: 569,
    nom: "SARIFOULA WALAN",
    commune_id: 50,
  },
  {
    quartier_id: 570,
    nom: "TIGUISSAN",
    commune_id: 50,
  },
  {
    quartier_id: 571,
    nom: "DANDAKARA",
    commune_id: 51,
  },
  {
    quartier_id: 572,
    nom: "KONINDOU I",
    commune_id: 51,
  },
  {
    quartier_id: 573,
    nom: "KONINDOU II",
    commune_id: 51,
  },
  {
    quartier_id: 574,
    nom: "DIABAKANIA",
    commune_id: 52,
  },
  {
    quartier_id: 575,
    nom: "FINALA",
    commune_id: 52,
  },
  {
    quartier_id: 576,
    nom: "KONSO",
    commune_id: 52,
  },
  {
    quartier_id: 577,
    nom: "N'DEMA",
    commune_id: 52,
  },
  {
    quartier_id: 578,
    nom: "SEMBAKOUNIA",
    commune_id: 52,
  },
  {
    quartier_id: 579,
    nom: "BALLA GNOUMAYA",
    commune_id: 53,
  },
  {
    quartier_id: 580,
    nom: "BHOURIA",
    commune_id: 53,
  },
  {
    quartier_id: 581,
    nom: "HELLAYABHE",
    commune_id: 53,
  },
  {
    quartier_id: 582,
    nom: "KAMBAN AINDE",
    commune_id: 53,
  },
  {
    quartier_id: 583,
    nom: "KAMBAN SABE",
    commune_id: 53,
  },
  {
    quartier_id: 584,
    nom: "KEBALY",
    commune_id: 53,
  },
  {
    quartier_id: 585,
    nom: "KOUBI LEY SERE",
    commune_id: 53,
  },
  {
    quartier_id: 586,
    nom: "KOUMBIYA LEY FELLO",
    commune_id: 53,
  },
  {
    quartier_id: 587,
    nom: "KOUROULA",
    commune_id: 53,
  },
  {
    quartier_id: 588,
    nom: "LANKON",
    commune_id: 53,
  },
  {
    quartier_id: 589,
    nom: "MANDEN",
    commune_id: 53,
  },
  {
    quartier_id: 590,
    nom: "PARADJI",
    commune_id: 53,
  },
  {
    quartier_id: 591,
    nom: "PARAWOL DJAGUI",
    commune_id: 53,
  },
  {
    quartier_id: 592,
    nom: "SEBEKORO",
    commune_id: 53,
  },
  {
    quartier_id: 593,
    nom: "TINKISSO",
    commune_id: 53,
  },
  {
    quartier_id: 594,
    nom: "BANORA CENTRE",
    commune_id: 54,
  },
  {
    quartier_id: 595,
    nom: "BOUBERE",
    commune_id: 54,
  },
  {
    quartier_id: 596,
    nom: "BOUKARIA",
    commune_id: 54,
  },
  {
    quartier_id: 597,
    nom: "KOKOROBANI",
    commune_id: 54,
  },
  {
    quartier_id: 598,
    nom: "KOLLA",
    commune_id: 54,
  },
  {
    quartier_id: 599,
    nom: "LOPPE-SOUNTOU",
    commune_id: 54,
  },
  {
    quartier_id: 600,
    nom: "M'BALLOUFRA",
    commune_id: 54,
  },
  {
    quartier_id: 601,
    nom: "M'BONET",
    commune_id: 54,
  },
  {
    quartier_id: 602,
    nom: "MATAGANIA",
    commune_id: 54,
  },
  {
    quartier_id: 603,
    nom: "DIARENDI",
    commune_id: 54,
  },
  {
    quartier_id: 604,
    nom: "NAFADJI",
    commune_id: 54,
  },
  {
    quartier_id: 605,
    nom: "DAR ES SALAM",
    commune_id: 55,
  },
  {
    quartier_id: 606,
    nom: "DIALAKORO",
    commune_id: 55,
  },
  {
    quartier_id: 607,
    nom: "FELLO LAMOU",
    commune_id: 55,
  },
  {
    quartier_id: 608,
    nom: "MOSSOKO",
    commune_id: 55,
  },
  {
    quartier_id: 609,
    nom: "SANDAFARA",
    commune_id: 55,
  },
  {
    quartier_id: 610,
    nom: "WATAGALA",
    commune_id: 55,
  },
  {
    quartier_id: 611,
    nom: "DAIBATOU",
    commune_id: 56,
  },
  {
    quartier_id: 612,
    nom: "DIATIFERE CENTRE",
    commune_id: 56,
  },
  {
    quartier_id: 613,
    nom: "FADOUGOU",
    commune_id: 56,
  },
  {
    quartier_id: 614,
    nom: "FAMMERE",
    commune_id: 56,
  },
  {
    quartier_id: 615,
    nom: "FANDANDA",
    commune_id: 56,
  },
  {
    quartier_id: 616,
    nom: "MAMOUDOUYA I",
    commune_id: 56,
  },
  {
    quartier_id: 617,
    nom: "MAMOUDOUYA II",
    commune_id: 56,
  },
  {
    quartier_id: 618,
    nom: "NANAKO",
    commune_id: 56,
  },
  {
    quartier_id: 619,
    nom: "SOUBEKINDI",
    commune_id: 56,
  },
  {
    quartier_id: 620,
    nom: "SOUROU",
    commune_id: 56,
  },
  {
    quartier_id: 621,
    nom: "SYLLAYA",
    commune_id: 56,
  },
  {
    quartier_id: 622,
    nom: "WONSON",
    commune_id: 56,
  },
  {
    quartier_id: 623,
    nom: "BAGUI",
    commune_id: 57,
  },
  {
    quartier_id: 624,
    nom: "BELEYA",
    commune_id: 57,
  },
  {
    quartier_id: 625,
    nom: "BOUSSOURA (WOUMBOU)",
    commune_id: 57,
  },
  {
    quartier_id: 626,
    nom: "GAGNAKALY CENTRE",
    commune_id: 57,
  },
  {
    quartier_id: 627,
    nom: "HERAKO",
    commune_id: 57,
  },
  {
    quartier_id: 628,
    nom: "KALINKO MISSIRA",
    commune_id: 57,
  },
  {
    quartier_id: 629,
    nom: "KEYLA",
    commune_id: 57,
  },
  {
    quartier_id: 630,
    nom: "MISSIRA DJALONKE",
    commune_id: 57,
  },
  {
    quartier_id: 631,
    nom: "NOUHOUYA",
    commune_id: 57,
  },
  {
    quartier_id: 632,
    nom: "BABILA",
    commune_id: 58,
  },
  {
    quartier_id: 633,
    nom: "BOKOTY",
    commune_id: 58,
  },
  {
    quartier_id: 634,
    nom: "DJABEREMINI",
    commune_id: 58,
  },
  {
    quartier_id: 635,
    nom: "DJANKOUROU",
    commune_id: 58,
  },
  {
    quartier_id: 636,
    nom: "DJISSOUMA",
    commune_id: 58,
  },
  {
    quartier_id: 637,
    nom: "FARABATO",
    commune_id: 58,
  },
  {
    quartier_id: 638,
    nom: "FODEKARIA",
    commune_id: 58,
  },
  {
    quartier_id: 639,
    nom: "FOGNOKONKO",
    commune_id: 58,
  },
  {
    quartier_id: 640,
    nom: "KALINKO CENTRE",
    commune_id: 58,
  },
  {
    quartier_id: 641,
    nom: "KANSATO",
    commune_id: 58,
  },
  {
    quartier_id: 642,
    nom: "LEPPY THIEWY",
    commune_id: 58,
  },
  {
    quartier_id: 643,
    nom: "LOUFFA MISSIDE",
    commune_id: 58,
  },
  {
    quartier_id: 644,
    nom: "MISSIRA",
    commune_id: 58,
  },
  {
    quartier_id: 645,
    nom: "NIOGO",
    commune_id: 58,
  },
  {
    quartier_id: 646,
    nom: "SANTANFARA",
    commune_id: 58,
  },
  {
    quartier_id: 647,
    nom: "WALANDAMA",
    commune_id: 58,
  },
  {
    quartier_id: 648,
    nom: "YALAGUERE",
    commune_id: 58,
  },
  {
    quartier_id: 649,
    nom: "DAYEBHE",
    commune_id: 59,
  },
  {
    quartier_id: 650,
    nom: "HANSAGUERE",
    commune_id: 59,
  },
  {
    quartier_id: 651,
    nom: "LANSANAYA",
    commune_id: 59,
  },
  {
    quartier_id: 652,
    nom: "SANTIGUIA",
    commune_id: 59,
  },
  {
    quartier_id: 653,
    nom: "TAMBANORO",
    commune_id: 59,
  },
  {
    quartier_id: 654,
    nom: "WOUYABHE",
    commune_id: 59,
  },
  {
    quartier_id: 655,
    nom: "BOSSERE",
    commune_id: 60,
  },
  {
    quartier_id: 656,
    nom: "FADIA",
    commune_id: 60,
  },
  {
    quartier_id: 657,
    nom: "KOBALA",
    commune_id: 60,
  },
  {
    quartier_id: 658,
    nom: "SELOUMA",
    commune_id: 60,
  },
  {
    quartier_id: 659,
    nom: "WALA WALA",
    commune_id: 60,
  },
  {
    quartier_id: 660,
    nom: "WALAN MOSQUEE",
    commune_id: 60,
  },
  {
    quartier_id: 661,
    nom: "ABATTOIR I",
    commune_id: 61,
  },
  {
    quartier_id: 662,
    nom: "ABATTOIR II",
    commune_id: 61,
  },
  {
    quartier_id: 663,
    nom: "AVIATION",
    commune_id: 61,
  },
  {
    quartier_id: 664,
    nom: "BIRISSA",
    commune_id: 61,
  },
  {
    quartier_id: 665,
    nom: "DANDAYA",
    commune_id: 61,
  },
  {
    quartier_id: 666,
    nom: "FARANAH KOURA",
    commune_id: 61,
  },
  {
    quartier_id: 667,
    nom: "KHORIA KOURA",
    commune_id: 61,
  },
  {
    quartier_id: 668,
    nom: "LAMINIYA KONDEBOUN",
    commune_id: 61,
  },
  {
    quartier_id: 669,
    nom: "MAGNA",
    commune_id: 61,
  },
  {
    quartier_id: 670,
    nom: "MARCHE I",
    commune_id: 61,
  },
  {
    quartier_id: 671,
    nom: "MARCHE II",
    commune_id: 61,
  },
  {
    quartier_id: 672,
    nom: "MILIDALA",
    commune_id: 61,
  },
  {
    quartier_id: 673,
    nom: "MODIA",
    commune_id: 61,
  },
  {
    quartier_id: 674,
    nom: "MOSQUEE",
    commune_id: 61,
  },
  {
    quartier_id: 675,
    nom: "SAMBOUYA",
    commune_id: 61,
  },
  {
    quartier_id: 676,
    nom: "SASSAMBOU",
    commune_id: 61,
  },
  {
    quartier_id: 677,
    nom: "SASSANKO",
    commune_id: 61,
  },
  {
    quartier_id: 678,
    nom: "SIRIKOLENY I",
    commune_id: 61,
  },
  {
    quartier_id: 679,
    nom: "SIRIKOLENY II",
    commune_id: 61,
  },
  {
    quartier_id: 680,
    nom: "SOKOURALA",
    commune_id: 61,
  },
  {
    quartier_id: 681,
    nom: "SOULEYMANIA",
    commune_id: 61,
  },
  {
    quartier_id: 682,
    nom: "TONKOLONKO I",
    commune_id: 61,
  },
  {
    quartier_id: 683,
    nom: "TONKOLONKO II",
    commune_id: 61,
  },
  {
    quartier_id: 684,
    nom: "YARAWALIA",
    commune_id: 61,
  },
  {
    quartier_id: 685,
    nom: "BALAYA",
    commune_id: 62,
  },
  {
    quartier_id: 686,
    nom: "BAMBAYA",
    commune_id: 62,
  },
  {
    quartier_id: 687,
    nom: "BANANKORO",
    commune_id: 62,
  },
  {
    quartier_id: 688,
    nom: "BANDAYA",
    commune_id: 62,
  },
  {
    quartier_id: 689,
    nom: "BANIAN I",
    commune_id: 62,
  },
  {
    quartier_id: 690,
    nom: "BANIAN II",
    commune_id: 62,
  },
  {
    quartier_id: 691,
    nom: "BAOUROUYA",
    commune_id: 62,
  },
  {
    quartier_id: 692,
    nom: "DOUMBAFE",
    commune_id: 62,
  },
  {
    quartier_id: 693,
    nom: "DOUWOULEMA",
    commune_id: 62,
  },
  {
    quartier_id: 694,
    nom: "KAOLA",
    commune_id: 62,
  },
  {
    quartier_id: 695,
    nom: "KONKOWA",
    commune_id: 62,
  },
  {
    quartier_id: 696,
    nom: "KOSSABA",
    commune_id: 62,
  },
  {
    quartier_id: 697,
    nom: "KOURATOU",
    commune_id: 62,
  },
  {
    quartier_id: 698,
    nom: "MANDOU",
    commune_id: 62,
  },
  {
    quartier_id: 699,
    nom: "NIANFOURANDO",
    commune_id: 62,
  },
  {
    quartier_id: 700,
    nom: "SAMOUDOU",
    commune_id: 62,
  },
  {
    quartier_id: 701,
    nom: "SEMBELDO",
    commune_id: 62,
  },
  {
    quartier_id: 702,
    nom: "SOKOURALA",
    commune_id: 62,
  },
  {
    quartier_id: 703,
    nom: "YARAWADOU KOURA",
    commune_id: 62,
  },
  {
    quartier_id: 704,
    nom: "BEINDOU CENTRE",
    commune_id: 63,
  },
  {
    quartier_id: 705,
    nom: "DALAFILANY",
    commune_id: 63,
  },
  {
    quartier_id: 706,
    nom: "DIANAH",
    commune_id: 63,
  },
  {
    quartier_id: 707,
    nom: "KOUMANDI-KORO",
    commune_id: 63,
  },
  {
    quartier_id: 708,
    nom: "NIAKO",
    commune_id: 63,
  },
  {
    quartier_id: 709,
    nom: "SEREKORO",
    commune_id: 63,
  },
  {
    quartier_id: 710,
    nom: "BIRI",
    commune_id: 64,
  },
  {
    quartier_id: 711,
    nom: "DANTILIA",
    commune_id: 64,
  },
  {
    quartier_id: 712,
    nom: "GBETAYA",
    commune_id: 64,
  },
  {
    quartier_id: 713,
    nom: "GUEYAFARI",
    commune_id: 64,
  },
  {
    quartier_id: 714,
    nom: "HEREMAKONO I",
    commune_id: 64,
  },
  {
    quartier_id: 715,
    nom: "HEREMAKONO II",
    commune_id: 64,
  },
  {
    quartier_id: 716,
    nom: "TANGANIA",
    commune_id: 64,
  },
  {
    quartier_id: 717,
    nom: "YATTIA",
    commune_id: 64,
  },
  {
    quartier_id: 718,
    nom: "BALLADOU",
    commune_id: 65,
  },
  {
    quartier_id: 719,
    nom: "FOROKONIAH",
    commune_id: 65,
  },
  {
    quartier_id: 720,
    nom: "FRANKOUMA",
    commune_id: 65,
  },
  {
    quartier_id: 721,
    nom: "KOBIKORO",
    commune_id: 65,
  },
  {
    quartier_id: 722,
    nom: "KONDOLEAH",
    commune_id: 65,
  },
  {
    quartier_id: 723,
    nom: "SAFIGNA",
    commune_id: 65,
  },
  {
    quartier_id: 724,
    nom: "SANTOH",
    commune_id: 65,
  },
  {
    quartier_id: 725,
    nom: "BOKETO",
    commune_id: 66,
  },
  {
    quartier_id: 726,
    nom: "BOUSSOURA",
    commune_id: 66,
  },
  {
    quartier_id: 727,
    nom: "FRIQUIYA",
    commune_id: 66,
  },
  {
    quartier_id: 728,
    nom: "HEREMAKONO-FOULBE",
    commune_id: 66,
  },
  {
    quartier_id: 729,
    nom: "KALIA I",
    commune_id: 66,
  },
  {
    quartier_id: 730,
    nom: "KALIA II",
    commune_id: 66,
  },
  {
    quartier_id: 731,
    nom: "KASSA-BOUNNA",
    commune_id: 66,
  },
  {
    quartier_id: 732,
    nom: "LOLIN",
    commune_id: 66,
  },
  {
    quartier_id: 733,
    nom: "MARELLA I",
    commune_id: 66,
  },
  {
    quartier_id: 734,
    nom: "MARELLA II",
    commune_id: 66,
  },
  {
    quartier_id: 735,
    nom: "MISSIDE-BOLIA",
    commune_id: 66,
  },
  {
    quartier_id: 736,
    nom: "SABERE-KALIA",
    commune_id: 66,
  },
  {
    quartier_id: 737,
    nom: "SOLONYEREYA",
    commune_id: 66,
  },
  {
    quartier_id: 738,
    nom: "SOLOYA",
    commune_id: 66,
  },
  {
    quartier_id: 739,
    nom: "SOUMANYEREYA",
    commune_id: 66,
  },
  {
    quartier_id: 740,
    nom: "TAGANYA",
    commune_id: 66,
  },
  {
    quartier_id: 741,
    nom: "ARFELLA",
    commune_id: 67,
  },
  {
    quartier_id: 742,
    nom: "BANTOUN",
    commune_id: 67,
  },
  {
    quartier_id: 743,
    nom: "GNONA",
    commune_id: 67,
  },
  {
    quartier_id: 744,
    nom: "KAMARA",
    commune_id: 67,
  },
  {
    quartier_id: 745,
    nom: "LAYA DOULA",
    commune_id: 67,
  },
  {
    quartier_id: 746,
    nom: "MARADOU",
    commune_id: 67,
  },
  {
    quartier_id: 747,
    nom: "NIALIA I",
    commune_id: 67,
  },
  {
    quartier_id: 748,
    nom: "NIALIA II",
    commune_id: 67,
  },
  {
    quartier_id: 749,
    nom: "BELEYA",
    commune_id: 68,
  },
  {
    quartier_id: 750,
    nom: "DANDA",
    commune_id: 68,
  },
  {
    quartier_id: 751,
    nom: "DIGUILA",
    commune_id: 68,
  },
  {
    quartier_id: 752,
    nom: "KOLOWALIA",
    commune_id: 68,
  },
  {
    quartier_id: 753,
    nom: "KOUTAWALIA",
    commune_id: 68,
  },
  {
    quartier_id: 754,
    nom: "N'GUENEYA",
    commune_id: 68,
  },
  {
    quartier_id: 755,
    nom: "NIENOUYA",
    commune_id: 68,
  },
  {
    quartier_id: 756,
    nom: "PASSAYAH ALMAMYA",
    commune_id: 68,
  },
  {
    quartier_id: 757,
    nom: "PASSAYAH MARCHE",
    commune_id: 68,
  },
  {
    quartier_id: 758,
    nom: "SOUNGBAYA",
    commune_id: 68,
  },
  {
    quartier_id: 759,
    nom: "TOUMANIA",
    commune_id: 68,
  },
  {
    quartier_id: 760,
    nom: "BONTALA",
    commune_id: 69,
  },
  {
    quartier_id: 761,
    nom: "KAMBAMBOUN",
    commune_id: 69,
  },
  {
    quartier_id: 762,
    nom: "KOMBONYA",
    commune_id: 69,
  },
  {
    quartier_id: 763,
    nom: "LAYA-SOLIMA",
    commune_id: 69,
  },
  {
    quartier_id: 764,
    nom: "NIAYA-FORITA",
    commune_id: 69,
  },
  {
    quartier_id: 765,
    nom: "SANDENIA-MARCHE",
    commune_id: 69,
  },
  {
    quartier_id: 766,
    nom: "SANDENIA-MOSQUEE",
    commune_id: 69,
  },
  {
    quartier_id: 767,
    nom: "DAMANIA",
    commune_id: 70,
  },
  {
    quartier_id: 768,
    nom: "KABELEYA",
    commune_id: 70,
  },
  {
    quartier_id: 769,
    nom: "LANCERDOU",
    commune_id: 70,
  },
  {
    quartier_id: 770,
    nom: "MENINKO",
    commune_id: 70,
  },
  {
    quartier_id: 771,
    nom: "MONGOCERDOU",
    commune_id: 70,
  },
  {
    quartier_id: 772,
    nom: "SALIAH",
    commune_id: 70,
  },
  {
    quartier_id: 773,
    nom: "SIRAMAYA",
    commune_id: 70,
  },
  {
    quartier_id: 774,
    nom: "SONGOYAH HOPITAL",
    commune_id: 70,
  },
  {
    quartier_id: 775,
    nom: "SONGOYAH MARCHE",
    commune_id: 70,
  },
  {
    quartier_id: 776,
    nom: "SONKONYAH",
    commune_id: 70,
  },
  {
    quartier_id: 777,
    nom: "TINTERBA",
    commune_id: 70,
  },
  {
    quartier_id: 778,
    nom: "DALAMARA",
    commune_id: 71,
  },
  {
    quartier_id: 779,
    nom: "GBANWOROYA",
    commune_id: 71,
  },
  {
    quartier_id: 780,
    nom: "MOROWA",
    commune_id: 71,
  },
  {
    quartier_id: 781,
    nom: "NEREDOUNI",
    commune_id: 71,
  },
  {
    quartier_id: 782,
    nom: "SAFARAMBA",
    commune_id: 71,
  },
  {
    quartier_id: 783,
    nom: "SILIMI",
    commune_id: 71,
  },
  {
    quartier_id: 784,
    nom: "TINDO",
    commune_id: 71,
  },
  {
    quartier_id: 785,
    nom: "TINDO CITE",
    commune_id: 71,
  },
  {
    quartier_id: 786,
    nom: "KABAYABA",
    commune_id: 72,
  },
  {
    quartier_id: 787,
    nom: "KABAYAKORO",
    commune_id: 72,
  },
  {
    quartier_id: 788,
    nom: "KALANKO",
    commune_id: 72,
  },
  {
    quartier_id: 789,
    nom: "LAYA SANDO",
    commune_id: 72,
  },
  {
    quartier_id: 790,
    nom: "SANANKORO",
    commune_id: 72,
  },
  {
    quartier_id: 791,
    nom: "SELEN",
    commune_id: 72,
  },
  {
    quartier_id: 792,
    nom: "SERDOU",
    commune_id: 72,
  },
  {
    quartier_id: 793,
    nom: "TIRO ALMAMYA",
    commune_id: 72,
  },
  {
    quartier_id: 794,
    nom: "TIRO MARCHE",
    commune_id: 72,
  },
  {
    quartier_id: 795,
    nom: "DAR ES SALAM",
    commune_id: 73,
  },
  {
    quartier_id: 796,
    nom: "DOUNINKONO",
    commune_id: 73,
  },
  {
    quartier_id: 797,
    nom: "ERNESTO",
    commune_id: 73,
  },
  {
    quartier_id: 798,
    nom: "FARAKO",
    commune_id: 73,
  },
  {
    quartier_id: 799,
    nom: "GBANGBAN",
    commune_id: 73,
  },
  {
    quartier_id: 800,
    nom: "HAMDALLAYE",
    commune_id: 73,
  },
  {
    quartier_id: 801,
    nom: "HEREMAKONON",
    commune_id: 73,
  },
  {
    quartier_id: 802,
    nom: "KENEMA",
    commune_id: 73,
  },
  {
    quartier_id: 803,
    nom: "KEREDOU",
    commune_id: 73,
  },
  {
    quartier_id: 804,
    nom: "KORODOU I",
    commune_id: 73,
  },
  {
    quartier_id: 805,
    nom: "KORODOU II",
    commune_id: 73,
  },
  {
    quartier_id: 806,
    nom: "LIMANIA",
    commune_id: 73,
  },
  {
    quartier_id: 807,
    nom: "M'BALIA",
    commune_id: 73,
  },
  {
    quartier_id: 808,
    nom: "MADINA I",
    commune_id: 73,
  },
  {
    quartier_id: 809,
    nom: "MADINA II",
    commune_id: 73,
  },
  {
    quartier_id: 810,
    nom: "MARAH",
    commune_id: 73,
  },
  {
    quartier_id: 811,
    nom: "MISSIRA",
    commune_id: 73,
  },
  {
    quartier_id: 812,
    nom: "SOGBE I",
    commune_id: 73,
  },
  {
    quartier_id: 813,
    nom: "SOGBE II",
    commune_id: 73,
  },
  {
    quartier_id: 814,
    nom: "SOGBE III",
    commune_id: 73,
  },
  {
    quartier_id: 815,
    nom: "T.P",
    commune_id: 73,
  },
  {
    quartier_id: 816,
    nom: "TIMBO",
    commune_id: 73,
  },
  {
    quartier_id: 817,
    nom: "YASSAFEKORO",
    commune_id: 73,
  },
  {
    quartier_id: 818,
    nom: "YASSAFEKOURA",
    commune_id: 73,
  },
  {
    quartier_id: 819,
    nom: "ALBADARIAH CENTRE",
    commune_id: 74,
  },
  {
    quartier_id: 820,
    nom: "DAWA FARKO",
    commune_id: 74,
  },
  {
    quartier_id: 821,
    nom: "FARAWAYA",
    commune_id: 74,
  },
  {
    quartier_id: 822,
    nom: "MERNAH",
    commune_id: 74,
  },
  {
    quartier_id: 823,
    nom: "MOREAH",
    commune_id: 74,
  },
  {
    quartier_id: 824,
    nom: "YARSSADOU",
    commune_id: 74,
  },
  {
    quartier_id: 825,
    nom: "YOMADOU",
    commune_id: 74,
  },
  {
    quartier_id: 826,
    nom: "BANAMA CENTRE",
    commune_id: 75,
  },
  {
    quartier_id: 827,
    nom: "KERO",
    commune_id: 75,
  },
  {
    quartier_id: 828,
    nom: "KOUMASSAN",
    commune_id: 75,
  },
  {
    quartier_id: 829,
    nom: "MANTRANIA",
    commune_id: 75,
  },
  {
    quartier_id: 830,
    nom: "MASSAFENDOU",
    commune_id: 75,
  },
  {
    quartier_id: 831,
    nom: "OUENDEKERE",
    commune_id: 75,
  },
  {
    quartier_id: 832,
    nom: "TELEBODOU",
    commune_id: 75,
  },
  {
    quartier_id: 833,
    nom: "BARDOU CENTRE",
    commune_id: 76,
  },
  {
    quartier_id: 834,
    nom: "FONIADOU",
    commune_id: 76,
  },
  {
    quartier_id: 835,
    nom: "GBANGBADOU OUENDE",
    commune_id: 76,
  },
  {
    quartier_id: 836,
    nom: "KONDIAN",
    commune_id: 76,
  },
  {
    quartier_id: 837,
    nom: "SOFFEDOU",
    commune_id: 76,
  },
  {
    quartier_id: 838,
    nom: "YAADOU",
    commune_id: 76,
  },
  {
    quartier_id: 839,
    nom: "BEINDOU",
    commune_id: 77,
  },
  {
    quartier_id: 840,
    nom: "FERMESSADOUBA",
    commune_id: 77,
  },
  {
    quartier_id: 841,
    nom: "GBANGADOU",
    commune_id: 77,
  },
  {
    quartier_id: 842,
    nom: "GNAMANDOU",
    commune_id: 77,
  },
  {
    quartier_id: 843,
    nom: "KAMAKOUNANDOU",
    commune_id: 77,
  },
  {
    quartier_id: 844,
    nom: "KAORO",
    commune_id: 77,
  },
  {
    quartier_id: 845,
    nom: "KOLDOU",
    commune_id: 77,
  },
  {
    quartier_id: 846,
    nom: "KOMARO",
    commune_id: 77,
  },
  {
    quartier_id: 847,
    nom: "KOUNDOPOMBO",
    commune_id: 77,
  },
  {
    quartier_id: 848,
    nom: "LELA",
    commune_id: 77,
  },
  {
    quartier_id: 849,
    nom: "SANGALABADOU",
    commune_id: 77,
  },
  {
    quartier_id: 850,
    nom: "YOROMANDOU",
    commune_id: 77,
  },
  {
    quartier_id: 851,
    nom: "BOUYE",
    commune_id: 78,
  },
  {
    quartier_id: 852,
    nom: "DEMBAYARA",
    commune_id: 78,
  },
  {
    quartier_id: 853,
    nom: "FERMESSADOU",
    commune_id: 78,
  },
  {
    quartier_id: 854,
    nom: "GBENINKORO",
    commune_id: 78,
  },
  {
    quartier_id: 855,
    nom: "KONGOLA LOUNDY",
    commune_id: 78,
  },
  {
    quartier_id: 856,
    nom: "MASSAKOUNDOU",
    commune_id: 78,
  },
  {
    quartier_id: 857,
    nom: "OUENDE BEINDOU",
    commune_id: 78,
  },
  {
    quartier_id: 858,
    nom: "SALDOU",
    commune_id: 78,
  },
  {
    quartier_id: 859,
    nom: "YARADOU",
    commune_id: 78,
  },
  {
    quartier_id: 860,
    nom: "BELEDOU - KAMADOU",
    commune_id: 79,
  },
  {
    quartier_id: 861,
    nom: "DANDOU",
    commune_id: 79,
  },
  {
    quartier_id: 862,
    nom: "DOMBADOU",
    commune_id: 79,
  },
  {
    quartier_id: 863,
    nom: "DONDIAN",
    commune_id: 79,
  },
  {
    quartier_id: 864,
    nom: "FIRAWA",
    commune_id: 79,
  },
  {
    quartier_id: 865,
    nom: "FONDAMBADOU",
    commune_id: 79,
  },
  {
    quartier_id: 866,
    nom: "SANDIA",
    commune_id: 79,
  },
  {
    quartier_id: 867,
    nom: "DAWA",
    commune_id: 80,
  },
  {
    quartier_id: 868,
    nom: "FARAMAYA",
    commune_id: 80,
  },
  {
    quartier_id: 869,
    nom: "FOURDOU KOURA",
    commune_id: 80,
  },
  {
    quartier_id: 870,
    nom: "GBANGBADOU",
    commune_id: 80,
  },
  {
    quartier_id: 871,
    nom: "KENEMA BOMBA",
    commune_id: 80,
  },
  {
    quartier_id: 872,
    nom: "KISSI YALLANKORO",
    commune_id: 80,
  },
  {
    quartier_id: 873,
    nom: "NIANDOU",
    commune_id: 80,
  },
  {
    quartier_id: 874,
    nom: "YALLAKALAN",
    commune_id: 80,
  },
  {
    quartier_id: 875,
    nom: "YARDO",
    commune_id: 80,
  },
  {
    quartier_id: 876,
    nom: "BALLANSAMA",
    commune_id: 81,
  },
  {
    quartier_id: 877,
    nom: "BEMBERE",
    commune_id: 81,
  },
  {
    quartier_id: 878,
    nom: "BONGORO",
    commune_id: 81,
  },
  {
    quartier_id: 879,
    nom: "KONDIADOU CENTRE",
    commune_id: 81,
  },
  {
    quartier_id: 880,
    nom: "KOSSA",
    commune_id: 81,
  },
  {
    quartier_id: 881,
    nom: "MAFENDOU",
    commune_id: 81,
  },
  {
    quartier_id: 882,
    nom: "MAKOLON",
    commune_id: 81,
  },
  {
    quartier_id: 883,
    nom: "SOLONTOH",
    commune_id: 81,
  },
  {
    quartier_id: 884,
    nom: "SOULAKOLO",
    commune_id: 81,
  },
  {
    quartier_id: 885,
    nom: "TENKIA",
    commune_id: 81,
  },
  {
    quartier_id: 886,
    nom: "YENDE-SORY",
    commune_id: 81,
  },
  {
    quartier_id: 887,
    nom: "BAMBASSIRIYA",
    commune_id: 82,
  },
  {
    quartier_id: 888,
    nom: "BAMBAYELEMAN",
    commune_id: 82,
  },
  {
    quartier_id: 889,
    nom: "DIALAKORO",
    commune_id: 82,
  },
  {
    quartier_id: 890,
    nom: "DJIRDOU",
    commune_id: 82,
  },
  {
    quartier_id: 891,
    nom: "FANCELDOU",
    commune_id: 82,
  },
  {
    quartier_id: 892,
    nom: "GNAMANA",
    commune_id: 82,
  },
  {
    quartier_id: 893,
    nom: "KONARDO",
    commune_id: 82,
  },
  {
    quartier_id: 894,
    nom: "MANFRAN",
    commune_id: 82,
  },
  {
    quartier_id: 895,
    nom: "SIRCOULDOU",
    commune_id: 82,
  },
  {
    quartier_id: 896,
    nom: "BOROKORO",
    commune_id: 83,
  },
  {
    quartier_id: 897,
    nom: "DAGNORO",
    commune_id: 83,
  },
  {
    quartier_id: 898,
    nom: "DEYAH",
    commune_id: 83,
  },
  {
    quartier_id: 899,
    nom: "FOREAH",
    commune_id: 83,
  },
  {
    quartier_id: 900,
    nom: "KAMERENDOU",
    commune_id: 83,
  },
  {
    quartier_id: 901,
    nom: "MERMERIAH",
    commune_id: 83,
  },
  {
    quartier_id: 902,
    nom: "SANDAYA",
    commune_id: 83,
  },
  {
    quartier_id: 903,
    nom: "SANGARDO CENTRE",
    commune_id: 83,
  },
  {
    quartier_id: 904,
    nom: "WOSSO KOROMA",
    commune_id: 83,
  },
  {
    quartier_id: 905,
    nom: "BAGBE",
    commune_id: 84,
  },
  {
    quartier_id: 906,
    nom: "BAMBA",
    commune_id: 84,
  },
  {
    quartier_id: 907,
    nom: "FAINDOU",
    commune_id: 84,
  },
  {
    quartier_id: 908,
    nom: "FIRADOU",
    commune_id: 84,
  },
  {
    quartier_id: 909,
    nom: "HEYAKO",
    commune_id: 84,
  },
  {
    quartier_id: 910,
    nom: "KOUMASSAN",
    commune_id: 84,
  },
  {
    quartier_id: 911,
    nom: "TOUFFOUDOU",
    commune_id: 84,
  },
  {
    quartier_id: 912,
    nom: "WALTO",
    commune_id: 84,
  },
  {
    quartier_id: 913,
    nom: "WONDETO",
    commune_id: 84,
  },
  {
    quartier_id: 914,
    nom: "YENDE I",
    commune_id: 84,
  },
  {
    quartier_id: 915,
    nom: "YENDE II",
    commune_id: 84,
  },
  {
    quartier_id: 916,
    nom: "BAGBE",
    commune_id: 85,
  },
  {
    quartier_id: 917,
    nom: "BAMBAKORDOU",
    commune_id: 85,
  },
  {
    quartier_id: 918,
    nom: "BONGARDOU",
    commune_id: 85,
  },
  {
    quartier_id: 919,
    nom: "DANKALDOU",
    commune_id: 85,
  },
  {
    quartier_id: 920,
    nom: "FORODOU",
    commune_id: 85,
  },
  {
    quartier_id: 921,
    nom: "KOINDOU",
    commune_id: 85,
  },
  {
    quartier_id: 922,
    nom: "TRAKORE",
    commune_id: 85,
  },
  {
    quartier_id: 923,
    nom: "YOMBIRO",
    commune_id: 85,
  },
  {
    quartier_id: 924,
    nom: "AVIATION",
    commune_id: 86,
  },
  {
    quartier_id: 925,
    nom: "BANANKORODA",
    commune_id: 86,
  },
  {
    quartier_id: 926,
    nom: "BORDO",
    commune_id: 86,
  },
  {
    quartier_id: 927,
    nom: "BRIQUETERIE",
    commune_id: 86,
  },
  {
    quartier_id: 928,
    nom: "DALAKO",
    commune_id: 86,
  },
  {
    quartier_id: 929,
    nom: "DAR-ES-SALAM",
    commune_id: 86,
  },
  {
    quartier_id: 930,
    nom: "DJODON",
    commune_id: 86,
  },
  {
    quartier_id: 931,
    nom: "ENERGIE",
    commune_id: 86,
  },
  {
    quartier_id: 932,
    nom: "FARAKO I",
    commune_id: 86,
  },
  {
    quartier_id: 933,
    nom: "FARAKO II",
    commune_id: 86,
  },
  {
    quartier_id: 934,
    nom: "FOURBAN",
    commune_id: 86,
  },
  {
    quartier_id: 935,
    nom: "GARE",
    commune_id: 86,
  },
  {
    quartier_id: 936,
    nom: "HEREMAKONO I",
    commune_id: 86,
  },
  {
    quartier_id: 937,
    nom: "HEREMAKONO II",
    commune_id: 86,
  },
  {
    quartier_id: 938,
    nom: "KABADA I",
    commune_id: 86,
  },
  {
    quartier_id: 939,
    nom: "KABADA II",
    commune_id: 86,
  },
  {
    quartier_id: 940,
    nom: "KANKAN KOURA",
    commune_id: 86,
  },
  {
    quartier_id: 941,
    nom: "KONKONIKORO",
    commune_id: 86,
  },
  {
    quartier_id: 942,
    nom: "KORIALEN",
    commune_id: 86,
  },
  {
    quartier_id: 943,
    nom: "MADINA",
    commune_id: 86,
  },
  {
    quartier_id: 944,
    nom: "METEO",
    commune_id: 86,
  },
  {
    quartier_id: 945,
    nom: "MISSIRA",
    commune_id: 86,
  },
  {
    quartier_id: 946,
    nom: "SALAMANI",
    commune_id: 86,
  },
  {
    quartier_id: 947,
    nom: "SENKEFARA I",
    commune_id: 86,
  },
  {
    quartier_id: 948,
    nom: "SENKEFARA II",
    commune_id: 86,
  },
  {
    quartier_id: 949,
    nom: "SOGBE",
    commune_id: 86,
  },
  {
    quartier_id: 950,
    nom: "TIMBO",
    commune_id: 86,
  },
  {
    quartier_id: 951,
    nom: "BALANDOU CENTRE",
    commune_id: 87,
  },
  {
    quartier_id: 952,
    nom: "BATE-GBENSO",
    commune_id: 87,
  },
  {
    quartier_id: 953,
    nom: "DJANSSOUMANA CENTRE",
    commune_id: 87,
  },
  {
    quartier_id: 954,
    nom: "GBONKO-CENTRE",
    commune_id: 87,
  },
  {
    quartier_id: 955,
    nom: "KAGAN-CENTRE",
    commune_id: 87,
  },
  {
    quartier_id: 956,
    nom: "KOBA-CENTRE",
    commune_id: 87,
  },
  {
    quartier_id: 957,
    nom: "LOBA-CENTRE",
    commune_id: 87,
  },
  {
    quartier_id: 958,
    nom: "SANFINA-CENTRE",
    commune_id: 87,
  },
  {
    quartier_id: 959,
    nom: "BAKONKO CISSELA",
    commune_id: 88,
  },
  {
    quartier_id: 960,
    nom: "BAKONKO KORO",
    commune_id: 88,
  },
  {
    quartier_id: 961,
    nom: "BATE NAFADJI CENTRE",
    commune_id: 88,
  },
  {
    quartier_id: 962,
    nom: "BATE SOILA",
    commune_id: 88,
  },
  {
    quartier_id: 963,
    nom: "DALABA",
    commune_id: 88,
  },
  {
    quartier_id: 964,
    nom: "DJAFRA",
    commune_id: 88,
  },
  {
    quartier_id: 965,
    nom: "DJELIBAKORO",
    commune_id: 88,
  },
  {
    quartier_id: 966,
    nom: "DOUTILABA",
    commune_id: 88,
  },
  {
    quartier_id: 967,
    nom: "FAYIRADOU",
    commune_id: 88,
  },
  {
    quartier_id: 968,
    nom: "FODECARIAH",
    commune_id: 88,
  },
  {
    quartier_id: 969,
    nom: "KIGNERO",
    commune_id: 88,
  },
  {
    quartier_id: 970,
    nom: "KOFILANI",
    commune_id: 88,
  },
  {
    quartier_id: 971,
    nom: "KOKOUROUBA",
    commune_id: 88,
  },
  {
    quartier_id: 972,
    nom: "MADINA",
    commune_id: 88,
  },
  {
    quartier_id: 973,
    nom: "MOUSSAYA",
    commune_id: 88,
  },
  {
    quartier_id: 974,
    nom: "TASSILIMA",
    commune_id: 88,
  },
  {
    quartier_id: 975,
    nom: "TIMININDOU",
    commune_id: 88,
  },
  {
    quartier_id: 976,
    nom: "BOULA CENTRE",
    commune_id: 89,
  },
  {
    quartier_id: 977,
    nom: "KALAFILILA",
    commune_id: 89,
  },
  {
    quartier_id: 978,
    nom: "KODJANA",
    commune_id: 89,
  },
  {
    quartier_id: 979,
    nom: "KOSSA",
    commune_id: 89,
  },
  {
    quartier_id: 980,
    nom: "KOTRONA",
    commune_id: 89,
  },
  {
    quartier_id: 981,
    nom: "MANIANKO",
    commune_id: 89,
  },
  {
    quartier_id: 982,
    nom: "SALASSILA",
    commune_id: 89,
  },
  {
    quartier_id: 983,
    nom: "WANDJALADOU",
    commune_id: 89,
  },
  {
    quartier_id: 984,
    nom: "BARANAMA CENTRE I",
    commune_id: 90,
  },
  {
    quartier_id: 985,
    nom: "BARANAMA CENTRE II",
    commune_id: 90,
  },
  {
    quartier_id: 986,
    nom: "BINKO",
    commune_id: 90,
  },
  {
    quartier_id: 987,
    nom: "BOUSSOURAN",
    commune_id: 90,
  },
  {
    quartier_id: 988,
    nom: "DALABANI",
    commune_id: 90,
  },
  {
    quartier_id: 989,
    nom: "FADOU",
    commune_id: 90,
  },
  {
    quartier_id: 990,
    nom: "KANIMISSAYA",
    commune_id: 90,
  },
  {
    quartier_id: 991,
    nom: "SANANA",
    commune_id: 90,
  },
  {
    quartier_id: 992,
    nom: "TAKOURA",
    commune_id: 90,
  },
  {
    quartier_id: 993,
    nom: "TAMONI",
    commune_id: 90,
  },
  {
    quartier_id: 994,
    nom: "ALIAMOUNOU-KANDRALA",
    commune_id: 91,
  },
  {
    quartier_id: 995,
    nom: "BANKALAN",
    commune_id: 91,
  },
  {
    quartier_id: 996,
    nom: "DIANKANA",
    commune_id: 91,
  },
  {
    quartier_id: 997,
    nom: "DJIRLAN",
    commune_id: 91,
  },
  {
    quartier_id: 998,
    nom: "FOUSSEN",
    commune_id: 91,
  },
  {
    quartier_id: 999,
    nom: "KARIFAMORIAH",
    commune_id: 91,
  },
  {
    quartier_id: 1000,
    nom: "KOBA-SANDO",
    commune_id: 91,
  },
  {
    quartier_id: 1001,
    nom: "M'BODOU",
    commune_id: 91,
  },
  {
    quartier_id: 1002,
    nom: "MOIKO",
    commune_id: 91,
  },
  {
    quartier_id: 1003,
    nom: "SOFONKO",
    commune_id: 91,
  },
  {
    quartier_id: 1004,
    nom: "SOUMANKOI",
    commune_id: 91,
  },
  {
    quartier_id: 1005,
    nom: "TENKELEN",
    commune_id: 91,
  },
  {
    quartier_id: 1006,
    nom: "FEREDOU",
    commune_id: 92,
  },
  {
    quartier_id: 1007,
    nom: "FOLON",
    commune_id: 92,
  },
  {
    quartier_id: 1008,
    nom: "GBELEMA",
    commune_id: 92,
  },
  {
    quartier_id: 1009,
    nom: "KANDAYA",
    commune_id: 92,
  },
  {
    quartier_id: 1010,
    nom: "KASSA",
    commune_id: 92,
  },
  {
    quartier_id: 1011,
    nom: "KOUMBAN I",
    commune_id: 92,
  },
  {
    quartier_id: 1012,
    nom: "KOUMBAN II",
    commune_id: 92,
  },
  {
    quartier_id: 1013,
    nom: "KOUMBAN KOURA",
    commune_id: 92,
  },
  {
    quartier_id: 1014,
    nom: "LANI-NINKI",
    commune_id: 92,
  },
  {
    quartier_id: 1015,
    nom: "MAKONON",
    commune_id: 92,
  },
  {
    quartier_id: 1016,
    nom: "MARANMORIA",
    commune_id: 92,
  },
  {
    quartier_id: 1017,
    nom: "MORIGBEDOU",
    commune_id: 92,
  },
  {
    quartier_id: 1018,
    nom: "SAKOROLA",
    commune_id: 92,
  },
  {
    quartier_id: 1019,
    nom: "SEKORO",
    commune_id: 92,
  },
  {
    quartier_id: 1020,
    nom: "BALLAKOYA",
    commune_id: 93,
  },
  {
    quartier_id: 1021,
    nom: "DIARABADOU",
    commune_id: 93,
  },
  {
    quartier_id: 1022,
    nom: "DJIRADOUKORO",
    commune_id: 93,
  },
  {
    quartier_id: 1023,
    nom: "FANKONO",
    commune_id: 93,
  },
  {
    quartier_id: 1024,
    nom: "FARABANA",
    commune_id: 93,
  },
  {
    quartier_id: 1025,
    nom: "FEREDOU",
    commune_id: 93,
  },
  {
    quartier_id: 1026,
    nom: "KARIARDOU",
    commune_id: 93,
  },
  {
    quartier_id: 1027,
    nom: "KASSOUROU",
    commune_id: 93,
  },
  {
    quartier_id: 1028,
    nom: "MAMOUROUDOU",
    commune_id: 93,
  },
  {
    quartier_id: 1029,
    nom: "MORIGBEYA",
    commune_id: 93,
  },
  {
    quartier_id: 1030,
    nom: "DJIMBALA",
    commune_id: 94,
  },
  {
    quartier_id: 1031,
    nom: "DOUMAWALIYA",
    commune_id: 94,
  },
  {
    quartier_id: 1032,
    nom: "KIGNEBA",
    commune_id: 94,
  },
  {
    quartier_id: 1033,
    nom: "MISSAMANA CENTRE",
    commune_id: 94,
  },
  {
    quartier_id: 1034,
    nom: "NOUMISSAYA",
    commune_id: 94,
  },
  {
    quartier_id: 1035,
    nom: "SOLO",
    commune_id: 94,
  },
  {
    quartier_id: 1036,
    nom: "SONTILA",
    commune_id: 94,
  },
  {
    quartier_id: 1037,
    nom: "BANKO",
    commune_id: 95,
  },
  {
    quartier_id: 1038,
    nom: "DALAGNA",
    commune_id: 95,
  },
  {
    quartier_id: 1039,
    nom: "FAMANIAN",
    commune_id: 95,
  },
  {
    quartier_id: 1040,
    nom: "GBALAKO",
    commune_id: 95,
  },
  {
    quartier_id: 1041,
    nom: "IRADOU",
    commune_id: 95,
  },
  {
    quartier_id: 1042,
    nom: "MANFRAN",
    commune_id: 95,
  },
  {
    quartier_id: 1043,
    nom: "MARADOU",
    commune_id: 95,
  },
  {
    quartier_id: 1044,
    nom: "MORIBAYA CENTRE I",
    commune_id: 95,
  },
  {
    quartier_id: 1045,
    nom: "MORIBAYA CENTRE II",
    commune_id: 95,
  },
  {
    quartier_id: 1046,
    nom: "SEKORO",
    commune_id: 95,
  },
  {
    quartier_id: 1047,
    nom: "TINDIKAN",
    commune_id: 95,
  },
  {
    quartier_id: 1048,
    nom: "BANANKOH",
    commune_id: 96,
  },
  {
    quartier_id: 1049,
    nom: "BRONBALLA",
    commune_id: 96,
  },
  {
    quartier_id: 1050,
    nom: "DJAMONA",
    commune_id: 96,
  },
  {
    quartier_id: 1051,
    nom: "DJOUGNA",
    commune_id: 96,
  },
  {
    quartier_id: 1052,
    nom: "KALANKALAN",
    commune_id: 96,
  },
  {
    quartier_id: 1053,
    nom: "KARIANDOU",
    commune_id: 96,
  },
  {
    quartier_id: 1054,
    nom: "KOMAH",
    commune_id: 96,
  },
  {
    quartier_id: 1055,
    nom: "KOMOUKOH",
    commune_id: 96,
  },
  {
    quartier_id: 1056,
    nom: "KONSAN",
    commune_id: 96,
  },
  {
    quartier_id: 1057,
    nom: "MORIAH",
    commune_id: 96,
  },
  {
    quartier_id: 1058,
    nom: "SABADOU - BARANAMA",
    commune_id: 96,
  },
  {
    quartier_id: 1059,
    nom: "SANSANDOH",
    commune_id: 96,
  },
  {
    quartier_id: 1060,
    nom: "WOMALEN",
    commune_id: 96,
  },
  {
    quartier_id: 1061,
    nom: "WOROKORO",
    commune_id: 96,
  },
  {
    quartier_id: 1062,
    nom: "BISSANDOU",
    commune_id: 97,
  },
  {
    quartier_id: 1063,
    nom: "BORIA",
    commune_id: 97,
  },
  {
    quartier_id: 1064,
    nom: "BORIFIGNA",
    commune_id: 97,
  },
  {
    quartier_id: 1065,
    nom: "DJINDO",
    commune_id: 97,
  },
  {
    quartier_id: 1066,
    nom: "GBANANKOURA",
    commune_id: 97,
  },
  {
    quartier_id: 1067,
    nom: "MASSARENA BANANKORO",
    commune_id: 97,
  },
  {
    quartier_id: 1068,
    nom: "OUREMBAYA",
    commune_id: 97,
  },
  {
    quartier_id: 1069,
    nom: "SANAH",
    commune_id: 97,
  },
  {
    quartier_id: 1070,
    nom: "TINTIOULEN CENTRE",
    commune_id: 97,
  },
  {
    quartier_id: 1071,
    nom: "DELDOU",
    commune_id: 98,
  },
  {
    quartier_id: 1072,
    nom: "FANTOGNA",
    commune_id: 98,
  },
  {
    quartier_id: 1073,
    nom: "FISSANKORO",
    commune_id: 98,
  },
  {
    quartier_id: 1074,
    nom: "FOUNKOURAN",
    commune_id: 98,
  },
  {
    quartier_id: 1075,
    nom: "GBALAKO",
    commune_id: 98,
  },
  {
    quartier_id: 1076,
    nom: "GNALENKO",
    commune_id: 98,
  },
  {
    quartier_id: 1077,
    nom: "KOUDOU",
    commune_id: 98,
  },
  {
    quartier_id: 1078,
    nom: "KOUWAN NAFADJI",
    commune_id: 98,
  },
  {
    quartier_id: 1079,
    nom: "MANICELIA",
    commune_id: 98,
  },
  {
    quartier_id: 1080,
    nom: "MISSADOU",
    commune_id: 98,
  },
  {
    quartier_id: 1081,
    nom: "SANSAMBAYA",
    commune_id: 98,
  },
  {
    quartier_id: 1082,
    nom: "SIRAKORO",
    commune_id: 98,
  },
  {
    quartier_id: 1083,
    nom: "TALIKORO",
    commune_id: 98,
  },
  {
    quartier_id: 1084,
    nom: "TOKOUNOU I",
    commune_id: 98,
  },
  {
    quartier_id: 1085,
    nom: "TOKOUNOU II",
    commune_id: 98,
  },
  {
    quartier_id: 1086,
    nom: "TOUNMANIA",
    commune_id: 98,
  },
  {
    quartier_id: 1087,
    nom: "DIALA",
    commune_id: 99,
  },
  {
    quartier_id: 1088,
    nom: "IRAYAH",
    commune_id: 99,
  },
  {
    quartier_id: 1089,
    nom: "KAMANDOU",
    commune_id: 99,
  },
  {
    quartier_id: 1090,
    nom: "KOUNDJAN",
    commune_id: 99,
  },
  {
    quartier_id: 1091,
    nom: "M'BALIA",
    commune_id: 99,
  },
  {
    quartier_id: 1092,
    nom: "MANIFADOU",
    commune_id: 99,
  },
  {
    quartier_id: 1093,
    nom: "MATENENMORIDOU",
    commune_id: 99,
  },
  {
    quartier_id: 1094,
    nom: "NASSER MARCHE",
    commune_id: 99,
  },
  {
    quartier_id: 1095,
    nom: "NASSER MOSQUEE",
    commune_id: 99,
  },
  {
    quartier_id: 1096,
    nom: "NOUNY TOURE",
    commune_id: 99,
  },
  {
    quartier_id: 1097,
    nom: "BANANKORO I",
    commune_id: 100,
  },
  {
    quartier_id: 1098,
    nom: "BANANKORO II",
    commune_id: 100,
  },
  {
    quartier_id: 1099,
    nom: "COMMANDANYA",
    commune_id: 100,
  },
  {
    quartier_id: 1100,
    nom: "DAMANGBEDOU",
    commune_id: 100,
  },
  {
    quartier_id: 1101,
    nom: "FALANDO",
    commune_id: 100,
  },
  {
    quartier_id: 1102,
    nom: "FODESSIAYA",
    commune_id: 100,
  },
  {
    quartier_id: 1103,
    nom: "KALAMANDO-MASANDO",
    commune_id: 100,
  },
  {
    quartier_id: 1104,
    nom: "SIRGNALDOU",
    commune_id: 100,
  },
  {
    quartier_id: 1105,
    nom: "SOMASSANIAH",
    commune_id: 100,
  },
  {
    quartier_id: 1106,
    nom: "TINSINKORO",
    commune_id: 100,
  },
  {
    quartier_id: 1107,
    nom: "WAROU CONDERO",
    commune_id: 100,
  },
  {
    quartier_id: 1108,
    nom: "WOROKORO",
    commune_id: 100,
  },
  {
    quartier_id: 1109,
    nom: "BALLAGBEDOU",
    commune_id: 101,
  },
  {
    quartier_id: 1110,
    nom: "DAMARO",
    commune_id: 101,
  },
  {
    quartier_id: 1111,
    nom: "DIARAGBRELA",
    commune_id: 101,
  },
  {
    quartier_id: 1112,
    nom: "DIOMANDOU",
    commune_id: 101,
  },
  {
    quartier_id: 1113,
    nom: "FOUNDOU",
    commune_id: 101,
  },
  {
    quartier_id: 1114,
    nom: "KOUROUDOU",
    commune_id: 101,
  },
  {
    quartier_id: 1115,
    nom: "MANDOU",
    commune_id: 101,
  },
  {
    quartier_id: 1116,
    nom: "MONODALA",
    commune_id: 101,
  },
  {
    quartier_id: 1117,
    nom: "SANANKORONI",
    commune_id: 101,
  },
  {
    quartier_id: 1118,
    nom: "DIARRADOU",
    commune_id: 102,
  },
  {
    quartier_id: 1119,
    nom: "DIASSAKOUNA",
    commune_id: 102,
  },
  {
    quartier_id: 1120,
    nom: "FABALA",
    commune_id: 102,
  },
  {
    quartier_id: 1121,
    nom: "FRANDOU",
    commune_id: 102,
  },
  {
    quartier_id: 1122,
    nom: "FRANFINA",
    commune_id: 102,
  },
  {
    quartier_id: 1123,
    nom: "GBODOU",
    commune_id: 102,
  },
  {
    quartier_id: 1124,
    nom: "GNALEMORIDOU",
    commune_id: 102,
  },
  {
    quartier_id: 1125,
    nom: "KANFRANDOU",
    commune_id: 102,
  },
  {
    quartier_id: 1126,
    nom: "KOMODOU",
    commune_id: 102,
  },
  {
    quartier_id: 1127,
    nom: "SANAKORONI",
    commune_id: 102,
  },
  {
    quartier_id: 1128,
    nom: "FEREBORIDOU",
    commune_id: 103,
  },
  {
    quartier_id: 1129,
    nom: "KEKOURADOU",
    commune_id: 103,
  },
  {
    quartier_id: 1130,
    nom: "KONSANKORO",
    commune_id: 103,
  },
  {
    quartier_id: 1131,
    nom: "BOIDOU",
    commune_id: 104,
  },
  {
    quartier_id: 1132,
    nom: "BOOKO",
    commune_id: 104,
  },
  {
    quartier_id: 1133,
    nom: "DEYLA",
    commune_id: 104,
  },
  {
    quartier_id: 1134,
    nom: "DIARRAGBERELA",
    commune_id: 104,
  },
  {
    quartier_id: 1135,
    nom: "KISSIDOU",
    commune_id: 104,
  },
  {
    quartier_id: 1136,
    nom: "KOGNENY",
    commune_id: 104,
  },
  {
    quartier_id: 1137,
    nom: "KOUROUKO",
    commune_id: 104,
  },
  {
    quartier_id: 1138,
    nom: "LINKO",
    commune_id: 104,
  },
  {
    quartier_id: 1139,
    nom: "TALENKO",
    commune_id: 104,
  },
  {
    quartier_id: 1140,
    nom: "BOURO",
    commune_id: 105,
  },
  {
    quartier_id: 1141,
    nom: "DIARRADOU MANDOU",
    commune_id: 105,
  },
  {
    quartier_id: 1142,
    nom: "FEREDOU",
    commune_id: 105,
  },
  {
    quartier_id: 1143,
    nom: "FINARIAH",
    commune_id: 105,
  },
  {
    quartier_id: 1144,
    nom: "GBEDOU",
    commune_id: 105,
  },
  {
    quartier_id: 1145,
    nom: "KABARADOU",
    commune_id: 105,
  },
  {
    quartier_id: 1146,
    nom: "SIBIRIBARO",
    commune_id: 105,
  },
  {
    quartier_id: 1147,
    nom: "BALADOU",
    commune_id: 106,
  },
  {
    quartier_id: 1148,
    nom: "BRINDO",
    commune_id: 106,
  },
  {
    quartier_id: 1149,
    nom: "DAMBAYA",
    commune_id: 106,
  },
  {
    quartier_id: 1150,
    nom: "DOUBAYA",
    commune_id: 106,
  },
  {
    quartier_id: 1151,
    nom: "FALANKO-WAROU",
    commune_id: 106,
  },
  {
    quartier_id: 1152,
    nom: "GBENDEWAYA",
    commune_id: 106,
  },
  {
    quartier_id: 1153,
    nom: "KOULIA",
    commune_id: 106,
  },
  {
    quartier_id: 1154,
    nom: "MAKA-FEREDOU",
    commune_id: 106,
  },
  {
    quartier_id: 1155,
    nom: "MENINCELIA",
    commune_id: 106,
  },
  {
    quartier_id: 1156,
    nom: "SOROMAYA",
    commune_id: 106,
  },
  {
    quartier_id: 1157,
    nom: "SOULKOUDOU",
    commune_id: 106,
  },
  {
    quartier_id: 1158,
    nom: "DIARAGBELA",
    commune_id: 107,
  },
  {
    quartier_id: 1159,
    nom: "DOULA",
    commune_id: 107,
  },
  {
    quartier_id: 1160,
    nom: "KOUROUSSA KOURA",
    commune_id: 107,
  },
  {
    quartier_id: 1161,
    nom: "SAMAN",
    commune_id: 107,
  },
  {
    quartier_id: 1162,
    nom: "SANDO CENTRE",
    commune_id: 107,
  },
  {
    quartier_id: 1163,
    nom: "WASSABADA",
    commune_id: 107,
  },
  {
    quartier_id: 1164,
    nom: "BABILA CENTRE",
    commune_id: 108,
  },
  {
    quartier_id: 1165,
    nom: "SANANKORO",
    commune_id: 108,
  },
  {
    quartier_id: 1166,
    nom: "SANGBARALA",
    commune_id: 108,
  },
  {
    quartier_id: 1167,
    nom: "BALATO",
    commune_id: 109,
  },
  {
    quartier_id: 1168,
    nom: "KOBANI",
    commune_id: 109,
  },
  {
    quartier_id: 1169,
    nom: "KOURALA",
    commune_id: 109,
  },
  {
    quartier_id: 1170,
    nom: "MANFARA",
    commune_id: 109,
  },
  {
    quartier_id: 1171,
    nom: "BANFELE",
    commune_id: 110,
  },
  {
    quartier_id: 1172,
    nom: "KAMSERIYA",
    commune_id: 110,
  },
  {
    quartier_id: 1173,
    nom: "KOUROUFE SIDIYA",
    commune_id: 110,
  },
  {
    quartier_id: 1174,
    nom: "LANDY",
    commune_id: 110,
  },
  {
    quartier_id: 1175,
    nom: "MARNA",
    commune_id: 110,
  },
  {
    quartier_id: 1176,
    nom: "NAFADJI",
    commune_id: 110,
  },
  {
    quartier_id: 1177,
    nom: "SININKORO",
    commune_id: 110,
  },
  {
    quartier_id: 1178,
    nom: "WASSAYA",
    commune_id: 110,
  },
  {
    quartier_id: 1179,
    nom: "BARO",
    commune_id: 111,
  },
  {
    quartier_id: 1180,
    nom: "MOIKIGNEBA",
    commune_id: 111,
  },
  {
    quartier_id: 1181,
    nom: "MORIGNOUMALA",
    commune_id: 111,
  },
  {
    quartier_id: 1182,
    nom: "SEREKORONI",
    commune_id: 111,
  },
  {
    quartier_id: 1183,
    nom: "CISSELA",
    commune_id: 112,
  },
  {
    quartier_id: 1184,
    nom: "FADOU SABA",
    commune_id: 112,
  },
  {
    quartier_id: 1185,
    nom: "KAKIDI",
    commune_id: 112,
  },
  {
    quartier_id: 1186,
    nom: "KANKAYA",
    commune_id: 112,
  },
  {
    quartier_id: 1187,
    nom: "KOUROUKODO",
    commune_id: 112,
  },
  {
    quartier_id: 1188,
    nom: "LOROMBO",
    commune_id: 112,
  },
  {
    quartier_id: 1189,
    nom: "NIEMEN",
    commune_id: 112,
  },
  {
    quartier_id: 1190,
    nom: "NONO",
    commune_id: 112,
  },
  {
    quartier_id: 1191,
    nom: "SOMOKORO",
    commune_id: 112,
  },
  {
    quartier_id: 1192,
    nom: "DOUAKO",
    commune_id: 113,
  },
  {
    quartier_id: 1193,
    nom: "FARADOU",
    commune_id: 113,
  },
  {
    quartier_id: 1194,
    nom: "FLOWARO",
    commune_id: 113,
  },
  {
    quartier_id: 1195,
    nom: "FRANDOU",
    commune_id: 113,
  },
  {
    quartier_id: 1196,
    nom: "GBOSSOKORIYA",
    commune_id: 113,
  },
  {
    quartier_id: 1197,
    nom: "KARAKO",
    commune_id: 113,
  },
  {
    quartier_id: 1198,
    nom: "KOLOMANGBEYA",
    commune_id: 113,
  },
  {
    quartier_id: 1199,
    nom: "LEYAH",
    commune_id: 113,
  },
  {
    quartier_id: 1200,
    nom: "MISSIRA",
    commune_id: 113,
  },
  {
    quartier_id: 1201,
    nom: "SIDIA",
    commune_id: 113,
  },
  {
    quartier_id: 1202,
    nom: "SILAMANA",
    commune_id: 113,
  },
  {
    quartier_id: 1203,
    nom: "TENINMAMOUDOUYAH CENTRE",
    commune_id: 113,
  },
  {
    quartier_id: 1204,
    nom: "TINDO",
    commune_id: 113,
  },
  {
    quartier_id: 1205,
    nom: "WOUELA",
    commune_id: 113,
  },
  {
    quartier_id: 1206,
    nom: "YARAYA",
    commune_id: 113,
  },
  {
    quartier_id: 1207,
    nom: "DOURA",
    commune_id: 114,
  },
  {
    quartier_id: 1208,
    nom: "FARAKOBA",
    commune_id: 114,
  },
  {
    quartier_id: 1209,
    nom: "HEREMAKONO",
    commune_id: 114,
  },
  {
    quartier_id: 1210,
    nom: "KARIKARISSA",
    commune_id: 114,
  },
  {
    quartier_id: 1211,
    nom: "KEROUANE",
    commune_id: 114,
  },
  {
    quartier_id: 1212,
    nom: "MANANKOUROU",
    commune_id: 114,
  },
  {
    quartier_id: 1213,
    nom: "YARA",
    commune_id: 114,
  },
  {
    quartier_id: 1214,
    nom: "YARAKOUDA",
    commune_id: 114,
  },
  {
    quartier_id: 1215,
    nom: "BAGBE",
    commune_id: 115,
  },
  {
    quartier_id: 1216,
    nom: "BALLAN",
    commune_id: 115,
  },
  {
    quartier_id: 1217,
    nom: "DJIRLAN",
    commune_id: 115,
  },
  {
    quartier_id: 1218,
    nom: "KINIERO I",
    commune_id: 115,
  },
  {
    quartier_id: 1219,
    nom: "KINIERO II",
    commune_id: 115,
  },
  {
    quartier_id: 1220,
    nom: "KINIERO III",
    commune_id: 115,
  },
  {
    quartier_id: 1221,
    nom: "KONSON",
    commune_id: 115,
  },
  {
    quartier_id: 1222,
    nom: "MANSONYA",
    commune_id: 115,
  },
  {
    quartier_id: 1223,
    nom: "MISSAMANA",
    commune_id: 115,
  },
  {
    quartier_id: 1224,
    nom: "HEREMAKONO",
    commune_id: 116,
  },
  {
    quartier_id: 1225,
    nom: "KOMOLAKOURA",
    commune_id: 116,
  },
  {
    quartier_id: 1226,
    nom: "NONO DJENIA",
    commune_id: 116,
  },
  {
    quartier_id: 1227,
    nom: "SAMBAYA",
    commune_id: 116,
  },
  {
    quartier_id: 1228,
    nom: "TOURETA FOULA",
    commune_id: 116,
  },
  {
    quartier_id: 1229,
    nom: "BOFILANI",
    commune_id: 117,
  },
  {
    quartier_id: 1230,
    nom: "FADOU",
    commune_id: 117,
  },
  {
    quartier_id: 1231,
    nom: "KOUMANA I",
    commune_id: 117,
  },
  {
    quartier_id: 1232,
    nom: "KOUMANA II",
    commune_id: 117,
  },
  {
    quartier_id: 1233,
    nom: "BOKODO",
    commune_id: 118,
  },
  {
    quartier_id: 1234,
    nom: "KOMOYA",
    commune_id: 118,
  },
  {
    quartier_id: 1235,
    nom: "MOUSSAYA",
    commune_id: 118,
  },
  {
    quartier_id: 1236,
    nom: "SANACIA",
    commune_id: 118,
  },
  {
    quartier_id: 1237,
    nom: "SANGUIANA I",
    commune_id: 118,
  },
  {
    quartier_id: 1238,
    nom: "SANGUIANA II",
    commune_id: 118,
  },
  {
    quartier_id: 1239,
    nom: "SARAYA",
    commune_id: 118,
  },
  {
    quartier_id: 1240,
    nom: "SENKOUNGNA",
    commune_id: 118,
  },
  {
    quartier_id: 1241,
    nom: "HEREMAKONO",
    commune_id: 119,
  },
  {
    quartier_id: 1242,
    nom: "KISSIDOUGOU KOURA",
    commune_id: 119,
  },
  {
    quartier_id: 1243,
    nom: "KODIARAN",
    commune_id: 119,
  },
  {
    quartier_id: 1244,
    nom: "MANDIANA I",
    commune_id: 119,
  },
  {
    quartier_id: 1245,
    nom: "NOUMOUSSOULOU",
    commune_id: 119,
  },
  {
    quartier_id: 1246,
    nom: "OUDIALA",
    commune_id: 119,
  },
  {
    quartier_id: 1247,
    nom: "ZANGBELA",
    commune_id: 119,
  },
  {
    quartier_id: 1248,
    nom: "BALANDOUGOUBA I",
    commune_id: 120,
  },
  {
    quartier_id: 1249,
    nom: "BALANDOUGOUBA II",
    commune_id: 120,
  },
  {
    quartier_id: 1250,
    nom: "BOUGOU",
    commune_id: 120,
  },
  {
    quartier_id: 1251,
    nom: "FARAGBEKORO",
    commune_id: 120,
  },
  {
    quartier_id: 1252,
    nom: "KINIENKOURA I",
    commune_id: 120,
  },
  {
    quartier_id: 1253,
    nom: "KINIENKOURA II",
    commune_id: 120,
  },
  {
    quartier_id: 1254,
    nom: "NIANI",
    commune_id: 120,
  },
  {
    quartier_id: 1255,
    nom: "SIDIKILA I",
    commune_id: 120,
  },
  {
    quartier_id: 1256,
    nom: "SIDIKILA II",
    commune_id: 120,
  },
  {
    quartier_id: 1257,
    nom: "TABATEFOUWA",
    commune_id: 120,
  },
  {
    quartier_id: 1258,
    nom: "WOLOLA",
    commune_id: 120,
  },
  {
    quartier_id: 1259,
    nom: "ALPHA YAYA",
    commune_id: 121,
  },
  {
    quartier_id: 1260,
    nom: "BAKOU",
    commune_id: 121,
  },
  {
    quartier_id: 1261,
    nom: "BALANDOU I",
    commune_id: 121,
  },
  {
    quartier_id: 1262,
    nom: "BALANDOU II",
    commune_id: 121,
  },
  {
    quartier_id: 1263,
    nom: "BANANFARA",
    commune_id: 121,
  },
  {
    quartier_id: 1264,
    nom: "DIARADOU",
    commune_id: 121,
  },
  {
    quartier_id: 1265,
    nom: "FARASSABABEN",
    commune_id: 121,
  },
  {
    quartier_id: 1266,
    nom: "KAMERENA",
    commune_id: 121,
  },
  {
    quartier_id: 1267,
    nom: "KONKOYE",
    commune_id: 121,
  },
  {
    quartier_id: 1268,
    nom: "KOUDI",
    commune_id: 121,
  },
  {
    quartier_id: 1269,
    nom: "MAGALIFARABA",
    commune_id: 121,
  },
  {
    quartier_id: 1270,
    nom: "SAMORY",
    commune_id: 121,
  },
  {
    quartier_id: 1271,
    nom: "SIRAMANA",
    commune_id: 121,
  },
  {
    quartier_id: 1272,
    nom: "DIARAKOUROU",
    commune_id: 122,
  },
  {
    quartier_id: 1273,
    nom: "FALAMA",
    commune_id: 122,
  },
  {
    quartier_id: 1274,
    nom: "FARALAKO",
    commune_id: 122,
  },
  {
    quartier_id: 1275,
    nom: "KANGBELA",
    commune_id: 122,
  },
  {
    quartier_id: 1276,
    nom: "KOMANA",
    commune_id: 122,
  },
  {
    quartier_id: 1277,
    nom: "KOROMADOU",
    commune_id: 122,
  },
  {
    quartier_id: 1278,
    nom: "MAMADIANA",
    commune_id: 122,
  },
  {
    quartier_id: 1279,
    nom: "MARENA",
    commune_id: 122,
  },
  {
    quartier_id: 1280,
    nom: "SOUNTOUDIANA",
    commune_id: 122,
  },
  {
    quartier_id: 1281,
    nom: "KANTOUMANINA",
    commune_id: 123,
  },
  {
    quartier_id: 1282,
    nom: "MOUSSADOU",
    commune_id: 123,
  },
  {
    quartier_id: 1283,
    nom: "ORIALEN",
    commune_id: 123,
  },
  {
    quartier_id: 1284,
    nom: "SOKOURABA",
    commune_id: 123,
  },
  {
    quartier_id: 1285,
    nom: "BANANKORO",
    commune_id: 124,
  },
  {
    quartier_id: 1286,
    nom: "FILANINDIALAKORO",
    commune_id: 124,
  },
  {
    quartier_id: 1287,
    nom: "KARAKANI",
    commune_id: 124,
  },
  {
    quartier_id: 1288,
    nom: "KINIERANKOURA",
    commune_id: 124,
  },
  {
    quartier_id: 1289,
    nom: "KODJAMBA",
    commune_id: 124,
  },
  {
    quartier_id: 1290,
    nom: "KODJAMBA MARCHE",
    commune_id: 124,
  },
  {
    quartier_id: 1291,
    nom: "KODJARANINDA",
    commune_id: 124,
  },
  {
    quartier_id: 1292,
    nom: "M'BALIA I",
    commune_id: 124,
  },
  {
    quartier_id: 1293,
    nom: "M'BALIA II",
    commune_id: 124,
  },
  {
    quartier_id: 1294,
    nom: "MAGANA",
    commune_id: 124,
  },
  {
    quartier_id: 1295,
    nom: "NAMISSA I",
    commune_id: 124,
  },
  {
    quartier_id: 1296,
    nom: "NAMISSA II",
    commune_id: 124,
  },
  {
    quartier_id: 1297,
    nom: "OUDOUMAKORO",
    commune_id: 124,
  },
  {
    quartier_id: 1298,
    nom: "BALANDOU",
    commune_id: 125,
  },
  {
    quartier_id: 1299,
    nom: "BANKOUMANA I",
    commune_id: 125,
  },
  {
    quartier_id: 1300,
    nom: "BANKOUMANA II",
    commune_id: 125,
  },
  {
    quartier_id: 1301,
    nom: "DJILENGBE I",
    commune_id: 125,
  },
  {
    quartier_id: 1302,
    nom: "DJILENGBE II",
    commune_id: 125,
  },
  {
    quartier_id: 1303,
    nom: "DOUNOKOLO",
    commune_id: 125,
  },
  {
    quartier_id: 1304,
    nom: "FRAGBEKOURA",
    commune_id: 125,
  },
  {
    quartier_id: 1305,
    nom: "GBENSO",
    commune_id: 125,
  },
  {
    quartier_id: 1306,
    nom: "KAMA",
    commune_id: 125,
  },
  {
    quartier_id: 1307,
    nom: "KIGNEROBA",
    commune_id: 125,
  },
  {
    quartier_id: 1308,
    nom: "KOLOMOKO",
    commune_id: 125,
  },
  {
    quartier_id: 1309,
    nom: "KONDIANAKORO I",
    commune_id: 125,
  },
  {
    quartier_id: 1310,
    nom: "KONDIANAKORO II",
    commune_id: 125,
  },
  {
    quartier_id: 1311,
    nom: "KONDIANAKOURA",
    commune_id: 125,
  },
  {
    quartier_id: 1312,
    nom: "FOUADJOU",
    commune_id: 126,
  },
  {
    quartier_id: 1313,
    nom: "FRAMADIA",
    commune_id: 126,
  },
  {
    quartier_id: 1314,
    nom: "FRANINDOUN",
    commune_id: 126,
  },
  {
    quartier_id: 1315,
    nom: "GBILIN",
    commune_id: 126,
  },
  {
    quartier_id: 1316,
    nom: "KANIFRA",
    commune_id: 126,
  },
  {
    quartier_id: 1317,
    nom: "KOUNDIAN I",
    commune_id: 126,
  },
  {
    quartier_id: 1318,
    nom: "KOUNDIAN II",
    commune_id: 126,
  },
  {
    quartier_id: 1319,
    nom: "LOILAKORO",
    commune_id: 126,
  },
  {
    quartier_id: 1320,
    nom: "SAIMANA",
    commune_id: 126,
  },
  {
    quartier_id: 1321,
    nom: "TADIBAKOUROU",
    commune_id: 126,
  },
  {
    quartier_id: 1322,
    nom: "BALANDOU",
    commune_id: 127,
  },
  {
    quartier_id: 1323,
    nom: "DALAKAN",
    commune_id: 127,
  },
  {
    quartier_id: 1324,
    nom: "FADOU",
    commune_id: 127,
  },
  {
    quartier_id: 1325,
    nom: "FARABA KOURA",
    commune_id: 127,
  },
  {
    quartier_id: 1326,
    nom: "KANAGALA",
    commune_id: 127,
  },
  {
    quartier_id: 1327,
    nom: "KINIENIN",
    commune_id: 127,
  },
  {
    quartier_id: 1328,
    nom: "LIMBANA",
    commune_id: 127,
  },
  {
    quartier_id: 1329,
    nom: "MANFELE",
    commune_id: 127,
  },
  {
    quartier_id: 1330,
    nom: "MASSAKODA",
    commune_id: 127,
  },
  {
    quartier_id: 1331,
    nom: "MISSIMAN",
    commune_id: 127,
  },
  {
    quartier_id: 1332,
    nom: "MORODOU I",
    commune_id: 127,
  },
  {
    quartier_id: 1333,
    nom: "MORODOU II",
    commune_id: 127,
  },
  {
    quartier_id: 1334,
    nom: "NAFADJILEN",
    commune_id: 127,
  },
  {
    quartier_id: 1335,
    nom: "SAKODOU SINKO",
    commune_id: 127,
  },
  {
    quartier_id: 1336,
    nom: "SAMAKOFARA",
    commune_id: 127,
  },
  {
    quartier_id: 1337,
    nom: "BAGAFEA",
    commune_id: 128,
  },
  {
    quartier_id: 1338,
    nom: "DANDELA",
    commune_id: 128,
  },
  {
    quartier_id: 1339,
    nom: "DJELIMALA",
    commune_id: 128,
  },
  {
    quartier_id: 1340,
    nom: "GBONKO",
    commune_id: 128,
  },
  {
    quartier_id: 1341,
    nom: "NIANTANINA I",
    commune_id: 128,
  },
  {
    quartier_id: 1342,
    nom: "NIANTANINA II",
    commune_id: 128,
  },
  {
    quartier_id: 1343,
    nom: "WASSA",
    commune_id: 128,
  },
  {
    quartier_id: 1344,
    nom: "BOUGOULA",
    commune_id: 129,
  },
  {
    quartier_id: 1345,
    nom: "LENSORON",
    commune_id: 129,
  },
  {
    quartier_id: 1346,
    nom: "MALETOUMANINA",
    commune_id: 129,
  },
  {
    quartier_id: 1347,
    nom: "NIAKO",
    commune_id: 129,
  },
  {
    quartier_id: 1348,
    nom: "NOUMOUDJILA",
    commune_id: 129,
  },
  {
    quartier_id: 1349,
    nom: "OUROLA",
    commune_id: 129,
  },
  {
    quartier_id: 1350,
    nom: "SALADOU",
    commune_id: 129,
  },
  {
    quartier_id: 1351,
    nom: "TINDILA",
    commune_id: 129,
  },
  {
    quartier_id: 1352,
    nom: "WAHIRY",
    commune_id: 129,
  },
  {
    quartier_id: 1353,
    nom: "KARAKOURA",
    commune_id: 130,
  },
  {
    quartier_id: 1354,
    nom: "KANSAN",
    commune_id: 130,
  },
  {
    quartier_id: 1355,
    nom: "KIKO KARAKORO",
    commune_id: 130,
  },
  {
    quartier_id: 1356,
    nom: "KONOMAKORO",
    commune_id: 130,
  },
  {
    quartier_id: 1357,
    nom: "M'BALIA",
    commune_id: 130,
  },
  {
    quartier_id: 1358,
    nom: "MADINA",
    commune_id: 130,
  },
  {
    quartier_id: 1359,
    nom: "NIAMINA",
    commune_id: 130,
  },
  {
    quartier_id: 1360,
    nom: "SOGBE",
    commune_id: 130,
  },
  {
    quartier_id: 1361,
    nom: "SOUNKOULOUN",
    commune_id: 130,
  },
  {
    quartier_id: 1362,
    nom: "TANDO",
    commune_id: 130,
  },
  {
    quartier_id: 1363,
    nom: "FARADJAN",
    commune_id: 130,
  },
  {
    quartier_id: 1364,
    nom: "BAMBALA",
    commune_id: 131,
  },
  {
    quartier_id: 1365,
    nom: "BOLIBANA I",
    commune_id: 131,
  },
  {
    quartier_id: 1366,
    nom: "BOLIBANA II",
    commune_id: 131,
  },
  {
    quartier_id: 1367,
    nom: "DANKAKORO",
    commune_id: 131,
  },
  {
    quartier_id: 1368,
    nom: "DANKAKOURA",
    commune_id: 131,
  },
  {
    quartier_id: 1369,
    nom: "DIATELA",
    commune_id: 131,
  },
  {
    quartier_id: 1370,
    nom: "DILENGBE",
    commune_id: 131,
  },
  {
    quartier_id: 1371,
    nom: "FALAMA",
    commune_id: 131,
  },
  {
    quartier_id: 1372,
    nom: "KINIEBAKORO",
    commune_id: 131,
  },
  {
    quartier_id: 1373,
    nom: "KOFILANI",
    commune_id: 131,
  },
  {
    quartier_id: 1374,
    nom: "KOUROUDAKORO I",
    commune_id: 131,
  },
  {
    quartier_id: 1375,
    nom: "KOUROUDAKORO II",
    commune_id: 131,
  },
  {
    quartier_id: 1376,
    nom: "NIANDAKOURA",
    commune_id: 131,
  },
  {
    quartier_id: 1377,
    nom: "SAOUROU",
    commune_id: 131,
  },
  {
    quartier_id: 1378,
    nom: "SEBEKORO",
    commune_id: 131,
  },
  {
    quartier_id: 1379,
    nom: "SIGUIRI KOURA I",
    commune_id: 131,
  },
  {
    quartier_id: 1380,
    nom: "SIGUIRI KOURA II",
    commune_id: 131,
  },
  {
    quartier_id: 1381,
    nom: "SIGUIRIKORO I",
    commune_id: 131,
  },
  {
    quartier_id: 1382,
    nom: "SIIGUIRIKORO II",
    commune_id: 131,
  },
  {
    quartier_id: 1383,
    nom: "SOUGOULA",
    commune_id: 131,
  },
  {
    quartier_id: 1384,
    nom: "TIGUIBIRI",
    commune_id: 131,
  },
  {
    quartier_id: 1385,
    nom: "BANKON",
    commune_id: 132,
  },
  {
    quartier_id: 1386,
    nom: "DALAGBEDA",
    commune_id: 132,
  },
  {
    quartier_id: 1387,
    nom: "KOMAKOLENDA",
    commune_id: 132,
  },
  {
    quartier_id: 1388,
    nom: "KOUMANDJAN BOUGOU",
    commune_id: 132,
  },
  {
    quartier_id: 1389,
    nom: "LENKEKORO KINYEBA",
    commune_id: 132,
  },
  {
    quartier_id: 1390,
    nom: "LEYBA",
    commune_id: 132,
  },
  {
    quartier_id: 1391,
    nom: "NAFADJI",
    commune_id: 132,
  },
  {
    quartier_id: 1392,
    nom: "ALAHINE",
    commune_id: 133,
  },
  {
    quartier_id: 1393,
    nom: "BEMBETA",
    commune_id: 133,
  },
  {
    quartier_id: 1394,
    nom: "BOURENFE",
    commune_id: 133,
  },
  {
    quartier_id: 1395,
    nom: "DALANBAN",
    commune_id: 133,
  },
  {
    quartier_id: 1396,
    nom: "DOKO",
    commune_id: 133,
  },
  {
    quartier_id: 1397,
    nom: "GAREMA",
    commune_id: 133,
  },
  {
    quartier_id: 1398,
    nom: "KINIEBAKOURA",
    commune_id: 133,
  },
  {
    quartier_id: 1399,
    nom: "KODIARANI",
    commune_id: 133,
  },
  {
    quartier_id: 1400,
    nom: "KOLENDA",
    commune_id: 133,
  },
  {
    quartier_id: 1401,
    nom: "KOLITA",
    commune_id: 133,
  },
  {
    quartier_id: 1402,
    nom: "KOURAKO",
    commune_id: 133,
  },
  {
    quartier_id: 1403,
    nom: "KOUREMALEN",
    commune_id: 133,
  },
  {
    quartier_id: 1404,
    nom: "MANSALA",
    commune_id: 133,
  },
  {
    quartier_id: 1405,
    nom: "NAFADJI",
    commune_id: 133,
  },
  {
    quartier_id: 1406,
    nom: "OUDOULA",
    commune_id: 133,
  },
  {
    quartier_id: 1407,
    nom: "SOULOUKOUNI",
    commune_id: 133,
  },
  {
    quartier_id: 1408,
    nom: "SOUMBARAKOBA",
    commune_id: 133,
  },
  {
    quartier_id: 1409,
    nom: "TATAKOUROU",
    commune_id: 133,
  },
  {
    quartier_id: 1410,
    nom: "TOMBOKO",
    commune_id: 133,
  },
  {
    quartier_id: 1411,
    nom: "TOMBONI",
    commune_id: 133,
  },
  {
    quartier_id: 1412,
    nom: "BENDOUGOU",
    commune_id: 134,
  },
  {
    quartier_id: 1413,
    nom: "BOUGOUROUN",
    commune_id: 134,
  },
  {
    quartier_id: 1414,
    nom: "DIAMBAYA",
    commune_id: 134,
  },
  {
    quartier_id: 1415,
    nom: "FRANWALIA",
    commune_id: 134,
  },
  {
    quartier_id: 1416,
    nom: "KAMAYA",
    commune_id: 134,
  },
  {
    quartier_id: 1417,
    nom: "KOFILANI",
    commune_id: 134,
  },
  {
    quartier_id: 1418,
    nom: "KOMA",
    commune_id: 134,
  },
  {
    quartier_id: 1419,
    nom: "KOUDEDI",
    commune_id: 134,
  },
  {
    quartier_id: 1420,
    nom: "SAMBAYA",
    commune_id: 134,
  },
  {
    quartier_id: 1421,
    nom: "SOBATA",
    commune_id: 134,
  },
  {
    quartier_id: 1422,
    nom: "BALADOUGOU",
    commune_id: 135,
  },
  {
    quartier_id: 1423,
    nom: "DIOUMABANA",
    commune_id: 135,
  },
  {
    quartier_id: 1424,
    nom: "DJEYA",
    commune_id: 135,
  },
  {
    quartier_id: 1425,
    nom: "FRENKAMAYA",
    commune_id: 135,
  },
  {
    quartier_id: 1426,
    nom: "KARAKORO",
    commune_id: 135,
  },
  {
    quartier_id: 1427,
    nom: "KINIEBAKOURA",
    commune_id: 135,
  },
  {
    quartier_id: 1428,
    nom: "KONOMAKOURA",
    commune_id: 135,
  },
  {
    quartier_id: 1429,
    nom: "TOGUIFIN",
    commune_id: 135,
  },
  {
    quartier_id: 1430,
    nom: "TOGUIOULEN",
    commune_id: 135,
  },
  {
    quartier_id: 1431,
    nom: "ALAHINA",
    commune_id: 136,
  },
  {
    quartier_id: 1432,
    nom: "BALATO",
    commune_id: 136,
  },
  {
    quartier_id: 1433,
    nom: "BOUKARIA",
    commune_id: 136,
  },
  {
    quartier_id: 1434,
    nom: "DAABA",
    commune_id: 136,
  },
  {
    quartier_id: 1435,
    nom: "DIALAKO",
    commune_id: 136,
  },
  {
    quartier_id: 1436,
    nom: "DIARAYA",
    commune_id: 136,
  },
  {
    quartier_id: 1437,
    nom: "DIDI",
    commune_id: 136,
  },
  {
    quartier_id: 1438,
    nom: "DOUBAYA",
    commune_id: 136,
  },
  {
    quartier_id: 1439,
    nom: "FARABA",
    commune_id: 136,
  },
  {
    quartier_id: 1440,
    nom: "FATOYA",
    commune_id: 136,
  },
  {
    quartier_id: 1441,
    nom: "FIFA",
    commune_id: 136,
  },
  {
    quartier_id: 1442,
    nom: "HEREMAKONON",
    commune_id: 136,
  },
  {
    quartier_id: 1443,
    nom: "KAMATIGUIA",
    commune_id: 136,
  },
  {
    quartier_id: 1444,
    nom: "KINTINIAN I",
    commune_id: 136,
  },
  {
    quartier_id: 1445,
    nom: "KINTINIAN II",
    commune_id: 136,
  },
  {
    quartier_id: 1446,
    nom: "KOREKORE",
    commune_id: 136,
  },
  {
    quartier_id: 1447,
    nom: "KOUROUNI",
    commune_id: 136,
  },
  {
    quartier_id: 1448,
    nom: "MANKITIN",
    commune_id: 136,
  },
  {
    quartier_id: 1449,
    nom: "NAFADJI",
    commune_id: 136,
  },
  {
    quartier_id: 1450,
    nom: "SAMANI",
    commune_id: 136,
  },
  {
    quartier_id: 1451,
    nom: "SETIGUIA",
    commune_id: 136,
  },
  {
    quartier_id: 1452,
    nom: "TINTISSABANI",
    commune_id: 136,
  },
  {
    quartier_id: 1453,
    nom: "DANTINIA",
    commune_id: 137,
  },
  {
    quartier_id: 1454,
    nom: "DIATEA",
    commune_id: 137,
  },
  {
    quartier_id: 1455,
    nom: "FOULATA",
    commune_id: 137,
  },
  {
    quartier_id: 1456,
    nom: "GOUFOUDE",
    commune_id: 137,
  },
  {
    quartier_id: 1457,
    nom: "HAFIA",
    commune_id: 137,
  },
  {
    quartier_id: 1458,
    nom: "KOBEDARA",
    commune_id: 137,
  },
  {
    quartier_id: 1459,
    nom: "LAYE BAYA",
    commune_id: 137,
  },
  {
    quartier_id: 1460,
    nom: "MALEAH",
    commune_id: 137,
  },
  {
    quartier_id: 1461,
    nom: "MIGNADA",
    commune_id: 137,
  },
  {
    quartier_id: 1462,
    nom: "SARAYA",
    commune_id: 137,
  },
  {
    quartier_id: 1463,
    nom: "SEYLA",
    commune_id: 137,
  },
  {
    quartier_id: 1464,
    nom: "BOUKARYA",
    commune_id: 138,
  },
  {
    quartier_id: 1465,
    nom: "DIBIYA",
    commune_id: 138,
  },
  {
    quartier_id: 1466,
    nom: "NABOU",
    commune_id: 138,
  },
  {
    quartier_id: 1467,
    nom: "SOUMBARAYA",
    commune_id: 138,
  },
  {
    quartier_id: 1468,
    nom: "BALANDOUGOU",
    commune_id: 139,
  },
  {
    quartier_id: 1469,
    nom: "BANANIKORO",
    commune_id: 139,
  },
  {
    quartier_id: 1470,
    nom: "DIALAWASSA",
    commune_id: 139,
  },
  {
    quartier_id: 1471,
    nom: "FARABALEN",
    commune_id: 139,
  },
  {
    quartier_id: 1472,
    nom: "FETEKOU",
    commune_id: 139,
  },
  {
    quartier_id: 1473,
    nom: "FIDAKO",
    commune_id: 139,
  },
  {
    quartier_id: 1474,
    nom: "KEDALA",
    commune_id: 139,
  },
  {
    quartier_id: 1475,
    nom: "KINYEKOUROU",
    commune_id: 139,
  },
  {
    quartier_id: 1476,
    nom: "KOUROUBALA",
    commune_id: 139,
  },
  {
    quartier_id: 1477,
    nom: "KOUYAKOUYA",
    commune_id: 139,
  },
  {
    quartier_id: 1478,
    nom: "NIAGASSOLA",
    commune_id: 139,
  },
  {
    quartier_id: 1479,
    nom: "SINIKO",
    commune_id: 139,
  },
  {
    quartier_id: 1480,
    nom: "TONDO",
    commune_id: 139,
  },
  {
    quartier_id: 1481,
    nom: "TOMBALEN",
    commune_id: 139,
  },
  {
    quartier_id: 1482,
    nom: "BANFARA",
    commune_id: 140,
  },
  {
    quartier_id: 1483,
    nom: "DAMISSAKORO",
    commune_id: 140,
  },
  {
    quartier_id: 1484,
    nom: "DAMISSAKOURA",
    commune_id: 140,
  },
  {
    quartier_id: 1485,
    nom: "FARADA",
    commune_id: 140,
  },
  {
    quartier_id: 1486,
    nom: "NIANDANKORO I",
    commune_id: 140,
  },
  {
    quartier_id: 1487,
    nom: "NIANDANKORO II",
    commune_id: 140,
  },
  {
    quartier_id: 1488,
    nom: "WARAN",
    commune_id: 140,
  },
  {
    quartier_id: 1489,
    nom: "DALANINKAN",
    commune_id: 141,
  },
  {
    quartier_id: 1490,
    nom: "FANDIA",
    commune_id: 141,
  },
  {
    quartier_id: 1491,
    nom: "GBENKROKRO",
    commune_id: 141,
  },
  {
    quartier_id: 1492,
    nom: "KOSSOKOBA",
    commune_id: 141,
  },
  {
    quartier_id: 1493,
    nom: "LANDI",
    commune_id: 141,
  },
  {
    quartier_id: 1494,
    nom: "LELEDA",
    commune_id: 141,
  },
  {
    quartier_id: 1495,
    nom: "NANEN KOUROUMA",
    commune_id: 141,
  },
  {
    quartier_id: 1496,
    nom: "NANEN TRAORE",
    commune_id: 141,
  },
  {
    quartier_id: 1497,
    nom: "NORAKORO",
    commune_id: 141,
  },
  {
    quartier_id: 1498,
    nom: "TASSILIMAN",
    commune_id: 141,
  },
  {
    quartier_id: 1499,
    nom: "BALANDOUGOU",
    commune_id: 142,
  },
  {
    quartier_id: 1500,
    nom: "BANFELE KORO",
    commune_id: 142,
  },
  {
    quartier_id: 1501,
    nom: "BANFELE KOURA",
    commune_id: 142,
  },
  {
    quartier_id: 1502,
    nom: "MAKONO",
    commune_id: 142,
  },
  {
    quartier_id: 1503,
    nom: "NOUNKOUNKAN I",
    commune_id: 142,
  },
  {
    quartier_id: 1504,
    nom: "NOUNKOUNKAN II",
    commune_id: 142,
  },
  {
    quartier_id: 1505,
    nom: "SOKOURA",
    commune_id: 142,
  },
  {
    quartier_id: 1506,
    nom: "SOUNSOUNKOUDOU",
    commune_id: 142,
  },
  {
    quartier_id: 1507,
    nom: "BALANDOUGOU",
    commune_id: 143,
  },
  {
    quartier_id: 1508,
    nom: "BARKERE",
    commune_id: 143,
  },
  {
    quartier_id: 1509,
    nom: "BOUGOULAN",
    commune_id: 143,
  },
  {
    quartier_id: 1510,
    nom: "DIGUIBANIA",
    commune_id: 143,
  },
  {
    quartier_id: 1511,
    nom: "DIGUILIN",
    commune_id: 143,
  },
  {
    quartier_id: 1512,
    nom: "KAKAMA",
    commune_id: 143,
  },
  {
    quartier_id: 1513,
    nom: "KOTE",
    commune_id: 143,
  },
  {
    quartier_id: 1514,
    nom: "LERO",
    commune_id: 143,
  },
  {
    quartier_id: 1515,
    nom: "MAKANDJAN",
    commune_id: 143,
  },
  {
    quartier_id: 1516,
    nom: "MOUSSALA",
    commune_id: 143,
  },
  {
    quartier_id: 1517,
    nom: "NETEMAFARA",
    commune_id: 143,
  },
  {
    quartier_id: 1518,
    nom: "NIMISSATOU",
    commune_id: 143,
  },
  {
    quartier_id: 1519,
    nom: "NORA",
    commune_id: 143,
  },
  {
    quartier_id: 1520,
    nom: "SIGUIRINI",
    commune_id: 143,
  },
  {
    quartier_id: 1521,
    nom: "SOKODO",
    commune_id: 143,
  },
  {
    quartier_id: 1522,
    nom: "TALABE",
    commune_id: 143,
  },
  {
    quartier_id: 1523,
    nom: "TOMBA",
    commune_id: 143,
  },
  {
    quartier_id: 1524,
    nom: "CENTRE",
    commune_id: 144,
  },
  {
    quartier_id: 1525,
    nom: "DOUMBOUYAH CENTRE",
    commune_id: 144,
  },
  {
    quartier_id: 1526,
    nom: "DOUMBOUYAH ECOLE",
    commune_id: 144,
  },
  {
    quartier_id: 1527,
    nom: "FILY I",
    commune_id: 144,
  },
  {
    quartier_id: 1528,
    nom: "FILY II",
    commune_id: 144,
  },
  {
    quartier_id: 1529,
    nom: "KAROUBA TOUGANDE",
    commune_id: 144,
  },
  {
    quartier_id: 1530,
    nom: "KM 54",
    commune_id: 144,
  },
  {
    quartier_id: 1531,
    nom: "LABO",
    commune_id: 144,
  },
  {
    quartier_id: 1532,
    nom: "LAMINAYAH BATOUYAH",
    commune_id: 144,
  },
  {
    quartier_id: 1533,
    nom: "NAKIRI",
    commune_id: 144,
  },
  {
    quartier_id: 1534,
    nom: "NORD I",
    commune_id: 144,
  },
  {
    quartier_id: 1535,
    nom: "NORD II",
    commune_id: 144,
  },
  {
    quartier_id: 1536,
    nom: "SOMAYAH CENTRE",
    commune_id: 144,
  },
  {
    quartier_id: 1537,
    nom: "SOMAYAH MOSQUEE",
    commune_id: 144,
  },
  {
    quartier_id: 1538,
    nom: "SOMAYAH PLATEAU",
    commune_id: 144,
  },
  {
    quartier_id: 1539,
    nom: "BANGOUYAH",
    commune_id: 145,
  },
  {
    quartier_id: 1540,
    nom: "GOLEAH",
    commune_id: 145,
  },
  {
    quartier_id: 1541,
    nom: "KOLAKHOURE",
    commune_id: 145,
  },
  {
    quartier_id: 1542,
    nom: "KOURIAH CENTRE",
    commune_id: 145,
  },
  {
    quartier_id: 1543,
    nom: "MORIAKHORY",
    commune_id: 145,
  },
  {
    quartier_id: 1544,
    nom: "TANENE FIRIBADE",
    commune_id: 145,
  },
  {
    quartier_id: 1545,
    nom: "BAMBAYAH",
    commune_id: 146,
  },
  {
    quartier_id: 1546,
    nom: "BENTOURAYAH",
    commune_id: 146,
  },
  {
    quartier_id: 1547,
    nom: "C B A",
    commune_id: 146,
  },
  {
    quartier_id: 1548,
    nom: "FASSIAN",
    commune_id: 146,
  },
  {
    quartier_id: 1549,
    nom: "FRIGUIADY",
    commune_id: 146,
  },
  {
    quartier_id: 1550,
    nom: "GOMBOYAH",
    commune_id: 146,
  },
  {
    quartier_id: 1551,
    nom: "HERMAKONO",
    commune_id: 146,
  },
  {
    quartier_id: 1552,
    nom: "KALOKHOYAH",
    commune_id: 146,
  },
  {
    quartier_id: 1553,
    nom: "KASSOGNAH",
    commune_id: 146,
  },
  {
    quartier_id: 1554,
    nom: "KOUNTIAH",
    commune_id: 146,
  },
  {
    quartier_id: 1555,
    nom: "SANOYAH KM 36",
    commune_id: 146,
  },
  {
    quartier_id: 1556,
    nom: "SANOYAH RAIL",
    commune_id: 146,
  },
  {
    quartier_id: 1557,
    nom: "TANENE I",
    commune_id: 146,
  },
  {
    quartier_id: 1558,
    nom: "TANENE II",
    commune_id: 146,
  },
  {
    quartier_id: 1559,
    nom: "BALAMODOUYAH",
    commune_id: 147,
  },
  {
    quartier_id: 1560,
    nom: "BALLAYAH",
    commune_id: 147,
  },
  {
    quartier_id: 1561,
    nom: "BONFE",
    commune_id: 147,
  },
  {
    quartier_id: 1562,
    nom: "DONEAH",
    commune_id: 147,
  },
  {
    quartier_id: 1563,
    nom: "KENDOUMAYAH",
    commune_id: 147,
  },
  {
    quartier_id: 1564,
    nom: "KIRIYAH",
    commune_id: 147,
  },
  {
    quartier_id: 1565,
    nom: "KOUNSOUTA",
    commune_id: 147,
  },
  {
    quartier_id: 1566,
    nom: "KOUYEAH",
    commune_id: 147,
  },
  {
    quartier_id: 1567,
    nom: "LAMINAYAH",
    commune_id: 147,
  },
  {
    quartier_id: 1568,
    nom: "MANGATA",
    commune_id: 147,
  },
  {
    quartier_id: 1569,
    nom: "NASSER",
    commune_id: 147,
  },
  {
    quartier_id: 1570,
    nom: "TAMBAYAH",
    commune_id: 147,
  },
  {
    quartier_id: 1571,
    nom: "TOGUIRON",
    commune_id: 147,
  },
  {
    quartier_id: 1572,
    nom: "WONKIFONG CENTRE",
    commune_id: 147,
  },
  {
    quartier_id: 1573,
    nom: "YENGUIAKHORY",
    commune_id: 147,
  },
  {
    quartier_id: 1574,
    nom: "ANSOUMANIYAH  VILLAGE",
    commune_id: 148,
  },
  {
    quartier_id: 1575,
    nom: "ANSOUMANIYAH PLATEAU",
    commune_id: 148,
  },
  {
    quartier_id: 1576,
    nom: "BAILOBAYA -CENTRE",
    commune_id: 148,
  },
  {
    quartier_id: 1577,
    nom: "BAILOBAYAH PLATEAU",
    commune_id: 148,
  },
  {
    quartier_id: 1578,
    nom: "BONDABON",
    commune_id: 148,
  },
  {
    quartier_id: 1579,
    nom: "DOGBERE",
    commune_id: 148,
  },
  {
    quartier_id: 1580,
    nom: "GBEREIRE",
    commune_id: 148,
  },
  {
    quartier_id: 1581,
    nom: "KAGBELEN PLATEAU",
    commune_id: 148,
  },
  {
    quartier_id: 1582,
    nom: "KAGBELEN VILLAGE",
    commune_id: 148,
  },
  {
    quartier_id: 1583,
    nom: "KEITAYA",
    commune_id: 148,
  },
  {
    quartier_id: 1584,
    nom: "KENENDE",
    commune_id: 148,
  },
  {
    quartier_id: 1585,
    nom: "KOLOGNET N'SIRA",
    commune_id: 148,
  },
  {
    quartier_id: 1586,
    nom: "MAFOUDIA",
    commune_id: 148,
  },
  {
    quartier_id: 1587,
    nom: "NEGUEYAH",
    commune_id: 148,
  },
  {
    quartier_id: 1588,
    nom: "SAMATRAN PLATEAU",
    commune_id: 148,
  },
  {
    quartier_id: 1589,
    nom: "SAMATRAN VILLAGE",
    commune_id: 148,
  },
  {
    quartier_id: 1590,
    nom: "SIMBAYA",
    commune_id: 148,
  },
  {
    quartier_id: 1591,
    nom: "TERSE",
    commune_id: 148,
  },
  {
    quartier_id: 1592,
    nom: "TOBOLON",
    commune_id: 148,
  },
  {
    quartier_id: 1593,
    nom: "TOMPETIN",
    commune_id: 148,
  },
  {
    quartier_id: 1594,
    nom: "TOUMANIAH",
    commune_id: 148,
  },
  {
    quartier_id: 1595,
    nom: "YOROKOGUEYAH",
    commune_id: 148,
  },
  {
    quartier_id: 1596,
    nom: "BADY CENTRE",
    commune_id: 149,
  },
  {
    quartier_id: 1597,
    nom: "FANNABADE",
    commune_id: 149,
  },
  {
    quartier_id: 1598,
    nom: "GBEGNEN",
    commune_id: 149,
  },
  {
    quartier_id: 1599,
    nom: "KOUNSITA",
    commune_id: 149,
  },
  {
    quartier_id: 1600,
    nom: "MADINA SAGALE",
    commune_id: 149,
  },
  {
    quartier_id: 1601,
    nom: "MISSIDE",
    commune_id: 149,
  },
  {
    quartier_id: 1602,
    nom: "SAKHOURE",
    commune_id: 149,
  },
  {
    quartier_id: 1603,
    nom: "SAMAYAH",
    commune_id: 149,
  },
  {
    quartier_id: 1604,
    nom: "TONTON",
    commune_id: 149,
  },
  {
    quartier_id: 1605,
    nom: "TOUGUIKHOURE",
    commune_id: 149,
  },
  {
    quartier_id: 1606,
    nom: "YENYEN MALEAH",
    commune_id: 149,
  },
  {
    quartier_id: 1607,
    nom: "BADY FARENYAH",
    commune_id: 150,
  },
  {
    quartier_id: 1608,
    nom: "FALESSADE CENTRE I",
    commune_id: 150,
  },
  {
    quartier_id: 1609,
    nom: "FALESSADE CENTRE II",
    commune_id: 150,
  },
  {
    quartier_id: 1610,
    nom: "KALIFAYA",
    commune_id: 150,
  },
  {
    quartier_id: 1611,
    nom: "KAMBALIA",
    commune_id: 150,
  },
  {
    quartier_id: 1612,
    nom: "NINGUETTY",
    commune_id: 150,
  },
  {
    quartier_id: 1613,
    nom: "WALIA",
    commune_id: 150,
  },
  {
    quartier_id: 1614,
    nom: "YALAYA",
    commune_id: 150,
  },
  {
    quartier_id: 1615,
    nom: "BAGUEAH",
    commune_id: 151,
  },
  {
    quartier_id: 1616,
    nom: "GBANTAMA",
    commune_id: 151,
  },
  {
    quartier_id: 1617,
    nom: "GBENSENKEN",
    commune_id: 151,
  },
  {
    quartier_id: 1618,
    nom: "KANGOLEAH",
    commune_id: 151,
  },
  {
    quartier_id: 1619,
    nom: "KHORIRA CENTRE",
    commune_id: 151,
  },
  {
    quartier_id: 1620,
    nom: "KONDEYIRE",
    commune_id: 151,
  },
  {
    quartier_id: 1621,
    nom: "LANYAKHOUN",
    commune_id: 151,
  },
  {
    quartier_id: 1622,
    nom: "MAGNOKHOUN",
    commune_id: 151,
  },
  {
    quartier_id: 1623,
    nom: "SOUMAYAH",
    commune_id: 151,
  },
  {
    quartier_id: 1624,
    nom: "TABAN",
    commune_id: 151,
  },
  {
    quartier_id: 1625,
    nom: "DIKIA",
    commune_id: 152,
  },
  {
    quartier_id: 1626,
    nom: "GBEREIRE",
    commune_id: 152,
  },
  {
    quartier_id: 1627,
    nom: "GUEMETEDE",
    commune_id: 152,
  },
  {
    quartier_id: 1628,
    nom: "KHOUNTOUN",
    commune_id: 152,
  },
  {
    quartier_id: 1629,
    nom: "KOROGONYAH",
    commune_id: 152,
  },
  {
    quartier_id: 1630,
    nom: "KOUBIA",
    commune_id: 152,
  },
  {
    quartier_id: 1631,
    nom: "OUASSOU CENTRE",
    commune_id: 152,
  },
  {
    quartier_id: 1632,
    nom: "SARAYAH",
    commune_id: 152,
  },
  {
    quartier_id: 1633,
    nom: "TAFORY SOSSO",
    commune_id: 152,
  },
  {
    quartier_id: 1634,
    nom: "YAFRAYAH",
    commune_id: 152,
  },
  {
    quartier_id: 1635,
    nom: "BENNA",
    commune_id: 153,
  },
  {
    quartier_id: 1636,
    nom: "DEMBAYAH",
    commune_id: 153,
  },
  {
    quartier_id: 1637,
    nom: "DIXINN",
    commune_id: 153,
  },
  {
    quartier_id: 1638,
    nom: "FILAYA",
    commune_id: 153,
  },
  {
    quartier_id: 1639,
    nom: "KALETA FOTONTA",
    commune_id: 153,
  },
  {
    quartier_id: 1640,
    nom: "KANAGBAN",
    commune_id: 153,
  },
  {
    quartier_id: 1641,
    nom: "KAWONSO",
    commune_id: 153,
  },
  {
    quartier_id: 1642,
    nom: "KENENDE LORY",
    commune_id: 153,
  },
  {
    quartier_id: 1643,
    nom: "KONDEAH",
    commune_id: 153,
  },
  {
    quartier_id: 1644,
    nom: "KONFONYAH",
    commune_id: 153,
  },
  {
    quartier_id: 1645,
    nom: "LOUMBAYA",
    commune_id: 153,
  },
  {
    quartier_id: 1646,
    nom: "MADINA",
    commune_id: 153,
  },
  {
    quartier_id: 1647,
    nom: "SAMAYAH",
    commune_id: 153,
  },
  {
    quartier_id: 1648,
    nom: "SANAWALIA",
    commune_id: 153,
  },
  {
    quartier_id: 1649,
    nom: "SOGUIA",
    commune_id: 153,
  },
  {
    quartier_id: 1650,
    nom: "SOUBETIDE",
    commune_id: 153,
  },
  {
    quartier_id: 1651,
    nom: "TANENE I",
    commune_id: 153,
  },
  {
    quartier_id: 1652,
    nom: "TANENE II",
    commune_id: 153,
  },
  {
    quartier_id: 1653,
    nom: "YENOUAH",
    commune_id: 153,
  },
  {
    quartier_id: 1654,
    nom: "BAMBAYA",
    commune_id: 154,
  },
  {
    quartier_id: 1655,
    nom: "BOUBOUYA",
    commune_id: 154,
  },
  {
    quartier_id: 1656,
    nom: "BOURAMAYA",
    commune_id: 154,
  },
  {
    quartier_id: 1657,
    nom: "DEMBAYA",
    commune_id: 154,
  },
  {
    quartier_id: 1658,
    nom: "DOMIAGBE",
    commune_id: 154,
  },
  {
    quartier_id: 1659,
    nom: "FARENYA",
    commune_id: 154,
  },
  {
    quartier_id: 1660,
    nom: "GOMBABHE",
    commune_id: 154,
  },
  {
    quartier_id: 1661,
    nom: "KAFFA",
    commune_id: 154,
  },
  {
    quartier_id: 1662,
    nom: "KALETA",
    commune_id: 154,
  },
  {
    quartier_id: 1663,
    nom: "KHAMBA",
    commune_id: 154,
  },
  {
    quartier_id: 1664,
    nom: "KHIMBELI",
    commune_id: 154,
  },
  {
    quartier_id: 1665,
    nom: "KOBRIA",
    commune_id: 154,
  },
  {
    quartier_id: 1666,
    nom: "KONYEYA",
    commune_id: 154,
  },
  {
    quartier_id: 1667,
    nom: "KOUYEYA",
    commune_id: 154,
  },
  {
    quartier_id: 1668,
    nom: "LONGORI",
    commune_id: 154,
  },
  {
    quartier_id: 1669,
    nom: "MALEAH",
    commune_id: 154,
  },
  {
    quartier_id: 1670,
    nom: "MISSIRA",
    commune_id: 154,
  },
  {
    quartier_id: 1671,
    nom: "SILIKHOUN",
    commune_id: 154,
  },
  {
    quartier_id: 1672,
    nom: "SIMBARAYA",
    commune_id: 154,
  },
  {
    quartier_id: 1673,
    nom: "SIMBAYA",
    commune_id: 154,
  },
  {
    quartier_id: 1674,
    nom: "SONFON",
    commune_id: 154,
  },
  {
    quartier_id: 1675,
    nom: "TAGBE",
    commune_id: 154,
  },
  {
    quartier_id: 1676,
    nom: "TONDON CENTRE",
    commune_id: 154,
  },
  {
    quartier_id: 1677,
    nom: "WALIA",
    commune_id: 154,
  },
  {
    quartier_id: 1678,
    nom: "YENGUISSA",
    commune_id: 154,
  },
  {
    quartier_id: 1679,
    nom: "FATAKO I",
    commune_id: 155,
  },
  {
    quartier_id: 1680,
    nom: "FATAKO II",
    commune_id: 155,
  },
  {
    quartier_id: 1681,
    nom: "KOUTOUMANIAH",
    commune_id: 155,
  },
  {
    quartier_id: 1682,
    nom: "MADINA",
    commune_id: 155,
  },
  {
    quartier_id: 1683,
    nom: "TATAGUI I",
    commune_id: 155,
  },
  {
    quartier_id: 1684,
    nom: "TATAGUI II",
    commune_id: 155,
  },
  {
    quartier_id: 1685,
    nom: "ALLASSOYAH CENTRE",
    commune_id: 156,
  },
  {
    quartier_id: 1686,
    nom: "BASSIA",
    commune_id: 156,
  },
  {
    quartier_id: 1687,
    nom: "DAARY",
    commune_id: 156,
  },
  {
    quartier_id: 1688,
    nom: "DANDAYAH",
    commune_id: 156,
  },
  {
    quartier_id: 1689,
    nom: "FENDEMODIAH",
    commune_id: 156,
  },
  {
    quartier_id: 1690,
    nom: "HERICO",
    commune_id: 156,
  },
  {
    quartier_id: 1691,
    nom: "KOURIAH",
    commune_id: 156,
  },
  {
    quartier_id: 1692,
    nom: "SAFEYAH",
    commune_id: 156,
  },
  {
    quartier_id: 1693,
    nom: "SORY WOULAH",
    commune_id: 156,
  },
  {
    quartier_id: 1694,
    nom: "TABAN",
    commune_id: 156,
  },
  {
    quartier_id: 1695,
    nom: "TONKOYAH",
    commune_id: 156,
  },
  {
    quartier_id: 1696,
    nom: "BENTY CENTRE",
    commune_id: 157,
  },
  {
    quartier_id: 1697,
    nom: "BOURAMAYAH",
    commune_id: 157,
  },
  {
    quartier_id: 1698,
    nom: "KAKOUTOULAYE",
    commune_id: 157,
  },
  {
    quartier_id: 1699,
    nom: "KALEYIRE",
    commune_id: 157,
  },
  {
    quartier_id: 1700,
    nom: "KIGBALY",
    commune_id: 157,
  },
  {
    quartier_id: 1701,
    nom: "KOUNSSOUTA",
    commune_id: 157,
  },
  {
    quartier_id: 1702,
    nom: "M'BORO",
    commune_id: 157,
  },
  {
    quartier_id: 1703,
    nom: "MAKARE",
    commune_id: 157,
  },
  {
    quartier_id: 1704,
    nom: "MORIKANIAH",
    commune_id: 157,
  },
  {
    quartier_id: 1705,
    nom: "N'COMPAN",
    commune_id: 157,
  },
  {
    quartier_id: 1706,
    nom: "PALATOUGOU",
    commune_id: 157,
  },
  {
    quartier_id: 1707,
    nom: "DAARA",
    commune_id: 158,
  },
  {
    quartier_id: 1708,
    nom: "DABOYA",
    commune_id: 158,
  },
  {
    quartier_id: 1709,
    nom: "FARMOREAH CENTRE",
    commune_id: 158,
  },
  {
    quartier_id: 1710,
    nom: "FOROD",
    commune_id: 158,
  },
  {
    quartier_id: 1711,
    nom: "FORODOUGOU",
    commune_id: 158,
  },
  {
    quartier_id: 1712,
    nom: "HOOUROU",
    commune_id: 158,
  },
  {
    quartier_id: 1713,
    nom: "KAFFOU",
    commune_id: 158,
  },
  {
    quartier_id: 1714,
    nom: "MALIGUIYAGBE",
    commune_id: 158,
  },
  {
    quartier_id: 1715,
    nom: "MOOLA",
    commune_id: 158,
  },
  {
    quartier_id: 1716,
    nom: "MOUSSAFANGAMAYAH",
    commune_id: 158,
  },
  {
    quartier_id: 1717,
    nom: "PAMELAP",
    commune_id: 158,
  },
  {
    quartier_id: 1718,
    nom: "SIRAMODIA",
    commune_id: 158,
  },
  {
    quartier_id: 1719,
    nom: "TAIGBE",
    commune_id: 158,
  },
  {
    quartier_id: 1720,
    nom: "TAMBAYAH",
    commune_id: 158,
  },
  {
    quartier_id: 1721,
    nom: "BOLIMANDA CENTRE",
    commune_id: 159,
  },
  {
    quartier_id: 1722,
    nom: "BOSSIMIYAH",
    commune_id: 159,
  },
  {
    quartier_id: 1723,
    nom: "MANCKE",
    commune_id: 159,
  },
  {
    quartier_id: 1724,
    nom: "MATAKANG",
    commune_id: 159,
  },
  {
    quartier_id: 1725,
    nom: "SEYDOUYA",
    commune_id: 159,
  },
  {
    quartier_id: 1726,
    nom: "TONGUIRON",
    commune_id: 159,
  },
  {
    quartier_id: 1727,
    nom: "YELIBANET",
    commune_id: 159,
  },
  {
    quartier_id: 1728,
    nom: "YOULANYEN",
    commune_id: 159,
  },
  {
    quartier_id: 1729,
    nom: "KAITE",
    commune_id: 160,
  },
  {
    quartier_id: 1730,
    nom: "MENYIRE",
    commune_id: 160,
  },
  {
    quartier_id: 1731,
    nom: "SAMBOUYA",
    commune_id: 160,
  },
  {
    quartier_id: 1732,
    nom: "TAOUYAH",
    commune_id: 160,
  },
  {
    quartier_id: 1733,
    nom: "WONDIFARY",
    commune_id: 160,
  },
  {
    quartier_id: 1734,
    nom: "YENIAH",
    commune_id: 160,
  },
  {
    quartier_id: 1735,
    nom: "BOKARIAH",
    commune_id: 161,
  },
  {
    quartier_id: 1736,
    nom: "GBERIKA",
    commune_id: 161,
  },
  {
    quartier_id: 1737,
    nom: "KALAKO",
    commune_id: 161,
  },
  {
    quartier_id: 1738,
    nom: "KALEMODIAGBE",
    commune_id: 161,
  },
  {
    quartier_id: 1739,
    nom: "KALIAH CENTRE",
    commune_id: 161,
  },
  {
    quartier_id: 1740,
    nom: "MABALA",
    commune_id: 161,
  },
  {
    quartier_id: 1741,
    nom: "MALIGUIA FORY",
    commune_id: 161,
  },
  {
    quartier_id: 1742,
    nom: "SINKINET",
    commune_id: 161,
  },
  {
    quartier_id: 1743,
    nom: "TANAH",
    commune_id: 161,
  },
  {
    quartier_id: 1744,
    nom: "YENGUISSA",
    commune_id: 161,
  },
  {
    quartier_id: 1745,
    nom: "FANDIE",
    commune_id: 162,
  },
  {
    quartier_id: 1746,
    nom: "GBEREIRE",
    commune_id: 162,
  },
  {
    quartier_id: 1747,
    nom: "KOKET",
    commune_id: 162,
  },
  {
    quartier_id: 1748,
    nom: "MADINAGBE",
    commune_id: 162,
  },
  {
    quartier_id: 1749,
    nom: "MAFERENYAH CENTRE I",
    commune_id: 162,
  },
  {
    quartier_id: 1750,
    nom: "MAFERENYAH CENTRE II",
    commune_id: 162,
  },
  {
    quartier_id: 1751,
    nom: "MALEAH",
    commune_id: 162,
  },
  {
    quartier_id: 1752,
    nom: "MORIBAYA",
    commune_id: 162,
  },
  {
    quartier_id: 1753,
    nom: "MORIFINDIA",
    commune_id: 162,
  },
  {
    quartier_id: 1754,
    nom: "SENGUELEN",
    commune_id: 162,
  },
  {
    quartier_id: 1755,
    nom: "YINDI",
    commune_id: 162,
  },
  {
    quartier_id: 1756,
    nom: "DIANEAH",
    commune_id: 163,
  },
  {
    quartier_id: 1757,
    nom: "GANIAH",
    commune_id: 163,
  },
  {
    quartier_id: 1758,
    nom: "KALIAH",
    commune_id: 163,
  },
  {
    quartier_id: 1759,
    nom: "KAMALAYAH",
    commune_id: 163,
  },
  {
    quartier_id: 1760,
    nom: "KOFFION",
    commune_id: 163,
  },
  {
    quartier_id: 1761,
    nom: "LAYAH",
    commune_id: 163,
  },
  {
    quartier_id: 1762,
    nom: "MORIBAYAH",
    commune_id: 163,
  },
  {
    quartier_id: 1763,
    nom: "MOUSSAYAH CENTRE  I",
    commune_id: 163,
  },
  {
    quartier_id: 1764,
    nom: "MOUSSAYAH CENTRE  II",
    commune_id: 163,
  },
  {
    quartier_id: 1765,
    nom: "SANTIKA",
    commune_id: 163,
  },
  {
    quartier_id: 1766,
    nom: "SINEYAH",
    commune_id: 163,
  },
  {
    quartier_id: 1767,
    nom: "TASSEEN",
    commune_id: 163,
  },
  {
    quartier_id: 1768,
    nom: "DAFIRA",
    commune_id: 164,
  },
  {
    quartier_id: 1769,
    nom: "DALLONYA",
    commune_id: 164,
  },
  {
    quartier_id: 1770,
    nom: "DEGUI DEGUI",
    commune_id: 164,
  },
  {
    quartier_id: 1771,
    nom: "GOMBOKHORI",
    commune_id: 164,
  },
  {
    quartier_id: 1772,
    nom: "KHALANTOU",
    commune_id: 164,
  },
  {
    quartier_id: 1773,
    nom: "LEFOURE",
    commune_id: 164,
  },
  {
    quartier_id: 1774,
    nom: "MAMOUDOU CAMARA",
    commune_id: 164,
  },
  {
    quartier_id: 1775,
    nom: "SANTIGUIYAH",
    commune_id: 164,
  },
  {
    quartier_id: 1776,
    nom: "SIKHOUROU CENTRE",
    commune_id: 164,
  },
  {
    quartier_id: 1777,
    nom: "TABEKHOURE",
    commune_id: 164,
  },
  {
    quartier_id: 1778,
    nom: "WALIAH",
    commune_id: 164,
  },
  {
    quartier_id: 1779,
    nom: "ABATTOIR I",
    commune_id: 165,
  },
  {
    quartier_id: 1780,
    nom: "ABATTOIR II",
    commune_id: 165,
  },
  {
    quartier_id: 1781,
    nom: "BAGUEYA",
    commune_id: 165,
  },
  {
    quartier_id: 1782,
    nom: "BAMBAN",
    commune_id: 165,
  },
  {
    quartier_id: 1783,
    nom: "BAMBAYA",
    commune_id: 165,
  },
  {
    quartier_id: 1784,
    nom: "BANLIEUE",
    commune_id: 165,
  },
  {
    quartier_id: 1785,
    nom: "BENDOUGOU",
    commune_id: 165,
  },
  {
    quartier_id: 1786,
    nom: "BOKARIA",
    commune_id: 165,
  },
  {
    quartier_id: 1787,
    nom: "CACIA II",
    commune_id: 165,
  },
  {
    quartier_id: 1788,
    nom: "CACIA I",
    commune_id: 165,
  },
  {
    quartier_id: 1789,
    nom: "CARAVANSERAIL",
    commune_id: 165,
  },
  {
    quartier_id: 1790,
    nom: "CONDETTA   MOSQUEE",
    commune_id: 165,
  },
  {
    quartier_id: 1791,
    nom: "CONDETTA III",
    commune_id: 165,
  },
  {
    quartier_id: 1792,
    nom: "DAR-SALAM",
    commune_id: 165,
  },
  {
    quartier_id: 1793,
    nom: "FEREFOU I",
    commune_id: 165,
  },
  {
    quartier_id: 1794,
    nom: "FEREFOU II",
    commune_id: 165,
  },
  {
    quartier_id: 1795,
    nom: "FILIGBE",
    commune_id: 165,
  },
  {
    quartier_id: 1796,
    nom: "FISSA ECOLE",
    commune_id: 165,
  },
  {
    quartier_id: 1797,
    nom: "FISSA HOPITAL",
    commune_id: 165,
  },
  {
    quartier_id: 1798,
    nom: "GADAWAWA",
    commune_id: 165,
  },
  {
    quartier_id: 1799,
    nom: "GANGAN",
    commune_id: 165,
  },
  {
    quartier_id: 1800,
    nom: "GARANGUELAYA",
    commune_id: 165,
  },
  {
    quartier_id: 1801,
    nom: "GARE",
    commune_id: 165,
  },
  {
    quartier_id: 1802,
    nom: "KAALY",
    commune_id: 165,
  },
  {
    quartier_id: 1803,
    nom: "KENENDE",
    commune_id: 165,
  },
  {
    quartier_id: 1804,
    nom: "KOBA-PASTORIA",
    commune_id: 165,
  },
  {
    quartier_id: 1805,
    nom: "KOLIADY I",
    commune_id: 165,
  },
  {
    quartier_id: 1806,
    nom: "KOLIADY II",
    commune_id: 165,
  },
  {
    quartier_id: 1807,
    nom: "KOUMBAYA",
    commune_id: 165,
  },
  {
    quartier_id: 1808,
    nom: "MANQUEPAS MOSQUEE",
    commune_id: 165,
  },
  {
    quartier_id: 1809,
    nom: "MANQUEPAS T.P",
    commune_id: 165,
  },
  {
    quartier_id: 1810,
    nom: "NERIBILY",
    commune_id: 165,
  },
  {
    quartier_id: 1811,
    nom: "SAMBAYA",
    commune_id: 165,
  },
  {
    quartier_id: 1812,
    nom: "SARAKOLEAH",
    commune_id: 165,
  },
  {
    quartier_id: 1813,
    nom: "SEGUEYA",
    commune_id: 165,
  },
  {
    quartier_id: 1814,
    nom: "SEKOUYA",
    commune_id: 165,
  },
  {
    quartier_id: 1815,
    nom: "SINANIYA",
    commune_id: 165,
  },
  {
    quartier_id: 1816,
    nom: "TABOUNA",
    commune_id: 165,
  },
  {
    quartier_id: 1817,
    nom: "TAFORY ALMAMIYA",
    commune_id: 165,
  },
  {
    quartier_id: 1818,
    nom: "TAFORY METEO",
    commune_id: 165,
  },
  {
    quartier_id: 1819,
    nom: "TANENE KELLA",
    commune_id: 165,
  },
  {
    quartier_id: 1820,
    nom: "TATAGUI",
    commune_id: 165,
  },
  {
    quartier_id: 1821,
    nom: "THIERNO DJIBYA",
    commune_id: 165,
  },
  {
    quartier_id: 1822,
    nom: "WOLIA",
    commune_id: 165,
  },
  {
    quartier_id: 1823,
    nom: "WONDI",
    commune_id: 165,
  },
  {
    quartier_id: 1824,
    nom: "YEWOLE",
    commune_id: 165,
  },
  {
    quartier_id: 1825,
    nom: "BANGOUYA CENTRE",
    commune_id: 166,
  },
  {
    quartier_id: 1826,
    nom: "DAMOUYA",
    commune_id: 166,
  },
  {
    quartier_id: 1827,
    nom: "GARAFIRI",
    commune_id: 166,
  },
  {
    quartier_id: 1828,
    nom: "KANSA",
    commune_id: 166,
  },
  {
    quartier_id: 1829,
    nom: "KEBALY",
    commune_id: 166,
  },
  {
    quartier_id: 1830,
    nom: "KEBEFRIGUIA",
    commune_id: 166,
  },
  {
    quartier_id: 1831,
    nom: "KEREBA",
    commune_id: 166,
  },
  {
    quartier_id: 1832,
    nom: "KHATTIA",
    commune_id: 166,
  },
  {
    quartier_id: 1833,
    nom: "KOUNDA-BALLAYA",
    commune_id: 166,
  },
  {
    quartier_id: 1834,
    nom: "MADINA DIAN",
    commune_id: 166,
  },
  {
    quartier_id: 1835,
    nom: "MADINA FANTA",
    commune_id: 166,
  },
  {
    quartier_id: 1836,
    nom: "MADINA FOULA",
    commune_id: 166,
  },
  {
    quartier_id: 1837,
    nom: "MINYAYA",
    commune_id: 166,
  },
  {
    quartier_id: 1838,
    nom: "MISSIRA",
    commune_id: 166,
  },
  {
    quartier_id: 1839,
    nom: "SIMINIYA",
    commune_id: 166,
  },
  {
    quartier_id: 1840,
    nom: "SOKIA",
    commune_id: 166,
  },
  {
    quartier_id: 1841,
    nom: "WARAKHALAN",
    commune_id: 166,
  },
  {
    quartier_id: 1842,
    nom: "WOLEA",
    commune_id: 166,
  },
  {
    quartier_id: 1843,
    nom: "YATTAYA",
    commune_id: 166,
  },
  {
    quartier_id: 1844,
    nom: "BARENFORY",
    commune_id: 167,
  },
  {
    quartier_id: 1845,
    nom: "DAMAKANIA CENTRE",
    commune_id: 167,
  },
  {
    quartier_id: 1846,
    nom: "FOULAYA CITE",
    commune_id: 167,
  },
  {
    quartier_id: 1847,
    nom: "GBEREYAKHORY",
    commune_id: 167,
  },
  {
    quartier_id: 1848,
    nom: "GOLEYA",
    commune_id: 167,
  },
  {
    quartier_id: 1849,
    nom: "KALIYAKHORY",
    commune_id: 167,
  },
  {
    quartier_id: 1850,
    nom: "KOMOYAH",
    commune_id: 167,
  },
  {
    quartier_id: 1851,
    nom: "MADINA LAYA",
    commune_id: 167,
  },
  {
    quartier_id: 1852,
    nom: "SAMOREYAH",
    commune_id: 167,
  },
  {
    quartier_id: 1853,
    nom: "CAMARABOUNYI",
    commune_id: 168,
  },
  {
    quartier_id: 1854,
    nom: "DABOYA",
    commune_id: 168,
  },
  {
    quartier_id: 1855,
    nom: "FOULAYA",
    commune_id: 168,
  },
  {
    quartier_id: 1856,
    nom: "FRIGUIAGBE GARE",
    commune_id: 168,
  },
  {
    quartier_id: 1857,
    nom: "FRIGUIAGBE I",
    commune_id: 168,
  },
  {
    quartier_id: 1858,
    nom: "FRIGUIAGBE II",
    commune_id: 168,
  },
  {
    quartier_id: 1859,
    nom: "GARAYAKHORY",
    commune_id: 168,
  },
  {
    quartier_id: 1860,
    nom: "KANTY",
    commune_id: 168,
  },
  {
    quartier_id: 1861,
    nom: "KINYAYA",
    commune_id: 168,
  },
  {
    quartier_id: 1862,
    nom: "KOLIAGBE",
    commune_id: 168,
  },
  {
    quartier_id: 1863,
    nom: "TEMBAYA",
    commune_id: 168,
  },
  {
    quartier_id: 1864,
    nom: "BAGUIA",
    commune_id: 169,
  },
  {
    quartier_id: 1865,
    nom: "BEKILO",
    commune_id: 169,
  },
  {
    quartier_id: 1866,
    nom: "BOUNDOUBANTAN",
    commune_id: 169,
  },
  {
    quartier_id: 1867,
    nom: "DALONFARI",
    commune_id: 169,
  },
  {
    quartier_id: 1868,
    nom: "GANIA",
    commune_id: 169,
  },
  {
    quartier_id: 1869,
    nom: "KABELEYA",
    commune_id: 169,
  },
  {
    quartier_id: 1870,
    nom: "KHONOYA",
    commune_id: 169,
  },
  {
    quartier_id: 1871,
    nom: "KINSSANYA",
    commune_id: 169,
  },
  {
    quartier_id: 1872,
    nom: "KIRITA",
    commune_id: 169,
  },
  {
    quartier_id: 1873,
    nom: "KOLENTE CENTRE",
    commune_id: 169,
  },
  {
    quartier_id: 1874,
    nom: "KONDOYA",
    commune_id: 169,
  },
  {
    quartier_id: 1875,
    nom: "KOUYEYA",
    commune_id: 169,
  },
  {
    quartier_id: 1876,
    nom: "LAMBEYA",
    commune_id: 169,
  },
  {
    quartier_id: 1877,
    nom: "MALEYA",
    commune_id: 169,
  },
  {
    quartier_id: 1878,
    nom: "MISSIDE",
    commune_id: 169,
  },
  {
    quartier_id: 1879,
    nom: "SANDA",
    commune_id: 169,
  },
  {
    quartier_id: 1880,
    nom: "SIGUITON",
    commune_id: 169,
  },
  {
    quartier_id: 1881,
    nom: "TANENE",
    commune_id: 169,
  },
  {
    quartier_id: 1882,
    nom: "THIEWERE",
    commune_id: 169,
  },
  {
    quartier_id: 1883,
    nom: "WALIA",
    commune_id: 169,
  },
  {
    quartier_id: 1884,
    nom: "WOLIA",
    commune_id: 169,
  },
  {
    quartier_id: 1885,
    nom: "YONKAYA",
    commune_id: 169,
  },
  {
    quartier_id: 1886,
    nom: "BADET KANTY",
    commune_id: 170,
  },
  {
    quartier_id: 1887,
    nom: "BAS-SIMBARAYA",
    commune_id: 170,
  },
  {
    quartier_id: 1888,
    nom: "BEYEN-BEYEN",
    commune_id: 170,
  },
  {
    quartier_id: 1889,
    nom: "DAR-ES-SALAM",
    commune_id: 170,
  },
  {
    quartier_id: 1890,
    nom: "HAUT-SIMBARAYA",
    commune_id: 170,
  },
  {
    quartier_id: 1891,
    nom: "KOLAKHOURE",
    commune_id: 170,
  },
  {
    quartier_id: 1892,
    nom: "LANSANAYA",
    commune_id: 170,
  },
  {
    quartier_id: 1893,
    nom: "MADINA I",
    commune_id: 170,
  },
  {
    quartier_id: 1894,
    nom: "MADINA II",
    commune_id: 170,
  },
  {
    quartier_id: 1895,
    nom: "SAFERIN",
    commune_id: 170,
  },
  {
    quartier_id: 1896,
    nom: "SAMIENKHOURE",
    commune_id: 170,
  },
  {
    quartier_id: 1897,
    nom: "SEKOUSORIA",
    commune_id: 170,
  },
  {
    quartier_id: 1898,
    nom: "SOULEMANIA",
    commune_id: 170,
  },
  {
    quartier_id: 1899,
    nom: "TELIKO",
    commune_id: 170,
  },
  {
    quartier_id: 1900,
    nom: "WASSOU",
    commune_id: 170,
  },
  {
    quartier_id: 1901,
    nom: "BOURAMAYA",
    commune_id: 171,
  },
  {
    quartier_id: 1902,
    nom: "DEBELE",
    commune_id: 171,
  },
  {
    quartier_id: 1903,
    nom: "FOMAH",
    commune_id: 171,
  },
  {
    quartier_id: 1904,
    nom: "FOSSIKHOURE",
    commune_id: 171,
  },
  {
    quartier_id: 1905,
    nom: "FRIGUIADI",
    commune_id: 171,
  },
  {
    quartier_id: 1906,
    nom: "GBINKILY",
    commune_id: 171,
  },
  {
    quartier_id: 1907,
    nom: "KHALIGORO",
    commune_id: 171,
  },
  {
    quartier_id: 1908,
    nom: "KOLIBAYAH",
    commune_id: 171,
  },
  {
    quartier_id: 1909,
    nom: "MAMBIA CENTRE",
    commune_id: 171,
  },
  {
    quartier_id: 1910,
    nom: "TANENE",
    commune_id: 171,
  },
  {
    quartier_id: 1911,
    nom: "BAKHAYAKHORY I",
    commune_id: 172,
  },
  {
    quartier_id: 1912,
    nom: "BAKHAYAKHORY II",
    commune_id: 172,
  },
  {
    quartier_id: 1913,
    nom: "KALEKHOURE",
    commune_id: 172,
  },
  {
    quartier_id: 1914,
    nom: "KOUNDAYA",
    commune_id: 172,
  },
  {
    quartier_id: 1915,
    nom: "MAMBIA",
    commune_id: 172,
  },
  {
    quartier_id: 1916,
    nom: "MOLOTA I",
    commune_id: 172,
  },
  {
    quartier_id: 1917,
    nom: "MOLOTA II",
    commune_id: 172,
  },
  {
    quartier_id: 1918,
    nom: "SAANYA",
    commune_id: 172,
  },
  {
    quartier_id: 1919,
    nom: "SEFAN",
    commune_id: 172,
  },
  {
    quartier_id: 1920,
    nom: "YEMBERING",
    commune_id: 172,
  },
  {
    quartier_id: 1921,
    nom: "COMOYA",
    commune_id: 173,
  },
  {
    quartier_id: 1922,
    nom: "CONDETTA",
    commune_id: 173,
  },
  {
    quartier_id: 1923,
    nom: "CONDOYA",
    commune_id: 173,
  },
  {
    quartier_id: 1924,
    nom: "DANTOUMAYA",
    commune_id: 173,
  },
  {
    quartier_id: 1925,
    nom: "DENKI-MADINA",
    commune_id: 173,
  },
  {
    quartier_id: 1926,
    nom: "KAPORO",
    commune_id: 173,
  },
  {
    quartier_id: 1927,
    nom: "KHONIA",
    commune_id: 173,
  },
  {
    quartier_id: 1928,
    nom: "MALEAH",
    commune_id: 173,
  },
  {
    quartier_id: 1929,
    nom: "MISSIRA",
    commune_id: 173,
  },
  {
    quartier_id: 1930,
    nom: "SAMAYA CENTRE",
    commune_id: 173,
  },
  {
    quartier_id: 1931,
    nom: "SORONDO",
    commune_id: 173,
  },
  {
    quartier_id: 1932,
    nom: "WALIA",
    commune_id: 173,
  },
  {
    quartier_id: 1933,
    nom: "YATTIAKHORY",
    commune_id: 173,
  },
  {
    quartier_id: 1934,
    nom: "YEMBETA",
    commune_id: 173,
  },
  {
    quartier_id: 1935,
    nom: "BALANDOUGOU",
    commune_id: 174,
  },
  {
    quartier_id: 1936,
    nom: "BOUBOUYAH",
    commune_id: 174,
  },
  {
    quartier_id: 1937,
    nom: "DAMAKHANYAH",
    commune_id: 174,
  },
  {
    quartier_id: 1938,
    nom: "DJANFOU",
    commune_id: 174,
  },
  {
    quartier_id: 1939,
    nom: "DONYA",
    commune_id: 174,
  },
  {
    quartier_id: 1940,
    nom: "GUEMESSORON",
    commune_id: 174,
  },
  {
    quartier_id: 1941,
    nom: "KAMBA",
    commune_id: 174,
  },
  {
    quartier_id: 1942,
    nom: "KHALYA",
    commune_id: 174,
  },
  {
    quartier_id: 1943,
    nom: "KOUYEYAH",
    commune_id: 174,
  },
  {
    quartier_id: 1944,
    nom: "LEMBOU",
    commune_id: 174,
  },
  {
    quartier_id: 1945,
    nom: "LINSAN I",
    commune_id: 174,
  },
  {
    quartier_id: 1946,
    nom: "LINSAN II",
    commune_id: 174,
  },
  {
    quartier_id: 1947,
    nom: "SANGOYAH",
    commune_id: 174,
  },
  {
    quartier_id: 1948,
    nom: "SIMINIYAH",
    commune_id: 174,
  },
  {
    quartier_id: 1949,
    nom: "SOUGUETA I",
    commune_id: 174,
  },
  {
    quartier_id: 1950,
    nom: "SOUGUETA II",
    commune_id: 174,
  },
  {
    quartier_id: 1951,
    nom: "TAFORY",
    commune_id: 174,
  },
  {
    quartier_id: 1952,
    nom: "WALYA",
    commune_id: 174,
  },
  {
    quartier_id: 1953,
    nom: "WOLIA",
    commune_id: 174,
  },
  {
    quartier_id: 1954,
    nom: "YALAYA",
    commune_id: 174,
  },
  {
    quartier_id: 1955,
    nom: "YOMBOYAH",
    commune_id: 174,
  },
  {
    quartier_id: 1956,
    nom: "BAGUIRE",
    commune_id: 175,
  },
  {
    quartier_id: 1957,
    nom: "BARKERE",
    commune_id: 175,
  },
  {
    quartier_id: 1958,
    nom: "FANTA",
    commune_id: 175,
  },
  {
    quartier_id: 1959,
    nom: "GOMBOYA",
    commune_id: 175,
  },
  {
    quartier_id: 1960,
    nom: "GOULGOUL",
    commune_id: 175,
  },
  {
    quartier_id: 1961,
    nom: "HAFIA",
    commune_id: 175,
  },
  {
    quartier_id: 1962,
    nom: "KOLLY",
    commune_id: 175,
  },
  {
    quartier_id: 1963,
    nom: "MEGNERE",
    commune_id: 175,
  },
  {
    quartier_id: 1964,
    nom: "MENDIA",
    commune_id: 175,
  },
  {
    quartier_id: 1965,
    nom: "MISSIDE",
    commune_id: 175,
  },
  {
    quartier_id: 1966,
    nom: "NIABELY",
    commune_id: 175,
  },
  {
    quartier_id: 1967,
    nom: "SOINDE",
    commune_id: 175,
  },
  {
    quartier_id: 1968,
    nom: "SODIO",
    commune_id: 175,
  },
  {
    quartier_id: 1969,
    nom: "SOKOLIBA",
    commune_id: 175,
  },
  {
    quartier_id: 1970,
    nom: "BROUWAL CENTRE",
    commune_id: 176,
  },
  {
    quartier_id: 1971,
    nom: "DJINDJIMMA",
    commune_id: 176,
  },
  {
    quartier_id: 1972,
    nom: "HOLLANDE",
    commune_id: 176,
  },
  {
    quartier_id: 1973,
    nom: "KANSANGHI",
    commune_id: 176,
  },
  {
    quartier_id: 1974,
    nom: "KIMBO",
    commune_id: 176,
  },
  {
    quartier_id: 1975,
    nom: "TELICO",
    commune_id: 176,
  },
  {
    quartier_id: 1976,
    nom: "TOSSOKERE",
    commune_id: 176,
  },
  {
    quartier_id: 1977,
    nom: "BAMBAYA",
    commune_id: 177,
  },
  {
    quartier_id: 1978,
    nom: "BANTIGNEL",
    commune_id: 177,
  },
  {
    quartier_id: 1979,
    nom: "BEMBOU SILATY",
    commune_id: 177,
  },
  {
    quartier_id: 1980,
    nom: "BHOUNDOU EDDA",
    commune_id: 177,
  },
  {
    quartier_id: 1981,
    nom: "BOUBERE",
    commune_id: 177,
  },
  {
    quartier_id: 1982,
    nom: "DARAKOURA",
    commune_id: 177,
  },
  {
    quartier_id: 1983,
    nom: "DARAMAGNAKI CENTRE",
    commune_id: 177,
  },
  {
    quartier_id: 1984,
    nom: "DIANDIAN",
    commune_id: 177,
  },
  {
    quartier_id: 1985,
    nom: "DJOUGOUROU",
    commune_id: 177,
  },
  {
    quartier_id: 1986,
    nom: "KABARA",
    commune_id: 177,
  },
  {
    quartier_id: 1987,
    nom: "KAWESSI",
    commune_id: 177,
  },
  {
    quartier_id: 1988,
    nom: "KEWOYE",
    commune_id: 177,
  },
  {
    quartier_id: 1989,
    nom: "KOBE",
    commune_id: 177,
  },
  {
    quartier_id: 1990,
    nom: "KOUNDA",
    commune_id: 177,
  },
  {
    quartier_id: 1991,
    nom: "KOURAKOTO",
    commune_id: 177,
  },
  {
    quartier_id: 1992,
    nom: "LAMBA",
    commune_id: 177,
  },
  {
    quartier_id: 1993,
    nom: "MASSI",
    commune_id: 177,
  },
  {
    quartier_id: 1994,
    nom: "GOUDOUDJE CENTRE",
    commune_id: 178,
  },
  {
    quartier_id: 1995,
    nom: "KAABA",
    commune_id: 178,
  },
  {
    quartier_id: 1996,
    nom: "KAFFIMA",
    commune_id: 178,
  },
  {
    quartier_id: 1997,
    nom: "KOUSSY",
    commune_id: 178,
  },
  {
    quartier_id: 1998,
    nom: "MISSIDE KEBOU",
    commune_id: 178,
  },
  {
    quartier_id: 1999,
    nom: "N'DANTARI BAKOLO",
    commune_id: 178,
  },
  {
    quartier_id: 2000,
    nom: "N'GOUMA",
    commune_id: 178,
  },
  {
    quartier_id: 2001,
    nom: "KOBA CENTRE",
    commune_id: 179,
  },
  {
    quartier_id: 2002,
    nom: "MADINA-DIAN",
    commune_id: 179,
  },
  {
    quartier_id: 2003,
    nom: "MAMOUDA",
    commune_id: 179,
  },
  {
    quartier_id: 2004,
    nom: "SAAPY",
    commune_id: 179,
  },
  {
    quartier_id: 2005,
    nom: "TELIRE",
    commune_id: 179,
  },
  {
    quartier_id: 2006,
    nom: "BAMBOUGOU",
    commune_id: 180,
  },
  {
    quartier_id: 2007,
    nom: "BOUMA",
    commune_id: 180,
  },
  {
    quartier_id: 2008,
    nom: "GARAMA",
    commune_id: 180,
  },
  {
    quartier_id: 2009,
    nom: "KOLLET CENTRE",
    commune_id: 180,
  },
  {
    quartier_id: 2010,
    nom: "KONKOURE CENTRE",
    commune_id: 180,
  },
  {
    quartier_id: 2011,
    nom: "KOUKOUKOURE",
    commune_id: 180,
  },
  {
    quartier_id: 2012,
    nom: "KOURIA",
    commune_id: 180,
  },
  {
    quartier_id: 2013,
    nom: "MAMBYA",
    commune_id: 180,
  },
  {
    quartier_id: 2014,
    nom: "SILIKOUN",
    commune_id: 180,
  },
  {
    quartier_id: 2015,
    nom: "SYMBALIA",
    commune_id: 180,
  },
  {
    quartier_id: 2016,
    nom: "TOUMANIYA",
    commune_id: 180,
  },
  {
    quartier_id: 2017,
    nom: "WAARA",
    commune_id: 180,
  },
  {
    quartier_id: 2018,
    nom: "BERGUE",
    commune_id: 181,
  },
  {
    quartier_id: 2019,
    nom: "BHOULY",
    commune_id: 181,
  },
  {
    quartier_id: 2020,
    nom: "DOMBE",
    commune_id: 181,
  },
  {
    quartier_id: 2021,
    nom: "HOUNSIREGUILE",
    commune_id: 181,
  },
  {
    quartier_id: 2022,
    nom: "KONSOTAMI CENTRE",
    commune_id: 181,
  },
  {
    quartier_id: 2023,
    nom: "N'DANTABA",
    commune_id: 181,
  },
  {
    quartier_id: 2024,
    nom: "NAMPOUGOU",
    commune_id: 181,
  },
  {
    quartier_id: 2025,
    nom: "THIMMEWI",
    commune_id: 181,
  },
  {
    quartier_id: 2026,
    nom: "TOUMA",
    commune_id: 181,
  },
  {
    quartier_id: 2027,
    nom: "BANDOUMA",
    commune_id: 182,
  },
  {
    quartier_id: 2028,
    nom: "BHOUNDOU LEINGUE",
    commune_id: 182,
  },
  {
    quartier_id: 2029,
    nom: "BOMMANY",
    commune_id: 182,
  },
  {
    quartier_id: 2030,
    nom: "BOUSSOURA",
    commune_id: 182,
  },
  {
    quartier_id: 2031,
    nom: "DAROUL",
    commune_id: 182,
  },
  {
    quartier_id: 2032,
    nom: "DONDE LOPOYE",
    commune_id: 182,
  },
  {
    quartier_id: 2033,
    nom: "FOYE",
    commune_id: 182,
  },
  {
    quartier_id: 2034,
    nom: "GUEME",
    commune_id: 182,
  },
  {
    quartier_id: 2035,
    nom: "KALOUMA",
    commune_id: 182,
  },
  {
    quartier_id: 2036,
    nom: "KOMPETA",
    commune_id: 182,
  },
  {
    quartier_id: 2037,
    nom: "M'BOROU",
    commune_id: 182,
  },
  {
    quartier_id: 2038,
    nom: "MADINA FASS",
    commune_id: 182,
  },
  {
    quartier_id: 2039,
    nom: "MISSIRA CENTRE",
    commune_id: 182,
  },
  {
    quartier_id: 2040,
    nom: "NDANTA BHOWRA",
    commune_id: 182,
  },
  {
    quartier_id: 2041,
    nom: "TELIWORA",
    commune_id: 182,
  },
  {
    quartier_id: 2042,
    nom: "TYINDOYE",
    commune_id: 182,
  },
  {
    quartier_id: 2043,
    nom: "KOURATOUTOU",
    commune_id: 183,
  },
  {
    quartier_id: 2044,
    nom: "N'DINDA",
    commune_id: 183,
  },
  {
    quartier_id: 2045,
    nom: "PARADJI",
    commune_id: 183,
  },
  {
    quartier_id: 2046,
    nom: "PEGUETY CENTRE",
    commune_id: 183,
  },
  {
    quartier_id: 2047,
    nom: "TELITOUTE",
    commune_id: 183,
  },
  {
    quartier_id: 2048,
    nom: "FILO",
    commune_id: 184,
  },
  {
    quartier_id: 2049,
    nom: "HOLLANDE DIAN",
    commune_id: 184,
  },
  {
    quartier_id: 2050,
    nom: "LEY-LEGGUEL",
    commune_id: 184,
  },
  {
    quartier_id: 2051,
    nom: "MADINA TELICO",
    commune_id: 184,
  },
  {
    quartier_id: 2052,
    nom: "SAREKALY CENTRE",
    commune_id: 184,
  },
  {
    quartier_id: 2053,
    nom: "BEELY",
    commune_id: 185,
  },
  {
    quartier_id: 2054,
    nom: "BENDE",
    commune_id: 185,
  },
  {
    quartier_id: 2055,
    nom: "BIRO",
    commune_id: 185,
  },
  {
    quartier_id: 2056,
    nom: "BOUDAYE",
    commune_id: 185,
  },
  {
    quartier_id: 2057,
    nom: "HASSANA",
    commune_id: 185,
  },
  {
    quartier_id: 2058,
    nom: "KAMBANYA",
    commune_id: 185,
  },
  {
    quartier_id: 2059,
    nom: "SANSANDJI",
    commune_id: 185,
  },
  {
    quartier_id: 2060,
    nom: "SINTA CENTRE",
    commune_id: 185,
  },
  {
    quartier_id: 2061,
    nom: "TONDON",
    commune_id: 185,
  },
  {
    quartier_id: 2062,
    nom: "TOULDE",
    commune_id: 185,
  },
  {
    quartier_id: 2063,
    nom: "BARALANDE",
    commune_id: 186,
  },
  {
    quartier_id: 2064,
    nom: "KAILLONDJI",
    commune_id: 186,
  },
  {
    quartier_id: 2065,
    nom: "LEY SERE",
    commune_id: 186,
  },
  {
    quartier_id: 2066,
    nom: "MALALCONDO",
    commune_id: 186,
  },
  {
    quartier_id: 2067,
    nom: "SAYONYA",
    commune_id: 186,
  },
  {
    quartier_id: 2068,
    nom: "SOUGUE",
    commune_id: 186,
  },
  {
    quartier_id: 2069,
    nom: "TOURKOUN",
    commune_id: 186,
  },
  {
    quartier_id: 2070,
    nom: "BOUSSOURA",
    commune_id: 187,
  },
  {
    quartier_id: 2071,
    nom: "HORE WENDOU",
    commune_id: 187,
  },
  {
    quartier_id: 2072,
    nom: "KOURABONGUEL",
    commune_id: 187,
  },
  {
    quartier_id: 2073,
    nom: "LEY-BALLA",
    commune_id: 187,
  },
  {
    quartier_id: 2074,
    nom: "MABHE",
    commune_id: 187,
  },
  {
    quartier_id: 2075,
    nom: "SILATI",
    commune_id: 187,
  },
  {
    quartier_id: 2076,
    nom: "SONGHE",
    commune_id: 187,
  },
  {
    quartier_id: 2077,
    nom: "TARIHOYE CENTRE",
    commune_id: 187,
  },
  {
    quartier_id: 2078,
    nom: "HAMDALAYE",
    commune_id: 188,
  },
  {
    quartier_id: 2079,
    nom: "LABHANDIAN",
    commune_id: 188,
  },
  {
    quartier_id: 2080,
    nom: "LEY-BIRO",
    commune_id: 188,
  },
  {
    quartier_id: 2081,
    nom: "MADINADJAN",
    commune_id: 188,
  },
  {
    quartier_id: 2082,
    nom: "N'DIRE",
    commune_id: 188,
  },
  {
    quartier_id: 2083,
    nom: "THIONTHIAN CENTRE",
    commune_id: 188,
  },
  {
    quartier_id: 2084,
    nom: "TOUNOU",
    commune_id: 188,
  },
  {
    quartier_id: 2085,
    nom: "BASSARATA",
    commune_id: 189,
  },
  {
    quartier_id: 2086,
    nom: "GORDIO",
    commune_id: 189,
  },
  {
    quartier_id: 2087,
    nom: "HERICO",
    commune_id: 189,
  },
  {
    quartier_id: 2088,
    nom: "KABELEYA",
    commune_id: 189,
  },
  {
    quartier_id: 2089,
    nom: "KIRI",
    commune_id: 189,
  },
  {
    quartier_id: 2090,
    nom: "KOUBIA  I",
    commune_id: 189,
  },
  {
    quartier_id: 2091,
    nom: "KOUBIA II",
    commune_id: 189,
  },
  {
    quartier_id: 2092,
    nom: "MADINA KORBE",
    commune_id: 189,
  },
  {
    quartier_id: 2093,
    nom: "MADINA KOSSI",
    commune_id: 189,
  },
  {
    quartier_id: 2094,
    nom: "MALAMMA",
    commune_id: 189,
  },
  {
    quartier_id: 2095,
    nom: "MISSIRA TIMBHOBHE",
    commune_id: 189,
  },
  {
    quartier_id: 2096,
    nom: "MOROMY",
    commune_id: 189,
  },
  {
    quartier_id: 2097,
    nom: "TIMBA",
    commune_id: 189,
  },
  {
    quartier_id: 2098,
    nom: "BASSARA",
    commune_id: 190,
  },
  {
    quartier_id: 2099,
    nom: "BOUSSOURA",
    commune_id: 190,
  },
  {
    quartier_id: 2100,
    nom: "DADHIABHE",
    commune_id: 190,
  },
  {
    quartier_id: 2101,
    nom: "DAROU",
    commune_id: 190,
  },
  {
    quartier_id: 2102,
    nom: "FAFAYA  CENTRE",
    commune_id: 190,
  },
  {
    quartier_id: 2103,
    nom: "MADINA BAMBAYA",
    commune_id: 190,
  },
  {
    quartier_id: 2104,
    nom: "MARWATA",
    commune_id: 190,
  },
  {
    quartier_id: 2105,
    nom: "PALET",
    commune_id: 190,
  },
  {
    quartier_id: 2106,
    nom: "SIMILI",
    commune_id: 190,
  },
  {
    quartier_id: 2107,
    nom: "SOULOUNDE",
    commune_id: 190,
  },
  {
    quartier_id: 2108,
    nom: "BORIKO",
    commune_id: 191,
  },
  {
    quartier_id: 2109,
    nom: "DALABA",
    commune_id: 191,
  },
  {
    quartier_id: 2110,
    nom: "FISSAYA",
    commune_id: 191,
  },
  {
    quartier_id: 2111,
    nom: "GNAARA",
    commune_id: 191,
  },
  {
    quartier_id: 2112,
    nom: "LEY FELLO",
    commune_id: 191,
  },
  {
    quartier_id: 2113,
    nom: "N'DIRE",
    commune_id: 191,
  },
  {
    quartier_id: 2114,
    nom: "TIMBERING",
    commune_id: 191,
  },
  {
    quartier_id: 2115,
    nom: "BASSARA",
    commune_id: 192,
  },
  {
    quartier_id: 2116,
    nom: "DARA",
    commune_id: 192,
  },
  {
    quartier_id: 2117,
    nom: "KONTOMA",
    commune_id: 192,
  },
  {
    quartier_id: 2118,
    nom: "MADINA NIANNOU",
    commune_id: 192,
  },
  {
    quartier_id: 2119,
    nom: "MATAKAOU CENTRE",
    commune_id: 192,
  },
  {
    quartier_id: 2120,
    nom: "NIANNOU MISSIDE",
    commune_id: 192,
  },
  {
    quartier_id: 2121,
    nom: "SOUMMAH",
    commune_id: 192,
  },
  {
    quartier_id: 2122,
    nom: "TELIRE",
    commune_id: 192,
  },
  {
    quartier_id: 2123,
    nom: "BOLE N'DANTABA",
    commune_id: 193,
  },
  {
    quartier_id: 2124,
    nom: "KOUNDJEYA",
    commune_id: 193,
  },
  {
    quartier_id: 2125,
    nom: "MISSIRA CENTRE",
    commune_id: 193,
  },
  {
    quartier_id: 2126,
    nom: "NYLA",
    commune_id: 193,
  },
  {
    quartier_id: 2127,
    nom: "SARE KINDIA",
    commune_id: 193,
  },
  {
    quartier_id: 2128,
    nom: "TOUNTEBA",
    commune_id: 193,
  },
  {
    quartier_id: 2129,
    nom: "BAGATA",
    commune_id: 194,
  },
  {
    quartier_id: 2130,
    nom: "BAMBA",
    commune_id: 194,
  },
  {
    quartier_id: 2131,
    nom: "BANSOUMA",
    commune_id: 194,
  },
  {
    quartier_id: 2132,
    nom: "DARA PELLY",
    commune_id: 194,
  },
  {
    quartier_id: 2133,
    nom: "KOUNDOU THIANKOYE",
    commune_id: 194,
  },
  {
    quartier_id: 2134,
    nom: "LEY SOUGUE",
    commune_id: 194,
  },
  {
    quartier_id: 2135,
    nom: "MADINA BELLY",
    commune_id: 194,
  },
  {
    quartier_id: 2136,
    nom: "MADINA DONDE",
    commune_id: 194,
  },
  {
    quartier_id: 2137,
    nom: "MADINA SOUGUE",
    commune_id: 194,
  },
  {
    quartier_id: 2138,
    nom: "MBOUDARE",
    commune_id: 194,
  },
  {
    quartier_id: 2139,
    nom: "NYAKAYA",
    commune_id: 194,
  },
  {
    quartier_id: 2140,
    nom: "PILIMINI CENTRE",
    commune_id: 194,
  },
  {
    quartier_id: 2141,
    nom: "SARE LENGUE",
    commune_id: 194,
  },
  {
    quartier_id: 2142,
    nom: "SILAMAKAYA",
    commune_id: 194,
  },
  {
    quartier_id: 2143,
    nom: "THIEWIRE",
    commune_id: 194,
  },
  {
    quartier_id: 2144,
    nom: "TOLIN",
    commune_id: 194,
  },
  {
    quartier_id: 2145,
    nom: "BAMBAYA",
    commune_id: 195,
  },
  {
    quartier_id: 2146,
    nom: "COMPANYA",
    commune_id: 195,
  },
  {
    quartier_id: 2147,
    nom: "DAKA-1",
    commune_id: 195,
  },
  {
    quartier_id: 2148,
    nom: "DAKA-2",
    commune_id: 195,
  },
  {
    quartier_id: 2149,
    nom: "DOGHOL",
    commune_id: 195,
  },
  {
    quartier_id: 2150,
    nom: "DOGHOL DAYEBHE",
    commune_id: 195,
  },
  {
    quartier_id: 2151,
    nom: "DOGHORA",
    commune_id: 195,
  },
  {
    quartier_id: 2152,
    nom: "DOW SAARE",
    commune_id: 195,
  },
  {
    quartier_id: 2153,
    nom: "FADY",
    commune_id: 195,
  },
  {
    quartier_id: 2154,
    nom: "FAFABHE",
    commune_id: 195,
  },
  {
    quartier_id: 2155,
    nom: "FALO BOWE",
    commune_id: 195,
  },
  {
    quartier_id: 2156,
    nom: "HORE SAALA",
    commune_id: 195,
  },
  {
    quartier_id: 2157,
    nom: "KONKOLA",
    commune_id: 195,
  },
  {
    quartier_id: 2158,
    nom: "KOULIDARA",
    commune_id: 195,
  },
  {
    quartier_id: 2159,
    nom: "KOUROULA",
    commune_id: 195,
  },
  {
    quartier_id: 2160,
    nom: "LOMBONNA",
    commune_id: 195,
  },
  {
    quartier_id: 2161,
    nom: "MADINA",
    commune_id: 195,
  },
  {
    quartier_id: 2162,
    nom: "MAIRIE",
    commune_id: 195,
  },
  {
    quartier_id: 2163,
    nom: "MOSQUEE",
    commune_id: 195,
  },
  {
    quartier_id: 2164,
    nom: "NADHEL",
    commune_id: 195,
  },
  {
    quartier_id: 2165,
    nom: "PETEWEL",
    commune_id: 195,
  },
  {
    quartier_id: 2166,
    nom: "POREKO",
    commune_id: 195,
  },
  {
    quartier_id: 2167,
    nom: "POUNTHIOUN",
    commune_id: 195,
  },
  {
    quartier_id: 2168,
    nom: "SAALA N'DOUYEBHE",
    commune_id: 195,
  },
  {
    quartier_id: 2169,
    nom: "SAFATOU-1",
    commune_id: 195,
  },
  {
    quartier_id: 2170,
    nom: "SAFATOU-2",
    commune_id: 195,
  },
  {
    quartier_id: 2171,
    nom: "TATA-1",
    commune_id: 195,
  },
  {
    quartier_id: 2172,
    nom: "TATA-2",
    commune_id: 195,
  },
  {
    quartier_id: 2173,
    nom: "BAMBE",
    commune_id: 196,
  },
  {
    quartier_id: 2174,
    nom: "DALEIN CENTRE",
    commune_id: 196,
  },
  {
    quartier_id: 2175,
    nom: "DALEIN HINDE",
    commune_id: 196,
  },
  {
    quartier_id: 2176,
    nom: "DOGHI",
    commune_id: 196,
  },
  {
    quartier_id: 2177,
    nom: "HORE WOULOUN",
    commune_id: 196,
  },
  {
    quartier_id: 2178,
    nom: "KANSAKOUMA",
    commune_id: 196,
  },
  {
    quartier_id: 2179,
    nom: "KOUNDOU DHAGGI",
    commune_id: 196,
  },
  {
    quartier_id: 2180,
    nom: "MADINA KANSAGHI",
    commune_id: 196,
  },
  {
    quartier_id: 2181,
    nom: "N'DANTAWI MARI",
    commune_id: 196,
  },
  {
    quartier_id: 2182,
    nom: "SAREKALY",
    commune_id: 196,
  },
  {
    quartier_id: 2183,
    nom: "DARA KETHIOUN",
    commune_id: 197,
  },
  {
    quartier_id: 2184,
    nom: "DARALABE CENTRE",
    commune_id: 197,
  },
  {
    quartier_id: 2185,
    nom: "FELLO BANTAN",
    commune_id: 197,
  },
  {
    quartier_id: 2186,
    nom: "GAYA",
    commune_id: 197,
  },
  {
    quartier_id: 2187,
    nom: "KOURABA",
    commune_id: 197,
  },
  {
    quartier_id: 2188,
    nom: "MADINA N'DIRE",
    commune_id: 197,
  },
  {
    quartier_id: 2189,
    nom: "DIARI CENTRE",
    commune_id: 198,
  },
  {
    quartier_id: 2190,
    nom: "DONTA",
    commune_id: 198,
  },
  {
    quartier_id: 2191,
    nom: "DOUKA GNOGUEYABHE",
    commune_id: 198,
  },
  {
    quartier_id: 2192,
    nom: "KOULA MAWNDE",
    commune_id: 198,
  },
  {
    quartier_id: 2193,
    nom: "KOULA TOKOSSERE",
    commune_id: 198,
  },
  {
    quartier_id: 2194,
    nom: "BESSEYA",
    commune_id: 199,
  },
  {
    quartier_id: 2195,
    nom: "BOUROUBOTO",
    commune_id: 199,
  },
  {
    quartier_id: 2196,
    nom: "DIONFO CENTRE",
    commune_id: 199,
  },
  {
    quartier_id: 2197,
    nom: "HAFIA MADINA",
    commune_id: 199,
  },
  {
    quartier_id: 2198,
    nom: "N'DEYLAL",
    commune_id: 199,
  },
  {
    quartier_id: 2199,
    nom: "SENGOUMA",
    commune_id: 199,
  },
  {
    quartier_id: 2200,
    nom: "GARAMBE CENTRE",
    commune_id: 200,
  },
  {
    quartier_id: 2201,
    nom: "LABE DHEPPERE",
    commune_id: 200,
  },
  {
    quartier_id: 2202,
    nom: "SEGHEN",
    commune_id: 200,
  },
  {
    quartier_id: 2203,
    nom: "BAGNAN",
    commune_id: 201,
  },
  {
    quartier_id: 2204,
    nom: "DAMBATA",
    commune_id: 201,
  },
  {
    quartier_id: 2205,
    nom: "GONKOU",
    commune_id: 201,
  },
  {
    quartier_id: 2206,
    nom: "HAFIA CENTRE",
    commune_id: 201,
  },
  {
    quartier_id: 2207,
    nom: "HANSAGHERE",
    commune_id: 201,
  },
  {
    quartier_id: 2208,
    nom: "HINDE",
    commune_id: 201,
  },
  {
    quartier_id: 2209,
    nom: "SEMPETIN",
    commune_id: 201,
  },
  {
    quartier_id: 2210,
    nom: "SOFOYA",
    commune_id: 201,
  },
  {
    quartier_id: 2211,
    nom: "DAR-ES-SALAM",
    commune_id: 202,
  },
  {
    quartier_id: 2212,
    nom: "KALAN CENTRE",
    commune_id: 202,
  },
  {
    quartier_id: 2213,
    nom: "MADINATOU SALAM",
    commune_id: 202,
  },
  {
    quartier_id: 2214,
    nom: "MISSIDE TIGA",
    commune_id: 202,
  },
  {
    quartier_id: 2215,
    nom: "BOUROUDJI",
    commune_id: 203,
  },
  {
    quartier_id: 2216,
    nom: "BOWE BHOUBHA",
    commune_id: 203,
  },
  {
    quartier_id: 2217,
    nom: "HORE FELLO",
    commune_id: 203,
  },
  {
    quartier_id: 2218,
    nom: "HORE KASSA",
    commune_id: 203,
  },
  {
    quartier_id: 2219,
    nom: "KOURAMANGUI CENTRE",
    commune_id: 203,
  },
  {
    quartier_id: 2220,
    nom: "LEY THIANDHY",
    commune_id: 203,
  },
  {
    quartier_id: 2221,
    nom: "TEGUEGNEN",
    commune_id: 203,
  },
  {
    quartier_id: 2222,
    nom: "DIAWOYA",
    commune_id: 204,
  },
  {
    quartier_id: 2223,
    nom: "KANKADY",
    commune_id: 204,
  },
  {
    quartier_id: 2224,
    nom: "KASSAGUI",
    commune_id: 204,
  },
  {
    quartier_id: 2225,
    nom: "KOUNDIEYA",
    commune_id: 204,
  },
  {
    quartier_id: 2226,
    nom: "KOURAKO",
    commune_id: 204,
  },
  {
    quartier_id: 2227,
    nom: "KOURE",
    commune_id: 204,
  },
  {
    quartier_id: 2228,
    nom: "MOBHI",
    commune_id: 204,
  },
  {
    quartier_id: 2229,
    nom: "MOLOKO",
    commune_id: 204,
  },
  {
    quartier_id: 2230,
    nom: "N'DANTAWI",
    commune_id: 204,
  },
  {
    quartier_id: 2231,
    nom: "NOUSSY CENTRE",
    commune_id: 204,
  },
  {
    quartier_id: 2232,
    nom: "TOMBON",
    commune_id: 204,
  },
  {
    quartier_id: 2233,
    nom: "DOUKA SELEYABHE",
    commune_id: 205,
  },
  {
    quartier_id: 2234,
    nom: "GARKI",
    commune_id: 205,
  },
  {
    quartier_id: 2235,
    nom: "KIGNA",
    commune_id: 205,
  },
  {
    quartier_id: 2236,
    nom: "POPODARA I",
    commune_id: 205,
  },
  {
    quartier_id: 2237,
    nom: "POPODARA II",
    commune_id: 205,
  },
  {
    quartier_id: 2238,
    nom: "SATINA",
    commune_id: 205,
  },
  {
    quartier_id: 2239,
    nom: "SERIMA",
    commune_id: 205,
  },
  {
    quartier_id: 2240,
    nom: "SILORBHE",
    commune_id: 205,
  },
  {
    quartier_id: 2241,
    nom: "SOMBILY",
    commune_id: 205,
  },
  {
    quartier_id: 2242,
    nom: "TOULET",
    commune_id: 205,
  },
  {
    quartier_id: 2243,
    nom: "DAR-ES-SALAM",
    commune_id: 206,
  },
  {
    quartier_id: 2244,
    nom: "DIGUILIN",
    commune_id: 206,
  },
  {
    quartier_id: 2245,
    nom: "DIOGOMA",
    commune_id: 206,
  },
  {
    quartier_id: 2246,
    nom: "HAMDALLAYE",
    commune_id: 206,
  },
  {
    quartier_id: 2247,
    nom: "KONDEL",
    commune_id: 206,
  },
  {
    quartier_id: 2248,
    nom: "SANNOUN CENTRE",
    commune_id: 206,
  },
  {
    quartier_id: 2249,
    nom: "TARANBALY",
    commune_id: 206,
  },
  {
    quartier_id: 2250,
    nom: "BALAYA",
    commune_id: 207,
  },
  {
    quartier_id: 2251,
    nom: "GAMBIE",
    commune_id: 207,
  },
  {
    quartier_id: 2252,
    nom: "KAMBAYA",
    commune_id: 207,
  },
  {
    quartier_id: 2253,
    nom: "LARIAH",
    commune_id: 207,
  },
  {
    quartier_id: 2254,
    nom: "NIAWORO",
    commune_id: 207,
  },
  {
    quartier_id: 2255,
    nom: "TOLOU",
    commune_id: 207,
  },
  {
    quartier_id: 2256,
    nom: "TOUNNY",
    commune_id: 207,
  },
  {
    quartier_id: 2257,
    nom: "TOUNTOUROUN CENTRE",
    commune_id: 207,
  },
  {
    quartier_id: 2258,
    nom: "DIALA 1",
    commune_id: 208,
  },
  {
    quartier_id: 2259,
    nom: "DIALA 2",
    commune_id: 208,
  },
  {
    quartier_id: 2260,
    nom: "DJINKAN",
    commune_id: 208,
  },
  {
    quartier_id: 2261,
    nom: "KENERY",
    commune_id: 208,
  },
  {
    quartier_id: 2262,
    nom: "PETEL",
    commune_id: 208,
  },
  {
    quartier_id: 2263,
    nom: "POYE",
    commune_id: 208,
  },
  {
    quartier_id: 2264,
    nom: "SANAMA",
    commune_id: 208,
  },
  {
    quartier_id: 2265,
    nom: "BALAYA CENTRE",
    commune_id: 209,
  },
  {
    quartier_id: 2266,
    nom: "DAR ES SALAM",
    commune_id: 209,
  },
  {
    quartier_id: 2267,
    nom: "DJIDALA",
    commune_id: 209,
  },
  {
    quartier_id: 2268,
    nom: "HOORE DIOLI",
    commune_id: 209,
  },
  {
    quartier_id: 2269,
    nom: "LAMBANGUEL",
    commune_id: 209,
  },
  {
    quartier_id: 2270,
    nom: "MADINA DIAN",
    commune_id: 209,
  },
  {
    quartier_id: 2271,
    nom: "THIANGUEL DICKO",
    commune_id: 209,
  },
  {
    quartier_id: 2272,
    nom: "DIOUNTOU CENTRE",
    commune_id: 210,
  },
  {
    quartier_id: 2273,
    nom: "DIOUNTOU PETOYE",
    commune_id: 210,
  },
  {
    quartier_id: 2274,
    nom: "FEREYA",
    commune_id: 210,
  },
  {
    quartier_id: 2275,
    nom: "GNAGANTOU",
    commune_id: 210,
  },
  {
    quartier_id: 2276,
    nom: "KOREGHANI",
    commune_id: 210,
  },
  {
    quartier_id: 2277,
    nom: "LABICO",
    commune_id: 210,
  },
  {
    quartier_id: 2278,
    nom: "N'DANTARY THIOBHOYE",
    commune_id: 210,
  },
  {
    quartier_id: 2279,
    nom: "THIALLOU",
    commune_id: 210,
  },
  {
    quartier_id: 2280,
    nom: "TINKIN",
    commune_id: 210,
  },
  {
    quartier_id: 2281,
    nom: "DJIGUE",
    commune_id: 211,
  },
  {
    quartier_id: 2282,
    nom: "HENERE",
    commune_id: 211,
  },
  {
    quartier_id: 2283,
    nom: "HERICO CENTRE",
    commune_id: 211,
  },
  {
    quartier_id: 2284,
    nom: "MADINA BIRROUWAL",
    commune_id: 211,
  },
  {
    quartier_id: 2285,
    nom: "POUNTA N'DEYLEL",
    commune_id: 211,
  },
  {
    quartier_id: 2286,
    nom: "THIELIRE",
    commune_id: 211,
  },
  {
    quartier_id: 2287,
    nom: "TOWGO",
    commune_id: 211,
  },
  {
    quartier_id: 2288,
    nom: "WENDOU FETO",
    commune_id: 211,
  },
  {
    quartier_id: 2289,
    nom: "WENDOU KOULA",
    commune_id: 211,
  },
  {
    quartier_id: 2290,
    nom: "KENTE",
    commune_id: 212,
  },
  {
    quartier_id: 2291,
    nom: "KORBE CENTRE",
    commune_id: 212,
  },
  {
    quartier_id: 2292,
    nom: "LEY HOOLO",
    commune_id: 212,
  },
  {
    quartier_id: 2293,
    nom: "NIEGUERE",
    commune_id: 212,
  },
  {
    quartier_id: 2294,
    nom: "BOMBI BOUROU",
    commune_id: 213,
  },
  {
    quartier_id: 2295,
    nom: "DOGHOL TIMBOBHE",
    commune_id: 213,
  },
  {
    quartier_id: 2296,
    nom: "HORE BOMBI",
    commune_id: 213,
  },
  {
    quartier_id: 2297,
    nom: "LAFOU CENTRE",
    commune_id: 213,
  },
  {
    quartier_id: 2298,
    nom: "LAREWEL",
    commune_id: 213,
  },
  {
    quartier_id: 2299,
    nom: "PEGUETY",
    commune_id: 213,
  },
  {
    quartier_id: 2300,
    nom: "TOWNDE",
    commune_id: 213,
  },
  {
    quartier_id: 2301,
    nom: "ZAWIA",
    commune_id: 213,
  },
  {
    quartier_id: 2302,
    nom: "KAGNE GANDE",
    commune_id: 214,
  },
  {
    quartier_id: 2303,
    nom: "KOKOLOU",
    commune_id: 214,
  },
  {
    quartier_id: 2304,
    nom: "KOLIA",
    commune_id: 214,
  },
  {
    quartier_id: 2305,
    nom: "LINSAN  2",
    commune_id: 214,
  },
  {
    quartier_id: 2306,
    nom: "LINSAN 1",
    commune_id: 214,
  },
  {
    quartier_id: 2307,
    nom: "TELI BOFI",
    commune_id: 214,
  },
  {
    quartier_id: 2308,
    nom: "BHOUNDOU BARKE",
    commune_id: 215,
  },
  {
    quartier_id: 2309,
    nom: "DIAFOUNOU",
    commune_id: 215,
  },
  {
    quartier_id: 2310,
    nom: "KAMATINGUE",
    commune_id: 215,
  },
  {
    quartier_id: 2311,
    nom: "MALEAH",
    commune_id: 215,
  },
  {
    quartier_id: 2312,
    nom: "MANDA FOULBHE",
    commune_id: 215,
  },
  {
    quartier_id: 2313,
    nom: "SERNE",
    commune_id: 215,
  },
  {
    quartier_id: 2314,
    nom: "BONKON",
    commune_id: 216,
  },
  {
    quartier_id: 2315,
    nom: "DONDE",
    commune_id: 216,
  },
  {
    quartier_id: 2316,
    nom: "GOUNDOUPI",
    commune_id: 216,
  },
  {
    quartier_id: 2317,
    nom: "LONNA",
    commune_id: 216,
  },
  {
    quartier_id: 2318,
    nom: "PARAWOL CENTRE",
    commune_id: 216,
  },
  {
    quartier_id: 2319,
    nom: "SANDALY",
    commune_id: 216,
  },
  {
    quartier_id: 2320,
    nom: "THIAE TORMOSSO",
    commune_id: 216,
  },
  {
    quartier_id: 2321,
    nom: "BAMIKOUNTOU",
    commune_id: 217,
  },
  {
    quartier_id: 2322,
    nom: "MOUMINIA",
    commune_id: 217,
  },
  {
    quartier_id: 2323,
    nom: "OURY TOUNNY",
    commune_id: 217,
  },
  {
    quartier_id: 2324,
    nom: "SAGALE CENTRE",
    commune_id: 217,
  },
  {
    quartier_id: 2325,
    nom: "TELIWEL",
    commune_id: 217,
  },
  {
    quartier_id: 2326,
    nom: "THIEWE",
    commune_id: 217,
  },
  {
    quartier_id: 2327,
    nom: "THIINDOYE",
    commune_id: 217,
  },
  {
    quartier_id: 2328,
    nom: "BOSSE",
    commune_id: 218,
  },
  {
    quartier_id: 2329,
    nom: "DENA",
    commune_id: 218,
  },
  {
    quartier_id: 2330,
    nom: "HORE HOLLANDE",
    commune_id: 218,
  },
  {
    quartier_id: 2331,
    nom: "KIMBELY",
    commune_id: 218,
  },
  {
    quartier_id: 2332,
    nom: "LEY FELLO",
    commune_id: 218,
  },
  {
    quartier_id: 2333,
    nom: "LEY LAGUI",
    commune_id: 218,
  },
  {
    quartier_id: 2334,
    nom: "MISSIRA",
    commune_id: 218,
  },
  {
    quartier_id: 2335,
    nom: "N'DANTARY OURY",
    commune_id: 218,
  },
  {
    quartier_id: 2336,
    nom: "N'DITA",
    commune_id: 218,
  },
  {
    quartier_id: 2337,
    nom: "SENTOU",
    commune_id: 218,
  },
  {
    quartier_id: 2338,
    nom: "THIANGUEL BORY",
    commune_id: 218,
  },
  {
    quartier_id: 2339,
    nom: "BANDOUYA",
    commune_id: 219,
  },
  {
    quartier_id: 2340,
    nom: "BARA",
    commune_id: 219,
  },
  {
    quartier_id: 2341,
    nom: "BEREBERE",
    commune_id: 219,
  },
  {
    quartier_id: 2342,
    nom: "BHOUNDOU HOLLANDE",
    commune_id: 219,
  },
  {
    quartier_id: 2343,
    nom: "BOGOMA",
    commune_id: 219,
  },
  {
    quartier_id: 2344,
    nom: "DOGHOL AMOROYABHE",
    commune_id: 219,
  },
  {
    quartier_id: 2345,
    nom: "HOORE FELLO YANDI",
    commune_id: 219,
  },
  {
    quartier_id: 2346,
    nom: "KORTEMERE",
    commune_id: 219,
  },
  {
    quartier_id: 2347,
    nom: "KOUMBA",
    commune_id: 219,
  },
  {
    quartier_id: 2348,
    nom: "LEY THIEHEL",
    commune_id: 219,
  },
  {
    quartier_id: 2349,
    nom: "MALI I",
    commune_id: 219,
  },
  {
    quartier_id: 2350,
    nom: "MALI II",
    commune_id: 219,
  },
  {
    quartier_id: 2351,
    nom: "MALI III",
    commune_id: 219,
  },
  {
    quartier_id: 2352,
    nom: "MALI MISSIDE",
    commune_id: 219,
  },
  {
    quartier_id: 2353,
    nom: "MALI MOSQUEE",
    commune_id: 219,
  },
  {
    quartier_id: 2354,
    nom: "N'DANTAWI",
    commune_id: 219,
  },
  {
    quartier_id: 2355,
    nom: "PAKAYA",
    commune_id: 219,
  },
  {
    quartier_id: 2356,
    nom: "SOPARI",
    commune_id: 219,
  },
  {
    quartier_id: 2357,
    nom: "TENSIRA",
    commune_id: 219,
  },
  {
    quartier_id: 2358,
    nom: "WAN WAN",
    commune_id: 219,
  },
  {
    quartier_id: 2359,
    nom: "BALAKI CENTRE",
    commune_id: 220,
  },
  {
    quartier_id: 2360,
    nom: "BOURIA",
    commune_id: 220,
  },
  {
    quartier_id: 2361,
    nom: "DIOULABAYA",
    commune_id: 220,
  },
  {
    quartier_id: 2362,
    nom: "FOULAYA",
    commune_id: 220,
  },
  {
    quartier_id: 2363,
    nom: "KOPPOU",
    commune_id: 220,
  },
  {
    quartier_id: 2364,
    nom: "KOUNSSI",
    commune_id: 220,
  },
  {
    quartier_id: 2365,
    nom: "MADINA FOULBHE",
    commune_id: 220,
  },
  {
    quartier_id: 2366,
    nom: "NIAFOU",
    commune_id: 220,
  },
  {
    quartier_id: 2367,
    nom: "BANDEA",
    commune_id: 221,
  },
  {
    quartier_id: 2368,
    nom: "DOUGAYA",
    commune_id: 221,
  },
  {
    quartier_id: 2369,
    nom: "FETORE",
    commune_id: 221,
  },
  {
    quartier_id: 2370,
    nom: "HORE LITY",
    commune_id: 221,
  },
  {
    quartier_id: 2371,
    nom: "MAYADINE",
    commune_id: 221,
  },
  {
    quartier_id: 2372,
    nom: "SARA HERY",
    commune_id: 221,
  },
  {
    quartier_id: 2373,
    nom: "SERIA",
    commune_id: 221,
  },
  {
    quartier_id: 2374,
    nom: "SIGON CENTRE",
    commune_id: 221,
  },
  {
    quartier_id: 2375,
    nom: "YARI KOLY",
    commune_id: 221,
  },
  {
    quartier_id: 2376,
    nom: "BADOUGOULA",
    commune_id: 222,
  },
  {
    quartier_id: 2377,
    nom: "BAMBA-SABERE",
    commune_id: 222,
  },
  {
    quartier_id: 2378,
    nom: "BOULLERE",
    commune_id: 222,
  },
  {
    quartier_id: 2379,
    nom: "DARA",
    commune_id: 222,
  },
  {
    quartier_id: 2380,
    nom: "DIENDIEN",
    commune_id: 222,
  },
  {
    quartier_id: 2381,
    nom: "DIOHERE",
    commune_id: 222,
  },
  {
    quartier_id: 2382,
    nom: "DOUGOUNTOUNNY CENTRE",
    commune_id: 222,
  },
  {
    quartier_id: 2383,
    nom: "KOKOUMA",
    commune_id: 222,
  },
  {
    quartier_id: 2384,
    nom: "WANSAN",
    commune_id: 222,
  },
  {
    quartier_id: 2385,
    nom: "FOUGOU CENTRE",
    commune_id: 223,
  },
  {
    quartier_id: 2386,
    nom: "KANSAGHEL",
    commune_id: 223,
  },
  {
    quartier_id: 2387,
    nom: "SAMANTANG",
    commune_id: 223,
  },
  {
    quartier_id: 2388,
    nom: "DARA-BELY",
    commune_id: 224,
  },
  {
    quartier_id: 2389,
    nom: "DEMOU-GAYAH",
    commune_id: 224,
  },
  {
    quartier_id: 2390,
    nom: "GAYAH CENTRE",
    commune_id: 224,
  },
  {
    quartier_id: 2391,
    nom: "HOOLO",
    commune_id: 224,
  },
  {
    quartier_id: 2392,
    nom: "SEOU",
    commune_id: 224,
  },
  {
    quartier_id: 2393,
    nom: "DALAMA",
    commune_id: 225,
  },
  {
    quartier_id: 2394,
    nom: "FERIFETO",
    commune_id: 225,
  },
  {
    quartier_id: 2395,
    nom: "HIDAYATOU CENTRE",
    commune_id: 225,
  },
  {
    quartier_id: 2396,
    nom: "KENSEYA",
    commune_id: 225,
  },
  {
    quartier_id: 2397,
    nom: "KOUNDA",
    commune_id: 225,
  },
  {
    quartier_id: 2398,
    nom: "TEIMBOU",
    commune_id: 225,
  },
  {
    quartier_id: 2399,
    nom: "FINA",
    commune_id: 226,
  },
  {
    quartier_id: 2400,
    nom: "KANTA-THIOUDY",
    commune_id: 226,
  },
  {
    quartier_id: 2401,
    nom: "KEROUANE",
    commune_id: 226,
  },
  {
    quartier_id: 2402,
    nom: "KORIHOYE",
    commune_id: 226,
  },
  {
    quartier_id: 2403,
    nom: "LEBEKERE CENTRE",
    commune_id: 226,
  },
  {
    quartier_id: 2404,
    nom: "SABE",
    commune_id: 226,
  },
  {
    quartier_id: 2405,
    nom: "SINTHIOU-YANDY",
    commune_id: 226,
  },
  {
    quartier_id: 2406,
    nom: "DENGHEN",
    commune_id: 227,
  },
  {
    quartier_id: 2407,
    nom: "GHAHIRA",
    commune_id: 227,
  },
  {
    quartier_id: 2408,
    nom: "HORE FELLO",
    commune_id: 227,
  },
  {
    quartier_id: 2409,
    nom: "KOYAH",
    commune_id: 227,
  },
  {
    quartier_id: 2410,
    nom: "MADINA CENTRE",
    commune_id: 227,
  },
  {
    quartier_id: 2411,
    nom: "BAKONY",
    commune_id: 228,
  },
  {
    quartier_id: 2412,
    nom: "BOUNAYA",
    commune_id: 228,
  },
  {
    quartier_id: 2413,
    nom: "CECE",
    commune_id: 228,
  },
  {
    quartier_id: 2414,
    nom: "DAALY",
    commune_id: 228,
  },
  {
    quartier_id: 2415,
    nom: "HAFIA KAEDIORA",
    commune_id: 228,
  },
  {
    quartier_id: 2416,
    nom: "HAMDALLAYE",
    commune_id: 228,
  },
  {
    quartier_id: 2417,
    nom: "MADINA CENTRE",
    commune_id: 228,
  },
  {
    quartier_id: 2418,
    nom: "PELLISSARE",
    commune_id: 228,
  },
  {
    quartier_id: 2419,
    nom: "SOUGUE",
    commune_id: 228,
  },
  {
    quartier_id: 2420,
    nom: "WORA MISSIDE",
    commune_id: 228,
  },
  {
    quartier_id: 2421,
    nom: "KAMBAYA",
    commune_id: 229,
  },
  {
    quartier_id: 2422,
    nom: "DARE SALAM",
    commune_id: 229,
  },
  {
    quartier_id: 2423,
    nom: "DARA MERE",
    commune_id: 229,
  },
  {
    quartier_id: 2424,
    nom: "MADINA DIGANNADJI",
    commune_id: 229,
  },
  {
    quartier_id: 2425,
    nom: "MELIYA",
    commune_id: 229,
  },
  {
    quartier_id: 2426,
    nom: "SENGUELY",
    commune_id: 229,
  },
  {
    quartier_id: 2427,
    nom: "TELIRE CENTRE",
    commune_id: 229,
  },
  {
    quartier_id: 2428,
    nom: "BANDANI",
    commune_id: 230,
  },
  {
    quartier_id: 2429,
    nom: "FANGA",
    commune_id: 230,
  },
  {
    quartier_id: 2430,
    nom: "KOYA",
    commune_id: 230,
  },
  {
    quartier_id: 2431,
    nom: "NAGOYE",
    commune_id: 230,
  },
  {
    quartier_id: 2432,
    nom: "SANGUI",
    commune_id: 230,
  },
  {
    quartier_id: 2433,
    nom: "TOUBA CENTRE",
    commune_id: 230,
  },
  {
    quartier_id: 2434,
    nom: "DONGHOL",
    commune_id: 231,
  },
  {
    quartier_id: 2435,
    nom: "GOUMBA",
    commune_id: 231,
  },
  {
    quartier_id: 2436,
    nom: "HORE-N'DALA",
    commune_id: 231,
  },
  {
    quartier_id: 2437,
    nom: "HORE-SARE",
    commune_id: 231,
  },
  {
    quartier_id: 2438,
    nom: "KELEN",
    commune_id: 231,
  },
  {
    quartier_id: 2439,
    nom: "MBARA",
    commune_id: 231,
  },
  {
    quartier_id: 2440,
    nom: "PELLAL",
    commune_id: 231,
  },
  {
    quartier_id: 2441,
    nom: "SINTYOUROU",
    commune_id: 231,
  },
  {
    quartier_id: 2442,
    nom: "TENKETA",
    commune_id: 231,
  },
  {
    quartier_id: 2443,
    nom: "YEMBERING CENTRE",
    commune_id: 231,
  },
  {
    quartier_id: 2444,
    nom: "BALLAMA",
    commune_id: 232,
  },
  {
    quartier_id: 2445,
    nom: "BOLE",
    commune_id: 232,
  },
  {
    quartier_id: 2446,
    nom: "GANFATA",
    commune_id: 232,
  },
  {
    quartier_id: 2447,
    nom: "KALANKA",
    commune_id: 232,
  },
  {
    quartier_id: 2448,
    nom: "KAMBAYA",
    commune_id: 232,
  },
  {
    quartier_id: 2449,
    nom: "KEGNA",
    commune_id: 232,
  },
  {
    quartier_id: 2450,
    nom: "KELELA",
    commune_id: 232,
  },
  {
    quartier_id: 2451,
    nom: "PANDJE FELLO",
    commune_id: 232,
  },
  {
    quartier_id: 2452,
    nom: "SANDAKE",
    commune_id: 232,
  },
  {
    quartier_id: 2453,
    nom: "SOUMETA",
    commune_id: 232,
  },
  {
    quartier_id: 2454,
    nom: "SOUMPOURA",
    commune_id: 232,
  },
  {
    quartier_id: 2455,
    nom: "TOUGUE I",
    commune_id: 232,
  },
  {
    quartier_id: 2456,
    nom: "TOUGUE II",
    commune_id: 232,
  },
  {
    quartier_id: 2457,
    nom: "WOULINKO",
    commune_id: 232,
  },
  {
    quartier_id: 2458,
    nom: "WOURETIMBE",
    commune_id: 232,
  },
  {
    quartier_id: 2459,
    nom: "BOUMEKO",
    commune_id: 233,
  },
  {
    quartier_id: 2460,
    nom: "FATAKO",
    commune_id: 233,
  },
  {
    quartier_id: 2461,
    nom: "FOGO",
    commune_id: 233,
  },
  {
    quartier_id: 2462,
    nom: "KORBONYA",
    commune_id: 233,
  },
  {
    quartier_id: 2463,
    nom: "WENDOU",
    commune_id: 233,
  },
  {
    quartier_id: 2464,
    nom: "BALAGAN",
    commune_id: 234,
  },
  {
    quartier_id: 2465,
    nom: "FELLO KOUNDOUA",
    commune_id: 234,
  },
  {
    quartier_id: 2466,
    nom: "N'DIRE YANGUEYA",
    commune_id: 234,
  },
  {
    quartier_id: 2467,
    nom: "N'GUESSA WOULA",
    commune_id: 234,
  },
  {
    quartier_id: 2468,
    nom: "TAKABARA",
    commune_id: 234,
  },
  {
    quartier_id: 2469,
    nom: "KANSAGUI CENTRE",
    commune_id: 235,
  },
  {
    quartier_id: 2470,
    nom: "KEMAYA",
    commune_id: 235,
  },
  {
    quartier_id: 2471,
    nom: "KONDJEYA",
    commune_id: 235,
  },
  {
    quartier_id: 2472,
    nom: "LAREKO",
    commune_id: 235,
  },
  {
    quartier_id: 2473,
    nom: "SANGOUYA",
    commune_id: 235,
  },
  {
    quartier_id: 2474,
    nom: "SOULE",
    commune_id: 235,
  },
  {
    quartier_id: 2475,
    nom: "KAFFA",
    commune_id: 236,
  },
  {
    quartier_id: 2476,
    nom: "KOIN I",
    commune_id: 236,
  },
  {
    quartier_id: 2477,
    nom: "KOIN II",
    commune_id: 236,
  },
  {
    quartier_id: 2478,
    nom: "MALIPAN",
    commune_id: 236,
  },
  {
    quartier_id: 2479,
    nom: "SIGUIRA",
    commune_id: 236,
  },
  {
    quartier_id: 2480,
    nom: "SOLOKOURE",
    commune_id: 236,
  },
  {
    quartier_id: 2481,
    nom: "TYAGUEL",
    commune_id: 236,
  },
  {
    quartier_id: 2482,
    nom: "WEDOU MALANGA",
    commune_id: 236,
  },
  {
    quartier_id: 2483,
    nom: "AFIA",
    commune_id: 237,
  },
  {
    quartier_id: 2484,
    nom: "FELLO DIAFOUNABHE",
    commune_id: 237,
  },
  {
    quartier_id: 2485,
    nom: "KOLLANGUI CENTRE",
    commune_id: 237,
  },
  {
    quartier_id: 2486,
    nom: "LABHA",
    commune_id: 237,
  },
  {
    quartier_id: 2487,
    nom: "NHANNHARAN",
    commune_id: 237,
  },
  {
    quartier_id: 2488,
    nom: "BELAKOURE",
    commune_id: 238,
  },
  {
    quartier_id: 2489,
    nom: "DABALAYA",
    commune_id: 238,
  },
  {
    quartier_id: 2490,
    nom: "DARAH",
    commune_id: 238,
  },
  {
    quartier_id: 2491,
    nom: "DEMOUKO",
    commune_id: 238,
  },
  {
    quartier_id: 2492,
    nom: "DIAWLEKO",
    commune_id: 238,
  },
  {
    quartier_id: 2493,
    nom: "DOUROUN",
    commune_id: 238,
  },
  {
    quartier_id: 2494,
    nom: "FAGHAN",
    commune_id: 238,
  },
  {
    quartier_id: 2495,
    nom: "FELLO KOLLET",
    commune_id: 238,
  },
  {
    quartier_id: 2496,
    nom: "KABARY",
    commune_id: 238,
  },
  {
    quartier_id: 2497,
    nom: "KEGNEOULA",
    commune_id: 238,
  },
  {
    quartier_id: 2498,
    nom: "KIRFI",
    commune_id: 238,
  },
  {
    quartier_id: 2499,
    nom: "KOLLET CENTRE",
    commune_id: 238,
  },
  {
    quartier_id: 2500,
    nom: "LAGUI",
    commune_id: 238,
  },
  {
    quartier_id: 2501,
    nom: "MOSQUEE",
    commune_id: 238,
  },
  {
    quartier_id: 2502,
    nom: "NIENIEMERE",
    commune_id: 238,
  },
  {
    quartier_id: 2503,
    nom: "BOUROUWAL",
    commune_id: 239,
  },
  {
    quartier_id: 2504,
    nom: "FERIGANDE",
    commune_id: 239,
  },
  {
    quartier_id: 2505,
    nom: "HAMDALLAYE",
    commune_id: 239,
  },
  {
    quartier_id: 2506,
    nom: "KONAH I",
    commune_id: 239,
  },
  {
    quartier_id: 2507,
    nom: "KONAH II",
    commune_id: 239,
  },
  {
    quartier_id: 2508,
    nom: "PARAWI",
    commune_id: 239,
  },
  {
    quartier_id: 2509,
    nom: "PARAWOL",
    commune_id: 239,
  },
  {
    quartier_id: 2510,
    nom: "TOUNKOUROUMA",
    commune_id: 239,
  },
  {
    quartier_id: 2511,
    nom: "DAROU",
    commune_id: 240,
  },
  {
    quartier_id: 2512,
    nom: "FELLO MADINA",
    commune_id: 240,
  },
  {
    quartier_id: 2513,
    nom: "HORE KOLLET",
    commune_id: 240,
  },
  {
    quartier_id: 2514,
    nom: "KOLLET MISSIDE",
    commune_id: 240,
  },
  {
    quartier_id: 2515,
    nom: "KOUMBAMA",
    commune_id: 240,
  },
  {
    quartier_id: 2516,
    nom: "KOUNET",
    commune_id: 240,
  },
  {
    quartier_id: 2517,
    nom: "KOURATONGO CENTRE",
    commune_id: 240,
  },
  {
    quartier_id: 2518,
    nom: "LAAFA- BOUBE",
    commune_id: 240,
  },
  {
    quartier_id: 2519,
    nom: "LALLABARA",
    commune_id: 240,
  },
  {
    quartier_id: 2520,
    nom: "BADY",
    commune_id: 241,
  },
  {
    quartier_id: 2521,
    nom: "BARITA",
    commune_id: 241,
  },
  {
    quartier_id: 2522,
    nom: "KORFO",
    commune_id: 241,
  },
  {
    quartier_id: 2523,
    nom: "TANGALY",
    commune_id: 241,
  },
  {
    quartier_id: 2524,
    nom: "DALABA MISSIDE",
    commune_id: 242,
  },
  {
    quartier_id: 2525,
    nom: "DAR ES SALAM",
    commune_id: 242,
  },
  {
    quartier_id: 2526,
    nom: "DIAGUISSA",
    commune_id: 242,
  },
  {
    quartier_id: 2527,
    nom: "HERMAKONON",
    commune_id: 242,
  },
  {
    quartier_id: 2528,
    nom: "KOLLANGUEL",
    commune_id: 242,
  },
  {
    quartier_id: 2529,
    nom: "PELLEL YERO",
    commune_id: 242,
  },
  {
    quartier_id: 2530,
    nom: "SILY",
    commune_id: 242,
  },
  {
    quartier_id: 2531,
    nom: "TANGAMA",
    commune_id: 242,
  },
  {
    quartier_id: 2532,
    nom: "BODIE CENTRE",
    commune_id: 243,
  },
  {
    quartier_id: 2533,
    nom: "BOUROUWAL-DIAWBHE",
    commune_id: 243,
  },
  {
    quartier_id: 2534,
    nom: "M'BOURO",
    commune_id: 243,
  },
  {
    quartier_id: 2535,
    nom: "MANTA",
    commune_id: 243,
  },
  {
    quartier_id: 2536,
    nom: "MARANDA",
    commune_id: 243,
  },
  {
    quartier_id: 2537,
    nom: "BOTOBOFEL",
    commune_id: 244,
  },
  {
    quartier_id: 2538,
    nom: "DITINN CENTRE",
    commune_id: 244,
  },
  {
    quartier_id: 2539,
    nom: "DIAMBROUYA",
    commune_id: 244,
  },
  {
    quartier_id: 2540,
    nom: "FOUGOUMBA",
    commune_id: 244,
  },
  {
    quartier_id: 2541,
    nom: "KOUROU",
    commune_id: 244,
  },
  {
    quartier_id: 2542,
    nom: "HERICO",
    commune_id: 245,
  },
  {
    quartier_id: 2543,
    nom: "KAALA CENTRE",
    commune_id: 245,
  },
  {
    quartier_id: 2544,
    nom: "KOIN HENERE",
    commune_id: 245,
  },
  {
    quartier_id: 2545,
    nom: "KOLLAKOYE",
    commune_id: 245,
  },
  {
    quartier_id: 2546,
    nom: "N'DANTARY",
    commune_id: 245,
  },
  {
    quartier_id: 2547,
    nom: "PELLAL",
    commune_id: 245,
  },
  {
    quartier_id: 2548,
    nom: "DIAWLEKO",
    commune_id: 246,
  },
  {
    quartier_id: 2549,
    nom: "DONGHOL",
    commune_id: 246,
  },
  {
    quartier_id: 2550,
    nom: "GOBIRE",
    commune_id: 246,
  },
  {
    quartier_id: 2551,
    nom: "KANKALABE CENTRE",
    commune_id: 246,
  },
  {
    quartier_id: 2552,
    nom: "KOUFFA",
    commune_id: 246,
  },
  {
    quartier_id: 2553,
    nom: "N'DANTABA",
    commune_id: 246,
  },
  {
    quartier_id: 2554,
    nom: "SEFOURE",
    commune_id: 246,
  },
  {
    quartier_id: 2555,
    nom: "THIORO",
    commune_id: 246,
  },
  {
    quartier_id: 2556,
    nom: "BANGA",
    commune_id: 247,
  },
  {
    quartier_id: 2557,
    nom: "BOUSSOURA",
    commune_id: 247,
  },
  {
    quartier_id: 2558,
    nom: "DIOURIAH",
    commune_id: 247,
  },
  {
    quartier_id: 2559,
    nom: "HERICO",
    commune_id: 247,
  },
  {
    quartier_id: 2560,
    nom: "KAHEL",
    commune_id: 247,
  },
  {
    quartier_id: 2561,
    nom: "KEBALY CENTRE",
    commune_id: 247,
  },
  {
    quartier_id: 2562,
    nom: "MIRIRE",
    commune_id: 247,
  },
  {
    quartier_id: 2563,
    nom: "FELLO MALANGA",
    commune_id: 248,
  },
  {
    quartier_id: 2564,
    nom: "HAFIA",
    commune_id: 248,
  },
  {
    quartier_id: 2565,
    nom: "HAFIA KOKOU",
    commune_id: 248,
  },
  {
    quartier_id: 2566,
    nom: "HOLLANDE",
    commune_id: 248,
  },
  {
    quartier_id: 2567,
    nom: "HORE DJOLY",
    commune_id: 248,
  },
  {
    quartier_id: 2568,
    nom: "KAKORY",
    commune_id: 248,
  },
  {
    quartier_id: 2569,
    nom: "KOBA CENTRE",
    commune_id: 248,
  },
  {
    quartier_id: 2570,
    nom: "LELE",
    commune_id: 248,
  },
  {
    quartier_id: 2571,
    nom: "LOOPE",
    commune_id: 248,
  },
  {
    quartier_id: 2572,
    nom: "THIEOUNGOL",
    commune_id: 248,
  },
  {
    quartier_id: 2573,
    nom: "DONDE",
    commune_id: 249,
  },
  {
    quartier_id: 2574,
    nom: "KETIGUIA",
    commune_id: 249,
  },
  {
    quartier_id: 2575,
    nom: "KOUROU SERIABHE",
    commune_id: 249,
  },
  {
    quartier_id: 2576,
    nom: "MAFARA CENTRE",
    commune_id: 249,
  },
  {
    quartier_id: 2577,
    nom: "PENNOUN",
    commune_id: 249,
  },
  {
    quartier_id: 2578,
    nom: "BINDY",
    commune_id: 250,
  },
  {
    quartier_id: 2579,
    nom: "DIANGOLO",
    commune_id: 250,
  },
  {
    quartier_id: 2580,
    nom: "DJIGUIWEL",
    commune_id: 250,
  },
  {
    quartier_id: 2581,
    nom: "FONFOYAH",
    commune_id: 250,
  },
  {
    quartier_id: 2582,
    nom: "LELATO",
    commune_id: 250,
  },
  {
    quartier_id: 2583,
    nom: "MITTY CENTRE",
    commune_id: 250,
  },
  {
    quartier_id: 2584,
    nom: "PARAWI",
    commune_id: 250,
  },
  {
    quartier_id: 2585,
    nom: "PETTY",
    commune_id: 250,
  },
  {
    quartier_id: 2586,
    nom: "SEBHORY",
    commune_id: 250,
  },
  {
    quartier_id: 2587,
    nom: "YALAGUE",
    commune_id: 250,
  },
  {
    quartier_id: 2588,
    nom: "DOUGAYA",
    commune_id: 251,
  },
  {
    quartier_id: 2589,
    nom: "DOUNKI",
    commune_id: 251,
  },
  {
    quartier_id: 2590,
    nom: "FOGO",
    commune_id: 251,
  },
  {
    quartier_id: 2591,
    nom: "GALY",
    commune_id: 251,
  },
  {
    quartier_id: 2592,
    nom: "GNEKEMA",
    commune_id: 251,
  },
  {
    quartier_id: 2593,
    nom: "HAFIA",
    commune_id: 251,
  },
  {
    quartier_id: 2594,
    nom: "KENENE",
    commune_id: 251,
  },
  {
    quartier_id: 2595,
    nom: "KIGNA",
    commune_id: 251,
  },
  {
    quartier_id: 2596,
    nom: "MOMBEYA CENTRE",
    commune_id: 251,
  },
  {
    quartier_id: 2597,
    nom: "ABATTOIR II",
    commune_id: 252,
  },
  {
    quartier_id: 2598,
    nom: "ALMAMYA MOSQUEE",
    commune_id: 252,
  },
  {
    quartier_id: 2599,
    nom: "ALMAMYA RESIDENCE",
    commune_id: 252,
  },
  {
    quartier_id: 2600,
    nom: "ALMAMYA TERRAIN",
    commune_id: 252,
  },
  {
    quartier_id: 2601,
    nom: "BOULBINET",
    commune_id: 252,
  },
  {
    quartier_id: 2602,
    nom: "HORE FELLO I",
    commune_id: 252,
  },
  {
    quartier_id: 2603,
    nom: "HORE FELLO II",
    commune_id: 252,
  },
  {
    quartier_id: 2604,
    nom: "HORE MAMOU",
    commune_id: 252,
  },
  {
    quartier_id: 2605,
    nom: "KIMBELY I",
    commune_id: 252,
  },
  {
    quartier_id: 2606,
    nom: "KIMBELY II",
    commune_id: 252,
  },
  {
    quartier_id: 2607,
    nom: "KOUMI",
    commune_id: 252,
  },
  {
    quartier_id: 2608,
    nom: "LOPPET ECOLE",
    commune_id: 252,
  },
  {
    quartier_id: 2609,
    nom: "LOPPET I",
    commune_id: 252,
  },
  {
    quartier_id: 2610,
    nom: "LOPPET II",
    commune_id: 252,
  },
  {
    quartier_id: 2611,
    nom: "MADINA KM 15",
    commune_id: 252,
  },
  {
    quartier_id: 2612,
    nom: "MADINA MOSQUEE",
    commune_id: 252,
  },
  {
    quartier_id: 2613,
    nom: "MADINA SCIERIE",
    commune_id: 252,
  },
  {
    quartier_id: 2614,
    nom: "MADINA TAMBASSA",
    commune_id: 252,
  },
  {
    quartier_id: 2615,
    nom: "PETEL I",
    commune_id: 252,
  },
  {
    quartier_id: 2616,
    nom: "PETEL II",
    commune_id: 252,
  },
  {
    quartier_id: 2617,
    nom: "POUDRIERE I",
    commune_id: 252,
  },
  {
    quartier_id: 2618,
    nom: "POUDRIERE II",
    commune_id: 252,
  },
  {
    quartier_id: 2619,
    nom: "SABOU",
    commune_id: 252,
  },
  {
    quartier_id: 2620,
    nom: "SERE CENTRE",
    commune_id: 252,
  },
  {
    quartier_id: 2621,
    nom: "TELICO",
    commune_id: 252,
  },
  {
    quartier_id: 2622,
    nom: "TYEWNGOL",
    commune_id: 252,
  },
  {
    quartier_id: 2623,
    nom: "BOUNANYA",
    commune_id: 253,
  },
  {
    quartier_id: 2624,
    nom: "LAAPOUWOL",
    commune_id: 253,
  },
  {
    quartier_id: 2625,
    nom: "KELLIWOL",
    commune_id: 253,
  },
  {
    quartier_id: 2626,
    nom: "BOULLIWEL CENTRE",
    commune_id: 253,
  },
  {
    quartier_id: 2627,
    nom: "SORIYA",
    commune_id: 253,
  },
  {
    quartier_id: 2628,
    nom: "DOUNKI",
    commune_id: 253,
  },
  {
    quartier_id: 2629,
    nom: "SENNADE",
    commune_id: 253,
  },
  {
    quartier_id: 2630,
    nom: "BHAWO FELLO",
    commune_id: 253,
  },
  {
    quartier_id: 2631,
    nom: "LOOPI",
    commune_id: 253,
  },
  {
    quartier_id: 2632,
    nom: "KENDOUMA",
    commune_id: 253,
  },
  {
    quartier_id: 2633,
    nom: "DIANYA",
    commune_id: 253,
  },
  {
    quartier_id: 2634,
    nom: "ALPHAYA",
    commune_id: 254,
  },
  {
    quartier_id: 2635,
    nom: "BASSAMBAYA",
    commune_id: 254,
  },
  {
    quartier_id: 2636,
    nom: "DIATABAYA",
    commune_id: 254,
  },
  {
    quartier_id: 2637,
    nom: "DINDEYA",
    commune_id: 254,
  },
  {
    quartier_id: 2638,
    nom: "DOUNET CENTRE",
    commune_id: 254,
  },
  {
    quartier_id: 2639,
    nom: "FATOUYA",
    commune_id: 254,
  },
  {
    quartier_id: 2640,
    nom: "HADJI",
    commune_id: 254,
  },
  {
    quartier_id: 2641,
    nom: "HINDE",
    commune_id: 254,
  },
  {
    quartier_id: 2642,
    nom: "SOBEYA",
    commune_id: 254,
  },
  {
    quartier_id: 2643,
    nom: "SOUMBALAKO-MAOUNDE",
    commune_id: 254,
  },
  {
    quartier_id: 2644,
    nom: "DOUGOU WOULEN",
    commune_id: 255,
  },
  {
    quartier_id: 2645,
    nom: "GONGORET CENTRE",
    commune_id: 255,
  },
  {
    quartier_id: 2646,
    nom: "KOUROU",
    commune_id: 255,
  },
  {
    quartier_id: 2647,
    nom: "POUKOU",
    commune_id: 255,
  },
  {
    quartier_id: 2648,
    nom: "BANIRE HAFIA",
    commune_id: 256,
  },
  {
    quartier_id: 2649,
    nom: "DALAOULEN",
    commune_id: 256,
  },
  {
    quartier_id: 2650,
    nom: "HAROUNAYA",
    commune_id: 256,
  },
  {
    quartier_id: 2651,
    nom: "HERICO",
    commune_id: 256,
  },
  {
    quartier_id: 2652,
    nom: "KEGNEKO CENTRE",
    commune_id: 256,
  },
  {
    quartier_id: 2653,
    nom: "MISSIRA",
    commune_id: 256,
  },
  {
    quartier_id: 2654,
    nom: "BILIMA KANTE",
    commune_id: 257,
  },
  {
    quartier_id: 2655,
    nom: "BILIMA MISSIDE",
    commune_id: 257,
  },
  {
    quartier_id: 2656,
    nom: "FOYE",
    commune_id: 257,
  },
  {
    quartier_id: 2657,
    nom: "HOOLO",
    commune_id: 257,
  },
  {
    quartier_id: 2658,
    nom: "KONKOURE CENTRE",
    commune_id: 257,
  },
  {
    quartier_id: 2659,
    nom: "TAMAGALY",
    commune_id: 257,
  },
  {
    quartier_id: 2660,
    nom: "TAMBABETE",
    commune_id: 257,
  },
  {
    quartier_id: 2661,
    nom: "BOTORE",
    commune_id: 258,
  },
  {
    quartier_id: 2662,
    nom: "LABICO",
    commune_id: 258,
  },
  {
    quartier_id: 2663,
    nom: "MANGOL",
    commune_id: 258,
  },
  {
    quartier_id: 2664,
    nom: "MORIFATANDEN",
    commune_id: 258,
  },
  {
    quartier_id: 2665,
    nom: "NIAGARA",
    commune_id: 258,
  },
  {
    quartier_id: 2666,
    nom: "TOROBHE",
    commune_id: 258,
  },
  {
    quartier_id: 2667,
    nom: "ALPHAYA",
    commune_id: 259,
  },
  {
    quartier_id: 2668,
    nom: "BANECOTO",
    commune_id: 259,
  },
  {
    quartier_id: 2669,
    nom: "BANTAMAYA",
    commune_id: 259,
  },
  {
    quartier_id: 2670,
    nom: "DIANDIAN",
    commune_id: 259,
  },
  {
    quartier_id: 2671,
    nom: "KEGNEGBE",
    commune_id: 259,
  },
  {
    quartier_id: 2672,
    nom: "MADINA",
    commune_id: 259,
  },
  {
    quartier_id: 2673,
    nom: "OURE-KABA CENTRE",
    commune_id: 259,
  },
  {
    quartier_id: 2674,
    nom: "PORTOFITA",
    commune_id: 259,
  },
  {
    quartier_id: 2675,
    nom: "SEBECOTO",
    commune_id: 259,
  },
  {
    quartier_id: 2676,
    nom: "SELEYA",
    commune_id: 259,
  },
  {
    quartier_id: 2677,
    nom: "SITAKOTO",
    commune_id: 259,
  },
  {
    quartier_id: 2678,
    nom: "SOGOROYA",
    commune_id: 259,
  },
  {
    quartier_id: 2679,
    nom: "YOMAYA LIMBAN",
    commune_id: 259,
  },
  {
    quartier_id: 2680,
    nom: "BHOURIA",
    commune_id: 260,
  },
  {
    quartier_id: 2681,
    nom: "DAR- ES-SALAM",
    commune_id: 260,
  },
  {
    quartier_id: 2682,
    nom: "DOGHOL DJEIDI",
    commune_id: 260,
  },
  {
    quartier_id: 2683,
    nom: "KOLISSOKO",
    commune_id: 260,
  },
  {
    quartier_id: 2684,
    nom: "N'DIARE",
    commune_id: 260,
  },
  {
    quartier_id: 2685,
    nom: "POREDAKA CENTRE",
    commune_id: 260,
  },
  {
    quartier_id: 2686,
    nom: "SANKARELA",
    commune_id: 260,
  },
  {
    quartier_id: 2687,
    nom: "TOUNKAN",
    commune_id: 260,
  },
  {
    quartier_id: 2688,
    nom: "BOUROUWIL",
    commune_id: 261,
  },
  {
    quartier_id: 2689,
    nom: "DERMELA",
    commune_id: 261,
  },
  {
    quartier_id: 2690,
    nom: "DOUNKIBA",
    commune_id: 261,
  },
  {
    quartier_id: 2691,
    nom: "FODE HADJI",
    commune_id: 261,
  },
  {
    quartier_id: 2692,
    nom: "GARANKELA",
    commune_id: 261,
  },
  {
    quartier_id: 2693,
    nom: "KENEWOL",
    commune_id: 261,
  },
  {
    quartier_id: 2694,
    nom: "NYENOUYA",
    commune_id: 261,
  },
  {
    quartier_id: 2695,
    nom: "SAREBOWAL",
    commune_id: 261,
  },
  {
    quartier_id: 2696,
    nom: "SARAMOUSSAYA",
    commune_id: 261,
  },
  {
    quartier_id: 2697,
    nom: "SOKOTORO",
    commune_id: 261,
  },
  {
    quartier_id: 2698,
    nom: "BERTEYA",
    commune_id: 262,
  },
  {
    quartier_id: 2699,
    nom: "BHOULLY",
    commune_id: 262,
  },
  {
    quartier_id: 2700,
    nom: "FARENTA",
    commune_id: 262,
  },
  {
    quartier_id: 2701,
    nom: "KENTEN",
    commune_id: 262,
  },
  {
    quartier_id: 2702,
    nom: "NOBE",
    commune_id: 262,
  },
  {
    quartier_id: 2703,
    nom: "SOYAH CENTRE",
    commune_id: 262,
  },
  {
    quartier_id: 2704,
    nom: "BOKO",
    commune_id: 263,
  },
  {
    quartier_id: 2705,
    nom: "BROUWAL",
    commune_id: 263,
  },
  {
    quartier_id: 2706,
    nom: "FINALA",
    commune_id: 263,
  },
  {
    quartier_id: 2707,
    nom: "MISSIDE KOLLEN",
    commune_id: 263,
  },
  {
    quartier_id: 2708,
    nom: "N'DIARENDI",
    commune_id: 263,
  },
  {
    quartier_id: 2709,
    nom: "TEGUEREYA CENTRE",
    commune_id: 263,
  },
  {
    quartier_id: 2710,
    nom: "DAARA",
    commune_id: 264,
  },
  {
    quartier_id: 2711,
    nom: "DJAFOUNA",
    commune_id: 264,
  },
  {
    quartier_id: 2712,
    nom: "KIGNA-OURIYA",
    commune_id: 264,
  },
  {
    quartier_id: 2713,
    nom: "SEIDYA I",
    commune_id: 264,
  },
  {
    quartier_id: 2714,
    nom: "SEIDYA II",
    commune_id: 264,
  },
  {
    quartier_id: 2715,
    nom: "TIMBO CENTRE",
    commune_id: 264,
  },
  {
    quartier_id: 2716,
    nom: "GOUBA",
    commune_id: 265,
  },
  {
    quartier_id: 2717,
    nom: "MORODE",
    commune_id: 265,
  },
  {
    quartier_id: 2718,
    nom: "SOUMBALAKO TOKOSSERE",
    commune_id: 265,
  },
  {
    quartier_id: 2719,
    nom: "TOLO",
    commune_id: 265,
  },
  {
    quartier_id: 2720,
    nom: "BENDOUGOU",
    commune_id: 266,
  },
  {
    quartier_id: 2721,
    nom: "DOW SARE",
    commune_id: 266,
  },
  {
    quartier_id: 2722,
    nom: "GADHA KOUBI",
    commune_id: 266,
  },
  {
    quartier_id: 2723,
    nom: "GUEME I",
    commune_id: 266,
  },
  {
    quartier_id: 2724,
    nom: "GUEME II",
    commune_id: 266,
  },
  {
    quartier_id: 2725,
    nom: "HAFIA",
    commune_id: 266,
  },
  {
    quartier_id: 2726,
    nom: "LEY SARE",
    commune_id: 266,
  },
  {
    quartier_id: 2727,
    nom: "MARCHE I",
    commune_id: 266,
  },
  {
    quartier_id: 2728,
    nom: "MARCHE II",
    commune_id: 266,
  },
  {
    quartier_id: 2729,
    nom: "MISSIRA",
    commune_id: 266,
  },
  {
    quartier_id: 2730,
    nom: "N'DOUYEBHE SALLY",
    commune_id: 266,
  },
  {
    quartier_id: 2731,
    nom: "SALLOUBHE",
    commune_id: 266,
  },
  {
    quartier_id: 2732,
    nom: "SEWA",
    commune_id: 266,
  },
  {
    quartier_id: 2733,
    nom: "BANTIGNEL MAOUDE",
    commune_id: 267,
  },
  {
    quartier_id: 2734,
    nom: "BANTIGNELTOKOSSERE",
    commune_id: 267,
  },
  {
    quartier_id: 2735,
    nom: "BILLE",
    commune_id: 267,
  },
  {
    quartier_id: 2736,
    nom: "BROUWAL HOLLANDE",
    commune_id: 267,
  },
  {
    quartier_id: 2737,
    nom: "BROUWAL LAHEDJI",
    commune_id: 267,
  },
  {
    quartier_id: 2738,
    nom: "DAR-ES-SALAM",
    commune_id: 267,
  },
  {
    quartier_id: 2739,
    nom: "DONGHEL",
    commune_id: 267,
  },
  {
    quartier_id: 2740,
    nom: "MELIKANSA",
    commune_id: 267,
  },
  {
    quartier_id: 2741,
    nom: "MISSIDE HAMDALAYE",
    commune_id: 267,
  },
  {
    quartier_id: 2742,
    nom: "MISSIDE HINDE",
    commune_id: 267,
  },
  {
    quartier_id: 2743,
    nom: "SALLIA ECOLE",
    commune_id: 267,
  },
  {
    quartier_id: 2744,
    nom: "BOMBOLY",
    commune_id: 268,
  },
  {
    quartier_id: 2745,
    nom: "BROUWAL TAPPE CENTRE",
    commune_id: 268,
  },
  {
    quartier_id: 2746,
    nom: "GADHA BHOUNDOUWOL",
    commune_id: 268,
  },
  {
    quartier_id: 2747,
    nom: "HAKKOUNDE MITTY",
    commune_id: 268,
  },
  {
    quartier_id: 2748,
    nom: "HORE GNELE",
    commune_id: 268,
  },
  {
    quartier_id: 2749,
    nom: "LEY GNELE",
    commune_id: 268,
  },
  {
    quartier_id: 2750,
    nom: "BAMBAYA",
    commune_id: 269,
  },
  {
    quartier_id: 2751,
    nom: "BOULLERE",
    commune_id: 269,
  },
  {
    quartier_id: 2752,
    nom: "DONGHOL CENTRE",
    commune_id: 269,
  },
  {
    quartier_id: 2753,
    nom: "DOUCKY",
    commune_id: 269,
  },
  {
    quartier_id: 2754,
    nom: "DOUKOUKOU",
    commune_id: 269,
  },
  {
    quartier_id: 2755,
    nom: "GUEME",
    commune_id: 269,
  },
  {
    quartier_id: 2756,
    nom: "KADIEL",
    commune_id: 269,
  },
  {
    quartier_id: 2757,
    nom: "KALILAMBAN",
    commune_id: 269,
  },
  {
    quartier_id: 2758,
    nom: "N'DALAO",
    commune_id: 269,
  },
  {
    quartier_id: 2759,
    nom: "PELLAL",
    commune_id: 269,
  },
  {
    quartier_id: 2760,
    nom: "TAIRE",
    commune_id: 269,
  },
  {
    quartier_id: 2761,
    nom: "AIGUEL",
    commune_id: 270,
  },
  {
    quartier_id: 2762,
    nom: "BAMBETO",
    commune_id: 270,
  },
  {
    quartier_id: 2763,
    nom: "DEBEN",
    commune_id: 270,
  },
  {
    quartier_id: 2764,
    nom: "DJINDJI",
    commune_id: 270,
  },
  {
    quartier_id: 2765,
    nom: "GONGORE CENTRE",
    commune_id: 270,
  },
  {
    quartier_id: 2766,
    nom: "HAMDALLAYE",
    commune_id: 270,
  },
  {
    quartier_id: 2767,
    nom: "KOURA WOURE",
    commune_id: 270,
  },
  {
    quartier_id: 2768,
    nom: "MADINA LEGUE",
    commune_id: 270,
  },
  {
    quartier_id: 2769,
    nom: "THIEHEL",
    commune_id: 270,
  },
  {
    quartier_id: 2770,
    nom: "DIOUNKOUN",
    commune_id: 271,
  },
  {
    quartier_id: 2771,
    nom: "FARO",
    commune_id: 271,
  },
  {
    quartier_id: 2772,
    nom: "FETOWOL",
    commune_id: 271,
  },
  {
    quartier_id: 2773,
    nom: "KOUYE",
    commune_id: 271,
  },
  {
    quartier_id: 2774,
    nom: "LEY DIOHE",
    commune_id: 271,
  },
  {
    quartier_id: 2775,
    nom: "LEY MIRO CENTRE",
    commune_id: 271,
  },
  {
    quartier_id: 2776,
    nom: "WAREYAH",
    commune_id: 271,
  },
  {
    quartier_id: 2777,
    nom: "BHOULLY",
    commune_id: 272,
  },
  {
    quartier_id: 2778,
    nom: "DJEREINNA",
    commune_id: 272,
  },
  {
    quartier_id: 2779,
    nom: "DONGHOL",
    commune_id: 272,
  },
  {
    quartier_id: 2780,
    nom: "KAMBACO",
    commune_id: 272,
  },
  {
    quartier_id: 2781,
    nom: "LEY TANGAN",
    commune_id: 272,
  },
  {
    quartier_id: 2782,
    nom: "LITTY",
    commune_id: 272,
  },
  {
    quartier_id: 2783,
    nom: "MACI I",
    commune_id: 272,
  },
  {
    quartier_id: 2784,
    nom: "MACI II",
    commune_id: 272,
  },
  {
    quartier_id: 2785,
    nom: "MADINA LEBERE",
    commune_id: 272,
  },
  {
    quartier_id: 2786,
    nom: "N'DANTARI",
    commune_id: 272,
  },
  {
    quartier_id: 2787,
    nom: "N'DIRE",
    commune_id: 272,
  },
  {
    quartier_id: 2788,
    nom: "PALAGA",
    commune_id: 272,
  },
  {
    quartier_id: 2789,
    nom: "TANGAN",
    commune_id: 272,
  },
  {
    quartier_id: 2790,
    nom: "THYEWERE",
    commune_id: 272,
  },
  {
    quartier_id: 2791,
    nom: "BOURROURE HAMDALLAYE",
    commune_id: 273,
  },
  {
    quartier_id: 2792,
    nom: "DEBEYA PETY",
    commune_id: 273,
  },
  {
    quartier_id: 2793,
    nom: "FOYE BOUROUWAL",
    commune_id: 273,
  },
  {
    quartier_id: 2794,
    nom: "GNINKAN",
    commune_id: 273,
  },
  {
    quartier_id: 2795,
    nom: "LEY FITA",
    commune_id: 273,
  },
  {
    quartier_id: 2796,
    nom: "LOUKOUTA",
    commune_id: 273,
  },
  {
    quartier_id: 2797,
    nom: "NINGUELANDE CENTRE",
    commune_id: 273,
  },
  {
    quartier_id: 2798,
    nom: "PELLAL TOKOSSERE",
    commune_id: 273,
  },
  {
    quartier_id: 2799,
    nom: "SAFAA",
    commune_id: 273,
  },
  {
    quartier_id: 2800,
    nom: "WEENDOU",
    commune_id: 273,
  },
  {
    quartier_id: 2801,
    nom: "YORGO PELLEL",
    commune_id: 273,
  },
  {
    quartier_id: 2802,
    nom: "DIANYA",
    commune_id: 274,
  },
  {
    quartier_id: 2803,
    nom: "FONFO",
    commune_id: 274,
  },
  {
    quartier_id: 2804,
    nom: "NIANSO",
    commune_id: 274,
  },
  {
    quartier_id: 2805,
    nom: "NINGUETERE",
    commune_id: 274,
  },
  {
    quartier_id: 2806,
    nom: "SAARI",
    commune_id: 274,
  },
  {
    quartier_id: 2807,
    nom: "SANGAREAH CENTRE",
    commune_id: 274,
  },
  {
    quartier_id: 2808,
    nom: "SANKA",
    commune_id: 274,
  },
  {
    quartier_id: 2809,
    nom: "SOLEINTA",
    commune_id: 274,
  },
  {
    quartier_id: 2810,
    nom: "BOURKADJE",
    commune_id: 275,
  },
  {
    quartier_id: 2811,
    nom: "FITABA",
    commune_id: 275,
  },
  {
    quartier_id: 2812,
    nom: "KOKOULO",
    commune_id: 275,
  },
  {
    quartier_id: 2813,
    nom: "LALIA MAOUDE",
    commune_id: 275,
  },
  {
    quartier_id: 2814,
    nom: "SARAYA",
    commune_id: 275,
  },
  {
    quartier_id: 2815,
    nom: "SINTALY CENTRE",
    commune_id: 275,
  },
  {
    quartier_id: 2816,
    nom: "AINDE",
    commune_id: 276,
  },
  {
    quartier_id: 2817,
    nom: "BAMIKOURE",
    commune_id: 276,
  },
  {
    quartier_id: 2818,
    nom: "BOUMALOL",
    commune_id: 276,
  },
  {
    quartier_id: 2819,
    nom: "DAMPO",
    commune_id: 276,
  },
  {
    quartier_id: 2820,
    nom: "DJOUNGOL",
    commune_id: 276,
  },
  {
    quartier_id: 2821,
    nom: "DOUMBA",
    commune_id: 276,
  },
  {
    quartier_id: 2822,
    nom: "KOUROU MANGUI",
    commune_id: 276,
  },
  {
    quartier_id: 2823,
    nom: "KOUROU REDOUSERE",
    commune_id: 276,
  },
  {
    quartier_id: 2824,
    nom: "LABHA",
    commune_id: 276,
  },
  {
    quartier_id: 2825,
    nom: "MADINA CENTRE",
    commune_id: 276,
  },
  {
    quartier_id: 2826,
    nom: "SEREBOURE",
    commune_id: 276,
  },
  {
    quartier_id: 2827,
    nom: "SONKE",
    commune_id: 276,
  },
  {
    quartier_id: 2828,
    nom: "THYAPATA",
    commune_id: 276,
  },
  {
    quartier_id: 2829,
    nom: "TOKOSSERE",
    commune_id: 276,
  },
  {
    quartier_id: 2830,
    nom: "AYNDE BOUSSOURA",
    commune_id: 277,
  },
  {
    quartier_id: 2831,
    nom: "BENDEKOURE",
    commune_id: 277,
  },
  {
    quartier_id: 2832,
    nom: "DIABERE YARE",
    commune_id: 277,
  },
  {
    quartier_id: 2833,
    nom: "DIAGA",
    commune_id: 277,
  },
  {
    quartier_id: 2834,
    nom: "DIONGASSI",
    commune_id: 277,
  },
  {
    quartier_id: 2835,
    nom: "HORE OURY",
    commune_id: 277,
  },
  {
    quartier_id: 2836,
    nom: "MANGOL",
    commune_id: 277,
  },
  {
    quartier_id: 2837,
    nom: "PELLEL BANTAN",
    commune_id: 277,
  },
  {
    quartier_id: 2838,
    nom: "PELLEL MODIYABHE",
    commune_id: 277,
  },
  {
    quartier_id: 2839,
    nom: "TIMBI TOUNNI CENTRE",
    commune_id: 277,
  },
  {
    quartier_id: 2840,
    nom: "THIOUKKOU",
    commune_id: 277,
  },
  {
    quartier_id: 2841,
    nom: "WANSAN",
    commune_id: 277,
  },
  {
    quartier_id: 2842,
    nom: "BANANKORO",
    commune_id: 278,
  },
  {
    quartier_id: 2843,
    nom: "DABADOU",
    commune_id: 278,
  },
  {
    quartier_id: 2844,
    nom: "DIAKOLIDOU SOBAKONO",
    commune_id: 278,
  },
  {
    quartier_id: 2845,
    nom: "DIAKOLIDOU TINIKAN",
    commune_id: 278,
  },
  {
    quartier_id: 2846,
    nom: "DIAKORO",
    commune_id: 278,
  },
  {
    quartier_id: 2847,
    nom: "DOUKOURELA",
    commune_id: 278,
  },
  {
    quartier_id: 2848,
    nom: "DRAME OUMAR",
    commune_id: 278,
  },
  {
    quartier_id: 2849,
    nom: "FEREBORY CAMARA",
    commune_id: 278,
  },
  {
    quartier_id: 2850,
    nom: "GBORO",
    commune_id: 278,
  },
  {
    quartier_id: 2851,
    nom: "KEME BOUREMA",
    commune_id: 278,
  },
  {
    quartier_id: 2852,
    nom: "KISSIBOU",
    commune_id: 278,
  },
  {
    quartier_id: 2853,
    nom: "KOIMORIDOU",
    commune_id: 278,
  },
  {
    quartier_id: 2854,
    nom: "MORISANGAREDOU",
    commune_id: 278,
  },
  {
    quartier_id: 2855,
    nom: "SAMORY TOURE",
    commune_id: 278,
  },
  {
    quartier_id: 2856,
    nom: "BOOLA I",
    commune_id: 279,
  },
  {
    quartier_id: 2857,
    nom: "BOOLA II",
    commune_id: 279,
  },
  {
    quartier_id: 2858,
    nom: "BRIKOIDOU",
    commune_id: 279,
  },
  {
    quartier_id: 2859,
    nom: "DIABAMORIDOU",
    commune_id: 279,
  },
  {
    quartier_id: 2860,
    nom: "DOMANIDOU",
    commune_id: 279,
  },
  {
    quartier_id: 2861,
    nom: "FOUAMA",
    commune_id: 279,
  },
  {
    quartier_id: 2862,
    nom: "KOIDOU",
    commune_id: 279,
  },
  {
    quartier_id: 2863,
    nom: "ORATA",
    commune_id: 279,
  },
  {
    quartier_id: 2864,
    nom: "OUINZOU",
    commune_id: 279,
  },
  {
    quartier_id: 2865,
    nom: "SAOUSSOUDOU",
    commune_id: 279,
  },
  {
    quartier_id: 2866,
    nom: "SIBAMOU",
    commune_id: 279,
  },
  {
    quartier_id: 2867,
    nom: "YAPANGAYE",
    commune_id: 279,
  },
  {
    quartier_id: 2868,
    nom: "DIARAGUERELA",
    commune_id: 280,
  },
  {
    quartier_id: 2869,
    nom: "DOUBADOU",
    commune_id: 280,
  },
  {
    quartier_id: 2870,
    nom: "DOUGBELA",
    commune_id: 280,
  },
  {
    quartier_id: 2871,
    nom: "FEREBORIDOU",
    commune_id: 280,
  },
  {
    quartier_id: 2872,
    nom: "TOUBAKONO",
    commune_id: 280,
  },
  {
    quartier_id: 2873,
    nom: "VAFEREDOU",
    commune_id: 280,
  },
  {
    quartier_id: 2874,
    nom: "BEMBEYA",
    commune_id: 281,
  },
  {
    quartier_id: 2875,
    nom: "DIARRADOU",
    commune_id: 281,
  },
  {
    quartier_id: 2876,
    nom: "DIASSODOU",
    commune_id: 281,
  },
  {
    quartier_id: 2877,
    nom: "SORIBADOU",
    commune_id: 281,
  },
  {
    quartier_id: 2878,
    nom: "TANGODOU",
    commune_id: 281,
  },
  {
    quartier_id: 2879,
    nom: "WANZONA",
    commune_id: 281,
  },
  {
    quartier_id: 2880,
    nom: "ALLAMADOU",
    commune_id: 282,
  },
  {
    quartier_id: 2881,
    nom: "DOUBADOU",
    commune_id: 282,
  },
  {
    quartier_id: 2882,
    nom: "FARABANA",
    commune_id: 282,
  },
  {
    quartier_id: 2883,
    nom: "FOUALAH",
    commune_id: 282,
  },
  {
    quartier_id: 2884,
    nom: "MALLEDOU",
    commune_id: 282,
  },
  {
    quartier_id: 2885,
    nom: "ZOGBODOU",
    commune_id: 282,
  },
  {
    quartier_id: 2886,
    nom: "BROMADOU",
    commune_id: 283,
  },
  {
    quartier_id: 2887,
    nom: "DIAKOFOMODOU",
    commune_id: 283,
  },
  {
    quartier_id: 2888,
    nom: "FOUARO",
    commune_id: 283,
  },
  {
    quartier_id: 2889,
    nom: "GBACKEDOU",
    commune_id: 283,
  },
  {
    quartier_id: 2890,
    nom: "KAFOBARO",
    commune_id: 283,
  },
  {
    quartier_id: 2891,
    nom: "KOUBEDOU",
    commune_id: 283,
  },
  {
    quartier_id: 2892,
    nom: "MISSIBORO",
    commune_id: 283,
  },
  {
    quartier_id: 2893,
    nom: "MORIDOU",
    commune_id: 283,
  },
  {
    quartier_id: 2894,
    nom: "SANGBANDOU",
    commune_id: 283,
  },
  {
    quartier_id: 2895,
    nom: "BIRAMADOU",
    commune_id: 284,
  },
  {
    quartier_id: 2896,
    nom: "BLANGBA",
    commune_id: 284,
  },
  {
    quartier_id: 2897,
    nom: "DJEMENE",
    commune_id: 284,
  },
  {
    quartier_id: 2898,
    nom: "DJIFFA",
    commune_id: 284,
  },
  {
    quartier_id: 2899,
    nom: "FAKOUROUSSO",
    commune_id: 284,
  },
  {
    quartier_id: 2900,
    nom: "FONODOU",
    commune_id: 284,
  },
  {
    quartier_id: 2901,
    nom: "GBESSOBA",
    commune_id: 284,
  },
  {
    quartier_id: 2902,
    nom: "KABADOU",
    commune_id: 284,
  },
  {
    quartier_id: 2903,
    nom: "MANGBA",
    commune_id: 284,
  },
  {
    quartier_id: 2904,
    nom: "SEYA",
    commune_id: 284,
  },
  {
    quartier_id: 2905,
    nom: "TANANTOU",
    commune_id: 284,
  },
  {
    quartier_id: 2906,
    nom: "TINKORO",
    commune_id: 284,
  },
  {
    quartier_id: 2907,
    nom: "DORELA",
    commune_id: 285,
  },
  {
    quartier_id: 2908,
    nom: "GBONA",
    commune_id: 285,
  },
  {
    quartier_id: 2909,
    nom: "KARALA I",
    commune_id: 285,
  },
  {
    quartier_id: 2910,
    nom: "KARALA II",
    commune_id: 285,
  },
  {
    quartier_id: 2911,
    nom: "KOBALA",
    commune_id: 285,
  },
  {
    quartier_id: 2912,
    nom: "WORO",
    commune_id: 285,
  },
  {
    quartier_id: 2913,
    nom: "BELEKOKO",
    commune_id: 286,
  },
  {
    quartier_id: 2914,
    nom: "DJEMOU",
    commune_id: 286,
  },
  {
    quartier_id: 2915,
    nom: "FAMORODOU",
    commune_id: 286,
  },
  {
    quartier_id: 2916,
    nom: "KOUMANDOU CENTRE",
    commune_id: 286,
  },
  {
    quartier_id: 2917,
    nom: "SARAN",
    commune_id: 286,
  },
  {
    quartier_id: 2918,
    nom: "TOGOBALA",
    commune_id: 286,
  },
  {
    quartier_id: 2919,
    nom: "TOUBAKORO",
    commune_id: 286,
  },
  {
    quartier_id: 2920,
    nom: "DIAKORO",
    commune_id: 287,
  },
  {
    quartier_id: 2921,
    nom: "FAMOILA",
    commune_id: 287,
  },
  {
    quartier_id: 2922,
    nom: "FROMARO",
    commune_id: 287,
  },
  {
    quartier_id: 2923,
    nom: "MOUSSADOU CENTRE",
    commune_id: 287,
  },
  {
    quartier_id: 2924,
    nom: "SARABEDOU",
    commune_id: 287,
  },
  {
    quartier_id: 2925,
    nom: "SIDIKIDOU",
    commune_id: 287,
  },
  {
    quartier_id: 2926,
    nom: "SUERO",
    commune_id: 287,
  },
  {
    quartier_id: 2927,
    nom: "WANINO",
    commune_id: 287,
  },
  {
    quartier_id: 2928,
    nom: "KISSIBOULA",
    commune_id: 288,
  },
  {
    quartier_id: 2929,
    nom: "MAFINDOU",
    commune_id: 288,
  },
  {
    quartier_id: 2930,
    nom: "MORIBADOU I",
    commune_id: 288,
  },
  {
    quartier_id: 2931,
    nom: "MORIBADOU II",
    commune_id: 288,
  },
  {
    quartier_id: 2932,
    nom: "NIONSOMORIDOU CENTRE",
    commune_id: 288,
  },
  {
    quartier_id: 2933,
    nom: "SONDOU",
    commune_id: 288,
  },
  {
    quartier_id: 2934,
    nom: "SOSSABA",
    commune_id: 288,
  },
  {
    quartier_id: 2935,
    nom: "TRAORELA",
    commune_id: 288,
  },
  {
    quartier_id: 2936,
    nom: "YENTEDOU",
    commune_id: 288,
  },
  {
    quartier_id: 2937,
    nom: "DJIBADOU",
    commune_id: 289,
  },
  {
    quartier_id: 2938,
    nom: "FAKOUROUDOU",
    commune_id: 289,
  },
  {
    quartier_id: 2939,
    nom: "GNAMANKOUFEREDOU",
    commune_id: 289,
  },
  {
    quartier_id: 2940,
    nom: "KOBALA",
    commune_id: 289,
  },
  {
    quartier_id: 2941,
    nom: "SABOUYA",
    commune_id: 289,
  },
  {
    quartier_id: 2942,
    nom: "SAMANA CENTRE II",
    commune_id: 289,
  },
  {
    quartier_id: 2943,
    nom: "SAMANA I",
    commune_id: 289,
  },
  {
    quartier_id: 2944,
    nom: "SINEDOU",
    commune_id: 289,
  },
  {
    quartier_id: 2945,
    nom: "SOGBORO",
    commune_id: 289,
  },
  {
    quartier_id: 2946,
    nom: "SOKODOU",
    commune_id: 289,
  },
  {
    quartier_id: 2947,
    nom: "TAMANKO",
    commune_id: 289,
  },
  {
    quartier_id: 2948,
    nom: "BELEBORO",
    commune_id: 290,
  },
  {
    quartier_id: 2949,
    nom: "BENGOA",
    commune_id: 290,
  },
  {
    quartier_id: 2950,
    nom: "BIADOU",
    commune_id: 290,
  },
  {
    quartier_id: 2951,
    nom: "BIRAMADOU BADA",
    commune_id: 290,
  },
  {
    quartier_id: 2952,
    nom: "BOKOMESSIN",
    commune_id: 290,
  },
  {
    quartier_id: 2953,
    nom: "BRONKEDOU",
    commune_id: 290,
  },
  {
    quartier_id: 2954,
    nom: "DIANY",
    commune_id: 290,
  },
  {
    quartier_id: 2955,
    nom: "DOUGBE",
    commune_id: 290,
  },
  {
    quartier_id: 2956,
    nom: "HEREMAKONO",
    commune_id: 290,
  },
  {
    quartier_id: 2957,
    nom: "KONELA",
    commune_id: 290,
  },
  {
    quartier_id: 2958,
    nom: "KOULOUNDOU",
    commune_id: 290,
  },
  {
    quartier_id: 2959,
    nom: "LUMUMBA",
    commune_id: 290,
  },
  {
    quartier_id: 2960,
    nom: "M'BALIA",
    commune_id: 290,
  },
  {
    quartier_id: 2961,
    nom: "MOAKO",
    commune_id: 290,
  },
  {
    quartier_id: 2962,
    nom: "N'GOMANDOU",
    commune_id: 290,
  },
  {
    quartier_id: 2963,
    nom: "N'KRUMAH",
    commune_id: 290,
  },
  {
    quartier_id: 2964,
    nom: "NAFAYA",
    commune_id: 290,
  },
  {
    quartier_id: 2965,
    nom: "OUSSOUMORIDOU",
    commune_id: 290,
  },
  {
    quartier_id: 2966,
    nom: "SABOUYA",
    commune_id: 290,
  },
  {
    quartier_id: 2967,
    nom: "SIRYA",
    commune_id: 290,
  },
  {
    quartier_id: 2968,
    nom: "SORIDOU",
    commune_id: 290,
  },
  {
    quartier_id: 2969,
    nom: "SUE",
    commune_id: 290,
  },
  {
    quartier_id: 2970,
    nom: "FOROMARO",
    commune_id: 291,
  },
  {
    quartier_id: 2971,
    nom: "SOKOURALA CENTRE",
    commune_id: 291,
  },
  {
    quartier_id: 2972,
    nom: "TANANTOU",
    commune_id: 291,
  },
  {
    quartier_id: 2973,
    nom: "WOROCIA",
    commune_id: 291,
  },
  {
    quartier_id: 2974,
    nom: "BAFILABEN",
    commune_id: 292,
  },
  {
    quartier_id: 2975,
    nom: "BALLADOU",
    commune_id: 292,
  },
  {
    quartier_id: 2976,
    nom: "BAMBO",
    commune_id: 292,
  },
  {
    quartier_id: 2977,
    nom: "BOYADA",
    commune_id: 292,
  },
  {
    quartier_id: 2978,
    nom: "CARRIERE",
    commune_id: 292,
  },
  {
    quartier_id: 2979,
    nom: "FARAKO",
    commune_id: 292,
  },
  {
    quartier_id: 2980,
    nom: "GBANGBAISSA",
    commune_id: 292,
  },
  {
    quartier_id: 2981,
    nom: "GNALENKO",
    commune_id: 292,
  },
  {
    quartier_id: 2982,
    nom: "GNOUMOULOU",
    commune_id: 292,
  },
  {
    quartier_id: 2983,
    nom: "GUEKEDOU-LELE",
    commune_id: 292,
  },
  {
    quartier_id: 2984,
    nom: "HEREMAKONO",
    commune_id: 292,
  },
  {
    quartier_id: 2985,
    nom: "KANGO",
    commune_id: 292,
  },
  {
    quartier_id: 2986,
    nom: "KIESSANEYE",
    commune_id: 292,
  },
  {
    quartier_id: 2987,
    nom: "MACENTA-KOURA",
    commune_id: 292,
  },
  {
    quartier_id: 2988,
    nom: "MADINA",
    commune_id: 292,
  },
  {
    quartier_id: 2989,
    nom: "MANGALA",
    commune_id: 292,
  },
  {
    quartier_id: 2990,
    nom: "NONGOLO",
    commune_id: 292,
  },
  {
    quartier_id: 2991,
    nom: "SANDIA",
    commune_id: 292,
  },
  {
    quartier_id: 2992,
    nom: "SOKORO",
    commune_id: 292,
  },
  {
    quartier_id: 2993,
    nom: "WAOUTOH",
    commune_id: 292,
  },
  {
    quartier_id: 2994,
    nom: "YENDENIN",
    commune_id: 292,
  },
  {
    quartier_id: 2995,
    nom: "BEDDOU",
    commune_id: 293,
  },
  {
    quartier_id: 2996,
    nom: "BOLODOU",
    commune_id: 293,
  },
  {
    quartier_id: 2997,
    nom: "FAINDOU",
    commune_id: 293,
  },
  {
    quartier_id: 2998,
    nom: "GBANDOU",
    commune_id: 293,
  },
  {
    quartier_id: 2999,
    nom: "KOLEADOU",
    commune_id: 293,
  },
  {
    quartier_id: 3000,
    nom: "KONGOMA",
    commune_id: 293,
  },
  {
    quartier_id: 3001,
    nom: "KONGOTE",
    commune_id: 293,
  },
  {
    quartier_id: 3002,
    nom: "MAFENDOU",
    commune_id: 293,
  },
  {
    quartier_id: 3003,
    nom: "SOUMTOU",
    commune_id: 293,
  },
  {
    quartier_id: 3004,
    nom: "BASSEDOU",
    commune_id: 294,
  },
  {
    quartier_id: 3005,
    nom: "DAKONGO",
    commune_id: 294,
  },
  {
    quartier_id: 3006,
    nom: "FANGAMANDOU",
    commune_id: 294,
  },
  {
    quartier_id: 3007,
    nom: "GBONDOU",
    commune_id: 294,
  },
  {
    quartier_id: 3008,
    nom: "KANGAMA",
    commune_id: 294,
  },
  {
    quartier_id: 3009,
    nom: "KIESSENEYE",
    commune_id: 294,
  },
  {
    quartier_id: 3010,
    nom: "KOONIN",
    commune_id: 294,
  },
  {
    quartier_id: 3011,
    nom: "KOLOMBA",
    commune_id: 294,
  },
  {
    quartier_id: 3012,
    nom: "SOWADOU",
    commune_id: 294,
  },
  {
    quartier_id: 3013,
    nom: "TONGOLO",
    commune_id: 294,
  },
  {
    quartier_id: 3014,
    nom: "YENGUEMA YOMBOU",
    commune_id: 294,
  },
  {
    quartier_id: 3015,
    nom: "BADALA",
    commune_id: 295,
  },
  {
    quartier_id: 3016,
    nom: "BOUKOUSSOU",
    commune_id: 295,
  },
  {
    quartier_id: 3017,
    nom: "DANDOU-BENDOU",
    commune_id: 295,
  },
  {
    quartier_id: 3018,
    nom: "FERO SAYANIN",
    commune_id: 295,
  },
  {
    quartier_id: 3019,
    nom: "GUELO",
    commune_id: 295,
  },
  {
    quartier_id: 3020,
    nom: "GUEMALO",
    commune_id: 295,
  },
  {
    quartier_id: 3021,
    nom: "GUENDEMBOU",
    commune_id: 295,
  },
  {
    quartier_id: 3022,
    nom: "KAT-KAMA",
    commune_id: 295,
  },
  {
    quartier_id: 3023,
    nom: "KIESSENEYE",
    commune_id: 295,
  },
  {
    quartier_id: 3024,
    nom: "KRIGBEMA",
    commune_id: 295,
  },
  {
    quartier_id: 3025,
    nom: "SANGBAWALY",
    commune_id: 295,
  },
  {
    quartier_id: 3026,
    nom: "BANDADOU",
    commune_id: 296,
  },
  {
    quartier_id: 3027,
    nom: "FARAWANDOU",
    commune_id: 296,
  },
  {
    quartier_id: 3028,
    nom: "KOINDOU",
    commune_id: 296,
  },
  {
    quartier_id: 3029,
    nom: "KASSADOU CENTRE",
    commune_id: 296,
  },
  {
    quartier_id: 3030,
    nom: "KOLONKALA",
    commune_id: 296,
  },
  {
    quartier_id: 3031,
    nom: "KOUNTE",
    commune_id: 296,
  },
  {
    quartier_id: 3032,
    nom: "LELESSA",
    commune_id: 296,
  },
  {
    quartier_id: 3033,
    nom: "OULAKO",
    commune_id: 296,
  },
  {
    quartier_id: 3034,
    nom: "SEREDOU",
    commune_id: 296,
  },
  {
    quartier_id: 3035,
    nom: "TEMESSADOU",
    commune_id: 296,
  },
  {
    quartier_id: 3036,
    nom: "TOUMANDOU",
    commune_id: 296,
  },
  {
    quartier_id: 3037,
    nom: "YOMADOU",
    commune_id: 296,
  },
  {
    quartier_id: 3038,
    nom: "BALLADOU-PEBAL",
    commune_id: 297,
  },
  {
    quartier_id: 3039,
    nom: "DANDOU",
    commune_id: 297,
  },
  {
    quartier_id: 3040,
    nom: "FOEDOU KOLLET",
    commune_id: 297,
  },
  {
    quartier_id: 3041,
    nom: "KOUNDOU I",
    commune_id: 297,
  },
  {
    quartier_id: 3042,
    nom: "KOUNDOU II",
    commune_id: 297,
  },
  {
    quartier_id: 3043,
    nom: "LENGO",
    commune_id: 297,
  },
  {
    quartier_id: 3044,
    nom: "SANGUEDOU",
    commune_id: 297,
  },
  {
    quartier_id: 3045,
    nom: "SOFEDOU-KAMBADOU",
    commune_id: 297,
  },
  {
    quartier_id: 3046,
    nom: "TANGOLO",
    commune_id: 297,
  },
  {
    quartier_id: 3047,
    nom: "TEMESSADOU-LENGOBENGOU",
    commune_id: 297,
  },
  {
    quartier_id: 3048,
    nom: "TEMESSADOU M'BOKET",
    commune_id: 297,
  },
  {
    quartier_id: 3049,
    nom: "YENDE-BAWA",
    commune_id: 297,
  },
  {
    quartier_id: 3050,
    nom: "KOLIAN",
    commune_id: 298,
  },
  {
    quartier_id: 3051,
    nom: "KOLIGNINDO",
    commune_id: 298,
  },
  {
    quartier_id: 3052,
    nom: "NONGOA",
    commune_id: 298,
  },
  {
    quartier_id: 3053,
    nom: "OULADIN",
    commune_id: 298,
  },
  {
    quartier_id: 3054,
    nom: "TAMANDOU",
    commune_id: 298,
  },
  {
    quartier_id: 3055,
    nom: "BAWA",
    commune_id: 299,
  },
  {
    quartier_id: 3056,
    nom: "BEINDOU",
    commune_id: 299,
  },
  {
    quartier_id: 3057,
    nom: "BOUMBOUKORO",
    commune_id: 299,
  },
  {
    quartier_id: 3058,
    nom: "DENGUEDOU",
    commune_id: 299,
  },
  {
    quartier_id: 3059,
    nom: "DOGBODOU",
    commune_id: 299,
  },
  {
    quartier_id: 3060,
    nom: "KENEMA",
    commune_id: 299,
  },
  {
    quartier_id: 3061,
    nom: "KOLOUADOU",
    commune_id: 299,
  },
  {
    quartier_id: 3062,
    nom: "KOUNDOU-TOH",
    commune_id: 299,
  },
  {
    quartier_id: 3063,
    nom: "N'GOUAHOU",
    commune_id: 299,
  },
  {
    quartier_id: 3064,
    nom: "OWET-DJIBA",
    commune_id: 299,
  },
  {
    quartier_id: 3065,
    nom: "WOUNDEDOU",
    commune_id: 299,
  },
  {
    quartier_id: 3066,
    nom: "BAKAMA-LELA",
    commune_id: 300,
  },
  {
    quartier_id: 3067,
    nom: "BAWA",
    commune_id: 300,
  },
  {
    quartier_id: 3068,
    nom: "KOLLE-BARRET",
    commune_id: 300,
  },
  {
    quartier_id: 3069,
    nom: "KONDEMBADOU",
    commune_id: 300,
  },
  {
    quartier_id: 3070,
    nom: "KOUELDOU",
    commune_id: 300,
  },
  {
    quartier_id: 3071,
    nom: "MASSABANGA",
    commune_id: 300,
  },
  {
    quartier_id: 3072,
    nom: "NEMIA-TOLY",
    commune_id: 300,
  },
  {
    quartier_id: 3073,
    nom: "OWET-KAMA",
    commune_id: 300,
  },
  {
    quartier_id: 3074,
    nom: "SASSAMA-KAMA",
    commune_id: 300,
  },
  {
    quartier_id: 3075,
    nom: "TALLO-BENGOU",
    commune_id: 300,
  },
  {
    quartier_id: 3076,
    nom: "TEKOULO",
    commune_id: 300,
  },
  {
    quartier_id: 3077,
    nom: "TOLY-SOKA",
    commune_id: 300,
  },
  {
    quartier_id: 3078,
    nom: "WABENGOU",
    commune_id: 300,
  },
  {
    quartier_id: 3079,
    nom: "YARADOUKONGONANNY",
    commune_id: 300,
  },
  {
    quartier_id: 3080,
    nom: "BAGBE-DAYE",
    commune_id: 301,
  },
  {
    quartier_id: 3081,
    nom: "BANDALO-KILAKA",
    commune_id: 301,
  },
  {
    quartier_id: 3082,
    nom: "BEINDOU-BOODOU",
    commune_id: 301,
  },
  {
    quartier_id: 3083,
    nom: "KINDIA",
    commune_id: 301,
  },
  {
    quartier_id: 3084,
    nom: "KOUAKORO",
    commune_id: 301,
  },
  {
    quartier_id: 3085,
    nom: "LEWA-MAMADOU",
    commune_id: 301,
  },
  {
    quartier_id: 3086,
    nom: "MONGO",
    commune_id: 301,
  },
  {
    quartier_id: 3087,
    nom: "TEMMESSADOU",
    commune_id: 301,
  },
  {
    quartier_id: 3088,
    nom: "YARADOU-KAO",
    commune_id: 301,
  },
  {
    quartier_id: 3089,
    nom: "YOMADOUKOUNDOUFAMA",
    commune_id: 301,
  },
  {
    quartier_id: 3090,
    nom: "BALEMOU",
    commune_id: 302,
  },
  {
    quartier_id: 3091,
    nom: "FLAYAPO",
    commune_id: 302,
  },
  {
    quartier_id: 3092,
    nom: "GAMA KONIKONI",
    commune_id: 302,
  },
  {
    quartier_id: 3093,
    nom: "GAMA YALE",
    commune_id: 302,
  },
  {
    quartier_id: 3094,
    nom: "GBECKE",
    commune_id: 302,
  },
  {
    quartier_id: 3095,
    nom: "GOGOTA I",
    commune_id: 302,
  },
  {
    quartier_id: 3096,
    nom: "GOH",
    commune_id: 302,
  },
  {
    quartier_id: 3097,
    nom: "GOTEKOLY",
    commune_id: 302,
  },
  {
    quartier_id: 3098,
    nom: "HOMIAKOLY I",
    commune_id: 302,
  },
  {
    quartier_id: 3099,
    nom: "HOMIAKOLY II",
    commune_id: 302,
  },
  {
    quartier_id: 3100,
    nom: "KPELEKOLY",
    commune_id: 302,
  },
  {
    quartier_id: 3101,
    nom: "LOMOU",
    commune_id: 302,
  },
  {
    quartier_id: 3102,
    nom: "MAGHAN MO",
    commune_id: 302,
  },
  {
    quartier_id: 3103,
    nom: "N'ZON",
    commune_id: 302,
  },
  {
    quartier_id: 3104,
    nom: "SOUOWALAKOLY I",
    commune_id: 302,
  },
  {
    quartier_id: 3105,
    nom: "SOUOWALAKOLY II",
    commune_id: 302,
  },
  {
    quartier_id: 3106,
    nom: "TIETA",
    commune_id: 302,
  },
  {
    quartier_id: 3107,
    nom: "TIGHEN-MO I",
    commune_id: 302,
  },
  {
    quartier_id: 3108,
    nom: "TIGHEN-MO II",
    commune_id: 302,
  },
  {
    quartier_id: 3109,
    nom: "TOKPANATA",
    commune_id: 302,
  },
  {
    quartier_id: 3110,
    nom: "WEYAKORE",
    commune_id: 302,
  },
  {
    quartier_id: 3111,
    nom: "WOROYA-PO",
    commune_id: 302,
  },
  {
    quartier_id: 3112,
    nom: "ZOUGOUETA I",
    commune_id: 302,
  },
  {
    quartier_id: 3113,
    nom: "ZOUGOUETA II",
    commune_id: 302,
  },
  {
    quartier_id: 3114,
    nom: "BOSSOU CENTRE",
    commune_id: 303,
  },
  {
    quartier_id: 3115,
    nom: "GBAH",
    commune_id: 303,
  },
  {
    quartier_id: 3116,
    nom: "GBENEMOU",
    commune_id: 303,
  },
  {
    quartier_id: 3117,
    nom: "SERENGBARA",
    commune_id: 303,
  },
  {
    quartier_id: 3118,
    nom: "SOROMIATA I",
    commune_id: 303,
  },
  {
    quartier_id: 3119,
    nom: "SOROMIATA II",
    commune_id: 303,
  },
  {
    quartier_id: 3120,
    nom: "THIASSOU",
    commune_id: 303,
  },
  {
    quartier_id: 3121,
    nom: "THUO",
    commune_id: 303,
  },
  {
    quartier_id: 3122,
    nom: "FABORIDOU",
    commune_id: 304,
  },
  {
    quartier_id: 3123,
    nom: "FAKROUDOUBA",
    commune_id: 304,
  },
  {
    quartier_id: 3124,
    nom: "FOUMBADOU I",
    commune_id: 304,
  },
  {
    quartier_id: 3125,
    nom: "FOUMBADOU II",
    commune_id: 304,
  },
  {
    quartier_id: 3126,
    nom: "MANANKO",
    commune_id: 304,
  },
  {
    quartier_id: 3127,
    nom: "MANASSOBA",
    commune_id: 304,
  },
  {
    quartier_id: 3128,
    nom: "MORIGBEDOU",
    commune_id: 304,
  },
  {
    quartier_id: 3129,
    nom: "VAMORODOU",
    commune_id: 304,
  },
  {
    quartier_id: 3130,
    nom: "FANGA",
    commune_id: 305,
  },
  {
    quartier_id: 3131,
    nom: "GAMA BEREMA CENTRE  I",
    commune_id: 305,
  },
  {
    quartier_id: 3132,
    nom: "GAMA BEREMA CENTRE II",
    commune_id: 305,
  },
  {
    quartier_id: 3133,
    nom: "GBAATA",
    commune_id: 305,
  },
  {
    quartier_id: 3134,
    nom: "GUELEMATA",
    commune_id: 305,
  },
  {
    quartier_id: 3135,
    nom: "KASSIETA",
    commune_id: 305,
  },
  {
    quartier_id: 3136,
    nom: "PINE",
    commune_id: 305,
  },
  {
    quartier_id: 3137,
    nom: "GARASSOU",
    commune_id: 306,
  },
  {
    quartier_id: 3138,
    nom: "GBOTORO",
    commune_id: 306,
  },
  {
    quartier_id: 3139,
    nom: "GONOTA",
    commune_id: 306,
  },
  {
    quartier_id: 3140,
    nom: "GUEASSO CENTRE  I",
    commune_id: 306,
  },
  {
    quartier_id: 3141,
    nom: "GUEASSO CENTRE II",
    commune_id: 306,
  },
  {
    quartier_id: 3142,
    nom: "MORIBADOU",
    commune_id: 306,
  },
  {
    quartier_id: 3143,
    nom: "TONO",
    commune_id: 306,
  },
  {
    quartier_id: 3144,
    nom: "ZESSOU",
    commune_id: 306,
  },
  {
    quartier_id: 3145,
    nom: "DIAWASSOU",
    commune_id: 307,
  },
  {
    quartier_id: 3146,
    nom: "DOULOUBA",
    commune_id: 307,
  },
  {
    quartier_id: 3147,
    nom: "GOBOUTA",
    commune_id: 307,
  },
  {
    quartier_id: 3148,
    nom: "KANI",
    commune_id: 307,
  },
  {
    quartier_id: 3149,
    nom: "KEOULENTA",
    commune_id: 307,
  },
  {
    quartier_id: 3150,
    nom: "KOKOTA",
    commune_id: 307,
  },
  {
    quartier_id: 3151,
    nom: "LEAPELETA",
    commune_id: 307,
  },
  {
    quartier_id: 3152,
    nom: "YENETA",
    commune_id: 307,
  },
  {
    quartier_id: 3153,
    nom: "DEEN",
    commune_id: 308,
  },
  {
    quartier_id: 3154,
    nom: "DIDITA",
    commune_id: 308,
  },
  {
    quartier_id: 3155,
    nom: "KENIENTA",
    commune_id: 308,
  },
  {
    quartier_id: 3156,
    nom: "KOLATA",
    commune_id: 308,
  },
  {
    quartier_id: 3157,
    nom: "LAINE CENTRE I",
    commune_id: 308,
  },
  {
    quartier_id: 3158,
    nom: "LAINE CENTRE II",
    commune_id: 308,
  },
  {
    quartier_id: 3159,
    nom: "YOKPOTA",
    commune_id: 308,
  },
  {
    quartier_id: 3160,
    nom: "DOROMOU",
    commune_id: 309,
  },
  {
    quartier_id: 3161,
    nom: "GAAH",
    commune_id: 309,
  },
  {
    quartier_id: 3162,
    nom: "GBAKORE",
    commune_id: 309,
  },
  {
    quartier_id: 3163,
    nom: "KEOULENTA",
    commune_id: 309,
  },
  {
    quartier_id: 3164,
    nom: "N'ZOO CENTRE I",
    commune_id: 309,
  },
  {
    quartier_id: 3165,
    nom: "N'ZOO CENTRE II",
    commune_id: 309,
  },
  {
    quartier_id: 3166,
    nom: "BOUZOUTA",
    commune_id: 310,
  },
  {
    quartier_id: 3167,
    nom: "IRO",
    commune_id: 310,
  },
  {
    quartier_id: 3168,
    nom: "KOGOTA",
    commune_id: 310,
  },
  {
    quartier_id: 3169,
    nom: "KPINITA",
    commune_id: 310,
  },
  {
    quartier_id: 3170,
    nom: "TOUNKARATA",
    commune_id: 310,
  },
  {
    quartier_id: 3171,
    nom: "BAMALA",
    commune_id: 311,
  },
  {
    quartier_id: 3172,
    nom: "BANIZE",
    commune_id: 311,
  },
  {
    quartier_id: 3173,
    nom: "BOKONY",
    commune_id: 311,
  },
  {
    quartier_id: 3174,
    nom: "BONGOMADOU",
    commune_id: 311,
  },
  {
    quartier_id: 3175,
    nom: "BOUZIE",
    commune_id: 311,
  },
  {
    quartier_id: 3176,
    nom: "BOWA I",
    commune_id: 311,
  },
  {
    quartier_id: 3177,
    nom: "BOWA II",
    commune_id: 311,
  },
  {
    quartier_id: 3178,
    nom: "GNOUMAMORIDOU",
    commune_id: 311,
  },
  {
    quartier_id: 3179,
    nom: "HEREMAKONO",
    commune_id: 311,
  },
  {
    quartier_id: 3180,
    nom: "KAMADOU CITE",
    commune_id: 311,
  },
  {
    quartier_id: 3181,
    nom: "KAMADOU KOURA",
    commune_id: 311,
  },
  {
    quartier_id: 3182,
    nom: "KOLAKODOU",
    commune_id: 311,
  },
  {
    quartier_id: 3183,
    nom: "KPOKOLOFASSAMA",
    commune_id: 311,
  },
  {
    quartier_id: 3184,
    nom: "MACENTA KOURA",
    commune_id: 311,
  },
  {
    quartier_id: 3185,
    nom: "MADINA",
    commune_id: 311,
  },
  {
    quartier_id: 3186,
    nom: "MOHAMED 5",
    commune_id: 311,
  },
  {
    quartier_id: 3187,
    nom: "MOINLAMINIDOU",
    commune_id: 311,
  },
  {
    quartier_id: 3188,
    nom: "NYANVALAZOU",
    commune_id: 311,
  },
  {
    quartier_id: 3189,
    nom: "PATRICE",
    commune_id: 311,
  },
  {
    quartier_id: 3190,
    nom: "ZEZE BOKONY",
    commune_id: 311,
  },
  {
    quartier_id: 3191,
    nom: "BALIZIA",
    commune_id: 312,
  },
  {
    quartier_id: 3192,
    nom: "BEZEREGA",
    commune_id: 312,
  },
  {
    quartier_id: 3193,
    nom: "DIGUILAZOU",
    commune_id: 312,
  },
  {
    quartier_id: 3194,
    nom: "KOLOUMA",
    commune_id: 312,
  },
  {
    quartier_id: 3195,
    nom: "KOTIDOU",
    commune_id: 312,
  },
  {
    quartier_id: 3196,
    nom: "LASSAOU",
    commune_id: 312,
  },
  {
    quartier_id: 3197,
    nom: "MASSAME",
    commune_id: 312,
  },
  {
    quartier_id: 3198,
    nom: "PASSIMA",
    commune_id: 312,
  },
  {
    quartier_id: 3199,
    nom: "ROUEZOU",
    commune_id: 312,
  },
  {
    quartier_id: 3200,
    nom: "SANGASSOU",
    commune_id: 312,
  },
  {
    quartier_id: 3201,
    nom: "VOLOA",
    commune_id: 312,
  },
  {
    quartier_id: 3202,
    nom: "ZARABOROZOU",
    commune_id: 312,
  },
  {
    quartier_id: 3203,
    nom: "ZIPOVAIZEA",
    commune_id: 312,
  },
  {
    quartier_id: 3204,
    nom: "BINIKALA CENTRE",
    commune_id: 313,
  },
  {
    quartier_id: 3205,
    nom: "DIODOU",
    commune_id: 313,
  },
  {
    quartier_id: 3206,
    nom: "GOHOMAI",
    commune_id: 313,
  },
  {
    quartier_id: 3207,
    nom: "KONESSERIDOU",
    commune_id: 313,
  },
  {
    quartier_id: 3208,
    nom: "KPAVELEGBAOU",
    commune_id: 313,
  },
  {
    quartier_id: 3209,
    nom: "LEMENESSOU",
    commune_id: 313,
  },
  {
    quartier_id: 3210,
    nom: "NIESSOU",
    commune_id: 313,
  },
  {
    quartier_id: 3211,
    nom: "SAMPORIA",
    commune_id: 313,
  },
  {
    quartier_id: 3212,
    nom: "SOUAMAI",
    commune_id: 313,
  },
  {
    quartier_id: 3213,
    nom: "BOFOSSOU CENTRE",
    commune_id: 314,
  },
  {
    quartier_id: 3214,
    nom: "DOIZEA",
    commune_id: 314,
  },
  {
    quartier_id: 3215,
    nom: "GBELELAZOU",
    commune_id: 314,
  },
  {
    quartier_id: 3216,
    nom: "KPOVOOLAOU",
    commune_id: 314,
  },
  {
    quartier_id: 3217,
    nom: "NYANGUEZAZOU",
    commune_id: 314,
  },
  {
    quartier_id: 3218,
    nom: "OZAOLAZOU",
    commune_id: 314,
  },
  {
    quartier_id: 3219,
    nom: "SOVAOU",
    commune_id: 314,
  },
  {
    quartier_id: 3220,
    nom: "ZIPOIZEBA",
    commune_id: 314,
  },
  {
    quartier_id: 3221,
    nom: "BADIARO",
    commune_id: 315,
  },
  {
    quartier_id: 3222,
    nom: "DARO CENTRE",
    commune_id: 315,
  },
  {
    quartier_id: 3223,
    nom: "DELEOU",
    commune_id: 315,
  },
  {
    quartier_id: 3224,
    nom: "DIOMANDOU",
    commune_id: 315,
  },
  {
    quartier_id: 3225,
    nom: "DOUSSOUYARADOU",
    commune_id: 315,
  },
  {
    quartier_id: 3226,
    nom: "FOLOOU",
    commune_id: 315,
  },
  {
    quartier_id: 3227,
    nom: "KARO",
    commune_id: 315,
  },
  {
    quartier_id: 3228,
    nom: "KOMODOU",
    commune_id: 315,
  },
  {
    quartier_id: 3229,
    nom: "KOTIZOU",
    commune_id: 315,
  },
  {
    quartier_id: 3230,
    nom: "KOVELEDOU",
    commune_id: 315,
  },
  {
    quartier_id: 3231,
    nom: "KPANDEWALADOU",
    commune_id: 315,
  },
  {
    quartier_id: 3232,
    nom: "PAZIAZOU",
    commune_id: 315,
  },
  {
    quartier_id: 3233,
    nom: "SAKPAOU",
    commune_id: 315,
  },
  {
    quartier_id: 3234,
    nom: "SENGBEDOU I",
    commune_id: 315,
  },
  {
    quartier_id: 3235,
    nom: "FASSANKONI CENTRE",
    commune_id: 316,
  },
  {
    quartier_id: 3236,
    nom: "ZINIGOROZOU",
    commune_id: 316,
  },
  {
    quartier_id: 3237,
    nom: "NOBOROTONO",
    commune_id: 316,
  },
  {
    quartier_id: 3238,
    nom: "ZINIGOROZOU",
    commune_id: 316,
  },
  {
    quartier_id: 3239,
    nom: "YEZOU",
    commune_id: 316,
  },
  {
    quartier_id: 3240,
    nom: "ZINIGOROZOU",
    commune_id: 316,
  },
  {
    quartier_id: 3241,
    nom: "BANKO",
    commune_id: 317,
  },
  {
    quartier_id: 3242,
    nom: "BONODOU",
    commune_id: 317,
  },
  {
    quartier_id: 3243,
    nom: "DANDANO I",
    commune_id: 317,
  },
  {
    quartier_id: 3244,
    nom: "DANDANO II",
    commune_id: 317,
  },
  {
    quartier_id: 3245,
    nom: "GOBOELA",
    commune_id: 317,
  },
  {
    quartier_id: 3246,
    nom: "KAMENA",
    commune_id: 317,
  },
  {
    quartier_id: 3247,
    nom: "KORELA",
    commune_id: 317,
  },
  {
    quartier_id: 3248,
    nom: "KOUANKAN I",
    commune_id: 317,
  },
  {
    quartier_id: 3249,
    nom: "KOUANKAN II",
    commune_id: 317,
  },
  {
    quartier_id: 3250,
    nom: "SAKOEDOU",
    commune_id: 317,
  },
  {
    quartier_id: 3251,
    nom: "BODEIZIA",
    commune_id: 318,
  },
  {
    quartier_id: 3252,
    nom: "BREBEZOU",
    commune_id: 318,
  },
  {
    quartier_id: 3253,
    nom: "BREBEZOU",
    commune_id: 318,
  },
  {
    quartier_id: 3254,
    nom: "KOYAMAH I",
    commune_id: 318,
  },
  {
    quartier_id: 3255,
    nom: "KOYAMAH II",
    commune_id: 318,
  },
  {
    quartier_id: 3256,
    nom: "LOOH",
    commune_id: 318,
  },
  {
    quartier_id: 3257,
    nom: "LOKPOOU",
    commune_id: 318,
  },
  {
    quartier_id: 3258,
    nom: "N'ZAPPAH I",
    commune_id: 318,
  },
  {
    quartier_id: 3259,
    nom: "N'ZAPPAH II",
    commune_id: 318,
  },
  {
    quartier_id: 3260,
    nom: "ORIGUIZEZOU",
    commune_id: 318,
  },
  {
    quartier_id: 3261,
    nom: "OULIMAI",
    commune_id: 318,
  },
  {
    quartier_id: 3262,
    nom: "ZATIOULA",
    commune_id: 318,
  },
  {
    quartier_id: 3263,
    nom: "OULIMAI",
    commune_id: 318,
  },
  {
    quartier_id: 3264,
    nom: "ZOUE",
    commune_id: 318,
  },
  {
    quartier_id: 3265,
    nom: "BALAGOLAYE",
    commune_id: 319,
  },
  {
    quartier_id: 3266,
    nom: "BAYAMAH",
    commune_id: 319,
  },
  {
    quartier_id: 3267,
    nom: "DOUMOU",
    commune_id: 319,
  },
  {
    quartier_id: 3268,
    nom: "N'ZEBELA CENTRE",
    commune_id: 319,
  },
  {
    quartier_id: 3269,
    nom: "OYAFERO",
    commune_id: 319,
  },
  {
    quartier_id: 3270,
    nom: "SIBATA I",
    commune_id: 319,
  },
  {
    quartier_id: 3271,
    nom: "SILISSOU",
    commune_id: 319,
  },
  {
    quartier_id: 3272,
    nom: "DIOMAI",
    commune_id: 320,
  },
  {
    quartier_id: 3273,
    nom: "KASSANKA",
    commune_id: 320,
  },
  {
    quartier_id: 3274,
    nom: "OREMAI CENTRE",
    commune_id: 320,
  },
  {
    quartier_id: 3275,
    nom: "SEDIMAI",
    commune_id: 320,
  },
  {
    quartier_id: 3276,
    nom: "ZOBROMA",
    commune_id: 320,
  },
  {
    quartier_id: 3277,
    nom: "BAKAMA",
    commune_id: 321,
  },
  {
    quartier_id: 3278,
    nom: "BOVOGUIZEZOU",
    commune_id: 321,
  },
  {
    quartier_id: 3279,
    nom: "GOZOMBOU",
    commune_id: 321,
  },
  {
    quartier_id: 3280,
    nom: "GUILAOTAZOU",
    commune_id: 321,
  },
  {
    quartier_id: 3281,
    nom: "LOUYAZOU",
    commune_id: 321,
  },
  {
    quartier_id: 3282,
    nom: "PANZIAZOU CENTRE",
    commune_id: 321,
  },
  {
    quartier_id: 3283,
    nom: "TAOULELA",
    commune_id: 321,
  },
  {
    quartier_id: 3284,
    nom: "ZEMBEZOU",
    commune_id: 321,
  },
  {
    quartier_id: 3285,
    nom: "ZIAOUVASSAMA",
    commune_id: 321,
  },
  {
    quartier_id: 3286,
    nom: "ZOULAKORO",
    commune_id: 321,
  },
  {
    quartier_id: 3287,
    nom: "FELEWALA",
    commune_id: 322,
  },
  {
    quartier_id: 3288,
    nom: "GBOKORODOU",
    commune_id: 322,
  },
  {
    quartier_id: 3289,
    nom: "MAKABALADOU",
    commune_id: 322,
  },
  {
    quartier_id: 3290,
    nom: "N'ZOYARO",
    commune_id: 322,
  },
  {
    quartier_id: 3291,
    nom: "NIALESSOU",
    commune_id: 322,
  },
  {
    quartier_id: 3292,
    nom: "SANGLOMAI",
    commune_id: 322,
  },
  {
    quartier_id: 3293,
    nom: "SENGBEDOU",
    commune_id: 322,
  },
  {
    quartier_id: 3294,
    nom: "SIEDOU",
    commune_id: 322,
  },
  {
    quartier_id: 3295,
    nom: "AVILISSOU",
    commune_id: 323,
  },
  {
    quartier_id: 3296,
    nom: "BALOMA",
    commune_id: 323,
  },
  {
    quartier_id: 3297,
    nom: "BOO",
    commune_id: 323,
  },
  {
    quartier_id: 3298,
    nom: "BOUSSEDOU",
    commune_id: 323,
  },
  {
    quartier_id: 3299,
    nom: "IRIE",
    commune_id: 323,
  },
  {
    quartier_id: 3300,
    nom: "KOIMA",
    commune_id: 323,
  },
  {
    quartier_id: 3301,
    nom: "SEREDOU I",
    commune_id: 323,
  },
  {
    quartier_id: 3302,
    nom: "SEREDOU II",
    commune_id: 323,
  },
  {
    quartier_id: 3303,
    nom: "BROGNADOU",
    commune_id: 324,
  },
  {
    quartier_id: 3304,
    nom: "KABAKORO",
    commune_id: 324,
  },
  {
    quartier_id: 3305,
    nom: "KOULODOU",
    commune_id: 324,
  },
  {
    quartier_id: 3306,
    nom: "VASSERIDOU CENTRE",
    commune_id: 324,
  },
  {
    quartier_id: 3307,
    nom: "WAMADOU",
    commune_id: 324,
  },
  {
    quartier_id: 3308,
    nom: "AOLAZOU",
    commune_id: 325,
  },
  {
    quartier_id: 3309,
    nom: "BOTEMA",
    commune_id: 325,
  },
  {
    quartier_id: 3310,
    nom: "GOYALA",
    commune_id: 325,
  },
  {
    quartier_id: 3311,
    nom: "KOBALAWA",
    commune_id: 325,
  },
  {
    quartier_id: 3312,
    nom: "KOZEZOU",
    commune_id: 325,
  },
  {
    quartier_id: 3313,
    nom: "SOGOLOOU",
    commune_id: 325,
  },
  {
    quartier_id: 3314,
    nom: "VASSAIZIAZOU",
    commune_id: 325,
  },
  {
    quartier_id: 3315,
    nom: "WATANKA",
    commune_id: 325,
  },
  {
    quartier_id: 3316,
    nom: "BELLE VUE",
    commune_id: 326,
  },
  {
    quartier_id: 3317,
    nom: "COMMERCIAL",
    commune_id: 326,
  },
  {
    quartier_id: 3318,
    nom: "DOROTA I",
    commune_id: 326,
  },
  {
    quartier_id: 3319,
    nom: "DOROTA II",
    commune_id: 326,
  },
  {
    quartier_id: 3320,
    nom: "GBANGHANA",
    commune_id: 326,
  },
  {
    quartier_id: 3321,
    nom: "GONIA I",
    commune_id: 326,
  },
  {
    quartier_id: 3322,
    nom: "GONIA II",
    commune_id: 326,
  },
  {
    quartier_id: 3323,
    nom: "GONIA III",
    commune_id: 326,
  },
  {
    quartier_id: 3324,
    nom: "HOROYA I",
    commune_id: 326,
  },
  {
    quartier_id: 3325,
    nom: "HOROYA II",
    commune_id: 326,
  },
  {
    quartier_id: 3326,
    nom: "KOLEYEBA",
    commune_id: 326,
  },
  {
    quartier_id: 3327,
    nom: "KPOYEBA",
    commune_id: 326,
  },
  {
    quartier_id: 3328,
    nom: "KWITEYAPOULOU",
    commune_id: 326,
  },
  {
    quartier_id: 3329,
    nom: "MOHOMOU",
    commune_id: 326,
  },
  {
    quartier_id: 3330,
    nom: "NAKOYAKPALA",
    commune_id: 326,
  },
  {
    quartier_id: 3331,
    nom: "NYENH I",
    commune_id: 326,
  },
  {
    quartier_id: 3332,
    nom: "NYENH II",
    commune_id: 326,
  },
  {
    quartier_id: 3333,
    nom: "SOKOURA I",
    commune_id: 326,
  },
  {
    quartier_id: 3334,
    nom: "SOKOURA II",
    commune_id: 326,
  },
  {
    quartier_id: 3335,
    nom: "TILEPOULOU",
    commune_id: 326,
  },
  {
    quartier_id: 3336,
    nom: "WESSOUA",
    commune_id: 326,
  },
  {
    quartier_id: 3337,
    nom: "N'ZEBELA TOGBA",
    commune_id: 326,
  },
  {
    quartier_id: 3338,
    nom: "BOUNOUMA",
    commune_id: 327,
  },
  {
    quartier_id: 3339,
    nom: "DOURAPA",
    commune_id: 327,
  },
  {
    quartier_id: 3340,
    nom: "GBELEYE",
    commune_id: 327,
  },
  {
    quartier_id: 3341,
    nom: "GONON",
    commune_id: 327,
  },
  {
    quartier_id: 3342,
    nom: "GOSSOPA",
    commune_id: 327,
  },
  {
    quartier_id: 3343,
    nom: "KANKORE",
    commune_id: 327,
  },
  {
    quartier_id: 3344,
    nom: "KEREMA",
    commune_id: 327,
  },
  {
    quartier_id: 3345,
    nom: "KPAO",
    commune_id: 327,
  },
  {
    quartier_id: 3346,
    nom: "PELEDEYE",
    commune_id: 327,
  },
  {
    quartier_id: 3347,
    nom: "TEYEHON",
    commune_id: 327,
  },
  {
    quartier_id: 3348,
    nom: "BANZOU-NORD",
    commune_id: 328,
  },
  {
    quartier_id: 3349,
    nom: "CEOBA",
    commune_id: 328,
  },
  {
    quartier_id: 3350,
    nom: "GBAHAYE",
    commune_id: 328,
  },
  {
    quartier_id: 3351,
    nom: "KEAYEBA",
    commune_id: 328,
  },
  {
    quartier_id: 3352,
    nom: "NONA",
    commune_id: 328,
  },
  {
    quartier_id: 3353,
    nom: "TAKOLETA",
    commune_id: 328,
  },
  {
    quartier_id: 3354,
    nom: "TAMOE",
    commune_id: 328,
  },
  {
    quartier_id: 3355,
    nom: "VAKAMOTA-SAGNO",
    commune_id: 328,
  },
  {
    quartier_id: 3356,
    nom: "KOBELA I",
    commune_id: 329,
  },
  {
    quartier_id: 3357,
    nom: "KOBELA II",
    commune_id: 329,
  },
  {
    quartier_id: 3358,
    nom: "KONIPARA",
    commune_id: 329,
  },
  {
    quartier_id: 3359,
    nom: "MAOUON",
    commune_id: 329,
  },
  {
    quartier_id: 3360,
    nom: "NIENH",
    commune_id: 329,
  },
  {
    quartier_id: 3361,
    nom: "ZOWOTA",
    commune_id: 329,
  },
  {
    quartier_id: 3362,
    nom: "BOMA NORD",
    commune_id: 330,
  },
  {
    quartier_id: 3363,
    nom: "GOUNAGALAYE",
    commune_id: 330,
  },
  {
    quartier_id: 3364,
    nom: "KOROH",
    commune_id: 330,
  },
  {
    quartier_id: 3365,
    nom: "KOLIWATA",
    commune_id: 330,
  },
  {
    quartier_id: 3366,
    nom: "KONI",
    commune_id: 330,
  },
  {
    quartier_id: 3367,
    nom: "KOROPARA",
    commune_id: 330,
  },
  {
    quartier_id: 3368,
    nom: "LOMOU",
    commune_id: 330,
  },
  {
    quartier_id: 3369,
    nom: "MAKPOZOU",
    commune_id: 330,
  },
  {
    quartier_id: 3370,
    nom: "NIEMA-NORD",
    commune_id: 330,
  },
  {
    quartier_id: 3371,
    nom: "KEREMANDA",
    commune_id: 331,
  },
  {
    quartier_id: 3372,
    nom: "KEREZAGAYE",
    commune_id: 331,
  },
  {
    quartier_id: 3373,
    nom: "KOULE I",
    commune_id: 331,
  },
  {
    quartier_id: 3374,
    nom: "KOULE II",
    commune_id: 331,
  },
  {
    quartier_id: 3375,
    nom: "KPAYE",
    commune_id: 331,
  },
  {
    quartier_id: 3376,
    nom: "PAMPARA",
    commune_id: 331,
  },
  {
    quartier_id: 3377,
    nom: "PAMPORE",
    commune_id: 331,
  },
  {
    quartier_id: 3378,
    nom: "GBEANTA",
    commune_id: 332,
  },
  {
    quartier_id: 3379,
    nom: "KEORAH",
    commune_id: 332,
  },
  {
    quartier_id: 3380,
    nom: "OUEYE",
    commune_id: 332,
  },
  {
    quartier_id: 3381,
    nom: "PALE I",
    commune_id: 332,
  },
  {
    quartier_id: 3382,
    nom: "PALE II",
    commune_id: 332,
  },
  {
    quartier_id: 3383,
    nom: "ZOGBEANTA",
    commune_id: 332,
  },
  {
    quartier_id: 3384,
    nom: "GBAMBA",
    commune_id: 333,
  },
  {
    quartier_id: 3385,
    nom: "KPAYA",
    commune_id: 333,
  },
  {
    quartier_id: 3386,
    nom: "GBILY",
    commune_id: 333,
  },
  {
    quartier_id: 3387,
    nom: "KOMOU",
    commune_id: 333,
  },
  {
    quartier_id: 3388,
    nom: "KONALA",
    commune_id: 333,
  },
  {
    quartier_id: 3389,
    nom: "KOULE SUD",
    commune_id: 333,
  },
  {
    quartier_id: 3390,
    nom: "NIAMPARA",
    commune_id: 333,
  },
  {
    quartier_id: 3391,
    nom: "NYEMA SUD",
    commune_id: 333,
  },
  {
    quartier_id: 3392,
    nom: "SAMOE",
    commune_id: 333,
  },
  {
    quartier_id: 3393,
    nom: "WEYA SUD",
    commune_id: 333,
  },
  {
    quartier_id: 3394,
    nom: "GBOUO",
    commune_id: 334,
  },
  {
    quartier_id: 3395,
    nom: "GOUH",
    commune_id: 334,
  },
  {
    quartier_id: 3396,
    nom: "KOLA",
    commune_id: 334,
  },
  {
    quartier_id: 3397,
    nom: "KOLAKPATA",
    commune_id: 334,
  },
  {
    quartier_id: 3398,
    nom: "KOMATA",
    commune_id: 334,
  },
  {
    quartier_id: 3399,
    nom: "KPAGALAYE",
    commune_id: 334,
  },
  {
    quartier_id: 3400,
    nom: "KPOULO",
    commune_id: 334,
  },
  {
    quartier_id: 3401,
    nom: "SOUHOULE",
    commune_id: 334,
  },
  {
    quartier_id: 3402,
    nom: "SOULOUTA",
    commune_id: 334,
  },
  {
    quartier_id: 3403,
    nom: "BOWE NORD",
    commune_id: 335,
  },
  {
    quartier_id: 3404,
    nom: "FOOZOU",
    commune_id: 335,
  },
  {
    quartier_id: 3405,
    nom: "KABIETA",
    commune_id: 335,
  },
  {
    quartier_id: 3406,
    nom: "TOKPATA",
    commune_id: 335,
  },
  {
    quartier_id: 3407,
    nom: "WOMEY I",
    commune_id: 335,
  },
  {
    quartier_id: 3408,
    nom: "WOMEY II",
    commune_id: 335,
  },
  {
    quartier_id: 3409,
    nom: "YOMATA",
    commune_id: 335,
  },
  {
    quartier_id: 3410,
    nom: "ZENEMOUDA",
    commune_id: 335,
  },
  {
    quartier_id: 3411,
    nom: "BANGOUETA",
    commune_id: 336,
  },
  {
    quartier_id: 3412,
    nom: "GALAKPAYE",
    commune_id: 336,
  },
  {
    quartier_id: 3413,
    nom: "GBOTTOYE",
    commune_id: 336,
  },
  {
    quartier_id: 3414,
    nom: "KARANAH",
    commune_id: 336,
  },
  {
    quartier_id: 3415,
    nom: "KONIA AVIATION",
    commune_id: 336,
  },
  {
    quartier_id: 3416,
    nom: "KOTOZOU",
    commune_id: 336,
  },
  {
    quartier_id: 3417,
    nom: "LOUKELE",
    commune_id: 336,
  },
  {
    quartier_id: 3418,
    nom: "LOULE NORD",
    commune_id: 336,
  },
  {
    quartier_id: 3419,
    nom: "MOATA",
    commune_id: 336,
  },
  {
    quartier_id: 3420,
    nom: "N'ZAO",
    commune_id: 336,
  },
  {
    quartier_id: 3421,
    nom: "TOULEMOU",
    commune_id: 336,
  },
  {
    quartier_id: 3422,
    nom: "YALENZOU CENTRE",
    commune_id: 336,
  },
  {
    quartier_id: 3423,
    nom: "GBAMOU",
    commune_id: 337,
  },
  {
    quartier_id: 3424,
    nom: "GBANAKOLY",
    commune_id: 337,
  },
  {
    quartier_id: 3425,
    nom: "GBOKOMEYE",
    commune_id: 337,
  },
  {
    quartier_id: 3426,
    nom: "KOLIPILITA",
    commune_id: 337,
  },
  {
    quartier_id: 3427,
    nom: "KOMOU",
    commune_id: 337,
  },
  {
    quartier_id: 3428,
    nom: "KPAOLE",
    commune_id: 337,
  },
  {
    quartier_id: 3429,
    nom: "KWALA-KOLY",
    commune_id: 337,
  },
  {
    quartier_id: 3430,
    nom: "MONEKOLY",
    commune_id: 337,
  },
  {
    quartier_id: 3431,
    nom: "BANIE CENTRE",
    commune_id: 338,
  },
  {
    quartier_id: 3432,
    nom: "DIECKENY",
    commune_id: 338,
  },
  {
    quartier_id: 3433,
    nom: "DONGOUETA",
    commune_id: 338,
  },
  {
    quartier_id: 3434,
    nom: "GOTTOYE",
    commune_id: 338,
  },
  {
    quartier_id: 3435,
    nom: "KOLIYE",
    commune_id: 338,
  },
  {
    quartier_id: 3436,
    nom: "MELEKPOMA",
    commune_id: 338,
  },
  {
    quartier_id: 3437,
    nom: "YOWA",
    commune_id: 338,
  },
  {
    quartier_id: 3438,
    nom: "BEMEYE",
    commune_id: 339,
  },
  {
    quartier_id: 3439,
    nom: "BHETA",
    commune_id: 339,
  },
  {
    quartier_id: 3440,
    nom: "KPAOLE",
    commune_id: 339,
  },
  {
    quartier_id: 3441,
    nom: "LAGBARA",
    commune_id: 339,
  },
  {
    quartier_id: 3442,
    nom: "OROYAKORE",
    commune_id: 339,
  },
  {
    quartier_id: 3443,
    nom: "BALLAN",
    commune_id: 340,
  },
  {
    quartier_id: 3444,
    nom: "BANZOU",
    commune_id: 340,
  },
  {
    quartier_id: 3445,
    nom: "BIGNAMOU",
    commune_id: 340,
  },
  {
    quartier_id: 3446,
    nom: "GALAKPAYE",
    commune_id: 340,
  },
  {
    quartier_id: 3447,
    nom: "GBAMOU",
    commune_id: 340,
  },
  {
    quartier_id: 3448,
    nom: "KPEO",
    commune_id: 340,
  },
  {
    quartier_id: 3449,
    nom: "NAWEY",
    commune_id: 340,
  },
  {
    quartier_id: 3450,
    nom: "BALLO",
    commune_id: 341,
  },
  {
    quartier_id: 3451,
    nom: "BAMAKAMA",
    commune_id: 341,
  },
  {
    quartier_id: 3452,
    nom: "BOWE I",
    commune_id: 341,
  },
  {
    quartier_id: 3453,
    nom: "BOWE II",
    commune_id: 341,
  },
  {
    quartier_id: 3454,
    nom: "LONHONDIA",
    commune_id: 341,
  },
  {
    quartier_id: 3455,
    nom: "OUETOA",
    commune_id: 341,
  },
  {
    quartier_id: 3456,
    nom: "OURO I",
    commune_id: 341,
  },
  {
    quartier_id: 3457,
    nom: "OURO II",
    commune_id: 341,
  },
  {
    quartier_id: 3458,
    nom: "WEYA",
    commune_id: 341,
  },
  {
    quartier_id: 3459,
    nom: "YALAKPALE",
    commune_id: 341,
  },
  {
    quartier_id: 3460,
    nom: "BAALA",
    commune_id: 342,
  },
  {
    quartier_id: 3461,
    nom: "DANIE",
    commune_id: 342,
  },
  {
    quartier_id: 3462,
    nom: "DIECKE I",
    commune_id: 342,
  },
  {
    quartier_id: 3463,
    nom: "DIECKE II",
    commune_id: 342,
  },
  {
    quartier_id: 3464,
    nom: "GAMPA",
    commune_id: 342,
  },
  {
    quartier_id: 3465,
    nom: "GUEPAH",
    commune_id: 342,
  },
  {
    quartier_id: 3466,
    nom: "KOIMPA",
    commune_id: 342,
  },
  {
    quartier_id: 3467,
    nom: "KOROHOUAN",
    commune_id: 342,
  },
  {
    quartier_id: 3468,
    nom: "NAAPA",
    commune_id: 342,
  },
  {
    quartier_id: 3469,
    nom: "SAORO",
    commune_id: 342,
  },
  {
    quartier_id: 3470,
    nom: "SOOPA",
    commune_id: 342,
  },
  {
    quartier_id: 3471,
    nom: "BEREGNA",
    commune_id: 343,
  },
  {
    quartier_id: 3472,
    nom: "GALAYE",
    commune_id: 343,
  },
  {
    quartier_id: 3473,
    nom: "NONAH",
    commune_id: 343,
  },
  {
    quartier_id: 3474,
    nom: "OUETA",
    commune_id: 343,
  },
  {
    quartier_id: 3475,
    nom: "PELA I",
    commune_id: 343,
  },
  {
    quartier_id: 3476,
    nom: "PELA II",
    commune_id: 343,
  },
  {
    quartier_id: 3477,
    nom: "YILATA",
    commune_id: 343,
  },
  {
    quartier_id: 3478,
    nom: "YONOH",
    commune_id: 343,
  },
];
