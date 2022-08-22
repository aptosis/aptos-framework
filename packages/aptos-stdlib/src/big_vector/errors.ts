/**
 * Module errors.
 *
 * @module
 */
/** Vector index is out of bounds */
export const EINDEX_OUT_OF_BOUNDS = {
  code: 1,
  name: "EINDEX_OUT_OF_BOUNDS",
  doc: "Vector index is out of bounds",
} as const;

/** Vector is full */
export const EOUT_OF_CAPACITY = {
  code: 2,
  name: "EOUT_OF_CAPACITY",
  doc: "Vector is full",
} as const;

/** Cannot destroy a non-empty vector */
export const EVECTOR_NOT_EMPTY = {
  code: 3,
  name: "EVECTOR_NOT_EMPTY",
  doc: "Cannot destroy a non-empty vector",
} as const;
