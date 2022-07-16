/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/** Script function payload for `0x1::Token::create_limited_collection_script`. */
export type CreateLimitedCollectionScript = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Token::create_limited_collection_script";
  readonly arguments: [
    name: string,
    description: string,
    uri: string,
    maximum: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::Token::create_limited_token_script`. */
export type CreateLimitedTokenScript = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Token::create_limited_token_script";
  readonly arguments: [
    collection: string,
    name: string,
    description: string,
    monitor_supply: boolean,
    initial_balance: string,
    maximum: string,
    uri: string,
    royalty_points_per_million: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::Token::create_unlimited_collection_script`. */
export type CreateUnlimitedCollectionScript = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Token::create_unlimited_collection_script";
  readonly arguments: [name: string, description: string, uri: string];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::Token::create_unlimited_token_script`. */
export type CreateUnlimitedTokenScript = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Token::create_unlimited_token_script";
  readonly arguments: [
    collection: string,
    name: string,
    description: string,
    monitor_supply: boolean,
    initial_balance: string,
    uri: string,
    royalty_points_per_million: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::Token::direct_transfer_script`. */
export type DirectTransferScript = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Token::direct_transfer_script";
  readonly arguments: [
    creators_address: string,
    collection: string,
    name: string,
    amount: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::Token::initialize_token_for_id`. */
export type InitializeTokenForId = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Token::initialize_token_for_id";
  readonly arguments: [
    creators_address: string,
    collection: string,
    name: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::Token::initialize_token_script`. */
export type InitializeTokenScript = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Token::initialize_token_script";
  readonly arguments: [];
  readonly type_arguments: [];
};
