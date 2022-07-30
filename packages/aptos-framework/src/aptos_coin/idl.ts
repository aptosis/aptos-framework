/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::aptos_coin",
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
      name: "0x1::aptos_coin::AptosCoin",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: ["key"],
    },
    {
      name: "0x1::aptos_coin::Capabilities",
      fields: [
        {
          name: "mint_cap",
          ty: {
            struct: {
              name: "0x1::coin::MintCapability",
              ty_args: [{ struct: { name: "0x1::aptos_coin::AptosCoin" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::aptos_coin::DelegatedMintCapability",
      doc: "Delegation token created by delegator and can be claimed by the delegatee as MintCapability.",
      fields: [{ name: "to", ty: "address" }],
      abilities: ["store"],
    },
    {
      name: "0x1::aptos_coin::Delegations",
      doc: "The container stores the current pending delegations.",
      fields: [
        {
          name: "inner",
          ty: {
            vector: {
              struct: { name: "0x1::aptos_coin::DelegatedMintCapability" },
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
