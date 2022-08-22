/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/** Script function payload for `0x3::token::initialize_token_script`. */
export type InitializeTokenScript = {
  readonly type: "script_function_payload";
  readonly function: "0x3::token::initialize_token_script";
  readonly arguments: [];
  readonly type_arguments: [];
};

/** Script function payload for `0x3::token::opt_in_direct_transfer`. */
export type OptInDirectTransfer = {
  readonly type: "script_function_payload";
  readonly function: "0x3::token::opt_in_direct_transfer";
  readonly arguments: [opt_in: boolean];
  readonly type_arguments: [];
};
