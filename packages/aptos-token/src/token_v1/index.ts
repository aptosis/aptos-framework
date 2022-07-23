/**
 * This module provides the foundation for Tokens.
 *
 * **Module ID:** `0x2::token_v1`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x2::token_v1::BurnCapability` */
export interface IBurnCapability {
  token_id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: {
        bytes: p.ByteString;
      };
      name: {
        bytes: p.ByteString;
      };
    };
    serial_number: p.U64;
  };
}

/**
 * Set of data sent to the event stream during a receive
 *
 * Type name: `0x2::token_v1::DepositEvent`
 */
export interface IDepositEvent {
  id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: {
        bytes: p.ByteString;
      };
      name: {
        bytes: p.ByteString;
      };
    };
    serial_number: p.U64;
  };
  amount: p.U64;
}

/**
 * Capability required to mint tokens.
 *
 * Type name: `0x2::token_v1::MintCapability`
 */
export interface IMintCapability {
  token_id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: {
        bytes: p.ByteString;
      };
      name: {
        bytes: p.ByteString;
      };
    };
    serial_number: p.U64;
  };
}

/**
 * Set of data sent to the event stream during a withdrawal
 *
 * Type name: `0x2::token_v1::WithdrawEvent`
 */
export interface IWithdrawEvent {
  id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: {
        bytes: p.ByteString;
      };
      name: {
        bytes: p.ByteString;
      };
    };
    serial_number: p.U64;
  };
  amount: p.U64;
}

/**
 * Represent the collection metadata
 *
 * Type name: `0x2::token_v1::Collection`
 */
export interface ICollection {
  description: {
    bytes: p.ByteString;
  };
  name: {
    bytes: p.ByteString;
  };
  uri: {
    bytes: p.ByteString;
  };
  count: p.U64;
  maximum: p.U64;
  mutability_config: {
    description: boolean;
    uri: boolean;
    maximum: boolean;
  };
}

/**
 * Represent collection and token metadata for a creator
 *
 * Type name: `0x2::token_v1::Collections`
 */
export interface ICollections {
  collections: {
    handle: p.U128;
    length: p.U64;
  };
  token_data: {
    handle: p.U128;
    length: p.U64;
  };
  mint_capabilities: {
    handle: p.U128;
    length: p.U64;
  };
  create_collection_events: {
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
  create_token_events: {
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
  mint_token_events: {
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

/**
 * create collection event with creator address and collection name
 *
 * Type name: `0x2::token_v1::CreateCollectionEvent`
 */
export interface ICreateCollectionEvent {
  creator: p.RawAddress;
  collection_name: {
    bytes: p.ByteString;
  };
  uri: {
    bytes: p.ByteString;
  };
  description: {
    bytes: p.ByteString;
  };
  maximum: p.U64;
}

/**
 * token creation event id of token created
 *
 * Type name: `0x2::token_v1::CreateTokenEvent`
 */
export interface ICreateTokenEvent {
  id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: {
        bytes: p.ByteString;
      };
      name: {
        bytes: p.ByteString;
      };
    };
    serial_number: p.U64;
  };
  initial_balance: p.U64;
}

/**
 * mint token event. This event triggered when creator adds more supply to existing token
 *
 * Type name: `0x2::token_v1::MintTokenEvent`
 */
export interface IMintTokenEvent {
  id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: {
        bytes: p.ByteString;
      };
      name: {
        bytes: p.ByteString;
      };
    };
    serial_number: p.U64;
  };
  amount: p.U64;
}

/**
 * The royalty of a token
 *
 * Type name: `0x2::token_v1::Royalty`
 */
export interface IRoyalty {
  royalty_points_nominator: p.U64;
  royalty_points_denominator: p.U64;
  payee_address: p.RawAddress;
}

/** Type name: `0x2::token_v1::Token` */
export interface IToken {
  id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: {
        bytes: p.ByteString;
      };
      name: {
        bytes: p.ByteString;
      };
    };
    serial_number: p.U64;
  };
  value: p.U64;
}

