/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::coin::transfer`.
 *
 * Transfers `amount` of coins `CoinType` from `from` to `to`.
 */
export type Transfer = {
  readonly type: "script_function_payload";
  readonly function: "0x1::coin::transfer";
  readonly arguments: [to: string, amount: string];
  readonly type_arguments: [CoinType: string];
};
