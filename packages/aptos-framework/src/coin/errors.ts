/**
 * Module errors.
 *
 * @module
 */
/** Address of account which is used to initialize a coin `CoinType` doesn't match the deployer of module */
export const ECOIN_INFO_ADDRESS_MISMATCH = {
  code: 1,
  name: "ECOIN_INFO_ADDRESS_MISMATCH",
  doc: "Address of account which is used to initialize a coin `CoinType` doesn't match the deployer of module",
} as const;

/** `CoinType` is already initialized as a coin */
export const ECOIN_INFO_ALREADY_PUBLISHED = {
  code: 2,
  name: "ECOIN_INFO_ALREADY_PUBLISHED",
  doc: "`CoinType` is already initialized as a coin",
} as const;

/** `CoinType` hasn't been initialized as a coin */
export const ECOIN_INFO_NOT_PUBLISHED = {
  code: 3,
  name: "ECOIN_INFO_NOT_PUBLISHED",
  doc: "`CoinType` hasn't been initialized as a coin",
} as const;

/** Account already has `CoinStore` registered for `CoinType` */
export const ECOIN_STORE_ALREADY_PUBLISHED = {
  code: 4,
  name: "ECOIN_STORE_ALREADY_PUBLISHED",
  doc: "Account already has `CoinStore` registered for `CoinType`",
} as const;

/** Account hasn't registered `CoinStore` for `CoinType` */
export const ECOIN_STORE_NOT_PUBLISHED = {
  code: 5,
  name: "ECOIN_STORE_NOT_PUBLISHED",
  doc: "Account hasn't registered `CoinStore` for `CoinType`",
} as const;

/** Not enough coins to complete transaction */
export const EINSUFFICIENT_BALANCE = {
  code: 6,
  name: "EINSUFFICIENT_BALANCE",
  doc: "Not enough coins to complete transaction",
} as const;

/** Cannot destroy non-zero coins */
export const EDESTRUCTION_OF_NONZERO_TOKEN = {
  code: 7,
  name: "EDESTRUCTION_OF_NONZERO_TOKEN",
  doc: "Cannot destroy non-zero coins",
} as const;

/** Total supply of the coin has overflown. No additional coins can be minted */
export const ETOTAL_SUPPLY_OVERFLOW = {
  code: 8,
  name: "ETOTAL_SUPPLY_OVERFLOW",
  doc: "Total supply of the coin has overflown. No additional coins can be minted",
} as const;

/** Coin amount cannot be zero */
export const EZERO_COIN_AMOUNT = {
  code: 9,
  name: "EZERO_COIN_AMOUNT",
  doc: "Coin amount cannot be zero",
} as const;

/** CoinStore is frozen. Coins cannot be deposited or withdrawn */
export const EFROZEN = {
  code: 10,
  name: "EFROZEN",
  doc: "CoinStore is frozen. Coins cannot be deposited or withdrawn",
} as const;
