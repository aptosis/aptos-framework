/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::gas_schedule::set_gas_schedule`.
 *
 * This can be called by on-chain governance to update gas schedule.
 */
export type SetGasSchedule = {
  readonly type: "script_function_payload";
  readonly function: "0x1::gas_schedule::set_gas_schedule";
  readonly arguments: [gas_schedule_blob: string];
  readonly type_arguments: [];
};
