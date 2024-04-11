import { useState } from "react";
import { Flex, InputNumber, Select, Tag } from "antd";
import { Currency } from "@/enums";

import "./style.scss";
import { CoinRatio } from "@/types/common";

type InputCoinProps = {
  value?: CoinRatio | null;
  placeholder?: string;
  hasNoLimit?: boolean;
  options?: Array<{ value: Currency.Type; label: string }>;
  onChange?: (value: CoinRatio | null) => void;
};
export default function InputCoin(props: InputCoinProps) {
  const { value, placeholder, hasNoLimit = false, options, onChange } = props;
  const [isNoLimit, setIsNoLimit] = useState<boolean>(value == null);
  const [currencyType, setCurrencyType] = useState<Currency.Type>(value?.currency ?? Currency.Type.TWD);
  const [coinValue, setCoinValue] = useState<number | null>(value?.ratio ?? null);
  const currencyOptions =
    options ??
    Object.values(Currency.Type).map((currency) => ({
      value: currency,
      label: Currency.Label[currency],
    }));

  const handleClickNoLimit = (checked: boolean) => {
    setIsNoLimit(checked);

    if (checked) {
      setCoinValue(null);
      onChange?.(null);
    } else {
      setCoinValue(0);
      onChange?.({ currency: currencyType, ratio: 0 });
    }
  };

  const handleSelectCurrency = (currency: Currency.Type) => {
    setCurrencyType(currency);

    if (coinValue != null) {
      onChange?.({ currency, ratio: coinValue });
    }
  };

  const handleChangeValue = (value: number | null) => {
    setIsNoLimit(value == null);
    setCoinValue(value);

    if (value != null) {
      onChange?.({ currency: currencyType, ratio: value });
    }
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
