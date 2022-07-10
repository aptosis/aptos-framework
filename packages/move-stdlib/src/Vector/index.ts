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
 * **Module ID:** `0x1::Vector`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Vector" as const;
/** The name of the module. */
export const NAME = "Vector" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

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
  errorCodes,
  functions,
  resources,
  structs,
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
