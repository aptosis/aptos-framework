/**
 * A generic module for role-based access control (RBAC).
 *
 * **Module ID:** `0x1::Role`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Role" as const;
/** The name of the module. */
export const NAME = "Role" as const;

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
