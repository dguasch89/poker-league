import {create} from 'zustand';

export const useSeasonsStore = create(() => {
  return {seasons: []};
});
