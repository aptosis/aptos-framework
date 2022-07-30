/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::string",
  doc: "The `string` module defines the `String` type which represents UTF8 encoded strings.",
  functions: [],
  structs: [
    {
      name: "0x1::string::String",
      doc: "A `String` holds a sequence of bytes which is guaranteed to be in utf8 format.",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "1": { name: "EINVALID_UTF8", doc: "An invalid UTF8 encoding." },
    "2": { name: "EINVALID_INDEX", doc: "Index out of range." },
  },
} as const;
