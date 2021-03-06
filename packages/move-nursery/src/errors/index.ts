/**
 * Module defining error codes used in Move aborts throughout the framework.
 *
 * A `u64` error code is constructed from two values:
 *
 *  1. The *error category* which is encoded in the lower 8 bits of the code. Error categories are
 *     declared in this module and are globally unique across the Aptos framework. There is a limited
 *     fixed set of predefined categories, and the framework is guaranteed to use those consistently.
 *
 *  2. The *error reason* which is encoded in the remaining 56 bits of the code. The reason is a unique
 *     number relative to the module which raised the error and can be used to obtain more information about
 *     the error at hand. It is mostly used for diagnosis purposes. Error reasons may change over time as the
 *     framework evolves.
 *
 * >TODO: determine what kind of stability guarantees we give about reasons/associated module.
 *
 * **Module ID:** `0x1::errors`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::errors" as const;
/** The name of the module. */
export const NAME = "errors" as const;

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

/** Payload generators for module `0x1::errors`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Module defining error codes used in Move aborts throughout the framework.
 *
 * A `u64` error code is constructed from two values:
 *
 *  1. The *error category* which is encoded in the lower 8 bits of the code. Error categories are
 *     declared in this module and are globally unique across the Aptos framework. There is a limited
 *     fixed set of predefined categories, and the framework is guaranteed to use those consistently.
 *
 *  2. The *error reason* which is encoded in the remaining 56 bits of the code. The reason is a unique
 *     number relative to the module which raised the error and can be used to obtain more information about
 *     the error at hand. It is mostly used for diagnosis purposes. Error reasons may change over time as the
 *     framework evolves.
 *
 * >TODO: determine what kind of stability guarantees we give about reasons/associated module.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "errors"
> as typeof moduleImpl;
