/**
 * Defines a fixed-point numeric type with a 32-bit integer part and
 * a 32-bit fractional part.
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
 */
export type FixedPoint32Data = {
  value: p.U64;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::FixedPoint32",
  doc: "Defines a fixed-point numeric type with a 32-bit integer part and\na 32-bit fractional part.",
  functions: [],
  structs: [
    {
      name: "0x1::FixedPoint32::FixedPoint32",
      doc: "Define a fixed-point numeric type with 32 fractional bits.\nThis is just a u64 integer but it is wrapped in a struct to\nmake a unique type. This is a binary representation, so decimal\nvalues may not be exactly representable, but it provides more\nthan 9 decimal digits of precision both before and after the\ndecimal point (18 digits total). For comparison, double precision\nfloating-point has less than 16 decimal digits of precision, so\nbe careful about using floating-point to convert these values to\ndecimal.",
      fields: [{ name: "value", ty: "u64" }],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": { name: "EDENOMINATOR", doc: "The denominator provided was zero" },
    "1": {
      name: "EDIVISION",
      doc: "The quotient value would be too large to be held in a `u64`",
    },
    "2": {
      name: "EMULTIPLICATION",
      doc: "The multiplied value would be too large to be held in a `u64`",
    },
    "3": {
      name: "EDIVISION_BY_ZERO",
      doc: "A division by zero was encountered",
    },
    "4": {
      name: "ERATIO_OUT_OF_RANGE",
      doc: "The computed ratio when converting to a `FixedPoint32` would be unrepresentable",
    },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::FixedPoint32",
  /** The name of the module. */
  NAME: "FixedPoint32",
} as const;

/** Module errors. */
export const errors = {
  EDENOMINATOR: {
    code: 0,
    name: "EDENOMINATOR",
    doc: "The denominator provided was zero",
  },
  EDIVISION: {
    code: 1,
    name: "EDIVISION",
    doc: "The quotient value would be too large to be held in a `u64`",
  },
  EDIVISION_BY_ZERO: {
    code: 3,
    name: "EDIVISION_BY_ZERO",
    doc: "A division by zero was encountered",
  },
  EMULTIPLICATION: {
    code: 2,
    name: "EMULTIPLICATION",
    doc: "The multiplied value would be too large to be held in a `u64`",
  },
  ERATIO_OUT_OF_RANGE: {
    code: 4,
    name: "ERATIO_OUT_OF_RANGE",
    doc: "The computed ratio when converting to a `FixedPoint32` would be unrepresentable",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EDENOMINATOR",
    doc: "The denominator provided was zero",
  },
  "1": {
    name: "EDIVISION",
    doc: "The quotient value would be too large to be held in a `u64`",
  },
  "2": {
    name: "EMULTIPLICATION",
    doc: "The multiplied value would be too large to be held in a `u64`",
  },
  "3": {
    name: "EDIVISION_BY_ZERO",
    doc: "A division by zero was encountered",
  },
  "4": {
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
  FixedPoint32: "0x1::FixedPoint32::FixedPoint32",
} as const;

/** Payload generators for module `0x1::FixedPoint32`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/**
 * Defines a fixed-point numeric type with a 32-bit integer part and
 * a 32-bit fractional part.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "FixedPoint32"
> as typeof moduleImpl;
