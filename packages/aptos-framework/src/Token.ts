/**
 * This module provides the foundation for Tokens.
 *
 * @module
 */
import * as p from "@movingco/prelude";

/** Capability required to burn tokens. */
export type BurnCapabilityData = {
  token_id: {
    creator: p.RawAddress;
    collection: {
      bytes: p.ByteString;
    };
    name: {
      bytes: p.ByteString;
    };
  };
};

/** Set of data sent to the event stream during a receive */
export type DepositEventData = {
  id: {
    creator: p.RawAddress;
    collection: {
      bytes: p.ByteString;
    };
    name: {
      bytes: p.ByteString;
    };
  };
  amount: p.U64;
};

/** Capability required to mint tokens. */
export type MintCapabilityData = {
  token_id: {
    creator: p.RawAddress;
    collection: {
      bytes: p.ByteString;
    };
    name: {
      bytes: p.ByteString;
    };
  };
};

/** Set of data sent to the event stream during a withdrawal */
export type WithdrawEventData = {
  id: {
    creator: p.RawAddress;
    collection: {
      bytes: p.ByteString;
    };
    name: {
      bytes: p.ByteString;
    };
  };
  amount: p.U64;
};

/** Represents ownership of a the data associated with this Token */
export type TokenData = {
  id: {
    creator: p.RawAddress;
    collection: {
      bytes: p.ByteString;
    };
    name: {
      bytes: p.ByteString;
    };
  };
  value: p.U64;
};

/** Represent the collection metadata */
export type CollectionData = {
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
  maximum: {
    vec: ReadonlyArray<p.U64>;
  };
};

/** Represent collection and token metadata for a creator */
export type CollectionsData = {
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
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
  create_token_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
  mint_token_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
};

/** create collection event with creator address and collection name */
export type CreateCollectionEventData = {
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
  maximum: {
    vec: ReadonlyArray<p.U64>;
  };
};

/** token creation event id of token created */
export type CreateTokenEventData = {
  id: {
    creator: p.RawAddress;
    collection: {
      bytes: p.ByteString;
    };
    name: {
      bytes: p.ByteString;
    };
  };
  token_data: {
    collection: {
      bytes: p.ByteString;
    };
    description: {
      bytes: p.ByteString;
    };
    name: {
      bytes: p.ByteString;
    };
    maximum: {
      vec: ReadonlyArray<p.U64>;
    };
    supply: {
      vec: ReadonlyArray<p.U64>;
    };
    uri: {
      bytes: p.ByteString;
    };
    royalty: {
      royalty_points_per_million: p.U64;
      creator_account: p.RawAddress;
    };
  };
  initial_balance: p.U64;
};

/** mint token event. This event triggered when creator adds more supply to existing token */
export type MintTokenEventData = {
  id: {
    creator: p.RawAddress;
    collection: {
      bytes: p.ByteString;
    };
    name: {
      bytes: p.ByteString;
    };
  };
  amount: p.U64;
};

/** The royalty of a token */
export type RoyaltyData = {
  royalty_points_per_million: p.U64;
  creator_account: p.RawAddress;
};

/** The data associated with the Tokens */
export type TokenDataData = {
  collection: {
    bytes: p.ByteString;
  };
  description: {
    bytes: p.ByteString;
  };
  name: {
    bytes: p.ByteString;
  };
  maximum: {
    vec: ReadonlyArray<p.U64>;
  };
  supply: {
    vec: ReadonlyArray<p.U64>;
  };
  uri: {
    bytes: p.ByteString;
  };
  royalty: {
    royalty_points_per_million: p.U64;
    creator_account: p.RawAddress;
  };
};

/** Represents a unique identity for the token */
export type TokenIdData = {
  creator: p.RawAddress;
  collection: {
    bytes: p.ByteString;
  };
  name: {
    bytes: p.ByteString;
  };
};

/** Represents token resources owned by token owner */
export type TokenStoreData = {
  tokens: {
    handle: p.U128;
    length: p.U64;
  };
  deposit_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
  withdraw_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
};

/**
 * Payload arguments for {@link TokenModule.create_limited_collection_script}.
 */
