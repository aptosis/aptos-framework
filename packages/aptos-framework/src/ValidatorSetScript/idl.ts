/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::ValidatorSetScript",
  functions: [
    {
      name: "add_validator",
      ty_args: [],
      args: [{ name: "_validator_addr", ty: "address" }],
    },
    {
      name: "create_validator_account",
      ty_args: [],
      args: [
        { name: "_new_account_address", ty: "address" },
        { name: "_human_name", ty: { vector: "u8" } },
      ],
    },
    {
      name: "create_validator_operator_account",
      ty_args: [],
      args: [
        { name: "_new_account_address", ty: "address" },
        { name: "_human_name", ty: { vector: "u8" } },
      ],
    },
    {
      name: "register_validator_config",
      ty_args: [],
      args: [
        { name: "_validator_address", ty: "address" },
        { name: "_consensus_pubkey", ty: { vector: "u8" } },
        { name: "_validator_network_addresses", ty: { vector: "u8" } },
        { name: "_fullnode_network_addresses", ty: { vector: "u8" } },
      ],
    },
    {
      name: "remove_validator",
      ty_args: [],
      args: [{ name: "_validator_addr", ty: "address" }],
    },
    {
      name: "set_validator_config_and_reconfigure",
      ty_args: [],
      args: [
        { name: "_validator_account", ty: "address" },
        { name: "_consensus_pubkey", ty: { vector: "u8" } },
        { name: "_validator_network_addresses", ty: { vector: "u8" } },
        { name: "_fullnode_network_addresses", ty: { vector: "u8" } },
      ],
    },
    {
      name: "set_validator_operator",
      ty_args: [],
      args: [
        { name: "_operator_name", ty: { vector: "u8" } },
        { name: "_operator_account", ty: "address" },
      ],
    },
  ],
  structs: [],
  errors: {},
} as const;
