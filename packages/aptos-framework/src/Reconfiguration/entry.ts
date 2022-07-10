/**
 * Entrypoint builders.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Force an epoch change. */
export const force_reconfigure = (): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Reconfiguration::force_reconfigure",
  type_arguments: [],
  arguments: [],
});
