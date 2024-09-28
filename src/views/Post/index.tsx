import classNames from "classnames";
import { useState } from "react";
import { Breadcrumb, Flex, Form, FormInstance } from "antd";

import PostCategoryDividerImage from "@/assets/decorate/post-category_divider.svg";
import { TransactionEnum } from "@/enums";

import AppearanceCommodityForm, { AppearanceCommodityFormValues } from "./components/AppearanceCommodityForm";
import CharacterPurchaseCommodityForm, {
  CharacterPurchaseCommodityFormValues,
} from "./components/CharacterPurchaseCommodityForm";
import CharacterSaleCommodityForm, { CharacterSaleCommodityFormValues } from "./components/CharacterSaleCommodityForm";
import CoinCommodityForm, { CoinCommodityFormValues } from "./components/CoinCommodityForm";
import PosterInfoForm, { PosterInfoFormValues, PosterInfoValidFormProps } from "./components/PosterInfoForm";

import "./style.scss";

type CommodityFormValues =
  | CoinCommodityFormValues
  | AppearanceCommodityFormValues
  | CharacterPurchaseCommodityFormValues
  | CharacterSaleCommodityFormValues;
type RcFormInstance<Values = CommodityFormValues> = Omit<FormInstance<Values>, "scrollToField" | "getFieldInstance">;

