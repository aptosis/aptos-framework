/**
 * The IDL of the module.
 *
 * @module
 */
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
