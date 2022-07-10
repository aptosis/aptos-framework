/**
 * **Module ID:** `0x1::BigVector`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** A Scalable vector implementation based on tables, elements are grouped into buckets with `bucket_size`. */
export type BigVectorData<_T = unknown> = {
  buckets: {
    handle: p.U128;
    length: p.U64;
  };
  end_index: {
    bucket_index: p.U64;
    vec_index: p.U64;
  };
  num_buckets: p.U64;
  bucket_size: p.U64;
};

/** Index of the value in the buckets. */
export type BigVectorIndexData = {
  bucket_index: p.U64;
  vec_index: p.U64;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::BigVector" as const;
/** The name of the module. */
export const NAME = "BigVector" as const;

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
    name: "EINDEX_OUT_OF_BOUNDS",
    doc: "The index into the vector is out of bounds",
  },
  "1": {
    name: "EOUT_OF_CAPACITY",
    doc: "Need to reserve more buckets for push_back_no_grow.",
  },
  "2": {
    name: "ENOT_EMPTY",
    doc: "Destory a non-empty vector.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  BigVector: "0x1::BigVector::BigVector",
  BigVectorIndex: "0x1::BigVector::BigVectorIndex",
} as const;

/** Payload generators for module `0x1::BigVector`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "BigVector"
> as typeof moduleImpl;
