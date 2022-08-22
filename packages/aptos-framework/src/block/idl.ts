/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::block",
  doc: "This module defines a struct storing the metadata of the block and new block events.",
  functions: [],
  structs: [
    {
      name: "0x1::block::BlockResource",
      doc: "Should be in-sync with BlockResource rust struct in new_block.rs",
      fields: [
        { name: "height", doc: "Height of the current block", ty: "u64" },
        {
          name: "epoch_interval",
          doc: "Time period between epochs.",
          ty: "u64",
        },
        {
          name: "new_block_events",
          doc: "Handle where events with the time of new blocks are emitted",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [{ struct: { name: "0x1::block::NewBlockEvent" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::block::NewBlockEvent",
      doc: "Should be in-sync with NewBlockEvent rust struct in new_block.rs",
      fields: [
        { name: "epoch", ty: "u64" },
        { name: "round", ty: "u64" },
        { name: "height", ty: "u64" },
        { name: "previous_block_votes_bitvec", ty: { vector: "u8" } },
        { name: "proposer", ty: "address" },
        { name: "failed_proposer_indices", ty: { vector: "u64" } },
        {
          name: "time_microseconds",
          doc: "On-chain time during the block at the given height",
          ty: "u64",
        },
      ],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
    "1": {
      name: "ENUM_NEW_BLOCK_EVENTS_DOES_NOT_MATCH_BLOCK_HEIGHT",
      doc: "The number of new block events does not equal the current block height.",
    },
    "2": {
      name: "EINVALID_PROPOSER",
      doc: "An invalid proposer was provided. Expected the proposer to be the VM or an active validator.",
    },
    "3": { name: "EZERO_EPOCH_INTERVAL", doc: "Epoch interval cannot be 0." },
  },
} as const;
