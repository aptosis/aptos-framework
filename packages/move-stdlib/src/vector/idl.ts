/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::vector",
  doc: "A variable-sized container that can hold any type. Indexing is 0-based, and\nvectors are growable. This module has many native functions.\nVerification of modules that use this one uses model functions that are implemented\ndirectly in Boogie. The specification language has built-in functions operations such\nas `singleton_vector`. There are some helper functions defined here for specifications in other\nmodules as well.\n\n>Note: We did not verify most of the\nMove functions here because many have loops, requiring loop invariants to prove, and\nthe return on investment didn't seem worth it for these simple functions.",
  functions: [],
  structs: [],
  errors: {
    "131072": {
      name: "EINDEX_OUT_OF_BOUNDS",
      doc: "The index into the vector is out of bounds",
    },
  },
} as const;
