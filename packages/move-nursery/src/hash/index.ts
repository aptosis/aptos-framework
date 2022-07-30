/**
 * Module which defines SHA hashes for byte vectors.
 *
 * The functions in this module are natively declared both in the Move runtime
 * as in the Move prover's prelude.
 *
 * **Module ID:** `0x1::hash`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::hash" as const;
/** The name of the module. */
export const NAME = "hash" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::hash`. */
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
  "hash"
> as typeof moduleImpl;
