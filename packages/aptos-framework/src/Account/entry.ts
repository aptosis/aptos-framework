/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
/** Basic account creation methods. */
export const create_account = ({
  args,
}: mod.CreateAccountPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Account::create_account",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.auth_key)],
});

export const rotate_authentication_key = ({
  args,
}: mod.RotateAuthenticationKeyPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::Account::rotate_authentication_key",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.new_auth_key)],
});
