/**
 * This module provides a solution for sorted maps, that is it has the properties that
 * 1) Keys point to Values
 * 2) Each Key must be unique
 * 3) A Key can be found within O(Log N) time
 * 4) The data is stored as a sorted by Key
 * 5) Adds and removals take O(N) time
 *
 * **Module ID:** `0x1::simple_map`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::simple_map::Element` */
export interface IElement<_Key = unknown, _Value = unknown> {
  key: _Key;
  value: _Value;
}

/** Type name: `0x1::simple_map::SimpleMap` */
export interface ISimpleMap<_Key = unknown, _Value = unknown> {
  data: ReadonlyArray<{
    key: _Key;
    value: _Value;
  }>;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::simple_map" as const;
/** The name of the module. */
export const NAME = "simple_map" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "EKEY_ALREADY_EXISTS",
    doc: "Map key already exists",
  },
  "2": {
    name: "EKEY_NOT_FOUND",
    doc: "Map key is not found",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Element: "0x1::simple_map::Element",
  SimpleMap: "0x1::simple_map::SimpleMap",
} as const;

/** Payload generators for module `0x1::simple_map`. */
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
  "simple_map"
> as typeof moduleImpl;
