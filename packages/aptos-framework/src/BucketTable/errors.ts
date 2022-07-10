/**
 * Module errors.
 *
 * @module
 */
/** Not found in the table; */
export const ENOT_FOUND = {
  code: 0,
  name: "ENOT_FOUND",
  doc: "Not found in the table;",
} as const;

/** Capacity should be larger than 0. */
export const EZERO_CAPACITY = {
  code: 1,
  name: "EZERO_CAPACITY",
  doc: "Capacity should be larger than 0.",
} as const;

/** Destroy non-empty hashmap. */
export const ENOT_EMPTY = {
  code: 2,
  name: "ENOT_EMPTY",
  doc: "Destroy non-empty hashmap.",
} as const;

/** Key already exists */
export const EALREADY_EXIST = {
  code: 3,
  name: "EALREADY_EXIST",
  doc: "Key already exists",
} as const;
