/**
 * Module errors.
 *
 * @module
 */
/** The ACL already contains the address. */
export const ECONTAIN = {
  code: 0,
  name: "ECONTAIN",
  doc: "The ACL already contains the address.",
} as const;

/** The ACL does not contain the address. */
export const ENOT_CONTAIN = {
  code: 1,
  name: "ENOT_CONTAIN",
  doc: "The ACL does not contain the address.",
} as const;
