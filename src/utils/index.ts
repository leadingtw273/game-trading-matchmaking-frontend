import { LabeledValue } from "antd/es/select";

/**
 * 獲取選項標籤
 * @param value 值
 * @param options 選項
 * @returns 標籤
 */
export const getOptionsLabel = (value: string | number, options: LabeledValue[]) => {
  const option = options.find((option) => option.value === value);
  return option?.label;
};
