/**
 * Module errors.
 *
 * @module
 */
/** Account does not have mint capability */
export const ENO_CAPABILITIES = {
  code: 1,
  name: "ENO_CAPABILITIES",
  doc: "Account does not have mint capability",
} as const;

/** Mint capability has already been delegated to this specified address */
export const EALREADY_DELEGATED = {
  code: 2,
  name: "EALREADY_DELEGATED",
  doc: "Mint capability has already been delegated to this specified address",
} as const;

/** Cannot find delegation of mint capability to this account */
export const EDELEGATION_NOT_FOUND = {
  code: 3,
  name: "EDELEGATION_NOT_FOUND",
  doc: "Cannot find delegation of mint capability to this account",
} as const;
