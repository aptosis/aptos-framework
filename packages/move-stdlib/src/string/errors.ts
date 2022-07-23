/**
 * Module errors.
 *
 * @module
 */
/** An invalid UTF8 encoding. */
export const EINVALID_UTF8 = {
  code: 1,
  name: "EINVALID_UTF8",
  doc: "An invalid UTF8 encoding.",
} as const;

/** Index out of range. */
export const EINVALID_INDEX = {
  code: 2,
  name: "EINVALID_INDEX",
  doc: "Index out of range.",
} as const;
