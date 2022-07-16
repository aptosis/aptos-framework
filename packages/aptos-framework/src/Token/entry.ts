/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";

export const create_limited_collection_script = ({
  args,
}: mod.CreateLimitedCollectionScriptArgs): payloads.CreateLimitedCollectionScript => ({
  type: "script_function_payload",
  function: "0x1::Token::create_limited_collection_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.name),
    p.serializers.hexString(args.description),
    p.serializers.hexString(args.uri),
    p.serializers.u64(args.maximum),
  ],
});

export const create_limited_token_script = ({
  args,
}: mod.CreateLimitedTokenScriptArgs): payloads.CreateLimitedTokenScript => ({
  type: "script_function_payload",
  function: "0x1::Token::create_limited_token_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.collection),
    p.serializers.hexString(args.name),
    p.serializers.hexString(args.description),
    args.monitor_supply,
    p.serializers.u64(args.initial_balance),
    p.serializers.u64(args.maximum),
    p.serializers.hexString(args.uri),
    p.serializers.u64(args.royalty_points_per_million),
  ],
});

export const create_unlimited_collection_script = ({
  args,
}: mod.CreateUnlimitedCollectionScriptArgs): payloads.CreateUnlimitedCollectionScript => ({
  type: "script_function_payload",
  function: "0x1::Token::create_unlimited_collection_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.name),
    p.serializers.hexString(args.description),
    p.serializers.hexString(args.uri),
  ],
});

export const create_unlimited_token_script = ({
  args,
}: mod.CreateUnlimitedTokenScriptArgs): payloads.CreateUnlimitedTokenScript => ({
  type: "script_function_payload",
  function: "0x1::Token::create_unlimited_token_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.collection),
    p.serializers.hexString(args.name),
    p.serializers.hexString(args.description),
    args.monitor_supply,
    p.serializers.u64(args.initial_balance),
    p.serializers.hexString(args.uri),
    p.serializers.u64(args.royalty_points_per_million),
  ],
});

export const direct_transfer_script = ({
  args,
}: mod.DirectTransferScriptArgs): payloads.DirectTransferScript => ({
  type: "script_function_payload",
  function: "0x1::Token::direct_transfer_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.creators_address),
    p.serializers.hexString(args.collection),
    p.serializers.hexString(args.name),
    p.serializers.u64(args.amount),
  ],
});

export const initialize_token_for_id = ({
  args,
}: mod.InitializeTokenForIdArgs): payloads.InitializeTokenForId => ({
  type: "script_function_payload",
  function: "0x1::Token::initialize_token_for_id",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.creators_address),
    p.serializers.hexString(args.collection),
    p.serializers.hexString(args.name),
  ],
});

export const initialize_token_script = (): payloads.InitializeTokenScript => ({
  type: "script_function_payload",
  function: "0x1::Token::initialize_token_script",
  type_arguments: [],
  arguments: [],
});
