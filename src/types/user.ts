export type ContactInfo = {
  discord: string;
  line: string;
  facebook: string;
};

export type UserInfo = {
  nickname: string;
  gameId: string;
  contactInfo: ContactInfo;
};
