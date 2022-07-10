/**
 * Module errors.
 *
 * @module
 */
/** Error codes. */
export const EINSUFFICIENT_PROPOSER_STAKE = {
  code: 1,
  name: "EINSUFFICIENT_PROPOSER_STAKE",
  doc: "Error codes.",
} as const;

export const ENOT_DELEGATED_VOTER = {
  code: 2,
  name: "ENOT_DELEGATED_VOTER",
} as const;

export const EINSUFFICIENT_STAKE_LOCKUP = {
  code: 3,
  name: "EINSUFFICIENT_STAKE_LOCKUP",
} as const;

export const EALREADY_VOTED = {
  code: 4,
  name: "EALREADY_VOTED",
} as const;
