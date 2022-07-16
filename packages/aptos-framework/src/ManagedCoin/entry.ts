/**
 * Entrypoint builders.
 *
 * @module
 */

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/** Withdraw an `amount` of coin `CoinType` from `account` and burn it. */
export const burn = ({ args, typeArgs }: mod.BurnArgs): payloads.Burn => ({
  type: "script_function_payload",
  function: "0x1::ManagedCoin::burn",
  type_arguments: [typeArgs.CoinType],
  arguments: [args.amount],
});

/**
 * Initialize new coin `CoinType` in Aptos Blockchain.
 * Mint and Burn Capabilities will be stored under `account` in `Capabilities` resource.
 */
export const initialize = ({
  args,
  typeArgs,
}: mod.InitializeArgs): payloads.Initialize => ({
  type: "script_function_payload",
  function: "0x1::ManagedCoin::initialize",
  type_arguments: [typeArgs.CoinType],
  arguments: [args.name, args.symbol, args.decimals, args.monitor_supply],
});

/** Create new coins `CoinType` and deposit them into dst_addr's account. */
export const mint = ({ args, typeArgs }: mod.MintArgs): payloads.Mint => ({
  type: "script_function_payload",
  function: "0x1::ManagedCoin::mint",
  type_arguments: [typeArgs.CoinType],
  arguments: [args.dst_addr, args.amount],
});

/**
 * Creating a resource that stores balance of `CoinType` on user's account, withdraw and deposit event handlers.
 * Required if user wants to start accepting deposits of `CoinType` in his account.
 */
export const register = ({
  typeArgs,
}: mod.RegisterArgs): payloads.Register => ({
  type: "script_function_payload",
  function: "0x1::ManagedCoin::register",
  type_arguments: [typeArgs.CoinType],
  arguments: [],
});
