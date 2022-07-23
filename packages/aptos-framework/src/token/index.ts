/**
 * This module provides the foundation for Tokens.
 *
 * **Module ID:** `0x1::token`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Capability required to burn tokens.
 *
 * Type name: `0x1::token::BurnCapability`
 */
export interface IBurnCapability {
  token_id: {
    creator: p.RawAddress;
    collection: string;
    name: string;
  };
}

/**
 * Set of data sent to the event stream during a receive
 *
 * Type name: `0x1::token::DepositEvent`
 */
export interface IDepositEvent {
  id: {
    creator: p.RawAddress;
    collection: string;
    name: string;
  };
  amount: p.U64;
}

/**
 * Capability required to mint tokens.
 *
 * Type name: `0x1::token::MintCapability`
 */
export interface IMintCapability {
  token_id: {
    creator: p.RawAddress;
    collection: string;
    name: string;
  };
}

/**
 * Set of data sent to the event stream during a withdrawal
 *
 * Type name: `0x1::token::WithdrawEvent`
 */
export interface IWithdrawEvent {
  id: {
    creator: p.RawAddress;
    collection: string;
    name: string;
  };
  amount: p.U64;
}

/**
 * Represent the collection metadata
 *
 * Type name: `0x1::token::Collection`
 */
export interface ICollection {
  description: string;
  name: string;
  uri: string;
  count: p.U64;
  maximum: {
    vec: ReadonlyArray<p.U64>;
  };
}

/**
 * Represent collection and token metadata for a creator
 *
 * Type name: `0x1::token::Collections`
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
  burn_capabilities: {
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
 * Type name: `0x1::token::CreateCollectionEvent`
 */
export interface ICreateCollectionEvent {
  creator: p.RawAddress;
  collection_name: string;
  uri: string;
  description: string;
  maximum: {
    vec: ReadonlyArray<p.U64>;
  };
}

/**
 * token creation event id of token created
 *
 * Type name: `0x1::token::CreateTokenEvent`
 */
export interface ICreateTokenEvent {
  id: {
    creator: p.RawAddress;
    collection: string;
    name: string;
  };
  token_data: {
    collection: string;
    description: string;
    name: string;
    maximum: {
      vec: ReadonlyArray<p.U64>;
    };
    supply: {
      vec: ReadonlyArray<p.U64>;
    };
    uri: string;
    royalty: {
      royalty_points_per_million: p.U64;
      creator_account: p.RawAddress;
    };
  };
  initial_balance: p.U64;
}

/**
 * mint token event. This event triggered when creator adds more supply to existing token
 *
 * Type name: `0x1::token::MintTokenEvent`
 */
export interface IMintTokenEvent {
  id: {
    creator: p.RawAddress;
    collection: string;
    name: string;
  };
  amount: p.U64;
}

/**
 * The royalty of a token
 *
 * Type name: `0x1::token::Royalty`
 */
export interface IRoyalty {
  royalty_points_per_million: p.U64;
  creator_account: p.RawAddress;
}

/**
 * Represents ownership of a the data associated with this Token
 *
 * Type name: `0x1::token::Token`
 */
export interface IToken {
  id: {
    creator: p.RawAddress;
    collection: string;
    name: string;
  };
  value: p.U64;
}

/**
 * The data associated with the Tokens
 *
 * Type name: `0x1::token::TokenData`
 */
export interface ITokenData {
  collection: string;
  description: string;
  name: string;
  maximum: {
    vec: ReadonlyArray<p.U64>;
  };
  supply: {
    vec: ReadonlyArray<p.U64>;
  };
  uri: string;
  royalty: {
    royalty_points_per_million: p.U64;
    creator_account: p.RawAddress;
  };
}

/**
 * Represents a unique identity for the token
 *
 * Type name: `0x1::token::TokenId`
 */
export interface ITokenId {
  creator: p.RawAddress;
  collection: string;
  name: string;
}

/**
 * Represents token resources owned by token owner
 *
 * Type name: `0x1::token::TokenStore`
 */
export interface ITokenStore {
  tokens: {
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

/** Payload arguments for {@link entry.create_limited_collection_script}. */
export type CreateLimitedCollectionScriptArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `Vector(U8)` */
    description: p.ByteString;
    /** IDL type: `Vector(U8)` */
    uri: p.ByteString;
    /** IDL type: `U64` */
    maximum: p.U64;
  };
};

/** Payload arguments for {@link entry.create_limited_token_script}. */
export type CreateLimitedTokenScriptArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    collection: p.ByteString;
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `Vector(U8)` */
    description: p.ByteString;
    /** IDL type: `Bool` */
    monitor_supply: boolean;
    /** IDL type: `U64` */
    initial_balance: p.U64;
    /** IDL type: `U64` */
    maximum: p.U64;
    /** IDL type: `Vector(U8)` */
    uri: p.ByteString;
    /** IDL type: `U64` */
    royalty_points_per_million: p.U64;
  };
};

/** Payload arguments for {@link entry.create_unlimited_collection_script}. */
export type CreateUnlimitedCollectionScriptArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `Vector(U8)` */
    description: p.ByteString;
    /** IDL type: `Vector(U8)` */
    uri: p.ByteString;
  };
};

/** Payload arguments for {@link entry.create_unlimited_token_script}. */
export type CreateUnlimitedTokenScriptArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    collection: p.ByteString;
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `Vector(U8)` */
    description: p.ByteString;
    /** IDL type: `Bool` */
    monitor_supply: boolean;
    /** IDL type: `U64` */
    initial_balance: p.U64;
    /** IDL type: `Vector(U8)` */
    uri: p.ByteString;
    /** IDL type: `U64` */
    royalty_points_per_million: p.U64;
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
  };
};

/** Payload arguments for {@link entry.initialize_token_for_id}. */
export type InitializeTokenForIdArgs = {
  args: {
    /** IDL type: `Address` */
    creators_address: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    collection: p.ByteString;
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::token" as const;
/** The name of the module. */
export const NAME = "token" as const;

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
  Collections: "0x1::token::Collections",
  TokenStore: "0x1::token::TokenStore",
} as const;

/** All struct types. */
export const structs = {
  BurnCapability: "0x1::token::BurnCapability",
  Collection: "0x1::token::Collection",
  Collections: "0x1::token::Collections",
  CreateCollectionEvent: "0x1::token::CreateCollectionEvent",
  CreateTokenEvent: "0x1::token::CreateTokenEvent",
  DepositEvent: "0x1::token::DepositEvent",
  MintCapability: "0x1::token::MintCapability",
  MintTokenEvent: "0x1::token::MintTokenEvent",
  Royalty: "0x1::token::Royalty",
  Token: "0x1::token::Token",
  TokenData: "0x1::token::TokenData",
  TokenId: "0x1::token::TokenId",
  TokenStore: "0x1::token::TokenStore",
  WithdrawEvent: "0x1::token::WithdrawEvent",
} as const;

/** Payload generators for module `0x1::token`. */
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
  "token"
> as typeof moduleImpl;
