/**
 *
 * Validator lifecycle:
 * 1. Prepare a validator node set up and call Stake::register_validator_candidate
 * 2. Once ready to deposit stake (or have funds assigned by a staking service in exchange for ownership capability),
 * call Stake::add_stake and Stake::increase_lockup (or *_with_cap versions if called from the staking service)
 * 3. Call Stake::join_validator_set (or _with_cap version) to join the active validator set. Changes are effective in
 * the next epoch.
 * 4. Validate and gain rewards.
 * 5. At any point, if the validator operator wants to switch validator node operator, they can call
 * Stake::rotate_consensus_key.
 * 6. When lockup has expired, validator (or the owner of owner capability) can choose to either (1) increase the lockup
 * to keep validating and receiving rewards, or (2) call Stake::unlock to unlock their stake and Stake::withdraw to
 * withdraw in the next epoch.
 * 7. After exiting, the validator can either explicitly leave the validator set by calling Stake::leave_validator_set
 * or if their stake drops below the min required, they would get removed at the end of the epoch.
 * 8. Validator can always rejoin the validator set by going through steps 2-3 again.
 * 9. Owner can always switch operators by calling Stake::set_operator.
 *
 * **Module ID:** `0x1::stake`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::stake::AddStakeEvent` */
export interface IAddStakeEvent {
  pool_address: p.RawAddress;
  amount_added: p.U64;
}

/**
 * AptosCoin capabilities, set during genesis and stored in @CoreResource account.
 * This allows the Stake module to mint rewards to stakers.
 *
 * Type name: `0x1::stake::AptosCoinCapabilities`
 */
export interface IAptosCoinCapabilities {
  mint_cap: {
    dummy_field: boolean;
  };
}

/** Type name: `0x1::stake::DistributeRewardsEvent` */
export interface IDistributeRewardsEvent {
  pool_address: p.RawAddress;
  rewards_amount: p.U64;
}

/** Type name: `0x1::stake::IncreaseLockupEvent` */
export interface IIncreaseLockupEvent {
  pool_address: p.RawAddress;
  old_locked_until_secs: p.U64;
  new_locked_until_secs: p.U64;
}

/** Type name: `0x1::stake::JoinValidatorSetEvent` */
export interface IJoinValidatorSetEvent {
  pool_address: p.RawAddress;
}

/** Type name: `0x1::stake::LeaveValidatorSetEvent` */
export interface ILeaveValidatorSetEvent {
  pool_address: p.RawAddress;
}

/**
 * Capability that represents ownership and can be used to control the validator and the associated stake pool.
 * Having this be separate from the signer for the account that the validator resources are hosted at allows
 * modules to have control over a validator.
 *
 * Type name: `0x1::stake::OwnerCapability`
 */
export interface IOwnerCapability {
  pool_address: p.RawAddress;
}

/** Type name: `0x1::stake::RegisterValidatorCandidateEvent` */
export interface IRegisterValidatorCandidateEvent {
  pool_address: p.RawAddress;
}

/** Type name: `0x1::stake::RotateConsensusKeyEvent` */
export interface IRotateConsensusKeyEvent {
  pool_address: p.RawAddress;
  old_consensus_pubkey: p.ByteString;
  new_consensus_pubkey: p.ByteString;
}

/** Type name: `0x1::stake::SetOperatorEvent` */
export interface ISetOperatorEvent {
  pool_address: p.RawAddress;
  old_operator: p.RawAddress;
  new_operator: p.RawAddress;
}

/**
 * Each validator has a separate StakePool resource and can provide a stake.
 * Changes in stake for an active validator:
 * 1. If a validator calls add_stake, the newly added stake is moved to pending_active.
 * 2. If validator calls unlock, their stake is moved to pending_inactive.
 * 2. When the next epoch starts, any pending_inactive stake is moved to inactive and can be withdrawn.
 *    Any pending_active stake is moved to active and adds to the validator's voting power.
 *
 * Changes in stake for an inactive validator:
 * 1. If a validator calls add_stake, the newly added stake is moved directly to active.
 * 2. If validator calls unlock, their stake is moved directly to inactive.
 * 3. When the next epoch starts, the validator can be activated if their active stake is more than the minimum.
 *
 * Type name: `0x1::stake::StakePool`
 */
