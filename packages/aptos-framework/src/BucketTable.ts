/**
 * A bucket table implementation based on linear hashing. (https://en.wikipedia.org/wiki/Linear_hashing)
 * Compare to Table, it uses less storage slots but has higher chance of collision, it's a trade-off between space and time.
 * Compare to other implementation, linear hashing splits one bucket a time instead of doubling buckets when expanding to avoid unexpected gas cost.
 * BucketTable uses faster hash function SipHash instead of cryptographically secure hash functions like sha3-256 since it tolerates collisions.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type BucketTableData<_K = unknown, _V = unknown> = {
  buckets: {
    handle: p.U128;
    length: p.U64;
  };
  num_buckets: p.U64;
  level: number;
  len: p.U64;
};

/** BucketTable entry contains both the key and value. */
export type EntryData<_K = unknown, _V = unknown> = {
  hash: p.U64;
  key: _K;
  value: _V;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

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

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::BucketTable",
  /** The name of the module. */
  NAME: "BucketTable",
} as const;

/** Module errors. */
export const errors = {
  EALREADY_EXIST: {
    code: 3,
    name: "EALREADY_EXIST",
    doc: "Key already exists",
  },
  ENOT_EMPTY: {
    code: 2,
    name: "ENOT_EMPTY",
    doc: "Destroy non-empty hashmap.",
  },
  ENOT_FOUND: {
    code: 0,
    name: "ENOT_FOUND",
    doc: "Not found in the table;",
  },
  EZERO_CAPACITY: {
    code: 1,
    name: "EZERO_CAPACITY",
    doc: "Capacity should be larger than 0.",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "ENOT_FOUND",
    doc: "Not found in the table;",
  },
  "1": {
    name: "EZERO_CAPACITY",
    doc: "Capacity should be larger than 0.",
  },
  "2": {
    name: "ENOT_EMPTY",
    doc: "Destroy non-empty hashmap.",
  },
  "3": {
    name: "EALREADY_EXIST",
    doc: "Key already exists",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  BucketTable: "0x1::BucketTable::BucketTable",
  Entry: "0x1::BucketTable::Entry",
} as const;

/** Payload generators for module `0x1::BucketTable`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/**
 * A bucket table implementation based on linear hashing. (https://en.wikipedia.org/wiki/Linear_hashing)
 * Compare to Table, it uses less storage slots but has higher chance of collision, it's a trade-off between space and time.
 * Compare to other implementation, linear hashing splits one bucket a time instead of doubling buckets when expanding to avoid unexpected gas cost.
 * BucketTable uses faster hash function SipHash instead of cryptographically secure hash functions like sha3-256 since it tolerates collisions.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "BucketTable"
> as typeof moduleImpl;
