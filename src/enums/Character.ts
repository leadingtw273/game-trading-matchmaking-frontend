/** 門派 */
export enum SectType {
  /** 大俠 */
  DA_XIA = "DA_XIA",
  /** 純陽 */
  CHUN_YANG = "CHUN_YANG",
  /** 七秀 */
  QI_XIU = "QI_XIU",
  /** 萬花 */
  WAN_HUA = "WAN_HUA",
  /** 少林 */
  SHAO_LIN = "SHAO_LIN",
  /** 天策 */
  TIAN_CE = "TIAN_CE",
  /** 藏劍 */
  CANG_JIAN = "CANG_JIAN",
  /** 五毒 */
  WU_DU = "WU_DU",
  /** 唐門 */
  TANG_MEN = "TANG_MEN",
  /** 明教 */
  MING_JIAO = "MING_JIAO",
  /** 丐幫 */
  GAI_BANG = "GAI_BANG",
  /** 蒼雲 */
  CANG_YUN = "CANG_YUN",
  /** 長歌 */
  CHANG_GE = "CHANG_GE",
  /** 霸刀 */
  BA_DAO = "BA_DAO",
  /** 蓬萊 */
  PENG_LAI = "PENG_LAI",
  /** 凌雪 */
  LING_XUE = "LING_XUE",
  /** 衍天 */
  YAN_TIAN = "YAN_TIAN",
  /** 藥宗 */
  YAO_ZONG = "YAO_ZONG",
  /** 刀宗 */
  DAO_ZONG = "DAO_ZONG",
  /** 萬靈 */
  WAN_LING = "WAN_LING",
}

/** 心法 */
export enum InnerSkillType {
  /** 冰心訣 */
  BING_XIN_JUE = "QI_XIU-BING_XIN_JUE",
  /** 雲裳心經 */
  YUN_SHANG_XIN_JING = "QI_XIU-YUN_SHANG_XIN_JING",
  /** 花間遊 */
  HUA_JIAN_YOU = "WAN_HUA-HUA_JIAN_YOU",
  /** 離經易道 */
  LI_JING_YI_DAO = "WAN_HUA-LI_JING_YI_DAO",
  /** 毒經 */
  DU_JING = "WU_DU-DU_JING",
  /** 補天訣 */
  BU_TIAN_JUE = "WU_DU-BU_TIAN_JUE",
  /** 莫問 */
  MO_WEN = "CHANG_GE-MO_WEN",
  /** 相知 */
  XIANG_ZHI = "CHANG_GE-XIANG_ZHI",
  /** 無方 */
  WU_FANG = "YAO_ZONG-WU_FANG",
  /** 靈素 */
  LING_SU = "YAO_ZONG-LING_SU",
  /** 傲血戰意 */
  AO_XUE_ZHAN_YI = "TIAN_CE-AO_XUE_ZHAN_YI",
  /** 鐵牢律 */
  TIE_LAO_LV = "TIAN_CE-TIE_LAO_LV",
  /** 易筋經 */
  YI_JIN_JING = "SHAO_LIN-YI_JIN_JING",
  /** 洗髓經 */
  XI_SUI_JING = "SHAO_LIN-XI_SUI_JING",
  /** 焚影聖訣 */
  FEN_YING_SHENG_JUE = "MING_JIAO-FEN_YING_SHENG_JUE",
  /** 明尊琉璃體 */
  MING_ZUN_LIU_LI_TI = "MING_JIAO-MING_ZUN_LIU_LI_TI",
  /** 分山勁 */
  FEN_SHAN_JIN = "CANG_YUN-FEN_SHAN_JIN",
  /** 鐵骨衣 */
  TIE_GU_YI = "CANG_YUN-TIE_GU_YI",
  /** 紫霞功 */
  ZI_XIA_GONG = "CHUN_YANG-ZI_XIA_GONG",
  /** 太虛劍意 */
  TAI_XU_JIAN_YI = "CHUN_YANG-TAI_XU_JIAN_YI",
  /** 天羅詭道 */
  TIAN_LUO_GUI_DAO = "TANG_MEN-TIAN_LUO_GUI_DAO",
  /** 驚羽訣 */
  JING_YU_JUE = "TANG_MEN-JING_YU_JUE",
  /** 問水訣 */
  WEN_SHUI_JUE = "CANG_JIAN-WEN_SHUI_JUE",
  /** 笑塵訣 */
  XIAO_CHEN_JUE = "GAI_BANG-XIAO_CHEN_JUE",
  /** 北傲訣 */
  BEI_AO_JUE = "BA_DAO-BEI_AO_JUE",
  /** 凌海訣 */
  LING_HAI_JUE = "PENG_LAI-LING_HAI_JUE",
  /** 隱龍訣 */
  YIN_LONG_JUE = "LING_XUE-YIN_LONG_JUE",
  /** 太玄經 */
  TAI_XUAN_JING = "YAN_TIAN-TAI_XUAN_JING",
  /** 孤鋒訣 */
  GU_FENG_JUE = "DAO_ZONG-GU_FENG_JUE",
  /** 山海心訣 */
  SHAN_HAI_XIN_JUE = "WAN_LING-SHAN_HAI_XIN_JUE",
}

/** 體型 */
export enum BodyType {
  /** 成男 */
  MAN = "MAN",
  /** 成女 */
  WOMAN = "WOMAN",
  /** 正太 */
  BOY = "BOY",
  /** 蘿莉 */
  GIRL = "GIRL",
}

/** 陣營 */
export enum CampType {
  /** 中立 */
  NEUTRAL = "NEUTRAL",
  /** 浩氣盟 */
  HAO_QI_MENG = "HAO_QI_MENG",
  /** 惡人谷 */
  E_REN_GU = "E_REN_GU",
}

/** 競技場類型 */
export enum ArenaType {
  /** 2v2 */
  TWO_VS_TWO = "TWO_VS_TWO",
  /** 3v3 */
  THREE_VS_THREE = "THREE_VS_THREE",
  /** 5v5 */
  FIVE_VS_FIVE = "FIVE_VS_FIVE",
}

/** 外觀 */
export enum SkinType {
  /** 髮型 */
  HAIR = "HAIR",
  /** 體型 */
  BODY = "BODY",
  /** 臉型 */
  FACE = "FACE",
  /** 交互 */
  INTERACTION = "INTERACTION",
}

/** 裝備類型 */
export enum GearType {
  PVP = "PVP",
  PVE = "PVE",
}
