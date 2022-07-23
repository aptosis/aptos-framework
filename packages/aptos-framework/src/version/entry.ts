/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/**
 * Updates the major version to a larger version.
 * This is only used in test environments and outside of them, the core resources account shouldn't exist.
 */
export const set_version = ({
  args,
}: mod.SetVersionArgs): payloads.SetVersion => ({
  type: "script_function_payload",
  function: "0x1::version::set_version",
  type_arguments: [],
  arguments: [p.serializers.u64(args.major)],
});
