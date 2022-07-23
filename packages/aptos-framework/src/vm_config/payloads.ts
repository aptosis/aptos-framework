/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/** Script function payload for `0x1::vm_config::set_gas_constants`. */
export type SetGasConstants = {
  readonly type: "script_function_payload";
  readonly function: "0x1::vm_config::set_gas_constants";
  readonly arguments: [
    global_memory_per_byte_cost: string,
    global_memory_per_byte_write_cost: string,
    min_transaction_gas_units: string,
    large_transaction_cutoff: string,
    intrinsic_gas_per_byte: string,
    maximum_number_of_gas_units: string,
    min_price_per_gas_unit: string,
    max_price_per_gas_unit: string,
    max_transaction_size_in_bytes: string,
    gas_unit_scaling_factor: string,
    default_account_size: string
  ];
  readonly type_arguments: [];
};
