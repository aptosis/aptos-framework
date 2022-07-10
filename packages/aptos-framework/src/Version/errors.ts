/**
 * Module errors.
 *
 * @module
 */
/** Error with config */
export const ECONFIG = {
  code: 0,
  name: "ECONFIG",
  doc: "Error with config",
} as const;

/** Tried to set an invalid major version for the VM. Major versions must be strictly increasing */
export const EINVALID_MAJOR_VERSION_NUMBER = {
  code: 1,
  name: "EINVALID_MAJOR_VERSION_NUMBER",
  doc: "Tried to set an invalid major version for the VM. Major versions must be strictly increasing",
} as const;
