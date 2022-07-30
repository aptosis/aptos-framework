/**
 * **Module ID:** `0x1::bit_vector`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::bit_vector::BitVector` */
export interface IBitVector {
  length: p.U64;
  bit_field: ReadonlyArray<boolean>;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::bit_vector" as const;
/** The name of the module. */
export const NAME = "bit_vector" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "131072": {
    name: "EINDEX",
    doc: "The provided index is out of bounds",
  },
  "131073": {
    name: "ELENGTH",
    doc: "An invalid length of bitvector was given",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  BitVector: "0x1::bit_vector::BitVector",
} as const;

/** Payload generators for module `0x1::bit_vector`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "bit_vector"
> as typeof moduleImpl;
