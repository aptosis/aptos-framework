/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::Coin::register`.
 *
 * Script function to register to receive a specific `CoinType`. An account that wants to hold a coin type
 * has to explicitly registers to do so. The register creates a special `CoinStore`
 * to hold the specified `CoinType`.
 */
export type Register = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Coin::register";
  readonly arguments: [];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x1::Coin::transfer`.
 *
 * Transfers `amount` of coins `CoinType` from `from` to `to`.
 */
export type Transfer = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Coin::transfer";
  readonly arguments: [to: string, amount: string];
  readonly type_arguments: [CoinType: string];
};
