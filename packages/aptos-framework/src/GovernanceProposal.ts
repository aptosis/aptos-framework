/**
 * Define the GovernanceProposal that will be used as part of on-chain governance by AptosGovernance.
 *
 * This is separate from the AptosGovernance module to avoid circular dependency between AptosGovernance and Stake.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::GovernanceProposal",
  doc: "Define the GovernanceProposal that will be used as part of on-chain governance by AptosGovernance.\n\nThis is separate from the AptosGovernance module to avoid circular dependency between AptosGovernance and Stake.",
  functions: [],
  structs: [
    {
      name: "0x1::GovernanceProposal::GovernanceProposal",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: ["drop", "store"],
    },
  ],
  errors: {},
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::GovernanceProposal",
  /** The name of the module. */
  NAME: "GovernanceProposal",
} as const;

/** Module errors. */
export const errors = {} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
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
