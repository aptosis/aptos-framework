/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::TokenTransfers",
  doc: "This module provides the foundation for transferring of Tokens",
  functions: [
    {
      name: "cancel_offer_script",
      ty_args: [],
      args: [
        { name: "receiver", ty: "address" },
        { name: "creator", ty: "address" },
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
      ],
    },
    {
      name: "claim_script",
      ty_args: [],
      args: [
        { name: "sender", ty: "address" },
        { name: "creator", ty: "address" },
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
      ],
    },
    {
      name: "offer_script",
      ty_args: [],
      args: [
        { name: "receiver", ty: "address" },
        { name: "creator", ty: "address" },
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
        { name: "amount", ty: "u64" },
      ],
    },
  ],
  structs: [
    {
      name: "0x1::TokenTransfers::TokenTransfers",
      fields: [
        {
          name: "pending_claims",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                "address",
                {
                  struct: {
                    name: "0x1::Table::Table",
                    ty_args: [
                      { struct: { name: "0x1::Token::TokenId" } },
                      { struct: { name: "0x1::Token::Token" } },
                    ],
                  },
                },
              ],
            },
          },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {},
} as const;
