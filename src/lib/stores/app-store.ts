import {create} from 'zustand';
import { UserDTO } from '../dtos/user_dto';
import { CentreDTO } from '../dtos/centre_dto';
import { OperationDTO } from '../dtos/operation_dto';

export interface StoreState {
  openToEditUser: boolean;
  openToAddUser: boolean;
  openToEditOperation: boolean;
  openToAddOperation: boolean;
  openToToggleUser: boolean;
  user: UserDTO | null;
  operation: OperationDTO | null;
  selectedCentre: CentreDTO | null;

  openToEditCentre: boolean;
  openToAddCentre: boolean;
  openToToggleCentre: boolean;

  setUser: (value: UserDTO) => void;
  setOperation: (value: OperationDTO) => void;
  setOpenToEditOperation: (value: boolean) => void;
  setOpenToAddOperation: (value: boolean) => void;
  setSelectedCentre: (value: CentreDTO) => void;
  setOpenToEditUser: (value: boolean) => void;
  setOpenToAddUser: (value: boolean) => void;
  setOpenToToggleUser: (value: boolean) => void;

  setOpenToEditCentre: (value: boolean) => void;
  setOpenToAddCentre: (value: boolean) => void;
  setOpenToToggleCentre: (value: boolean) => void;
}

export const useAppStore = create<StoreState>((set) => ({
  openToEditUser: false,
  openToAddUser: false,
  openToEditOperation: false,
  openToAddOperation: false,
  openToToggleUser: false,
  setOpenToEditUser: (value) => set({ openToEditUser: value }),
  setOpenToAddUser: (value) => set({ openToAddUser: value }),
  setOpenToEditOperation: (value) => set({ openToEditOperation: value }),
  setOpenToAddOperation: (value) => set({ openToAddOperation: value }),
  setOpenToToggleUser: (value) => set({ openToToggleUser: value }),

  openToEditCentre: false,
  openToAddCentre: false,
  openToToggleCentre: false,
  setOpenToEditCentre: (value) => set({ openToEditCentre: value }),
  setOpenToAddCentre: (value) => set({ openToAddCentre: value }),
  setOpenToToggleCentre: (value) => set({ openToToggleCentre: value }),

  user: null,
  operation: null,
  setUser: (value) => set({ user: value }),
  setOperation: (value) => set({ operation: value }),
  
  selectedCentre: null,
  setSelectedCentre: (value) => set({ selectedCentre: value }),

}));