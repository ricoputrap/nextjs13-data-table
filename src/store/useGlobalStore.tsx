import { create } from "zustand";

type State = {
  isLoading: boolean;
}

type Actions = {
  setIsLoading: (isLoading: boolean) => void;
}

const useGlobalStore = create<State & Actions>(set => ({
  isLoading: false,
  setIsLoading(isLoading) {
    set({ isLoading })
  },
}))

export default useGlobalStore;