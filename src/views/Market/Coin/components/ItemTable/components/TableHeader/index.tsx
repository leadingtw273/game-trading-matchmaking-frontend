import { AppstoreFilled, MenuOutlined } from "@ant-design/icons";
import { Flex, Radio, Select } from "antd";

import "./style.scss";

enum SortType {
  RECENT_UPDATE = "RECENT_UPDATE",
  AMOUNT_DESC = "AMOUNT_DESC",
  AMOUNT_ASC = "AMOUNT_ASC",
}

type TableHeaderProps = {
  className?: string;
};
export default function TableHeader(props: TableHeaderProps) {
  const { className = "" } = props;

  const handleChangeSortType = (value: SortType) => {
    console.log("handleChangeSortType", value);
  };

  return (
    <Flex className={["table-header", className].join(" ")} align="center" justify="space-between">
      <div className="table-header__result-count">
        共<span className="count">87</span>項搜尋結果
      </div>
      <Flex align="center" gap={28}>
        <div className="table-header__sort-type">
          <span className="label">排序</span>
          <Select
            className="selector"
            popupMatchSelectWidth={false}
            defaultValue={SortType.RECENT_UPDATE}
            onChange={handleChangeSortType}
            options={[
              { value: SortType.RECENT_UPDATE, label: "最近更新" },
              { value: SortType.AMOUNT_DESC, label: "金額大到小" },
              { value: SortType.AMOUNT_ASC, label: "金額小到大" },
            ]}
          />
        </div>
        <div className="table-header__show-style">
          <span className="label">排列方式</span>
          <Radio.Group className="radio" defaultValue="a" buttonStyle="solid" size="small">
            <Flex gap={6}>
              <Radio.Button value="a">
                <AppstoreFilled />
              </Radio.Button>
              <Radio.Button value="b">
                <MenuOutlined />
              </Radio.Button>
            </Flex>
          </Radio.Group>
        </div>
      </Flex>
    </Flex>
  );
}
