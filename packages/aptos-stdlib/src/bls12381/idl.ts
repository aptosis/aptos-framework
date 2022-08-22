/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::bls12381",
  doc: "Contains functions for:\n\n    The minimum-pubkey-size variant of [Boneh-Lynn-Shacham (BLS) signatures](https://en.wikipedia.org/wiki/BLS_digital_signature),\n    where public keys are BLS12-381 elliptic-curve points in $\\mathbb{G}_1$ and signatures are in $\\mathbb{G}_2$,\n    as per the [IETF BLS draft standard](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bls-signature#section-2.1).",
  functions: [],
  structs: [
    {
      name: "0x1::bls12381::AggrOrMultiSignature",
      doc: "An aggregation of BLS signatures. This can be either a:\n  (4) aggregated signature (i.e., an aggregation of signatures s_i, each on a message m_i)\n  (3) multisignature (i.e., an aggregation of signatures s_i, each on the same message m)\n\nWe distinguish between a Signature type and a AggrOrMultiSignature type to prevent developers from interchangeably\ncalling `verify_multisignature` and `verify_signature_share` to verify both multisignatures and signature shares,\nwhich could create problems down the line.",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::bls12381::AggrPublicKeysWithPoP",
      doc: "An aggregation of public keys with verified PoPs, which can be used to verify multisignatures.",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::bls12381::ProofOfPossession",
      doc: "A proof-of-possession (PoP).\nGiven such a struct and a PublicKey struct, one can construct a PublicKeyWithPoP (see below).",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::bls12381::PublicKey",
      doc: "A *validated* public key that:\n  (1) is a point in the prime-order subgroup of the BLS12-381 elliptic curve, and\n  (2) is not the identity point\n\nThis struct can be used to verify a normal (non-aggregated) signature.\n\nThis struct can be combined with a ProofOfPossession struct in order to create a PublicKeyWithPop struct, which\ncan be used to verify a multisignature.",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::bls12381::PublicKeyWithPoP",
      doc: "A *validated* public key that had a successfully-verified proof-of-possession (PoP).\n\nA vector of these structs can be either:\n  (1) used to verify an aggregate signature\n  (2) aggregated with other PublicKeyWithPoP structs into an AggrPublicKeysWithPoP, which in turn can be used\n      to verify a multisignature",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::bls12381::Signature",
      doc: "A BLS signature. This can be either a:\n  (1) normal (non-aggregated) signature\n  (2) signature share (for a multisignature or aggregate signature)",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "1": {
      name: "EZERO_PUBKEYS",
      doc: "The caller was supposed to input one or more public keys.",
    },
  },
} as const;
