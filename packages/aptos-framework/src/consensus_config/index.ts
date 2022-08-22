/**
 * Maintains the consensus config for the blockchain. The config is stored in a
 * Reconfiguration, and may be updated by root.
 *
 * **Module ID:** `0x1::consensus_config`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::consensus_config::ConsensusConfig` */
export interface IConsensusConfig {
  config: p.ByteString;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::consensus_config" as const;
/** The name of the module. */
export const NAME = "consensus_config" as const;

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
    name: "EINVALID_CONFIG",
    doc: "The provided on chain config bytes are empty or invalid",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  ConsensusConfig: "0x1::consensus_config::ConsensusConfig",
} as const;

/** All struct types. */
export const structs = {
  ConsensusConfig: "0x1::consensus_config::ConsensusConfig",
} as const;

/** Payload generators for module `0x1::consensus_config`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Maintains the consensus config for the blockchain. The config is stored in a
 * Reconfiguration, and may be updated by root.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "consensus_config"
> as typeof moduleImpl;
