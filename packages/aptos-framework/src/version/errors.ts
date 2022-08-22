/**
 * Module errors.
 *
 * @module
 */
/** Specified major version number must be greater than current version number. */
export const EINVALID_MAJOR_VERSION_NUMBER = {
  code: 1,
  name: "EINVALID_MAJOR_VERSION_NUMBER",
  doc: "Specified major version number must be greater than current version number.",
} as const;

/** Account is not authorized to make this change. */
export const ENOT_AUTHORIZED = {
  code: 2,
  name: "ENOT_AUTHORIZED",
  doc: "Account is not authorized to make this change.",
} as const;
