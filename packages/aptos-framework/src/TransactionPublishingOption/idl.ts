/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::TransactionPublishingOption",
  doc: "This module defines a struct storing the publishing policies for the VM.",
  functions: [
    {
      name: "set_module_publishing_allowed",
      ty_args: [],
      args: [{ name: "is_allowed", ty: "bool" }],
    },
  ],
  structs: [
    {
      name: "0x1::TransactionPublishingOption::TransactionPublishingOption",
      doc: "Defines and holds the publishing policies for the VM. There are three possible configurations:\n1. No module publishing, only allow-listed scripts are allowed.\n2. No module publishing, custom scripts are allowed.\n3. Both module publishing and custom scripts are allowed.\nWe represent these as the following resource.",
      fields: [
        {
          name: "script_allow_list",
          doc: "Only script hashes in the following list can be executed by the network. If the vector is empty, no\nlimitation would be enforced.",
          ty: { vector: { vector: "u8" } },
        },
        {
          name: "module_publishing_allowed",
          doc: "Anyone can publish new module if this flag is set to true.",
          ty: "bool",
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: { "1": { name: "ECONFIG" } },
} as const;
