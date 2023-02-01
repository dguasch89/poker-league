import {create} from 'zustand';

export const useRulesStore = create(() => {
  return {rules: []};
});
