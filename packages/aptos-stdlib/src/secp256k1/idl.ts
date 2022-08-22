/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::secp256k1",
  doc: "This module implements ECDSA signatures based on the prime-order secp256k1 ellptic curve (i.e., cofactor is 1).",
  functions: [],
  structs: [
    {
      name: "0x1::secp256k1::ECDSARawPublicKey",
      doc: "A 64-byte ECDSA public key.",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::secp256k1::ECDSASignature",
      doc: "A 64-byte ECDSA signature.",
      fields: [{ name: "bytes", ty: { vector: "u8" } }],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "1": {
      name: "E_DESERIALIZE",
      doc: "An error occurred while deserializing, for example due to wrong input size.",
    },
  },
} as const;
