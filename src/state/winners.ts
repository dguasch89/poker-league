import { create } from "zustand";

export const useWinnersStore = create(() => {
  return { winners: [] };
});
