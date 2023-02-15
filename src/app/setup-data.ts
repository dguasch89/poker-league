import players from "../domain/data/players.json";
import seasons from "../domain/data/seasons.json";
import rules from "../domain/data/rules.json";
import gamesSchedule from "../domain/data/games-schedule.json";
import { usePlayersStore } from "../state/players";
import { useRulesStore } from "../state/rules";
import { useSeasonsStore } from "../state/seasons";
import { useGamesScheduleStore } from "../state/games-schedule";

export const setupData = () => {
  usePlayersStore.setState({ players: players as any });
  useSeasonsStore.setState({ seasons: seasons as any });
  useRulesStore.setState({ rules: rules as any });
  useGamesScheduleStore.setState({ gamesSchedule: gamesSchedule as any });
};
