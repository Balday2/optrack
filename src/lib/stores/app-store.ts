import {create} from 'zustand';
import { UserDTO } from '../dtos/user_dto';
import { CentreDTO } from '../dtos/centre_dto';

export interface StoreState {
  openToEditUser: boolean;
  openToAddUser: boolean;
  openToDeleteUser: boolean;
  user: UserDTO | null;
  centre: CentreDTO | null;

  openToEditCentre: boolean;
  openToAddCentre: boolean;
  openToDeleteCentre: boolean;

  setUser: (value: UserDTO) => void;
  setCentre: (value: CentreDTO) => void;
  setOpenToEditUser: (value: boolean) => void;
  setOpenToAddUser: (value: boolean) => void;
  setOpenToDeleteUser: (value: boolean) => void;

  setOpenToEditCentre: (value: boolean) => void;
  setOpenToAddCentre: (value: boolean) => void;
  setOpenToDeleteCentre: (value: boolean) => void;
}

export const useAppStore = create<StoreState>((set) => ({
  openToEditUser: false,
  openToAddUser: false,
  openToDeleteUser: false,
  setOpenToEditUser: (value) => set({ openToEditUser: value }),
  setOpenToAddUser: (value) => set({ openToEditUser: value }),
  setOpenToDeleteUser: (value) => set({ openToDeleteUser: value }),

  openToEditCentre: false,
  openToAddCentre: false,
  openToDeleteCentre: false,
  setOpenToEditCentre: (value) => set({ openToEditCentre: value }),
  setOpenToAddCentre: (value) => set({ openToAddCentre: value }),
  setOpenToDeleteCentre: (value) => set({ openToDeleteCentre: value }),

  user: null,
  setUser: (value) => set({ user: value }),
  
  centre: null,
  setCentre: (value) => set({ centre: value }),

}));