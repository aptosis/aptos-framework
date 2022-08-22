/**
 * Module errors.
 *
 * @module
 */
/** The blockchain is not in an operating state yet */
export const ENOT_OPERATING = {
  code: 1,
  name: "ENOT_OPERATING",
  doc: "The blockchain is not in an operating state yet",
} as const;

/** An invalid timestamp was provided */
export const EINVALID_TIMESTAMP = {
  code: 2,
  name: "EINVALID_TIMESTAMP",
  doc: "An invalid timestamp was provided",
} as const;
