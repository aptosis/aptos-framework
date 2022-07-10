/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::GUID",
  doc: "A module for generating globally unique identifiers",
  functions: [],
  structs: [
    {
      name: "0x1::GUID::GUID",
      doc: "A globally unique identifier derived from the sender's address and a counter",
      fields: [{ name: "id", ty: { struct: { name: "0x1::GUID::ID" } } }],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::GUID::CreateCapability",
      doc: "A capability to create a privileged identifier on behalf of the given address",
      fields: [{ name: "addr", ty: "address" }],
      abilities: ["drop", "store", "key"],
    },
    {
      name: "0x1::GUID::Generator",
      doc: "A generator for new GUIDs.",
      fields: [
        {
          name: "counter",
          doc: "A monotonically increasing counter",
          ty: "u64",
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::GUID::ID",
      doc: "A non-privileged identifier that can be freely created by anyone. Useful for looking up GUID's.",
      fields: [
        {
          name: "creation_num",
          doc: "If creation_num is `i`, this is the `i+1`th GUID created by `addr`",
          ty: "u64",
        },
        { name: "addr", doc: "Address that created the GUID", ty: "address" },
      ],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": {
      name: "EGUID_GENERATOR_NOT_PUBLISHED",
      doc: "GUID generator must be published ahead of first usage of `create_with_capability` function.",
    },
  },
} as const;
