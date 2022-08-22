/**
 * Entrypoint builders.
 *
 * @module
 */

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";

export const initialize_token_script = (): payloads.InitializeTokenScript => ({
  type: "script_function_payload",
  function: "0x3::token::initialize_token_script",
  type_arguments: [],
  arguments: [],
});

export const opt_in_direct_transfer = ({
  args,
}: mod.OptInDirectTransferArgs): payloads.OptInDirectTransfer => ({
  type: "script_function_payload",
  function: "0x3::token::opt_in_direct_transfer",
  type_arguments: [],
  arguments: [args.opt_in],
});
