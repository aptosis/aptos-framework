/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::version::set_version`.
 *
 * Updates the major version to a larger version.
 * This is only used in test environments and outside of them, the core resources account shouldn't exist.
 */
export type SetVersion = {
  readonly type: "script_function_payload";
  readonly function: "0x1::version::set_version";
  readonly arguments: [major: string];
  readonly type_arguments: [];
};
