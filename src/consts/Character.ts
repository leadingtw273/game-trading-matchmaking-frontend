import { CharacterEnum } from "@/enums";

/** 心法對應表 */
export const SectInnerSkillMap = new Map([
  [CharacterEnum.SectType.DA_XIA, []],
  [
    CharacterEnum.SectType.CHUN_YANG,
    [CharacterEnum.InnerSkillType.ZI_XIA_GONG, CharacterEnum.InnerSkillType.TAI_XU_JIAN_YI],
  ],
  [
    CharacterEnum.SectType.QI_XIU,
    [CharacterEnum.InnerSkillType.BING_XIN_JUE, CharacterEnum.InnerSkillType.YUN_SHANG_XIN_JING],
  ],
  [
    CharacterEnum.SectType.WAN_HUA,
    [CharacterEnum.InnerSkillType.HUA_JIAN_YOU, CharacterEnum.InnerSkillType.LI_JING_YI_DAO],
  ],
  [
    CharacterEnum.SectType.SHAO_LIN,
    [CharacterEnum.InnerSkillType.YI_JIN_JING, CharacterEnum.InnerSkillType.XI_SUI_JING],
  ],
  [
    CharacterEnum.SectType.TIAN_CE,
    [CharacterEnum.InnerSkillType.AO_XUE_ZHAN_YI, CharacterEnum.InnerSkillType.TIE_LAO_LV],
  ],
  [CharacterEnum.SectType.CANG_JIAN, [CharacterEnum.InnerSkillType.WEN_SHUI_JUE]],
  [CharacterEnum.SectType.WU_DU, [CharacterEnum.InnerSkillType.DU_JING, CharacterEnum.InnerSkillType.BU_TIAN_JUE]],
  [
    CharacterEnum.SectType.TANG_MEN,
    [CharacterEnum.InnerSkillType.TIAN_LUO_GUI_DAO, CharacterEnum.InnerSkillType.JING_YU_JUE],
  ],
  [
    CharacterEnum.SectType.MING_JIAO,
    [CharacterEnum.InnerSkillType.FEN_YING_SHENG_JUE, CharacterEnum.InnerSkillType.MING_ZUN_LIU_LI_TI],
  ],
  [CharacterEnum.SectType.GAI_BANG, [CharacterEnum.InnerSkillType.XIAO_CHEN_JUE]],
  [
    CharacterEnum.SectType.CANG_YUN,
    [CharacterEnum.InnerSkillType.FEN_SHAN_JIN, CharacterEnum.InnerSkillType.TIE_GU_YI],
  ],
  [CharacterEnum.SectType.CHANG_GE, [CharacterEnum.InnerSkillType.MO_WEN, CharacterEnum.InnerSkillType.XIANG_ZHI]],
  [CharacterEnum.SectType.BA_DAO, [CharacterEnum.InnerSkillType.BEI_AO_JUE]],
  [CharacterEnum.SectType.PENG_LAI, [CharacterEnum.InnerSkillType.LING_HAI_JUE]],
  [CharacterEnum.SectType.LING_XUE, [CharacterEnum.InnerSkillType.YIN_LONG_JUE]],
  [CharacterEnum.SectType.YAN_TIAN, [CharacterEnum.InnerSkillType.TAI_XUAN_JING]],
  [CharacterEnum.SectType.YAO_ZONG, [CharacterEnum.InnerSkillType.WU_FANG, CharacterEnum.InnerSkillType.LING_SU]],
  [CharacterEnum.SectType.DAO_ZONG, [CharacterEnum.InnerSkillType.GU_FENG_JUE]],
  [CharacterEnum.SectType.WAN_LING, [CharacterEnum.InnerSkillType.SHAN_HAI_XIN_JUE]],
]);

