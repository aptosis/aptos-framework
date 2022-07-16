/**
 * Entrypoint builders.
 *
 * @module
 */

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";

export const set_module_publishing_allowed = ({
  args,
}: mod.SetModulePublishingAllowedArgs): payloads.SetModulePublishingAllowed => ({
  type: "script_function_payload",
  function: "0x1::TransactionPublishingOption::set_module_publishing_allowed",
  type_arguments: [],
  arguments: [args.is_allowed],
});
