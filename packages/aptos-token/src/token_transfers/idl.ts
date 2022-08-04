/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x3::token_transfers",
  doc: "This module provides the foundation for transferring of Tokens",
  functions: [],
  structs: [
    {
      name: "0x3::token_transfers::TokenTransfers",
      fields: [
        {
          name: "pending_claims",
          ty: {
            struct: {
              name: "0x1::table_with_length::TableWithLength",
              ty_args: [
                "address",
                {
                  struct: {
                    name: "0x1::table_with_length::TableWithLength",
                    ty_args: [
                      { struct: { name: "0x3::token::TokenId" } },
                      { struct: { name: "0x3::token::Token" } },
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
