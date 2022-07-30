/**
 * Module errors.
 *
 * @module
 */
/** The provided index is out of bounds */
export const EINDEX = {
  code: 131072,
  name: "EINDEX",
  doc: "The provided index is out of bounds",
} as const;

/** An invalid length of bitvector was given */
export const ELENGTH = {
  code: 131073,
  name: "ELENGTH",
  doc: "An invalid length of bitvector was given",
} as const;
