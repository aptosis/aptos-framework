/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/** Script function payload for `0x1::validator_set_script::add_validator`. */
export type AddValidator = {
  readonly type: "script_function_payload";
  readonly function: "0x1::validator_set_script::add_validator";
  readonly arguments: [_validator_addr: string];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::validator_set_script::create_validator_account`. */
export type CreateValidatorAccount = {
  readonly type: "script_function_payload";
  readonly function: "0x1::validator_set_script::create_validator_account";
  readonly arguments: [_new_account_address: string, _human_name: string];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::validator_set_script::create_validator_operator_account`. */
export type CreateValidatorOperatorAccount = {
  readonly type: "script_function_payload";
  readonly function: "0x1::validator_set_script::create_validator_operator_account";
  readonly arguments: [_new_account_address: string, _human_name: string];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::validator_set_script::register_validator_config`. */
export type RegisterValidatorConfig = {
  readonly type: "script_function_payload";
  readonly function: "0x1::validator_set_script::register_validator_config";
  readonly arguments: [
    _validator_address: string,
    _consensus_pubkey: string,
    _validator_network_addresses: string,
    _fullnode_network_addresses: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::validator_set_script::remove_validator`. */
export type RemoveValidator = {
  readonly type: "script_function_payload";
  readonly function: "0x1::validator_set_script::remove_validator";
  readonly arguments: [_validator_addr: string];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::validator_set_script::set_validator_config_and_reconfigure`. */
export type SetValidatorConfigAndReconfigure = {
  readonly type: "script_function_payload";
  readonly function: "0x1::validator_set_script::set_validator_config_and_reconfigure";
  readonly arguments: [
    _validator_account: string,
    _consensus_pubkey: string,
    _validator_network_addresses: string,
    _fullnode_network_addresses: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::validator_set_script::set_validator_operator`. */
export type SetValidatorOperator = {
  readonly type: "script_function_payload";
  readonly function: "0x1::validator_set_script::set_validator_operator";
  readonly arguments: [_operator_name: string, _operator_account: string];
  readonly type_arguments: [];
};
