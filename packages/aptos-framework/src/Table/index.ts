/**
 * Type of large-scale storage tables.
 * source: https://github.com/move-language/move/blob/1b6b7513dcc1a5c866f178ca5c1e74beb2ce181e/language/extensions/move-table-extension/sources/Table.move#L1
 *
 * This is a exact copy from the Move repo. It implements the Table type which supports individual table items to
 * be represented by separate global state items. The number of items and a unique handle are tracked on the table
 * struct itself, while the operations are implemented as native functions. No traversal is provided.
 *
 * **Module ID:** `0x1::Table`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type of tables */
export type TableData<_K = unknown, _V = unknown> = {
  handle: p.U128;
  length: p.U64;
};

/** Wrapper for values. Required for making values appear as resources in the implementation. */
export type BoxData<_V = unknown> = {
  val: _V;
};

export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Table",
  /** The name of the module. */
  NAME: "Table",
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "100": {
    name: "EALREADY_EXISTS",
  },
  "101": {
    name: "ENOT_FOUND",
  },
  "102": {
    name: "ENOT_EMPTY",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  Box: "0x1::Table::Box",
} as const;

/** All struct types. */
export const structs = {
  Box: "0x1::Table::Box",
  Table: "0x1::Table::Table",
} as const;

/** Payload generators for module `0x1::Table`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Type of large-scale storage tables.
 * source: https://github.com/move-language/move/blob/1b6b7513dcc1a5c866f178ca5c1e74beb2ce181e/language/extensions/move-table-extension/sources/Table.move#L1
 *
 * This is a exact copy from the Move repo. It implements the Table type which supports individual table items to
 * be represented by separate global state items. The number of items and a unique handle are tracked on the table
 * struct itself, while the operations are implemented as native functions. No traversal is provided.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Table"
> as typeof moduleImpl;
