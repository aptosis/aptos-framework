/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::ConsensusConfig",
  doc: "Maintains the consensus config for the blockchain. The config is stored in a\nReconfiguration, and may be updated by root.",
  functions: [],
  structs: [
    {
      name: "0x1::ConsensusConfig::ConsensusConfig",
      fields: [{ name: "config", ty: { vector: "u8" } }],
      abilities: ["key"],
    },
  ],
  errors: { "0": { name: "ECONFIG", doc: "Error with config" } },
} as const;
