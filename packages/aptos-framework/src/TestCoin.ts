/**
 * This module defines a minimal and generic Coin and Balance.
 * modified from https://github.com/move-language/move/tree/main/language/documentation/tutorial
 *
 * @module
 */
import * as p from "@movingco/prelude";

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
 * Payload arguments for {@link TestCoinModule.mint}.
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
 * Payload arguments for {@link TestCoinModule.delegate_mint_capability}.
 */
export type DelegateMintCapabilityPayload = {
  args: {
    /** IDL type: `Address` */
    to: p.RawAddress;
  };
};

/** Entrypoint builders. */
export const entrypoints = {
  /** Create new test coins and deposit them into dst_addr's account. */
  mint: ({ args }: MintPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::TestCoin::mint",
    type_arguments: [],
    arguments: [args.dst_addr, p.serializers.u64(args.amount)],
  }),

  /** Claim the delegated mint capability and destroy the delegated token. */
  claim_mint_capability: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::TestCoin::claim_mint_capability",
    type_arguments: [],
    arguments: [],
  }),

  /** Create delegated token for the address so the account could claim MintCapability later. */
  delegate_mint_capability: ({
    args,
  }: DelegateMintCapabilityPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::TestCoin::delegate_mint_capability",
    type_arguments: [],
    arguments: [args.to],
  }),
} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::TestCoin",
  doc: "This module defines a minimal and generic Coin and Balance.\nmodified from https://github.com/move-language/move/tree/main/language/documentation/tutorial",
  functions: [
    {
      name: "mint",
      doc: "Create new test coins and deposit them into dst_addr's account.",
      ty_args: [],
      args: [
        { name: "dst_addr", ty: "address" },
        { name: "amount", ty: "u64" },
      ],
    },
    {
      name: "claim_mint_capability",
      doc: "Claim the delegated mint capability and destroy the delegated token.",
      ty_args: [],
      args: [],
    },
    {
      name: "delegate_mint_capability",
      doc: "Create delegated token for the address so the account could claim MintCapability later.",
      ty_args: [],
      args: [{ name: "to", ty: "address" }],
    },
  ],
  structs: [
    {
      name: "0x1::TestCoin::TestCoin",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: ["key"],
    },
    {
      name: "0x1::TestCoin::Capabilities",
      fields: [
        {
          name: "mint_cap",
          ty: {
            struct: {
              name: "0x1::Coin::MintCapability",
              ty_args: [{ struct: { name: "0x1::TestCoin::TestCoin" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::TestCoin::DelegatedMintCapability",
      doc: "Delegation token created by delegator and can be claimed by the delegatee as MintCapability.",
      fields: [{ name: "to", ty: "address" }],
      abilities: ["store"],
    },
    {
      name: "0x1::TestCoin::Delegations",
      doc: "The container stores the current pending delegations.",
      fields: [
        {
          name: "inner",
          ty: {
            vector: {
              struct: { name: "0x1::TestCoin::DelegatedMintCapability" },
            },
          },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {
    "1": { name: "ENO_CAPABILITIES", doc: "Error codes" },
    "2": { name: "EALREADY_DELEGATED" },
    "3": { name: "EDELEGATION_NOT_FOUND" },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::TestCoin",
  /** The name of the module. */
  NAME: "TestCoin",
} as const;

/** Module errors. */
export const errors = {
  EALREADY_DELEGATED: {
    code: 2,
    name: "EALREADY_DELEGATED",
  },
  EDELEGATION_NOT_FOUND: {
    code: 3,
    name: "EDELEGATION_NOT_FOUND",
  },
  ENO_CAPABILITIES: {
    code: 1,
    name: "ENO_CAPABILITIES",
    doc: "Error codes",
  },
} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/**
 * This module defines a minimal and generic Coin and Balance.
 * modified from https://github.com/move-language/move/tree/main/language/documentation/tutorial
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "TestCoin"
> as typeof moduleImpl;
