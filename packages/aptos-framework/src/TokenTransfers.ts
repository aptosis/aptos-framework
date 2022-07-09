/**
 * This module provides the foundation for transferring of Tokens
 *
 * @module
 */
import * as p from "@movingco/prelude";

export type TokenTransfersData = {
  pending_claims: {
    handle: p.U128;
    length: p.U64;
  };
};

/**
 * Payload arguments for {@link TokenTransfersModule.cancel_offer_script}.
 */
export type CancelOfferScriptPayload = {
  args: {
    /** IDL type: `Address` */
    receiver: p.RawAddress;
    /** IDL type: `Address` */
    creator: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    collection: p.ByteString;
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
  };
};

/**
 * Payload arguments for {@link TokenTransfersModule.claim_script}.
 */
export type ClaimScriptPayload = {
  args: {
    /** IDL type: `Address` */
    sender: p.RawAddress;
    /** IDL type: `Address` */
    creator: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    collection: p.ByteString;
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
  };
};

/**
 * Payload arguments for {@link TokenTransfersModule.offer_script}.
 */
export type OfferScriptPayload = {
  args: {
    /** IDL type: `Address` */
    receiver: p.RawAddress;
    /** IDL type: `Address` */
    creator: p.RawAddress;
    /** IDL type: `Vector(U8)` */
    collection: p.ByteString;
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `U64` */
    amount: p.U64;
  };
};

/** Entrypoint builders. */
export const entrypoints = {
  cancel_offer_script: ({
    args,
  }: CancelOfferScriptPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::TokenTransfers::cancel_offer_script",
    type_arguments: [],
    arguments: [args.receiver, args.creator, args.collection, args.name],
  }),

  claim_script: ({ args }: ClaimScriptPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::TokenTransfers::claim_script",
    type_arguments: [],
    arguments: [args.sender, args.creator, args.collection, args.name],
  }),

  offer_script: ({ args }: OfferScriptPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::TokenTransfers::offer_script",
    type_arguments: [],
    arguments: [
      args.receiver,
      args.creator,
      args.collection,
      args.name,
      p.serializers.u64(args.amount),
    ],
  }),
} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::TokenTransfers",
  doc: "This module provides the foundation for transferring of Tokens",
  functions: [
    {
      name: "cancel_offer_script",
      ty_args: [],
      args: [
        { name: "receiver", ty: "address" },
        { name: "creator", ty: "address" },
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
      ],
    },
    {
      name: "claim_script",
      ty_args: [],
      args: [
        { name: "sender", ty: "address" },
        { name: "creator", ty: "address" },
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
      ],
    },
    {
      name: "offer_script",
      ty_args: [],
      args: [
        { name: "receiver", ty: "address" },
        { name: "creator", ty: "address" },
        { name: "collection", ty: { vector: "u8" } },
        { name: "name", ty: { vector: "u8" } },
        { name: "amount", ty: "u64" },
      ],
    },
  ],
  structs: [
    {
      name: "0x1::TokenTransfers::TokenTransfers",
      fields: [
        {
          name: "pending_claims",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                "address",
                {
                  struct: {
                    name: "0x1::Table::Table",
                    ty_args: [
                      { struct: { name: "0x1::Token::TokenId" } },
                      { struct: { name: "0x1::Token::Token" } },
                    ],
                  },
                },
              ],
            },
          },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {},
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::TokenTransfers",
  /** The name of the module. */
  NAME: "TokenTransfers",
} as const;

/** Module errors. */
export const errors = {} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {
  cancel_offer_script: {
    name: "cancel_offer_script",
    ty_args: [],
    args: [
      {
        name: "receiver",
        ty: "address",
      },
      {
        name: "creator",
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
  claim_script: {
    name: "claim_script",
    ty_args: [],
    args: [
      {
        name: "sender",
        ty: "address",
      },
      {
        name: "creator",
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
  offer_script: {
    name: "offer_script",
    ty_args: [],
    args: [
      {
        name: "receiver",
        ty: "address",
      },
      {
        name: "creator",
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
  TokenTransfers: "0x1::TokenTransfers::TokenTransfers",
} as const;

/** All struct types. */
export const structs = {
  TokenTransfers: "0x1::TokenTransfers::TokenTransfers",
} as const;

/** Payload generators for module `0x1::TokenTransfers`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** This module provides the foundation for transferring of Tokens */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "TokenTransfers"
> as typeof moduleImpl;
