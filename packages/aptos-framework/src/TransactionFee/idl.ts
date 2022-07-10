/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::TransactionFee",
  functions: [],
  structs: [
    {
      name: "0x1::TransactionFee::TestCoinCapabilities",
      fields: [
        {
          name: "burn_cap",
          ty: {
            struct: {
              name: "0x1::Coin::BurnCapability",
              ty_args: [{ struct: { name: "0x1::TestCoin::TestCoin" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {},
} as const;
