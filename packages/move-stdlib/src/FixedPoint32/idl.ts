/**
 * The IDL of the module.
 *
 * @module
 */
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
