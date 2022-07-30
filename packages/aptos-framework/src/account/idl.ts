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
  ],
  structs: [
    {
      name: "0x1::account::Account",
      doc: "Resource representing an account.",
      fields: [
        { name: "authentication_key", ty: { vector: "u8" } },
        { name: "sequence_number", ty: "u64" },
        { name: "self_address", ty: "address" },
      ],
      abilities: ["store", "key"],
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
        { name: "currency_code_required", ty: "bool" },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::account::SignerCapability",
      fields: [{ name: "account", ty: "address" }],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
    "0": { name: "EACCOUNT", doc: "Account already existed" },
    "1": {
      name: "ESEQUENCE_NUMBER_TOO_BIG",
      doc: "Sequence number exceeded the maximum value for a u64",
    },
    "2": {
      name: "ENOT_APTOS_FRAMEWORK",
      doc: "The address provided didn't match the `aptos_framework` address.",
    },
    "3": {
      name: "EMALFORMED_AUTHENTICATION_KEY",
      doc: "The provided authentication had an invalid length",
    },
    "4": { name: "ECANNOT_CREATE_AT_VM_RESERVED" },
    "5": { name: "EGAS" },
    "6": { name: "ECANNOT_CREATE_AT_CORE_CODE" },
    "7": { name: "EADDR_NOT_MATCH_PREIMAGE" },
    "8": { name: "EWRITESET_NOT_ALLOWED" },
    "9": { name: "EMULTI_AGENT_NOT_SUPPORTED" },
    "10": { name: "EMODULE_NOT_ALLOWED" },
    "11": { name: "ESCRIPT_NOT_ALLOWED" },
    "1001": {
      name: "PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY",
      doc: "Prologue errors. These are separated out from the other errors in this\nmodule since they are mapped separately to major VM statuses, and are\nimportant to the semantics of the system.",
    },
    "1002": { name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD" },
    "1003": { name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW" },
    "1004": { name: "PROLOGUE_EACCOUNT_DNE" },
    "1005": { name: "PROLOGUE_ECANT_PAY_GAS_DEPOSIT" },
    "1006": { name: "PROLOGUE_ETRANSACTION_EXPIRED" },
    "1007": { name: "PROLOGUE_EBAD_CHAIN_ID" },
    "1008": { name: "PROLOGUE_ESCRIPT_NOT_ALLOWED" },
    "1009": { name: "PROLOGUE_EMODULE_NOT_ALLOWED" },
    "1010": { name: "PROLOGUE_EINVALID_WRITESET_SENDER" },
    "1011": { name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG" },
    "1012": { name: "PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH" },
  },
} as const;
