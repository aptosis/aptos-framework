/**
 * This module implements ECDSA signatures based on the prime-order secp256k1 ellptic curve (i.e., cofactor is 1).
 *
 * **Module ID:** `0x1::secp256k1`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * A 64-byte ECDSA public key.
 *
 * Type name: `0x1::secp256k1::ECDSARawPublicKey`
 */
export interface IECDSARawPublicKey {
  bytes: p.ByteString;
}

/**
 * A 64-byte ECDSA signature.
 *
 * Type name: `0x1::secp256k1::ECDSASignature`
 */
export interface IECDSASignature {
  bytes: p.ByteString;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::secp256k1" as const;
/** The name of the module. */
export const NAME = "secp256k1" as const;

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
    name: "E_DESERIALIZE",
    doc: "An error occurred while deserializing, for example due to wrong input size.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  ECDSARawPublicKey: "0x1::secp256k1::ECDSARawPublicKey",
  ECDSASignature: "0x1::secp256k1::ECDSASignature",
} as const;

/** Payload generators for module `0x1::secp256k1`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module implements ECDSA signatures based on the prime-order secp256k1 ellptic curve (i.e., cofactor is 1). */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "secp256k1"
> as typeof moduleImpl;
