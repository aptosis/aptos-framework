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
 * **Module ID:** `0x1::Voting`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type CreateProposalEventData = {
  proposal_id: string;
  early_resolution_vote_threshold: {
    vec: ReadonlyArray<string>;
  };
  execution_hash: string;
  expiration_secs: string;
  min_vote_threshold: string;
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
  execution_hash: string;

  /** A proposal is only resolved if expiration has passed and the number of votes is above threshold. */
  min_vote_threshold: string;
  expiration_secs: string;

  /**
   * Optional. Early resolution threshold. If specified, the proposal can be resolved early if the total
   * number of yes or no votes passes this threshold.
   * For example, this can be set to 50% of the total supply of the voting token, so if > 50% vote yes or no,
   * the proposal can be resolved before expiration.
   */
  early_resolution_vote_threshold: {
    vec: ReadonlyArray<string>;
  };

  /**
   * Number of votes for each outcome.
   * u128 since the voting power is already u64 and can add up to more than u64 can hold.
   */
  yes_votes: string;
  no_votes: string;
};

export type RegisterForumEventData = {
  hosting_account: string;
  proposal_type_info: {
    account_address: string;
    module_name: string;
    struct_name: string;
  };
};

export type ResolveProposalData = {
  proposal_id: string;
  yes_votes: string;
  no_votes: string;
  resolved_early: boolean;
};

export type VoteEventData = {
  proposal_id: string;
  num_votes: string;
};

export type VotingEventsData = {
  create_proposal_events: {
    /** Total number of events emitted to this event stream. */
    counter: string;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: string;

          /** Address that created the GUID */
          addr: string;
        };
      };
    };
  };
  register_forum_events: {
    /** Total number of events emitted to this event stream. */
    counter: string;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: string;

          /** Address that created the GUID */
          addr: string;
        };
      };
    };
  };
  resolve_proposal_events: {
    /** Total number of events emitted to this event stream. */
    counter: string;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: string;

          /** Address that created the GUID */
          addr: string;
        };
      };
    };
  };
  vote_events: {
    /** Total number of events emitted to this event stream. */
    counter: string;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: string;

          /** Address that created the GUID */
          addr: string;
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
    handle: string;
    length: string;
  };
  events: {
    create_proposal_events: {
      /** Total number of events emitted to this event stream. */
      counter: string;

      /** A globally unique ID for this event stream. */
      guid: {
        len_bytes: number;
        guid: {
          id: {
            /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
            creation_num: string;

            /** Address that created the GUID */
            addr: string;
          };
        };
      };
    };
    register_forum_events: {
      /** Total number of events emitted to this event stream. */
      counter: string;

      /** A globally unique ID for this event stream. */
      guid: {
        len_bytes: number;
        guid: {
          id: {
            /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
            creation_num: string;

            /** Address that created the GUID */
            addr: string;
          };
        };
      };
    };
    resolve_proposal_events: {
      /** Total number of events emitted to this event stream. */
      counter: string;

      /** A globally unique ID for this event stream. */
      guid: {
        len_bytes: number;
        guid: {
          id: {
            /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
            creation_num: string;

            /** Address that created the GUID */
            addr: string;
          };
        };
      };
    };
    vote_events: {
      /** Total number of events emitted to this event stream. */
      counter: string;

      /** A globally unique ID for this event stream. */
      guid: {
        len_bytes: number;
        guid: {
          id: {
            /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
            creation_num: string;

            /** Address that created the GUID */
            addr: string;
          };
        };
      };
    };
  };

  /** Unique identifier for a proposal. This allows for 2 * 10**19 proposals. */
  next_proposal_id: string;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Voting" as const;
/** The name of the module. */
export const NAME = "Voting" as const;

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
  errorCodes,
  functions,
  resources,
  structs,
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
