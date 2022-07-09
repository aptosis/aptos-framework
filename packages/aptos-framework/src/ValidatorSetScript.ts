import type * as p from "@movingco/prelude";

/**
 * Payload arguments for {@link ValidatorSetScriptModule.add_validator}.
 */
export type AddValidatorPayload = {
  args: {
    /** IDL type: `Address` */
    _validator_addr: p.RawAddress;
  };
};

/**
 * Payload arguments for {@link ValidatorSetScriptModule.create_validator_account}.
 */
export type CreateValidatorAccountPayload = {
  args: {
    /** IDL type: `Address` */
    _new_account_address: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    _human_name: p.ByteString;
  };
};

/**
 * Payload arguments for {@link ValidatorSetScriptModule.create_validator_operator_account}.
 */
export type CreateValidatorOperatorAccountPayload = {
  args: {
    /** IDL type: `Address` */
    _new_account_address: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    _human_name: p.ByteString;
  };
};

/**
 * Payload arguments for {@link ValidatorSetScriptModule.register_validator_config}.
 */
export type RegisterValidatorConfigPayload = {
  args: {
    /** IDL type: `Address` */
    _validator_address: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    _consensus_pubkey: p.ByteString;
    /** IDL type: `Vector(U8)` */
    _validator_network_addresses: p.ByteString;
    /** IDL type: `Vector(U8)` */
    _fullnode_network_addresses: p.ByteString;
  };
};

/**
 * Payload arguments for {@link ValidatorSetScriptModule.remove_validator}.
 */
export type RemoveValidatorPayload = {
  args: {
    /** IDL type: `Address` */
    _validator_addr: p.RawAddress;
  };
};

/**
 * Payload arguments for {@link ValidatorSetScriptModule.set_validator_config_and_reconfigure}.
 */
export type SetValidatorConfigAndReconfigurePayload = {
  args: {
    /** IDL type: `Address` */
    _validator_account: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    _consensus_pubkey: p.ByteString;
    /** IDL type: `Vector(U8)` */
    _validator_network_addresses: p.ByteString;
    /** IDL type: `Vector(U8)` */
    _fullnode_network_addresses: p.ByteString;
  };
};

/**
 * Payload arguments for {@link ValidatorSetScriptModule.set_validator_operator}.
 */
export type SetValidatorOperatorPayload = {
  args: {
    /** IDL type: `Vector(U8)` */
    _operator_name: p.ByteString;
    /** IDL type: `Address` */
    _operator_account: p.RawAddress;
  };
};

/** Entrypoint builders. */
export const entrypoints = {
  add_validator: ({ args }: AddValidatorPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::ValidatorSetScript::add_validator",
    type_arguments: [],
    arguments: [args._validator_addr],
  }),

  create_validator_account: ({
    args,
  }: CreateValidatorAccountPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::ValidatorSetScript::create_validator_account",
    type_arguments: [],
    arguments: [args._new_account_address, args._human_name],
  }),

  create_validator_operator_account: ({
    args,
  }: CreateValidatorOperatorAccountPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::ValidatorSetScript::create_validator_operator_account",
    type_arguments: [],
    arguments: [args._new_account_address, args._human_name],
  }),

  register_validator_config: ({
    args,
  }: RegisterValidatorConfigPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::ValidatorSetScript::register_validator_config",
    type_arguments: [],
    arguments: [
      args._validator_address,
      args._consensus_pubkey,
      args._validator_network_addresses,
      args._fullnode_network_addresses,
    ],
  }),

  remove_validator: ({
    args,
  }: RemoveValidatorPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::ValidatorSetScript::remove_validator",
    type_arguments: [],
    arguments: [args._validator_addr],
  }),

  set_validator_config_and_reconfigure: ({
    args,
  }: SetValidatorConfigAndReconfigurePayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::ValidatorSetScript::set_validator_config_and_reconfigure",
    type_arguments: [],
    arguments: [
      args._validator_account,
      args._consensus_pubkey,
      args._validator_network_addresses,
      args._fullnode_network_addresses,
    ],
  }),

  set_validator_operator: ({
    args,
  }: SetValidatorOperatorPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::ValidatorSetScript::set_validator_operator",
    type_arguments: [],
    arguments: [args._operator_name, args._operator_account],
  }),
} as const;

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

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::ValidatorSetScript",
  /** The name of the module. */
  NAME: "ValidatorSetScript",
} as const;

/** Module errors. */
export const errors = {} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {
  add_validator: {
    name: "add_validator",
    ty_args: [],
    args: [
      {
        name: "_validator_addr",
        ty: "address",
      },
    ],
  },
  create_validator_account: {
    name: "create_validator_account",
    ty_args: [],
    args: [
      {
        name: "_new_account_address",
        ty: "address",
      },
      {
        name: "_human_name",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
  create_validator_operator_account: {
    name: "create_validator_operator_account",
    ty_args: [],
    args: [
      {
        name: "_new_account_address",
        ty: "address",
      },
      {
        name: "_human_name",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
  register_validator_config: {
    name: "register_validator_config",
    ty_args: [],
    args: [
      {
        name: "_validator_address",
        ty: "address",
      },
      {
        name: "_consensus_pubkey",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "_validator_network_addresses",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "_fullnode_network_addresses",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
  remove_validator: {
    name: "remove_validator",
    ty_args: [],
    args: [
      {
        name: "_validator_addr",
        ty: "address",
      },
    ],
  },
  set_validator_config_and_reconfigure: {
    name: "set_validator_config_and_reconfigure",
    ty_args: [],
    args: [
      {
        name: "_validator_account",
        ty: "address",
      },
      {
        name: "_consensus_pubkey",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "_validator_network_addresses",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "_fullnode_network_addresses",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
  set_validator_operator: {
    name: "set_validator_operator",
    ty_args: [],
    args: [
      {
        name: "_operator_name",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "_operator_account",
        ty: "address",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::ValidatorSetScript`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ValidatorSetScript"
> as typeof moduleImpl;
