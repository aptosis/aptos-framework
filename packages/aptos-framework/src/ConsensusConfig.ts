/**
 * Maintains the consensus config for the blockchain. The config is stored in a
 * Reconfiguration, and may be updated by root.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type ConsensusConfigData = {
  config: p.ByteString;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::ConsensusConfig",
  doc: "Maintains the consensus config for the blockchain. The config is stored in a\nReconfiguration, and may be updated by root.",
  functions: [],
  structs: [
    {
      name: "0x1::ConsensusConfig::ConsensusConfig",
      fields: [{ name: "config", ty: { vector: "u8" } }],
      abilities: ["key"],
    },
  ],
  errors: { "0": { name: "ECONFIG", doc: "Error with config" } },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::ConsensusConfig",
  /** The name of the module. */
  NAME: "ConsensusConfig",
} as const;

/** Module errors. */
export const errors = {
  ECONFIG: {
    code: 0,
    name: "ECONFIG",
    doc: "Error with config",
  },
} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/**
 * Maintains the consensus config for the blockchain. The config is stored in a
 * Reconfiguration, and may be updated by root.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ConsensusConfig"
> as typeof moduleImpl;
