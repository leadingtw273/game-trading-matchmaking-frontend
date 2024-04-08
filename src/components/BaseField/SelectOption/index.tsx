import { useEffect, useState } from "react";
import { Flex, Select, Tag } from "antd";

import "./style.scss";

type SelectOptionProps<ValueType> = {
  options?: Array<{ label: string; value: ValueType }>;
  placeholder?: string;
  hasNoLimit?: boolean;
  value?: ValueType | null;
  onChange?: (value: ValueType | null) => void;
};
export default function SelectOption<ValueType extends string | number | null | undefined = null>(
  props: SelectOptionProps<ValueType>
) {
  const { options, placeholder, hasNoLimit = false, value, onChange } = props;
  const [isNoLimit, setIsNoLimit] = useState<boolean>(value == null);
  const [selectedValue, setSelectedValue] = useState<ValueType | null>(value ?? null);

  useEffect(() => {
    if (value == null) setIsNoLimit(true);
    else setSelectedValue(value);
  }, [value]);

  const handleClickNoLimit = (checked: boolean) => {
    setIsNoLimit(checked);

    if (checked) {
      setSelectedValue(null);
      onChange?.(null);
    } else {
      setSelectedValue(options?.[0]?.value ?? null);
      onChange?.(options?.[0]?.value ?? null);
    }
  };

  const handleChangeOption = (value: ValueType) => {
    setIsNoLimit(value == null);
    setSelectedValue(value);

    onChange?.(value);
  };

  return (
    <Flex className="base-field select-option" gap={8}>
      {hasNoLimit ? (
        <Tag.CheckableTag className="select-option__no-limit" checked={isNoLimit} onChange={handleClickNoLimit}>
          不限
        </Tag.CheckableTag>
      ) : null}
      <Select<ValueType>
        className="select-option__selector"
        value={value ?? selectedValue}
        placeholder={placeholder ?? "請選擇"}
        onChange={handleChangeOption}
        options={options}
      />
    </Flex>
  );
}
