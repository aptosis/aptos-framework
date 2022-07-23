/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::account_utils",
  functions: [
    {
      name: "create_and_fund_account",
      ty_args: [],
      args: [
        { name: "account", ty: "address" },
        { name: "amount", ty: "u64" },
      ],
    },
  ],
  structs: [],
  errors: {},
} as const;
