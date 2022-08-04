/**
 * Module errors.
 *
 * @module
 */
/** The index into the vector is out of bounds */
export const EINDEX_OUT_OF_BOUNDS = {
  code: 0,
  name: "EINDEX_OUT_OF_BOUNDS",
  doc: "The index into the vector is out of bounds",
} as const;

/** Need to reserve more buckets for push_back_no_grow. */
export const EOUT_OF_CAPACITY = {
  code: 1,
  name: "EOUT_OF_CAPACITY",
  doc: "Need to reserve more buckets for push_back_no_grow.",
} as const;

/** Destory a non-empty vector. */
export const ENOT_EMPTY = {
  code: 2,
  name: "ENOT_EMPTY",
  doc: "Destory a non-empty vector.",
} as const;
