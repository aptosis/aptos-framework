/**
 * Names of all script functions.
 *
 * @module
 */

/** Script function type for `0x1::stake::withdraw`. */
export const withdraw = "0x1::stake::withdraw" as const;

/** Script function type for `0x1::stake::add_stake`. */
export const add_stake = "0x1::stake::add_stake" as const;

/** Script function type for `0x1::stake::increase_lockup`. */
export const increase_lockup = "0x1::stake::increase_lockup" as const;

/** Script function type for `0x1::stake::initialize_owner_only`. */
export const initialize_owner_only =
  "0x1::stake::initialize_owner_only" as const;

/** Script function type for `0x1::stake::initialize_validator`. */
export const initialize_validator = "0x1::stake::initialize_validator" as const;

/** Script function type for `0x1::stake::join_validator_set`. */
export const join_validator_set = "0x1::stake::join_validator_set" as const;

/** Script function type for `0x1::stake::leave_validator_set`. */
export const leave_validator_set = "0x1::stake::leave_validator_set" as const;

/** Script function type for `0x1::stake::rotate_consensus_key`. */
export const rotate_consensus_key = "0x1::stake::rotate_consensus_key" as const;

/** Script function type for `0x1::stake::set_delegated_voter`. */
export const set_delegated_voter = "0x1::stake::set_delegated_voter" as const;

/** Script function type for `0x1::stake::set_operator`. */
export const set_operator = "0x1::stake::set_operator" as const;

/** Script function type for `0x1::stake::unlock`. */
export const unlock = "0x1::stake::unlock" as const;

/** Script function type for `0x1::stake::update_network_and_fullnode_addresses`. */
export const update_network_and_fullnode_addresses =
  "0x1::stake::update_network_and_fullnode_addresses" as const;
