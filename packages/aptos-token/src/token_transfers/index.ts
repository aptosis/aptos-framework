/**
 * This module provides the foundation for transferring of Tokens
 *
 * **Module ID:** `0x3::token_transfers`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x3::token_transfers::TokenTransfers` */
export interface ITokenTransfers {
  pending_claims: {
    inner: {
      handle: p.U128;
    };
    length: p.U64;
  };
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x3" as const;
/** The full module name. */
export const FULL_NAME = "0x3::token_transfers" as const;
/** The name of the module. */
export const NAME = "token_transfers" as const;

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
  TokenTransfers: "0x3::token_transfers::TokenTransfers",
} as const;

/** All struct types. */
export const structs = {
  TokenTransfers: "0x3::token_transfers::TokenTransfers",
} as const;

/** Payload generators for module `0x3::token_transfers`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module provides the foundation for transferring of Tokens */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x3",
  "token_transfers"
> as typeof moduleImpl;
