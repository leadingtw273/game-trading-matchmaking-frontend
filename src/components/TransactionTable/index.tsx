import { useEffect, useState } from "react";
import { Button, Col, Flex, Form, Pagination, Row } from "antd";
import { TableDisplayMode, TableSortType, Transaction } from "@/enums";
import coinCommodityList from "@/mocks/CoinCommodity";

import "./style.scss";
import { useForm } from "antd/es/form/Form";
import TableHeader from "./components/TableHeader";
import { CustomScroll } from "react-custom-scroll";
import { CommodityItem, TransactionItem } from "@/types";
import ItemCardWrapper from "./components/ItemCardWrapper";

type TransactionTableProps<FormValues, Commodity extends CommodityItem<unknown>> = {
  onSubmit: (values: FormValues) => void;
  renderForm: (transactionType: Transaction.Type) => React.ReactNode;
  renderCardContent: (
    transactionType: Transaction.Type,
    displayMode: TableDisplayMode,
    item: TransactionItem<Commodity>
  ) => React.ReactNode;
};
export default function TransactionTable<FormValues, Commodity extends CommodityItem<unknown>>(
  props: TransactionTableProps<FormValues, Commodity>
) {
  const { onSubmit, renderForm, renderCardContent } = props;
  const [form] = useForm<FormValues>();
  const [transactionType, setTransactionType] = useState<Transaction.Type>(Transaction.Type.SALE);
  const [displayMode, setDisplayMode] = useState<TableDisplayMode>(TableDisplayMode.GRID);
  const [dataList, setDataList] = useState<TransactionItem<Commodity>[]>([]);

  useEffect(() => {
    const list = requestList<TransactionItem<Commodity>[]>(transactionType);
    setDataList(list);
  }, [transactionType]);

  const requestList = <Response,>(transactionType: Transaction.Type): Response => {
    // TODO: fetch data from server
    return coinCommodityList.filter((item) => item.type === transactionType).slice(0, 8) as Response;
  };

  const handleSubmit = (values: FormValues) => {
    // do transaction
    onSubmit(values);
  };

  const handleChangeSortType = (value: TableSortType) => {
    console.log("handleChangeSortType", value);
  };

  const handleChangeDisplayMode = (value: TableDisplayMode) => {
    setDisplayMode(value);
  };

  const handleChangePagination = (page: number, pageSize: number | undefined) => {
    console.log("handleChangePagination", page, pageSize);
  };

  return (
    <Flex className="transaction-table" align="center" justify="center">
      <Flex className="transaction-table__wrapper" gap={20}>
        <Form<FormValues>
          className="transaction-table__side side-form"
          form={form}
          labelCol={{ span: 6 }}
          labelAlign="left"
          onFinish={handleSubmit}
        >
          <Flex className="side-form_wrapper" align="center" justify="space-between" vertical>
            <Flex className="side-form_content" gap={8} vertical>
              {renderForm(transactionType)}
            </Flex>
            <Flex className="side-form_action" gap={10}>
              <Button className="form-reset" onClick={() => form.resetFields()}>
                重置
              </Button>
              <Button className="form-confirm" onClick={() => form.submit()}>
                確認
              </Button>
            </Flex>
          </Flex>
        </Form>

        <Flex className="transaction-table__main" vertical>
          <Flex
            className={[
              "main-tabs",
              transactionType === Transaction.Type.SALE ? "decorate-left" : "decorate-right",
            ].join(" ")}
            align="center"
          >
            <div
              className={["main-tabs__item", transactionType === Transaction.Type.SALE ? "active" : ""].join(" ")}
              onClick={() => setTransactionType(Transaction.Type.SALE)}
            >
              販售中
            </div>
            <div
              className={["main-tabs__item", transactionType === Transaction.Type.PURCHASE ? "active" : ""].join(" ")}
              onClick={() => setTransactionType(Transaction.Type.PURCHASE)}
            >
              收購中
            </div>
          </Flex>

          <Flex className="main-content item-table" vertical>
            <TableHeader
              itemCount={dataList.length}
              displayMode={displayMode}
              onChangeSortType={handleChangeSortType}
              onChangeDisplayMode={handleChangeDisplayMode}
            />

            <div className="item-table__content">
              <CustomScroll heightRelativeToParent="100%">
                <Row gutter={[10, 10]}>
                  {dataList.map((item) => (
                    <Col key={item.id} span={displayMode === TableDisplayMode.GRID ? 6 : 24}>
                      <ItemCardWrapper displayMode={displayMode}>
                        {renderCardContent(transactionType, displayMode, item)}
                      </ItemCardWrapper>
                    </Col>
                  ))}
                </Row>
              </CustomScroll>
            </div>

            <Pagination
              style={{ padding: "0 25px" }}
              current={2}
              total={500}
              onChange={handleChangePagination}
              showQuickJumper
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
