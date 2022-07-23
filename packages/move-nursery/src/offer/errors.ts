/**
 * Module errors.
 *
 * @module
 */
/** An offer of the specified type for the account does not exist */
export const EOFFER_DNE_FOR_ACCOUNT = {
  code: 0,
  name: "EOFFER_DNE_FOR_ACCOUNT",
  doc: "An offer of the specified type for the account does not exist",
} as const;

/** Address already has an offer of this type. */
export const EOFFER_ALREADY_CREATED = {
  code: 1,
  name: "EOFFER_ALREADY_CREATED",
  doc: "Address already has an offer of this type.",
} as const;

/** Address does not have an offer of this type to redeem. */
export const EOFFER_DOES_NOT_EXIST = {
  code: 2,
  name: "EOFFER_DOES_NOT_EXIST",
  doc: "Address does not have an offer of this type to redeem.",
} as const;
