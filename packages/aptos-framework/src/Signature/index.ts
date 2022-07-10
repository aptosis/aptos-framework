/**
 * Contains functions for [ed25519](https://en.wikipedia.org/wiki/EdDSA) digital signatures.
 *
 * **Module ID:** `0x1::Signature`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Signature",
  /** The name of the module. */
  NAME: "Signature",
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::Signature`. */
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
  "Signature"
> as typeof moduleImpl;
