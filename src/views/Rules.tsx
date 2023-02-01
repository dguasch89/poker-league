import {Rule} from '../components/Rule';
import rules from '../data/rules.json';
import {IEntityDescription} from '../model/interfaces';

export function Rules() {
  return (
    <div className="p-10 flex flex-col gap-4">
      {rules.map((rule: IEntityDescription) => (
        <Rule key={rule.id} rule={rule} />
      ))}
    </div>
  );
}
