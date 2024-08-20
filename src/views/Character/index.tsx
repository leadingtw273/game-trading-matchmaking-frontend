import { Avatar, Breadcrumb, Divider, Flex, Image, Tag } from "antd";
import { useLocation, useParams } from "react-router-dom";

import "./style.scss";
import { IdType, TransactionItem } from "@/types";
import { CharacterCommodity } from "../Market/Character";
import { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { CharacterConst, ContactInfoConst, CurrencyConst, TransactionConst } from "@/consts";
import { getOptionsLabel } from "@/utils";

import TransactionIcon from "@/assets/icon/transaction.svg";
import UserIcon from "@/assets/icon/user.svg";
import DiscordIcon from "@/assets/icon/discord.svg";
import LineIcon from "@/assets/icon/line.svg";
import FacebookIcon from "@/assets/icon/facebook.svg";
import { ContactInfoEnum } from "@/enums";
import { UserOutlined } from "@ant-design/icons";

Component.displayName = "Character";
export function Component() {
  const { state } = useLocation() as { state: { item?: TransactionItem<CharacterCommodity> } };
  const { id } = useParams() as { id: IdType };
  const [detail, setDetail] = useState<TransactionItem<CharacterCommodity> | null>(null);
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  const ContactInfoIconMap: Record<ContactInfoEnum.Type, string> = {
    [ContactInfoEnum.Type.DISCORD]: DiscordIcon,
    [ContactInfoEnum.Type.LINE]: LineIcon,
    [ContactInfoEnum.Type.FACEBOOK]: FacebookIcon,
    [ContactInfoEnum.Type.PRIVATE_MESSAGE]: UserIcon,
  };

  const requestDetail = useCallback(
    <Response,>(id: IdType): Response => {
      console.log("[test] requestDetail", id);
      // TODO: fetch data from server
      return state.item as Response;
    },
    [state.item]
  );

  useEffect(() => {
    if (state.item) {
      setDetail(state.item);
    } else {
      const item = requestDetail<TransactionItem<CharacterCommodity>>(id);
      setDetail(item);
    }
  }, [id, requestDetail, state.item]);

  return (
    <Flex className="character-page" gap={10} vertical>
      {detail && (
        <>
          <Flex style={{ padding: "0 10px" }} justify="space-between" align="center">
            <Breadcrumb
              separator=">"
              items={[
                {
                  title: "首頁",
                  href: "/",
                },
                {
                  title: "買賣角色",
                  href: "/market/character",
                },
                {
                  title: ":id",
                },
              ]}
              params={{ id: id }}
            />
            <span>更新於: {dayjs(detail.updatedAt).format("YYYY/MM/DD")}</span>
          </Flex>
          <Image.PreviewGroup>
            <Flex gap={10}>
              <Image className="image-block main" src={detail.commodity.imageList?.[0]} />
              <Flex wrap="wrap" flex="1" gap={10}>
                {detail.commodity.imageList
                  ?.slice(1)
                  .concat(new Array(6 - (detail.commodity.imageList.length - 1)))
                  .fill("")
                  .map((src, index) =>
                    src !== "" ? (
                      <Image key={src} className="image-block" src={src} />
                    ) : (
                      <div key={index} className="image-block empty" />
                    )
                  )}
              </Flex>
            </Flex>
          </Image.PreviewGroup>
          <Flex gap={10}>
            <Flex className="border" style={{ padding: "20px", width: 900 }} gap={20} vertical>
              <Flex style={{ padding: "10px 0" }} justify="space-between" align="flex-end">
                <Flex gap={20} vertical>
                  <Flex gap={10}>
                    <span className="title">
                      {CharacterConst.getSectOptionsByInnerSkill(detail.commodity.innerSkillList[0])?.label}
                    </span>
                    {detail.commodity.innerSkillList.map((innerSkill) => (
                      <span className="title" key={innerSkill}>
                        {CharacterConst.getInnerSkillOptions().find(({ value }) => value === innerSkill)?.label}
                      </span>
                    ))}
                  </Flex>
                  <div>
                    <span>
                      {getOptionsLabel(detail.commodity.bodyTypeList[0], CharacterConst.getBodyTypeOptions())}
                    </span>
                    <Divider type="vertical" style={{ borderColor: "#D9D9D9", margin: "0 6px" }} />
                    <span>{getOptionsLabel(detail.commodity.campList[0], CharacterConst.getCampTypeOptions())}</span>
                    <Divider type="vertical" style={{ borderColor: "#D9D9D9", margin: "0 6px" }} />
                    <span>{detail.commodity.level}等</span>
                    {Object.entries(detail.commodity.info)
                      .filter(([, active]) => active)
                      .map(([status]) => (
                        <>
                          <Divider type="vertical" style={{ borderColor: "#D9D9D9", margin: "0 6px" }} />
                          <span key={status}>{getOptionsLabel(status, CharacterConst.getInfoTypeOptions())}</span>
                        </>
                      ))}
                  </div>
                </Flex>
                <div className="prize">
                  <span>{getOptionsLabel(detail.commodity.price.currency, CurrencyConst.getTypeOptions())} </span>
                  <span>{currencyFormatter(detail.commodity.price.value)}</span>
                </div>
              </Flex>
              <Flex gap={10}>
                <Flex className="border" style={{ padding: 20, width: "33.33%", height: 226 }} gap={10} vertical>
                  <span className="sub-title">裝備分數</span>
                  <table className="info" style={{ width: "fit-content", borderSpacing: "0 8px" }}>
                    {detail.commodity.gearScoreList.map((gearScore) => (
                      <tr
                        key={gearScore.innerSkill + "_" + gearScore.type + "_" + gearScore.score}
                        style={{ verticalAlign: "baseline" }}
                      >
                        <td>
                          <span className="info-label">
                            {
                              CharacterConst.getInnerSkillOptions().find(({ value }) => value === gearScore.innerSkill)
                                ?.label
                            }
                          </span>
                        </td>
                        <td>
                          <div className="border-divider__left">
                            {gearScore.type}
                            <span className="split-dot" />
                            {gearScore.score}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </table>
                </Flex>
                <Flex className="border" style={{ padding: 20, width: "33.33%", height: 226 }} gap={10} vertical>
                  <span className="sub-title">副本·陣營·百戰·家園</span>
                  <table className="info" style={{ width: "fit-content", borderSpacing: "0 8px" }}>
                    <tr style={{ verticalAlign: "baseline" }}>
                      <td>
                        <span className="info-label">戰階</span>
                      </td>
                      <td>
                        <div className="border-divider__left">{detail.commodity.battleRank}</div>
                      </td>
                    </tr>
                    <tr style={{ verticalAlign: "baseline" }}>
                      <td>
                        <span className="info-label">名劍分數</span>
                      </td>
                      <td>
                        <Flex className="border-divider__left" gap={4} vertical>
                          {detail.commodity.arenaScoreList?.map(({ type, score }) => (
                            <span style={{ lineHeight: "16px" }} key={type}>
                              <span>{getOptionsLabel(type, CharacterConst.getArenaTypeOptions())}</span>
                              <span className="split-dot" />
                              <span>{score}</span>
                            </span>
                          ))}
                        </Flex>
                      </td>
                    </tr>
                    <tr style={{ verticalAlign: "baseline" }}>
                      <td>
                        <span className="info-label">百戰</span>
                      </td>
                      <td>
                        <div className="border-divider__left">
                          <span className="endless-battle-tag energy">精</span>
                          <span>{detail.commodity.endlessBattleValue?.energy}</span>
                          <span className="split-dot" />
                          <span className="endless-battle-tag stamina">耐</span>
                          <span>{detail.commodity.endlessBattleValue?.stamina}</span>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ verticalAlign: "baseline" }}>
                      <td>
                        <span className="info-label">家園</span>
                      </td>
                      <td>
                        <div className="border-divider__left">{detail.commodity.estateRank}</div>
                      </td>
                    </tr>
                  </table>
                </Flex>
                <Flex className="border" style={{ padding: 20, width: "33.33%", height: 226 }} gap={10} vertical>
                  <span className="sub-title">資歷·寵物·外觀</span>
                  <table className="info" style={{ width: "fit-content", borderSpacing: "0 8px" }}>
                    <tr style={{ verticalAlign: "baseline" }}>
                      <td>
                        <span className="info-label">資歷分數</span>
                      </td>
                      <td>
                        <div className="border-divider__left">{detail.commodity.accomplishmentScore}</div>
                      </td>
                    </tr>
                    <tr style={{ verticalAlign: "baseline" }}>
                      <td>
                        <span className="info-label">寵物分數</span>
                      </td>
                      <td>
                        <div className="border-divider__left">{detail.commodity.petScore}</div>
                      </td>
                    </tr>
                    <tr style={{ verticalAlign: "baseline" }}>
                      <td>
                        <span className="info-label">外觀</span>
                      </td>
                      <td>
                        <Flex className="border-divider__left" gap={8} vertical>
                          {detail.commodity.skinCount?.map(({ type, value }) => (
                            <span style={{ lineHeight: 1 }} key={type}>
                              <span>{getOptionsLabel(type, CharacterConst.getSkinTypeOptions())}</span>
                              <span style={{ display: "inline-block", width: 30, margin: "0 8px" }}>{value}</span>
                              <span>{getOptionsLabel(type, CharacterConst.getSkinTypeUnitOption())}</span>
                            </span>
                          ))}
                        </Flex>
                      </td>
                    </tr>
                  </table>
                </Flex>
              </Flex>
              <Flex className="border" style={{ padding: "20px" }} gap={10} vertical>
                <span className="sub-title">標籤</span>
                <Flex gap={5}>
                  {detail.commodity.tags.map((tag) => (
                    <Tag className="tag" key={tag} style={{ margin: 0 }}>
                      {tag}
                    </Tag>
                  ))}
                </Flex>
              </Flex>
              <Flex className="border" style={{ padding: "20px" }} gap={10} vertical>
                <span className="sub-title">備註</span>
                <pre className="remark" style={{ margin: 0 }}>
                  {detail.commodity.remark}
                </pre>
              </Flex>
            </Flex>
            <Flex className="contact-info" gap={5} vertical>
              <Flex style={{ paddingTop: 24, height: 200 }} gap={8} align="center" vertical>
                <Avatar size={75} icon={<UserOutlined />} />
                <span className="nickname">{detail.postedBy.nickname}</span>
              </Flex>
              <Flex style={{ padding: "0 10px" }} flex={1} gap={15} vertical>
                <Flex gap={10} vertical>
                  <Flex className="label" align="center">
                    <img src={TransactionIcon} />
                    <span>交易方式</span>
                  </Flex>
                  <Flex className="value split-dot__insert">
                    {detail.methods.map((method) => (
                      <span key={method}>{getOptionsLabel(method, TransactionConst.getMethodOptions())}</span>
                    ))}
                  </Flex>
                </Flex>
                <Flex gap={10} vertical>
                  <Flex className="label" align="center">
                    <img src={ContactInfoIconMap[ContactInfoEnum.Type.PRIVATE_MESSAGE]} />
                    <span>遊戲ID</span>
                  </Flex>
                  <Flex className="value">{detail.postedBy.gameId}</Flex>
                </Flex>
                {detail.postedBy.contacts.map(({ name, value }) => (
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
        </>
      )}
    </Flex>
  );
}
