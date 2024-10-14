import { CharacterEnum, ContactInfoEnum, CurrencyEnum, TransactionEnum } from "@/enums";
import { CharacterCommodity, TransactionItem } from "@/types";

export default [
  {
    id: "1",
    type: TransactionEnum.Type.SALE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [
      TransactionEnum.Method.LINE_PAY,
      TransactionEnum.Method.BANK_TRANSFER,
      TransactionEnum.Method.THIRD_PARTY_8591,
    ],
    commodity: {
      id: "1-1",
      type: TransactionEnum.Commodity.Character,
      sectList: [],
      innerSkillList: [CharacterEnum.InnerSkillType.AO_XUE_ZHAN_YI, CharacterEnum.InnerSkillType.TIE_LAO_LV],
      bodyTypeList: [CharacterEnum.BodyType.MAN],
      campList: [CharacterEnum.CampType.E_REN_GU],
      level: 120,
      info: {
        noDebt: true,
        needChangeName: false,
        needTransferred: true,
        needFullLevel: true,
      },
      price: {
        currency: CurrencyEnum.Type.TWD,
        value: 2000,
      },
      imageList: ["https://img.9553.com/uploadfile/2016/1003/20161003091632544.jpg"],
      gearScoreList: [
        {
          innerSkill: CharacterEnum.InnerSkillType.AO_XUE_ZHAN_YI,
          type: CharacterEnum.GearType.PVE,
          score: 270000,
        },
        {
          innerSkill: CharacterEnum.InnerSkillType.AO_XUE_ZHAN_YI,
          type: CharacterEnum.GearType.PVP,
          score: 275000,
        },
        {
          innerSkill: CharacterEnum.InnerSkillType.TIE_LAO_LV,
          type: CharacterEnum.GearType.PVE,
          score: 263000,
        },
        {
          innerSkill: CharacterEnum.InnerSkillType.TIE_LAO_LV,
          type: CharacterEnum.GearType.PVP,
          score: 251000,
        },
      ],
      battleRankScore: 14000,
      arenaScoreList: [
        {
          type: CharacterEnum.ArenaType.TWO_VS_TWO,
          score: 100,
        },
        {
          type: CharacterEnum.ArenaType.THREE_VS_THREE,
          score: 1600,
        },
        {
          type: CharacterEnum.ArenaType.FIVE_VS_FIVE,
          score: 1400,
        },
      ],
      estateRankScore: 100,
      endlessBattleValue: {
        energy: 100,
        stamina: 100,
      },
      accomplishmentScore: 290000,
      petScore: 1000,
      skinCount: [
        {
          type: CharacterEnum.SkinType.HAIR,
          value: 22,
        },
        {
          type: CharacterEnum.SkinType.BODY,
          value: 4,
        },
        {
          type: CharacterEnum.SkinType.FACE,
          value: 15,
        },
        {
          type: CharacterEnum.SkinType.INTERACTION,
          value: 7,
        },
      ],
      remark: "備註",
      tags: ["標籤1", "標籤2"],
    },
    postedBy: {
      avatarUrl: "https://i.pravatar.cc/300?img=5",
      nickname: "User1",
      gameId: "GameId1",
      contacts: [
        { name: ContactInfoEnum.Type.DISCORD, value: "#1234" },
        { name: ContactInfoEnum.Type.LINE, value: "0912345678" },
        { name: ContactInfoEnum.Type.FACEBOOK, value: "FBUser1" },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "2",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [
      TransactionEnum.Method.LINE_PAY,
      TransactionEnum.Method.PAID_LETTER,
      TransactionEnum.Method.THIRD_PARTY_8591,
    ],
    commodity: {
      id: "2-1",
      type: TransactionEnum.Commodity.Character,
      sectList: [],
      innerSkillList: [
        CharacterEnum.InnerSkillType.BU_TIAN_JUE,
        CharacterEnum.InnerSkillType.YUN_SHANG_XIN_JING,
        CharacterEnum.InnerSkillType.LI_JING_YI_DAO,
        CharacterEnum.InnerSkillType.LING_SU,
        CharacterEnum.InnerSkillType.XIANG_ZHI,
      ],
      bodyTypeList: [CharacterEnum.BodyType.GIRL, CharacterEnum.BodyType.WOMAN],
      campList: [CharacterEnum.CampType.NEUTRAL, CharacterEnum.CampType.HAO_QI_MENG],
      level: 120,
      info: {
        noDebt: true,
        needChangeName: false,
        needTransferred: true,
        needFullLevel: true,
      },
      price: {
        currency: CurrencyEnum.Type.TWD,
        value: 24000,
      },
      imageList: null,
      gearScoreList: [
        {
          innerSkill: null,
          type: CharacterEnum.GearType.PVE,
          score: 200000,
        },
        {
          innerSkill: null,
          type: CharacterEnum.GearType.PVP,
          score: 200000,
        },
      ],
      battleRankScore: null,
      arenaScoreList: null,
      estateRankScore: null,
      endlessBattleValue: null,
      accomplishmentScore: null,
      petScore: null,
      skinCount: null,
      remark: "備註",
      tags: ["標籤1", "標籤2"],
    },
    postedBy: {
      avatarUrl: "https://i.pravatar.cc/300?img=5",
      nickname: "User1",
      gameId: "GameId1",
      contacts: [
        { name: ContactInfoEnum.Type.DISCORD, value: "#1234" },
        { name: ContactInfoEnum.Type.LINE, value: "0912345678" },
        { name: ContactInfoEnum.Type.FACEBOOK, value: "FBUser1" },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
] as TransactionItem<CharacterCommodity>[];
