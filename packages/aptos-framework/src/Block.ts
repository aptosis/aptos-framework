/**
 * This module defines a struct storing the metadata of the block and new block events.
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

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Block",
  doc: "This module defines a struct storing the metadata of the block and new block events.",
  functions: [],
  structs: [
    {
      name: "0x1::Block::BlockMetadata",
      fields: [
        { name: "height", doc: "Height of the current block", ty: "u64" },
        {
          name: "epoch_internal",
          doc: "Time period between epochs.",
          ty: "u64",
        },
        {
          name: "new_block_events",
          doc: "Handle where events with the time of new blocks are emitted",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Block::NewBlockEvent" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::Block::NewBlockEvent",
      fields: [
        { name: "epoch", ty: "u64" },
        { name: "round", ty: "u64" },
        { name: "previous_block_votes", ty: { vector: "bool" } },
        { name: "proposer", ty: "address" },
        { name: "failed_proposer_indices", ty: { vector: "u64" } },
        {
          name: "time_microseconds",
          doc: "On-chain time during  he block at the given height",
          ty: "u64",
        },
      ],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
    "0": {
      name: "EBLOCK_METADATA",
      doc: "The `BlockMetadata` resource is in an invalid state",
    },
    "1": {
      name: "EVM_OR_VALIDATOR",
      doc: "An invalid signer was provided. Expected the signer to be the VM or a Validator.",
    },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Block",
  /** The name of the module. */
  NAME: "Block",
} as const;

/** Module errors. */
export const errors = {
  EBLOCK_METADATA: {
    code: 0,
    name: "EBLOCK_METADATA",
    doc: "The `BlockMetadata` resource is in an invalid state",
  },
  EVM_OR_VALIDATOR: {
    code: 1,
    name: "EVM_OR_VALIDATOR",
    doc: "An invalid signer was provided. Expected the signer to be the VM or a Validator.",
  },
} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** This module defines a struct storing the metadata of the block and new block events. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Block"
> as typeof moduleImpl;
