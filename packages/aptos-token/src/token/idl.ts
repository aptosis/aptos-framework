/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x3::token",
  doc: "This module provides the foundation for Tokens.",
  functions: [
    { name: "initialize_token_script", ty_args: [], args: [] },
    {
      name: "opt_in_direct_transfer",
      ty_args: [],
      args: [{ name: "opt_in", ty: "bool" }],
    },
  ],
  structs: [
    {
      name: "0x3::token::DepositEvent",
      doc: "Set of data sent to the event stream during a receive",
      fields: [
        { name: "id", ty: { struct: { name: "0x3::token::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x3::token::WithdrawEvent",
      doc: "Set of data sent to the event stream during a withdrawal",
      fields: [
        { name: "id", ty: { struct: { name: "0x3::token::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x3::token::BurnTokenEvent",
      fields: [
        { name: "id", ty: { struct: { name: "0x3::token::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x3::token::CollectionData",
      doc: "Represent the collection metadata",
      fields: [
        {
          name: "description",
          ty: { struct: { name: "0x1::string::String" } },
        },
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
        { name: "uri", ty: { struct: { name: "0x1::string::String" } } },
        { name: "supply", ty: "u64" },
        { name: "maximum", ty: "u64" },
        {
          name: "mutability_config",
          ty: { struct: { name: "0x3::token::CollectionMutabilityConfig" } },
        },
      ],
      abilities: ["store"],
    },
    {
      name: "0x3::token::CollectionMutabilityConfig",
      doc: "This config specifies which fields in the Collection are mutable",
      fields: [
        { name: "description", ty: "bool" },
        { name: "uri", ty: "bool" },
        { name: "maximum", ty: "bool" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x3::token::Collections",
      doc: "Represent collection and token metadata for a creator",
      fields: [
        {
          name: "collection_data",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x1::string::String" } },
                { struct: { name: "0x3::token::CollectionData" } },
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
                { struct: { name: "0x3::token::TokenDataId" } },
                { struct: { name: "0x3::token::TokenData" } },
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
                { struct: { name: "0x3::token::CreateCollectionEvent" } },
              ],
            },
          },
        },
        {
          name: "create_token_data_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x3::token::CreateTokenDataEvent" } },
              ],
            },
          },
        },
        {
          name: "mint_token_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x3::token::MintTokenEvent" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x3::token::CreateCollectionEvent",
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
        { name: "maximum", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x3::token::CreateTokenDataEvent",
      doc: "token creation event id of token created",
      fields: [
        { name: "id", ty: { struct: { name: "0x3::token::TokenDataId" } } },
        {
          name: "description",
          ty: { struct: { name: "0x1::string::String" } },
        },
        { name: "maximum", ty: "u64" },
        { name: "uri", ty: { struct: { name: "0x1::string::String" } } },
        { name: "royalty_payee_address", ty: "address" },
        { name: "royalty_points_denominator", ty: "u64" },
        { name: "royalty_points_numerator", ty: "u64" },
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
        {
          name: "mutability_config",
          ty: { struct: { name: "0x3::token::TokenMutabilityConfig" } },
        },
        {
          name: "property_keys",
          ty: { vector: { struct: { name: "0x1::string::String" } } },
        },
        { name: "property_values", ty: { vector: { vector: "u8" } } },
        {
          name: "property_types",
          ty: { vector: { struct: { name: "0x1::string::String" } } },
        },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x3::token::MintTokenEvent",
      doc: "mint token event. This event triggered when creator adds more supply to existing token",
      fields: [
        { name: "id", ty: { struct: { name: "0x3::token::TokenDataId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x3::token::MutateTokenPropertyMapEvent",
      fields: [
        { name: "old_id", ty: { struct: { name: "0x3::token::TokenId" } } },
        { name: "new_id", ty: { struct: { name: "0x3::token::TokenId" } } },
        {
          name: "keys",
          ty: { vector: { struct: { name: "0x1::string::String" } } },
        },
        { name: "values", ty: { vector: { vector: "u8" } } },
        {
          name: "types",
          ty: { vector: { struct: { name: "0x1::string::String" } } },
        },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x3::token::Royalty",
      doc: "The royalty of a token",
      fields: [
        { name: "royalty_points_numerator", ty: "u64" },
        { name: "royalty_points_denominator", ty: "u64" },
        { name: "payee_address", ty: "address" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x3::token::Token",
      fields: [
        { name: "id", ty: { struct: { name: "0x3::token::TokenId" } } },
        { name: "amount", ty: "u64" },
        {
          name: "token_properties",
          ty: { struct: { name: "0x3::property_map::PropertyMap" } },
        },
      ],
      abilities: ["store"],
    },
    {
      name: "0x3::token::TokenData",
      doc: "The shared TokenData by tokens with different property_version",
      fields: [
        { name: "maximum", ty: "u64" },
        { name: "largest_property_version", ty: "u64" },
        { name: "supply", ty: "u64" },
        { name: "uri", ty: { struct: { name: "0x1::string::String" } } },
        { name: "royalty", ty: { struct: { name: "0x3::token::Royalty" } } },
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
        {
          name: "description",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "default_properties",
          ty: { struct: { name: "0x3::property_map::PropertyMap" } },
        },
        {
          name: "mutability_config",
          ty: { struct: { name: "0x3::token::TokenMutabilityConfig" } },
        },
      ],
      abilities: ["store"],
    },
    {
      name: "0x3::token::TokenDataId",
      doc: "globally unique identifier of tokendata",
      fields: [
        { name: "creator", ty: "address" },
        { name: "collection", ty: { struct: { name: "0x1::string::String" } } },
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x3::token::TokenId",
      doc: "global unique identifier of a token",
      fields: [
        {
          name: "token_data_id",
          ty: { struct: { name: "0x3::token::TokenDataId" } },
        },
        { name: "property_version", ty: "u64" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x3::token::TokenMutabilityConfig",
      doc: "This config specifies which fields in the TokenData are mutable",
      fields: [
        { name: "maximum", ty: "bool" },
        { name: "uri", ty: "bool" },
        { name: "royalty", ty: "bool" },
        { name: "description", ty: "bool" },
        { name: "properties", ty: "bool" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x3::token::TokenStore",
      doc: "Represents token resources owned by token owner",
      fields: [
        {
          name: "tokens",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x3::token::TokenId" } },
                { struct: { name: "0x3::token::Token" } },
              ],
            },
          },
        },
        { name: "direct_transfer", ty: "bool" },
        {
          name: "deposit_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x3::token::DepositEvent" } }],
            },
          },
        },
        {
          name: "withdraw_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x3::token::WithdrawEvent" } }],
            },
          },
        },
        {
          name: "burn_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x3::token::BurnTokenEvent" } }],
            },
          },
        },
        {
          name: "mutate_token_property_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x3::token::MutateTokenPropertyMapEvent" } },
              ],
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
    "5": { name: "ECREATE_WOULD_EXCEED_COLLECTION_MAXIMUM" },
    "6": { name: "EINSUFFICIENT_BALANCE" },
    "7": { name: "EINVALID_COLLECTION_NAME" },
    "8": { name: "EINVALID_TOKEN_MERGE" },
    "9": { name: "EMINT_WOULD_EXCEED_TOKEN_MAXIMUM" },
    "10": { name: "ENO_BURN_CAPABILITY" },
    "11": { name: "ENO_MINT_CAPABILITY" },
    "12": { name: "ETOKEN_ALREADY_EXISTS" },
    "13": { name: "ETOKEN_NOT_PUBLISHED" },
    "14": { name: "ETOKEN_STORE_NOT_PUBLISHED" },
    "15": { name: "ETOKEN_SPLIT_AMOUNT_LARGER_THEN_TOKEN_AMOUNT" },
    "16": { name: "EFIELD_NOT_MUTABLE" },
    "17": { name: "ENO_MUTATE_CAPABILITY" },
    "18": { name: "ETOEKN_PROPERTY_EXISTED" },
    "19": { name: "ENO_TOKEN_IN_TOKEN_STORE" },
    "20": { name: "ENON_ZERO_PROPERTY_VERSION_ONLY_ONE_INSTANCE" },
    "21": { name: "EUSER_NOT_OPT_IN_DIRECT_TRANSFER" },
  },
} as const;
