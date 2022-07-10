/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
/** Create new test coins and deposit them into dst_addr's account. */
export const mint = ({ args }: mod.MintPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::TestCoin::mint",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.dst_addr),
    p.serializers.u64(args.amount),
  ],
});

/** Claim the delegated mint capability and destroy the delegated token. */
export const claim_mint_capability = (): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::TestCoin::claim_mint_capability",
  type_arguments: [],
  arguments: [],
});

/** Create delegated token for the address so the account could claim MintCapability later. */
export const delegate_mint_capability = ({
  args,
}: mod.DelegateMintCapabilityPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::TestCoin::delegate_mint_capability",
  type_arguments: [],
  arguments: [p.serializers.hexString(args.to)],
});
