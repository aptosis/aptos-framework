/**
 * Module errors.
 *
 * @module
 */
/** Capability resource already exists on the specified account */
export const ECAPABILITY_ALREADY_EXISTS = {
  code: 1,
  name: "ECAPABILITY_ALREADY_EXISTS",
  doc: "Capability resource already exists on the specified account",
} as const;

/** Capability resource not found */
export const ECAPABILITY_NOT_FOUND = {
  code: 2,
  name: "ECAPABILITY_NOT_FOUND",
  doc: "Capability resource not found",
} as const;

/** Account does not have delegated permissions */
export const EDELEGATE = {
  code: 3,
  name: "EDELEGATE",
  doc: "Account does not have delegated permissions",
} as const;
