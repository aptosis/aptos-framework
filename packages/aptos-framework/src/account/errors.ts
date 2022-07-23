/**
 * Module errors.
 *
 * @module
 */
/** Account already existed */
export const EACCOUNT = {
  code: 0,
  name: "EACCOUNT",
  doc: "Account already existed",
} as const;

/** Sequence number exceeded the maximum value for a u64 */
export const ESEQUENCE_NUMBER_TOO_BIG = {
  code: 1,
  name: "ESEQUENCE_NUMBER_TOO_BIG",
  doc: "Sequence number exceeded the maximum value for a u64",
} as const;

/** The address provided didn't match the `aptos_framework` address. */
export const ENOT_APTOS_FRAMEWORK = {
  code: 2,
  name: "ENOT_APTOS_FRAMEWORK",
  doc: "The address provided didn't match the `aptos_framework` address.",
} as const;

/** The provided authentication had an invalid length */
export const EMALFORMED_AUTHENTICATION_KEY = {
  code: 3,
  name: "EMALFORMED_AUTHENTICATION_KEY",
  doc: "The provided authentication had an invalid length",
} as const;

export const ECANNOT_CREATE_AT_VM_RESERVED = {
  code: 4,
  name: "ECANNOT_CREATE_AT_VM_RESERVED",
} as const;

export const EGAS = {
  code: 5,
  name: "EGAS",
} as const;

export const ECANNOT_CREATE_AT_CORE_CODE = {
  code: 6,
  name: "ECANNOT_CREATE_AT_CORE_CODE",
} as const;

export const EADDR_NOT_MATCH_PREIMAGE = {
  code: 7,
  name: "EADDR_NOT_MATCH_PREIMAGE",
} as const;

export const EWRITESET_NOT_ALLOWED = {
  code: 8,
  name: "EWRITESET_NOT_ALLOWED",
} as const;

export const EMULTI_AGENT_NOT_SUPPORTED = {
  code: 9,
  name: "EMULTI_AGENT_NOT_SUPPORTED",
} as const;

export const EMODULE_NOT_ALLOWED = {
  code: 10,
  name: "EMODULE_NOT_ALLOWED",
} as const;

export const ESCRIPT_NOT_ALLOWED = {
  code: 11,
  name: "ESCRIPT_NOT_ALLOWED",
} as const;
