/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::Version::set_version`.
 *
 * Updates the major version to a larger version.
 */
export type SetVersion = {
  readonly type: "script_function_payload";
  readonly function: "0x1::Version::set_version";
  readonly arguments: [major: string];
  readonly type_arguments: [];
};
