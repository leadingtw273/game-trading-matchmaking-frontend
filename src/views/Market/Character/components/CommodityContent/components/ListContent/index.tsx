import { Divider, Flex, Tag } from "antd";
import dayjs from "dayjs";
import { TransactionItem } from "@/types";
import { CharacterEnum, TransactionEnum } from "@/enums";
import { CharacterCommodity } from "@/views/Market/Character";

import "./style.scss";
import { CharacterConst, ContactInfoConst, CurrencyConst } from "@/consts";
import { getOptionsLabel } from "@/utils";
import InnerSkillTag from "../InnerSkillTag";
import { getInnerSkillOptions } from "@/consts/Character";

type CommodityContentProps = {
  transactionType: TransactionEnum.Type;
  item: TransactionItem<CharacterCommodity>;
};
export default function CommodityContent(props: CommodityContentProps) {
  const { transactionType, item } = props;
  const { commodity } = item;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  return (
    <div className="commodity list-content">
      {transactionType === TransactionEnum.Type.SALE && (
        <Flex className="sale-type">
          <img className="list-content__image" src={commodity.imageList?.[0]} />
          <Flex className="list-content__content" gap={8} vertical>
            <Flex className="content-header" gap={20} align="flex-end">
              <Flex gap={8}>
                {commodity.innerSkillList.map((innerSkill) => (
                  <InnerSkillTag key={innerSkill} innerSkill={innerSkill}></InnerSkillTag>
                ))}
              </Flex>
              <div>
                <span>{getOptionsLabel(commodity.bodyTypeList[0], CharacterConst.getBodyTypeOptions())}</span>
                <Divider type="vertical" style={{ borderColor: "#bbb", margin: "0 12px" }} />
                <span>{getOptionsLabel(commodity.campList[0], CharacterConst.getCampTypeOptions())}</span>
                <Divider type="vertical" style={{ borderColor: "#bbb", margin: "0 12px" }} />
                <span>{commodity.level}等</span>
                {Object.entries(commodity.info)
                  .filter(([, active]) => active)
                  .map(([status]) => (
                    <>
                      <Divider type="vertical" style={{ borderColor: "#bbb", margin: "0 12px" }} />
                      <span key={status}>{getOptionsLabel(status, CharacterConst.getInfoTypeOptions())}</span>
                    </>
                  ))}
              </div>
            </Flex>
            <Flex className="content-main" gap={32}>
              <Flex className="content-main__left" gap={8} vertical>
                {commodity.gearScoreList
                  .reduce<
                    {
                      innerSkill: CharacterEnum.InnerSkillType | null;
                      type: CharacterEnum.GearType;
                      score: number;
                    }[][]
                  >((acc, gearScore) => {
                    // 查找是否已經有這個 innerSkill 的分組
                    const group = acc.find((group) => group[0].innerSkill === gearScore.innerSkill);

                    if (group) group.push(gearScore); // 如果有，則將當前項目添加到該分組中
                    else acc.push([gearScore]); // 如果沒有，則創建一個新的分組

                    return acc;
                  }, [])
                  .map((group, index) => (
                    <Flex key={index} gap={8}>
                      <span className="label">
                        {getInnerSkillOptions().find((option) => option.value === group[0].innerSkill)?.label}
                      </span>
                      <Flex className="value split-dot" align="flex-end" flex="1">
                        {group.map((gearScore) => (
                          <div key={gearScore.type}>
                            <span>{gearScore.type}</span>
                            &nbsp;
                            <span>{gearScore.score}</span>
                          </div>
                        ))}
                      </Flex>
                    </Flex>
                  ))}
                <Flex gap={8}>
                  <span className="label">名劍分數</span>
                  <span className="value">
                    {commodity.arenaScoreList?.map(({ type, score }, index) => (
                      <>
                        {index !== 0 && <Divider type="vertical" style={{ borderColor: "#bbb", margin: "0 6px" }} />}
                        <span key={type} className="split-dot">
                          <span>{getOptionsLabel(type, CharacterConst.getArenaTypeOptions())}</span>
                          <span>{score}</span>
                        </span>
                      </>
                    ))}
                  </span>
                </Flex>
              </Flex>
              <Flex className="content-main__right" gap={8} vertical>
                <Flex gap={8}>
                  <span className="label">資歷分數</span>
                  <span className="value">{commodity.accomplishmentScore}</span>
                </Flex>
                <Flex gap={8}>
                  <span className="label">寵物分數</span>
                  <span className="value">{commodity.petScore}</span>
                </Flex>
                <Flex gap={8}>
                  <span className="label">聯絡方式</span>
                  <span className="value split-dot">
                    {item.postedBy.contacts.map(({ name }) => (
                      <span key={name}>{getOptionsLabel(name, ContactInfoConst.getTypeOptions())}</span>
                    ))}
                  </span>
                </Flex>
              </Flex>
            </Flex>
            <Flex className="content-tags" gap={4}>
              {commodity.tags.map((tag) => (
                <Tag key={tag} style={{ margin: 0 }}>
                  {tag}
                </Tag>
              ))}
            </Flex>
            <div className="content-update">
              <span>更新時間：</span>
              <span>{dayjs(item.updatedAt).format("YYYY/MM/DD")}</span>
            </div>
          </Flex>
          <div className="list-content__prize">
            <div className="currency">{getOptionsLabel(commodity.price.currency, CurrencyConst.getTypeOptions())}</div>
            <div className="amount">{currencyFormatter(commodity.price.value)}</div>
          </div>
        </Flex>
      )}
      {transactionType === TransactionEnum.Type.PURCHASE && (
        <Flex className="purchase-type">
          <Flex className="list-content__content" gap={8} vertical>
            <Flex className="content-header" gap={20} align="flex-end">
              <Flex gap={8}>
                {commodity.innerSkillList.map((innerSkill) => (
                  <InnerSkillTag key={innerSkill} innerSkill={innerSkill}></InnerSkillTag>
                ))}
              </Flex>
            </Flex>
            <Flex className="content-main" gap={152}>
              <Flex className="content-main__left" gap={8} vertical>
                <Flex gap={8}>
                  <span className="label">收購體型</span>
                  <span className="value split-dot">
                    {commodity.bodyTypeList?.map((bodyType) => (
                      <span key={bodyType}>{getOptionsLabel(bodyType, CharacterConst.getBodyTypeOptions())}</span>
                    ))}
                  </span>
                </Flex>
                <Flex gap={8}>
                  <span className="label">陣營</span>
                  <span className="value split-dot">
                    {commodity.campList?.map((camp) => (
                      <span key={camp}>{getOptionsLabel(camp, CharacterConst.getCampTypeOptions())}</span>
                    ))}
                  </span>
                </Flex>
                <Flex gap={8}>
                  <span className="label">裝備</span>
                  <Flex className="split-dot">
                    {commodity.gearScoreList.map((gearScore) => (
                      <Flex key={gearScore.type}>
                        <span>{gearScore.type}</span>
                        &nbsp;
                        <span>裝分{Math.floor(gearScore.score / 10000)}W+</span>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
              <Flex className="content-main__right" gap={8} vertical>
                <Flex gap={8}>
                  <span className="label">角色狀態</span>
                  <span className="value">
                    {Object.entries(commodity.info)
                      .filter(([, active]) => active)
                      .map(([status]) => (
                        <span key={status}>{getOptionsLabel(status, CharacterConst.getInfoTypeOptions())} </span>
                      ))}
                  </span>
                </Flex>
                <Flex gap={8}>
                  <span className="label">買家</span>
                  <span className="value">{item.postedBy.nickname}</span>
                </Flex>
                <Flex gap={8}>
                  <span className="label">聯絡方式</span>
                  <span className="value split-dot">
                    {item.postedBy.contacts.map(({ name }) => (
                      <span key={name}>{getOptionsLabel(name, ContactInfoConst.getTypeOptions())}</span>
                    ))}
                  </span>
                </Flex>
              </Flex>
            </Flex>
            <Flex className="content-tags" gap={4}>
              {commodity.tags.map((tag) => (
                <Tag key={tag} style={{ margin: 0 }}>
                  {tag}
                </Tag>
              ))}
            </Flex>
            <div className="content-update">
              <span>更新時間：</span>
              <span>{dayjs(item.updatedAt).format("YYYY/MM/DD")}</span>
            </div>
          </Flex>
          <div className="list-content__prize">
            <div className="currency">{getOptionsLabel(commodity.price.currency, CurrencyConst.getTypeOptions())}</div>
            <div className="amount">{currencyFormatter(commodity.price.value)}</div>
          </div>
        </Flex>
      )}
    </div>
  );
}
