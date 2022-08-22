/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::managed_coin::burn`.
 *
 * Withdraw an `amount` of coin `CoinType` from `account` and burn it.
 */
export type Burn = {
  readonly type: "script_function_payload";
  readonly function: "0x1::managed_coin::burn";
  readonly arguments: [amount: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x1::managed_coin::initialize`.
 *
 * Initialize new coin `CoinType` in Aptos Blockchain.
 * Mint and Burn Capabilities will be stored under `account` in `Capabilities` resource.
 */
export type Initialize = {
  readonly type: "script_function_payload";
  readonly function: "0x1::managed_coin::initialize";
  readonly arguments: [
    name: string,
    symbol: string,
    decimals: number,
    monitor_supply: boolean
  ];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x1::managed_coin::mint`.
 *
 * Create new coins `CoinType` and deposit them into dst_addr's account.
 */
export type Mint = {
  readonly type: "script_function_payload";
  readonly function: "0x1::managed_coin::mint";
  readonly arguments: [dst_addr: string, amount: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x1::managed_coin::register`.
 *
 * Creating a resource that stores balance of `CoinType` on user's account, withdraw and deposit event handlers.
 * Required if user wants to start accepting deposits of `CoinType` in his account.
 */
export type Register = {
  readonly type: "script_function_payload";
  readonly function: "0x1::managed_coin::register";
  readonly arguments: [];
  readonly type_arguments: [CoinType: string];
};
