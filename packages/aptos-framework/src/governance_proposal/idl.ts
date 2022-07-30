/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::governance_proposal",
  doc: "Define the GovernanceProposal that will be used as part of on-chain governance by AptosGovernance.\n\nThis is separate from the AptosGovernance module to avoid circular dependency between AptosGovernance and Stake.",
  functions: [],
  structs: [
    {
      name: "0x1::governance_proposal::GovernanceProposal",
      fields: [
        {
          name: "metadata_location",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "metadata_hash",
          ty: { struct: { name: "0x1::string::String" } },
        },
      ],
      abilities: ["drop", "store"],
    },
  ],
  errors: { "1": { name: "ETOO_LONG" } },
} as const;
