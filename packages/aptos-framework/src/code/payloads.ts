/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::code::publish_package_txn`.
 *
 * Same as `publish_package` but as an entry function which can be called as a transaction. Because
 * of current restrictions for txn parameters, the metadata needs to be passed in serialized form.
 */
export type PublishPackageTxn = {
  readonly type: "script_function_payload";
  readonly function: "0x1::code::publish_package_txn";
  readonly arguments: [pack_serialized: string, code: ReadonlyArray<string>];
  readonly type_arguments: [];
};
