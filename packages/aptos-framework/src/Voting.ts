/**
 *
 * * This is the general Voting module that can be used as part of a DAO Governance. Voting is designed to be used by
 * * standalone governance modules, who has full control over the voting flow and is responsible for voting power
 * * calculation and including proper capabilities when creating the proposal so resolution can go through.
 * * On-chain governance of the Aptos network also uses Voting.
 * *
 * * The voting flow:
 * * 1. The Voting module can be deployed at a known address (e.g. 0x1 for Aptos on-chain governance)
 * * 2. The governance module, e.g. AptosGovernance, can be deployed later and define a GovernanceProposal resource type
 * * that can also contain other information such as Capability resource for authorization.
 * * 3. The governance module's owner can then register the ProposalType with Voting. This also hosts the proposal list
 * * (forum) on the calling account.
 * * 4. A proposer, through the governance module, can call Voting::create_proposal to create a proposal. create_proposal
 * * cannot be called directly not through the governance module. A script hash of the resolution script that can later
 * * be called to execute the proposal is required.
 * * 5. A voter, through the governance module, can call Voting::vote on a proposal. vote requires passing a &ProposalType
 * * and thus only the governance module that registers ProposalType can call vote.
 * * 6. Once the proposal's expiration time has passed and more than the defined threshold has voted yes on the proposal,
 * * anyone can call resolve which returns the content of the proposal (of type ProposalType) that can be used to execute.
 * * 7. Only the resolution script with the same script hash specified in the proposal can call Voting::resolve as part of
 * * the resolution process.
 *
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type CreateProposalEventData = {
  proposal_id: p.U64;
  early_resolution_vote_threshold: {
    vec: ReadonlyArray<p.U128>;
  };
  execution_hash: p.ByteString;
  expiration_secs: p.U64;
  min_vote_threshold: p.U128;
};

export type ProposalData<_ProposalType = unknown> = {
  /**
   * Required. Should contain enough information to execute later, for example the required capability.
   * This is stored as an option so we can return it to governance when the proposal is resolved.
   */
  execution_content: {
    vec: ReadonlyArray<_ProposalType>;
  };

  /**
   * Required. The hash for the execution script module. Only the same exact script module can resolve this
   * proposal.
   */
  execution_hash: p.ByteString;

  /** A proposal is only resolved if expiration has passed and the number of votes is above threshold. */
  min_vote_threshold: p.U128;
  expiration_secs: p.U64;

  /**
   * Optional. Early resolution threshold. If specified, the proposal can be resolved early if the total
   * number of yes or no votes passes this threshold.
   * For example, this can be set to 50% of the total supply of the voting token, so if > 50% vote yes or no,
   * the proposal can be resolved before expiration.
   */
  early_resolution_vote_threshold: {
    vec: ReadonlyArray<p.U128>;
  };

  /**
   * Number of votes for each outcome.
   * u128 since the voting power is already u64 and can add up to more than u64 can hold.
   */
  yes_votes: p.U128;
  no_votes: p.U128;
};

export type RegisterForumEventData = {
  hosting_account: p.RawAddress;
  proposal_type_info: {
    account_address: p.RawAddress;
    module_name: p.ByteString;
    struct_name: p.ByteString;
  };
};

export type ResolveProposalData = {
  proposal_id: p.U64;
  yes_votes: p.U128;
  no_votes: p.U128;
  resolved_early: boolean;
};

export type VoteEventData = {
  proposal_id: p.U64;
  num_votes: p.U64;
};

export type VotingEventsData = {
  create_proposal_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
  register_forum_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
  resolve_proposal_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
  vote_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
};

