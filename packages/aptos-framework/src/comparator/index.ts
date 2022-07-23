/**
 * Provides a framework for comparing two elements
 *
 * **Module ID:** `0x1::comparator`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::comparator::Result` */
export interface IResult {
  inner: number;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::comparator" as const;
/** The name of the module. */
export const NAME = "comparator" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EQUAL",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Result: "0x1::comparator::Result",
} as const;

/** Payload generators for module `0x1::comparator`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** Provides a framework for comparing two elements */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "comparator"
> as typeof moduleImpl;
