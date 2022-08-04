/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::signature",
  doc: "Contains functions for:\n\n 1. [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) digital signatures\n\n 2. ECDSA digital signatures over secp256k1 elliptic curves\n\n 3. The minimum-pubkey-size variant of [Boneh-Lynn-Shacham (BLS) signatures](https://en.wikipedia.org/wiki/BLS_digital_signature),\n    where public keys are BLS12-381 elliptic-curve points in $\\mathbb{G}_1$ and signatures are in $\\mathbb{G}_2$,\n    as per the [IETF BLS draft standard](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bls-signature#section-2.1)",
  functions: [],
  structs: [],
  errors: {},
} as const;
