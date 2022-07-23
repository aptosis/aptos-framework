/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::genesis::create_initialize_validators`.
 *
 * Sets up the initial validator set for the network.
 * The validator "owner" accounts, and their authentication
 * Addresses (and keys) are encoded in the `owners`
 * Each validator signs consensus messages with the private key corresponding to the Ed25519
 * public key in `consensus_pubkeys`.
 * Finally, each validator must specify the network address
 * (see types/src/network_address/mod.rs) for itself and its full nodes.
 *
 * Network address fields are a vector per account, where each entry is a vector of addresses
 * encoded in a single BCS byte array.
 */
export type CreateInitializeValidators = {
  readonly type: "script_function_payload";
  readonly function: "0x1::genesis::create_initialize_validators";
  readonly arguments: [
    owners: ReadonlyArray<string>,
    consensus_pubkeys: ReadonlyArray<string>,
    proof_of_possession: ReadonlyArray<string>,
    validator_network_addresses: ReadonlyArray<string>,
    full_node_network_addresses: ReadonlyArray<string>,
    staking_distribution: ReadonlyArray<string>,
    initial_lockup_timestamp: string
  ];
  readonly type_arguments: [];
};
