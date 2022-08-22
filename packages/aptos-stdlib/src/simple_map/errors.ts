/**
 * Module errors.
 *
 * @module
 */
/** Map key already exists */
export const EKEY_ALREADY_EXISTS = {
  code: 1,
  name: "EKEY_ALREADY_EXISTS",
  doc: "Map key already exists",
} as const;

/** Map key is not found */
export const EKEY_NOT_FOUND = {
  code: 2,
  name: "EKEY_NOT_FOUND",
  doc: "Map key is not found",
} as const;
