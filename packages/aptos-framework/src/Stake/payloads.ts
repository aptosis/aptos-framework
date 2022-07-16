/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::Stake::withdraw`.
 *
 * Withdraw from `account`'s inactive stake.
 */
export type Withdraw = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Stake::withdraw";
  readonly arguments: [];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::Stake::add_stake`.
 *
 * Add `amount` of coins from the `account` owning the StakePool.
 */
export type AddStake = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Stake::add_stake";
  readonly arguments: [amount: string];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::Stake::increase_lockup`.
 *
 * Similar to increase_lockup_with_cap but will use ownership capability from the signing account.
 */
export type IncreaseLockup = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Stake::increase_lockup";
  readonly arguments: [new_locked_until_secs: string];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::Stake::join_validator_set`.
 *
 * This can only called by the operator of the validator/staking pool.
 */
export type JoinValidatorSet = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Stake::join_validator_set";
  readonly arguments: [pool_address: string];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::Stake::leave_validator_set`.
 *
 * Request to have `pool_address` leave the validator set. The validator is only actually removed from the set when
 * the next epoch starts.
 * The last validator in the set cannot leave. This is an edge case that should never happen as long as the network
 * is still operational.
 *
 * Can only be called by the operator of the validator/staking pool.
 */
export type LeaveValidatorSet = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Stake::leave_validator_set";
  readonly arguments: [pool_address: string];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::Stake::register_validator_candidate`.
 *
 * Initialize the validator account and give ownership to the signing account.
 */
export type RegisterValidatorCandidate = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Stake::register_validator_candidate";
  readonly arguments: [
    consensus_pubkey: string,
    proof_of_possession: string,
    network_addresses: string,
    fullnode_addresses: string
  ];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::Stake::rotate_consensus_key`.
 *
 * Rotate the consensus key of the validator, it'll take effect in next epoch.
 */
export type RotateConsensusKey = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Stake::rotate_consensus_key";
  readonly arguments: [
    pool_address: string,
    new_consensus_pubkey: string,
    proof_of_possession: string
  ];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::Stake::set_delegated_voter`.
 *
 * Allows an owner to change the delegated voter of the stake pool.
 */
export type SetDelegatedVoter = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Stake::set_delegated_voter";
  readonly arguments: [new_delegated_voter: string];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::Stake::set_operator`.
 *
 * Allows an owner to change the operator of the stake pool.
 */
export type SetOperator = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Stake::set_operator";
  readonly arguments: [new_operator: string];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::Stake::unlock`.
 *
 * Similar to unlock_with_cap but will use ownership capability from the signing account.
 */
export type Unlock = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Stake::unlock";
  readonly arguments: [amount: string];
  readonly type_arguments: [];
};