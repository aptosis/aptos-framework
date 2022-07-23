/**
 * This module defines the Option type and its methods to represent and handle an optional value.
 *
 * **Module ID:** `0x1::option`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Abstraction of a value that may or may not be present. Implemented with a vector of size
 * zero or one because Move bytecode does not have ADTs.
 *
 * Type name: `0x1::option::Option`
 */
export interface IOption<_Element = unknown> {
  vec: ReadonlyArray<_Element>;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::option" as const;
/** The name of the module. */
export const NAME = "option" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "262144": {
    name: "EOPTION_IS_SET",
    doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `Some` while it should be `None`.",
  },
  "262145": {
    name: "EOPTION_NOT_SET",
    doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `None` while it should be `Some`.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Option: "0x1::option::Option",
} as const;

/** Payload generators for module `0x1::option`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module defines the Option type and its methods to represent and handle an optional value. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "option"
> as typeof moduleImpl;
