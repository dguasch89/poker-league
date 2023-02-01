import {Rule} from '../components/Rule';
import {IEntityDescription} from '../../domain/interfaces';
import {useRulesStore} from '../../state/rules';

export function Rules() {
  const rules: IEntityDescription[] = useRulesStore.getState().rules;
  return (
    <div className="p-10 flex flex-col gap-4">
      {rules.map((rule: IEntityDescription) => (
        <Rule key={rule.id} rule={rule} />
      ))}
    </div>
  );
}
