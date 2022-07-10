/**
 * This module provides a solution for sorted maps, that is it has the properties that
 * 1) Keys point to Values
 * 2) Each Key must be unique
 * 3) A Key can be found within O(Log N) time
 * 4) The data is stored as a sorted by Key
 * 5) Adds and removals take O(N) time
 *
 * **Module ID:** `0x1::SimpleMap`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type ElementData<_Key = unknown, _Value = unknown> = {
  key: _Key;
  value: _Value;
};

export type SimpleMapData<_Key = unknown, _Value = unknown> = {
  data: ReadonlyArray<{
    key: _Key;
    value: _Value;
  }>;
};

export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::SimpleMap",
  /** The name of the module. */
  NAME: "SimpleMap",
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EKEY_ALREADY_EXISTS",
  },
  "1": {
    name: "EKEY_NOT_FOUND",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Element: "0x1::SimpleMap::Element",
  SimpleMap: "0x1::SimpleMap::SimpleMap",
} as const;

/** Payload generators for module `0x1::SimpleMap`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * This module provides a solution for sorted maps, that is it has the properties that
 * 1) Keys point to Values
 * 2) Each Key must be unique
 * 3) A Key can be found within O(Log N) time
 * 4) The data is stored as a sorted by Key
 * 5) Adds and removals take O(N) time
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "SimpleMap"
> as typeof moduleImpl;
