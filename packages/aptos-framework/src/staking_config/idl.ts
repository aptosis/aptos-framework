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
      ],
      abilities: ["copy", "drop", "key"],
    },
  ],
  errors: {
    "1": {
      name: "EINVALID_LOCKUP_VALUE",
      doc: "Invalid required stake lockup value.",
    },
    "2": { name: "EINVALID_REWARDS_RATE", doc: "Invalid rewards rate." },
    "3": {
      name: "EINVALID_STAKE_RANGE",
      doc: "Invalid required stake range, usually happens if min > max.",
    },
  },
} as const;
