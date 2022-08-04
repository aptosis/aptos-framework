/**
 * Type of large-scale storage tables.
 * source: https://github.com/move-language/move/blob/1b6b7513dcc1a5c866f178ca5c1e74beb2ce181e/language/extensions/move-table-extension/sources/Table.move#L1
 *
 * It implements the Table type which supports individual table items to be represented by
 * separate global state items. The number of items and a unique handle are tracked on the table
 * struct itself, while the operations are implemented as native functions. No traversal is provided.
 *
 * **Module ID:** `0x1::table`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Wrapper for values. Required for making values appear as resources in the implementation.
 *
 * Type name: `0x1::table::Box`
 */
export interface IBox<_V = unknown> {
  val: _V;
}

/**
 * Type of tables
 *
 * Type name: `0x1::table::Table`
 */
export interface ITable {
  handle: p.U128;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::table" as const;
/** The name of the module. */
export const NAME = "table" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
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
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  Box: "0x1::table::Box",
} as const;

/** All struct types. */
export const structs = {
  Box: "0x1::table::Box",
  Table: "0x1::table::Table",
} as const;

/** Payload generators for module `0x1::table`. */
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
 * It implements the Table type which supports individual table items to be represented by
 * separate global state items. The number of items and a unique handle are tracked on the table
 * struct itself, while the operations are implemented as native functions. No traversal is provided.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "table"
> as typeof moduleImpl;
