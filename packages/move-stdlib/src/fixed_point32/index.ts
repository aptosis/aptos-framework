/**
 * Defines a fixed-point numeric type with a 32-bit integer part and
 * a 32-bit fractional part.
 *
 * **Module ID:** `0x1::fixed_point32`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Define a fixed-point numeric type with 32 fractional bits.
 * This is just a u64 integer but it is wrapped in a struct to
 * make a unique type. This is a binary representation, so decimal
 * values may not be exactly representable, but it provides more
 * than 9 decimal digits of precision both before and after the
 * decimal point (18 digits total). For comparison, double precision
 * floating-point has less than 16 decimal digits of precision, so
 * be careful about using floating-point to convert these values to
 * decimal.
 *
 * Type name: `0x1::fixed_point32::FixedPoint32`
 */
export interface IFixedPoint32 {
  value: p.U64;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::fixed_point32" as const;
/** The name of the module. */
export const NAME = "fixed_point32" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "65537": {
    name: "EDENOMINATOR",
    doc: "The denominator provided was zero",
  },
  "65540": {
    name: "EDIVISION_BY_ZERO",
    doc: "A division by zero was encountered",
  },
  "131074": {
    name: "EDIVISION",
    doc: "The quotient value would be too large to be held in a `u64`",
  },
  "131075": {
    name: "EMULTIPLICATION",
    doc: "The multiplied value would be too large to be held in a `u64`",
  },
  "131077": {
    name: "ERATIO_OUT_OF_RANGE",
    doc: "The computed ratio when converting to a `FixedPoint32` would be unrepresentable",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  FixedPoint32: "0x1::fixed_point32::FixedPoint32",
} as const;

/** Payload generators for module `0x1::fixed_point32`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Defines a fixed-point numeric type with a 32-bit integer part and
 * a 32-bit fractional part.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "fixed_point32"
> as typeof moduleImpl;
