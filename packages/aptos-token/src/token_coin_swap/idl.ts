/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x2::token_coin_swap",
  doc: "A module for\n1. Hold tokens escrow to prevent token been transferred\n2. List token for swapping with a targeted CoinType.\n3. Execute the swapping",
  functions: [],
  structs: [
    {
      name: "0x2::token_coin_swap::TokenCoinSwap",
      doc: "TokenCoinSwap records a swap ask for swapping token_amount with CoinType with a minimal price per token",
      fields: [
        { name: "token_amount", ty: "u64" },
        { name: "min_price_per_token", ty: "u64" },
      ],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["drop", "store"],
    },
    {
      name: "0x2::token_coin_swap::TokenEscrow",
      doc: "TokenEscrow holds the tokens that cannot be withdrawn or transferred",
      fields: [
        { name: "token", ty: { struct: { name: "0x2::token_v1::Token" } } },
        { name: "locked_until_secs", ty: "u64" },
      ],
      abilities: ["store"],
    },
    {
      name: "0x2::token_coin_swap::TokenListingEvent",
      fields: [
        {
          name: "token_id",
          ty: { struct: { name: "0x2::token_v1::TokenId" } },
        },
        { name: "amount", ty: "u64" },
        { name: "min_price", ty: "u64" },
        { name: "locked_until_secs", ty: "u64" },
        {
          name: "coin_type_info",
          ty: { struct: { name: "0x1::type_info::TypeInfo" } },
        },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x2::token_coin_swap::TokenListings",
      doc: "The listing of all tokens for swapping stored at token owner's account",
      fields: [
        {
          name: "listings",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x2::token_v1::TokenId" } },
                {
                  struct: {
                    name: "0x2::token_coin_swap::TokenCoinSwap",
                    ty_args: [{ type_param: 0 }],
                  },
                },
              ],
            },
          },
        },
        {
          name: "listing_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x2::token_coin_swap::TokenListingEvent" } },
              ],
            },
          },
        },
        {
          name: "swap_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x2::token_coin_swap::TokenSwapEvent" } },
              ],
            },
          },
        },
      ],
      type_params: [{ name: "CoinType", is_phantom: true }],
      abilities: ["key"],
    },
    {
      name: "0x2::token_coin_swap::TokenStoreEscrow",
      doc: "TokenStoreEscrow holds a map of token id to their tokenEscrow",
      fields: [
        {
          name: "token_escrows",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x2::token_v1::TokenId" } },
                { struct: { name: "0x2::token_coin_swap::TokenEscrow" } },
              ],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x2::token_coin_swap::TokenSwapEvent",
      fields: [
        {
          name: "token_id",
          ty: { struct: { name: "0x2::token_v1::TokenId" } },
        },
        { name: "token_buyer", ty: "address" },
        { name: "token_amount", ty: "u64" },
        { name: "coin_amount", ty: "u64" },
        {
          name: "coin_type_info",
          ty: { struct: { name: "0x1::type_info::TypeInfo" } },
        },
      ],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
    "1": { name: "ETOKEN_ALREADY_LISTED" },
    "2": { name: "ETOKEN_LISTING_NOT_EXIST" },
    "3": { name: "ETOKEN_NOT_IN_ESCROW" },
    "4": { name: "ETOKEN_CANNOT_MOVE_OUT_OF_ESCROW_BEFORE_LOCKUP_TIME" },
    "5": { name: "ETOKEN_MIN_PRICE_NOT_MATCH" },
    "6": { name: "ETOKEN_AMOUNT_NOT_MATCH" },
    "7": { name: "ENOT_ENOUGH_COIN" },
  },
} as const;
