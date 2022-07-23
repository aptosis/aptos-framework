/**
 * Module errors.
 *
 * @module
 */
/** The `BlockMetadata` resource is in an invalid state */
export const EBLOCK_METADATA = {
  code: 0,
  name: "EBLOCK_METADATA",
  doc: "The `BlockMetadata` resource is in an invalid state",
} as const;

/** An invalid signer was provided. Expected the signer to be the VM or a Validator. */
export const EVM_OR_VALIDATOR = {
  code: 1,
  name: "EVM_OR_VALIDATOR",
  doc: "An invalid signer was provided. Expected the signer to be the VM or a Validator.",
} as const;
