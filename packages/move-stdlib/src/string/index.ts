/**
 * The `string` module defines the `String` type which represents UTF8 encoded strings.
 *
 * **Module ID:** `0x1::string`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * A `String` holds a sequence of bytes which is guaranteed to be in utf8 format.
 *
 * Type name: `0x1::string::String`
 */
export interface IString {
  bytes: p.ByteString;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::string" as const;
/** The name of the module. */
export const NAME = "string" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "EINVALID_UTF8",
    doc: "An invalid UTF8 encoding.",
  },
  "2": {
    name: "EINVALID_INDEX",
    doc: "Index out of range.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  String: "0x1::string::String",
} as const;

/** Payload generators for module `0x1::string`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** The `string` module defines the `String` type which represents UTF8 encoded strings. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "string"
> as typeof moduleImpl;
