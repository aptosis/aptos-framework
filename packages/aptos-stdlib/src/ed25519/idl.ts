/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::ed25519",
  doc: "Contains functions for:\n\n 1. [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) digital signatures: i.e., EdDSA signatures over Edwards25519 curves with co-factor 8",
  functions: [],
  structs: [
    {
      name: "0x1::ed25519::Signature",
      doc: "A purported Ed25519 signature that can be verified via `verify_signature_strict` or `verify_signature_strict_t`.",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::ed25519::SignedMessage",
      doc: "A BCS-serializable message, which one can verify signatures on via `verify_signature_t`",
      fields: [
        {
          name: "type_info",
          ty: { struct: { name: "0x1::type_info::TypeInfo" } },
        },
        { name: "inner", ty: { type_param: 0 } },
      ],
      type_params: [{ name: "MessageType" }],
      abilities: ["drop"],
    },
    {
      name: "0x1::ed25519::UnvalidatedPublicKey",
      doc: "An *unvalidated* Ed25519 public key: not necessarily an elliptic curve point, just a sequence of 32 bytes",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::ed25519::ValidatedPublicKey",
      doc: "A *validated* Ed25519 public key: not necessarily a prime-order point, could be mixed-order, but will never be\na small-order point.\n\nFor now, this struct is not used in any verification functions, but it might be in the future.",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "1": {
      name: "E_WRONG_PUBKEY_SIZE",
      doc: "Wrong number of bytes were given as input when deserializing an Ed25519 public key.",
    },
    "2": {
      name: "E_WRONG_SIGNATURE_SIZE",
      doc: "Wrong number of bytes were given as input when deserializing an Ed25519 signature.",
    },
  },
} as const;
