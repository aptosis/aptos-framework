/**
 * This module provides the foundation for Tokens.
 *
 * **Module ID:** `0x3::token`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Set of data sent to the event stream during a receive
 *
 * Type name: `0x3::token::DepositEvent`
 */
export interface IDepositEvent {
  id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: string;
      name: string;
    };
    property_version: p.U64;
  };
  amount: p.U64;
}

/**
 * Set of data sent to the event stream during a withdrawal
 *
 * Type name: `0x3::token::WithdrawEvent`
 */
export interface IWithdrawEvent {
  id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: string;
      name: string;
    };
    property_version: p.U64;
  };
  amount: p.U64;
}

/** Type name: `0x3::token::BurnTokenEvent` */
export interface IBurnTokenEvent {
  id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: string;
      name: string;
    };
    property_version: p.U64;
  };
  amount: p.U64;
}

/**
 * Represent the collection metadata
 *
 * Type name: `0x3::token::CollectionData`
 */
export interface ICollectionData {
  description: string;
  name: string;
  uri: string;
  supply: p.U64;
  maximum: p.U64;
  mutability_config: {
    description: boolean;
    uri: boolean;
    maximum: boolean;
  };
}

/**
 * This config specifies which fields in the Collection are mutable
 *
 * Type name: `0x3::token::CollectionMutabilityConfig`
 */
export interface ICollectionMutabilityConfig {
  description: boolean;
  uri: boolean;
  maximum: boolean;
}

/**
 * Represent collection and token metadata for a creator
 *
 * Type name: `0x3::token::Collections`
 */
export interface ICollections {
  collection_data: {
    handle: p.U128;
  };
  token_data: {
    handle: p.U128;
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
  create_token_data_events: {
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
 * Type name: `0x3::token::CreateCollectionEvent`
 */
export interface ICreateCollectionEvent {
  creator: p.RawAddress;
  collection_name: string;
  uri: string;
  description: string;
  maximum: p.U64;
}

/**
 * token creation event id of token created
 *
 * Type name: `0x3::token::CreateTokenDataEvent`
 */
export interface ICreateTokenDataEvent {
  id: {
    creator: p.RawAddress;
    collection: string;
    name: string;
  };
  description: string;
  maximum: p.U64;
  uri: string;
  royalty_payee_address: p.RawAddress;
  royalty_points_denominator: p.U64;
  royalty_points_numerator: p.U64;
  name: string;
  mutability_config: {
    maximum: boolean;
    uri: boolean;
    royalty: boolean;
    description: boolean;
    properties: boolean;
  };
  property_keys: ReadonlyArray<string>;
  property_values: ReadonlyArray<p.ByteString>;
  property_types: ReadonlyArray<string>;
}

/**
 * mint token event. This event triggered when creator adds more supply to existing token
 *
 * Type name: `0x3::token::MintTokenEvent`
 */
export interface IMintTokenEvent {
  id: {
    creator: p.RawAddress;
    collection: string;
    name: string;
  };
  amount: p.U64;
}

/** Type name: `0x3::token::MutateTokenPropertyMapEvent` */
export interface IMutateTokenPropertyMapEvent {
  old_id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: string;
      name: string;
    };
    property_version: p.U64;
  };
  new_id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: string;
      name: string;
    };
    property_version: p.U64;
  };
  keys: ReadonlyArray<string>;
  values: ReadonlyArray<p.ByteString>;
  types: ReadonlyArray<string>;
}

/**
 * The royalty of a token
 *
 * Type name: `0x3::token::Royalty`
 */
export interface IRoyalty {
  royalty_points_numerator: p.U64;
  royalty_points_denominator: p.U64;
  payee_address: p.RawAddress;
}

/** Type name: `0x3::token::Token` */
export interface IToken {
  id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: string;
      name: string;
    };
    property_version: p.U64;
  };
  amount: p.U64;
  token_properties: {
    map: {
      data: ReadonlyArray<{
        key: string;
        value: {
          value: p.ByteString;
          type: string;
        };
      }>;
    };
  };
}

/**
 * The shared TokenData by tokens with different property_version
 *
 * Type name: `0x3::token::TokenData`
 */
