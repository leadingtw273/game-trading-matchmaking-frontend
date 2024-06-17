import { useMemo, useState } from "react";
import { Flex, Tag } from "antd";

import "./style.scss";

type SelectTagProps<ValueType> = {
  options?: Array<{ label: string; value: ValueType }>;
  value?: Array<ValueType> | null;
  onChange?: (value: Array<ValueType> | null) => void;
};
export default function SelectTag<ValueType = null>(props: SelectTagProps<ValueType>) {
  const { options, value, onChange } = props;
  const [activeTag, setActiveTag] = useState<Set<ValueType>>(new Set<ValueType>(value));
  const valueSet = useMemo(() => new Set<ValueType>(value), [value]);

  const handleClickOption = (value: ValueType, checked: boolean) => {
    if (checked) {
      activeTag.add(value);
    } else activeTag.delete(value);

    setActiveTag(new Set([...activeTag]));

    onChange?.(activeTag.size === 0 ? null : [...activeTag]);
  };

  return (
    <Flex className="base-field select-tag" gap={10}>
      {options?.map((option, index) => (
        <Tag.CheckableTag
          key={index}
          className="select-tag__item"
          checked={valueSet.has(option.value) || activeTag.has(option.value)}
          onChange={(checked) => handleClickOption(option.value, checked)}
        >
          {option.label}
        </Tag.CheckableTag>
      ))}
    </Flex>
  );
}
