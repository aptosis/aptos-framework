/**
 * Module errors.
 *
 * @module
 */
export const ETOKEN_ALREADY_LISTED = {
  code: 1,
  name: "ETOKEN_ALREADY_LISTED",
} as const;

export const ETOKEN_LISTING_NOT_EXIST = {
  code: 2,
  name: "ETOKEN_LISTING_NOT_EXIST",
} as const;

export const ETOKEN_NOT_IN_ESCROW = {
  code: 3,
  name: "ETOKEN_NOT_IN_ESCROW",
} as const;

export const ETOKEN_CANNOT_MOVE_OUT_OF_ESCROW_BEFORE_LOCKUP_TIME = {
  code: 4,
  name: "ETOKEN_CANNOT_MOVE_OUT_OF_ESCROW_BEFORE_LOCKUP_TIME",
} as const;

export const ETOKEN_MIN_PRICE_NOT_MATCH = {
  code: 5,
  name: "ETOKEN_MIN_PRICE_NOT_MATCH",
} as const;

export const ETOKEN_AMOUNT_NOT_MATCH = {
  code: 6,
  name: "ETOKEN_AMOUNT_NOT_MATCH",
} as const;

export const ENOT_ENOUGH_COIN = {
  code: 7,
  name: "ENOT_ENOUGH_COIN",
} as const;
