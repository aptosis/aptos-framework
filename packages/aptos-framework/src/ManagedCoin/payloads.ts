/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::ManagedCoin::burn`.
 *
 * Withdraw an `amount` of coin `CoinType` from `account` and burn it.
 */
export type Burn = {
  readonly type: "script_function_payload";
  readonly function: "0x1::ManagedCoin::burn";
  readonly arguments: [amount: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x1::ManagedCoin::initialize`.
 *
 * Initialize new coin `CoinType` in Aptos Blockchain.
 * Mint and Burn Capabilities will be stored under `account` in `Capabilities` resource.
 */
export type Initialize = {
  readonly type: "script_function_payload";
  readonly function: "0x1::ManagedCoin::initialize";
  readonly arguments: [
    name: string,
    symbol: string,
    decimals: string,
    monitor_supply: boolean
  ];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x1::ManagedCoin::mint`.
 *
 * Create new coins `CoinType` and deposit them into dst_addr's account.
 */
export type Mint = {
  readonly type: "script_function_payload";
  readonly function: "0x1::ManagedCoin::mint";
  readonly arguments: [dst_addr: string, amount: string];
  readonly type_arguments: [CoinType: string];
};

/**
 * Script function payload for `0x1::ManagedCoin::register`.
 *
 * Creating a resource that stores balance of `CoinType` on user's account, withdraw and deposit event handlers.
 * Required if user wants to start accepting deposits of `CoinType` in his account.
 */
export type Register = {
  readonly type: "script_function_payload";
  readonly function: "0x1::ManagedCoin::register";
  readonly arguments: [];
  readonly type_arguments: [CoinType: string];
};