export interface ITokenData {
  maximum: p.U64;
  largest_property_version: p.U64;
  supply: p.U64;
  uri: string;
  royalty: {
    royalty_points_numerator: p.U64;
    royalty_points_denominator: p.U64;
    payee_address: p.RawAddress;
  };
  name: string;
  description: string;
  default_properties: {
    map: {
      data: ReadonlyArray<{
        key: string;
        value: {
          value: p.ByteString;
          type: string;
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
 * globally unique identifier of tokendata
 *
 * Type name: `0x3::token::TokenDataId`
 */
export interface ITokenDataId {
  creator: p.RawAddress;
  collection: string;
  name: string;
}

/**
 * global unique identifier of a token
 *
 * Type name: `0x3::token::TokenId`
 */
export interface ITokenId {
  token_data_id: {
    creator: p.RawAddress;
    collection: string;
    name: string;
  };
  property_version: p.U64;
}

/**
 * This config specifies which fields in the TokenData are mutable
 *
 * Type name: `0x3::token::TokenMutabilityConfig`
 */
export interface ITokenMutabilityConfig {
  maximum: boolean;
  uri: boolean;
  royalty: boolean;
  description: boolean;
  properties: boolean;
}

/**
 * Represents token resources owned by token owner
 *
 * Type name: `0x3::token::TokenStore`
 */
export interface ITokenStore {
  tokens: {
    handle: p.U128;
  };
  direct_transfer: boolean;
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
  burn_events: {
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
  mutate_token_property_events: {
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

/** Payload arguments for {@link entry.opt_in_direct_transfer}. */
export type OptInDirectTransferArgs = {
  args: {
    /** IDL type: `Bool` */
    opt_in: boolean;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x3" as const;
/** The full module name. */
export const FULL_NAME = "0x3::token" as const;
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
    name: "ECREATE_WOULD_EXCEED_COLLECTION_MAXIMUM",
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
    name: "EMINT_WOULD_EXCEED_TOKEN_MAXIMUM",
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
    name: "ENO_MUTATE_CAPABILITY",
  },
  "18": {
    name: "ETOEKN_PROPERTY_EXISTED",
  },
  "19": {
    name: "ENO_TOKEN_IN_TOKEN_STORE",
  },
  "20": {
    name: "ENON_ZERO_PROPERTY_VERSION_ONLY_ONE_INSTANCE",
  },
  "21": {
    name: "EUSER_NOT_OPT_IN_DIRECT_TRANSFER",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  initialize_token_script: {
    name: "initialize_token_script",
    ty_args: [],
    args: [],
  },
  opt_in_direct_transfer: {
    name: "opt_in_direct_transfer",
    ty_args: [],
    args: [
      {
        name: "opt_in",
        ty: "bool",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  Collections: "0x3::token::Collections",
  TokenStore: "0x3::token::TokenStore",
} as const;

/** All struct types. */
export const structs = {
  BurnTokenEvent: "0x3::token::BurnTokenEvent",
  CollectionData: "0x3::token::CollectionData",
  CollectionMutabilityConfig: "0x3::token::CollectionMutabilityConfig",
  Collections: "0x3::token::Collections",
  CreateCollectionEvent: "0x3::token::CreateCollectionEvent",
  CreateTokenDataEvent: "0x3::token::CreateTokenDataEvent",
  DepositEvent: "0x3::token::DepositEvent",
  MintTokenEvent: "0x3::token::MintTokenEvent",
  MutateTokenPropertyMapEvent: "0x3::token::MutateTokenPropertyMapEvent",
  Royalty: "0x3::token::Royalty",
  Token: "0x3::token::Token",
  TokenData: "0x3::token::TokenData",
  TokenDataId: "0x3::token::TokenDataId",
  TokenId: "0x3::token::TokenId",
  TokenMutabilityConfig: "0x3::token::TokenMutabilityConfig",
  TokenStore: "0x3::token::TokenStore",
  WithdrawEvent: "0x3::token::WithdrawEvent",
} as const;

/** Payload generators for module `0x3::token`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module provides the foundation for Tokens. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x3",
  "token"
> as typeof moduleImpl;
