import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "graphql-api/graphql-api",
    },
    {
      type: "category",
      label: "NFTs",
      link: {
        type: "doc",
        id: "graphql-api/nf-ts",
      },
      items: [
        {
          type: "doc",
          id: "graphql-api/get-nf-ts-by-wallet-address",
          label: "Get NFTs by wallet address",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "User Operations",
      link: {
        type: "doc",
        id: "graphql-api/user-operations",
      },
      items: [
        {
          type: "doc",
          id: "graphql-api/get-user-ops-by-wallet-address",
          label: "Get UserOps by wallet address",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
