/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::reconfiguration::force_reconfigure`.
 *
 * Force an epoch change.
 */
export type ForceReconfigure = {
  readonly type: "script_function_payload";
  readonly function: "0x1::reconfiguration::force_reconfigure";
  readonly arguments: [];
  readonly type_arguments: [];
};
