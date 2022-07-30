/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";

export const transfer = ({ args }: mod.TransferArgs): payloads.Transfer => ({
  type: "script_function_payload",
  function: "0x1::account::transfer",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.to), p.serializers.u64(args.amount)],
});

/** Basic account creation methods. */
export const create_account = ({
  args,
}: mod.CreateAccountArgs): payloads.CreateAccount => ({
  type: "script_function_payload",
  function: "0x1::account::create_account",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.auth_key)],
});

export const rotate_authentication_key = ({
  args,
}: mod.RotateAuthenticationKeyArgs): payloads.RotateAuthenticationKey => ({
  type: "script_function_payload",
  function: "0x1::account::rotate_authentication_key",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.new_auth_key)],
});
