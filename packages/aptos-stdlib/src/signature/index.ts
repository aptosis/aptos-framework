/**
 * Contains functions for:
 *
 *  1. [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) digital signatures
 *
 *  2. ECDSA digital signatures over secp256k1 elliptic curves
 *
 *  3. The minimum-pubkey-size variant of [Boneh-Lynn-Shacham (BLS) signatures](https://en.wikipedia.org/wiki/BLS_digital_signature),
 *     where public keys are BLS12-381 elliptic-curve points in $\mathbb{G}_1$ and signatures are in $\mathbb{G}_2$,
 *     as per the [IETF BLS draft standard](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bls-signature#section-2.1)
 *
 * **Module ID:** `0x1::signature`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::signature" as const;
/** The name of the module. */
export const NAME = "signature" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::signature`. */
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
 *  1. [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) digital signatures
 *
 *  2. ECDSA digital signatures over secp256k1 elliptic curves
 *
 *  3. The minimum-pubkey-size variant of [Boneh-Lynn-Shacham (BLS) signatures](https://en.wikipedia.org/wiki/BLS_digital_signature),
 *     where public keys are BLS12-381 elliptic-curve points in $\mathbb{G}_1$ and signatures are in $\mathbb{G}_2$,
 *     as per the [IETF BLS draft standard](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bls-signature#section-2.1)
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "signature"
> as typeof moduleImpl;
