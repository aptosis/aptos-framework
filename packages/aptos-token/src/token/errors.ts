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

export const ECREATE_WOULD_EXCEED_COLLECTION_MAXIMUM = {
  code: 5,
  name: "ECREATE_WOULD_EXCEED_COLLECTION_MAXIMUM",
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

export const EMINT_WOULD_EXCEED_TOKEN_MAXIMUM = {
  code: 9,
  name: "EMINT_WOULD_EXCEED_TOKEN_MAXIMUM",
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

export const ENO_MUTATE_CAPABILITY = {
  code: 17,
  name: "ENO_MUTATE_CAPABILITY",
} as const;

export const ETOEKN_PROPERTY_EXISTED = {
  code: 18,
  name: "ETOEKN_PROPERTY_EXISTED",
} as const;

export const ENO_TOKEN_IN_TOKEN_STORE = {
  code: 19,
  name: "ENO_TOKEN_IN_TOKEN_STORE",
} as const;

export const ENON_ZERO_PROPERTY_VERSION_ONLY_ONE_INSTANCE = {
  code: 20,
  name: "ENON_ZERO_PROPERTY_VERSION_ONLY_ONE_INSTANCE",
} as const;

export const EUSER_NOT_OPT_IN_DIRECT_TRANSFER = {
  code: 21,
  name: "EUSER_NOT_OPT_IN_DIRECT_TRANSFER",
} as const;
