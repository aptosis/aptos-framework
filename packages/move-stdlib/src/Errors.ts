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
 * @module
 */
import type * as p from "@movingco/prelude";

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Errors",
  doc: "Module defining error codes used in Move aborts throughout the framework.\n\nA `u64` error code is constructed from two values:\n\n 1. The *error category* which is encoded in the lower 8 bits of the code. Error categories are\n    declared in this module and are globally unique across the Aptos framework. There is a limited\n    fixed set of predefined categories, and the framework is guaranteed to use those consistently.\n\n 2. The *error reason* which is encoded in the remaining 56 bits of the code. The reason is a unique\n    number relative to the module which raised the error and can be used to obtain more information about\n    the error at hand. It is mostly used for diagnosis purposes. Error reasons may change over time as the\n    framework evolves.\n\n>TODO: determine what kind of stability guarantees we give about reasons/associated module.",
  functions: [],
  structs: [],
  errors: {},
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Errors",
  /** The name of the module. */
  NAME: "Errors",
} as const;

/** Module errors. */
export const errors = {} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::Errors`. */
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
  "Errors"
> as typeof moduleImpl;
