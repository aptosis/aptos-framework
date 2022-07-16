/**
 * Entrypoint builders.
 *
 * @module
 */

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";

export const create_and_fund_account = ({
  args,
}: mod.CreateAndFundAccountArgs): payloads.CreateAndFundAccount => ({
  type: "script_function_payload",
  function: "0x1::AccountUtils::create_and_fund_account",
  type_arguments: [],
  arguments: [args.account, args.amount],
});
