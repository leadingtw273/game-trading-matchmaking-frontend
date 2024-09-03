import { ContactInfoEnum } from "@/enums";

export type ContactInfo = {
  name: ContactInfoEnum.Type;
  value: string;
};

export type UserInfo = {
  avatarUrl: string;
  nickname: string;
  gameId: string;
  contacts: ContactInfo[];
};
