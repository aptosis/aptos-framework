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
