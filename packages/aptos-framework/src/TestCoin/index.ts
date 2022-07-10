/**
 * This module defines a minimal and generic Coin and Balance.
 * modified from https://github.com/move-language/move/tree/main/language/documentation/tutorial
 *
 * **Module ID:** `0x1::TestCoin`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type CapabilitiesData = {
  mint_cap: {
    dummy_field: boolean;
  };
};

/** Delegation token created by delegator and can be claimed by the delegatee as MintCapability. */
export type DelegatedMintCapabilityData = {
  to: p.RawAddress;
};

/** The container stores the current pending delegations. */
export type DelegationsData = {
  inner: ReadonlyArray<{
    to: p.RawAddress;
  }>;
};

/**
 * Payload arguments for {@link entry.mint}.
 */
export type MintPayload = {
  args: {
    /** IDL type: `Address` */
    dst_addr: p.RawAddress;
    /** IDL type: `U64` */
    amount: p.U64;
  };
};

/**
 * Payload arguments for {@link entry.delegate_mint_capability}.
 */
export type DelegateMintCapabilityPayload = {
  args: {
    /** IDL type: `Address` */
    to: p.RawAddress;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::TestCoin" as const;
/** The name of the module. */
export const NAME = "TestCoin" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "ENO_CAPABILITIES",
    doc: "Error codes",
  },
  "2": {
    name: "EALREADY_DELEGATED",
  },
  "3": {
    name: "EDELEGATION_NOT_FOUND",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  claim_mint_capability: {
    name: "claim_mint_capability",
    doc: "Claim the delegated mint capability and destroy the delegated token.",
    ty_args: [],
    args: [],
  },
  delegate_mint_capability: {
    name: "delegate_mint_capability",
    doc: "Create delegated token for the address so the account could claim MintCapability later.",
    ty_args: [],
    args: [
      {
        name: "to",
        ty: "address",
      },
    ],
  },
  mint: {
    name: "mint",
    doc: "Create new test coins and deposit them into dst_addr's account.",
    ty_args: [],
    args: [
      {
        name: "dst_addr",
        ty: "address",
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
  Capabilities: "0x1::TestCoin::Capabilities",
  Delegations: "0x1::TestCoin::Delegations",
  TestCoin: "0x1::TestCoin::TestCoin",
} as const;

/** All struct types. */
export const structs = {
  Capabilities: "0x1::TestCoin::Capabilities",
  DelegatedMintCapability: "0x1::TestCoin::DelegatedMintCapability",
  Delegations: "0x1::TestCoin::Delegations",
  TestCoin: "0x1::TestCoin::TestCoin",
} as const;

/** Payload generators for module `0x1::TestCoin`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * This module defines a minimal and generic Coin and Balance.
 * modified from https://github.com/move-language/move/tree/main/language/documentation/tutorial
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "TestCoin"
> as typeof moduleImpl;
