/**
 * Module errors.
 *
 * @module
 */
export const EALREADY_HAS_BALANCE = {
  code: 0,
  name: "EALREADY_HAS_BALANCE",
} as const;

export const EBALANCE_NOT_PUBLISHED = {
  code: 1,
  name: "EBALANCE_NOT_PUBLISHED",
} as const;

export const ECOLLECTIONS_NOT_PUBLISHED = {
  code: 2,
  name: "ECOLLECTIONS_NOT_PUBLISHED",
} as const;

export const ECOLLECTION_NOT_PUBLISHED = {
  code: 3,
  name: "ECOLLECTION_NOT_PUBLISHED",
} as const;

export const ECOLLECTION_ALREADY_EXISTS = {
  code: 4,
  name: "ECOLLECTION_ALREADY_EXISTS",
} as const;

export const ECREATE_WOULD_EXCEED_MAXIMUM = {
  code: 5,
  name: "ECREATE_WOULD_EXCEED_MAXIMUM",
} as const;

export const EINSUFFICIENT_BALANCE = {
  code: 6,
  name: "EINSUFFICIENT_BALANCE",
} as const;

export const EINVALID_COLLECTION_NAME = {
  code: 7,
  name: "EINVALID_COLLECTION_NAME",
} as const;

export const EINVALID_TOKEN_MERGE = {
  code: 8,
  name: "EINVALID_TOKEN_MERGE",
} as const;

export const EMINT_WOULD_EXCEED_MAXIMUM = {
  code: 9,
  name: "EMINT_WOULD_EXCEED_MAXIMUM",
} as const;

export const ENO_BURN_CAPABILITY = {
  code: 10,
  name: "ENO_BURN_CAPABILITY",
} as const;

export const ENO_MINT_CAPABILITY = {
  code: 11,
  name: "ENO_MINT_CAPABILITY",
} as const;

export const ETOKEN_ALREADY_EXISTS = {
  code: 12,
  name: "ETOKEN_ALREADY_EXISTS",
} as const;

export const ETOKEN_NOT_PUBLISHED = {
  code: 13,
  name: "ETOKEN_NOT_PUBLISHED",
} as const;

export const ETOKEN_STORE_NOT_PUBLISHED = {
  code: 14,
  name: "ETOKEN_STORE_NOT_PUBLISHED",
} as const;

export const ETOKEN_SPLIT_AMOUNT_LARGER_THEN_TOKEN_AMOUNT = {
  code: 15,
  name: "ETOKEN_SPLIT_AMOUNT_LARGER_THEN_TOKEN_AMOUNT",
} as const;

export const EFIELD_NOT_MUTABLE = {
  code: 16,
  name: "EFIELD_NOT_MUTABLE",
} as const;

export const EBURNCAP_EXISTS_OR_CREATED_FOR_TOKEN = {
  code: 17,
  name: "EBURNCAP_EXISTS_OR_CREATED_FOR_TOKEN",
} as const;

export const EONLY_CREATOR_CAN_CREATE_BURN_CAP = {
  code: 18,
  name: "EONLY_CREATOR_CAN_CREATE_BURN_CAP",
} as const;

export const EONLY_CREATOR_CAN_DELEGATE_BURN_CAP = {
  code: 19,
  name: "EONLY_CREATOR_CAN_DELEGATE_BURN_CAP",
} as const;

export const ETOKEN_CAPABILITY_STORE_NOT_EXISTS = {
  code: 20,
  name: "ETOKEN_CAPABILITY_STORE_NOT_EXISTS",
} as const;

export const ETOKEN_NOT_EXISTS_IN_CAPABILITY_STORE = {
  code: 21,
  name: "ETOKEN_NOT_EXISTS_IN_CAPABILITY_STORE",
} as const;

export const EONLY_TOKEN_OWNER_CAN_HAVE_BURN_CAP = {
  code: 22,
  name: "EONLY_TOKEN_OWNER_CAN_HAVE_BURN_CAP",
} as const;

export const ENOT_OWN_THE_CAPABILITY = {
  code: 23,
  name: "ENOT_OWN_THE_CAPABILITY",
} as const;

export const ENO_MUTATE_CAPABILITY = {
  code: 24,
  name: "ENO_MUTATE_CAPABILITY",
} as const;

export const ETOKEN_SHOULDNOT_EXIST_IN_TOKEN_STORE = {
  code: 25,
  name: "ETOKEN_SHOULDNOT_EXIST_IN_TOKEN_STORE",
} as const;
