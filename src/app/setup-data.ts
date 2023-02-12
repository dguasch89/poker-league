import players from "../domain/data/players.json";
import seasons from "../domain/data/seasons.json";
import rules from "../domain/data/rules.json";
import winners from "../domain/data/winners.json";
import { usePlayersStore } from "../state/players";
import { useRulesStore } from "../state/rules";
import { useSeasonsStore } from "../state/seasons";
import { useWinnersStore } from "../state/winners";

export const setupData = () => {
  usePlayersStore.setState({ players: players as any });
  useSeasonsStore.setState({ seasons: seasons as any });
  useRulesStore.setState({ rules: rules as any });
  useWinnersStore.setState({ winners: winners as any });
};
