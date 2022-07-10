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

/** The provided gas constants were inconsistent. */
export const EGAS_CONSTANT_INCONSISTENCY = {
  code: 1,
  name: "EGAS_CONSTANT_INCONSISTENCY",
  doc: "The provided gas constants were inconsistent.",
} as const;
