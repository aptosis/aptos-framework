/**
 * The chain id distinguishes between different chains (e.g., testnet and the main network).
 * One important role is to prevent transactions intended for one chain from being executed on another.
 * This code provides a container for storing a chain id and functions to initialize and get it.
 *
 * **Module ID:** `0x1::ChainId`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type ChainIdData = {
  id: number;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::ChainId" as const;
/** The name of the module. */
export const NAME = "ChainId" as const;

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
    name: "ECHAIN_ID",
    doc: "The `ChainId` resource was not in the required state",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  ChainId: "0x1::ChainId::ChainId",
} as const;

/** All struct types. */
export const structs = {
  ChainId: "0x1::ChainId::ChainId",
} as const;

/** Payload generators for module `0x1::ChainId`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * The chain id distinguishes between different chains (e.g., testnet and the main network).
 * One important role is to prevent transactions intended for one chain from being executed on another.
 * This code provides a container for storing a chain id and functions to initialize and get it.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ChainId"
> as typeof moduleImpl;
