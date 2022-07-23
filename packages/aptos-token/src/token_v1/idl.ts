/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x2::token_v1",
  doc: "This module provides the foundation for Tokens.",
  functions: [
    {
      name: "mint",
      doc: "Mint more token from an existing token_data. Mint only adds more token to serial_number 0",
      ty_args: [],
      args: [
        { name: "token_data_address", ty: "address" },
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
        { name: "amount", ty: "u64" },
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
        { name: "serial_number", ty: "u64" },
      ],
    },
    { name: "initialize_token_script", ty_args: [], args: [] },
    {
      name: "create_collection_script",
      doc: "create a empty token collection with parameters",
      ty_args: [],
      args: [
        { name: "name", ty: { vector: "u8" } },
        { name: "description", ty: { vector: "u8" } },
        { name: "uri", ty: { vector: "u8" } },
        { name: "maximum", ty: "u64" },
        { name: "mutate_setting", ty: { vector: "bool" } },
      ],
    },
    {
      name: "create_token_script",
      doc: "create token with raw inputs",
      ty_args: [],
      args: [
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
        { name: "description", ty: { vector: "u8" } },
        { name: "balance", ty: "u64" },
        { name: "maximum", ty: "u64" },
        { name: "uri", ty: { vector: "u8" } },
        { name: "royalty_payee_address", ty: "address" },
        { name: "royalty_points_denominator", ty: "u64" },
        { name: "royalty_points_nominator", ty: "u64" },
        { name: "token_mutate_setting", ty: { vector: "bool" } },
        { name: "property_keys", ty: { vector: { vector: "u8" } } },
        { name: "property_values", ty: { vector: { vector: "u8" } } },
        { name: "property_types", ty: { vector: { vector: "u8" } } },
      ],
    },
    {
      name: "initialize_token_authority_store_script",
      doc: "initialize capability store for storing all token capabilities\nthis function should be called by any account that plan to own tokens",
      ty_args: [],
      args: [],
    },
  ],
  structs: [
    {
      name: "0x2::token_v1::BurnCapability",
      fields: [
        {
          name: "token_id",
          ty: { struct: { name: "0x2::token_v1::TokenId" } },
        },
      ],
      abilities: ["drop"],
    },
    {
      name: "0x2::token_v1::DepositEvent",
      doc: "Set of data sent to the event stream during a receive",
      fields: [
        { name: "id", ty: { struct: { name: "0x2::token_v1::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x2::token_v1::MintCapability",
      doc: "Capability required to mint tokens.",
      fields: [
        {
          name: "token_id",
          ty: { struct: { name: "0x2::token_v1::TokenId" } },
        },
      ],
      abilities: ["store"],
    },
    {
      name: "0x2::token_v1::WithdrawEvent",
      doc: "Set of data sent to the event stream during a withdrawal",
      fields: [
        { name: "id", ty: { struct: { name: "0x2::token_v1::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x2::token_v1::Collection",
      doc: "Represent the collection metadata",
      fields: [
        {
          name: "description",
          ty: { struct: { name: "0x1::string::String" } },
        },
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
        { name: "uri", ty: { struct: { name: "0x1::string::String" } } },
        { name: "count", ty: "u64" },
        { name: "maximum", ty: "u64" },
        {
          name: "mutability_config",
          ty: { struct: { name: "0x2::token_v1::CollectionMutabilityConfig" } },
        },
      ],
      abilities: ["store"],
    },
    {
      name: "0x2::token_v1::Collections",
      doc: "Represent collection and token metadata for a creator",
      fields: [
        {
          name: "collections",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x1::string::String" } },
                { struct: { name: "0x2::token_v1::Collection" } },
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
                { struct: { name: "0x2::token_v1::TokenDataId" } },
                { struct: { name: "0x2::token_v1::TokenData" } },
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
                { struct: { name: "0x2::token_v1::TokenId" } },
                { struct: { name: "0x2::token_v1::MintCapability" } },
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
                { struct: { name: "0x2::token_v1::CreateCollectionEvent" } },
              ],
            },
          },
        },
        {
          name: "create_token_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x2::token_v1::CreateTokenEvent" } },
              ],
            },
          },
        },
        {
          name: "mint_token_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x2::token_v1::MintTokenEvent" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x2::token_v1::CreateCollectionEvent",
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
      name: "0x2::token_v1::CreateTokenEvent",
      doc: "token creation event id of token created",
      fields: [
        { name: "id", ty: { struct: { name: "0x2::token_v1::TokenId" } } },
        { name: "initial_balance", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x2::token_v1::MintTokenEvent",
      doc: "mint token event. This event triggered when creator adds more supply to existing token",
      fields: [
        { name: "id", ty: { struct: { name: "0x2::token_v1::TokenId" } } },
        { name: "amount", ty: "u64" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x2::token_v1::Royalty",
      doc: "The royalty of a token",
      fields: [
        { name: "royalty_points_nominator", ty: "u64" },
        { name: "royalty_points_denominator", ty: "u64" },
        { name: "payee_address", ty: "address" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x2::token_v1::Token",
      fields: [
        { name: "id", ty: { struct: { name: "0x2::token_v1::TokenId" } } },
        { name: "value", ty: "u64" },
      ],
      abilities: ["store"],
    },
    {
      name: "0x2::token_v1::TokenData",
      doc: "The shared TokenData by tokens with different serial_number",
      fields: [
        { name: "id", ty: { struct: { name: "0x2::token_v1::TokenDataId" } } },
        { name: "maximum", ty: "u64" },
        { name: "largest_serial_number", ty: "u64" },
        { name: "supply", ty: "u64" },
        { name: "uri", ty: { struct: { name: "0x1::string::String" } } },
        { name: "royalty", ty: { struct: { name: "0x2::token_v1::Royalty" } } },
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
        {
          name: "description",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "properties",
          ty: { struct: { name: "0x2::property_map::PropertyMap" } },
        },
        {
          name: "mutability_config",
          ty: { struct: { name: "0x2::token_v1::TokenMutabilityConfig" } },
        },
      ],
      abilities: ["store"],
    },
    {
      name: "0x2::token_v1::TokenId",
      doc: "global unique identifier of a token",
      fields: [
        {
          name: "token_data_id",
          ty: { struct: { name: "0x2::token_v1::TokenDataId" } },
        },
        { name: "serial_number", ty: "u64" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x2::token_v1::TokenStore",
      doc: "Represents token resources owned by token owner",
      fields: [
        {
          name: "tokens",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x2::token_v1::TokenId" } },
                { struct: { name: "0x2::token_v1::Token" } },
              ],
            },
          },
        },
        {
          name: "token_properties",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x2::token_v1::TokenId" } },
                { struct: { name: "0x2::property_map::PropertyMap" } },
              ],
            },
          },
        },
        {
          name: "deposit_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x2::token_v1::DepositEvent" } }],
            },
          },
        },
        {
          name: "withdraw_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x2::token_v1::WithdrawEvent" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x2::token_v1::CollectionMutabilityConfig",
      doc: "This config specifies which fields in the Collection are mutable",
      fields: [
        { name: "description", ty: "bool" },
        { name: "uri", ty: "bool" },
        { name: "maximum", ty: "bool" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x2::token_v1::TokenAuthority",
      fields: [{ name: "burn", ty: "bool" }],
      abilities: ["store"],
    },
    {
      name: "0x2::token_v1::TokenAuthorityStore",
      fields: [
        {
          name: "token_auths",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: [
                { struct: { name: "0x2::token_v1::TokenId" } },
                { struct: { name: "0x2::token_v1::TokenAuthority" } },
              ],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x2::token_v1::TokenDataId",
      doc: "globally unique identifier of tokendata",
      fields: [
        { name: "creator", ty: "address" },
        { name: "collection", ty: { struct: { name: "0x1::string::String" } } },
        { name: "name", ty: { struct: { name: "0x1::string::String" } } },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x2::token_v1::TokenMutabilityConfig",
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
    "16": { name: "EFIELD_NOT_MUTABLE" },
    "17": { name: "EBURNCAP_EXISTS_OR_CREATED_FOR_TOKEN" },
    "18": { name: "EONLY_CREATOR_CAN_CREATE_BURN_CAP" },
    "19": { name: "EONLY_CREATOR_CAN_DELEGATE_BURN_CAP" },
    "20": { name: "ETOKEN_CAPABILITY_STORE_NOT_EXISTS" },
    "21": { name: "ETOKEN_NOT_EXISTS_IN_CAPABILITY_STORE" },
    "22": { name: "EONLY_TOKEN_OWNER_CAN_HAVE_BURN_CAP" },
    "23": { name: "ENOT_OWN_THE_CAPABILITY" },
    "24": { name: "ENO_MUTATE_CAPABILITY" },
    "25": { name: "ETOKEN_SHOULDNOT_EXIST_IN_TOKEN_STORE" },
  },
} as const;
