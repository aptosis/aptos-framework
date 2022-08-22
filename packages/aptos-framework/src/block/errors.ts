/**
 * Module errors.
 *
 * @module
 */
/** The number of new block events does not equal the current block height. */
export const ENUM_NEW_BLOCK_EVENTS_DOES_NOT_MATCH_BLOCK_HEIGHT = {
  code: 1,
  name: "ENUM_NEW_BLOCK_EVENTS_DOES_NOT_MATCH_BLOCK_HEIGHT",
  doc: "The number of new block events does not equal the current block height.",
} as const;

/** An invalid proposer was provided. Expected the proposer to be the VM or an active validator. */
export const EINVALID_PROPOSER = {
  code: 2,
  name: "EINVALID_PROPOSER",
  doc: "An invalid proposer was provided. Expected the proposer to be the VM or an active validator.",
} as const;

/** Epoch interval cannot be 0. */
export const EZERO_EPOCH_INTERVAL = {
  code: 3,
  name: "EZERO_EPOCH_INTERVAL",
  doc: "Epoch interval cannot be 0.",
} as const;
