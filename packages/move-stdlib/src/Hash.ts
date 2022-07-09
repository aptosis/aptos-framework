/**
 * Module which defines SHA hashes for byte vectors.
 *
 * The functions in this module are natively declared both in the Move runtime
 * as in the Move prover's prelude.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Hash",
  doc: "Module which defines SHA hashes for byte vectors.\n\nThe functions in this module are natively declared both in the Move runtime\nas in the Move prover's prelude.",
  functions: [],
  structs: [],
  errors: {},
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Hash",
  /** The name of the module. */
  NAME: "Hash",
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

/** Payload generators for module `0x1::Hash`. */
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
 * Module which defines SHA hashes for byte vectors.
 *
 * The functions in this module are natively declared both in the Move runtime
 * as in the Move prover's prelude.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Hash"
> as typeof moduleImpl;
