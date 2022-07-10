/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::BitVector",
  functions: [],
  structs: [
    {
      name: "0x1::BitVector::BitVector",
      fields: [
        { name: "length", ty: "u64" },
        { name: "bit_field", ty: { vector: "bool" } },
      ],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": { name: "EINDEX", doc: "The provided index is out of bounds" },
    "1": { name: "ELENGTH", doc: "An invalid length of bitvector was given" },
  },
} as const;
