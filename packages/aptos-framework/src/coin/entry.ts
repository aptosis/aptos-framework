/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/** Transfers `amount` of coins `CoinType` from `from` to `to`. */
export const transfer = ({
  args,
  typeArgs,
}: mod.TransferArgs): payloads.Transfer => ({
  type: "script_function_payload",
  function: "0x1::coin::transfer",
  type_arguments: [typeArgs.CoinType],
  arguments: [p.serializers.hexString(args.to), p.serializers.u64(args.amount)],
});
