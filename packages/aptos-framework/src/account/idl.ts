/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::account",
  functions: [
    {
      name: "transfer",
      ty_args: [],
      args: [
        { name: "to", ty: "address" },
        { name: "amount", ty: "u64" },
      ],
    },
    {
      name: "create_account",
      doc: "Basic account creation methods.",
      ty_args: [],
      args: [{ name: "auth_key", ty: "address" }],
    },
    {
      name: "rotate_authentication_key",
      ty_args: [],
      args: [{ name: "new_auth_key", ty: { vector: "u8" } }],
    },
    {
      name: "rotate_authentication_key_ed25519",
      doc: "Rotates the authentication key and records a mapping on chain from the new authentication key to the originating\naddress of the account. To authorize the rotation, a signature under the old public key on a `RotationProofChallenge`\nis given in `current_sig`. To ensure the account owner knows the secret key corresponding to the new public key\nin `new_pubkey`, a proof-of-knowledge is given in `new_sig` (i.e., a signature under the new public key on the\nsame `RotationProofChallenge` struct).",
      ty_args: [],
      args: [
        { name: "curr_sig_bytes", ty: { vector: "u8" } },
        { name: "new_sig_bytes", ty: { vector: "u8" } },
        { name: "curr_pk_bytes", ty: { vector: "u8" } },
        { name: "new_pk_bytes", ty: { vector: "u8" } },
      ],
    },
  ],
  structs: [
    {
      name: "0x1::account::Account",
      doc: "Resource representing an account.",
      fields: [
        { name: "authentication_key", ty: { vector: "u8" } },
        { name: "sequence_number", ty: "u64" },
        {
          name: "coin_register_events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::account::CoinRegisterEvent" } },
              ],
            },
          },
        },
        {
          name: "rotation_capability_offer",
          ty: {
            struct: {
              name: "0x1::account::CapabilityOffer",
              ty_args: [
                { struct: { name: "0x1::account::RotationCapability" } },
              ],
            },
          },
        },
        {
          name: "signer_capability_offer",
          ty: {
            struct: {
              name: "0x1::account::CapabilityOffer",
              ty_args: [{ struct: { name: "0x1::account::SignerCapability" } }],
            },
          },
        },
      ],
      abilities: ["store", "key"],
    },
    {
      name: "0x1::account::CapabilityOffer",
      fields: [
        {
          name: "for",
          ty: { struct: { name: "0x1::option::Option", ty_args: ["address"] } },
        },
      ],
      type_params: [{ name: "T", is_phantom: true }],
      abilities: ["store"],
    },
    {
      name: "0x1::account::ChainSpecificAccountInfo",
      doc: "This holds information that will be picked up by the VM to call the\ncorrect chain-specific prologue and epilogue functions",
      fields: [
        { name: "module_addr", ty: "address" },
        { name: "module_name", ty: { vector: "u8" } },
        { name: "script_prologue_name", ty: { vector: "u8" } },
        { name: "module_prologue_name", ty: { vector: "u8" } },
        { name: "writeset_prologue_name", ty: { vector: "u8" } },
        { name: "multi_agent_prologue_name", ty: { vector: "u8" } },
        { name: "user_epilogue_name", ty: { vector: "u8" } },
        { name: "writeset_epilogue_name", ty: { vector: "u8" } },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::account::CoinRegisterEvent",
      fields: [
        {
          name: "type_info",
          ty: { struct: { name: "0x1::type_info::TypeInfo" } },
        },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::account::OriginatingAddress",
      fields: [
        {
          name: "address_map",
          ty: {
            struct: {
              name: "0x1::table::Table",
              ty_args: ["address", "address"],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::account::RotationCapability",
      fields: [{ name: "account", ty: "address" }],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::account::RotationProofChallenge",
      doc: "This structs stores the challenge message that should be signed during key rotation. First, this struct is\nsigned by the account owner's current public key, which proves possession of a capability to rotate the key.\nSecond, this struct is signed by the new public key that the account owner wants to rotate to, which proves\nknowledge of this new public key's associated secret key. These two signatures cannot be replayed in another\ncontext because they include the TXN's unique sequence number.",
      fields: [
        { name: "sequence_number", ty: "u64" },
        { name: "originator", ty: "address" },
        { name: "current_auth_key", ty: "address" },
        { name: "new_public_key", ty: { vector: "u8" } },
      ],
      abilities: ["copy", "drop"],
    },
    {
      name: "0x1::account::SignerCapability",
      fields: [{ name: "account", ty: "address" }],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
    "1": { name: "EACCOUNT_ALREADY_EXISTS", doc: "Account already exists" },
    "2": { name: "EACCOUNT_DOES_NOT_EXIST", doc: "Account does not exist" },
    "3": {
      name: "ESEQUENCE_NUMBER_TOO_BIG",
      doc: "Sequence number exceeds the maximum value for a u64",
    },
    "4": {
      name: "EMALFORMED_AUTHENTICATION_KEY",
      doc: "The provided authentication key has an invalid length",
    },
    "5": {
      name: "ECANNOT_RESERVED_ADDRESS",
      doc: "Cannot create account because address is reserved",
    },
    "6": {
      name: "EOUT_OF_GAS",
      doc: "Transaction exceeded its allocated max gas",
    },
    "7": { name: "EWRITESET_NOT_ALLOWED", doc: "Writesets are not allowed" },
    "8": {
      name: "EWRONG_CURRENT_PUBLIC_KEY",
      doc: "Specified current public key is not correct",
    },
    "9": {
      name: "EINVALID_PROOF_OF_KNOWLEDGE",
      doc: "Specified proof of knowledge required to prove ownership of a public key is invalid",
    },
    "10": {
      name: "ENO_CAPABILITY",
      doc: "The caller does not have a digital-signature-based capability to call this function",
    },
    "1001": {
      name: "PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY",
      doc: "Prologue errors. These are separated out from the other errors in this\nmodule since they are mapped separately to major VM statuses, and are\nimportant to the semantics of the system.",
    },
    "1002": { name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD" },
    "1003": { name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW" },
    "1004": { name: "PROLOGUE_EACCOUNT_DOES_NOT_EXIST" },
    "1005": { name: "PROLOGUE_ECANT_PAY_GAS_DEPOSIT" },
    "1006": { name: "PROLOGUE_ETRANSACTION_EXPIRED" },
    "1007": { name: "PROLOGUE_EBAD_CHAIN_ID" },
    "1008": { name: "PROLOGUE_EINVALID_WRITESET_SENDER" },
    "1009": { name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG" },
    "1010": { name: "PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH" },
  },
} as const;
