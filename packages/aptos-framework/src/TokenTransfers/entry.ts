/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";

export const cancel_offer_script = ({
  args,
}: mod.CancelOfferScriptPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::TokenTransfers::cancel_offer_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.receiver),
    p.serializers.hexString(args.creator),
    p.serializers.hexString(args.collection),
    p.serializers.hexString(args.name),
  ],
});

export const claim_script = ({
  args,
}: mod.ClaimScriptPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::TokenTransfers::claim_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.sender),
    p.serializers.hexString(args.creator),
    p.serializers.hexString(args.collection),
    p.serializers.hexString(args.name),
  ],
});

export const offer_script = ({
  args,
}: mod.OfferScriptPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::TokenTransfers::offer_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.receiver),
    p.serializers.hexString(args.creator),
    p.serializers.hexString(args.collection),
    p.serializers.hexString(args.name),
    p.serializers.u64(args.amount),
  ],
});
