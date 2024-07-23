import { useMemo, useState } from "react";
import { Button, Col, Flex, Form, Pagination, Row } from "antd";
import { TableDisplayModeEnum, TableSortTypeEnum, TransactionEnum } from "@/enums";

import "./style.scss";
import { useForm } from "antd/es/form/Form";
import TableHeader from "./components/TableHeader";
import { CustomScroll } from "react-custom-scroll";
import { CommodityItem, TransactionItem } from "@/types";
import ItemCardWrapper from "./components/ItemCardWrapper";

export type TableSubmitParams<FormValues> = FormValues & {
  page: number;
  pageSize: number;
  transactionType: TransactionEnum.Type;
  sortType: TableSortTypeEnum;
};

type TransactionTableProps<FormValues, Commodity extends CommodityItem<unknown>> = {
  defaultTransactionType?: TransactionEnum.Type;
  dataSource: TransactionItem<Commodity>[];
  onSearch: (values: TableSubmitParams<FormValues>) => void;
  renderForm: (transactionType: TransactionEnum.Type) => React.ReactNode;
  renderCardContent: (
    transactionType: TransactionEnum.Type,
    displayMode: TableDisplayModeEnum,
    item: TransactionItem<Commodity>
  ) => React.ReactNode;
};
export default function TransactionTable<FormValues, Commodity extends CommodityItem<unknown>>(
  props: TransactionTableProps<FormValues, Commodity>
) {
  const {
    defaultTransactionType = TransactionEnum.Type.SALE,
    dataSource,
    onSearch,
    renderForm,
    renderCardContent,
  } = props;
  const [form] = useForm<FormValues>();
  const [transactionType, setTransactionType] = useState<TransactionEnum.Type>(defaultTransactionType);
  const [sortType, setSortType] = useState<TableSortTypeEnum>(TableSortTypeEnum.RECENT_UPDATE);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [displayMode, setDisplayMode] = useState<TableDisplayModeEnum>(TableDisplayModeEnum.GRID);
  const tableParams = useMemo(
    () => ({
      page,
      pageSize,
      transactionType,
      sortType,
    }),
    [page, pageSize, sortType, transactionType]
  );

  const handleSubmit = (values: FormValues) => {
    setPage(1);
    onSearch({ ...values, ...tableParams });
  };

  const handleChangeSortType = (sortType: TableSortTypeEnum) => {
    setSortType(sortType);
    onSearch({
      ...form.getFieldsValue(),
      ...tableParams,
      sortType,
    });
  };

  const handleChangeTransaction = (transactionType: TransactionEnum.Type) => {
    setTransactionType(transactionType);
    onSearch({
      ...form.getFieldsValue(),
      ...tableParams,
      transactionType,
    });
  };

  const handleChangePagination = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
    onSearch({
      ...form.getFieldsValue(),
      ...tableParams,
      page,
      pageSize,
    });
  };

  const handleChangeDisplayMode = (displayMode: TableDisplayModeEnum) => {
    setDisplayMode(displayMode);

    if (displayMode === TableDisplayModeEnum.LIST) {
      setPageSize(20);
      setPage(1);
    } else {
      setPageSize(8);
      setPage(1);
    }

    onSearch({
      ...form.getFieldsValue(),
      ...tableParams,
      page,
      pageSize,
    });
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
              transactionType === TransactionEnum.Type.SALE ? "decorate-left" : "decorate-right",
            ].join(" ")}
            align="center"
          >
            <div
              className={["main-tabs__item", transactionType === TransactionEnum.Type.SALE ? "active" : ""].join(" ")}
              onClick={() => handleChangeTransaction(TransactionEnum.Type.SALE)}
            >
              販售中
            </div>
            <div
              className={["main-tabs__item", transactionType === TransactionEnum.Type.PURCHASE ? "active" : ""].join(
                " "
              )}
              onClick={() => handleChangeTransaction(TransactionEnum.Type.PURCHASE)}
            >
              收購中
            </div>
          </Flex>

          <Flex className="main-content item-table" vertical>
            <TableHeader
              itemCount={dataSource.length}
              displayMode={displayMode}
              onChangeSortType={handleChangeSortType}
              onChangeDisplayMode={handleChangeDisplayMode}
            />

            <div className="item-table__content">
              <CustomScroll heightRelativeToParent="100%">
                <Row gutter={[10, 10]}>
                  {dataSource.map((item) => (
                    <Col key={item.id} span={displayMode === TableDisplayModeEnum.GRID ? 6 : 24}>
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
              current={page}
              pageSize={pageSize}
              showSizeChanger={displayMode === TableDisplayModeEnum.LIST}
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
