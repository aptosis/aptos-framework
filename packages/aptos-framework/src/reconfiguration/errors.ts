/**
 * Module errors.
 *
 * @module
 */
/** The `Configuration` resource is in an invalid state */
export const ECONFIGURATION = {
  code: 1,
  name: "ECONFIGURATION",
  doc: "The `Configuration` resource is in an invalid state",
} as const;

/** A `Reconfiguration` resource is in an invalid state */
export const ECONFIG = {
  code: 2,
  name: "ECONFIG",
  doc: "A `Reconfiguration` resource is in an invalid state",
} as const;

/** A `ModifyConfigCapability` is in a different state than was expected */
export const EMODIFY_CAPABILITY = {
  code: 3,
  name: "EMODIFY_CAPABILITY",
  doc: "A `ModifyConfigCapability` is in a different state than was expected",
} as const;

/** An invalid block time was encountered. */
export const EINVALID_BLOCK_TIME = {
  code: 4,
  name: "EINVALID_BLOCK_TIME",
  doc: "An invalid block time was encountered.",
} as const;

/** An invalid block time was encountered. */
export const EINVALID_GUID_FOR_EVENT = {
  code: 5,
  name: "EINVALID_GUID_FOR_EVENT",
  doc: "An invalid block time was encountered.",
} as const;
