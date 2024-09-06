import {create} from 'zustand';

export interface StoreState {
  search: string;
  setSearch: (value: string) => void;
}

export const useAppStore = create<StoreState>((set) => ({
  search: '',
  setSearch: (value) => set({ search: value }),
}));