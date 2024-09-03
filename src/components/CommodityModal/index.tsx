import { Avatar, Flex, Modal } from "antd";

import "./style.scss";
import { UserOutlined } from "@ant-design/icons";

import UserIcon from "@/assets/icon/user.svg";
import DiscordIcon from "@/assets/icon/discord.svg";
import LineIcon from "@/assets/icon/line.svg";
import FacebookIcon from "@/assets/icon/facebook.svg";
import MarketModalDivider from "@/assets/decorate/market-modal_divider.svg";
import { CommodityItem, TransactionItem } from "@/types";
import dayjs from "dayjs";
import { ContactInfoEnum } from "@/enums";
import { getOptionsLabel } from "@/utils";
import { ContactInfoConst } from "@/consts";

type CommodityModalProps = {
  show: boolean;
  item: TransactionItem<CommodityItem<unknown>> | null;
  renderHeader: (item: TransactionItem<CommodityItem<unknown>>) => React.ReactNode;
  renderDetail: (item: TransactionItem<CommodityItem<unknown>>) => React.ReactNode;
  onClose: () => void;
};
export default function CommodityModal(props: CommodityModalProps) {
  const { show, item, renderHeader, renderDetail, onClose } = props;
  const ContactInfoIconMap: Record<ContactInfoEnum.Type, string> = {
    [ContactInfoEnum.Type.DISCORD]: DiscordIcon,
    [ContactInfoEnum.Type.LINE]: LineIcon,
    [ContactInfoEnum.Type.FACEBOOK]: FacebookIcon,
    [ContactInfoEnum.Type.PRIVATE_MESSAGE]: UserIcon,
  };

  return (
    <Modal
      className="commodity-modal"
      open={show}
      onCancel={onClose}
      closable={false}
      footer={null}
      modalRender={(node) => <div className="commodity-modal__wrapper">{node}</div>}
      centered
      maskClosable
    >
      <Flex style={{ height: "100%" }} gap={5}>
        <Flex className="commodity-modal__content" flex={1} gap={4} vertical>
          {item && renderHeader(item)}
          <img src={MarketModalDivider} />
          {item && renderDetail(item)}
          <img src={MarketModalDivider} />
          <Flex flex={1}>
            <pre className="remark">{item?.commodity.remark}</pre>
          </Flex>
          <Flex>
            <span className="footer-update">更新於: {dayjs(item?.updatedAt).format("YYYY/MM/DD")}</span>
          </Flex>
        </Flex>
        <Flex className="commodity-modal__user-card" gap={37} vertical>
          <Flex style={{ height: 139 }} gap={8} align="center" justify="center" vertical>
            <Avatar size={75} icon={<UserOutlined />} src={item?.postedBy.avatarUrl} />
            <span className="nickname">{item?.postedBy.nickname}</span>
          </Flex>
          <Flex style={{ padding: "0 10px" }} flex={1} gap={15} vertical>
            <Flex gap={10} vertical>
              <Flex className="label" align="center">
                <img src={ContactInfoIconMap[ContactInfoEnum.Type.PRIVATE_MESSAGE]} />
                <span>遊戲ID</span>
              </Flex>
              <Flex className="value">{item?.postedBy.gameId}</Flex>
            </Flex>
            {item?.postedBy.contacts.map(({ name, value }) => (
              <Flex key={name} gap={10} vertical>
                <Flex className="label" align="center">
                  <img src={ContactInfoIconMap[name]} />
                  <span>{getOptionsLabel(name, ContactInfoConst.getTypeOptions())}</span>
                </Flex>
                <Flex className="value">{value}</Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
}
