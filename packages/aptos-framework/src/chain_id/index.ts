/**
 * The chain id distinguishes between different chains (e.g., testnet and the main network).
 * One important role is to prevent transactions intended for one chain from being executed on another.
 * This code provides a container for storing a chain id and functions to initialize and get it.
 *
 * **Module ID:** `0x1::chain_id`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::chain_id::ChainId` */
export interface IChainId {
  id: number;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::chain_id" as const;
/** The name of the module. */
export const NAME = "chain_id" as const;

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
export const resources = {
  ChainId: "0x1::chain_id::ChainId",
} as const;

/** All struct types. */
export const structs = {
  ChainId: "0x1::chain_id::ChainId",
} as const;

/** Payload generators for module `0x1::chain_id`. */
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
  "chain_id"
> as typeof moduleImpl;
