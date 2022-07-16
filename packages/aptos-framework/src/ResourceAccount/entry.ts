/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/**
 * Creates a new resource account and rotates the authentication key to either
 * the optional auth key if it is non-empty (though auth keys are 32-bytes)
 * or the source accounts current auth key.
 */
export const create_resource_account = ({
  args,
}: mod.CreateResourceAccountArgs): payloads.CreateResourceAccount => ({
  type: "script_function_payload",
  function: "0x1::ResourceAccount::create_resource_account",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.seed),
    p.serializers.hexString(args.optional_auth_key),
  ],
});
