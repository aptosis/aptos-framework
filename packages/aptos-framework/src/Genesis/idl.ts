/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Genesis",
  functions: [
    {
      name: "create_initialize_validators",
      doc: 'Sets up the initial validator set for the network.\nThe validator "owner" accounts, and their authentication\nAddresses (and keys) are encoded in the `owners`\nEach validator signs consensus messages with the private key corresponding to the Ed25519\npublic key in `consensus_pubkeys`.\nFinally, each validator must specify the network address\n(see types/src/network_address/mod.rs) for itself and its full nodes.\n\nNetwork address fields are a vector per account, where each entry is a vector of addresses\nencoded in a single BCS byte array.',
      ty_args: [],
      args: [
        { name: "owners", ty: { vector: "address" } },
        { name: "consensus_pubkeys", ty: { vector: { vector: "u8" } } },
        { name: "proof_of_possession", ty: { vector: { vector: "u8" } } },
        {
          name: "validator_network_addresses",
          ty: { vector: { vector: "u8" } },
        },
        {
          name: "full_node_network_addresses",
          ty: { vector: { vector: "u8" } },
        },
        { name: "staking_distribution", ty: { vector: "u64" } },
      ],
    },
  ],
  structs: [],
  errors: {},
} as const;
