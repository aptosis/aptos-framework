/**
 * Define the GovernanceProposal that will be used as part of on-chain governance by AptosGovernance.
 *
 * This is separate from the AptosGovernance module to avoid circular dependency between AptosGovernance and Stake.
 *
 * **Module ID:** `0x1::GovernanceProposal`
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
  FULL_NAME: "0x1::GovernanceProposal",
  /** The name of the module. */
  NAME: "GovernanceProposal",
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  GovernanceProposal: "0x1::GovernanceProposal::GovernanceProposal",
} as const;

/** Payload generators for module `0x1::GovernanceProposal`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Define the GovernanceProposal that will be used as part of on-chain governance by AptosGovernance.
 *
 * This is separate from the AptosGovernance module to avoid circular dependency between AptosGovernance and Stake.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "GovernanceProposal"
> as typeof moduleImpl;
