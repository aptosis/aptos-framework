/**
 * Utilities for comparing Move values based on their representation in BCS.
 *
 * **Module ID:** `0x1::Compare`
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
  FULL_NAME: "0x1::Compare",
  /** The name of the module. */
  NAME: "Compare",
} as const;

export * as errors from "./errors.js";

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
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** Utilities for comparing Move values based on their representation in BCS. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Compare"
> as typeof moduleImpl;
