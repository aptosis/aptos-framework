/**
 * Module containing all errors in this package.
 *
 * @module
 */

/** All errors in this package. */
export const errmap = {
  error_categories: {},
  module_error_maps: {
    "0x1::acl": {
      "0": {
        name: "ECONTAIN",
        doc: "The ACL already contains the address.",
      },
      "1": {
        name: "ENOT_CONTAIN",
        doc: "The ACL does not contain the address.",
      },
    },
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
    "0x1::capability": {
      "0": {
        name: "ECAP",
      },
      "1": {
        name: "EDELEGATE",
      },
    },
    "0x1::compare": {
      "0": {
        name: "EQUAL",
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
    "0x1::guid": {
      "0": {
        name: "EGUID_GENERATOR_NOT_PUBLISHED",
        doc: "GUID generator must be published ahead of first usage of `create_with_capability` function.",
      },
    },
    "0x1::offer": {
      "0": {
        name: "EOFFER_DNE_FOR_ACCOUNT",
        doc: "An offer of the specified type for the account does not exist",
      },
      "1": {
        name: "EOFFER_ALREADY_CREATED",
        doc: "Address already has an offer of this type.",
      },
      "2": {
        name: "EOFFER_DOES_NOT_EXIST",
        doc: "Address does not have an offer of this type to redeem.",
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
    "0x1::role": {
      "0": {
        name: "EROLE",
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
    "0x1::vault": {
      "0": {
        name: "EVAULT",
      },
      "1": {
        name: "EDELEGATE",
      },
      "2": {
        name: "EACCESSOR_IN_USE",
      },
      "3": {
        name: "EACCESSOR_INCONSISTENCY",
      },
      "4": {
        name: "EDELEGATE_TO_SELF",
      },
      "5": {
        name: "EDELEGATION_NOT_ENABLED",
      },
      "6": {
        name: "EEVENT",
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
