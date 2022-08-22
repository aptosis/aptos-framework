/**
 * Module errors.
 *
 * @module
 */
/** Wrong number of bytes were given as input when deserializing an Ed25519 public key. */
export const E_WRONG_PUBKEY_SIZE = {
  code: 1,
  name: "E_WRONG_PUBKEY_SIZE",
  doc: "Wrong number of bytes were given as input when deserializing an Ed25519 public key.",
} as const;

/** Wrong number of bytes were given as input when deserializing an Ed25519 signature. */
export const E_WRONG_SIGNATURE_SIZE = {
  code: 2,
  name: "E_WRONG_SIGNATURE_SIZE",
  doc: "Wrong number of bytes were given as input when deserializing an Ed25519 signature.",
} as const;
