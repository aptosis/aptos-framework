/**
 * Access control list (ACL) module. An ACL is a list of account addresses who
 * have the access permission to a certain object.
 * This module uses a `vector` to represent the list, but can be refactored to
 * use a "set" instead when it's available in the language in the future.
 *
 * **Module ID:** `0x1::ACL`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type ACLData = {
  list: ReadonlyArray<string>;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::ACL" as const;
/** The name of the module. */
export const NAME = "ACL" as const;

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
    name: "ECONTAIN",
    doc: "The ACL already contains the address.",
  },
  "1": {
    name: "ENOT_CONTAIN",
    doc: "The ACL does not contain the address.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  ACL: "0x1::ACL::ACL",
} as const;

/** Payload generators for module `0x1::ACL`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Access control list (ACL) module. An ACL is a list of account addresses who
 * have the access permission to a certain object.
 * This module uses a `vector` to represent the list, but can be refactored to
 * use a "set" instead when it's available in the language in the future.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ACL"
> as typeof moduleImpl;
