/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Comparator",
  doc: "Provides a framework for comparing two elements",
  functions: [],
  structs: [
    {
      name: "0x1::Comparator::Result",
      fields: [{ name: "inner", ty: "u8" }],
      abilities: ["drop"],
    },
  ],
  errors: { "0": { name: "EQUAL" } },
} as const;
