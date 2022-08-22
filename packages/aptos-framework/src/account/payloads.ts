/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/** Script function payload for `0x1::account::transfer`. */
export type Transfer = {
  readonly type: "script_function_payload";
  readonly function: "0x1::account::transfer";
  readonly arguments: [to: string, amount: string];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::account::create_account`.
 *
 * Basic account creation methods.
 */
export type CreateAccount = {
  readonly type: "script_function_payload";
  readonly function: "0x1::account::create_account";
  readonly arguments: [auth_key: string];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::account::rotate_authentication_key`. */
export type RotateAuthenticationKey = {
  readonly type: "script_function_payload";
  readonly function: "0x1::account::rotate_authentication_key";
  readonly arguments: [new_auth_key: string];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::account::rotate_authentication_key_ed25519`.
 *
 * Rotates the authentication key and records a mapping on chain from the new authentication key to the originating
 * address of the account. To authorize the rotation, a signature under the old public key on a `RotationProofChallenge`
 * is given in `current_sig`. To ensure the account owner knows the secret key corresponding to the new public key
 * in `new_pubkey`, a proof-of-knowledge is given in `new_sig` (i.e., a signature under the new public key on the
 * same `RotationProofChallenge` struct).
 */
export type RotateAuthenticationKeyEd25519 = {
  readonly type: "script_function_payload";
  readonly function: "0x1::account::rotate_authentication_key_ed25519";
  readonly arguments: [
    curr_sig_bytes: string,
    new_sig_bytes: string,
    curr_pk_bytes: string,
    new_pk_bytes: string
  ];
  readonly type_arguments: [];
};
