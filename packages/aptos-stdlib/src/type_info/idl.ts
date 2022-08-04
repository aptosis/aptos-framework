/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::type_info",
  functions: [],
  structs: [
    {
      name: "0x1::type_info::TypeInfo",
      fields: [
        { name: "account_address", ty: "address" },
        { name: "module_name", ty: { vector: "u8" } },
        { name: "struct_name", ty: { vector: "u8" } },
      ],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {},
} as const;
