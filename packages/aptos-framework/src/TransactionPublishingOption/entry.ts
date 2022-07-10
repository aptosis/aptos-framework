/**
 * Entrypoint builders.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

import type * as mod from "./index.js";

export const set_module_publishing_allowed = ({
  args,
}: mod.SetModulePublishingAllowedPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::TransactionPublishingOption::set_module_publishing_allowed",
  type_arguments: [],
  arguments: [args.is_allowed],
});
