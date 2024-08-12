import { ContactInfoEnum } from "@/enums";

/** 聯絡類型 */
export const getTypeOptions = () => [
  { label: "Line", value: ContactInfoEnum.Type.LINE },
  { label: "DC", value: ContactInfoEnum.Type.DISCORD },
  { label: "FB", value: ContactInfoEnum.Type.FACEBOOK },
  { label: "密聊", value: ContactInfoEnum.Type.PRIVATE_MESSAGE },
];
