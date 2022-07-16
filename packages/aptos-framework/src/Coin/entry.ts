/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/**
 * Script function to register to receive a specific `CoinType`. An account that wants to hold a coin type
 * has to explicitly registers to do so. The register creates a special `CoinStore`
 * to hold the specified `CoinType`.
 */
export const register = ({
  typeArgs,
}: mod.RegisterArgs): payloads.Register => ({
  type: "script_function_payload",
  function: "0x1::Coin::register",
  type_arguments: [typeArgs.CoinType],
  arguments: [],
});

/** Transfers `amount` of coins `CoinType` from `from` to `to`. */
export const transfer = ({
  args,
  typeArgs,
}: mod.TransferArgs): payloads.Transfer => ({
  type: "script_function_payload",
  function: "0x1::Coin::transfer",
  type_arguments: [typeArgs.CoinType],
  arguments: [p.serializers.hexString(args.to), p.serializers.u64(args.amount)],
});
