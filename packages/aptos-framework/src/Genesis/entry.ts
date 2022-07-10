/**
 * Entrypoint builders.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

import type * as mod from "./index.js";
/**
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
export const create_initialize_validators = ({
  args,
}: mod.CreateInitializeValidatorsPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Genesis::create_initialize_validators",
  type_arguments: [],
  arguments: [
    args.owners,
    args.consensus_pubkeys,
    args.proof_of_possession,
    args.validator_network_addresses,
    args.full_node_network_addresses,
    args.staking_distribution,
  ],
});
