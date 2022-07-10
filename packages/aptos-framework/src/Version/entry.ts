/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
/** Updates the major version to a larger version. */
export const set_version = ({
  args,
}: mod.SetVersionPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Version::set_version",
  type_arguments: [],
  arguments: [p.serializers.u64(args.major)],
});
