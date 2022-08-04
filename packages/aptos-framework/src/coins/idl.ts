/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::coins",
  doc: "This module allows for more convenient managing of coins across coin::CoinStore and\naccount::Account",
  functions: [
    {
      name: "register",
      doc: "Script function to register to receive a specific `CoinType`. An account that wants to hold a coin type\nhas to explicitly registers to do so. The register creates a special `CoinStore`\nto hold the specified `CoinType`.",
      ty_args: ["CoinType"],
      args: [],
    },
  ],
  structs: [],
  errors: {},
} as const;
