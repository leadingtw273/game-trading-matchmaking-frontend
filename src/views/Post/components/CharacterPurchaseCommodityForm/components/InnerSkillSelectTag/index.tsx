import classNames from "classnames";
import { useMemo, useState } from "react";
import { Flex, Tag } from "antd";

import { CharacterConst } from "@/consts";
import { CharacterEnum } from "@/enums";
import { getOptionsLabel } from "@/utils";

import "./style.scss";

type InnerSkillSelectTagProps = {
  maxCount?: number;
  value?: Array<CharacterEnum.InnerSkillType> | null;
  onChange?: (value: Array<CharacterEnum.InnerSkillType> | null) => void;
};
export default function InnerSkillSelectTag(props: InnerSkillSelectTagProps) {
  const { maxCount = 5, value, onChange } = props;
  const [activeTag, setActiveTag] = useState<Set<CharacterEnum.InnerSkillType>>(
    new Set<CharacterEnum.InnerSkillType>(value)
  );
  const valueSet = useMemo(() => new Set<CharacterEnum.InnerSkillType>(value), [value]);

  const isOverMaxCount = (value?.length ?? 0) >= maxCount;

  const isDisabled = (innerSkill: CharacterEnum.InnerSkillType) => {
    if (isOverMaxCount && !valueSet.has(innerSkill)) return true;
    return false;
  };

  const handleClickOption = (value: CharacterEnum.InnerSkillType, checked: boolean) => {
    if (checked) activeTag.add(value);
    else activeTag.delete(value);

    console.log("[test] activeTag", activeTag);

    setActiveTag(new Set([...activeTag]));

    onChange?.(activeTag.size === 0 ? null : [...activeTag]);
  };

  return (
    <Flex className="inner-skill select-tag" gap={10} vertical>
      {[...CharacterConst.CategoryInnerSkillMap.entries()].map(([category, innerSkillList]) => {
        return (
          <Flex key={category} align="center" gap={10}>
            <span>{getOptionsLabel(category, CharacterConst.getInnerSkillCategoryOption())}</span>
            <Flex gap={4}>
              {innerSkillList?.map((innerSkill, index) => {
                const sect = CharacterConst.InnerSkillSectMap.get(innerSkill);
                const tagOption = sect != null ? CharacterConst.SectTagOptionMap.get(sect) : null;

                return (
                  <Tag.CheckableTag
                    key={index}
                    className={classNames("select-tag__item", isDisabled(innerSkill) && "disabled")}
                    checked={valueSet.has(innerSkill) || activeTag.has(innerSkill)}
                    onChange={(checked) => (!isDisabled(innerSkill) ? handleClickOption(innerSkill, checked) : null)}
                  >
                    <Flex align="center">
                      <img className="icon" src={tagOption?.icon}></img>
                      <span>{getOptionsLabel(innerSkill, CharacterConst.getInnerSkillOptions())}</span>
                    </Flex>
                  </Tag.CheckableTag>
                );
              })}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
