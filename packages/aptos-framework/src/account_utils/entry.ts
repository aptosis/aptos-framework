/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";

export const create_and_fund_account = ({
  args,
}: mod.CreateAndFundAccountArgs): payloads.CreateAndFundAccount => ({
  type: "script_function_payload",
  function: "0x1::account_utils::create_and_fund_account",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.account),
    p.serializers.u64(args.amount),
  ],
});
