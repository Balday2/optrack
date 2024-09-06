// import { create } from 'zustand'
// import { AppConstants } from '../constants'

// type TableState = {
//   page: number
//   limit: number
//   filters: Record<string, any>
//   search: string

//   setPage: (page: number) => void
//   setLimit: (limit: number) => void
//   setFilters: (filters: Record<string, any>) => void
//   setSearch: (query: string) => void
//   reset: () => void  // Nouvelle fonction de réinitialisation
// }

// const initialState = {
//   page: 1,
//   limit: AppConstants.pageSize,
//   filters: {},
//   search: '',
// }

// const useTableStore = create<TableState>((set) => ({
//   ...initialState,
//   setPage: (page) => set({ page }),
//   setLimit: (limit) => set({ limit }),
//   setFilters: (filters) => set({ filters }),
//   setSearch: (query) => set({ search: query }),
//   reset: () => set(initialState),  // Réinitialise l'état à ses valeurs initiales
// }))

// export default useTableStore