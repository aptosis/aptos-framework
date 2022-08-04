/**
 * Extends Table and provides functions such as length and the ability to be desttroyed
 *
 * **Module ID:** `0x1::table_with_length`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Type of tables
 *
 * Type name: `0x1::table_with_length::TableWithLength`
 */
export interface ITableWithLength {
  inner: {
    handle: p.U128;
  };
  length: p.U64;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::table_with_length" as const;
/** The name of the module. */
export const NAME = "table_with_length" as const;

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
  "102": {
    name: "ENOT_EMPTY",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  TableWithLength: "0x1::table_with_length::TableWithLength",
} as const;

/** Payload generators for module `0x1::table_with_length`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** Extends Table and provides functions such as length and the ability to be desttroyed */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "table_with_length"
> as typeof moduleImpl;
