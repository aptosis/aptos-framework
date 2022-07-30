/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/** Create new test coins and deposit them into dst_addr's account. */
export const mint = ({ args }: mod.MintArgs): payloads.Mint => ({
  type: "script_function_payload",
  function: "0x1::aptos_coin::mint",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.dst_addr),
    p.serializers.u64(args.amount),
  ],
});

/** Claim the delegated mint capability and destroy the delegated token. */
export const claim_mint_capability = (): payloads.ClaimMintCapability => ({
  type: "script_function_payload",
  function: "0x1::aptos_coin::claim_mint_capability",
  type_arguments: [],
  arguments: [],
});

/** Create delegated token for the address so the account could claim MintCapability later. */
export const delegate_mint_capability = ({
  args,
}: mod.DelegateMintCapabilityArgs): payloads.DelegateMintCapability => ({
  type: "script_function_payload",
  function: "0x1::aptos_coin::delegate_mint_capability",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.to)],
});
