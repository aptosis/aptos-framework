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
 * **Module ID:** `0x1::Stake`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type AddStakeEventData = {
  pool_address: string;
  amount_added: string;
};

export type DistributeRewardsEventData = {
  pool_address: string;
  rewards_amount: string;
};

export type IncreaseLockupEventData = {
  pool_address: string;
  old_locked_until_secs: string;
  new_locked_until_secs: string;
};

export type JoinValidatorSetEventData = {
  pool_address: string;
};

export type LeaveValidatorSetEventData = {
  pool_address: string;
};

/**
 * Capability that represents ownership and can be used to control the validator and the associated stake pool.
 * Having this be separate from the signer for the account that the validator resources are hosted at allows
 * modules to have control over a validator.
 */
export type OwnerCapabilityData = {
  pool_address: string;
};

export type RegisterValidatorCandidateEventData = {
  pool_address: string;
};

export type RotateConsensusKeyEventData = {
  pool_address: string;
  old_consensus_pubkey: string;
  new_consensus_pubkey: string;
};

export type SetOperatorEventData = {
  pool_address: string;
  old_operator: string;
  new_operator: string;
};

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
 */
export type StakePoolData = {
  active: {
    /** Amount of coin this address has. */
    value: string;
  };
  inactive: {
    /** Amount of coin this address has. */
    value: string;
  };
  pending_active: {
    /** Amount of coin this address has. */
    value: string;
  };
  pending_inactive: {
    /** Amount of coin this address has. */
    value: string;
  };
  locked_until_secs: string;
  operator_address: string;
  delegated_voter: string;
};

