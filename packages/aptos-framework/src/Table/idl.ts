/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Table",
  doc: "Type of large-scale storage tables.\nsource: https://github.com/move-language/move/blob/1b6b7513dcc1a5c866f178ca5c1e74beb2ce181e/language/extensions/move-table-extension/sources/Table.move#L1\n\nThis is a exact copy from the Move repo. It implements the Table type which supports individual table items to\nbe represented by separate global state items. The number of items and a unique handle are tracked on the table\nstruct itself, while the operations are implemented as native functions. No traversal is provided.",
  functions: [],
  structs: [
    {
      name: "0x1::Table::Table",
      doc: "Type of tables",
      fields: [
        { name: "handle", ty: "u128" },
        { name: "length", ty: "u64" },
      ],
      type_params: [
        { name: "K", is_phantom: true },
        { name: "V", is_phantom: true },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::Table::Box",
      doc: "Wrapper for values. Required for making values appear as resources in the implementation.",
      fields: [{ name: "val", ty: { type_param: 0 } }],
      type_params: [{ name: "V" }],
      abilities: ["drop", "store", "key"],
    },
  ],
  errors: {
    "100": { name: "EALREADY_EXISTS" },
    "101": { name: "ENOT_FOUND" },
    "102": { name: "ENOT_EMPTY" },
  },
} as const;
