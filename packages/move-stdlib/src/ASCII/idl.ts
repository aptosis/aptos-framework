/**
 * The IDL of the module.
 *
 * @module
 */
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
