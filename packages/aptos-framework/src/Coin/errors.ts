/**
 * Module errors.
 *
 * @module
 */
/**
 * When address of account which is used to initilize a coin `CoinType`
 *  doesn't match the deployer of module containining `CoinType`.
 */
export const ECOIN_INFO_ADDRESS_MISMATCH = {
  code: 0,
  name: "ECOIN_INFO_ADDRESS_MISMATCH",
  doc: "When address of account which is used to initilize a coin `CoinType`\n doesn't match the deployer of module containining `CoinType`.",
} as const;

/** When `CoinType` is already initilized as a coin. */
export const ECOIN_INFO_ALREADY_PUBLISHED = {
  code: 1,
  name: "ECOIN_INFO_ALREADY_PUBLISHED",
  doc: "When `CoinType` is already initilized as a coin.",
} as const;

/** When `CoinType` hasn't been initialized as a coin. */
export const ECOIN_INFO_NOT_PUBLISHED = {
  code: 2,
  name: "ECOIN_INFO_NOT_PUBLISHED",
  doc: "When `CoinType` hasn't been initialized as a coin.",
} as const;

/** When an account already has `CoinStore` registered for `CoinType`. */
export const ECOIN_STORE_ALREADY_PUBLISHED = {
  code: 3,
  name: "ECOIN_STORE_ALREADY_PUBLISHED",
  doc: "When an account already has `CoinStore` registered for `CoinType`.",
} as const;

/** When an account hasn't registered `CoinStore` for `CoinType`. */
export const ECOIN_STORE_NOT_PUBLISHED = {
  code: 4,
  name: "ECOIN_STORE_NOT_PUBLISHED",
  doc: "When an account hasn't registered `CoinStore` for `CoinType`.",
} as const;

/** When there's not enough funds to withdraw from an account or from `Coin` resource. */
export const EINSUFFICIENT_BALANCE = {
  code: 5,
  name: "EINSUFFICIENT_BALANCE",
  doc: "When there's not enough funds to withdraw from an account or from `Coin` resource.",
} as const;

/** When destruction of `Coin` resource contains non-zero value attempted. */
export const EDESTRUCTION_OF_NONZERO_TOKEN = {
  code: 6,
  name: "EDESTRUCTION_OF_NONZERO_TOKEN",
  doc: "When destruction of `Coin` resource contains non-zero value attempted.",
} as const;

/** Total supply of the coin overflows. No additional coins can be minted. */
export const ETOTAL_SUPPLY_OVERFLOW = {
  code: 7,
  name: "ETOTAL_SUPPLY_OVERFLOW",
  doc: "Total supply of the coin overflows. No additional coins can be minted.",
} as const;
