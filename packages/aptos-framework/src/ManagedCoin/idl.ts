/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::ManagedCoin",
  doc: "ManagedCoin is built to make a simple walkthrough of the Coins module.\nIt contains scripts you will need to initialize, mint, burn, transfer coins.\nBy utilizing this current module, a developer can create his own coin and care less about mint and burn capabilities,",
  functions: [
    {
      name: "burn",
      doc: "Withdraw an `amount` of coin `CoinType` from `account` and burn it.",
      ty_args: ["CoinType"],
      args: [{ name: "amount", ty: "u64" }],
    },
    {
      name: "initialize",
      doc: "Initialize new coin `CoinType` in Aptos Blockchain.\nMint and Burn Capabilities will be stored under `account` in `Capabilities` resource.",
      ty_args: ["CoinType"],
      args: [
        { name: "name", ty: { vector: "u8" } },
        { name: "symbol", ty: { vector: "u8" } },
        { name: "decimals", ty: "u64" },
        { name: "monitor_supply", ty: "bool" },
      ],
    },
    {
      name: "mint",
      doc: "Create new coins `CoinType` and deposit them into dst_addr's account.",
      ty_args: ["CoinType"],
      args: [
        { name: "dst_addr", ty: "address" },
        { name: "amount", ty: "u64" },
      ],
    },
    {
      name: "register",
      doc: "Creating a resource that stores balance of `CoinType` on user's account, withdraw and deposit event handlers.\nRequired if user wants to start accepting deposits of `CoinType` in his account.",
      ty_args: ["CoinType"],
      args: [],
    },
  ],
  structs: [
    {
      name: "0x1::ManagedCoin::Capabilities",
      doc: "Capabilities resource storing mint and burn capabilities.\nThe resource is stored on the account that initialized coin `CoinType`.",
      fields: [
        {
          name: "mint_cap",
          ty: {
            struct: {
              name: "0x1::Coin::MintCapability",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
        {
          name: "burn_cap",
          ty: {
            struct: {
              name: "0x1::Coin::BurnCapability",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
      ],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["key"],
    },
  ],
  errors: {
    "0": {
      name: "ENO_CAPABILITIES",
      doc: "When no capabilities (burn/mint) found on an account.",
    },
  },
} as const;
