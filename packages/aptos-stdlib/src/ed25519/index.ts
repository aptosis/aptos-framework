/**
 * Contains functions for:
 *
 *  1. [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) digital signatures: i.e., EdDSA signatures over Edwards25519 curves with co-factor 8
 *
 * **Module ID:** `0x1::ed25519`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * A purported Ed25519 signature that can be verified via `verify_signature_strict` or `verify_signature_strict_t`.
 *
 * Type name: `0x1::ed25519::Signature`
 */
export interface ISignature {
  bytes: p.ByteString;
}

/**
 * A BCS-serializable message, which one can verify signatures on via `verify_signature_t`
 *
 * Type name: `0x1::ed25519::SignedMessage`
 */
export interface ISignedMessage<_MessageType = unknown> {
  type_info: {
    account_address: p.RawAddress;
    module_name: p.ByteString;
    struct_name: p.ByteString;
  };
  inner: _MessageType;
}

/**
 * An *unvalidated* Ed25519 public key: not necessarily an elliptic curve point, just a sequence of 32 bytes
 *
 * Type name: `0x1::ed25519::UnvalidatedPublicKey`
 */
export interface IUnvalidatedPublicKey {
  bytes: p.ByteString;
}

/**
 * A *validated* Ed25519 public key: not necessarily a prime-order point, could be mixed-order, but will never be
 * a small-order point.
 *
 * For now, this struct is not used in any verification functions, but it might be in the future.
 *
 * Type name: `0x1::ed25519::ValidatedPublicKey`
 */
export interface IValidatedPublicKey {
  bytes: p.ByteString;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::ed25519" as const;
/** The name of the module. */
export const NAME = "ed25519" as const;

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
    name: "E_WRONG_PUBKEY_SIZE",
    doc: "Wrong number of bytes were given as input when deserializing an Ed25519 public key.",
  },
  "2": {
    name: "E_WRONG_SIGNATURE_SIZE",
    doc: "Wrong number of bytes were given as input when deserializing an Ed25519 signature.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Signature: "0x1::ed25519::Signature",
  SignedMessage: "0x1::ed25519::SignedMessage",
  UnvalidatedPublicKey: "0x1::ed25519::UnvalidatedPublicKey",
  ValidatedPublicKey: "0x1::ed25519::ValidatedPublicKey",
} as const;

/** Payload generators for module `0x1::ed25519`. */
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
 *  1. [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) digital signatures: i.e., EdDSA signatures over Edwards25519 curves with co-factor 8
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ed25519"
> as typeof moduleImpl;
