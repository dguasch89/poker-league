import {Rule} from '../components/Rule';
import rules from '../../domain/data/rules.json';
import {IEntityDescription} from '../../domain/interfaces';

export function Rules() {
  return (
    <div className="p-10 flex flex-col gap-4">
      {rules.map((rule: IEntityDescription) => (
        <Rule key={rule.id} rule={rule} />
      ))}
    </div>
  );
}
