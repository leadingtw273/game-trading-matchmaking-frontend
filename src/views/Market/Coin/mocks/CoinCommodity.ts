import { CurrencyEnum, TransactionEnum } from "@/enums";
import { TransactionItem } from "@/types";
import { CoinCommodity } from "..";

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
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額購", "限制四字", "不知打啥", "蒼霸缺奶", "測試Tag", "abcdefg"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "2",
    type: TransactionEnum.Type.SALE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER, TransactionEnum.Method.LINE_PAY],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.USD,
        value: 4500,
      },
      amount: 200000,
      tags: ["可小", "限制", "不知", "蒼霸", "測試Tag", "abcdefg"],
      transMinLimit: 100,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "3",
    type: TransactionEnum.Type.SALE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "4",
    type: TransactionEnum.Type.SALE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "5",
    type: TransactionEnum.Type.SALE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "6",
    type: TransactionEnum.Type.SALE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "7",
    type: TransactionEnum.Type.SALE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "8",
    type: TransactionEnum.Type.SALE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "9",
    type: TransactionEnum.Type.SALE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "10",
    type: TransactionEnum.Type.SALE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "11",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [
      TransactionEnum.Method.BANK_TRANSFER,
      TransactionEnum.Method.LINE_PAY,
      TransactionEnum.Method.THIRD_PARTY_8591,
    ],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額購", "限制四字", "不知打啥", "蒼霸缺奶", "測試Tag", "abcdefg"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "12",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.USD,
        value: 4500,
      },
      amount: 200000,
      tags: ["可小", "限制", "不知", "蒼霸", "測試Tag", "abcdefg"],
      transMinLimit: 100,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "13",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "14",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "15",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "16",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "17",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "18",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "19",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
  {
    id: "20",
    type: TransactionEnum.Type.PURCHASE,
    status: TransactionEnum.Status.UNFINISHED,
    methods: [TransactionEnum.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: TransactionEnum.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: CurrencyEnum.Type.TWD,
        value: 150,
      },
      amount: 200000,
      tags: ["可小額"],
      transMinLimit: 10000,
    },
    postedBy: {
      nickname: "梨子",
      gameId: "梨子酒酒",
      contacts: [
        {
          name: "DC",
          value: "#8964",
        },
        {
          name: "Line",
          value: "0912345678",
        },
        {
          name: "FB",
          value: "楊桃酒",
        },
      ],
    },
    createdAt: 1712839503608,
    updatedAt: 1712839503608,
  },
] as TransactionItem<CoinCommodity>[];