export type CreateLimitedCollectionScriptPayload = {
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

/**
 * Payload arguments for {@link TokenModule.create_limited_token_script}.
 */
export type CreateLimitedTokenScriptPayload = {
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

/**
 * Payload arguments for {@link TokenModule.create_unlimited_collection_script}.
 */
export type CreateUnlimitedCollectionScriptPayload = {
  args: {
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `Vector(U8)` */
    description: p.ByteString;
    /** IDL type: `Vector(U8)` */
    uri: p.ByteString;
  };
};

/**
 * Payload arguments for {@link TokenModule.create_unlimited_token_script}.
 */
export type CreateUnlimitedTokenScriptPayload = {
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

/**
 * Payload arguments for {@link TokenModule.direct_transfer_script}.
 */
export type DirectTransferScriptPayload = {
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

/**
 * Payload arguments for {@link TokenModule.initialize_token_for_id}.
 */
export type InitializeTokenForIdPayload = {
  args: {
    /** IDL type: `Address` */
    creators_address: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    collection: p.ByteString;
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
  };
};

/** Entrypoint builders. */
export const entrypoints = {
  create_limited_collection_script: ({
    args,
  }: CreateLimitedCollectionScriptPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::Token::create_limited_collection_script",
    type_arguments: [],
    arguments: [
      args.name,
      args.description,
      args.uri,
      p.serializers.u64(args.maximum),
    ],
  }),

  create_limited_token_script: ({
    args,
  }: CreateLimitedTokenScriptPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::Token::create_limited_token_script",
    type_arguments: [],
    arguments: [
      args.collection,
      args.name,
      args.description,
      args.monitor_supply,
      p.serializers.u64(args.initial_balance),
      p.serializers.u64(args.maximum),
      args.uri,
      p.serializers.u64(args.royalty_points_per_million),
    ],
  }),

  create_unlimited_collection_script: ({
    args,
  }: CreateUnlimitedCollectionScriptPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::Token::create_unlimited_collection_script",
    type_arguments: [],
    arguments: [args.name, args.description, args.uri],
  }),

  create_unlimited_token_script: ({
    args,
  }: CreateUnlimitedTokenScriptPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::Token::create_unlimited_token_script",
    type_arguments: [],
    arguments: [
      args.collection,
      args.name,
      args.description,
      args.monitor_supply,
      p.serializers.u64(args.initial_balance),
      args.uri,
      p.serializers.u64(args.royalty_points_per_million),
    ],
  }),

  direct_transfer_script: ({
    args,
  }: DirectTransferScriptPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::Token::direct_transfer_script",
    type_arguments: [],
    arguments: [
      args.creators_address,
      args.collection,
      args.name,
      p.serializers.u64(args.amount),
    ],
  }),

  initialize_token_for_id: ({
    args,
  }: InitializeTokenForIdPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::Token::initialize_token_for_id",
    type_arguments: [],
    arguments: [args.creators_address, args.collection, args.name],
  }),

  initialize_token_script: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::Token::initialize_token_script",
    type_arguments: [],
    arguments: [],
  }),
} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Token",
  doc: "This module provides the foundation for Tokens.",
  functions: [
    {
      name: "create_limited_collection_script",
      ty_args: [],
      args: [
        { name: "name", ty: { vector: "u8" } },
        { name: "description", ty: { vector: "u8" } },
        { name: "uri", ty: { vector: "u8" } },
        { name: "maximum", ty: "u64" },
      ],
    },
    {
      name: "create_limited_token_script",
      ty_args: [],
      args: [
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
        { name: "description", ty: { vector: "u8" } },
        { name: "monitor_supply", ty: "bool" },
        { name: "initial_balance", ty: "u64" },
        { name: "maximum", ty: "u64" },
        { name: "uri", ty: { vector: "u8" } },
        { name: "royalty_points_per_million", ty: "u64" },
      ],
    },
    {
      name: "create_unlimited_collection_script",
      ty_args: [],
      args: [
        { name: "name", ty: { vector: "u8" } },
        { name: "description", ty: { vector: "u8" } },
        { name: "uri", ty: { vector: "u8" } },
      ],
    },
    {
      name: "create_unlimited_token_script",
      ty_args: [],
      args: [
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
        { name: "description", ty: { vector: "u8" } },
        { name: "monitor_supply", ty: "bool" },
        { name: "initial_balance", ty: "u64" },
        { name: "uri", ty: { vector: "u8" } },
        { name: "royalty_points_per_million", ty: "u64" },
      ],
    },
    {
      name: "direct_transfer_script",
      ty_args: [],
      args: [
        { name: "creators_address", ty: "address" },
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
        { name: "amount", ty: "u64" },
      ],
    },
    {
      name: "initialize_token_for_id",
      ty_args: [],
      args: [
        { name: "creators_address", ty: "address" },
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
      ],
    },
    { name: "initialize_token_script", ty_args: [], args: [] },
  ],
  structs: [
    {
      name: "0x1::Token::BurnCapability",
      doc: "Capability required to burn tokens.",
      fields: [
        { name: "token_id", ty: { struct: { name: "0x1::Token::TokenId" } } },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::Token::DepositEvent",
      doc: "Set of data sent to the event stream during a receive",
      fields: [
        { name: "id", ty: { struct: { name: "0x1::Token::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Token::MintCapability",
      doc: "Capability required to mint tokens.",
      fields: [
        { name: "token_id", ty: { struct: { name: "0x1::Token::TokenId" } } },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::Token::WithdrawEvent",
      doc: "Set of data sent to the event stream during a withdrawal",
      fields: [
        { name: "id", ty: { struct: { name: "0x1::Token::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Token::Token",
      doc: "Represents ownership of a the data associated with this Token",
      fields: [
        { name: "id", ty: { struct: { name: "0x1::Token::TokenId" } } },
        { name: "value", ty: "u64" },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::Token::Collection",
      doc: "Represent the collection metadata",
      fields: [
        { name: "description", ty: { struct: { name: "0x1::ASCII::String" } } },
        { name: "name", ty: { struct: { name: "0x1::ASCII::String" } } },
        { name: "uri", ty: { struct: { name: "0x1::ASCII::String" } } },
        { name: "count", ty: "u64" },
        {
          name: "maximum",
          ty: { struct: { name: "0x1::Option::Option", ty_args: ["u64"] } },
        },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::Token::Collections",
      doc: "Represent collection and token metadata for a creator",
      fields: [
        {
          name: "collections",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                { struct: { name: "0x1::ASCII::String" } },
                { struct: { name: "0x1::Token::Collection" } },
              ],
            },
          },
        },
        {
          name: "token_data",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                { struct: { name: "0x1::Token::TokenId" } },
                { struct: { name: "0x1::Token::TokenData" } },
              ],
            },
          },
        },
        {
          name: "burn_capabilities",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                { struct: { name: "0x1::Token::TokenId" } },
                { struct: { name: "0x1::Token::BurnCapability" } },
              ],
            },
          },
        },
        {
          name: "mint_capabilities",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                { struct: { name: "0x1::Token::TokenId" } },
                { struct: { name: "0x1::Token::MintCapability" } },
              ],
            },
          },
        },
        {
          name: "create_collection_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::Token::CreateCollectionEvent" } },
              ],
            },
          },
        },
        {
          name: "create_token_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Token::CreateTokenEvent" } }],
            },
          },
        },
        {
          name: "mint_token_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Token::MintTokenEvent" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::Token::CreateCollectionEvent",
      doc: "create collection event with creator address and collection name",
      fields: [
        { name: "creator", ty: "address" },
        {
          name: "collection_name",
          ty: { struct: { name: "0x1::ASCII::String" } },
        },
        { name: "uri", ty: { struct: { name: "0x1::ASCII::String" } } },
        { name: "description", ty: { struct: { name: "0x1::ASCII::String" } } },
        {
          name: "maximum",
          ty: { struct: { name: "0x1::Option::Option", ty_args: ["u64"] } },
        },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Token::CreateTokenEvent",
      doc: "token creation event id of token created",
      fields: [
        { name: "id", ty: { struct: { name: "0x1::Token::TokenId" } } },
        {
          name: "token_data",
          ty: { struct: { name: "0x1::Token::TokenData" } },
        },
        { name: "initial_balance", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Token::MintTokenEvent",
      doc: "mint token event. This event triggered when creator adds more supply to existing token",
      fields: [
        { name: "id", ty: { struct: { name: "0x1::Token::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Token::Royalty",
      doc: "The royalty of a token",
      fields: [
        { name: "royalty_points_per_million", ty: "u64" },
        { name: "creator_account", ty: "address" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::Token::TokenData",
      doc: "The data associated with the Tokens",
      fields: [
        { name: "collection", ty: { struct: { name: "0x1::ASCII::String" } } },
        { name: "description", ty: { struct: { name: "0x1::ASCII::String" } } },
        { name: "name", ty: { struct: { name: "0x1::ASCII::String" } } },
        {
          name: "maximum",
          ty: { struct: { name: "0x1::Option::Option", ty_args: ["u64"] } },
        },
        {
          name: "supply",
          ty: { struct: { name: "0x1::Option::Option", ty_args: ["u64"] } },
        },
        { name: "uri", ty: { struct: { name: "0x1::ASCII::String" } } },
        { name: "royalty", ty: { struct: { name: "0x1::Token::Royalty" } } },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::Token::TokenId",
      doc: "Represents a unique identity for the token",
      fields: [
        { name: "creator", ty: "address" },
        { name: "collection", ty: { struct: { name: "0x1::ASCII::String" } } },
        { name: "name", ty: { struct: { name: "0x1::ASCII::String" } } },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::Token::TokenStore",
      doc: "Represents token resources owned by token owner",
      fields: [
        {
          name: "tokens",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                { struct: { name: "0x1::Token::TokenId" } },
                { struct: { name: "0x1::Token::Token" } },
              ],
            },
          },
        },
        {
          name: "deposit_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Token::DepositEvent" } }],
            },
          },
        },
        {
          name: "withdraw_events",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Token::WithdrawEvent" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {
    "0": { name: "EALREADY_HAS_BALANCE" },
    "1": { name: "EBALANCE_NOT_PUBLISHED" },
    "2": { name: "ECOLLECTIONS_NOT_PUBLISHED" },
    "3": { name: "ECOLLECTION_NOT_PUBLISHED" },
    "4": { name: "ECOLLECTION_ALREADY_EXISTS" },
    "5": { name: "ECREATE_WOULD_EXCEED_MAXIMUM" },
    "6": { name: "EINSUFFICIENT_BALANCE" },
    "7": { name: "EINVALID_COLLECTION_NAME" },
    "8": { name: "EINVALID_TOKEN_MERGE" },
    "9": { name: "EMINT_WOULD_EXCEED_MAXIMUM" },
    "10": { name: "ENO_BURN_CAPABILITY" },
    "11": { name: "ENO_MINT_CAPABILITY" },
    "12": { name: "ETOKEN_ALREADY_EXISTS" },
    "13": { name: "ETOKEN_NOT_PUBLISHED" },
    "14": { name: "ETOKEN_STORE_NOT_PUBLISHED" },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Token",
  /** The name of the module. */
  NAME: "Token",
} as const;

/** Module errors. */
export const errors = {
  EALREADY_HAS_BALANCE: {
    code: 0,
    name: "EALREADY_HAS_BALANCE",
  },
  EBALANCE_NOT_PUBLISHED: {
    code: 1,
    name: "EBALANCE_NOT_PUBLISHED",
  },
  ECOLLECTIONS_NOT_PUBLISHED: {
    code: 2,
    name: "ECOLLECTIONS_NOT_PUBLISHED",
  },
  ECOLLECTION_ALREADY_EXISTS: {
    code: 4,
    name: "ECOLLECTION_ALREADY_EXISTS",
  },
  ECOLLECTION_NOT_PUBLISHED: {
    code: 3,
    name: "ECOLLECTION_NOT_PUBLISHED",
  },
  ECREATE_WOULD_EXCEED_MAXIMUM: {
    code: 5,
    name: "ECREATE_WOULD_EXCEED_MAXIMUM",
  },
  EINSUFFICIENT_BALANCE: {
    code: 6,
    name: "EINSUFFICIENT_BALANCE",
  },
  EINVALID_COLLECTION_NAME: {
    code: 7,
    name: "EINVALID_COLLECTION_NAME",
  },
  EINVALID_TOKEN_MERGE: {
    code: 8,
    name: "EINVALID_TOKEN_MERGE",
  },
  EMINT_WOULD_EXCEED_MAXIMUM: {
    code: 9,
    name: "EMINT_WOULD_EXCEED_MAXIMUM",
  },
  ENO_BURN_CAPABILITY: {
    code: 10,
    name: "ENO_BURN_CAPABILITY",
  },
  ENO_MINT_CAPABILITY: {
    code: 11,
    name: "ENO_MINT_CAPABILITY",
  },
  ETOKEN_ALREADY_EXISTS: {
    code: 12,
    name: "ETOKEN_ALREADY_EXISTS",
  },
  ETOKEN_NOT_PUBLISHED: {
    code: 13,
    name: "ETOKEN_NOT_PUBLISHED",
  },
  ETOKEN_STORE_NOT_PUBLISHED: {
    code: 14,
    name: "ETOKEN_STORE_NOT_PUBLISHED",
  },
} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** This module provides the foundation for Tokens. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Token"
> as typeof moduleImpl;
