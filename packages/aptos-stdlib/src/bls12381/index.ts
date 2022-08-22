/**
 * Contains functions for:
 *
 *     The minimum-pubkey-size variant of [Boneh-Lynn-Shacham (BLS) signatures](https://en.wikipedia.org/wiki/BLS_digital_signature),
 *     where public keys are BLS12-381 elliptic-curve points in $\mathbb{G}_1$ and signatures are in $\mathbb{G}_2$,
 *     as per the [IETF BLS draft standard](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bls-signature#section-2.1).
 *
 * **Module ID:** `0x1::bls12381`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * An aggregation of BLS signatures. This can be either a:
 *   (4) aggregated signature (i.e., an aggregation of signatures s_i, each on a message m_i)
 *   (3) multisignature (i.e., an aggregation of signatures s_i, each on the same message m)
 *
 * We distinguish between a Signature type and a AggrOrMultiSignature type to prevent developers from interchangeably
 * calling `verify_multisignature` and `verify_signature_share` to verify both multisignatures and signature shares,
 * which could create problems down the line.
 *
 * Type name: `0x1::bls12381::AggrOrMultiSignature`
 */
export interface IAggrOrMultiSignature {
  bytes: p.ByteString;
}

/**
 * An aggregation of public keys with verified PoPs, which can be used to verify multisignatures.
 *
 * Type name: `0x1::bls12381::AggrPublicKeysWithPoP`
 */
export interface IAggrPublicKeysWithPoP {
  bytes: p.ByteString;
}

/**
 * A proof-of-possession (PoP).
 * Given such a struct and a PublicKey struct, one can construct a PublicKeyWithPoP (see below).
 *
 * Type name: `0x1::bls12381::ProofOfPossession`
 */
export interface IProofOfPossession {
  bytes: p.ByteString;
}

/**
 * A *validated* public key that:
 *   (1) is a point in the prime-order subgroup of the BLS12-381 elliptic curve, and
 *   (2) is not the identity point
 *
 * This struct can be used to verify a normal (non-aggregated) signature.
 *
 * This struct can be combined with a ProofOfPossession struct in order to create a PublicKeyWithPop struct, which
 * can be used to verify a multisignature.
 *
 * Type name: `0x1::bls12381::PublicKey`
 */
export interface IPublicKey {
  bytes: p.ByteString;
}

/**
 * A *validated* public key that had a successfully-verified proof-of-possession (PoP).
 *
 * A vector of these structs can be either:
 *   (1) used to verify an aggregate signature
 *   (2) aggregated with other PublicKeyWithPoP structs into an AggrPublicKeysWithPoP, which in turn can be used
 *       to verify a multisignature
 *
 * Type name: `0x1::bls12381::PublicKeyWithPoP`
 */
export interface IPublicKeyWithPoP {
  bytes: p.ByteString;
}

/**
 * A BLS signature. This can be either a:
 *   (1) normal (non-aggregated) signature
 *   (2) signature share (for a multisignature or aggregate signature)
 *
 * Type name: `0x1::bls12381::Signature`
 */
export interface ISignature {
  bytes: p.ByteString;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::bls12381" as const;
/** The name of the module. */
export const NAME = "bls12381" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "EZERO_PUBKEYS",
    doc: "The caller was supposed to input one or more public keys.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  AggrOrMultiSignature: "0x1::bls12381::AggrOrMultiSignature",
  AggrPublicKeysWithPoP: "0x1::bls12381::AggrPublicKeysWithPoP",
  ProofOfPossession: "0x1::bls12381::ProofOfPossession",
  PublicKey: "0x1::bls12381::PublicKey",
  PublicKeyWithPoP: "0x1::bls12381::PublicKeyWithPoP",
  Signature: "0x1::bls12381::Signature",
} as const;

/** Payload generators for module `0x1::bls12381`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Contains functions for:
 *
 *     The minimum-pubkey-size variant of [Boneh-Lynn-Shacham (BLS) signatures](https://en.wikipedia.org/wiki/BLS_digital_signature),
 *     where public keys are BLS12-381 elliptic-curve points in $\mathbb{G}_1$ and signatures are in $\mathbb{G}_2$,
 *     as per the [IETF BLS draft standard](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bls-signature#section-2.1).
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "bls12381"
> as typeof moduleImpl;
