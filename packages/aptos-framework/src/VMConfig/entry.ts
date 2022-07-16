/**
 * Entrypoint builders.
 *
 * @module
 */

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";

export const set_gas_constants = ({
  args,
}: mod.SetGasConstantsArgs): payloads.SetGasConstants => ({
  type: "script_function_payload",
  function: "0x1::VMConfig::set_gas_constants",
  type_arguments: [],
  arguments: [
    args.global_memory_per_byte_cost,
    args.global_memory_per_byte_write_cost,
    args.min_transaction_gas_units,
    args.large_transaction_cutoff,
    args.intrinsic_gas_per_byte,
    args.maximum_number_of_gas_units,
    args.min_price_per_gas_unit,
    args.max_price_per_gas_unit,
    args.max_transaction_size_in_bytes,
    args.gas_unit_scaling_factor,
    args.default_account_size,
  ],
});
