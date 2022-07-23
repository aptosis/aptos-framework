/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::stake",
  doc: "\nValidator lifecycle:\n1. Prepare a validator node set up and call Stake::register_validator_candidate\n2. Once ready to deposit stake (or have funds assigned by a staking service in exchange for ownership capability),\ncall Stake::add_stake and Stake::increase_lockup (or *_with_cap versions if called from the staking service)\n3. Call Stake::join_validator_set (or _with_cap version) to join the active validator set. Changes are effective in\nthe next epoch.\n4. Validate and gain rewards.\n5. At any point, if the validator operator wants to switch validator node operator, they can call\nStake::rotate_consensus_key.\n6. When lockup has expired, validator (or the owner of owner capability) can choose to either (1) increase the lockup\nto keep validating and receiving rewards, or (2) call Stake::unlock to unlock their stake and Stake::withdraw to\nwithdraw in the next epoch.\n7. After exiting, the validator can either explicitly leave the validator set by calling Stake::leave_validator_set\nor if their stake drops below the min required, they would get removed at the end of the epoch.\n8. Validator can always rejoin the validator set by going through steps 2-3 again.\n9. Owner can always switch operators by calling Stake::set_operator.",
  functions: [
    {
      name: "withdraw",
      doc: "Withdraw from `account`'s inactive stake.",
      ty_args: [],
      args: [],
    },
    {
      name: "add_stake",
      doc: "Add `amount` of coins from the `account` owning the StakePool.",
      ty_args: [],
      args: [{ name: "amount", ty: "u64" }],
    },
    {
      name: "increase_lockup",
      doc: "Similar to increase_lockup_with_cap but will use ownership capability from the signing account.",
      ty_args: [],
      args: [{ name: "new_locked_until_secs", ty: "u64" }],
    },
    {
      name: "join_validator_set",
      doc: "This can only called by the operator of the validator/staking pool.",
      ty_args: [],
      args: [{ name: "pool_address", ty: "address" }],
    },
    {
      name: "leave_validator_set",
      doc: "Request to have `pool_address` leave the validator set. The validator is only actually removed from the set when\nthe next epoch starts.\nThe last validator in the set cannot leave. This is an edge case that should never happen as long as the network\nis still operational.\n\nCan only be called by the operator of the validator/staking pool.",
      ty_args: [],
      args: [{ name: "pool_address", ty: "address" }],
    },
    {
      name: "register_validator_candidate",
      doc: "Initialize the validator account and give ownership to the signing account.",
      ty_args: [],
      args: [
        { name: "consensus_pubkey", ty: { vector: "u8" } },
        { name: "proof_of_possession", ty: { vector: "u8" } },
        { name: "network_addresses", ty: { vector: "u8" } },
        { name: "fullnode_addresses", ty: { vector: "u8" } },
      ],
    },
    {
      name: "rotate_consensus_key",
      doc: "Rotate the consensus key of the validator, it'll take effect in next epoch.",
      ty_args: [],
      args: [
        { name: "pool_address", ty: "address" },
        { name: "new_consensus_pubkey", ty: { vector: "u8" } },
        { name: "proof_of_possession", ty: { vector: "u8" } },
      ],
    },
    {
      name: "set_delegated_voter",
      doc: "Allows an owner to change the delegated voter of the stake pool.",
      ty_args: [],
      args: [{ name: "new_delegated_voter", ty: "address" }],
    },
    {
      name: "set_operator",
      doc: "Allows an owner to change the operator of the stake pool.",
      ty_args: [],
      args: [{ name: "new_operator", ty: "address" }],
    },
    {
      name: "unlock",
      doc: "Similar to unlock_with_cap but will use ownership capability from the signing account.",
      ty_args: [],
      args: [{ name: "amount", ty: "u64" }],
    },
    {
      name: "update_network_and_fullnode_addresses",
      doc: "Update the network and full node addresses of the validator. This only takes effect in the next epoch.",
      ty_args: [],
      args: [
        { name: "pool_address", ty: "address" },
        { name: "new_network_addresses", ty: { vector: "u8" } },
        { name: "new_fullnode_addresses", ty: { vector: "u8" } },
      ],
    },
  ],
  structs: [
    {
      name: "0x1::stake::AddStakeEvent",
      fields: [
        { name: "pool_address", ty: "address" },
        { name: "amount_added", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::stake::DistributeRewardsEvent",
      fields: [
        { name: "pool_address", ty: "address" },
        { name: "rewards_amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::stake::IncreaseLockupEvent",
      fields: [
        { name: "pool_address", ty: "address" },
        { name: "old_locked_until_secs", ty: "u64" },
        { name: "new_locked_until_secs", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::stake::JoinValidatorSetEvent",
      fields: [{ name: "pool_address", ty: "address" }],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::stake::LeaveValidatorSetEvent",
      fields: [{ name: "pool_address", ty: "address" }],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::stake::OwnerCapability",
      doc: "Capability that represents ownership and can be used to control the validator and the associated stake pool.\nHaving this be separate from the signer for the account that the validator resources are hosted at allows\nmodules to have control over a validator.",
      fields: [{ name: "pool_address", ty: "address" }],
      abilities: ["store", "key"],
    },
    {
      name: "0x1::stake::RegisterValidatorCandidateEvent",
      fields: [{ name: "pool_address", ty: "address" }],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::stake::RotateConsensusKeyEvent",
      fields: [
        { name: "pool_address", ty: "address" },
        { name: "old_consensus_pubkey", ty: { vector: "u8" } },
        { name: "new_consensus_pubkey", ty: { vector: "u8" } },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::stake::SetOperatorEvent",
      fields: [
        { name: "pool_address", ty: "address" },
        { name: "old_operator", ty: "address" },
        { name: "new_operator", ty: "address" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::stake::StakePool",
      doc: "Each validator has a separate StakePool resource and can provide a stake.\nChanges in stake for an active validator:\n1. If a validator calls add_stake, the newly added stake is moved to pending_active.\n2. If validator calls unlock, their stake is moved to pending_inactive.\n2. When the next epoch starts, any pending_inactive stake is moved to inactive and can be withdrawn.\n   Any pending_active stake is moved to active and adds to the validator's voting power.\n\nChanges in stake for an inactive validator:\n1. If a validator calls add_stake, the newly added stake is moved directly to active.\n2. If validator calls unlock, their stake is moved directly to inactive.\n3. When the next epoch starts, the validator can be activated if their active stake is more than the minimum.",
      fields: [
        {
          name: "active",
          ty: {
            struct: {
              name: "0x1::coin::Coin",
              ty_args: [{ struct: { name: "0x1::test_coin::TestCoin" } }],
            },
          },
        },
        {
          name: "inactive",
          ty: {
            struct: {
              name: "0x1::coin::Coin",
              ty_args: [{ struct: { name: "0x1::test_coin::TestCoin" } }],
            },
          },
        },
        {
          name: "pending_active",
          ty: {
            struct: {
              name: "0x1::coin::Coin",
              ty_args: [{ struct: { name: "0x1::test_coin::TestCoin" } }],
            },
          },
        },
        {
          name: "pending_inactive",
          ty: {
            struct: {
              name: "0x1::coin::Coin",
              ty_args: [{ struct: { name: "0x1::test_coin::TestCoin" } }],
            },
          },
        },
        { name: "locked_until_secs", ty: "u64" },
        { name: "operator_address", ty: "address" },
        { name: "delegated_voter", ty: "address" },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::stake::StakePoolEvents",
      doc: "The events emitted for the entire StakePool's lifecycle.",
      fields: [
        {
          name: "register_validator_candidate_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                {
                  struct: {
                    name: "0x1::stake::RegisterValidatorCandidateEvent",
                  },
                },
              ],
            },
          },
        },
        {
          name: "set_operator_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::stake::SetOperatorEvent" } }],
            },
          },
        },
        {
          name: "add_stake_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::stake::AddStakeEvent" } }],
            },
          },
        },
        {
          name: "rotate_consensus_key_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::stake::RotateConsensusKeyEvent" } },
              ],
            },
          },
        },
        {
          name: "update_network_and_fullnode_addresses_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                {
                  struct: {
                    name: "0x1::stake::UpdateNetworkAndFullnodeAddressesEvent",
                  },
                },
              ],
            },
          },
        },
        {
          name: "increase_lockup_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::stake::IncreaseLockupEvent" } },
              ],
            },
          },
        },
        {
          name: "join_validator_set_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::stake::JoinValidatorSetEvent" } },
              ],
            },
          },
        },
        {
          name: "distribute_rewards_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::stake::DistributeRewardsEvent" } },
              ],
            },
          },
        },
        {
          name: "unlock_stake_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::stake::UnlockStakeEvent" } }],
            },
          },
        },
        {
          name: "withdraw_stake_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::stake::WithdrawStakeEvent" } }],
            },
          },
        },
        {
          name: "leave_validator_set_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::stake::LeaveValidatorSetEvent" } },
              ],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::stake::TestCoinCapabilities",
      doc: "TestCoin capabilities, set during genesis and stored in @CoreResource account.\nThis allows the Stake module to mint rewards to stakers.",
      fields: [
        {
          name: "mint_cap",
          ty: {
            struct: {
              name: "0x1::coin::MintCapability",
              ty_args: [{ struct: { name: "0x1::test_coin::TestCoin" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::stake::UnlockStakeEvent",
      fields: [
        { name: "pool_address", ty: "address" },
        { name: "amount_unlocked", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::stake::UpdateNetworkAndFullnodeAddressesEvent",
      fields: [
        { name: "pool_address", ty: "address" },
        { name: "old_network_addresses", ty: { vector: "u8" } },
        { name: "new_network_addresses", ty: { vector: "u8" } },
        { name: "old_fullnode_addresses", ty: { vector: "u8" } },
        { name: "new_fullnode_addresses", ty: { vector: "u8" } },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::stake::ValidatorConfig",
      doc: "Validator info stored in validator address.",
      fields: [
        { name: "consensus_pubkey", ty: { vector: "u8" } },
        { name: "network_addresses", ty: { vector: "u8" } },
        { name: "fullnode_addresses", ty: { vector: "u8" } },
        { name: "validator_index", ty: "u64" },
      ],
      abilities: ["copy", "drop", "store", "key"],
    },
    {
      name: "0x1::stake::ValidatorInfo",
      doc: "Consensus information per validator, stored in ValidatorSet.",
      fields: [
        { name: "addr", ty: "address" },
        { name: "voting_power", ty: "u64" },
        {
          name: "config",
          ty: { struct: { name: "0x1::stake::ValidatorConfig" } },
        },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::stake::ValidatorPerformance",
      fields: [
        { name: "num_blocks", ty: "u64" },
        { name: "missed_votes", ty: { vector: "u64" } },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::stake::ValidatorSet",
      doc: "Full ValidatorSet, stored in @aptos_framework.\n1. join_validator_set adds to pending_active queue.\n2. leave_valdiator_set moves from active to pending_inactive queue.\n3. on_new_epoch processes two pending queues and refresh ValidatorInfo from the owner's address.",
      fields: [
        { name: "consensus_scheme", ty: "u8" },
        {
          name: "active_validators",
          ty: { vector: { struct: { name: "0x1::stake::ValidatorInfo" } } },
        },
        {
          name: "pending_inactive",
          ty: { vector: { struct: { name: "0x1::stake::ValidatorInfo" } } },
        },
        {
          name: "pending_active",
          ty: { vector: { struct: { name: "0x1::stake::ValidatorInfo" } } },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::stake::ValidatorSetConfiguration",
      doc: "Validator set configurations that will be stored with the @aptos_framework account.",
      fields: [
        { name: "minimum_stake", ty: "u64" },
        { name: "maximum_stake", ty: "u64" },
        { name: "min_lockup_duration_secs", ty: "u64" },
        { name: "max_lockup_duration_secs", ty: "u64" },
        { name: "allow_validator_set_change", ty: "bool" },
        { name: "rewards_rate", ty: "u64" },
        { name: "rewards_rate_denominator", ty: "u64" },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::stake::WithdrawStakeEvent",
      fields: [
        { name: "pool_address", ty: "address" },
        { name: "amount_withdrawn", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
    "1": {
      name: "ELOCK_TIME_TOO_SHORT",
      doc: "Lockup period is shorter than required.",
    },
    "2": {
      name: "EWITHDRAW_NOT_ALLOWED",
      doc: "Withdraw not allowed, the stake is still locked.",
    },
    "3": { name: "EVALIDATOR_CONFIG", doc: "Validator Config not published." },
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
    "7": { name: "ENOT_VALIDATOR", doc: "Account is not a validator." },
    "8": { name: "ELAST_VALIDATOR", doc: "Can't remove last validator." },
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
    "15": { name: "ENO_POST_GENESIS_VALIDATOR_SET_CHANGE_ALLOWED" },
    "16": { name: "EINVALID_PUBLIC_KEY", doc: "Invalid consensus public key" },
    "17": {
      name: "EINVALID_STAKE_RANGE",
      doc: "Invalid required stake range, usually happens if min > max.",
    },
    "18": {
      name: "EINVALID_LOCKUP_RANGE",
      doc: "Invalid required stake lockup, usually happens if min > max.",
    },
    "19": { name: "EINVALID_REWARDS_RATE", doc: "Invalid rewards rate." },
    "20": {
      name: "EINVALID_STAKE_AMOUNT",
      doc: "Invalid stake amount (usuaully 0).",
    },
  },
} as const;
