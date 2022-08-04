/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::iterable_table",
  functions: [],
  structs: [
    {
      name: "0x1::iterable_table::IterableTable",
      doc: "An iterable table implementation based on double linked list.",
      fields: [
        {
          name: "inner",
          ty: {
            struct: {
              name: "0x1::table_with_length::TableWithLength",
              ty_args: [
                { type_param: 0 },
                {
                  struct: {
                    name: "0x1::iterable_table::IterableValue",
                    ty_args: [{ type_param: 0 }, { type_param: 1 }],
                  },
                },
              ],
            },
          },
        },
        {
          name: "head",
          ty: {
            struct: {
              name: "0x1::option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
        {
          name: "tail",
          ty: {
            struct: {
              name: "0x1::option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
      ],
      type_params: [{ name: "K" }, { name: "V" }],
      abilities: ["store"],
    },
    {
      name: "0x1::iterable_table::IterableValue",
      doc: "The iterable wrapper around value, points to previous and next key if any.",
      fields: [
        { name: "val", ty: { type_param: 1 } },
        {
          name: "prev",
          ty: {
            struct: {
              name: "0x1::option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
        {
          name: "next",
          ty: {
            struct: {
              name: "0x1::option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
      ],
      type_params: [{ name: "K" }, { name: "V" }],
      abilities: ["store"],
    },
  ],
  errors: {},
} as const;
