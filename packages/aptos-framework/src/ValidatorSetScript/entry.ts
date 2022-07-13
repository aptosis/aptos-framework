/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";

export const add_validator = ({
  args,
}: mod.AddValidatorPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::ValidatorSetScript::add_validator",
  type_arguments: [],
  arguments: [p.serializers.hexString(args._validator_addr)],
});

export const create_validator_account = ({
  args,
}: mod.CreateValidatorAccountPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::ValidatorSetScript::create_validator_account",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args._new_account_address),
    p.serializers.hexString(args._human_name),
  ],
});

export const create_validator_operator_account = ({
  args,
}: mod.CreateValidatorOperatorAccountPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::ValidatorSetScript::create_validator_operator_account",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args._new_account_address),
    p.serializers.hexString(args._human_name),
  ],
});

export const register_validator_config = ({
  args,
}: mod.RegisterValidatorConfigPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::ValidatorSetScript::register_validator_config",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args._validator_address),
    p.serializers.hexString(args._consensus_pubkey),
    p.serializers.hexString(args._validator_network_addresses),
    p.serializers.hexString(args._fullnode_network_addresses),
  ],
});

export const remove_validator = ({
  args,
}: mod.RemoveValidatorPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::ValidatorSetScript::remove_validator",
  type_arguments: [],
  arguments: [p.serializers.hexString(args._validator_addr)],
});

export const set_validator_config_and_reconfigure = ({
  args,
}: mod.SetValidatorConfigAndReconfigurePayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::ValidatorSetScript::set_validator_config_and_reconfigure",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args._validator_account),
    p.serializers.hexString(args._consensus_pubkey),
    p.serializers.hexString(args._validator_network_addresses),
    p.serializers.hexString(args._fullnode_network_addresses),
  ],
});

export const set_validator_operator = ({
  args,
}: mod.SetValidatorOperatorPayload): p.ScriptFunctionPayload => ({
  type: "script_function_payload",
  function: "0x1::ValidatorSetScript::set_validator_operator",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args._operator_name),
    p.serializers.hexString(args._operator_account),
  ],
});