export * from "./common";
export * from "./commodity";
export * from "./transaction";
export * from "./user";

export type ImgurResponse = {
  data: {
    link: string;
  };
  success: boolean;
  status: number;
};
