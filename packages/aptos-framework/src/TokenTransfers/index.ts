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
    handle: string;
    length: string;
  };
};

/** Payload arguments for {@link entry.cancel_offer_script}. */
export type CancelOfferScriptArgs = {
  args: {
    /** IDL type: `Address` */
    receiver: string;
    /** IDL type: `Address` */
    creator: string;
    /** IDL type: `Vector(U8)` */
    collection: string;
    /** IDL type: `Vector(U8)` */
    name: string;
  };
};

/** Payload arguments for {@link entry.claim_script}. */
export type ClaimScriptArgs = {
  args: {
    /** IDL type: `Address` */
    sender: string;
    /** IDL type: `Address` */
    creator: string;
    /** IDL type: `Vector(U8)` */
    collection: string;
    /** IDL type: `Vector(U8)` */
    name: string;
  };
};

/** Payload arguments for {@link entry.offer_script}. */
export type OfferScriptArgs = {
  args: {
    /** IDL type: `Address` */
    receiver: string;
    /** IDL type: `Address` */
    creator: string;
    /** IDL type: `Vector(U8)` */
    collection: string;
    /** IDL type: `Vector(U8)` */
    name: string;
    /** IDL type: `U64` */
    amount: string;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

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
