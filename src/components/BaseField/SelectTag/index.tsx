import { useEffect, useMemo, useState } from "react";
import { Flex, Tag } from "antd";

import "./style.scss";

type SelectTagProps<ValueType> = {
  options?: Array<{ label: string; value: ValueType }>;
  hasNoLimit?: boolean;
  value?: Array<ValueType> | null;
  onChange?: (value: Array<ValueType> | null) => void;
};
export default function SelectTag<ValueType = null>(props: SelectTagProps<ValueType>) {
  const { options, hasNoLimit = false, value, onChange } = props;
  const [isNoLimit, setIsNoLimit] = useState<boolean>(value == null);
  const [activeTag, setActiveTag] = useState<Set<ValueType>>(new Set<ValueType>(value));
  const valueSet = useMemo(() => new Set<ValueType>(value), [value]);

  useEffect(() => {
    if (value == null) setIsNoLimit(true);
    else setActiveTag(new Set<ValueType>(value));
  }, [value]);

  const handleClickNoLimit = (checked: boolean) => {
    setIsNoLimit(checked);

    if (checked) {
      setActiveTag(new Set());
      onChange?.(null);
    } else {
      setActiveTag(new Set<ValueType>(value ?? options?.map(({ value }) => value) ?? []));
      onChange?.(value ?? options?.map(({ value }) => value) ?? []);
    }
  };

  const handleClickOption = (value: ValueType, checked: boolean) => {
    if (checked) {
      activeTag.add(value);
    } else activeTag.delete(value);

    setIsNoLimit(activeTag.size === 0);
    setActiveTag(new Set([...activeTag]));

    onChange?.([...activeTag]);
  };

  return (
    <Flex className="base-field select-tag" gap={8}>
      {hasNoLimit ? (
        <Tag.CheckableTag className="select-tag__item" checked={isNoLimit} onChange={handleClickNoLimit}>
          不限
        </Tag.CheckableTag>
      ) : null}
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
