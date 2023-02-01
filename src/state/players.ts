import {create} from 'zustand';

export const usePlayersStore = create(() => {
  return {players: []};
});
