/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::token",
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
      name: "0x1::token::BurnCapability",
      doc: "Capability required to burn tokens.",
      fields: [
        { name: "token_id", ty: { struct: { name: "0x1::token::TokenId" } } },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::token::DepositEvent",
      doc: "Set of data sent to the event stream during a receive",
      fields: [
        { name: "id", ty: { struct: { name: "0x1::token::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::token::MintCapability",
      doc: "Capability required to mint tokens.",
      fields: [
        { name: "token_id", ty: { struct: { name: "0x1::token::TokenId" } } },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::token::WithdrawEvent",
      doc: "Set of data sent to the event stream during a withdrawal",
      fields: [
        { name: "id", ty: { struct: { name: "0x1::token::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::token::Collection",
      doc: "Represent the collection metadata",
      fields: [
        {
          name: "description",
          ty: { struct: { name: "0x1::string::String" } },
        },
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
        { name: "uri", ty: { struct: { name: "0x1::string::String" } } },
        { name: "count", ty: "u64" },
        {
          name: "maximum",
          ty: { struct: { name: "0x1::option::Option", ty_args: ["u64"] } },
        },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::token::Collections",
      doc: "Represent collection and token metadata for a creator",
      fields: [
        {
          name: "collections",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x1::string::String" } },
                { struct: { name: "0x1::token::Collection" } },
              ],
            },
          },
        },
        {
          name: "token_data",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x1::token::TokenId" } },
                { struct: { name: "0x1::token::TokenData" } },
              ],
            },
          },
        },
        {
          name: "burn_capabilities",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x1::token::TokenId" } },
                { struct: { name: "0x1::token::BurnCapability" } },
              ],
            },
          },
        },
        {
          name: "mint_capabilities",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x1::token::TokenId" } },
                { struct: { name: "0x1::token::MintCapability" } },
              ],
            },
          },
        },
        {
          name: "create_collection_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::token::CreateCollectionEvent" } },
              ],
            },
          },
        },
        {
          name: "create_token_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::token::CreateTokenEvent" } }],
            },
          },
        },
        {
          name: "mint_token_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::token::MintTokenEvent" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::token::CreateCollectionEvent",
      doc: "create collection event with creator address and collection name",
      fields: [
        { name: "creator", ty: "address" },
        {
          name: "collection_name",
          ty: { struct: { name: "0x1::string::String" } },
        },
        { name: "uri", ty: { struct: { name: "0x1::string::String" } } },
        {
          name: "description",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "maximum",
          ty: { struct: { name: "0x1::option::Option", ty_args: ["u64"] } },
        },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::token::CreateTokenEvent",
      doc: "token creation event id of token created",
      fields: [
        { name: "id", ty: { struct: { name: "0x1::token::TokenId" } } },
        {
          name: "token_data",
          ty: { struct: { name: "0x1::token::TokenData" } },
        },
        { name: "initial_balance", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::token::MintTokenEvent",
      doc: "mint token event. This event triggered when creator adds more supply to existing token",
      fields: [
        { name: "id", ty: { struct: { name: "0x1::token::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::token::Royalty",
      doc: "The royalty of a token",
      fields: [
        { name: "royalty_points_per_million", ty: "u64" },
        { name: "creator_account", ty: "address" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::token::Token",
      doc: "Represents ownership of a the data associated with this Token",
      fields: [
        { name: "id", ty: { struct: { name: "0x1::token::TokenId" } } },
        { name: "value", ty: "u64" },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::token::TokenData",
      doc: "The data associated with the Tokens",
      fields: [
        { name: "collection", ty: { struct: { name: "0x1::string::String" } } },
        {
          name: "description",
          ty: { struct: { name: "0x1::string::String" } },
        },
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
        {
          name: "maximum",
          ty: { struct: { name: "0x1::option::Option", ty_args: ["u64"] } },
        },
        {
          name: "supply",
          ty: { struct: { name: "0x1::option::Option", ty_args: ["u64"] } },
        },
        { name: "uri", ty: { struct: { name: "0x1::string::String" } } },
        { name: "royalty", ty: { struct: { name: "0x1::token::Royalty" } } },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::token::TokenId",
      doc: "Represents a unique identity for the token",
      fields: [
        { name: "creator", ty: "address" },
        { name: "collection", ty: { struct: { name: "0x1::string::String" } } },
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::token::TokenStore",
      doc: "Represents token resources owned by token owner",
      fields: [
        {
          name: "tokens",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x1::token::TokenId" } },
                { struct: { name: "0x1::token::Token" } },
              ],
            },
          },
        },
        {
          name: "deposit_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::token::DepositEvent" } }],
            },
          },
        },
        {
          name: "withdraw_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::token::WithdrawEvent" } }],
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
    "15": { name: "ETOKEN_SPLIT_AMOUNT_LARGER_THEN_TOKEN_AMOUNT" },
  },
} as const;
