/**
 * This module provides the foundation for Tokens.
 *
 * **Module ID:** `0x1::Token`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Capability required to burn tokens. */
export type BurnCapabilityData = {
  token_id: {
    creator: string;
    collection: string;
    name: string;
  };
};

/** Set of data sent to the event stream during a receive */
export type DepositEventData = {
  id: {
    creator: string;
    collection: string;
    name: string;
  };
  amount: string;
};

/** Capability required to mint tokens. */
export type MintCapabilityData = {
  token_id: {
    creator: string;
    collection: string;
    name: string;
  };
};

/** Set of data sent to the event stream during a withdrawal */
export type WithdrawEventData = {
  id: {
    creator: string;
    collection: string;
    name: string;
  };
  amount: string;
};

/** Represents ownership of a the data associated with this Token */
export type TokenData = {
  id: {
    creator: string;
    collection: string;
    name: string;
  };
  value: string;
};

/** Represent the collection metadata */
export type CollectionData = {
  description: string;
  name: string;
  uri: string;
  count: string;
  maximum: {
    vec: ReadonlyArray<string>;
  };
};

/** Represent collection and token metadata for a creator */
export type CollectionsData = {
  collections: {
    handle: string;
    length: string;
  };
  token_data: {
    handle: string;
    length: string;
  };
  burn_capabilities: {
    handle: string;
    length: string;
  };
  mint_capabilities: {
    handle: string;
    length: string;
  };
  create_collection_events: {
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
  create_token_events: {
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
  mint_token_events: {
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

/** create collection event with creator address and collection name */
export type CreateCollectionEventData = {
  creator: string;
  collection_name: string;
  uri: string;
  description: string;
  maximum: {
    vec: ReadonlyArray<string>;
  };
};

/** token creation event id of token created */
export type CreateTokenEventData = {
  id: {
    creator: string;
    collection: string;
    name: string;
  };
  token_data: {
    collection: string;
    description: string;
    name: string;
    maximum: {
      vec: ReadonlyArray<string>;
    };
    supply: {
      vec: ReadonlyArray<string>;
    };
    uri: string;
    royalty: {
      royalty_points_per_million: string;
      creator_account: string;
    };
  };
  initial_balance: string;
};

/** mint token event. This event triggered when creator adds more supply to existing token */
export type MintTokenEventData = {
  id: {
    creator: string;
    collection: string;
    name: string;
  };
  amount: string;
};

/** The royalty of a token */
export type RoyaltyData = {
  royalty_points_per_million: string;
  creator_account: string;
};

/** The data associated with the Tokens */
export type TokenDataData = {
  collection: string;
  description: string;
  name: string;
  maximum: {
    vec: ReadonlyArray<string>;
  };
  supply: {
    vec: ReadonlyArray<string>;
  };
  uri: string;
  royalty: {
    royalty_points_per_million: string;
    creator_account: string;
  };
};

/** Represents a unique identity for the token */
export type TokenIdData = {
  creator: string;
  collection: string;
  name: string;
};

/** Represents token resources owned by token owner */
export type TokenStoreData = {
  tokens: {
    handle: string;
    length: string;
  };
  deposit_events: {
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
  withdraw_events: {
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

/** Payload arguments for {@link entry.create_limited_collection_script}. */
export type CreateLimitedCollectionScriptArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    name: string;
    /** IDL type: `Vector(U8)` */
    description: string;
    /** IDL type: `Vector(U8)` */
    uri: string;
    /** IDL type: `U64` */
    maximum: string;
  };
};

/** Payload arguments for {@link entry.create_limited_token_script}. */
export type CreateLimitedTokenScriptArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    collection: string;
    /** IDL type: `Vector(U8)` */
    name: string;
    /** IDL type: `Vector(U8)` */
    description: string;
    /** IDL type: `Bool` */
    monitor_supply: boolean;
    /** IDL type: `U64` */
    initial_balance: string;
    /** IDL type: `U64` */
    maximum: string;
    /** IDL type: `Vector(U8)` */
    uri: string;
    /** IDL type: `U64` */
    royalty_points_per_million: string;
  };
};

/** Payload arguments for {@link entry.create_unlimited_collection_script}. */
export type CreateUnlimitedCollectionScriptArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    name: string;
    /** IDL type: `Vector(U8)` */
    description: string;
    /** IDL type: `Vector(U8)` */
    uri: string;
  };
};

/** Payload arguments for {@link entry.create_unlimited_token_script}. */
export type CreateUnlimitedTokenScriptArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    collection: string;
    /** IDL type: `Vector(U8)` */
    name: string;
    /** IDL type: `Vector(U8)` */
    description: string;
    /** IDL type: `Bool` */
    monitor_supply: boolean;
    /** IDL type: `U64` */
    initial_balance: string;
    /** IDL type: `Vector(U8)` */
    uri: string;
    /** IDL type: `U64` */
    royalty_points_per_million: string;
  };
};

