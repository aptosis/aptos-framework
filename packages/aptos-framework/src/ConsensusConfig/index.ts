/**
 * Maintains the consensus config for the blockchain. The config is stored in a
 * Reconfiguration, and may be updated by root.
 *
 * **Module ID:** `0x1::ConsensusConfig`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type ConsensusConfigData = {
  config: p.ByteString;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::ConsensusConfig" as const;
/** The name of the module. */
export const NAME = "ConsensusConfig" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "ECONFIG",
    doc: "Error with config",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  ConsensusConfig: "0x1::ConsensusConfig::ConsensusConfig",
} as const;

/** All struct types. */
export const structs = {
  ConsensusConfig: "0x1::ConsensusConfig::ConsensusConfig",
} as const;

/** Payload generators for module `0x1::ConsensusConfig`. */
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
  "ConsensusConfig"
> as typeof moduleImpl;
