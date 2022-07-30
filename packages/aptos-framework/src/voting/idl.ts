/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::voting",
  doc: "\n* This is the general Voting module that can be used as part of a DAO Governance. Voting is designed to be used by\n* standalone governance modules, who has full control over the voting flow and is responsible for voting power\n* calculation and including proper capabilities when creating the proposal so resolution can go through.\n* On-chain governance of the Aptos network also uses Voting.\n*\n* The voting flow:\n* 1. The Voting module can be deployed at a known address (e.g. 0x1 for Aptos on-chain governance)\n* 2. The governance module, e.g. AptosGovernance, can be deployed later and define a GovernanceProposal resource type\n* that can also contain other information such as Capability resource for authorization.\n* 3. The governance module's owner can then register the ProposalType with Voting. This also hosts the proposal list\n* (forum) on the calling account.\n* 4. A proposer, through the governance module, can call Voting::create_proposal to create a proposal. create_proposal\n* cannot be called directly not through the governance module. A script hash of the resolution script that can later\n* be called to execute the proposal is required.\n* 5. A voter, through the governance module, can call Voting::vote on a proposal. vote requires passing a &ProposalType\n* and thus only the governance module that registers ProposalType can call vote.\n* 6. Once the proposal's expiration time has passed and more than the defined threshold has voted yes on the proposal,\n* anyone can call resolve which returns the content of the proposal (of type ProposalType) that can be used to execute.\n* 7. Only the resolution script with the same script hash specified in the proposal can call Voting::resolve as part of\n* the resolution process.\n",
  functions: [],
  structs: [
    {
      name: "0x1::voting::CreateProposalEvent",
      fields: [
        { name: "proposal_id", ty: "u64" },
        {
          name: "early_resolution_vote_threshold",
          ty: { struct: { name: "0x1::option::Option", ty_args: ["u128"] } },
        },
        { name: "execution_hash", ty: { vector: "u8" } },
        { name: "expiration_secs", ty: "u64" },
        { name: "min_vote_threshold", ty: "u128" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::voting::Proposal",
      doc: "Extra metadata (e.g. description, code url) can be part of the ProposalType struct.",
      fields: [
        {
          name: "proposer",
          doc: "Required. The address of the proposer.",
          ty: "address",
        },
        {
          name: "execution_content",
          doc: "Required. Should contain enough information to execute later, for example the required capability.\nThis is stored as an option so we can return it to governance when the proposal is resolved.",
          ty: {
            struct: {
              name: "0x1::option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
        {
          name: "creation_time_secs",
          doc: "Timestamp when the proposal was created.",
          ty: "u64",
        },
        {
          name: "execution_hash",
          doc: "Required. The hash for the execution script module. Only the same exact script module can resolve this\nproposal.",
          ty: { vector: "u8" },
        },
        {
          name: "min_vote_threshold",
          doc: "A proposal is only resolved if expiration has passed and the number of votes is above threshold.",
          ty: "u128",
        },
        { name: "expiration_secs", ty: "u64" },
        {
          name: "early_resolution_vote_threshold",
          doc: "Optional. Early resolution threshold. If specified, the proposal can be resolved early if the total\nnumber of yes or no votes passes this threshold.\nFor example, this can be set to 50% of the total supply of the voting token, so if > 50% vote yes or no,\nthe proposal can be resolved before expiration.",
          ty: { struct: { name: "0x1::option::Option", ty_args: ["u128"] } },
        },
        {
          name: "yes_votes",
          doc: "Number of votes for each outcome.\nu128 since the voting power is already u64 and can add up to more than u64 can hold.",
          ty: "u128",
        },
        { name: "no_votes", ty: "u128" },
        {
          name: "is_resolved",
          doc: "Whether the proposal has been resolved.",
          ty: "bool",
        },
      ],
      type_params: [{ name: "ProposalType" }],
      abilities: ["store"],
    },
    {
      name: "0x1::voting::RegisterForumEvent",
      fields: [
        { name: "hosting_account", ty: "address" },
        {
          name: "proposal_type_info",
          ty: { struct: { name: "0x1::type_info::TypeInfo" } },
        },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::voting::ResolveProposal",
      fields: [
        { name: "proposal_id", ty: "u64" },
        { name: "yes_votes", ty: "u128" },
        { name: "no_votes", ty: "u128" },
        { name: "resolved_early", ty: "bool" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::voting::VoteEvent",
      fields: [
        { name: "proposal_id", ty: "u64" },
        { name: "num_votes", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::voting::VotingEvents",
      fields: [
        {
          name: "create_proposal_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::voting::CreateProposalEvent" } },
              ],
            },
          },
        },
        {
          name: "register_forum_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::voting::RegisterForumEvent" } },
              ],
            },
          },
        },
        {
          name: "resolve_proposal_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::voting::ResolveProposal" } }],
            },
          },
        },
        {
          name: "vote_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::voting::VoteEvent" } }],
            },
          },
        },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::voting::VotingForum",
      fields: [
        {
          name: "proposals",
          doc: "Use Table for execution optimization instead of Vector for gas cost since Vector is read entirely into memory\nduring execution while only relevant Table entries are.",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                "u64",
                {
                  struct: {
                    name: "0x1::voting::Proposal",
                    ty_args: [{ type_param: 0 }],
                  },
                },
              ],
            },
          },
        },
        {
          name: "events",
          ty: { struct: { name: "0x1::voting::VotingEvents" } },
        },
        {
          name: "next_proposal_id",
          doc: "Unique identifier for a proposal. This allows for 2 * 10**19 proposals.",
          ty: "u64",
        },
      ],
      type_params: [{ name: "ProposalType" }],
      abilities: ["key"],
    },
  ],
  errors: {
    "1": { name: "EPROPOSAL_EXECUTION_HASH_NOT_MATCHING", doc: "Error codes." },
    "2": { name: "EPROPOSAL_CANNOT_BE_RESOLVED" },
    "3": { name: "EPROPOSAL_ALREADY_RESOLVED" },
    "4": { name: "EPROPOSAL_EMPTY_EXECUTION_HASH" },
  },
} as const;
