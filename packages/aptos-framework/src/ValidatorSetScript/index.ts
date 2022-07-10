/**
 * **Module ID:** `0x1::ValidatorSetScript`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Payload arguments for {@link entry.add_validator}.
 */
export type AddValidatorPayload = {
  args: {
    /** IDL type: `Address` */
    _validator_addr: p.RawAddress;
  };
};

/**
 * Payload arguments for {@link entry.create_validator_account}.
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
 * Payload arguments for {@link entry.create_validator_operator_account}.
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
 * Payload arguments for {@link entry.register_validator_config}.
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
 * Payload arguments for {@link entry.remove_validator}.
 */
export type RemoveValidatorPayload = {
  args: {
    /** IDL type: `Address` */
    _validator_addr: p.RawAddress;
  };
};

/**
 * Payload arguments for {@link entry.set_validator_config_and_reconfigure}.
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
 * Payload arguments for {@link entry.set_validator_operator}.
 */
export type SetValidatorOperatorPayload = {
  args: {
    /** IDL type: `Vector(U8)` */
    _operator_name: p.ByteString;
    /** IDL type: `Address` */
    _operator_account: p.RawAddress;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::ValidatorSetScript",
  /** The name of the module. */
  NAME: "ValidatorSetScript",
} as const;

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
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ValidatorSetScript"
> as typeof moduleImpl;
