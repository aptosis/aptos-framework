/**
 * Contains functions for [ed25519](https://en.wikipedia.org/wiki/EdDSA) digital signatures.
 *
 * **Module ID:** `0x1::signature`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::signature" as const;
/** The name of the module. */
export const NAME = "signature" as const;

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
export const structs = {} as const;

/** Payload generators for module `0x1::signature`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** Contains functions for [ed25519](https://en.wikipedia.org/wiki/EdDSA) digital signatures. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "signature"
> as typeof moduleImpl;
