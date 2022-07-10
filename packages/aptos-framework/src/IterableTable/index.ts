/**
 * **Module ID:** `0x1::IterableTable`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** An iterable table implementation based on double linked list. */
export type IterableTableData<_K = unknown, _V = unknown> = {
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
};

/** The iterable wrapper around value, points to previous and next key if any. */
export type IterableValueData<_K = unknown, _V = unknown> = {
  val: _V;
  prev: {
    vec: ReadonlyArray<_K>;
  };
  next: {
    vec: ReadonlyArray<_K>;
  };
};

export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::IterableTable",
  /** The name of the module. */
  NAME: "IterableTable",
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  IterableTable: "0x1::IterableTable::IterableTable",
  IterableValue: "0x1::IterableTable::IterableValue",
} as const;

/** Payload generators for module `0x1::IterableTable`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "IterableTable"
> as typeof moduleImpl;
