/**
 * This module allows for more convenient managing of coins across coin::CoinStore and
 * account::Account
 *
 * **Module ID:** `0x1::coins`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Payload arguments for {@link entry.register}. */
export type RegisterArgs = {
  typeArgs: {
    CoinType: string;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::coins" as const;
/** The name of the module. */
export const NAME = "coins" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {
  register: {
    name: "register",
    doc: "Entry function to register to receive a specific `CoinType`. An account that wants to hold a coin type\nhas to explicitly registers to do so. The register creates a special `CoinStore`\nto hold the specified `CoinType`.",
    ty_args: ["CoinType"],
    args: [],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::coins`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * This module allows for more convenient managing of coins across coin::CoinStore and
 * account::Account
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "coins"
> as typeof moduleImpl;
