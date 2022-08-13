/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";

export const set_gas_schedule = ({
  args,
}: mod.SetGasScheduleArgs): payloads.SetGasSchedule => ({
  type: "script_function_payload",
  function: "0x1::gas_schedule::set_gas_schedule",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.gas_schedule_blob)],
});