/** 門派對應表 */
export const InnerSkillSectMap = new Map([
  [CharacterEnum.InnerSkillType.ZI_XIA_GONG, CharacterEnum.SectType.CHUN_YANG],
  [CharacterEnum.InnerSkillType.TAI_XU_JIAN_YI, CharacterEnum.SectType.CHUN_YANG],
  [CharacterEnum.InnerSkillType.BING_XIN_JUE, CharacterEnum.SectType.QI_XIU],
  [CharacterEnum.InnerSkillType.YUN_SHANG_XIN_JING, CharacterEnum.SectType.QI_XIU],
  [CharacterEnum.InnerSkillType.HUA_JIAN_YOU, CharacterEnum.SectType.WAN_HUA],
  [CharacterEnum.InnerSkillType.LI_JING_YI_DAO, CharacterEnum.SectType.WAN_HUA],
  [CharacterEnum.InnerSkillType.YI_JIN_JING, CharacterEnum.SectType.SHAO_LIN],
  [CharacterEnum.InnerSkillType.XI_SUI_JING, CharacterEnum.SectType.SHAO_LIN],
  [CharacterEnum.InnerSkillType.AO_XUE_ZHAN_YI, CharacterEnum.SectType.TIAN_CE],
  [CharacterEnum.InnerSkillType.TIE_LAO_LV, CharacterEnum.SectType.TIAN_CE],
  [CharacterEnum.InnerSkillType.WEN_SHUI_JUE, CharacterEnum.SectType.CANG_JIAN],
  [CharacterEnum.InnerSkillType.DU_JING, CharacterEnum.SectType.WU_DU],
  [CharacterEnum.InnerSkillType.BU_TIAN_JUE, CharacterEnum.SectType.WU_DU],
  [CharacterEnum.InnerSkillType.TIAN_LUO_GUI_DAO, CharacterEnum.SectType.TANG_MEN],
  [CharacterEnum.InnerSkillType.JING_YU_JUE, CharacterEnum.SectType.TANG_MEN],
  [CharacterEnum.InnerSkillType.FEN_YING_SHENG_JUE, CharacterEnum.SectType.MING_JIAO],
  [CharacterEnum.InnerSkillType.MING_ZUN_LIU_LI_TI, CharacterEnum.SectType.MING_JIAO],
  [CharacterEnum.InnerSkillType.XIAO_CHEN_JUE, CharacterEnum.SectType.GAI_BANG],
  [CharacterEnum.InnerSkillType.FEN_SHAN_JIN, CharacterEnum.SectType.CANG_YUN],
  [CharacterEnum.InnerSkillType.TIE_GU_YI, CharacterEnum.SectType.CANG_YUN],
  [CharacterEnum.InnerSkillType.MO_WEN, CharacterEnum.SectType.CHANG_GE],
  [CharacterEnum.InnerSkillType.XIANG_ZHI, CharacterEnum.SectType.CHANG_GE],
  [CharacterEnum.InnerSkillType.BEI_AO_JUE, CharacterEnum.SectType.BA_DAO],
  [CharacterEnum.InnerSkillType.LING_HAI_JUE, CharacterEnum.SectType.PENG_LAI],
  [CharacterEnum.InnerSkillType.YIN_LONG_JUE, CharacterEnum.SectType.LING_XUE],
  [CharacterEnum.InnerSkillType.TAI_XUAN_JING, CharacterEnum.SectType.YAN_TIAN],
  [CharacterEnum.InnerSkillType.WU_FANG, CharacterEnum.SectType.YAO_ZONG],
  [CharacterEnum.InnerSkillType.LING_SU, CharacterEnum.SectType.YAO_ZONG],
  [CharacterEnum.InnerSkillType.GU_FENG_JUE, CharacterEnum.SectType.DAO_ZONG],
  [CharacterEnum.InnerSkillType.SHAN_HAI_XIN_JUE, CharacterEnum.SectType.WAN_LING],
]);

