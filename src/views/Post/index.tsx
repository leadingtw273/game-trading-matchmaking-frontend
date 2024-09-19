import { Breadcrumb, Flex } from "antd";

import PostCategoryDividerImage from "@/assets/decorate/post-category_divider.svg";

import "./style.scss";

Component.displayName = "Post";
export function Component() {
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
              <div className="item">金幣</div>
              <div className="item">外觀</div>
              <div className="item">角色</div>
            </Flex>
            <div className="sub-title">收購</div>
            <Flex vertical>
              <div className="item">金幣</div>
              <div className="item">外觀</div>
              <div className="item">角色</div>
            </Flex>
          </Flex>
          <img className="divider-decorate" src={PostCategoryDividerImage} />
          <div className="edit-button">修改/下架商品</div>
        </div>
        <Flex vertical>
          <div className="commodity_info">刊登商品資訊</div>
          <div className="commodity_post-by">刊登者資訊</div>
        </Flex>
      </Flex>
    </div>
  );
}
