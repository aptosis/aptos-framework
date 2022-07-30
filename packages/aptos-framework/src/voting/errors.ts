/**
 * Module errors.
 *
 * @module
 */
/** Error codes. */
export const EPROPOSAL_EXECUTION_HASH_NOT_MATCHING = {
  code: 1,
  name: "EPROPOSAL_EXECUTION_HASH_NOT_MATCHING",
  doc: "Error codes.",
} as const;

export const EPROPOSAL_CANNOT_BE_RESOLVED = {
  code: 2,
  name: "EPROPOSAL_CANNOT_BE_RESOLVED",
} as const;

export const EPROPOSAL_ALREADY_RESOLVED = {
  code: 3,
  name: "EPROPOSAL_ALREADY_RESOLVED",
} as const;

export const EPROPOSAL_EMPTY_EXECUTION_HASH = {
  code: 4,
  name: "EPROPOSAL_EMPTY_EXECUTION_HASH",
} as const;
