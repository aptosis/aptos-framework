/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::bucket_table",
  doc: "A bucket table implementation based on linear hashing. (https://en.wikipedia.org/wiki/Linear_hashing)\nCompare to Table, it uses less storage slots but has higher chance of collision, it's a trade-off between space and time.\nCompare to other implementation, linear hashing splits one bucket a time instead of doubling buckets when expanding to avoid unexpected gas cost.\nBucketTable uses faster hash function SipHash instead of cryptographically secure hash functions like sha3-256 since it tolerates collisions.",
  functions: [],
  structs: [
    {
      name: "0x1::bucket_table::BucketTable",
      fields: [
        {
          name: "buckets",
          ty: {
            struct: {
              name: "0x1::table_with_length::TableWithLength",
              ty_args: [
                "u64",
                {
                  vector: {
                    struct: {
                      name: "0x1::bucket_table::Entry",
                      ty_args: [{ type_param: 0 }, { type_param: 1 }],
                    },
                  },
                },
              ],
            },
          },
        },
        { name: "num_buckets", ty: "u64" },
        { name: "level", ty: "u8" },
        { name: "len", ty: "u64" },
      ],
      type_params: [{ name: "K" }, { name: "V" }],
      abilities: ["store"],
    },
    {
      name: "0x1::bucket_table::Entry",
      doc: "BucketTable entry contains both the key and value.",
      fields: [
        { name: "hash", ty: "u64" },
        { name: "key", ty: { type_param: 0 } },
        { name: "value", ty: { type_param: 1 } },
      ],
      type_params: [{ name: "K" }, { name: "V" }],
      abilities: ["store"],
    },
  ],
  errors: {
    "1": { name: "ENOT_FOUND", doc: "Key not found in the bucket table" },
    "2": {
      name: "EZERO_CAPACITY",
      doc: "Bucket table capacity must be larger than 0",
    },
    "3": { name: "ENOT_EMPTY", doc: "Cannot destroy non-empty hashmap" },
    "4": { name: "EALREADY_EXIST", doc: "Key already exists" },
  },
} as const;