/**
 * The shared TokenData by tokens with different serial_number
 *
 * Type name: `0x2::token_v1::TokenData`
 */
export interface ITokenData {
  id: {
    creator: p.RawAddress;
    collection: {
      bytes: p.ByteString;
    };
    name: {
      bytes: p.ByteString;
    };
  };
  maximum: p.U64;
  largest_serial_number: p.U64;
  supply: p.U64;
  uri: {
    bytes: p.ByteString;
  };
  royalty: {
    royalty_points_nominator: p.U64;
    royalty_points_denominator: p.U64;
    payee_address: p.RawAddress;
  };
  name: {
    bytes: p.ByteString;
  };
  description: {
    bytes: p.ByteString;
  };
  properties: {
    map: {
      data: ReadonlyArray<{
        key: {
          bytes: p.ByteString;
        };
        value: {
          value: p.ByteString;
          type: {
            bytes: p.ByteString;
          };
        };
      }>;
    };
  };
  mutability_config: {
    maximum: boolean;
    uri: boolean;
    royalty: boolean;
    description: boolean;
    properties: boolean;
  };
}

/**
 * global unique identifier of a token
 *
 * Type name: `0x2::token_v1::TokenId`
 */
export interface ITokenId {
  token_data_id: {
    creator: p.RawAddress;
    collection: {
      bytes: p.ByteString;
    };
    name: {
      bytes: p.ByteString;
    };
  };
  serial_number: p.U64;
}

/**
 * Represents token resources owned by token owner
 *
 * Type name: `0x2::token_v1::TokenStore`
 */
