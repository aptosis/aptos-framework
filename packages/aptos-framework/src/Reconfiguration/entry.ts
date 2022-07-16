/**
 * Entrypoint builders.
 *
 * @module
 */

import type * as payloads from "./payloads.js";
/** Force an epoch change. */
export const force_reconfigure = (): payloads.ForceReconfigure => ({
  type: "script_function_payload",
  function: "0x1::Reconfiguration::force_reconfigure",
  type_arguments: [],
  arguments: [],
});
