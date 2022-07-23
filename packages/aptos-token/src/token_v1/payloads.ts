/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x2::token_v1::mint`.
 *
 * Mint more token from an existing token_data. Mint only adds more token to serial_number 0
 */
export type Mint = {
  readonly type: "script_function_payload";
  readonly function: "0x2::token_v1::mint";
  readonly arguments: [
    token_data_address: string,
    collection: string,
    name: string,
    amount: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x2::token_v1::direct_transfer_script`. */
export type DirectTransferScript = {
  readonly type: "script_function_payload";
  readonly function: "0x2::token_v1::direct_transfer_script";
  readonly arguments: [
    creators_address: string,
    collection: string,
    name: string,
    amount: string,
    serial_number: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x2::token_v1::initialize_token_script`. */
export type InitializeTokenScript = {
  readonly type: "script_function_payload";
  readonly function: "0x2::token_v1::initialize_token_script";
  readonly arguments: [];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x2::token_v1::create_collection_script`.
 *
 * create a empty token collection with parameters
 */
export type CreateCollectionScript = {
  readonly type: "script_function_payload";
  readonly function: "0x2::token_v1::create_collection_script";
  readonly arguments: [
    name: string,
    description: string,
    uri: string,
    maximum: string,
    mutate_setting: ReadonlyArray<boolean>
  ];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x2::token_v1::create_token_script`.
 *
 * create token with raw inputs
 */
export type CreateTokenScript = {
  readonly type: "script_function_payload";
  readonly function: "0x2::token_v1::create_token_script";
  readonly arguments: [
    collection: string,
    name: string,
    description: string,
    balance: string,
    maximum: string,
    uri: string,
    royalty_payee_address: string,
    royalty_points_denominator: string,
    royalty_points_nominator: string,
    token_mutate_setting: ReadonlyArray<boolean>,
    property_keys: ReadonlyArray<string>,
    property_values: ReadonlyArray<string>,
    property_types: ReadonlyArray<string>
  ];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x2::token_v1::initialize_token_authority_store_script`.
 *
 * initialize capability store for storing all token capabilities
 * this function should be called by any account that plan to own tokens
 */
export type InitializeTokenAuthorityStoreScript = {
  readonly type: "script_function_payload";
  readonly function: "0x2::token_v1::initialize_token_authority_store_script";
  readonly arguments: [];
  readonly type_arguments: [];
};
