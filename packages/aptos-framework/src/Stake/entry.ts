/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
/** Withdraw from `account`'s inactive stake. */
export const withdraw = (): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Stake::withdraw",
  type_arguments: [],
  arguments: [],
});

/** Add `amount` of coins from the `account` owning the StakePool. */
export const add_stake = ({
  args,
}: mod.AddStakePayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Stake::add_stake",
  type_arguments: [],
  arguments: [p.serializers.u64(args.amount)],
});

/** Similar to increase_lockup_with_cap but will use ownership capability from the signing account. */
export const increase_lockup = ({
  args,
}: mod.IncreaseLockupPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Stake::increase_lockup",
  type_arguments: [],
  arguments: [p.serializers.u64(args.new_locked_until_secs)],
});

/** This can only called by the operator of the validator/staking pool. */
export const join_validator_set = ({
  args,
}: mod.JoinValidatorSetPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Stake::join_validator_set",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.pool_address)],
});

/**
 * Request to have `pool_address` leave the validator set. The validator is only actually removed from the set when
 * the next epoch starts.
 * The last validator in the set cannot leave. This is an edge case that should never happen as long as the network
 * is still operational.
 *
 * Can only be called by the operator of the validator/staking pool.
 */
export const leave_validator_set = ({
  args,
}: mod.LeaveValidatorSetPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Stake::leave_validator_set",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.pool_address)],
});

/** Initialize the validator account and give ownership to the signing account. */
export const register_validator_candidate = ({
  args,
}: mod.RegisterValidatorCandidatePayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Stake::register_validator_candidate",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.consensus_pubkey),
    p.serializers.hexString(args.proof_of_possession),
    p.serializers.hexString(args.network_addresses),
    p.serializers.hexString(args.fullnode_addresses),
  ],
});

/** Rotate the consensus key of the validator, it'll take effect in next epoch. */
export const rotate_consensus_key = ({
  args,
}: mod.RotateConsensusKeyPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Stake::rotate_consensus_key",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.pool_address),
    p.serializers.hexString(args.new_consensus_pubkey),
    p.serializers.hexString(args.proof_of_possession),
  ],
});

/** Allows an owner to change the delegated voter of the stake pool. */
export const set_delegated_voter = ({
  args,
}: mod.SetDelegatedVoterPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Stake::set_delegated_voter",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.new_delegated_voter)],
});

/** Allows an owner to change the operator of the stake pool. */
export const set_operator = ({
  args,
}: mod.SetOperatorPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Stake::set_operator",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.new_operator)],
});

/** Similar to unlock_with_cap but will use ownership capability from the signing account. */
export const unlock = ({
  args,
}: mod.UnlockPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Stake::unlock",
  type_arguments: [],
  arguments: [p.serializers.u64(args.amount)],
});
