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
    "0x1::big_vector": {
      "1": {
        name: "EINDEX_OUT_OF_BOUNDS",
        doc: "Vector index is out of bounds",
      },
      "2": {
        name: "EOUT_OF_CAPACITY",
        doc: "Vector is full",
      },
      "3": {
        name: "EVECTOR_NOT_EMPTY",
        doc: "Cannot destroy a non-empty vector",
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
    "0x1::bls12381": {
      "1": {
        name: "EZERO_PUBKEYS",
        doc: "The caller was supposed to input one or more public keys.",
      },
    },
    "0x1::capability": {
      "1": {
        name: "ECAPABILITY_ALREADY_EXISTS",
        doc: "Capability resource already exists on the specified account",
      },
      "2": {
        name: "ECAPABILITY_NOT_FOUND",
        doc: "Capability resource not found",
      },
      "3": {
        name: "EDELEGATE",
        doc: "Account does not have delegated permissions",
      },
    },
    "0x1::comparator": {
      "0": {
        name: "EQUAL",
      },
    },
    "0x1::ed25519": {
      "1": {
        name: "E_WRONG_PUBKEY_SIZE",
        doc: "Wrong number of bytes were given as input when deserializing an Ed25519 public key.",
      },
      "2": {
        name: "E_WRONG_SIGNATURE_SIZE",
        doc: "Wrong number of bytes were given as input when deserializing an Ed25519 signature.",
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
    "0x1::secp256k1": {
      "1": {
        name: "E_DESERIALIZE",
        doc: "An error occurred while deserializing, for example due to wrong input size.",
      },
    },
    "0x1::simple_map": {
      "1": {
        name: "EKEY_ALREADY_EXISTS",
        doc: "Map key already exists",
      },
      "2": {
        name: "EKEY_NOT_FOUND",
        doc: "Map key is not found",
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
    "0x1::table_with_length": {
      "100": {
        name: "EALREADY_EXISTS",
      },
      "101": {
        name: "ENOT_FOUND",
      },
      "102": {
        name: "ENOT_EMPTY",
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
