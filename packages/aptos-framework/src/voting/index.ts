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
 * **Module ID:** `0x1::voting`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::voting::CreateProposalEvent` */
export interface ICreateProposalEvent {
  proposal_id: p.U64;
  early_resolution_vote_threshold: {
    vec: ReadonlyArray<p.U128>;
  };
  execution_hash: p.ByteString;
  expiration_secs: p.U64;
  min_vote_threshold: p.U128;
}

/**
 * Extra metadata (e.g. description, code url) can be part of the ProposalType struct.
 *
 * Type name: `0x1::voting::Proposal`
 */
export interface IProposal<_ProposalType = unknown> {
  /** Required. The address of the proposer. */
  proposer: p.RawAddress;

  /**
   * Required. Should contain enough information to execute later, for example the required capability.
   * This is stored as an option so we can return it to governance when the proposal is resolved.
   */
  execution_content: {
    vec: ReadonlyArray<_ProposalType>;
  };

  /** Timestamp when the proposal was created. */
  creation_time_secs: p.U64;

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

  /** Whether the proposal has been resolved. */
  is_resolved: boolean;
}

/** Type name: `0x1::voting::RegisterForumEvent` */
export interface IRegisterForumEvent {
  hosting_account: p.RawAddress;
  proposal_type_info: {
    account_address: p.RawAddress;
    module_name: p.ByteString;
    struct_name: p.ByteString;
  };
}

/** Type name: `0x1::voting::ResolveProposal` */
export interface IResolveProposal {
  proposal_id: p.U64;
  yes_votes: p.U128;
  no_votes: p.U128;
  resolved_early: boolean;
}

/** Type name: `0x1::voting::VoteEvent` */
export interface IVoteEvent {
  proposal_id: p.U64;
  num_votes: p.U64;
}

/** Type name: `0x1::voting::VotingEvents` */
export interface IVotingEvents {
  create_proposal_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };
  register_forum_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };
  resolve_proposal_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };
  vote_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };
}

/** Type name: `0x1::voting::VotingForum` */
export interface IVotingForum<_ProposalType = unknown> {
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
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
    register_forum_events: {
      /** Total number of events emitted to this event stream. */
      counter: p.U64;

      /** A globally unique ID for this event stream. */
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
    resolve_proposal_events: {
      /** Total number of events emitted to this event stream. */
      counter: p.U64;

      /** A globally unique ID for this event stream. */
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
    vote_events: {
      /** Total number of events emitted to this event stream. */
      counter: p.U64;

      /** A globally unique ID for this event stream. */
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

  /** Unique identifier for a proposal. This allows for 2 * 10**19 proposals. */
  next_proposal_id: p.U64;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::voting" as const;
/** The name of the module. */
export const NAME = "voting" as const;

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
  "3": {
    name: "EPROPOSAL_ALREADY_RESOLVED",
  },
  "4": {
    name: "EPROPOSAL_EMPTY_EXECUTION_HASH",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  VotingForum: "0x1::voting::VotingForum",
} as const;

/** All struct types. */
export const structs = {
  CreateProposalEvent: "0x1::voting::CreateProposalEvent",
  Proposal: "0x1::voting::Proposal",
  RegisterForumEvent: "0x1::voting::RegisterForumEvent",
  ResolveProposal: "0x1::voting::ResolveProposal",
  VoteEvent: "0x1::voting::VoteEvent",
  VotingEvents: "0x1::voting::VotingEvents",
  VotingForum: "0x1::voting::VotingForum",
} as const;

/** Payload generators for module `0x1::voting`. */
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
  "voting"
> as typeof moduleImpl;
