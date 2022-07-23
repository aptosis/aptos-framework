/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";

export const set_gas_constants = ({
  args,
}: mod.SetGasConstantsArgs): payloads.SetGasConstants => ({
  type: "script_function_payload",
  function: "0x1::vm_config::set_gas_constants",
  type_arguments: [],
  arguments: [
    p.serializers.u64(args.global_memory_per_byte_cost),
    p.serializers.u64(args.global_memory_per_byte_write_cost),
    p.serializers.u64(args.min_transaction_gas_units),
    p.serializers.u64(args.large_transaction_cutoff),
    p.serializers.u64(args.intrinsic_gas_per_byte),
    p.serializers.u64(args.maximum_number_of_gas_units),
    p.serializers.u64(args.min_price_per_gas_unit),
    p.serializers.u64(args.max_price_per_gas_unit),
    p.serializers.u64(args.max_transaction_size_in_bytes),
    p.serializers.u64(args.gas_unit_scaling_factor),
    p.serializers.u64(args.default_account_size),
  ],
});
