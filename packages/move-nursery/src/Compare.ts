/**
 * Utilities for comparing Move values based on their representation in BCS.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Compare",
  doc: "Utilities for comparing Move values based on their representation in BCS.",
  functions: [],
  structs: [],
  errors: { "0": { name: "EQUAL" } },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Compare",
  /** The name of the module. */
  NAME: "Compare",
} as const;

/** Module errors. */
export const errors = {
  EQUAL: {
    code: 0,
    name: "EQUAL",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EQUAL",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::Compare`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** Utilities for comparing Move values based on their representation in BCS. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Compare"
> as typeof moduleImpl;