/** The events emitted for the entire StakePool's lifecycle. */
export type StakePoolEventsData = {
  register_validator_candidate_events: {
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
  set_operator_events: {
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
  add_stake_events: {
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
  rotate_consensus_key_events: {
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
  increase_lockup_events: {
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
  join_validator_set_events: {
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
  distribute_rewards_events: {
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
  unlock_stake_events: {
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
  withdraw_stake_events: {
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
  leave_validator_set_events: {
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

/**
 * TestCoin capabilities, set during genesis and stored in @CoreResource account.
 * This allows the Stake module to mint rewards to stakers.
 */
export type TestCoinCapabilitiesData = {
  mint_cap: {
    dummy_field: boolean;
  };
};

export type UnlockStakeEventData = {
  pool_address: string;
  amount_unlocked: string;
};

/** Validator info stored in validator address. */
export type ValidatorConfigData = {
  consensus_pubkey: string;
  network_addresses: string;
  fullnode_addresses: string;
  validator_index: string;
};

/** Consensus information per validator, stored in ValidatorSet. */
export type ValidatorInfoData = {
  addr: string;
  voting_power: string;
  config: {
    consensus_pubkey: string;
    network_addresses: string;
    fullnode_addresses: string;
    validator_index: string;
  };
};

export type ValidatorPerformanceData = {
  num_blocks: string;
  missed_votes: ReadonlyArray<string>;
};

/**
 * Full ValidatorSet, stored in @CoreResource.
 * 1. join_validator_set adds to pending_active queue.
 * 2. leave_valdiator_set moves from active to pending_inactive queue.
 * 3. on_new_epoch processes two pending queues and refresh ValidatorInfo from the owner's address.
 */
export type ValidatorSetData = {
  consensus_scheme: number;
  active_validators: ReadonlyArray<{
    addr: string;
    voting_power: string;
    config: {
      consensus_pubkey: string;
      network_addresses: string;
      fullnode_addresses: string;
      validator_index: string;
    };
  }>;
  pending_inactive: ReadonlyArray<{
    addr: string;
    voting_power: string;
    config: {
      consensus_pubkey: string;
      network_addresses: string;
      fullnode_addresses: string;
      validator_index: string;
    };
  }>;
  pending_active: ReadonlyArray<{
    addr: string;
    voting_power: string;
    config: {
      consensus_pubkey: string;
      network_addresses: string;
      fullnode_addresses: string;
      validator_index: string;
    };
  }>;
};

/** Validator set configurations that will be stored with the @CoreResources account. */
export type ValidatorSetConfigurationData = {
  minimum_stake: string;
  maximum_stake: string;
  min_lockup_duration_secs: string;
  max_lockup_duration_secs: string;
  allow_validator_set_change: boolean;
  rewards_rate: string;
  rewards_rate_denominator: string;
};

export type WithdrawStakeEventData = {
  pool_address: string;
  amount_withdrawn: string;
};

/** Payload arguments for {@link entry.add_stake}. */
export type AddStakeArgs = {
  args: {
    /** IDL type: `U64` */
    amount: string;
  };
};

/** Payload arguments for {@link entry.increase_lockup}. */
export type IncreaseLockupArgs = {
  args: {
    /** IDL type: `U64` */
    new_locked_until_secs: string;
  };
};

/** Payload arguments for {@link entry.join_validator_set}. */
export type JoinValidatorSetArgs = {
  args: {
    /** IDL type: `Address` */
    pool_address: string;
  };
};

/** Payload arguments for {@link entry.leave_validator_set}. */
export type LeaveValidatorSetArgs = {
  args: {
    /** IDL type: `Address` */
    pool_address: string;
  };
};

/** Payload arguments for {@link entry.register_validator_candidate}. */
export type RegisterValidatorCandidateArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    consensus_pubkey: string;
    /** IDL type: `Vector(U8)` */
    proof_of_possession: string;
    /** IDL type: `Vector(U8)` */
    network_addresses: string;
    /** IDL type: `Vector(U8)` */
    fullnode_addresses: string;
  };
};

/** Payload arguments for {@link entry.rotate_consensus_key}. */
export type RotateConsensusKeyArgs = {
  args: {
    /** IDL type: `Address` */
    pool_address: string;
    /** IDL type: `Vector(U8)` */
    new_consensus_pubkey: string;
    /** IDL type: `Vector(U8)` */
    proof_of_possession: string;
  };
};

/** Payload arguments for {@link entry.set_delegated_voter}. */
export type SetDelegatedVoterArgs = {
  args: {
    /** IDL type: `Address` */
    new_delegated_voter: string;
  };
};

/** Payload arguments for {@link entry.set_operator}. */
export type SetOperatorArgs = {
  args: {
    /** IDL type: `Address` */
    new_operator: string;
  };
};

/** Payload arguments for {@link entry.unlock}. */
export type UnlockArgs = {
  args: {
    /** IDL type: `U64` */
    amount: string;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Stake" as const;
/** The name of the module. */
export const NAME = "Stake" as const;

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
  withdraw: {
    name: "withdraw",
    doc: "Withdraw from `account`'s inactive stake.",
    ty_args: [],
    args: [],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  OwnerCapability: "0x1::Stake::OwnerCapability",
  StakePool: "0x1::Stake::StakePool",
  StakePoolEvents: "0x1::Stake::StakePoolEvents",
  TestCoinCapabilities: "0x1::Stake::TestCoinCapabilities",
  ValidatorConfig: "0x1::Stake::ValidatorConfig",
  ValidatorPerformance: "0x1::Stake::ValidatorPerformance",
  ValidatorSet: "0x1::Stake::ValidatorSet",
  ValidatorSetConfiguration: "0x1::Stake::ValidatorSetConfiguration",
} as const;

/** All struct types. */
export const structs = {
  AddStakeEvent: "0x1::Stake::AddStakeEvent",
  DistributeRewardsEvent: "0x1::Stake::DistributeRewardsEvent",
  IncreaseLockupEvent: "0x1::Stake::IncreaseLockupEvent",
  JoinValidatorSetEvent: "0x1::Stake::JoinValidatorSetEvent",
  LeaveValidatorSetEvent: "0x1::Stake::LeaveValidatorSetEvent",
  OwnerCapability: "0x1::Stake::OwnerCapability",
  RegisterValidatorCandidateEvent:
    "0x1::Stake::RegisterValidatorCandidateEvent",
  RotateConsensusKeyEvent: "0x1::Stake::RotateConsensusKeyEvent",
  SetOperatorEvent: "0x1::Stake::SetOperatorEvent",
  StakePool: "0x1::Stake::StakePool",
  StakePoolEvents: "0x1::Stake::StakePoolEvents",
  TestCoinCapabilities: "0x1::Stake::TestCoinCapabilities",
  UnlockStakeEvent: "0x1::Stake::UnlockStakeEvent",
  ValidatorConfig: "0x1::Stake::ValidatorConfig",
  ValidatorInfo: "0x1::Stake::ValidatorInfo",
  ValidatorPerformance: "0x1::Stake::ValidatorPerformance",
  ValidatorSet: "0x1::Stake::ValidatorSet",
  ValidatorSetConfiguration: "0x1::Stake::ValidatorSetConfiguration",
  WithdrawStakeEvent: "0x1::Stake::WithdrawStakeEvent",
} as const;

/** Payload generators for module `0x1::Stake`. */
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
  "Stake"
> as typeof moduleImpl;
