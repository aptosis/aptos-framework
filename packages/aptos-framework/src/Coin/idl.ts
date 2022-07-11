/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Coin",
  doc: "This module provides the foundation for typesafe Coins.",
  functions: [
    {
      name: "register",
      doc: "Script function to register to receive a specific `CoinType`. An account that wants to hold a coin type\nhas to explicitly registers to do so. The register creates a special `CoinStore`\nto hold the specified `CoinType`.",
      ty_args: ["CoinType"],
      args: [],
    },
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
      name: "0x1::Coin::Coin",
      doc: "Main structure representing a coin/token in an account's custody.",
      fields: [
        { name: "value", doc: "Amount of coin this address has.", ty: "u64" },
      ],
      type_params: ["CoinType"],
      abilities: ["store"],
    },
    {
      name: "0x1::Coin::BurnCapability",
      doc: "Capability required to burn coins.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      type_params: ["CoinType"],
      abilities: ["copy", "store", "key"],
    },
    {
      name: "0x1::Coin::CoinEvents",
      doc: "Core data structures\nCentral coin events that are emitted for all coin stores.",
      fields: [
        {
          name: "register_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Coin::RegisterEvent" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::Coin::CoinInfo",
      doc: "Information about a specific coin type. Stored on the creator of the coin's account.",
      fields: [
        { name: "name", ty: { struct: { name: "0x1::ASCII::String" } } },
        {
          name: "symbol",
          doc: "Symbol of the coin, usually a shorter version of the name.\nFor example, Singapore Dollar is SGD.",
          ty: { struct: { name: "0x1::ASCII::String" } },
        },
        {
          name: "decimals",
          doc: "Number of decimals used to get its user representation.\nFor example, if `decimals` equals `2`, a balance of `505` coins should\nbe displayed to a user as `5.05` (`505 / 10 ** 2`).",
          ty: "u64",
        },
        {
          name: "supply",
          doc: "Amount of this coin type in existence.",
          ty: { struct: { name: "0x1::Option::Option", ty_args: ["u128"] } },
        },
      ],
      type_params: ["CoinType"],
      abilities: ["key"],
    },
    {
      name: "0x1::Coin::CoinStore",
      doc: "A holder of a specific coin types and associated event handles.\nThese are kept in a single resource to ensure locality of data.",
      fields: [
        {
          name: "coin",
          ty: {
            struct: { name: "0x1::Coin::Coin", ty_args: [{ type_param: 0 }] },
          },
        },
        {
          name: "deposit_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Coin::DepositEvent" } }],
            },
          },
        },
        {
          name: "withdraw_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Coin::WithdrawEvent" } }],
            },
          },
        },
      ],
      type_params: ["CoinType"],
      abilities: ["key"],
    },
    {
      name: "0x1::Coin::DepositEvent",
      doc: "Event emitted when some amount of a coin is deposited into an account.",
      fields: [{ name: "amount", ty: "u64" }],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Coin::MintCapability",
      doc: "Capability required to mint coins.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      type_params: ["CoinType"],
      abilities: ["copy", "store", "key"],
    },
    {
      name: "0x1::Coin::RegisterEvent",
      doc: "Set of data sent to the event stream when a new coin store is registered.",
      fields: [
        {
          name: "type_info",
          ty: { struct: { name: "0x1::TypeInfo::TypeInfo" } },
        },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Coin::WithdrawEvent",
      doc: "Event emitted when some amount of a coin is withdrawn from an account.",
      fields: [{ name: "amount", ty: "u64" }],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
    "0": {
      name: "ECOIN_INFO_ADDRESS_MISMATCH",
      doc: "When address of account which is used to initilize a coin `CoinType`\ndoesn't match the deployer of module containining `CoinType`.",
    },
    "1": {
      name: "ECOIN_INFO_ALREADY_PUBLISHED",
      doc: "When `CoinType` is already initilized as a coin.",
    },
    "2": {
      name: "ECOIN_INFO_NOT_PUBLISHED",
      doc: "When `CoinType` hasn't been initialized as a coin.",
    },
    "3": {
      name: "ECOIN_STORE_ALREADY_PUBLISHED",
      doc: "When an account already has `CoinStore` registered for `CoinType`.",
    },
    "4": {
      name: "ECOIN_STORE_NOT_PUBLISHED",
      doc: "When an account hasn't registered `CoinStore` for `CoinType`.",
    },
    "5": {
      name: "EINSUFFICIENT_BALANCE",
      doc: "When there's not enough funds to withdraw from an account or from `Coin` resource.",
    },
    "6": {
      name: "EDESTRUCTION_OF_NONZERO_TOKEN",
      doc: "When destruction of `Coin` resource contains non-zero value attempted.",
    },
    "7": {
      name: "ETOTAL_SUPPLY_OVERFLOW",
      doc: "Total supply of the coin overflows. No additional coins can be minted.",
    },
  },
} as const;
