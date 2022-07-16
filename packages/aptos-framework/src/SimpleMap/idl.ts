/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::SimpleMap",
  doc: "This module provides a solution for sorted maps, that is it has the properties that\n1) Keys point to Values\n2) Each Key must be unique\n3) A Key can be found within O(Log N) time\n4) The data is stored as a sorted by Key\n5) Adds and removals take O(N) time",
  functions: [],
  structs: [
    {
      name: "0x1::SimpleMap::Element",
      fields: [
        { name: "key", ty: { type_param: 0 } },
        { name: "value", ty: { type_param: 1 } },
      ],
      type_params: [{ name: "Key" }, { name: "Value" }],
      abilities: ["store"],
    },
    {
      name: "0x1::SimpleMap::SimpleMap",
      fields: [
        {
          name: "data",
          ty: {
            vector: {
              struct: {
                name: "0x1::SimpleMap::Element",
                ty_args: [{ type_param: 0 }, { type_param: 1 }],
              },
            },
          },
        },
      ],
      type_params: [{ name: "Key" }, { name: "Value" }],
      abilities: ["store"],
    },
  ],
  errors: {
    "0": { name: "EKEY_ALREADY_EXISTS" },
    "1": { name: "EKEY_NOT_FOUND" },
  },
} as const;
