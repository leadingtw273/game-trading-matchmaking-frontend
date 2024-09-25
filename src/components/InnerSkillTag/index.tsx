import { getInnerSkillOptions, InnerSkillSectMap, SectTagOptionMap } from "@/consts/Character";
import { CharacterEnum } from "@/enums";
import { getOptionsLabel } from "@/utils";

import "./style.scss";

function lightenColor(color: string, factor: number): string {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  const newR = Math.min(255, Math.floor(r + (255 - r) * factor));
  const newG = Math.min(255, Math.floor(g + (255 - g) * factor));
  const newB = Math.min(255, Math.floor(b + (255 - b) * factor));

  return `rgb(${newR}, ${newG}, ${newB})`;
}

interface IProps {
  style?: React.CSSProperties;
  innerSkill: CharacterEnum.InnerSkillType;
}
export default function InnerSkillTag(props: IProps) {
  const { innerSkill, style } = props;
  const label = getOptionsLabel(innerSkill, getInnerSkillOptions());
  const sect = InnerSkillSectMap.get(innerSkill);
  const tagOption = sect != null ? SectTagOptionMap.get(sect) : null;

  return (
    <div
      className="inner-skill-tag"
      style={{
        borderColor: tagOption?.color,
        background: `linear-gradient(to right, ${tagOption?.color}, ${lightenColor(tagOption?.color ?? "", 0.25)})`,
        ...style,
      }}
      key={innerSkill}
    >
      <img style={{ marginRight: 2 }} src={tagOption?.icon}></img>
      <span>{label}</span>
    </div>
  );
}
