import { Currency, Transaction } from "@/enums";
import { CoinCommodity, TransactionItem } from "@/types";

export default [
  {
    id: "1",
    type: Transaction.Type.SALE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.LINE_PAY, Transaction.Method.BANK_TRANSFER, Transaction.Method.THIRD_PARTY_8591],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.SALE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER, Transaction.Method.LINE_PAY],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.USD,
        ratio: 4500,
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
    type: Transaction.Type.SALE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.SALE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.SALE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.SALE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.SALE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.SALE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.SALE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.SALE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.PURCHASE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER, Transaction.Method.LINE_PAY, Transaction.Method.THIRD_PARTY_8591],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.PURCHASE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.USD,
        ratio: 4500,
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
    type: Transaction.Type.PURCHASE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.PURCHASE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.PURCHASE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.PURCHASE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.PURCHASE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.PURCHASE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.PURCHASE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
    type: Transaction.Type.PURCHASE,
    status: Transaction.Status.UNFINISHED,
    methods: [Transaction.Method.BANK_TRANSFER],
    commodity: {
      id: "1",
      type: Transaction.Commodity.Coin,
      remark: "",
      coinRatio: {
        currency: Currency.Type.TWD,
        ratio: 150,
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
