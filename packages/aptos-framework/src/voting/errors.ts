/**
 * Module errors.
 *
 * @module
 */
/** Current script's execution hash does not match the specified proposal's */
export const EPROPOSAL_EXECUTION_HASH_NOT_MATCHING = {
  code: 1,
  name: "EPROPOSAL_EXECUTION_HASH_NOT_MATCHING",
  doc: "Current script's execution hash does not match the specified proposal's",
} as const;

/** Proposal cannot be resolved. Either voting duration has not passed, not enough votes, or fewer yes than no votes */
export const EPROPOSAL_CANNOT_BE_RESOLVED = {
  code: 2,
  name: "EPROPOSAL_CANNOT_BE_RESOLVED",
  doc: "Proposal cannot be resolved. Either voting duration has not passed, not enough votes, or fewer yes than no votes",
} as const;

/** Proposal cannot be resolved more than once */
export const EPROPOSAL_ALREADY_RESOLVED = {
  code: 3,
  name: "EPROPOSAL_ALREADY_RESOLVED",
  doc: "Proposal cannot be resolved more than once",
} as const;

/** Proposal cannot contain an empty execution script hash */
export const EPROPOSAL_EMPTY_EXECUTION_HASH = {
  code: 4,
  name: "EPROPOSAL_EMPTY_EXECUTION_HASH",
  doc: "Proposal cannot contain an empty execution script hash",
} as const;
