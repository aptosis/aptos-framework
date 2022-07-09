/**
 * A variable-sized container that can hold any type. Indexing is 0-based, and
 * vectors are growable. This module has many native functions.
 * Verification of modules that use this one uses model functions that are implemented
 * directly in Boogie. The specification language has built-in functions operations such
 * as `singleton_vector`. There are some helper functions defined here for specifications in other
 * modules as well.
 *
 * >Note: We did not verify most of the
 * Move functions here because many have loops, requiring loop invariants to prove, and
 * the return on investment didn't seem worth it for these simple functions.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Vector",
  doc: "A variable-sized container that can hold any type. Indexing is 0-based, and\nvectors are growable. This module has many native functions.\nVerification of modules that use this one uses model functions that are implemented\ndirectly in Boogie. The specification language has built-in functions operations such\nas `singleton_vector`. There are some helper functions defined here for specifications in other\nmodules as well.\n\n>Note: We did not verify most of the\nMove functions here because many have loops, requiring loop invariants to prove, and\nthe return on investment didn't seem worth it for these simple functions.",
  functions: [],
  structs: [],
  errors: {
    "0": {
      name: "EINDEX_OUT_OF_BOUNDS",
      doc: "The index into the vector is out of bounds",
    },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Vector",
  /** The name of the module. */
  NAME: "Vector",
} as const;

/** Module errors. */
export const errors = {
  EINDEX_OUT_OF_BOUNDS: {
    code: 0,
    name: "EINDEX_OUT_OF_BOUNDS",
    doc: "The index into the vector is out of bounds",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EINDEX_OUT_OF_BOUNDS",
    doc: "The index into the vector is out of bounds",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::Vector`. */
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
 * A variable-sized container that can hold any type. Indexing is 0-based, and
 * vectors are growable. This module has many native functions.
 * Verification of modules that use this one uses model functions that are implemented
 * directly in Boogie. The specification language has built-in functions operations such
 * as `singleton_vector`. There are some helper functions defined here for specifications in other
 * modules as well.
 *
 * >Note: We did not verify most of the
 * Move functions here because many have loops, requiring loop invariants to prove, and
 * the return on investment didn't seem worth it for these simple functions.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Vector"
> as typeof moduleImpl;
