import { useQuery } from "@tanstack/react-query";
import { prefectureData } from "@/lib/data/prefecture";
import { communeData } from "@/lib/data/commune";
import { quartierData } from "../data/quartier";

export function usePrefectures() {
  const prefectures = useQuery({
    queryKey: ["prefectures"],
    queryFn: () => Promise.resolve(prefectureData),
    placeholderData: (prev) => prev,
  });

  return { prefectures };
}

export function useCommunes(prefectureId: number) {
  const communes = useQuery({
    queryKey: ["communes", { prefectureId }],
    queryFn: () =>
      Promise.resolve(
        communeData.filter((c) => c.prefecture_id === prefectureId)
      ),
    placeholderData: (prev) => prev,
  });
  return { communes };
}

export function useQuartiers(communeId: number) {
  const quartiers = useQuery({
    queryKey: ["quartiers", { communeId }],
    queryFn: () =>
      Promise.resolve(quartierData.filter((q) => q.commune_id === communeId)),
    placeholderData: (prev) => prev,
  });
  return { quartiers };
}
