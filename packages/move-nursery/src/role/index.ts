/**
 * A generic module for role-based access control (RBAC).
 *
 * **Module ID:** `0x1::role`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::role" as const;
/** The name of the module. */
export const NAME = "role" as const;

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
    name: "EROLE",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  Role: "0x1::role::Role",
} as const;

/** All struct types. */
export const structs = {
  Role: "0x1::role::Role",
} as const;

/** Payload generators for module `0x1::role`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** A generic module for role-based access control (RBAC). */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "role"
> as typeof moduleImpl;
