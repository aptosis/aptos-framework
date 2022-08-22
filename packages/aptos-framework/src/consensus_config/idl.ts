/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::consensus_config",
  doc: "Maintains the consensus config for the blockchain. The config is stored in a\nReconfiguration, and may be updated by root.",
  functions: [],
  structs: [
    {
      name: "0x1::consensus_config::ConsensusConfig",
      fields: [{ name: "config", ty: { vector: "u8" } }],
      abilities: ["key"],
    },
  ],
  errors: {
    "1": {
      name: "EINVALID_CONFIG",
      doc: "The provided on chain config bytes are empty or invalid",
    },
  },
} as const;
