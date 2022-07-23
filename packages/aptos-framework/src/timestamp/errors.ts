/**
 * Module errors.
 *
 * @module
 */
/** The blockchain is not in the genesis state anymore */
export const ENOT_GENESIS = {
  code: 0,
  name: "ENOT_GENESIS",
  doc: "The blockchain is not in the genesis state anymore",
} as const;

/** The blockchain is not in an operating state yet */
export const ENOT_OPERATING = {
  code: 1,
  name: "ENOT_OPERATING",
  doc: "The blockchain is not in an operating state yet",
} as const;

/** An invalid timestamp was provided */
export const ETIMESTAMP = {
  code: 2,
  name: "ETIMESTAMP",
  doc: "An invalid timestamp was provided",
} as const;
