/**
 * Define the GovernanceProposal that will be used as part of on-chain governance by AptosGovernance.
 *
 * This is separate from the AptosGovernance module to avoid circular dependency between AptosGovernance and Stake.
 *
 * **Module ID:** `0x1::governance_proposal`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::governance_proposal::GovernanceProposal` */
export interface IGovernanceProposal {
  /**
   * The location (e.g. url) where the proposal resolution script's code can be accessed.
   * Maximum length allowed is 256 chars.
   */
  code_location: string;

  /**
   * Title of the proposal.
   * Maximum length allowed is 256 chars.
   */
  title: string;

  /**
   * Description of the proposal.
   * Maximum length allowed is 256 chars.
   */
  description: string;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::governance_proposal" as const;
/** The name of the module. */
export const NAME = "governance_proposal" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "ECODE_LOCATION_TOO_LONG",
  },
  "2": {
    name: "ETITLE_TOO_LONG",
  },
  "3": {
    name: "EDESCRIPTION_TOO_LONG",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  GovernanceProposal: "0x1::governance_proposal::GovernanceProposal",
} as const;

/** Payload generators for module `0x1::governance_proposal`. */
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
  "governance_proposal"
> as typeof moduleImpl;
