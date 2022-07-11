/**
 * Module containing all errors in this package.
 *
 * @module
 */

/** All errors in this package. */
export const errmap = {
  error_categories: {
    "1": {
      name: "INVALID_STATE",
      doc: "The system is in a state where the performed operation is not allowed. Example: call to a function only allowed\nin genesis.",
    },
    "2": {
      name: "REQUIRES_ADDRESS",
      doc: "The signer of a transaction does not have the expected address for this operation. Example: a call to a function\nwhich publishes a resource under a particular address.",
    },
    "3": {
      name: "REQUIRES_ROLE",
      doc: "The signer of a transaction does not have the expected  role for this operation. Example: a call to a function\nwhich requires the signer to have the role of treasury compliance.",
    },
    "4": {
      name: "REQUIRES_CAPABILITY",
      doc: "The signer of a transaction does not have a required capability.",
    },
    "5": {
      name: "NOT_PUBLISHED",
      doc: "A resource is required but not published. Example: access to non-existing AccountLimits resource.",
    },
    "6": {
      name: "ALREADY_PUBLISHED",
      doc: "Attempting to publish a resource that is already published. Example: calling an initialization function\ntwice.",
    },
    "7": {
      name: "INVALID_ARGUMENT",
      doc: "An argument provided to an operation is invalid. Example: a signing key has the wrong format.",
    },
    "8": {
      name: "LIMIT_EXCEEDED",
      doc: "A limit on an amount, e.g. a currency, is exceeded. Example: withdrawal of money after account limits window\nis exhausted.",
    },
    "10": {
      name: "INTERNAL",
      doc: "An internal error (bug) has occurred.",
    },
    "255": {
      name: "CUSTOM",
      doc: "A custom error category for extension points.",
    },
  },
  module_error_maps: {
    "0x1::ACL": {
      "0": {
        name: "ECONTAIN",
        doc: "The ACL already contains the address.",
      },
      "1": {
        name: "ENOT_CONTAIN",
        doc: "The ACL does not contain the address.",
      },
    },
    "0x1::ASCII": {
      "0": {
        name: "EINVALID_ASCII_CHARACTER",
        doc: "An invalid ASCII character was encountered when creating an ASCII string.",
      },
    },
    "0x1::BitVector": {
      "0": {
        name: "EINDEX",
        doc: "The provided index is out of bounds",
      },
      "1": {
        name: "ELENGTH",
        doc: "An invalid length of bitvector was given",
      },
    },
    "0x1::Capability": {
      "0": {
        name: "ECAP",
      },
      "1": {
        name: "EDELEGATE",
      },
    },
    "0x1::FixedPoint32": {
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
    },
    "0x1::GUID": {
      "0": {
        name: "EGUID_GENERATOR_NOT_PUBLISHED",
        doc: "GUID generator must be published ahead of first usage of `create_with_capability` function.",
      },
    },
    "0x1::Offer": {
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
    "0x1::Option": {
      "0": {
        name: "EOPTION_IS_SET",
        doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `Some` while it should be `None`.",
      },
      "1": {
        name: "EOPTION_NOT_SET",
        doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `None` while it should be `Some`.",
      },
    },
    "0x1::Vector": {
      "0": {
        name: "EINDEX_OUT_OF_BOUNDS",
        doc: "The index into the vector is out of bounds",
      },
    },
  },
} as const;
