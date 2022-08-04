/**
 * Entrypoint builders.
 *
 * @module
 */

import type * as payloads from "./payloads.js";

export const initialize_token_script = (): payloads.InitializeTokenScript => ({
  type: "script_function_payload",
  function: "0x3::token::initialize_token_script",
  type_arguments: [],
  arguments: [],
});
