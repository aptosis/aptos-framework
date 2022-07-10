/**
 * Utility for converting a Move value to its binary representation in BCS (Binary Canonical
 * Serialization). BCS is the binary encoding for Move resources and other non-module values
 * published on-chain. See https://github.com/aptos/bcs#binary-canonical-serialization-bcs for more
 * details on BCS.
 *
 * **Module ID:** `0x1::BCS`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::BCS" as const;
/** The name of the module. */
export const NAME = "BCS" as const;

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

/** Payload generators for module `0x1::BCS`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Utility for converting a Move value to its binary representation in BCS (Binary Canonical
 * Serialization). BCS is the binary encoding for Move resources and other non-module values
 * published on-chain. See https://github.com/aptos/bcs#binary-canonical-serialization-bcs for more
 * details on BCS.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "BCS"
> as typeof moduleImpl;
