/**
 * Module containing all errors in this package.
 *
 * @module
 */

/** All errors in this package. */
export const errmap = {
  error_categories: {},
  module_error_maps: {
    "0x1::bit_vector": {
      "131072": {
        name: "EINDEX",
        doc: "The provided index is out of bounds",
      },
      "131073": {
        name: "ELENGTH",
        doc: "An invalid length of bitvector was given",
      },
    },
    "0x1::fixed_point32": {
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
    },
    "0x1::option": {
      "262144": {
        name: "EOPTION_IS_SET",
        doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `Some` while it should be `None`.",
      },
      "262145": {
        name: "EOPTION_NOT_SET",
        doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `None` while it should be `Some`.",
      },
    },
    "0x1::string": {
      "1": {
        name: "EINVALID_UTF8",
        doc: "An invalid UTF8 encoding.",
      },
      "2": {
        name: "EINVALID_INDEX",
        doc: "Index out of range.",
      },
    },
    "0x1::vector": {
      "131072": {
        name: "EINDEX_OUT_OF_BOUNDS",
        doc: "The index into the vector is out of bounds",
      },
    },
  },
} as const;
