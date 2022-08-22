/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::coin",
  doc: "This module provides the foundation for typesafe Coins.",
  functions: [
    {
      name: "transfer",
      doc: "Transfers `amount` of coins `CoinType` from `from` to `to`.",
      ty_args: ["CoinType"],
      args: [
        { name: "to", ty: "address" },
        { name: "amount", ty: "u64" },
      ],
    },
  ],
  structs: [
    {
      name: "0x1::coin::BurnCapability",
      doc: "Capability required to burn coins.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["copy", "store"],
    },
    {
      name: "0x1::coin::Coin",
      doc: "Core data structures\nMain structure representing a coin/token in an account's custody.",
      fields: [
        { name: "value", doc: "Amount of coin this address has.", ty: "u64" },
      ],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["store"],
    },
    {
      name: "0x1::coin::CoinInfo",
      doc: "Information about a specific coin type. Stored on the creator of the coin's account.",
      fields: [
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
        {
          name: "symbol",
          doc: "Symbol of the coin, usually a shorter version of the name.\nFor example, Singapore Dollar is SGD.",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "decimals",
          doc: "Number of decimals used to get its user representation.\nFor example, if `decimals` equals `2`, a balance of `505` coins should\nbe displayed to a user as `5.05` (`505 / 10 ** 2`).",
          ty: "u8",
        },
        {
          name: "supply",
          doc: "Amount of this coin type in existence.",
          ty: { struct: { name: "0x1::option::Option", ty_args: ["u128"] } },
        },
      ],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["key"],
    },
    {
      name: "0x1::coin::CoinStore",
      doc: "A holder of a specific coin types and associated event handles.\nThese are kept in a single resource to ensure locality of data.",
      fields: [
        {
          name: "coin",
          ty: {
            struct: { name: "0x1::coin::Coin", ty_args: [{ type_param: 0 }] },
          },
        },
        { name: "frozen", ty: "bool" },
        {
          name: "deposit_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::coin::DepositEvent" } }],
            },
          },
        },
        {
          name: "withdraw_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::coin::WithdrawEvent" } }],
            },
          },
        },
      ],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["key"],
    },
    {
      name: "0x1::coin::DepositEvent",
      doc: "Event emitted when some amount of a coin is deposited into an account.",
      fields: [{ name: "amount", ty: "u64" }],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::coin::FreezeCapability",
      doc: "Capability required to freeze a coin store.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["copy", "store"],
    },
    {
      name: "0x1::coin::MintCapability",
      doc: "Capability required to mint coins.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["copy", "store"],
    },
    {
      name: "0x1::coin::WithdrawEvent",
      doc: "Event emitted when some amount of a coin is withdrawn from an account.",
      fields: [{ name: "amount", ty: "u64" }],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
    "1": {
      name: "ECOIN_INFO_ADDRESS_MISMATCH",
      doc: "Address of account which is used to initialize a coin `CoinType` doesn't match the deployer of module",
    },
    "2": {
      name: "ECOIN_INFO_ALREADY_PUBLISHED",
      doc: "`CoinType` is already initialized as a coin",
    },
    "3": {
      name: "ECOIN_INFO_NOT_PUBLISHED",
      doc: "`CoinType` hasn't been initialized as a coin",
    },
    "4": {
      name: "ECOIN_STORE_ALREADY_PUBLISHED",
      doc: "Account already has `CoinStore` registered for `CoinType`",
    },
    "5": {
      name: "ECOIN_STORE_NOT_PUBLISHED",
      doc: "Account hasn't registered `CoinStore` for `CoinType`",
    },
    "6": {
      name: "EINSUFFICIENT_BALANCE",
      doc: "Not enough coins to complete transaction",
    },
    "7": {
      name: "EDESTRUCTION_OF_NONZERO_TOKEN",
      doc: "Cannot destroy non-zero coins",
    },
    "8": {
      name: "ETOTAL_SUPPLY_OVERFLOW",
      doc: "Total supply of the coin has overflown. No additional coins can be minted",
    },
    "9": { name: "EZERO_COIN_AMOUNT", doc: "Coin amount cannot be zero" },
    "10": {
      name: "EFROZEN",
      doc: "CoinStore is frozen. Coins cannot be deposited or withdrawn",
    },
  },
} as const;
