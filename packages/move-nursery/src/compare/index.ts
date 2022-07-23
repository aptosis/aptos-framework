/**
 * Utilities for comparing Move values based on their representation in BCS.
 *
 * **Module ID:** `0x1::compare`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::compare" as const;
/** The name of the module. */
export const NAME = "compare" as const;

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
    name: "EQUAL",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::compare`. */
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
  "compare"
> as typeof moduleImpl;
