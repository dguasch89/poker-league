import { create } from "zustand";

export const useGamesScheduleStore = create(() => {
  return { gamesSchedule: [] };
});
