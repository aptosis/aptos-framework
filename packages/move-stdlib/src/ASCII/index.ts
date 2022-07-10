/**
 * The `ASCII` module defines basic string and char newtypes in Move that verify
 * that characters are valid ASCII, and that strings consist of only valid ASCII characters.
 *
 * **Module ID:** `0x1::ASCII`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** An ASCII character. */
export type CharData = {
  byte: number;
};

/**
 * The `String` struct holds a vector of bytes that all represent
 * valid ASCII characters. Note that these ASCII characters may not all
 * be printable. To determine if a `String` contains only "printable"
 * characters you should use the `all_characters_printable` predicate
 * defined in this module.
 */
export type StringData = {
  bytes: p.ByteString;
};

export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::ASCII",
  /** The name of the module. */
  NAME: "ASCII",
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EINVALID_ASCII_CHARACTER",
    doc: "An invalid ASCII character was encountered when creating an ASCII string.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Char: "0x1::ASCII::Char",
  String: "0x1::ASCII::String",
} as const;

/** Payload generators for module `0x1::ASCII`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * The `ASCII` module defines basic string and char newtypes in Move that verify
 * that characters are valid ASCII, and that strings consist of only valid ASCII characters.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ASCII"
> as typeof moduleImpl;