/** Payload arguments for {@link entry.direct_transfer_script}. */
export type DirectTransferScriptArgs = {
  args: {
    /** IDL type: `Address` */
    creators_address: string;
    /** IDL type: `Vector(U8)` */
    collection: string;
    /** IDL type: `Vector(U8)` */
    name: string;
    /** IDL type: `U64` */
    amount: string;
  };
};

/** Payload arguments for {@link entry.initialize_token_for_id}. */
export type InitializeTokenForIdArgs = {
  args: {
    /** IDL type: `Address` */
    creators_address: string;
    /** IDL type: `Vector(U8)` */
    collection: string;
    /** IDL type: `Vector(U8)` */
    name: string;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Token" as const;
/** The name of the module. */
export const NAME = "Token" as const;

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
} as const;

/** All module function IDLs. */
export const functions = {
  create_limited_collection_script: {
    name: "create_limited_collection_script",
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
    ],
  },
  create_limited_token_script: {
    name: "create_limited_token_script",
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
        name: "monitor_supply",
        ty: "bool",
      },
      {
        name: "initial_balance",
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
        name: "royalty_points_per_million",
        ty: "u64",
      },
    ],
  },
  create_unlimited_collection_script: {
    name: "create_unlimited_collection_script",
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
    ],
  },
  create_unlimited_token_script: {
    name: "create_unlimited_token_script",
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
        name: "monitor_supply",
        ty: "bool",
      },
      {
        name: "initial_balance",
        ty: "u64",
      },
      {
        name: "uri",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "royalty_points_per_million",
        ty: "u64",
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
    ],
  },
  initialize_token_for_id: {
    name: "initialize_token_for_id",
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
    ],
  },
  initialize_token_script: {
    name: "initialize_token_script",
    ty_args: [],
    args: [],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  Collections: "0x1::Token::Collections",
  TokenStore: "0x1::Token::TokenStore",
} as const;

/** All struct types. */
export const structs = {
  BurnCapability: "0x1::Token::BurnCapability",
  Collection: "0x1::Token::Collection",
  Collections: "0x1::Token::Collections",
  CreateCollectionEvent: "0x1::Token::CreateCollectionEvent",
  CreateTokenEvent: "0x1::Token::CreateTokenEvent",
  DepositEvent: "0x1::Token::DepositEvent",
  MintCapability: "0x1::Token::MintCapability",
  MintTokenEvent: "0x1::Token::MintTokenEvent",
  Royalty: "0x1::Token::Royalty",
  Token: "0x1::Token::Token",
  TokenData: "0x1::Token::TokenData",
  TokenId: "0x1::Token::TokenId",
  TokenStore: "0x1::Token::TokenStore",
  WithdrawEvent: "0x1::Token::WithdrawEvent",
} as const;

/** Payload generators for module `0x1::Token`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module provides the foundation for Tokens. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Token"
> as typeof moduleImpl;
