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

/**
 * Rotates the authentication key and records a mapping on chain from the new authentication key to the originating
 * address of the account. To authorize the rotation, a signature under the old public key on a `RotationProofChallenge`
 * is given in `current_sig`. To ensure the account owner knows the secret key corresponding to the new public key
 * in `new_pubkey`, a proof-of-knowledge is given in `new_sig` (i.e., a signature under the new public key on the
 * same `RotationProofChallenge` struct).
 */
export const rotate_authentication_key_ed25519 = ({
  args,
}: mod.RotateAuthenticationKeyEd25519Args): payloads.RotateAuthenticationKeyEd25519 => ({
  type: "script_function_payload",
  function: "0x1::account::rotate_authentication_key_ed25519",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.curr_sig_bytes),
    p.serializers.hexString(args.new_sig_bytes),
    p.serializers.hexString(args.curr_pk_bytes),
    p.serializers.hexString(args.new_pk_bytes),
  ],
});