export type VotingForumData<_ProposalType = unknown> = {
  /**
   * Use Table for execution optimization instead of Vector for gas cost since Vector is read entirely into memory
   * during execution while only relevant Table entries are.
   */
  proposals: {
    handle: p.U128;
    length: p.U64;
  };
  events: {
    create_proposal_events: {
      /** Total number of events emitted to this event stream. */
      counter: p.U64;

      /** A globally unique ID for this event stream. */
      guid: {
        len_bytes: number;
        guid: {
          id: {
            /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
            creation_num: p.U64;

            /** Address that created the GUID */
            addr: p.RawAddress;
          };
        };
      };
    };
    register_forum_events: {
      /** Total number of events emitted to this event stream. */
      counter: p.U64;

      /** A globally unique ID for this event stream. */
      guid: {
        len_bytes: number;
        guid: {
          id: {
            /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
            creation_num: p.U64;

            /** Address that created the GUID */
            addr: p.RawAddress;
          };
        };
      };
    };
    resolve_proposal_events: {
      /** Total number of events emitted to this event stream. */
      counter: p.U64;

      /** A globally unique ID for this event stream. */
      guid: {
        len_bytes: number;
        guid: {
          id: {
            /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
            creation_num: p.U64;

            /** Address that created the GUID */
            addr: p.RawAddress;
          };
        };
      };
    };
    vote_events: {
      /** Total number of events emitted to this event stream. */
      counter: p.U64;

      /** A globally unique ID for this event stream. */
      guid: {
        len_bytes: number;
        guid: {
          id: {
            /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
            creation_num: p.U64;

            /** Address that created the GUID */
            addr: p.RawAddress;
          };
        };
      };
    };
  };

  /** Unique identifier for a proposal. This allows for 2 * 10**19 proposals. */
  next_proposal_id: p.U64;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Voting",
  doc: "\n* This is the general Voting module that can be used as part of a DAO Governance. Voting is designed to be used by\n* standalone governance modules, who has full control over the voting flow and is responsible for voting power\n* calculation and including proper capabilities when creating the proposal so resolution can go through.\n* On-chain governance of the Aptos network also uses Voting.\n*\n* The voting flow:\n* 1. The Voting module can be deployed at a known address (e.g. 0x1 for Aptos on-chain governance)\n* 2. The governance module, e.g. AptosGovernance, can be deployed later and define a GovernanceProposal resource type\n* that can also contain other information such as Capability resource for authorization.\n* 3. The governance module's owner can then register the ProposalType with Voting. This also hosts the proposal list\n* (forum) on the calling account.\n* 4. A proposer, through the governance module, can call Voting::create_proposal to create a proposal. create_proposal\n* cannot be called directly not through the governance module. A script hash of the resolution script that can later\n* be called to execute the proposal is required.\n* 5. A voter, through the governance module, can call Voting::vote on a proposal. vote requires passing a &ProposalType\n* and thus only the governance module that registers ProposalType can call vote.\n* 6. Once the proposal's expiration time has passed and more than the defined threshold has voted yes on the proposal,\n* anyone can call resolve which returns the content of the proposal (of type ProposalType) that can be used to execute.\n* 7. Only the resolution script with the same script hash specified in the proposal can call Voting::resolve as part of\n* the resolution process.\n",
  functions: [],
  structs: [
    {
      name: "0x1::Voting::CreateProposalEvent",
      fields: [
        { name: "proposal_id", ty: "u64" },
        {
          name: "early_resolution_vote_threshold",
          ty: { struct: { name: "0x1::Option::Option", ty_args: ["u128"] } },
        },
        { name: "execution_hash", ty: { vector: "u8" } },
        { name: "expiration_secs", ty: "u64" },
        { name: "min_vote_threshold", ty: "u128" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Voting::Proposal",
      fields: [
        {
          name: "execution_content",
          doc: "Required. Should contain enough information to execute later, for example the required capability.\nThis is stored as an option so we can return it to governance when the proposal is resolved.",
          ty: {
            struct: {
              name: "0x1::Option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
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
          ty: { struct: { name: "0x1::Option::Option", ty_args: ["u128"] } },
        },
        {
          name: "yes_votes",
          doc: "Number of votes for each outcome.\nu128 since the voting power is already u64 and can add up to more than u64 can hold.",
          ty: "u128",
        },
        { name: "no_votes", ty: "u128" },
      ],
      type_params: ["ProposalType"],
      abilities: ["store"],
    },
    {
      name: "0x1::Voting::RegisterForumEvent",
      fields: [
        { name: "hosting_account", ty: "address" },
        {
          name: "proposal_type_info",
          ty: { struct: { name: "0x1::TypeInfo::TypeInfo" } },
        },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Voting::ResolveProposal",
      fields: [
        { name: "proposal_id", ty: "u64" },
        { name: "yes_votes", ty: "u128" },
        { name: "no_votes", ty: "u128" },
        { name: "resolved_early", ty: "bool" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Voting::VoteEvent",
      fields: [
        { name: "proposal_id", ty: "u64" },
        { name: "num_votes", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Voting::VotingEvents",
      fields: [
        {
          name: "create_proposal_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::Voting::CreateProposalEvent" } },
              ],
            },
          },
        },
        {
          name: "register_forum_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::Voting::RegisterForumEvent" } },
              ],
            },
          },
        },
        {
          name: "resolve_proposal_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Voting::ResolveProposal" } }],
            },
          },
        },
        {
          name: "vote_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Voting::VoteEvent" } }],
            },
          },
        },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::Voting::VotingForum",
      fields: [
        {
          name: "proposals",
          doc: "Use Table for execution optimization instead of Vector for gas cost since Vector is read entirely into memory\nduring execution while only relevant Table entries are.",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                "u64",
                {
                  struct: {
                    name: "0x1::Voting::Proposal",
                    ty_args: [{ type_param: 0 }],
                  },
                },
              ],
            },
          },
        },
        {
          name: "events",
          ty: { struct: { name: "0x1::Voting::VotingEvents" } },
        },
        {
          name: "next_proposal_id",
          doc: "Unique identifier for a proposal. This allows for 2 * 10**19 proposals.",
          ty: "u64",
        },
      ],
      type_params: ["ProposalType"],
      abilities: ["key"],
    },
  ],
  errors: {
    "1": { name: "EPROPOSAL_EXECUTION_HASH_NOT_MATCHING", doc: "Error codes." },
    "2": { name: "EPROPOSAL_CANNOT_BE_RESOLVED" },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Voting",
  /** The name of the module. */
  NAME: "Voting",
} as const;

