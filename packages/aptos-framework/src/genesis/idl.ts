/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::genesis",
  functions: [],
  structs: [
    {
      name: "0x1::genesis::ValidatorConfiguration",
      fields: [
        { name: "owner_address", ty: "address" },
        { name: "operator_address", ty: "address" },
        { name: "voter_address", ty: "address" },
        { name: "stake_amount", ty: "u64" },
        { name: "consensus_pubkey", ty: { vector: "u8" } },
        { name: "proof_of_possession", ty: { vector: "u8" } },
        { name: "network_addresses", ty: { vector: "u8" } },
        { name: "full_node_network_addresses", ty: { vector: "u8" } },
      ],
      abilities: ["copy", "drop"],
    },
  ],
  errors: {},
} as const;
