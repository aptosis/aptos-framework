/**
 * Provides the configuration for staking and rewards
 *
 * **Module ID:** `0x1::staking_config`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Validator set configurations that will be stored with the @aptos_framework account.
 *
 * Type name: `0x1::staking_config::StakingConfig`
 */
export interface IStakingConfig {
  minimum_stake: p.U64;
  maximum_stake: p.U64;
  recurring_lockup_duration_secs: p.U64;
  allow_validator_set_change: boolean;
  rewards_rate: p.U64;
  rewards_rate_denominator: p.U64;
  voting_power_increase_limit: p.U64;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::staking_config" as const;
/** The name of the module. */
export const NAME = "staking_config" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "EZERO_LOCKUP_DURATION",
    doc: "Stake lockup duration cannot be zero",
  },
  "2": {
    name: "EZERO_REWARDS_RATE_DENOMINATOR",
    doc: "Reward rate denominator cannot be zero",
  },
  "3": {
    name: "EINVALID_STAKE_RANGE",
    doc: "Specified stake range is invalid. Max must be greater than min",
  },
  "4": {
    name: "EINVALID_VOTING_POWER_INCREASE_LIMIT",
    doc: "The voting power increase limit percentage must be within (0, 50]",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  StakingConfig: "0x1::staking_config::StakingConfig",
} as const;

/** All struct types. */
export const structs = {
  StakingConfig: "0x1::staking_config::StakingConfig",
} as const;

/** Payload generators for module `0x1::staking_config`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** Provides the configuration for staking and rewards */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "staking_config"
> as typeof moduleImpl;
