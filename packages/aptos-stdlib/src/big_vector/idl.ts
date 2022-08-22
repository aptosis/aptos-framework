/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::big_vector",
  functions: [],
  structs: [
    {
      name: "0x1::big_vector::BigVector",
      doc: "A Scalable vector implementation based on tables, elements are grouped into buckets with `bucket_size`.",
      fields: [
        {
          name: "buckets",
          ty: {
            struct: {
              name: "0x1::table_with_length::TableWithLength",
              ty_args: ["u64", { vector: { type_param: 0 } }],
            },
          },
        },
        {
          name: "end_index",
          ty: { struct: { name: "0x1::big_vector::BigVectorIndex" } },
        },
        { name: "num_buckets", ty: "u64" },
        { name: "bucket_size", ty: "u64" },
      ],
      type_params: [{ name: "T" }],
      abilities: ["store"],
    },
    {
      name: "0x1::big_vector::BigVectorIndex",
      doc: "Index of the value in the buckets.",
      fields: [
        { name: "bucket_index", ty: "u64" },
        { name: "vec_index", ty: "u64" },
      ],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "1": { name: "EINDEX_OUT_OF_BOUNDS", doc: "Vector index is out of bounds" },
    "2": { name: "EOUT_OF_CAPACITY", doc: "Vector is full" },
    "3": {
      name: "EVECTOR_NOT_EMPTY",
      doc: "Cannot destroy a non-empty vector",
    },
  },
} as const;
