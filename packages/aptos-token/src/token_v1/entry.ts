/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/** Mint more token from an existing token_data. Mint only adds more token to serial_number 0 */
export const mint = ({ args }: mod.MintArgs): payloads.Mint => ({
  type: "script_function_payload",
  function: "0x1::token_v1::mint",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.token_data_address),
    p.serializers.hexString(args.collection),
    p.serializers.hexString(args.name),
    p.serializers.u64(args.amount),
  ],
});

export const direct_transfer_script = ({
  args,
}: mod.DirectTransferScriptArgs): payloads.DirectTransferScript => ({
  type: "script_function_payload",
  function: "0x1::token_v1::direct_transfer_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.creators_address),
    p.serializers.hexString(args.collection),
    p.serializers.hexString(args.name),
    p.serializers.u64(args.amount),
    p.serializers.u64(args.serial_number),
  ],
});

export const initialize_token_script = (): payloads.InitializeTokenScript => ({
  type: "script_function_payload",
  function: "0x1::token_v1::initialize_token_script",
  type_arguments: [],
  arguments: [],
});

/** create a empty token collection with parameters */
export const create_collection_script = ({
  args,
}: mod.CreateCollectionScriptArgs): payloads.CreateCollectionScript => ({
  type: "script_function_payload",
  function: "0x1::token_v1::create_collection_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.name),
    p.serializers.hexString(args.description),
    p.serializers.hexString(args.uri),
    p.serializers.u64(args.maximum),
    args.mutate_setting.map(
      (inner_args__mutate_setting) => inner_args__mutate_setting
    ),
  ],
});

/** create token with raw inputs */
export const create_token_script = ({
  args,
}: mod.CreateTokenScriptArgs): payloads.CreateTokenScript => ({
  type: "script_function_payload",
  function: "0x1::token_v1::create_token_script",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.collection),
    p.serializers.hexString(args.name),
    p.serializers.hexString(args.description),
    p.serializers.u64(args.balance),
    p.serializers.u64(args.maximum),
    p.serializers.hexString(args.uri),
    p.serializers.hexString(args.royalty_payee_address),
    p.serializers.u64(args.royalty_points_denominator),
    p.serializers.u64(args.royalty_points_nominator),
    args.token_mutate_setting.map(
      (inner_args__token_mutate_setting) => inner_args__token_mutate_setting
    ),
    args.property_keys.map((inner_args__property_keys) =>
      p.serializers.hexString(inner_args__property_keys)
    ),
    args.property_values.map((inner_args__property_values) =>
      p.serializers.hexString(inner_args__property_values)
    ),
    args.property_types.map((inner_args__property_types) =>
      p.serializers.hexString(inner_args__property_types)
    ),
  ],
});
