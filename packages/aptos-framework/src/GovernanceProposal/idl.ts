/**
 * The IDL of the module.
 *
 * @module
 */
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
