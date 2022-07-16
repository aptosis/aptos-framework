/**
 * Entrypoint builders.
 *
 * @module
 */

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/** Updates the major version to a larger version. */
export const set_version = ({
  args,
}: mod.SetVersionArgs): payloads.SetVersion => ({
  type: "script_function_payload",
  function: "0x1::Version::set_version",
  type_arguments: [],
  arguments: [args.major],
});
