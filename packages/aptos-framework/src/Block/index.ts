/**
 * This module defines a struct storing the metadata of the block and new block events.
 *
 * **Module ID:** `0x1::Block`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type BlockMetadataData = {
  /** Height of the current block */
  height: p.U64;

  /** Time period between epochs. */
  epoch_internal: p.U64;

  /** Handle where events with the time of new blocks are emitted */
  new_block_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
};

export type NewBlockEventData = {
  epoch: p.U64;
  round: p.U64;
  previous_block_votes: ReadonlyArray<boolean>;
  proposer: p.RawAddress;
  failed_proposer_indices: ReadonlyArray<p.U64>;

  /** On-chain time during  he block at the given height */
  time_microseconds: p.U64;
};

export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Block",
  /** The name of the module. */
  NAME: "Block",
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EBLOCK_METADATA",
    doc: "The `BlockMetadata` resource is in an invalid state",
  },
  "1": {
    name: "EVM_OR_VALIDATOR",
    doc: "An invalid signer was provided. Expected the signer to be the VM or a Validator.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  BlockMetadata: "0x1::Block::BlockMetadata",
} as const;

/** All struct types. */
export const structs = {
  BlockMetadata: "0x1::Block::BlockMetadata",
  NewBlockEvent: "0x1::Block::NewBlockEvent",
} as const;

/** Payload generators for module `0x1::Block`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module defines a struct storing the metadata of the block and new block events. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Block"
> as typeof moduleImpl;
