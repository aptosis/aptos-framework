/**
 *
 * * AptosGovernance represents the on-chain governance of the Aptos network. Voting power is calculated based on the
 * * current epoch's voting power of the proposer or voter's backing stake pool. In addition, for it to count,
 * * the stake pool's lockup needs to be at least as long as the proposal's duration.
 * *
 * * It provides the following flow:
 * * 1. Proposers can create a proposal by calling AptosGovernance::create_proposal. The proposer's backing stake pool
 * * needs to have the minimum proposer stake required. Off-chain components can subscribe to CreateProposalEvent to
 * * track proposal creation and proposal ids.
 * * 2. Voters can vote on a proposal. Their voting power is derived from the backing stake pool. Each stake pool can
 * * only be used to vote on each proposal exactly once.
 * *
 *
 *
 * **Module ID:** `0x1::aptos_governance`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Event emitted when a proposal is created.
 *
 * Type name: `0x1::aptos_governance::CreateProposalEvent`
 */
export interface ICreateProposalEvent {
  proposer: p.RawAddress;
  stake_pool: p.RawAddress;
  proposal_id: p.U64;
  execution_hash: p.ByteString;
  metadata_location: p.ByteString;
  metadata_hash: p.ByteString;
}

/**
 * Event emitted when there's a vote on a proposa;
 *
 * Type name: `0x1::aptos_governance::VoteEvent`
 */
export interface IVoteEvent {
  proposal_id: p.U64;
  voter: p.RawAddress;
  stake_pool: p.RawAddress;
  num_votes: p.U64;
  should_pass: boolean;
}

/**
 * Configurations of the AptosGovernance, set during Genesis and can be updated by the same process offered
 * by this AptosGovernance module.
 *
 * Type name: `0x1::aptos_governance::GovernanceConfig`
 */
export interface IGovernanceConfig {
  min_voting_threshold: p.U128;
  required_proposer_stake: p.U64;
  voting_period_secs: p.U64;
}

/**
 * Events generated by interactions with the AptosGovernance module.
 *
 * Type name: `0x1::aptos_governance::GovernanceEvents`
 */
export interface IGovernanceEvents {
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
  update_config_events: {
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

/**
 * Store the SignerCapability of the framework account (0x1) so AptosGovernance can have control over it.
 *
 * Type name: `0x1::aptos_governance::GovernanceResponsbility`
 */
export interface IGovernanceResponsbility {
  signer_cap: {
    account: p.RawAddress;
  };
}

/** Type name: `0x1::aptos_governance::RecordKey` */
export interface IRecordKey {
  stake_pool: p.RawAddress;
  proposal_id: p.U64;
}

/**
 * Event emitted when the governance configs are updated.
 *
 * Type name: `0x1::aptos_governance::UpdateConfigEvent`
 */
export interface IUpdateConfigEvent {
  min_voting_threshold: p.U128;
  required_proposer_stake: p.U64;
  voting_period_secs: p.U64;
}

/**
 * Records to track the proposals each stake pool has been used to vote on.
 *
 * Type name: `0x1::aptos_governance::VotingRecords`
 */
export interface IVotingRecords {
  votes: {
    handle: p.U128;
  };
}

/** Payload arguments for {@link entry.create_proposal}. */
export type CreateProposalArgs = {
  args: {
    /** IDL type: `Address` */
    stake_pool: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    execution_hash: p.ByteString;
    /** IDL type: `Vector(U8)` */
    metadata_location: p.ByteString;
    /** IDL type: `Vector(U8)` */
    metadata_hash: p.ByteString;
  };
};

/** Payload arguments for {@link entry.vote}. */
export type VoteArgs = {
  args: {
    /** IDL type: `Address` */
    stake_pool: p.RawAddress;
    /** IDL type: `U64` */
    proposal_id: p.U64;
    /** IDL type: `Bool` */
    should_pass: boolean;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::aptos_governance" as const;
/** The name of the module. */
export const NAME = "aptos_governance" as const;

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
    name: "EINSUFFICIENT_PROPOSER_STAKE",
    doc: "Error codes.",
  },
  "2": {
    name: "ENOT_DELEGATED_VOTER",
  },
  "3": {
    name: "EINSUFFICIENT_STAKE_LOCKUP",
  },
  "4": {
    name: "EALREADY_VOTED",
  },
  "5": {
    name: "ENO_VOTING_POWER",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  create_proposal: {
    name: "create_proposal",
    doc: "Create a proposal with the backing `stake_pool`.\n@param execution_hash Required. This is the hash of the resolution script. When the proposal is resolved,\nonly the exact script with matching hash can be successfully executed.",
    ty_args: [],
    args: [
      {
        name: "stake_pool",
        ty: "address",
      },
      {
        name: "execution_hash",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "metadata_location",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "metadata_hash",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
  vote: {
    name: "vote",
    doc: "Vote on proposal with `proposal_id` and voting power from `stake_pool`.",
    ty_args: [],
    args: [
      {
        name: "stake_pool",
        ty: "address",
      },
      {
        name: "proposal_id",
        ty: "u64",
      },
      {
        name: "should_pass",
        ty: "bool",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  GovernanceConfig: "0x1::aptos_governance::GovernanceConfig",
  GovernanceEvents: "0x1::aptos_governance::GovernanceEvents",
  GovernanceResponsbility: "0x1::aptos_governance::GovernanceResponsbility",
  VotingRecords: "0x1::aptos_governance::VotingRecords",
} as const;

/** All struct types. */
export const structs = {
  CreateProposalEvent: "0x1::aptos_governance::CreateProposalEvent",
  GovernanceConfig: "0x1::aptos_governance::GovernanceConfig",
  GovernanceEvents: "0x1::aptos_governance::GovernanceEvents",
  GovernanceResponsbility: "0x1::aptos_governance::GovernanceResponsbility",
  RecordKey: "0x1::aptos_governance::RecordKey",
  UpdateConfigEvent: "0x1::aptos_governance::UpdateConfigEvent",
  VoteEvent: "0x1::aptos_governance::VoteEvent",
  VotingRecords: "0x1::aptos_governance::VotingRecords",
} as const;

/** Payload generators for module `0x1::aptos_governance`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 *
 * * AptosGovernance represents the on-chain governance of the Aptos network. Voting power is calculated based on the
 * * current epoch's voting power of the proposer or voter's backing stake pool. In addition, for it to count,
 * * the stake pool's lockup needs to be at least as long as the proposal's duration.
 * *
 * * It provides the following flow:
 * * 1. Proposers can create a proposal by calling AptosGovernance::create_proposal. The proposer's backing stake pool
 * * needs to have the minimum proposer stake required. Off-chain components can subscribe to CreateProposalEvent to
 * * track proposal creation and proposal ids.
 * * 2. Voters can vote on a proposal. Their voting power is derived from the backing stake pool. Each stake pool can
 * * only be used to vote on each proposal exactly once.
 * *
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "aptos_governance"
> as typeof moduleImpl;
