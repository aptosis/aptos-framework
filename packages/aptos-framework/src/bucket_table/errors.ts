/**
 * Module errors.
 *
 * @module
 */
/** Key not found in the bucket table */
export const ENOT_FOUND = {
  code: 1,
  name: "ENOT_FOUND",
  doc: "Key not found in the bucket table",
} as const;

/** Bucket table capacity must be larger than 0 */
export const EZERO_CAPACITY = {
  code: 2,
  name: "EZERO_CAPACITY",
  doc: "Bucket table capacity must be larger than 0",
} as const;

/** Cannot destroy non-empty hashmap */
export const ENOT_EMPTY = {
  code: 3,
  name: "ENOT_EMPTY",
  doc: "Cannot destroy non-empty hashmap",
} as const;

/** Key already exists */
export const EALREADY_EXIST = {
  code: 4,
  name: "EALREADY_EXIST",
  doc: "Key already exists",
} as const;
