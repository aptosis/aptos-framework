/**
 * This module defines the Option type and its methods to represent and handle an optional value.
 *
 * **Module ID:** `0x1::Option`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Abstraction of a value that may or may not be present. Implemented with a vector of size
 * zero or one because Move bytecode does not have ADTs.
 */
export type OptionData<_Element = unknown> = {
  vec: ReadonlyArray<_Element>;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Option" as const;
/** The name of the module. */
export const NAME = "Option" as const;

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
    name: "EOPTION_IS_SET",
    doc: "The `Option` is in an invalid state for the operation attempted.\n The `Option` is `Some` while it should be `None`.",
  },
  "1": {
    name: "EOPTION_NOT_SET",
    doc: "The `Option` is in an invalid state for the operation attempted.\n The `Option` is `None` while it should be `Some`.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Option: "0x1::Option::Option",
} as const;

/** Payload generators for module `0x1::Option`. */
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
  "Option"
> as typeof moduleImpl;
