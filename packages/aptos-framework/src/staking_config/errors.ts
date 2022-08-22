/**
 * Module errors.
 *
 * @module
 */
/** Stake lockup duration cannot be zero */
export const EZERO_LOCKUP_DURATION = {
  code: 1,
  name: "EZERO_LOCKUP_DURATION",
  doc: "Stake lockup duration cannot be zero",
} as const;

/** Reward rate denominator cannot be zero */
export const EZERO_REWARDS_RATE_DENOMINATOR = {
  code: 2,
  name: "EZERO_REWARDS_RATE_DENOMINATOR",
  doc: "Reward rate denominator cannot be zero",
} as const;

/** Specified stake range is invalid. Max must be greater than min */
export const EINVALID_STAKE_RANGE = {
  code: 3,
  name: "EINVALID_STAKE_RANGE",
  doc: "Specified stake range is invalid. Max must be greater than min",
} as const;

/** The voting power increase limit percentage must be within (0, 50] */
export const EINVALID_VOTING_POWER_INCREASE_LIMIT = {
  code: 4,
  name: "EINVALID_VOTING_POWER_INCREASE_LIMIT",
  doc: "The voting power increase limit percentage must be within (0, 50]",
} as const;