/** 門派 Tag 設定對應表 */
export const SectTagOptionMap = new Map([
  [
    CharacterEnum.SectType.CHUN_YANG,
    {
      color: "#12AFAF",
      icon: new URL("@/assets/icon/sect/CHUN_YANG.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.QI_XIU,
    {
      color: "#E84A85",
      icon: new URL("@/assets/icon/sect/QI_XIU.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.WAN_HUA,
    {
      color: "#8D50DE",
      icon: new URL("@/assets/icon/sect/WAN_HUA.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.SHAO_LIN,
    {
      color: "#CF7D24",
      icon: new URL("@/assets/icon/sect/SHAO_LIN.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.TIAN_CE,
    {
      color: "#A52D16",
      icon: new URL("@/assets/icon/sect/TIAN_CE.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.CANG_JIAN,
    {
      color: "#C1B013",
      icon: new URL("@/assets/icon/sect/CANG_JIAN.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.WU_DU,
    {
      color: "#462BEA",
      icon: new URL("@/assets/icon/sect/WU_DU.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.TANG_MEN,
    {
      color: "#7EAE4A",
      icon: new URL("@/assets/icon/sect/TANG_MEN.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.MING_JIAO,
    {
      color: "#CE4253",
      icon: new URL("@/assets/icon/sect/MING_JIAO.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.GAI_BANG,
    {
      color: "#B27F4D",
      icon: new URL("@/assets/icon/sect/GAI_BANG.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.CANG_YUN,
    {
      color: "#682808",
      icon: new URL("@/assets/icon/sect/CANG_YUN.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.CHANG_GE,
    {
      color: "#4DC18B",
      icon: new URL("@/assets/icon/sect/CHANG_GE.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.BA_DAO,
    {
      color: "#5658B7",
      icon: new URL("@/assets/icon/sect/BA_DAO.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.PENG_LAI,
    {
      color: "#79B6CF",
      icon: new URL("@/assets/icon/sect/PENG_LAI.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.LING_XUE,
    {
      color: "#A10922",
      icon: new URL("@/assets/icon/sect/LING_XUE.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.YAN_TIAN,
    {
      color: "#602D94",
      icon: new URL("@/assets/icon/sect/YAN_TIAN.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.YAO_ZONG,
    {
      color: "#009B6D",
      icon: new URL("@/assets/icon/sect/YAO_ZONG.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.DAO_ZONG,
    {
      color: "#548FBD",
      icon: new URL("@/assets/icon/sect/DAO_ZONG.svg", import.meta.url).href,
    },
  ],
  [
    CharacterEnum.SectType.WAN_LING,
    {
      color: "#ECAC3D",
      icon: new URL("@/assets/icon/sect/WAN_LING.svg", import.meta.url).href,
    },
  ],
]);

/**
 * 獲取門派對應心法選項
 * @param sect 門派
 * @returns 心法選項
 */
export const getSectInnerSkillOptions = (sect: CharacterEnum.SectType) => {
  const innerSkillList = SectInnerSkillMap.get(sect);
  return getInnerSkillOptions().filter(({ value }) => innerSkillList?.includes(value));
};

/** 獲取門派選項 */
export const getSectOptions = () => [
  { label: "大俠", value: CharacterEnum.SectType.DA_XIA },
  { label: "純陽", value: CharacterEnum.SectType.CHUN_YANG },
  { label: "七秀", value: CharacterEnum.SectType.QI_XIU },
  { label: "萬花", value: CharacterEnum.SectType.WAN_HUA },
  { label: "少林", value: CharacterEnum.SectType.SHAO_LIN },
  { label: "天策", value: CharacterEnum.SectType.TIAN_CE },
  { label: "藏劍", value: CharacterEnum.SectType.CANG_JIAN },
  { label: "五毒", value: CharacterEnum.SectType.WU_DU },
  { label: "唐門", value: CharacterEnum.SectType.TANG_MEN },
  { label: "明教", value: CharacterEnum.SectType.MING_JIAO },
  { label: "丐幫", value: CharacterEnum.SectType.GAI_BANG },
  { label: "蒼雲", value: CharacterEnum.SectType.CANG_YUN },
  { label: "長歌", value: CharacterEnum.SectType.CHANG_GE },
  { label: "霸刀", value: CharacterEnum.SectType.BA_DAO },
  { label: "蓬萊", value: CharacterEnum.SectType.PENG_LAI },
  { label: "凌雪", value: CharacterEnum.SectType.LING_XUE },
  { label: "衍天", value: CharacterEnum.SectType.YAN_TIAN },
  { label: "藥宗", value: CharacterEnum.SectType.YAO_ZONG },
  { label: "刀宗", value: CharacterEnum.SectType.DAO_ZONG },
  { label: "萬靈", value: CharacterEnum.SectType.WAN_LING },
];

/** 獲取心法選項 */
export const getInnerSkillOptions = () => [
  { label: "冰心訣", value: CharacterEnum.InnerSkillType.BING_XIN_JUE },
  { label: "雲裳心經", value: CharacterEnum.InnerSkillType.YUN_SHANG_XIN_JING },
  { label: "花間遊", value: CharacterEnum.InnerSkillType.HUA_JIAN_YOU },
  { label: "離經易道", value: CharacterEnum.InnerSkillType.LI_JING_YI_DAO },
  { label: "毒經", value: CharacterEnum.InnerSkillType.DU_JING },
  { label: "補天訣", value: CharacterEnum.InnerSkillType.BU_TIAN_JUE },
  { label: "莫問", value: CharacterEnum.InnerSkillType.MO_WEN },
  { label: "相知", value: CharacterEnum.InnerSkillType.XIANG_ZHI },
  { label: "無方", value: CharacterEnum.InnerSkillType.WU_FANG },
  { label: "靈素", value: CharacterEnum.InnerSkillType.LING_SU },
  { label: "傲血戰意", value: CharacterEnum.InnerSkillType.AO_XUE_ZHAN_YI },
  { label: "鐵牢律", value: CharacterEnum.InnerSkillType.TIE_LAO_LV },
  { label: "易筋經", value: CharacterEnum.InnerSkillType.YI_JIN_JING },
  { label: "洗髓經", value: CharacterEnum.InnerSkillType.XI_SUI_JING },
  { label: "焚影聖訣", value: CharacterEnum.InnerSkillType.FEN_YING_SHENG_JUE },
  { label: "明尊琉璃體", value: CharacterEnum.InnerSkillType.MING_ZUN_LIU_LI_TI },
  { label: "分山勁", value: CharacterEnum.InnerSkillType.FEN_SHAN_JIN },
  { label: "鐵骨衣", value: CharacterEnum.InnerSkillType.TIE_GU_YI },
  { label: "紫霞功", value: CharacterEnum.InnerSkillType.ZI_XIA_GONG },
  { label: "太虛劍意", value: CharacterEnum.InnerSkillType.TAI_XU_JIAN_YI },
  { label: "天羅詭道", value: CharacterEnum.InnerSkillType.TIAN_LUO_GUI_DAO },
  { label: "驚羽訣", value: CharacterEnum.InnerSkillType.JING_YU_JUE },
  { label: "問水訣", value: CharacterEnum.InnerSkillType.WEN_SHUI_JUE },
  { label: "笑塵訣", value: CharacterEnum.InnerSkillType.XIAO_CHEN_JUE },
  { label: "北傲訣", value: CharacterEnum.InnerSkillType.BEI_AO_JUE },
  { label: "凌海訣", value: CharacterEnum.InnerSkillType.LING_HAI_JUE },
  { label: "隱龍訣", value: CharacterEnum.InnerSkillType.YIN_LONG_JUE },
  { label: "太玄經", value: CharacterEnum.InnerSkillType.TAI_XUAN_JING },
  { label: "孤鋒訣", value: CharacterEnum.InnerSkillType.GU_FENG_JUE },
  { label: "山海心訣", value: CharacterEnum.InnerSkillType.SHAN_HAI_XIN_JUE },
];

/** 獲取體型選項 */
export const getBodyTypeOptions = () => [
  { label: "成男", value: CharacterEnum.BodyType.MAN },
  { label: "成女", value: CharacterEnum.BodyType.WOMAN },
  { label: "正太", value: CharacterEnum.BodyType.BOY },
  { label: "蘿莉", value: CharacterEnum.BodyType.GIRL },
];

/** 獲取陣營選項 */
export const getCampTypeOptions = () => [
  { label: "中立", value: CharacterEnum.CampType.NEUTRAL },
  { label: "浩氣盟", value: CharacterEnum.CampType.HAO_QI_MENG },
  { label: "惡人谷", value: CharacterEnum.CampType.E_REN_GU },
];

/** 獲取外觀選項 */
export const getSkinTypeOptions = () => [
  { label: "髮型", value: CharacterEnum.SkinType.HAIR },
  { label: "體型", value: CharacterEnum.SkinType.BODY },
  { label: "臉型", value: CharacterEnum.SkinType.FACE },
  { label: "交互", value: CharacterEnum.SkinType.INTERACTION },
];
