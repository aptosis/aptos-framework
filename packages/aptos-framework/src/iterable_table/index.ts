/**
 * **Module ID:** `0x1::iterable_table`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * An iterable table implementation based on double linked list.
 *
 * Type name: `0x1::iterable_table::IterableTable`
 */
export interface IIterableTable<_K = unknown, _V = unknown> {
  inner: {
    handle: p.U128;
    length: p.U64;
  };
  head: {
    vec: ReadonlyArray<_K>;
  };
  tail: {
    vec: ReadonlyArray<_K>;
  };
}

/**
 * The iterable wrapper around value, points to previous and next key if any.
 *
 * Type name: `0x1::iterable_table::IterableValue`
 */
export interface IIterableValue<_K = unknown, _V = unknown> {
  val: _V;
  prev: {
    vec: ReadonlyArray<_K>;
  };
  next: {
    vec: ReadonlyArray<_K>;
  };
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::iterable_table" as const;
/** The name of the module. */
export const NAME = "iterable_table" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  IterableTable: "0x1::iterable_table::IterableTable",
  IterableValue: "0x1::iterable_table::IterableValue",
} as const;

/** Payload generators for module `0x1::iterable_table`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "iterable_table"
> as typeof moduleImpl;
