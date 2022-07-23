/**
 * **Module ID:** `0x1::account`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Resource representing an account.
 *
 * Type name: `0x1::account::Account`
 */
export interface IAccount {
  authentication_key: p.ByteString;
  sequence_number: p.U64;
  self_address: p.RawAddress;
}

/**
 * This holds information that will be picked up by the VM to call the
 * correct chain-specific prologue and epilogue functions
 *
 * Type name: `0x1::account::ChainSpecificAccountInfo`
 */
export interface IChainSpecificAccountInfo {
  module_addr: p.RawAddress;
  module_name: p.ByteString;
  script_prologue_name: p.ByteString;
  module_prologue_name: p.ByteString;
  writeset_prologue_name: p.ByteString;
  multi_agent_prologue_name: p.ByteString;
  user_epilogue_name: p.ByteString;
  writeset_epilogue_name: p.ByteString;
  currency_code_required: boolean;
}

/** Type name: `0x1::account::SignerCapability` */
export interface ISignerCapability {
  account: p.RawAddress;
}

/** Payload arguments for {@link entry.create_account}. */
export type CreateAccountArgs = {
  args: {
    /** IDL type: `Address` */
    auth_key: p.RawAddress;
  };
};

/** Payload arguments for {@link entry.rotate_authentication_key}. */
export type RotateAuthenticationKeyArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    new_auth_key: p.ByteString;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::account" as const;
/** The name of the module. */
export const NAME = "account" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EACCOUNT",
    doc: "Account already existed",
  },
  "1": {
    name: "ESEQUENCE_NUMBER_TOO_BIG",
    doc: "Sequence number exceeded the maximum value for a u64",
  },
  "2": {
    name: "ENOT_APTOS_FRAMEWORK",
    doc: "The address provided didn't match the `aptos_framework` address.",
  },
  "3": {
    name: "EMALFORMED_AUTHENTICATION_KEY",
    doc: "The provided authentication had an invalid length",
  },
  "4": {
    name: "ECANNOT_CREATE_AT_VM_RESERVED",
  },
  "5": {
    name: "EGAS",
  },
  "6": {
    name: "ECANNOT_CREATE_AT_CORE_CODE",
  },
  "7": {
    name: "EADDR_NOT_MATCH_PREIMAGE",
  },
  "8": {
    name: "EWRITESET_NOT_ALLOWED",
  },
  "9": {
    name: "EMULTI_AGENT_NOT_SUPPORTED",
  },
  "10": {
    name: "EMODULE_NOT_ALLOWED",
  },
  "11": {
    name: "ESCRIPT_NOT_ALLOWED",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  create_account: {
    name: "create_account",
    doc: "Basic account creation methods.",
    ty_args: [],
    args: [
      {
        name: "auth_key",
        ty: "address",
      },
    ],
  },
  rotate_authentication_key: {
    name: "rotate_authentication_key",
    ty_args: [],
    args: [
      {
        name: "new_auth_key",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  Account: "0x1::account::Account",
  ChainSpecificAccountInfo: "0x1::account::ChainSpecificAccountInfo",
} as const;

/** All struct types. */
export const structs = {
  Account: "0x1::account::Account",
  ChainSpecificAccountInfo: "0x1::account::ChainSpecificAccountInfo",
  SignerCapability: "0x1::account::SignerCapability",
} as const;

/** Payload generators for module `0x1::account`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "account"
> as typeof moduleImpl;