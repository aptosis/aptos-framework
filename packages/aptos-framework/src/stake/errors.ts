/**
 * Module errors.
 *
 * @module
 */
/** Lockup period is shorter than required. */
export const ELOCK_TIME_TOO_SHORT = {
  code: 1,
  name: "ELOCK_TIME_TOO_SHORT",
  doc: "Lockup period is shorter than required.",
} as const;

/** Withdraw not allowed, the stake is still locked. */
export const EWITHDRAW_NOT_ALLOWED = {
  code: 2,
  name: "EWITHDRAW_NOT_ALLOWED",
  doc: "Withdraw not allowed, the stake is still locked.",
} as const;

/** Validator Config not published. */
export const EVALIDATOR_CONFIG = {
  code: 3,
  name: "EVALIDATOR_CONFIG",
  doc: "Validator Config not published.",
} as const;

/** Not enough stake to join validator set. */
export const ESTAKE_TOO_LOW = {
  code: 4,
  name: "ESTAKE_TOO_LOW",
  doc: "Not enough stake to join validator set.",
} as const;

/** Too much stake to join validator set. */
export const ESTAKE_TOO_HIGH = {
  code: 5,
  name: "ESTAKE_TOO_HIGH",
  doc: "Too much stake to join validator set.",
} as const;

/** Account is already a validator or pending validator. */
export const EALREADY_ACTIVE_VALIDATOR = {
  code: 6,
  name: "EALREADY_ACTIVE_VALIDATOR",
  doc: "Account is already a validator or pending validator.",
} as const;

/** Account is not a validator. */
export const ENOT_VALIDATOR = {
  code: 7,
  name: "ENOT_VALIDATOR",
  doc: "Account is not a validator.",
} as const;

/** Can't remove last validator. */
export const ELAST_VALIDATOR = {
  code: 8,
  name: "ELAST_VALIDATOR",
  doc: "Can't remove last validator.",
} as const;

/** Total stake exceeds maximum allowed. */
export const ESTAKE_EXCEEDS_MAX = {
  code: 9,
  name: "ESTAKE_EXCEEDS_MAX",
  doc: "Total stake exceeds maximum allowed.",
} as const;

/** Account is already registered as a validator candidate. */
export const EALREADY_REGISTERED = {
  code: 10,
  name: "EALREADY_REGISTERED",
  doc: "Account is already registered as a validator candidate.",
} as const;

/** No coins in inactive state to withdraw from specified pool. */
export const ENO_COINS_TO_WITHDRAW = {
  code: 11,
  name: "ENO_COINS_TO_WITHDRAW",
  doc: "No coins in inactive state to withdraw from specified pool.",
} as const;

/** Account does not have the right operator capability. */
export const ENOT_OPERATOR = {
  code: 12,
  name: "ENOT_OPERATOR",
  doc: "Account does not have the right operator capability.",
} as const;

/** Lockup period is longer than allowed. */
export const ELOCK_TIME_TOO_LONG = {
  code: 13,
  name: "ELOCK_TIME_TOO_LONG",
  doc: "Lockup period is longer than allowed.",
} as const;

export const ENO_POST_GENESIS_VALIDATOR_SET_CHANGE_ALLOWED = {
  code: 14,
  name: "ENO_POST_GENESIS_VALIDATOR_SET_CHANGE_ALLOWED",
} as const;

/** Invalid consensus public key */
export const EINVALID_PUBLIC_KEY = {
  code: 15,
  name: "EINVALID_PUBLIC_KEY",
  doc: "Invalid consensus public key",
} as const;

/** Invalid stake amount (usuaully 0). */
export const EINVALID_STAKE_AMOUNT = {
  code: 16,
  name: "EINVALID_STAKE_AMOUNT",
  doc: "Invalid stake amount (usuaully 0).",
} as const;

/** Validator set exceeds the limit */
export const EVALIDATOR_SET_TOO_LARGE = {
  code: 18,
  name: "EVALIDATOR_SET_TOO_LARGE",
  doc: "Validator set exceeds the limit",
} as const;

/** Voting power increase has exceeded the limit for this current epoch. */
export const EVOTING_POWER_INCREASE_EXCEEDS_LIMIT = {
  code: 19,
  name: "EVOTING_POWER_INCREASE_EXCEEDS_LIMIT",
  doc: "Voting power increase has exceeded the limit for this current epoch.",
} as const;
