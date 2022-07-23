/**
 * Module errors.
 *
 * @module
 */
/** The denominator provided was zero */
export const EDENOMINATOR = {
  code: 65537,
  name: "EDENOMINATOR",
  doc: "The denominator provided was zero",
} as const;

/** A division by zero was encountered */
export const EDIVISION_BY_ZERO = {
  code: 65540,
  name: "EDIVISION_BY_ZERO",
  doc: "A division by zero was encountered",
} as const;

/** The quotient value would be too large to be held in a `u64` */
export const EDIVISION = {
  code: 131074,
  name: "EDIVISION",
  doc: "The quotient value would be too large to be held in a `u64`",
} as const;

/** The multiplied value would be too large to be held in a `u64` */
export const EMULTIPLICATION = {
  code: 131075,
  name: "EMULTIPLICATION",
  doc: "The multiplied value would be too large to be held in a `u64`",
} as const;

/** The computed ratio when converting to a `FixedPoint32` would be unrepresentable */
export const ERATIO_OUT_OF_RANGE = {
  code: 131077,
  name: "ERATIO_OUT_OF_RANGE",
  doc: "The computed ratio when converting to a `FixedPoint32` would be unrepresentable",
} as const;
