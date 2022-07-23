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
          name: "code_location",
          doc: "The location (e.g. url) where the proposal resolution script's code can be accessed.\nMaximum length allowed is 256 chars.",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "title",
          doc: "Title of the proposal.\nMaximum length allowed is 256 chars.",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "description",
          doc: "Description of the proposal.\nMaximum length allowed is 256 chars.",
          ty: { struct: { name: "0x1::string::String" } },
        },
      ],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
    "1": { name: "ECODE_LOCATION_TOO_LONG" },
    "2": { name: "ETITLE_TOO_LONG" },
    "3": { name: "EDESCRIPTION_TOO_LONG" },
  },
} as const;
