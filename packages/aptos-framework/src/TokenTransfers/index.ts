/**
 * This module provides the foundation for transferring of Tokens
 *
 * **Module ID:** `0x1::TokenTransfers`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type TokenTransfersData = {
  pending_claims: {
    handle: p.U128;
    length: p.U64;
  };
};

/**
 * Payload arguments for {@link entry.cancel_offer_script}.
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
 * Payload arguments for {@link entry.claim_script}.
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
 * Payload arguments for {@link entry.offer_script}.
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

export * as entry from "./entry.js";
export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::TokenTransfers" as const;
/** The name of the module. */
export const NAME = "TokenTransfers" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

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
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module provides the foundation for transferring of Tokens */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "TokenTransfers"
> as typeof moduleImpl;
