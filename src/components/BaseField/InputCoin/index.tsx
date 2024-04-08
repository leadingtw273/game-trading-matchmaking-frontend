import { useState } from "react";
import { Flex, InputNumber, Select, Tag } from "antd";
import { Currency } from "@/enums";

import "./style.scss";

type CoinItem = {
  currency: Currency.Type;
  value: number;
};

type InputCoinProps = {
  value?: CoinItem | null;
  placeholder?: string;
  hasNoLimit?: boolean;
  options?: Array<{ value: Currency.Type; label: string }>;
  onChange?: (value: CoinItem | null) => void;
};
export default function InputCoin(props: InputCoinProps) {
  const { value, placeholder, hasNoLimit = false, options, onChange } = props;
  const [isNoLimit, setIsNoLimit] = useState<boolean>(value == null);
  const [currencyType, setCurrencyType] = useState<Currency.Type>(value?.currency ?? Currency.Type.TWD);
  const [coinValue, setCoinValue] = useState<number | null>(value?.value ?? null);
  const currencyOptions =
    options ??
    Object.values(Currency.Type).map((currency) => ({
      value: currency,
      label: Currency.Label[currency],
    }));

  const triggerChange = () => {
    onChange?.(isNoLimit ? null : { currency: currencyType, value: coinValue! });
  };

  const handleClickNoLimit = (checked: boolean) => {
    if (checked) setCoinValue(null);
    if (!checked && coinValue == null) setCoinValue(0);

    setIsNoLimit(checked);

    triggerChange();
  };

  const handleSelectCurrency = (currency: Currency.Type) => {
    setCurrencyType(currency);

    triggerChange();
  };

  const handleChangeValue = (value: number | null) => {
    setIsNoLimit(value == null);
    setCoinValue(value);

    triggerChange();
  };

  return (
    <Flex className="base-field input-coin" gap={8}>
      {hasNoLimit ? (
        <Tag.CheckableTag className="input-coin__no-limit" checked={isNoLimit} onChange={handleClickNoLimit}>
          不限
        </Tag.CheckableTag>
      ) : null}
      <Flex gap={4} align="center">
        <Select
          className="input-coin__selector"
          defaultValue={currencyType}
          options={currencyOptions}
          popupMatchSelectWidth={false}
          onChange={handleSelectCurrency}
        />
        <span className="input-coin__semicolon">:</span>
        <InputNumber
          className="input-coin__input"
          placeholder={placeholder ?? "請輸入"}
          value={coinValue}
          onChange={handleChangeValue}
        />
      </Flex>
    </Flex>
  );
}
