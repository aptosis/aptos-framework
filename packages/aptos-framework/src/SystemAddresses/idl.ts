/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::SystemAddresses",
  functions: [],
  structs: [],
  errors: {
    "0": {
      name: "ENOT_CORE_RESOURCE_ADDRESS",
      doc: "The address/account did not correspond to the core resource address",
    },
    "1": { name: "EVM", doc: "The operation can only be performed by the VM" },
    "2": {
      name: "ENOT_CORE_FRAMEWORK_ADDRESS",
      doc: "The address/account did not correspond to the core framework address",
    },
  },
} as const;
