/**
 * Module errors.
 *
 * @module
 */
/** Account already exists */
export const EACCOUNT_ALREADY_EXISTS = {
  code: 1,
  name: "EACCOUNT_ALREADY_EXISTS",
  doc: "Account already exists",
} as const;

/** Account does not exist */
export const EACCOUNT_DOES_NOT_EXIST = {
  code: 2,
  name: "EACCOUNT_DOES_NOT_EXIST",
  doc: "Account does not exist",
} as const;

/** Sequence number exceeds the maximum value for a u64 */
export const ESEQUENCE_NUMBER_TOO_BIG = {
  code: 3,
  name: "ESEQUENCE_NUMBER_TOO_BIG",
  doc: "Sequence number exceeds the maximum value for a u64",
} as const;

/** The provided authentication key has an invalid length */
export const EMALFORMED_AUTHENTICATION_KEY = {
  code: 4,
  name: "EMALFORMED_AUTHENTICATION_KEY",
  doc: "The provided authentication key has an invalid length",
} as const;

/** Cannot create account because address is reserved */
export const ECANNOT_RESERVED_ADDRESS = {
  code: 5,
  name: "ECANNOT_RESERVED_ADDRESS",
  doc: "Cannot create account because address is reserved",
} as const;

/** Transaction exceeded its allocated max gas */
export const EOUT_OF_GAS = {
  code: 6,
  name: "EOUT_OF_GAS",
  doc: "Transaction exceeded its allocated max gas",
} as const;

/** Writesets are not allowed */
export const EWRITESET_NOT_ALLOWED = {
  code: 7,
  name: "EWRITESET_NOT_ALLOWED",
  doc: "Writesets are not allowed",
} as const;

/** Specified current public key is not correct */
export const EWRONG_CURRENT_PUBLIC_KEY = {
  code: 8,
  name: "EWRONG_CURRENT_PUBLIC_KEY",
  doc: "Specified current public key is not correct",
} as const;

/** Specified proof of knowledge required to prove ownership of a public key is invalid */
export const EINVALID_PROOF_OF_KNOWLEDGE = {
  code: 9,
  name: "EINVALID_PROOF_OF_KNOWLEDGE",
  doc: "Specified proof of knowledge required to prove ownership of a public key is invalid",
} as const;

/** The caller does not have a digital-signature-based capability to call this function */
export const ENO_CAPABILITY = {
  code: 10,
  name: "ENO_CAPABILITY",
  doc: "The caller does not have a digital-signature-based capability to call this function",
} as const;

/**
 * Prologue errors. These are separated out from the other errors in this
 * module since they are mapped separately to major VM statuses, and are
 * important to the semantics of the system.
 */
export const PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY = {
  code: 1001,
  name: "PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY",
  doc: "Prologue errors. These are separated out from the other errors in this\nmodule since they are mapped separately to major VM statuses, and are\nimportant to the semantics of the system.",
} as const;

export const PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD = {
  code: 1002,
  name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD",
} as const;

export const PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW = {
  code: 1003,
  name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW",
} as const;

export const PROLOGUE_EACCOUNT_DOES_NOT_EXIST = {
  code: 1004,
  name: "PROLOGUE_EACCOUNT_DOES_NOT_EXIST",
} as const;

export const PROLOGUE_ECANT_PAY_GAS_DEPOSIT = {
  code: 1005,
  name: "PROLOGUE_ECANT_PAY_GAS_DEPOSIT",
} as const;

export const PROLOGUE_ETRANSACTION_EXPIRED = {
  code: 1006,
  name: "PROLOGUE_ETRANSACTION_EXPIRED",
} as const;

export const PROLOGUE_EBAD_CHAIN_ID = {
  code: 1007,
  name: "PROLOGUE_EBAD_CHAIN_ID",
} as const;

export const PROLOGUE_EINVALID_WRITESET_SENDER = {
  code: 1008,
  name: "PROLOGUE_EINVALID_WRITESET_SENDER",
} as const;

export const PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG = {
  code: 1009,
  name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG",
} as const;

export const PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH = {
  code: 1010,
  name: "PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH",
} as const;