export interface ITokenStore {
  tokens: {
    handle: p.U128;
    length: p.U64;
  };
  token_properties: {
    handle: p.U128;
    length: p.U64;
  };
  deposit_events: {
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
  withdraw_events: {
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

/**
 * This config specifies which fields in the Collection are mutable
 *
 * Type name: `0x2::token_v1::CollectionMutabilityConfig`
 */
export interface ICollectionMutabilityConfig {
  description: boolean;
  uri: boolean;
  maximum: boolean;
}

/** Type name: `0x2::token_v1::TokenAuthority` */
export interface ITokenAuthority {
  burn: boolean;
}

/** Type name: `0x2::token_v1::TokenAuthorityStore` */
export interface ITokenAuthorityStore {
  token_auths: {
    handle: p.U128;
    length: p.U64;
  };
}

/**
 * globally unique identifier of tokendata
 *
 * Type name: `0x2::token_v1::TokenDataId`
 */
export interface ITokenDataId {
  creator: p.RawAddress;
  collection: {
    bytes: p.ByteString;
  };
  name: {
    bytes: p.ByteString;
  };
}

/**
 * This config specifies which fields in the TokenData are mutable
 *
 * Type name: `0x2::token_v1::TokenMutabilityConfig`
 */
export interface ITokenMutabilityConfig {
  maximum: boolean;
  uri: boolean;
  royalty: boolean;
  description: boolean;
  properties: boolean;
}

/** Payload arguments for {@link entry.mint}. */
export type MintArgs = {
  args: {
    /** IDL type: `Address` */
    token_data_address: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    collection: p.ByteString;
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `U64` */
    amount: p.U64;
  };
};

/** Payload arguments for {@link entry.direct_transfer_script}. */
export type DirectTransferScriptArgs = {
  args: {
    /** IDL type: `Address` */
    creators_address: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    collection: p.ByteString;
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `U64` */
    amount: p.U64;
    /** IDL type: `U64` */
    serial_number: p.U64;
  };
};

/** Payload arguments for {@link entry.create_collection_script}. */
export type CreateCollectionScriptArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `Vector(U8)` */
    description: p.ByteString;
    /** IDL type: `Vector(U8)` */
    uri: p.ByteString;
    /** IDL type: `U64` */
    maximum: p.U64;
    /** IDL type: `Vector(Bool)` */
    mutate_setting: ReadonlyArray<boolean>;
  };
};

/** Payload arguments for {@link entry.create_token_script}. */
export type CreateTokenScriptArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    collection: p.ByteString;
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `Vector(U8)` */
    description: p.ByteString;
    /** IDL type: `U64` */
    balance: p.U64;
    /** IDL type: `U64` */
    maximum: p.U64;
    /** IDL type: `Vector(U8)` */
    uri: p.ByteString;
    /** IDL type: `Address` */
    royalty_payee_address: p.RawAddress;
    /** IDL type: `U64` */
    royalty_points_denominator: p.U64;
    /** IDL type: `U64` */
    royalty_points_nominator: p.U64;
    /** IDL type: `Vector(Bool)` */
    token_mutate_setting: ReadonlyArray<boolean>;
    /** IDL type: `Vector(Vector(U8))` */
    property_keys: ReadonlyArray<p.ByteString>;
    /** IDL type: `Vector(Vector(U8))` */
    property_values: ReadonlyArray<p.ByteString>;
    /** IDL type: `Vector(Vector(U8))` */
    property_types: ReadonlyArray<p.ByteString>;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x2" as const;
/** The full module name. */
export const FULL_NAME = "0x2::token_v1" as const;
/** The name of the module. */
export const NAME = "token_v1" as const;

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
    name: "EALREADY_HAS_BALANCE",
  },
  "1": {
    name: "EBALANCE_NOT_PUBLISHED",
  },
  "2": {
    name: "ECOLLECTIONS_NOT_PUBLISHED",
  },
  "3": {
    name: "ECOLLECTION_NOT_PUBLISHED",
  },
  "4": {
    name: "ECOLLECTION_ALREADY_EXISTS",
  },
  "5": {
    name: "ECREATE_WOULD_EXCEED_MAXIMUM",
  },
  "6": {
    name: "EINSUFFICIENT_BALANCE",
  },
  "7": {
    name: "EINVALID_COLLECTION_NAME",
  },
  "8": {
    name: "EINVALID_TOKEN_MERGE",
  },
  "9": {
    name: "EMINT_WOULD_EXCEED_MAXIMUM",
  },
  "10": {
    name: "ENO_BURN_CAPABILITY",
  },
  "11": {
    name: "ENO_MINT_CAPABILITY",
  },
  "12": {
    name: "ETOKEN_ALREADY_EXISTS",
  },
  "13": {
    name: "ETOKEN_NOT_PUBLISHED",
  },
  "14": {
    name: "ETOKEN_STORE_NOT_PUBLISHED",
  },
  "15": {
    name: "ETOKEN_SPLIT_AMOUNT_LARGER_THEN_TOKEN_AMOUNT",
  },
  "16": {
    name: "EFIELD_NOT_MUTABLE",
  },
  "17": {
    name: "EBURNCAP_EXISTS_OR_CREATED_FOR_TOKEN",
  },
  "18": {
    name: "EONLY_CREATOR_CAN_CREATE_BURN_CAP",
  },
  "19": {
    name: "EONLY_CREATOR_CAN_DELEGATE_BURN_CAP",
  },
  "20": {
    name: "ETOKEN_CAPABILITY_STORE_NOT_EXISTS",
  },
  "21": {
    name: "ETOKEN_NOT_EXISTS_IN_CAPABILITY_STORE",
  },
  "22": {
    name: "EONLY_TOKEN_OWNER_CAN_HAVE_BURN_CAP",
  },
  "23": {
    name: "ENOT_OWN_THE_CAPABILITY",
  },
  "24": {
    name: "ENO_MUTATE_CAPABILITY",
  },
  "25": {
    name: "ETOKEN_SHOULDNOT_EXIST_IN_TOKEN_STORE",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  create_collection_script: {
    name: "create_collection_script",
    doc: "create a empty token collection with parameters",
    ty_args: [],
    args: [
      {
        name: "name",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "description",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "uri",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "maximum",
        ty: "u64",
      },
      {
        name: "mutate_setting",
        ty: {
          vector: "bool",
        },
      },
    ],
  },
  create_token_script: {
    name: "create_token_script",
    doc: "create token with raw inputs",
    ty_args: [],
    args: [
      {
        name: "collection",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "name",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "description",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "balance",
        ty: "u64",
      },
      {
        name: "maximum",
        ty: "u64",
      },
      {
        name: "uri",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "royalty_payee_address",
        ty: "address",
      },
      {
        name: "royalty_points_denominator",
        ty: "u64",
      },
      {
        name: "royalty_points_nominator",
        ty: "u64",
      },
      {
        name: "token_mutate_setting",
        ty: {
          vector: "bool",
        },
      },
      {
        name: "property_keys",
        ty: {
          vector: {
            vector: "u8",
          },
        },
      },
      {
        name: "property_values",
        ty: {
          vector: {
            vector: "u8",
          },
        },
      },
      {
        name: "property_types",
        ty: {
          vector: {
            vector: "u8",
          },
        },
      },
    ],
  },
  direct_transfer_script: {
    name: "direct_transfer_script",
    ty_args: [],
    args: [
      {
        name: "creators_address",
        ty: "address",
      },
      {
        name: "collection",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "name",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "amount",
        ty: "u64",
      },
      {
        name: "serial_number",
        ty: "u64",
      },
    ],
  },
  initialize_token_authority_store_script: {
    name: "initialize_token_authority_store_script",
    doc: "initialize capability store for storing all token capabilities\nthis function should be called by any account that plan to own tokens",
    ty_args: [],
    args: [],
  },
  initialize_token_script: {
    name: "initialize_token_script",
    ty_args: [],
    args: [],
  },
  mint: {
    name: "mint",
    doc: "Mint more token from an existing token_data. Mint only adds more token to serial_number 0",
    ty_args: [],
    args: [
      {
        name: "token_data_address",
        ty: "address",
      },
      {
        name: "collection",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "name",
        ty: {
          vector: "u8",
        },
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
  Collections: "0x2::token_v1::Collections",
  TokenAuthorityStore: "0x2::token_v1::TokenAuthorityStore",
  TokenStore: "0x2::token_v1::TokenStore",
} as const;

/** All struct types. */
export const structs = {
  BurnCapability: "0x2::token_v1::BurnCapability",
  Collection: "0x2::token_v1::Collection",
  CollectionMutabilityConfig: "0x2::token_v1::CollectionMutabilityConfig",
  Collections: "0x2::token_v1::Collections",
  CreateCollectionEvent: "0x2::token_v1::CreateCollectionEvent",
  CreateTokenEvent: "0x2::token_v1::CreateTokenEvent",
  DepositEvent: "0x2::token_v1::DepositEvent",
  MintCapability: "0x2::token_v1::MintCapability",
  MintTokenEvent: "0x2::token_v1::MintTokenEvent",
  Royalty: "0x2::token_v1::Royalty",
  Token: "0x2::token_v1::Token",
  TokenAuthority: "0x2::token_v1::TokenAuthority",
  TokenAuthorityStore: "0x2::token_v1::TokenAuthorityStore",
  TokenData: "0x2::token_v1::TokenData",
  TokenDataId: "0x2::token_v1::TokenDataId",
  TokenId: "0x2::token_v1::TokenId",
  TokenMutabilityConfig: "0x2::token_v1::TokenMutabilityConfig",
  TokenStore: "0x2::token_v1::TokenStore",
  WithdrawEvent: "0x2::token_v1::WithdrawEvent",
} as const;

/** Payload generators for module `0x2::token_v1`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module provides the foundation for Tokens. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x2",
  "token_v1"
> as typeof moduleImpl;
