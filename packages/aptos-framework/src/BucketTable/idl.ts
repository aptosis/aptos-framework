/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::BucketTable",
  doc: "A bucket table implementation based on linear hashing. (https://en.wikipedia.org/wiki/Linear_hashing)\nCompare to Table, it uses less storage slots but has higher chance of collision, it's a trade-off between space and time.\nCompare to other implementation, linear hashing splits one bucket a time instead of doubling buckets when expanding to avoid unexpected gas cost.\nBucketTable uses faster hash function SipHash instead of cryptographically secure hash functions like sha3-256 since it tolerates collisions.",
  functions: [],
  structs: [
    {
      name: "0x1::BucketTable::BucketTable",
      fields: [
        {
          name: "buckets",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                "u64",
                {
                  vector: {
                    struct: {
                      name: "0x1::BucketTable::Entry",
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
      type_params: ["K", "V"],
      abilities: ["store"],
    },
    {
      name: "0x1::BucketTable::Entry",
      doc: "BucketTable entry contains both the key and value.",
      fields: [
        { name: "hash", ty: "u64" },
        { name: "key", ty: { type_param: 0 } },
        { name: "value", ty: { type_param: 1 } },
      ],
      type_params: ["K", "V"],
      abilities: ["store"],
    },
  ],
  errors: {
    "0": { name: "ENOT_FOUND", doc: "Not found in the table;" },
    "1": { name: "EZERO_CAPACITY", doc: "Capacity should be larger than 0." },
    "2": { name: "ENOT_EMPTY", doc: "Destroy non-empty hashmap." },
    "3": { name: "EALREADY_EXIST", doc: "Key already exists" },
  },
} as const;
