import { AppearanceEnum } from "@/enums";

/** 外觀類型 */
export const getTypeOptions = () => [
  { label: "外觀禮盒", value: AppearanceEnum.Type.GIFT_BOX },
  { label: "披風", value: AppearanceEnum.Type.CLOAK },
  { label: "上衣", value: AppearanceEnum.Type.COAT },
  { label: "髮型", value: AppearanceEnum.Type.HAIR },
  { label: "馬具", value: AppearanceEnum.Type.HARNESS },
  { label: "坐騎", value: AppearanceEnum.Type.MOUNT },
  { label: "掛寵", value: AppearanceEnum.Type.HANGING_PET },
  { label: "其他", value: AppearanceEnum.Type.OTHER },
];
