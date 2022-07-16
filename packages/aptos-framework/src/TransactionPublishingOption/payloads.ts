/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/** Script function payload for `0x1::TransactionPublishingOption::set_module_publishing_allowed`. */
export type SetModulePublishingAllowed = {
  readonly type: "script_function_payload";
  readonly function: "0x1::TransactionPublishingOption::set_module_publishing_allowed";
  readonly arguments: [is_allowed: boolean];
  readonly type_arguments: [];
};
