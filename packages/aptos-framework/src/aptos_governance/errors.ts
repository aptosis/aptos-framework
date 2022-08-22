/**
 * Module errors.
 *
 * @module
 */
/** The specified stake pool does not have sufficient stake to create a proposal */
export const EINSUFFICIENT_PROPOSER_STAKE = {
  code: 1,
  name: "EINSUFFICIENT_PROPOSER_STAKE",
  doc: "The specified stake pool does not have sufficient stake to create a proposal",
} as const;

/** This account is not the designated voter of the specified stake pool */
export const ENOT_DELEGATED_VOTER = {
  code: 2,
  name: "ENOT_DELEGATED_VOTER",
  doc: "This account is not the designated voter of the specified stake pool",
} as const;

/** The specified stake pool does not have long enough remaining lockup to create a proposal or vote */
export const EINSUFFICIENT_STAKE_LOCKUP = {
  code: 3,
  name: "EINSUFFICIENT_STAKE_LOCKUP",
  doc: "The specified stake pool does not have long enough remaining lockup to create a proposal or vote",
} as const;

/** The specified stake pool has already been used to vote on the same proposal */
export const EALREADY_VOTED = {
  code: 4,
  name: "EALREADY_VOTED",
  doc: "The specified stake pool has already been used to vote on the same proposal",
} as const;

/** The specified stake pool must be part of the validator set */
export const ENO_VOTING_POWER = {
  code: 5,
  name: "ENO_VOTING_POWER",
  doc: "The specified stake pool must be part of the validator set",
} as const;

/** Proposal is not ready to be resolved. Waiting on time or votes */
export const EPROPOSAL_NOT_RESOLVABLE_YET = {
  code: 6,
  name: "EPROPOSAL_NOT_RESOLVABLE_YET",
  doc: "Proposal is not ready to be resolved. Waiting on time or votes",
} as const;

/** Proposal's script hash has already been added to the approved list */
export const ESCRIPT_HASH_ALREADY_ADDED = {
  code: 7,
  name: "ESCRIPT_HASH_ALREADY_ADDED",
  doc: "Proposal's script hash has already been added to the approved list",
} as const;

/** The proposal has not been resolved yet */
export const EPROPOSAL_NOT_RESOLVED_YET = {
  code: 8,
  name: "EPROPOSAL_NOT_RESOLVED_YET",
  doc: "The proposal has not been resolved yet",
} as const;

/** Metadata location cannot be longer than 256 chars */
export const EMETADATA_LOCATION_TOO_LONG = {
  code: 9,
  name: "EMETADATA_LOCATION_TOO_LONG",
  doc: "Metadata location cannot be longer than 256 chars",
} as const;

/** Metadata hash cannot be longer than 256 chars */
export const EMETADATA_HASH_TOO_LONG = {
  code: 10,
  name: "EMETADATA_HASH_TOO_LONG",
  doc: "Metadata hash cannot be longer than 256 chars",
} as const;
