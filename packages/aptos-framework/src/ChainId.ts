/**
 * The chain id distinguishes between different chains (e.g., testnet and the main network).
 * One important role is to prevent transactions intended for one chain from being executed on another.
 * This code provides a container for storing a chain id and functions to initialize and get it.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type ChainIdData = {
  id: number;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::ChainId",
  doc: "The chain id distinguishes between different chains (e.g., testnet and the main network).\nOne important role is to prevent transactions intended for one chain from being executed on another.\nThis code provides a container for storing a chain id and functions to initialize and get it.",
  functions: [],
  structs: [
    {
      name: "0x1::ChainId::ChainId",
      fields: [{ name: "id", ty: "u8" }],
      abilities: ["key"],
    },
  ],
  errors: {
    "0": {
      name: "ECHAIN_ID",
      doc: "The `ChainId` resource was not in the required state",
    },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::ChainId",
  /** The name of the module. */
  NAME: "ChainId",
} as const;

/** Module errors. */
export const errors = {
  ECHAIN_ID: {
    code: 0,
    name: "ECHAIN_ID",
    doc: "The `ChainId` resource was not in the required state",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "ECHAIN_ID",
    doc: "The `ChainId` resource was not in the required state",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  ChainId: "0x1::ChainId::ChainId",
} as const;

/** All struct types. */
export const structs = {
  ChainId: "0x1::ChainId::ChainId",
} as const;

/** Payload generators for module `0x1::ChainId`. */
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
 * The chain id distinguishes between different chains (e.g., testnet and the main network).
 * One important role is to prevent transactions intended for one chain from being executed on another.
 * This code provides a container for storing a chain id and functions to initialize and get it.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ChainId"
> as typeof moduleImpl;
