import devAvatar from '../assets/dev.png';
import trophy from '../assets/trophy.png';
import {IEntityDescription} from '../model/interfaces';
interface RuleProps {
  rule: IEntityDescription;
}

export function Rule(props: RuleProps) {
  return (
    <div className="flex flex-row sm:items-center gap-4">
      <div className="text-2xl sm:text-3xl text-amber-500 font-bold italic">#{props.rule.id}</div>
      <p key={props.rule.id} className="text-md sm:text-xl">
        {props.rule.description}
      </p>
    </div>
  );
}
