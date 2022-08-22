/**
 * **Module ID:** `0x1::big_vector`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * A Scalable vector implementation based on tables, elements are grouped into buckets with `bucket_size`.
 *
 * Type name: `0x1::big_vector::BigVector`
 */
export interface IBigVector<_T = unknown> {
  buckets: {
    inner: {
      handle: p.U128;
    };
    length: p.U64;
  };
  end_index: {
    bucket_index: p.U64;
    vec_index: p.U64;
  };
  num_buckets: p.U64;
  bucket_size: p.U64;
}

/**
 * Index of the value in the buckets.
 *
 * Type name: `0x1::big_vector::BigVectorIndex`
 */
export interface IBigVectorIndex {
  bucket_index: p.U64;
  vec_index: p.U64;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::big_vector" as const;
/** The name of the module. */
export const NAME = "big_vector" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "EINDEX_OUT_OF_BOUNDS",
    doc: "Vector index is out of bounds",
  },
  "2": {
    name: "EOUT_OF_CAPACITY",
    doc: "Vector is full",
  },
  "3": {
    name: "EVECTOR_NOT_EMPTY",
    doc: "Cannot destroy a non-empty vector",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  BigVector: "0x1::big_vector::BigVector",
  BigVectorIndex: "0x1::big_vector::BigVectorIndex",
} as const;

/** Payload generators for module `0x1::big_vector`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "big_vector"
> as typeof moduleImpl;
