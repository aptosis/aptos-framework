/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::staking_config",
  doc: "Provides the configuration for staking and rewards",
  functions: [],
  structs: [
    {
      name: "0x1::staking_config::StakingConfig",
      doc: "Validator set configurations that will be stored with the @aptos_framework account.",
      fields: [
        { name: "minimum_stake", ty: "u64" },
        { name: "maximum_stake", ty: "u64" },
        { name: "recurring_lockup_duration_secs", ty: "u64" },
        { name: "allow_validator_set_change", ty: "bool" },
        { name: "rewards_rate", ty: "u64" },
        { name: "rewards_rate_denominator", ty: "u64" },
        { name: "voting_power_increase_limit", ty: "u64" },
      ],
      abilities: ["copy", "drop", "key"],
    },
  ],
  errors: {
    "1": {
      name: "EZERO_LOCKUP_DURATION",
      doc: "Stake lockup duration cannot be zero",
    },
    "2": {
      name: "EZERO_REWARDS_RATE_DENOMINATOR",
      doc: "Reward rate denominator cannot be zero",
    },
    "3": {
      name: "EINVALID_STAKE_RANGE",
      doc: "Specified stake range is invalid. Max must be greater than min",
    },
    "4": {
      name: "EINVALID_VOTING_POWER_INCREASE_LIMIT",
      doc: "The voting power increase limit percentage must be within (0, 50]",
    },
  },
} as const;
