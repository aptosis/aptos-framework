/**
 * Module errors.
 *
 * @module
 */
/** The `Configuration` resource is in an invalid state */
export const ECONFIGURATION = {
  code: 0,
  name: "ECONFIGURATION",
  doc: "The `Configuration` resource is in an invalid state",
} as const;

/** A `Reconfiguration` resource is in an invalid state */
export const ECONFIG = {
  code: 1,
  name: "ECONFIG",
  doc: "A `Reconfiguration` resource is in an invalid state",
} as const;

/** A `ModifyConfigCapability` is in a different state than was expected */
export const EMODIFY_CAPABILITY = {
  code: 2,
  name: "EMODIFY_CAPABILITY",
  doc: "A `ModifyConfigCapability` is in a different state than was expected",
} as const;

/** An invalid block time was encountered. */
export const EINVALID_BLOCK_TIME = {
  code: 3,
  name: "EINVALID_BLOCK_TIME",
  doc: "An invalid block time was encountered.",
} as const;

/** An invalid block time was encountered. */
export const EINVALID_GUID_FOR_EVENT = {
  code: 4,
  name: "EINVALID_GUID_FOR_EVENT",
  doc: "An invalid block time was encountered.",
} as const;
