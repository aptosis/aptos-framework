/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/** Withdraw from `account`'s inactive stake. */
export const withdraw = ({ args }: mod.WithdrawArgs): payloads.Withdraw => ({
  type: "script_function_payload",
  function: "0x1::stake::withdraw",
  type_arguments: [],
  arguments: [p.serializers.u64(args.withdraw_amount)],
});

/** Add `amount` of coins from the `account` owning the StakePool. */
export const add_stake = ({ args }: mod.AddStakeArgs): payloads.AddStake => ({
  type: "script_function_payload",
  function: "0x1::stake::add_stake",
  type_arguments: [],
  arguments: [p.serializers.u64(args.amount)],
});

/** Similar to increase_lockup_with_cap but will use ownership capability from the signing account. */
export const increase_lockup = ({
  args,
}: mod.IncreaseLockupArgs): payloads.IncreaseLockup => ({
  type: "script_function_payload",
  function: "0x1::stake::increase_lockup",
  type_arguments: [],
  arguments: [p.serializers.u64(args.new_locked_until_secs)],
});

/** This can only called by the operator of the validator/staking pool. */
export const join_validator_set = ({
  args,
}: mod.JoinValidatorSetArgs): payloads.JoinValidatorSet => ({
  type: "script_function_payload",
  function: "0x1::stake::join_validator_set",
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
}: mod.LeaveValidatorSetArgs): payloads.LeaveValidatorSet => ({
  type: "script_function_payload",
  function: "0x1::stake::leave_validator_set",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.pool_address)],
});

/** Initialize the validator account and give ownership to the signing account. */
export const register_validator_candidate = ({
  args,
}: mod.RegisterValidatorCandidateArgs): payloads.RegisterValidatorCandidate => ({
  type: "script_function_payload",
  function: "0x1::stake::register_validator_candidate",
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
}: mod.RotateConsensusKeyArgs): payloads.RotateConsensusKey => ({
  type: "script_function_payload",
  function: "0x1::stake::rotate_consensus_key",
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
}: mod.SetDelegatedVoterArgs): payloads.SetDelegatedVoter => ({
  type: "script_function_payload",
  function: "0x1::stake::set_delegated_voter",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.new_delegated_voter)],
});

/** Allows an owner to change the operator of the stake pool. */
export const set_operator = ({
  args,
}: mod.SetOperatorArgs): payloads.SetOperator => ({
  type: "script_function_payload",
  function: "0x1::stake::set_operator",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.new_operator)],
});

/** Similar to unlock_with_cap but will use ownership capability from the signing account. */
export const unlock = ({ args }: mod.UnlockArgs): payloads.Unlock => ({
  type: "script_function_payload",
  function: "0x1::stake::unlock",
  type_arguments: [],
  arguments: [p.serializers.u64(args.amount)],
});

/** Update the network and full node addresses of the validator. This only takes effect in the next epoch. */
export const update_network_and_fullnode_addresses = ({
  args,
}: mod.UpdateNetworkAndFullnodeAddressesArgs): payloads.UpdateNetworkAndFullnodeAddresses => ({
  type: "script_function_payload",
  function: "0x1::stake::update_network_and_fullnode_addresses",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.pool_address),
    p.serializers.hexString(args.new_network_addresses),
    p.serializers.hexString(args.new_fullnode_addresses),
  ],
});
