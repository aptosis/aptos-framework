/**
 * Module which defines SHA hashes for byte vectors.
 *
 * The functions in this module are natively declared both in the Move runtime
 * as in the Move prover's prelude.
 *
 * **Module ID:** `0x1::Hash`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Hash",
  /** The name of the module. */
  NAME: "Hash",
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::Hash`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Module which defines SHA hashes for byte vectors.
 *
 * The functions in this module are natively declared both in the Move runtime
 * as in the Move prover's prelude.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Hash"
> as typeof moduleImpl;