Component.displayName = "Post";
export function Component() {
  const [posterForm] = Form.useForm<PosterInfoFormValues>();
  const [category, setCategory] = useState<{
    transactionType: TransactionEnum.Type;
    commodityType: TransactionEnum.Commodity;
  }>({
    transactionType: TransactionEnum.Type.SALE,
    commodityType: TransactionEnum.Commodity.Coin,
  });

  const isActiveCategory = (transactionType: TransactionEnum.Type, commodityType: TransactionEnum.Commodity) => {
    return category.transactionType === transactionType && category.commodityType === commodityType;
  };

  const getFormName = (transactionType: TransactionEnum.Type, commodityType: TransactionEnum.Commodity) => {
    return `${commodityType}-${transactionType}-commodity-form`;
  };

  const handleClickCategory = (transactionType: TransactionEnum.Type, commodityType: TransactionEnum.Commodity) => {
    setCategory({
      transactionType,
      commodityType,
    });
  };

  const handleClickPost = async (forms: Record<string, RcFormInstance>) => {
    const commodityForm = forms[getFormName(category.transactionType, category.commodityType)];
    const commodityValues = commodityForm.getFieldsValue();
    const posterValues = posterForm.getFieldsValue();
    console.log("[test] handleClickPost", { commodityValues, posterValues });

    try {
      const commodityValues = await commodityForm.validateFields();
      console.log("[test] commodityForm values", commodityValues);
    } catch (error) {
      console.log("[test] commodityForm error", error);
    }

    try {
      const posterValues = (await posterForm.validateFields()) as PosterInfoValidFormProps;
      console.log("[test] posterForm values", posterValues);
    } catch (error) {
      console.log("[test] posterForm error", error);
    }
  };

  return (
    <div className="post-page">
      <Breadcrumb
        className="post-page__breadcrumb"
        separator=">"
        items={[
          {
            title: "首頁",
            href: "/",
          },
          {
            title: "刊登商品",
            href: "/post",
          },
        ]}
      />
      <Flex className="post-page__content" gap={10}>
        <div className="commodity_category">
          <div className="title">刊登商品類別</div>
          <Flex gap={12} vertical>
            <div className="sub-title">寄賣</div>
            <Flex vertical>
              <div
                className={classNames(
                  "item",
                  isActiveCategory(TransactionEnum.Type.SALE, TransactionEnum.Commodity.Coin) && "active"
                )}
                onClick={() => handleClickCategory(TransactionEnum.Type.SALE, TransactionEnum.Commodity.Coin)}
              >
                金幣
              </div>
              <div
                className={classNames(
                  "item",
                  isActiveCategory(TransactionEnum.Type.SALE, TransactionEnum.Commodity.Appearance) && "active"
                )}
                onClick={() => handleClickCategory(TransactionEnum.Type.SALE, TransactionEnum.Commodity.Appearance)}
              >
                外觀
              </div>
              <div
                className={classNames(
                  "item",
                  isActiveCategory(TransactionEnum.Type.SALE, TransactionEnum.Commodity.Character) && "active"
                )}
                onClick={() => handleClickCategory(TransactionEnum.Type.SALE, TransactionEnum.Commodity.Character)}
              >
                角色
              </div>
            </Flex>
            <div className="sub-title">收購</div>
            <Flex vertical>
              <div
                className={classNames(
                  "item",
                  isActiveCategory(TransactionEnum.Type.PURCHASE, TransactionEnum.Commodity.Coin) && "active"
                )}
                onClick={() => handleClickCategory(TransactionEnum.Type.PURCHASE, TransactionEnum.Commodity.Coin)}
              >
                金幣
              </div>
              <div
                className={classNames(
                  "item",
                  isActiveCategory(TransactionEnum.Type.PURCHASE, TransactionEnum.Commodity.Appearance) && "active"
                )}
                onClick={() => handleClickCategory(TransactionEnum.Type.PURCHASE, TransactionEnum.Commodity.Appearance)}
              >
                外觀
              </div>
              <div
                className={classNames(
                  "item",
                  isActiveCategory(TransactionEnum.Type.PURCHASE, TransactionEnum.Commodity.Character) && "active"
                )}
                onClick={() => handleClickCategory(TransactionEnum.Type.PURCHASE, TransactionEnum.Commodity.Character)}
              >
                角色
              </div>
            </Flex>
          </Flex>
          <img className="divider-decorate" src={PostCategoryDividerImage} />
          <div className="edit-button">修改/下架商品</div>
        </div>
        <Flex flex={1} gap={12} vertical>
          <Form.Provider onFormFinish={(name, info) => name === "action" && handleClickPost(info.forms)}>
            <div className="commodity_form-card">
              <div className="title">刊登商品資訊</div>
              <div className="content">
                <CoinCommodityForm
                  show={isActiveCategory(TransactionEnum.Type.SALE, TransactionEnum.Commodity.Coin)}
                  name={getFormName(TransactionEnum.Type.SALE, TransactionEnum.Commodity.Coin)}
                  transactionType={category.transactionType}
                />
                <CoinCommodityForm
                  show={isActiveCategory(TransactionEnum.Type.PURCHASE, TransactionEnum.Commodity.Coin)}
                  name={getFormName(TransactionEnum.Type.PURCHASE, TransactionEnum.Commodity.Coin)}
                  transactionType={category.transactionType}
                />
                <AppearanceCommodityForm
                  show={isActiveCategory(TransactionEnum.Type.SALE, TransactionEnum.Commodity.Appearance)}
                  name={getFormName(TransactionEnum.Type.SALE, TransactionEnum.Commodity.Appearance)}
                  transactionType={category.transactionType}
                />
                <AppearanceCommodityForm
                  show={isActiveCategory(TransactionEnum.Type.PURCHASE, TransactionEnum.Commodity.Appearance)}
                  name={getFormName(TransactionEnum.Type.PURCHASE, TransactionEnum.Commodity.Appearance)}
                  transactionType={category.transactionType}
                />
                {category.commodityType === TransactionEnum.Commodity.Character &&
                  (category.transactionType === TransactionEnum.Type.SALE ? (
                    <CharacterSaleCommodityForm />
                  ) : (
                    <CharacterPurchaseCommodityForm />
                  ))}
              </div>
            </div>
            <div className="commodity_form-card">
              <div className="title">刊登者資訊</div>
              <div className="content">
                <PosterInfoForm form={posterForm} />
              </div>
            </div>
            <Flex className="commodity_action" justify="space-between" align="center">
              <div className="tip">填寫商品資料後，按下「刊登」或「更新」儲存您的設定。</div>
              <Form name="action">
                <Form.Item>
                  <button className="button" type="submit">
                    刊登
                  </button>
                </Form.Item>
              </Form>
            </Flex>
          </Form.Provider>
        </Flex>
      </Flex>
    </div>
  );
}
