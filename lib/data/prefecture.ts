export interface IPrefecture {
  prefecture_id: number;
  nom: string;
  region_id: number;
}

export const findPrefectureById = (id: number) => {
  return prefectureData.find((prefecture) => prefecture.prefecture_id === id);
};

export const prefectureData: IPrefecture[] = [
  {
    prefecture_id: 1,
    nom: "BOFFA",
    region_id: 2,
  },
  {
    prefecture_id: 2,
    nom: "BOKE",
    region_id: 2,
  },
  {
    prefecture_id: 3,
    nom: "FRIA",
    region_id: 2,
  },
  {
    prefecture_id: 4,
    nom: "GAOUAL",
    region_id: 2,
  },
  {
    prefecture_id: 5,
    nom: "KOUNDARA",
    region_id: 2,
  },
  {
    prefecture_id: 6,
    nom: "DIXINN",
    region_id: 1,
  },
  {
    prefecture_id: 7,
    nom: "KALOUM",
    region_id: 1,
  },
  {
    prefecture_id: 8,
    nom: "MATAM",
    region_id: 1,
  },
  {
    prefecture_id: 9,
    nom: "MATOTO",
    region_id: 1,
  },
  {
    prefecture_id: 10,
    nom: "RATOMA",
    region_id: 1,
  },
  {
    prefecture_id: 11,
    nom: "DABOLA",
    region_id: 4,
  },
  {
    prefecture_id: 12,
    nom: "DINGUIRAYE",
    region_id: 4,
  },
  {
    prefecture_id: 13,
    nom: "FARANAH",
    region_id: 4,
  },
  {
    prefecture_id: 14,
    nom: "KISSIDOUGOU",
    region_id: 4,
  },
  {
    prefecture_id: 15,
    nom: "KANKAN",
    region_id: 5,
  },
  {
    prefecture_id: 16,
    nom: "KEROUANE",
    region_id: 5,
  },
  {
    prefecture_id: 17,
    nom: "KOUROUSSA",
    region_id: 5,
  },
  {
    prefecture_id: 18,
    nom: "MANDIANA",
    region_id: 5,
  },
  {
    prefecture_id: 19,
    nom: "SIGUIRI",
    region_id: 5,
  },
  {
    prefecture_id: 20,
    nom: "COYAH",
    region_id: 3,
  },
  {
    prefecture_id: 21,
    nom: "DUBREKA",
    region_id: 3,
  },
  {
    prefecture_id: 22,
    nom: "FORECARIAH",
    region_id: 3,
  },
  {
    prefecture_id: 23,
    nom: "KINDIA",
    region_id: 3,
  },
  {
    prefecture_id: 24,
    nom: "TELEMELE",
    region_id: 3,
  },
  {
    prefecture_id: 25,
    nom: "KOUBIA",
    region_id: 6,
  },
  {
    prefecture_id: 26,
    nom: "LABE",
    region_id: 6,
  },
  {
    prefecture_id: 27,
    nom: "LELOUMA",
    region_id: 6,
  },
  {
    prefecture_id: 28,
    nom: "MALI",
    region_id: 6,
  },
  {
    prefecture_id: 29,
    nom: "TOUGUE",
    region_id: 6,
  },
  {
    prefecture_id: 30,
    nom: "DALABA",
    region_id: 6,
  },
  {
    prefecture_id: 31,
    nom: "MAMOU",
    region_id: 7,
  },
  {
    prefecture_id: 32,
    nom: "PITA",
    region_id: 7,
  },
  {
    prefecture_id: 33,
    nom: "BEYLA",
    region_id: 8,
  },
  {
    prefecture_id: 34,
    nom: "GUECKEDOU",
    region_id: 8,
  },
  {
    prefecture_id: 35,
    nom: "LOLA",
    region_id: 8,
  },
  {
    prefecture_id: 36,
    nom: "MACENTA",
    region_id: 8,
  },
  {
    prefecture_id: 37,
    nom: "NZEREKORE",
    region_id: 8,
  },
  {
    prefecture_id: 38,
    nom: "YOMOU",
    region_id: 8,
  },
];
