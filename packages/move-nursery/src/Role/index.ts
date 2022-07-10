/**
 * A generic module for role-based access control (RBAC).
 *
 * **Module ID:** `0x1::Role`
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
  FULL_NAME: "0x1::Role",
  /** The name of the module. */
  NAME: "Role",
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
  Role: "0x1::Role::Role",
} as const;

/** All struct types. */
export const structs = {
  Role: "0x1::Role::Role",
} as const;

/** Payload generators for module `0x1::Role`. */
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
  "Role"
> as typeof moduleImpl;
