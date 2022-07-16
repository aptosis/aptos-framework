/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::Account::create_account`.
 *
 * Basic account creation methods.
 */
export type CreateAccount = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Account::create_account";
  readonly arguments: [auth_key: string];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::Account::rotate_authentication_key`. */
export type RotateAuthenticationKey = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Account::rotate_authentication_key";
  readonly arguments: [new_auth_key: string];
  readonly type_arguments: [];
};
