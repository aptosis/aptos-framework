/**
 * The `ASCII` module defines basic string and char newtypes in Move that verify
 * that characters are valid ASCII, and that strings consist of only valid ASCII characters.
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

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::ASCII",
  doc: "The `ASCII` module defines basic string and char newtypes in Move that verify\nthat characters are valid ASCII, and that strings consist of only valid ASCII characters.",
  functions: [],
  structs: [
    {
      name: "0x1::ASCII::Char",
      doc: "An ASCII character.",
      fields: [{ name: "byte", ty: "u8" }],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::ASCII::String",
      doc: 'The `String` struct holds a vector of bytes that all represent\nvalid ASCII characters. Note that these ASCII characters may not all\nbe printable. To determine if a `String` contains only "printable"\ncharacters you should use the `all_characters_printable` predicate\ndefined in this module.',
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": {
      name: "EINVALID_ASCII_CHARACTER",
      doc: "An invalid ASCII character was encountered when creating an ASCII string.",
    },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::ASCII",
  /** The name of the module. */
  NAME: "ASCII",
} as const;

/** Module errors. */
export const errors = {
  EINVALID_ASCII_CHARACTER: {
    code: 0,
    name: "EINVALID_ASCII_CHARACTER",
    doc: "An invalid ASCII character was encountered when creating an ASCII string.",
  },
} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/**
 * The `ASCII` module defines basic string and char newtypes in Move that verify
 * that characters are valid ASCII, and that strings consist of only valid ASCII characters.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ASCII"
> as typeof moduleImpl;
