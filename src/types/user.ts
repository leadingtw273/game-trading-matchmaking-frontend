export type ContactInfo = {
  name: string;
  value: string;
};

export type UserInfo = {
  nickname: string;
  gameId: string;
  contacts: ContactInfo[];
};
