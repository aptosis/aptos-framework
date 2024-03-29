/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::chain_id",
  doc: "The chain id distinguishes between different chains (e.g., testnet and the main network).\nOne important role is to prevent transactions intended for one chain from being executed on another.\nThis code provides a container for storing a chain id and functions to initialize and get it.",
  functions: [],
  structs: [
    {
      name: "0x1::chain_id::ChainId",
      fields: [{ name: "id", ty: "u8" }],
      abilities: ["key"],
    },
  ],
  errors: {},
} as const;