export interface IStakePool {
  active: {
    /** Amount of coin this address has. */
    value: p.U64;
  };
  inactive: {
    /** Amount of coin this address has. */
    value: p.U64;
  };
  pending_active: {
    /** Amount of coin this address has. */
    value: p.U64;
  };
  pending_inactive: {
    /** Amount of coin this address has. */
    value: p.U64;
  };
  locked_until_secs: p.U64;
  operator_address: p.RawAddress;
  delegated_voter: p.RawAddress;
}

/**
 * The events emitted for the entire StakePool's lifecycle.
 *
 * Type name: `0x1::stake::StakePoolEvents`
 */
export interface IStakePoolEvents {
  register_validator_candidate_events: {
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
  set_operator_events: {
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
  add_stake_events: {
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
  rotate_consensus_key_events: {
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
  update_network_and_fullnode_addresses_events: {
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
  increase_lockup_events: {
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
  join_validator_set_events: {
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
  distribute_rewards_events: {
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
  unlock_stake_events: {
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
  withdraw_stake_events: {
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
  leave_validator_set_events: {
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

/** Type name: `0x1::stake::UnlockStakeEvent` */
export interface IUnlockStakeEvent {
  pool_address: p.RawAddress;
  amount_unlocked: p.U64;
}

/** Type name: `0x1::stake::UpdateNetworkAndFullnodeAddressesEvent` */
export interface IUpdateNetworkAndFullnodeAddressesEvent {
  pool_address: p.RawAddress;
  old_network_addresses: p.ByteString;
  new_network_addresses: p.ByteString;
  old_fullnode_addresses: p.ByteString;
  new_fullnode_addresses: p.ByteString;
}

/**
 * Validator info stored in validator address.
 *
 * Type name: `0x1::stake::ValidatorConfig`
 */
export interface IValidatorConfig {
  consensus_pubkey: p.ByteString;
  network_addresses: p.ByteString;
  fullnode_addresses: p.ByteString;
  validator_index: p.U64;
}

/**
 * Consensus information per validator, stored in ValidatorSet.
 *
 * Type name: `0x1::stake::ValidatorInfo`
 */
export interface IValidatorInfo {
  addr: p.RawAddress;
  voting_power: p.U64;
  config: {
    consensus_pubkey: p.ByteString;
    network_addresses: p.ByteString;
    fullnode_addresses: p.ByteString;
    validator_index: p.U64;
  };
}

/** Type name: `0x1::stake::ValidatorPerformance` */
export interface IValidatorPerformance {
  num_blocks: p.U64;
  missed_votes: ReadonlyArray<p.U64>;
}

/**
 * Full ValidatorSet, stored in @aptos_framework.
 * 1. join_validator_set adds to pending_active queue.
 * 2. leave_valdiator_set moves from active to pending_inactive queue.
 * 3. on_new_epoch processes two pending queues and refresh ValidatorInfo from the owner's address.
 *
 * Type name: `0x1::stake::ValidatorSet`
 */
export interface IValidatorSet {
  consensus_scheme: number;
  active_validators: ReadonlyArray<{
    addr: p.RawAddress;
    voting_power: p.U64;
    config: {
      consensus_pubkey: p.ByteString;
      network_addresses: p.ByteString;
      fullnode_addresses: p.ByteString;
      validator_index: p.U64;
    };
  }>;
  pending_inactive: ReadonlyArray<{
    addr: p.RawAddress;
    voting_power: p.U64;
    config: {
      consensus_pubkey: p.ByteString;
      network_addresses: p.ByteString;
      fullnode_addresses: p.ByteString;
      validator_index: p.U64;
    };
  }>;
  pending_active: ReadonlyArray<{
    addr: p.RawAddress;
    voting_power: p.U64;
    config: {
      consensus_pubkey: p.ByteString;
      network_addresses: p.ByteString;
      fullnode_addresses: p.ByteString;
      validator_index: p.U64;
    };
  }>;
}

/**
 * Validator set configurations that will be stored with the @aptos_framework account.
 *
 * Type name: `0x1::stake::ValidatorSetConfiguration`
 */
export interface IValidatorSetConfiguration {
  minimum_stake: p.U64;
  maximum_stake: p.U64;
  min_lockup_duration_secs: p.U64;
  max_lockup_duration_secs: p.U64;
  allow_validator_set_change: boolean;
  rewards_rate: p.U64;
  rewards_rate_denominator: p.U64;
}

/** Type name: `0x1::stake::WithdrawStakeEvent` */
export interface IWithdrawStakeEvent {
  pool_address: p.RawAddress;
  amount_withdrawn: p.U64;
}

/** Payload arguments for {@link entry.withdraw}. */
export type WithdrawArgs = {
  args: {
    /** IDL type: `U64` */
    withdraw_amount: p.U64;
  };
};

/** Payload arguments for {@link entry.add_stake}. */
export type AddStakeArgs = {
  args: {
    /** IDL type: `U64` */
    amount: p.U64;
  };
};

/** Payload arguments for {@link entry.increase_lockup}. */
export type IncreaseLockupArgs = {
  args: {
    /** IDL type: `U64` */
    new_locked_until_secs: p.U64;
  };
};

/** Payload arguments for {@link entry.join_validator_set}. */
export type JoinValidatorSetArgs = {
  args: {
    /** IDL type: `Address` */
    pool_address: p.RawAddress;
  };
};

/** Payload arguments for {@link entry.leave_validator_set}. */
export type LeaveValidatorSetArgs = {
  args: {
    /** IDL type: `Address` */
    pool_address: p.RawAddress;
  };
};

/** Payload arguments for {@link entry.register_validator_candidate}. */
export type RegisterValidatorCandidateArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    consensus_pubkey: p.ByteString;
    /** IDL type: `Vector(U8)` */
    proof_of_possession: p.ByteString;
    /** IDL type: `Vector(U8)` */
    network_addresses: p.ByteString;
    /** IDL type: `Vector(U8)` */
    fullnode_addresses: p.ByteString;
  };
};

/** Payload arguments for {@link entry.rotate_consensus_key}. */
export type RotateConsensusKeyArgs = {
  args: {
    /** IDL type: `Address` */
    pool_address: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    new_consensus_pubkey: p.ByteString;
    /** IDL type: `Vector(U8)` */
    proof_of_possession: p.ByteString;
  };
};

/** Payload arguments for {@link entry.set_delegated_voter}. */
export type SetDelegatedVoterArgs = {
  args: {
    /** IDL type: `Address` */
    new_delegated_voter: p.RawAddress;
  };
};

/** Payload arguments for {@link entry.set_operator}. */
export type SetOperatorArgs = {
  args: {
    /** IDL type: `Address` */
    new_operator: p.RawAddress;
  };
};

/** Payload arguments for {@link entry.unlock}. */
export type UnlockArgs = {
  args: {
    /** IDL type: `U64` */
    amount: p.U64;
  };
};

/** Payload arguments for {@link entry.update_network_and_fullnode_addresses}. */
export type UpdateNetworkAndFullnodeAddressesArgs = {
  args: {
    /** IDL type: `Address` */
    pool_address: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    new_network_addresses: p.ByteString;
    /** IDL type: `Vector(U8)` */
    new_fullnode_addresses: p.ByteString;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::stake" as const;
/** The name of the module. */
export const NAME = "stake" as const;

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
    name: "ELOCK_TIME_TOO_SHORT",
    doc: "Lockup period is shorter than required.",
  },
  "2": {
    name: "EWITHDRAW_NOT_ALLOWED",
    doc: "Withdraw not allowed, the stake is still locked.",
  },
  "3": {
    name: "EVALIDATOR_CONFIG",
    doc: "Validator Config not published.",
  },
  "4": {
    name: "ESTAKE_TOO_LOW",
    doc: "Not enough stake to join validator set.",
  },
  "5": {
    name: "ESTAKE_TOO_HIGH",
    doc: "Too much stake to join validator set.",
  },
  "6": {
    name: "EALREADY_ACTIVE_VALIDATOR",
    doc: "Account is already a validator or pending validator.",
  },
  "7": {
    name: "ENOT_VALIDATOR",
    doc: "Account is not a validator.",
  },
  "8": {
    name: "ELAST_VALIDATOR",
    doc: "Can't remove last validator.",
  },
  "9": {
    name: "ESTAKE_EXCEEDS_MAX",
    doc: "Total stake exceeds maximum allowed.",
  },
  "10": {
    name: "EALREADY_REGISTERED",
    doc: "Account is already registered as a validator candidate.",
  },
  "11": {
    name: "ENOT_OWNER",
    doc: "Account does not have the right ownership capability.",
  },
  "12": {
    name: "ENO_COINS_TO_WITHDRAW",
    doc: "No coins in inactive state to withdraw from specified pool.",
  },
  "13": {
    name: "ENOT_OPERATOR",
    doc: "Account does not have the right operator capability.",
  },
  "14": {
    name: "ELOCK_TIME_TOO_LONG",
    doc: "Lockup period is longer than allowed.",
  },
  "15": {
    name: "ENO_POST_GENESIS_VALIDATOR_SET_CHANGE_ALLOWED",
  },
  "16": {
    name: "EINVALID_PUBLIC_KEY",
    doc: "Invalid consensus public key",
  },
  "17": {
    name: "EINVALID_STAKE_RANGE",
    doc: "Invalid required stake range, usually happens if min > max.",
  },
  "18": {
    name: "EINVALID_LOCKUP_RANGE",
    doc: "Invalid required stake lockup, usually happens if min > max.",
  },
  "19": {
    name: "EINVALID_REWARDS_RATE",
    doc: "Invalid rewards rate.",
  },
  "20": {
    name: "EINVALID_STAKE_AMOUNT",
    doc: "Invalid stake amount (usuaully 0).",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  add_stake: {
    name: "add_stake",
    doc: "Add `amount` of coins from the `account` owning the StakePool.",
    ty_args: [],
    args: [
      {
        name: "amount",
        ty: "u64",
      },
    ],
  },
  increase_lockup: {
    name: "increase_lockup",
    doc: "Similar to increase_lockup_with_cap but will use ownership capability from the signing account.",
    ty_args: [],
    args: [
      {
        name: "new_locked_until_secs",
        ty: "u64",
      },
    ],
  },
  join_validator_set: {
    name: "join_validator_set",
    doc: "This can only called by the operator of the validator/staking pool.",
    ty_args: [],
    args: [
      {
        name: "pool_address",
        ty: "address",
      },
    ],
  },
  leave_validator_set: {
    name: "leave_validator_set",
    doc: "Request to have `pool_address` leave the validator set. The validator is only actually removed from the set when\nthe next epoch starts.\nThe last validator in the set cannot leave. This is an edge case that should never happen as long as the network\nis still operational.\n\nCan only be called by the operator of the validator/staking pool.",
    ty_args: [],
    args: [
      {
        name: "pool_address",
        ty: "address",
      },
    ],
  },
  register_validator_candidate: {
    name: "register_validator_candidate",
    doc: "Initialize the validator account and give ownership to the signing account.",
    ty_args: [],
    args: [
      {
        name: "consensus_pubkey",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "proof_of_possession",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "network_addresses",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "fullnode_addresses",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
  rotate_consensus_key: {
    name: "rotate_consensus_key",
    doc: "Rotate the consensus key of the validator, it'll take effect in next epoch.",
    ty_args: [],
    args: [
      {
        name: "pool_address",
        ty: "address",
      },
      {
        name: "new_consensus_pubkey",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "proof_of_possession",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
  set_delegated_voter: {
    name: "set_delegated_voter",
    doc: "Allows an owner to change the delegated voter of the stake pool.",
    ty_args: [],
    args: [
      {
        name: "new_delegated_voter",
        ty: "address",
      },
    ],
  },
  set_operator: {
    name: "set_operator",
    doc: "Allows an owner to change the operator of the stake pool.",
    ty_args: [],
    args: [
      {
        name: "new_operator",
        ty: "address",
      },
    ],
  },
  unlock: {
    name: "unlock",
    doc: "Similar to unlock_with_cap but will use ownership capability from the signing account.",
    ty_args: [],
    args: [
      {
        name: "amount",
        ty: "u64",
      },
    ],
  },
  update_network_and_fullnode_addresses: {
    name: "update_network_and_fullnode_addresses",
    doc: "Update the network and full node addresses of the validator. This only takes effect in the next epoch.",
    ty_args: [],
    args: [
      {
        name: "pool_address",
        ty: "address",
      },
      {
        name: "new_network_addresses",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "new_fullnode_addresses",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
  withdraw: {
    name: "withdraw",
    doc: "Withdraw from `account`'s inactive stake.",
    ty_args: [],
    args: [
      {
        name: "withdraw_amount",
        ty: "u64",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  AptosCoinCapabilities: "0x1::stake::AptosCoinCapabilities",
  OwnerCapability: "0x1::stake::OwnerCapability",
  StakePool: "0x1::stake::StakePool",
  StakePoolEvents: "0x1::stake::StakePoolEvents",
  ValidatorConfig: "0x1::stake::ValidatorConfig",
  ValidatorPerformance: "0x1::stake::ValidatorPerformance",
  ValidatorSet: "0x1::stake::ValidatorSet",
  ValidatorSetConfiguration: "0x1::stake::ValidatorSetConfiguration",
} as const;

/** All struct types. */
export const structs = {
  AddStakeEvent: "0x1::stake::AddStakeEvent",
  AptosCoinCapabilities: "0x1::stake::AptosCoinCapabilities",
  DistributeRewardsEvent: "0x1::stake::DistributeRewardsEvent",
  IncreaseLockupEvent: "0x1::stake::IncreaseLockupEvent",
  JoinValidatorSetEvent: "0x1::stake::JoinValidatorSetEvent",
  LeaveValidatorSetEvent: "0x1::stake::LeaveValidatorSetEvent",
  OwnerCapability: "0x1::stake::OwnerCapability",
  RegisterValidatorCandidateEvent:
    "0x1::stake::RegisterValidatorCandidateEvent",
  RotateConsensusKeyEvent: "0x1::stake::RotateConsensusKeyEvent",
  SetOperatorEvent: "0x1::stake::SetOperatorEvent",
  StakePool: "0x1::stake::StakePool",
  StakePoolEvents: "0x1::stake::StakePoolEvents",
  UnlockStakeEvent: "0x1::stake::UnlockStakeEvent",
  UpdateNetworkAndFullnodeAddressesEvent:
    "0x1::stake::UpdateNetworkAndFullnodeAddressesEvent",
  ValidatorConfig: "0x1::stake::ValidatorConfig",
  ValidatorInfo: "0x1::stake::ValidatorInfo",
  ValidatorPerformance: "0x1::stake::ValidatorPerformance",
  ValidatorSet: "0x1::stake::ValidatorSet",
  ValidatorSetConfiguration: "0x1::stake::ValidatorSetConfiguration",
  WithdrawStakeEvent: "0x1::stake::WithdrawStakeEvent",
} as const;

/** Payload generators for module `0x1::stake`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 *
 * Validator lifecycle:
 * 1. Prepare a validator node set up and call Stake::register_validator_candidate
 * 2. Once ready to deposit stake (or have funds assigned by a staking service in exchange for ownership capability),
 * call Stake::add_stake and Stake::increase_lockup (or *_with_cap versions if called from the staking service)
 * 3. Call Stake::join_validator_set (or _with_cap version) to join the active validator set. Changes are effective in
 * the next epoch.
 * 4. Validate and gain rewards.
 * 5. At any point, if the validator operator wants to switch validator node operator, they can call
 * Stake::rotate_consensus_key.
 * 6. When lockup has expired, validator (or the owner of owner capability) can choose to either (1) increase the lockup
 * to keep validating and receiving rewards, or (2) call Stake::unlock to unlock their stake and Stake::withdraw to
 * withdraw in the next epoch.
 * 7. After exiting, the validator can either explicitly leave the validator set by calling Stake::leave_validator_set
 * or if their stake drops below the min required, they would get removed at the end of the epoch.
 * 8. Validator can always rejoin the validator set by going through steps 2-3 again.
 * 9. Owner can always switch operators by calling Stake::set_operator.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "stake"
> as typeof moduleImpl;