/** Module errors. */
export const errors = {
  EPROPOSAL_CANNOT_BE_RESOLVED: {
    code: 2,
    name: "EPROPOSAL_CANNOT_BE_RESOLVED",
  },
  EPROPOSAL_EXECUTION_HASH_NOT_MATCHING: {
    code: 1,
    name: "EPROPOSAL_EXECUTION_HASH_NOT_MATCHING",
    doc: "Error codes.",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "EPROPOSAL_EXECUTION_HASH_NOT_MATCHING",
    doc: "Error codes.",
  },
  "2": {
    name: "EPROPOSAL_CANNOT_BE_RESOLVED",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  VotingForum: "0x1::Voting::VotingForum",
} as const;

/** All struct types. */
export const structs = {
  CreateProposalEvent: "0x1::Voting::CreateProposalEvent",
  Proposal: "0x1::Voting::Proposal",
  RegisterForumEvent: "0x1::Voting::RegisterForumEvent",
  ResolveProposal: "0x1::Voting::ResolveProposal",
  VoteEvent: "0x1::Voting::VoteEvent",
  VotingEvents: "0x1::Voting::VotingEvents",
  VotingForum: "0x1::Voting::VotingForum",
} as const;

/** Payload generators for module `0x1::Voting`. */
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
 *
 * * This is the general Voting module that can be used as part of a DAO Governance. Voting is designed to be used by
 * * standalone governance modules, who has full control over the voting flow and is responsible for voting power
 * * calculation and including proper capabilities when creating the proposal so resolution can go through.
 * * On-chain governance of the Aptos network also uses Voting.
 * *
 * * The voting flow:
 * * 1. The Voting module can be deployed at a known address (e.g. 0x1 for Aptos on-chain governance)
 * * 2. The governance module, e.g. AptosGovernance, can be deployed later and define a GovernanceProposal resource type
 * * that can also contain other information such as Capability resource for authorization.
 * * 3. The governance module's owner can then register the ProposalType with Voting. This also hosts the proposal list
 * * (forum) on the calling account.
 * * 4. A proposer, through the governance module, can call Voting::create_proposal to create a proposal. create_proposal
 * * cannot be called directly not through the governance module. A script hash of the resolution script that can later
 * * be called to execute the proposal is required.
 * * 5. A voter, through the governance module, can call Voting::vote on a proposal. vote requires passing a &ProposalType
 * * and thus only the governance module that registers ProposalType can call vote.
 * * 6. Once the proposal's expiration time has passed and more than the defined threshold has voted yes on the proposal,
 * * anyone can call resolve which returns the content of the proposal (of type ProposalType) that can be used to execute.
 * * 7. Only the resolution script with the same script hash specified in the proposal can call Voting::resolve as part of
 * * the resolution process.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Voting"
> as typeof moduleImpl;
