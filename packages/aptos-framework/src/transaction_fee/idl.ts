/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::transaction_fee",
  functions: [],
  structs: [
    {
      name: "0x1::transaction_fee::AptosCoinCapabilities",
      fields: [
        {
          name: "burn_cap",
          ty: {
            struct: {
              name: "0x1::coin::BurnCapability",
              ty_args: [{ struct: { name: "0x1::aptos_coin::AptosCoin" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {},
} as const;
