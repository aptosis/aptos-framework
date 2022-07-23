/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::resource_account::create_resource_account`.
 *
 * Creates a new resource account and rotates the authentication key to either
 * the optional auth key if it is non-empty (though auth keys are 32-bytes)
 * or the source accounts current auth key.
 */
export type CreateResourceAccount = {
  readonly type: "script_function_payload";
  readonly function: "0x1::resource_account::create_resource_account";
  readonly arguments: [seed: string, optional_auth_key: string];
  readonly type_arguments: [];
};
