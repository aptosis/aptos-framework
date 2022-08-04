/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::table_with_length",
  doc: "Extends Table and provides functions such as length and the ability to be desttroyed",
  functions: [],
  structs: [
    {
      name: "0x1::table_with_length::TableWithLength",
      doc: "Type of tables",
      fields: [
        {
          name: "inner",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [{ type_param: 0 }, { type_param: 1 }],
            },
          },
        },
        { name: "length", ty: "u64" },
      ],
      type_params: [
        { name: "K", is_phantom: true },
        { name: "V", is_phantom: true },
      ],
      abilities: ["store"],
    },
  ],
  errors: {
    "100": { name: "EALREADY_EXISTS" },
    "101": { name: "ENOT_FOUND" },
    "102": { name: "ENOT_EMPTY" },
  },
} as const;
