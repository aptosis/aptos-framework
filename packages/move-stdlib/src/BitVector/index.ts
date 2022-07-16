/**
 * **Module ID:** `0x1::BitVector`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type BitVectorData = {
  length: string;
  bit_field: ReadonlyArray<boolean>;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::BitVector" as const;
/** The name of the module. */
export const NAME = "BitVector" as const;

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
    name: "EINDEX",
    doc: "The provided index is out of bounds",
  },
  "1": {
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
  BitVector: "0x1::BitVector::BitVector",
} as const;

/** Payload generators for module `0x1::BitVector`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "BitVector"
> as typeof moduleImpl;
