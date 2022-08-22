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
  coin_register_events: {
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
  rotation_capability_offer: {
    for: {
      vec: ReadonlyArray<p.RawAddress>;
    };
  };
  signer_capability_offer: {
    for: {
      vec: ReadonlyArray<p.RawAddress>;
    };
  };
}

/** Type name: `0x1::account::CapabilityOffer` */
export interface ICapabilityOffer {
  for: {
    vec: ReadonlyArray<p.RawAddress>;
  };
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
}

/** Type name: `0x1::account::CoinRegisterEvent` */
export interface ICoinRegisterEvent {
  type_info: {
    account_address: p.RawAddress;
    module_name: p.ByteString;
    struct_name: p.ByteString;
  };
}

/** Type name: `0x1::account::OriginatingAddress` */
export interface IOriginatingAddress {
  address_map: {
    handle: p.U128;
  };
}

/** Type name: `0x1::account::RotationCapability` */
export interface IRotationCapability {
  account: p.RawAddress;
}

/**
 * This structs stores the challenge message that should be signed during key rotation. First, this struct is
 * signed by the account owner's current public key, which proves possession of a capability to rotate the key.
 * Second, this struct is signed by the new public key that the account owner wants to rotate to, which proves
 * knowledge of this new public key's associated secret key. These two signatures cannot be replayed in another
 * context because they include the TXN's unique sequence number.
 *
 * Type name: `0x1::account::RotationProofChallenge`
 */
export interface IRotationProofChallenge {
  sequence_number: p.U64;
  originator: p.RawAddress;
  current_auth_key: p.RawAddress;
  new_public_key: p.ByteString;
}

/** Type name: `0x1::account::SignerCapability` */
export interface ISignerCapability {
  account: p.RawAddress;
}

/** Payload arguments for {@link entry.transfer}. */
export type TransferArgs = {
  args: {
    /** IDL type: `Address` */
    to: p.RawAddress;
    /** IDL type: `U64` */
    amount: p.U64;
  };
};

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

/** Payload arguments for {@link entry.rotate_authentication_key_ed25519}. */
export type RotateAuthenticationKeyEd25519Args = {
  args: {
    /** IDL type: `Vector(U8)` */
    curr_sig_bytes: p.ByteString;
    /** IDL type: `Vector(U8)` */
    new_sig_bytes: p.ByteString;
    /** IDL type: `Vector(U8)` */
    curr_pk_bytes: p.ByteString;
    /** IDL type: `Vector(U8)` */
    new_pk_bytes: p.ByteString;
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
  "1": {
    name: "EACCOUNT_ALREADY_EXISTS",
    doc: "Account already exists",
  },
  "2": {
    name: "EACCOUNT_DOES_NOT_EXIST",
    doc: "Account does not exist",
  },
  "3": {
    name: "ESEQUENCE_NUMBER_TOO_BIG",
    doc: "Sequence number exceeds the maximum value for a u64",
  },
  "4": {
    name: "EMALFORMED_AUTHENTICATION_KEY",
    doc: "The provided authentication key has an invalid length",
  },
  "5": {
    name: "ECANNOT_RESERVED_ADDRESS",
    doc: "Cannot create account because address is reserved",
  },
  "6": {
    name: "EOUT_OF_GAS",
    doc: "Transaction exceeded its allocated max gas",
  },
  "7": {
    name: "EWRITESET_NOT_ALLOWED",
    doc: "Writesets are not allowed",
  },
  "8": {
    name: "EWRONG_CURRENT_PUBLIC_KEY",
    doc: "Specified current public key is not correct",
  },
  "9": {
    name: "EINVALID_PROOF_OF_KNOWLEDGE",
    doc: "Specified proof of knowledge required to prove ownership of a public key is invalid",
  },
  "10": {
    name: "ENO_CAPABILITY",
    doc: "The caller does not have a digital-signature-based capability to call this function",
  },
  "1001": {
    name: "PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY",
    doc: "Prologue errors. These are separated out from the other errors in this\nmodule since they are mapped separately to major VM statuses, and are\nimportant to the semantics of the system.",
  },
  "1002": {
    name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD",
  },
  "1003": {
    name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW",
  },
  "1004": {
    name: "PROLOGUE_EACCOUNT_DOES_NOT_EXIST",
  },
  "1005": {
    name: "PROLOGUE_ECANT_PAY_GAS_DEPOSIT",
  },
  "1006": {
    name: "PROLOGUE_ETRANSACTION_EXPIRED",
  },
  "1007": {
    name: "PROLOGUE_EBAD_CHAIN_ID",
  },
  "1008": {
    name: "PROLOGUE_EINVALID_WRITESET_SENDER",
  },
  "1009": {
    name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG",
  },
  "1010": {
    name: "PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH",
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
  rotate_authentication_key_ed25519: {
    name: "rotate_authentication_key_ed25519",
    doc: "Rotates the authentication key and records a mapping on chain from the new authentication key to the originating\naddress of the account. To authorize the rotation, a signature under the old public key on a `RotationProofChallenge`\nis given in `current_sig`. To ensure the account owner knows the secret key corresponding to the new public key\nin `new_pubkey`, a proof-of-knowledge is given in `new_sig` (i.e., a signature under the new public key on the\nsame `RotationProofChallenge` struct).",
    ty_args: [],
    args: [
      {
        name: "curr_sig_bytes",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "new_sig_bytes",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "curr_pk_bytes",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "new_pk_bytes",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
  transfer: {
    name: "transfer",
    ty_args: [],
    args: [
      {
        name: "to",
        ty: "address",
      },
      {
        name: "amount",
        ty: "u64",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  Account: "0x1::account::Account",
  ChainSpecificAccountInfo: "0x1::account::ChainSpecificAccountInfo",
  OriginatingAddress: "0x1::account::OriginatingAddress",
} as const;

/** All struct types. */
export const structs = {
  Account: "0x1::account::Account",
  CapabilityOffer: "0x1::account::CapabilityOffer",
  ChainSpecificAccountInfo: "0x1::account::ChainSpecificAccountInfo",
  CoinRegisterEvent: "0x1::account::CoinRegisterEvent",
  OriginatingAddress: "0x1::account::OriginatingAddress",
  RotationCapability: "0x1::account::RotationCapability",
  RotationProofChallenge: "0x1::account::RotationProofChallenge",
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
