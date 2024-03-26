import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "explorer-api/explorer-api",
    },
    {
      type: "category",
      label: "Account",
      link: {
        type: "doc",
        id: "explorer-api/account",
      },
      items: [
        {
          type: "doc",
          id: "explorer-api/eth-get-balance",
          label: "Return balance from a provided block",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-balance",
          label: "Get the native token balance for an address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-balance-multi",
          label: "Get balance for multiple addresses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-pending-tx-list",
          label: "Get pending transactions by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-tx-list",
          label: "Get transactions by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-tx-list-internal",
          label: "Get internal transactions by transaction or address hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-token-tx",
          label: "Get token transfer events by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-token-nft-tx",
          label: "Get ERC-721 token transfer events by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-token-balance",
          label: "Get token account balance for token contract address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-token-list",
          label: "Get list of tokens owned by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-mined-blocks",
          label: "Get list of blocks mined by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/list-accounts",
          label: "Get a list of accounts and their balances",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Block",
      link: {
        type: "doc",
        id: "explorer-api/block",
      },
      items: [
        {
          type: "doc",
          id: "explorer-api/get-block-reward",
          label: "Get block reward by block number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-block-countdown",
          label: "Get estimated block countdown time by block number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-block-no-by-time",
          label: "Get block number by time stamp",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/eth-block-number",
          label: "Get the latest block number",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Contract",
      link: {
        type: "doc",
        id: "explorer-api/contract",
      },
      items: [
        {
          type: "doc",
          id: "explorer-api/list-contracts",
          label: "Get a list of contracts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-abi",
          label: "Get ABI for a verified contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-source-code",
          label: "Get contract source code for a verified contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-contract-creation",
          label: "Get contract creator address hash and creation transaction hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/verify-contract",
          label: "Verify a contract with its source code and contract creation information",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "explorer-api/verify-via-sourcify",
          label: "Verify a contract through Sourcify",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "explorer-api/verify-vyper-contract",
          label: "Verify a Vyper contract with its source code and contract creation information",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "explorer-api/verify-source-code",
          label: "Verify a contract with Standard input JSON file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "explorer-api/check-verify-status",
          label: "Return status of a verification attempt",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/verify-proxy-contract",
          label: "Verify proxy contract",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "explorer-api/check-proxy-verification",
          label: "Return status of a proxy contract verification attempt",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Logs",
      link: {
        type: "doc",
        id: "explorer-api/logs",
      },
      items: [
        {
          type: "doc",
          id: "explorer-api/get-logs",
          label: "Get Event Logs by Address and/or Topic(s)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Stats",
      link: {
        type: "doc",
        id: "explorer-api/stats",
      },
      items: [
        {
          type: "doc",
          id: "explorer-api/token-supply",
          label: "Get ERC-20 or ERC-721 token total supply by contract address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/eth-supply-exchange",
          label: "Get total supply in Wei from exchange",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/eth-supply",
          label: "Get total supply in Wei from DB",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/coin-supply",
          label: "Get total coin supply from DB minus burnt number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/eth-price",
          label: "Get latest price of native coin in USD and BTC",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/coin-price",
          label: "Get latest price of native coin in USD and BTC in more general format",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/total-fees",
          label: "Get total transaction fees in Wei paid by users to validators per day",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Token",
      link: {
        type: "doc",
        id: "explorer-api/token",
      },
      items: [
        {
          type: "doc",
          id: "explorer-api/get-token",
          label: "Get ERC-20 or ERC-721 token by contract address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-token-holders",
          label: "Get token holders by contract address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/bridged-token-list",
          label: "Get bridged tokens list",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transaction",
      link: {
        type: "doc",
        id: "explorer-api/transaction",
      },
      items: [
        {
          type: "doc",
          id: "explorer-api/get-transaction-info",
          label: "Get transaction info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-transaction-receipt-status",
          label: "Get transaction receipt status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "explorer-api/get-error-status",
          label: "Get error status and message",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
