/**
 * A bucket table implementation based on linear hashing. (https://en.wikipedia.org/wiki/Linear_hashing)
 * Compare to Table, it uses less storage slots but has higher chance of collision, it's a trade-off between space and time.
 * Compare to other implementation, linear hashing splits one bucket a time instead of doubling buckets when expanding to avoid unexpected gas cost.
 * BucketTable uses faster hash function SipHash instead of cryptographically secure hash functions like sha3-256 since it tolerates collisions.
 *
 * **Module ID:** `0x1::bucket_table`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::bucket_table::BucketTable` */
export interface IBucketTable<_K = unknown, _V = unknown> {
  buckets: {
    inner: {
      handle: p.U128;
    };
    length: p.U64;
  };
  num_buckets: p.U64;
  level: number;
  len: p.U64;
}

/**
 * BucketTable entry contains both the key and value.
 *
 * Type name: `0x1::bucket_table::Entry`
 */
export interface IEntry<_K = unknown, _V = unknown> {
  hash: p.U64;
  key: _K;
  value: _V;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::bucket_table" as const;
/** The name of the module. */
export const NAME = "bucket_table" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

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
  BucketTable: "0x1::bucket_table::BucketTable",
  Entry: "0x1::bucket_table::Entry",
} as const;

/** Payload generators for module `0x1::bucket_table`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * A bucket table implementation based on linear hashing. (https://en.wikipedia.org/wiki/Linear_hashing)
 * Compare to Table, it uses less storage slots but has higher chance of collision, it's a trade-off between space and time.
 * Compare to other implementation, linear hashing splits one bucket a time instead of doubling buckets when expanding to avoid unexpected gas cost.
 * BucketTable uses faster hash function SipHash instead of cryptographically secure hash functions like sha3-256 since it tolerates collisions.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "bucket_table"
> as typeof moduleImpl;
