/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::acl",
  doc: 'Access control list (ACL) module. An ACL is a list of account addresses who\nhave the access permission to a certain object.\nThis module uses a `vector` to represent the list, but can be refactored to\nuse a "set" instead when it\'s available in the language in the future.',
  functions: [],
  structs: [
    {
      name: "0x1::acl::ACL",
      fields: [{ name: "list", ty: { vector: "address" } }],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": { name: "ECONTAIN", doc: "The ACL already contains the address." },
    "1": { name: "ENOT_CONTAIN", doc: "The ACL does not contain the address." },
  },
} as const;
