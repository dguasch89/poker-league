import players from '../domain/data/players.json';
import seasons from '../domain/data/seasons.json';
import rules from '../domain/data/rules.json';
import {usePlayersStore} from '../state/players';
import {useRulesStore} from '../state/rules';
import {useSeasonsStore} from '../state/seasons';

export const setupData = () => {
  usePlayersStore.setState({players: players as any});
  useSeasonsStore.setState({seasons: seasons as any});
  useRulesStore.setState({rules: rules as any});
};
