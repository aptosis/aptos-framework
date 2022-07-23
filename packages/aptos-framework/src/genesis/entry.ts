/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
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
}: mod.CreateInitializeValidatorsArgs): payloads.CreateInitializeValidators => ({
  type: "script_function_payload",
  function: "0x1::genesis::create_initialize_validators",
  type_arguments: [],
  arguments: [
    args.owners.map((inner_args__owners) =>
      p.serializers.hexString(inner_args__owners)
    ),
    args.consensus_pubkeys.map((inner_args__consensus_pubkeys) =>
      p.serializers.hexString(inner_args__consensus_pubkeys)
    ),
    args.proof_of_possession.map((inner_args__proof_of_possession) =>
      p.serializers.hexString(inner_args__proof_of_possession)
    ),
    args.validator_network_addresses.map(
      (inner_args__validator_network_addresses) =>
        p.serializers.hexString(inner_args__validator_network_addresses)
    ),
    args.full_node_network_addresses.map(
      (inner_args__full_node_network_addresses) =>
        p.serializers.hexString(inner_args__full_node_network_addresses)
    ),
    args.staking_distribution.map((inner_args__staking_distribution) =>
      p.serializers.u64(inner_args__staking_distribution)
    ),
    p.serializers.u64(args.initial_lockup_timestamp),
  ],
});
