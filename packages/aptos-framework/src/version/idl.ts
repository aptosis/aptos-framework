/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::version",
  doc: "Maintains the version number for the blockchain.",
  functions: [
    {
      name: "set_version",
      doc: "Updates the major version to a larger version.\nThis is only used in test environments and outside of them, the core resources account shouldn't exist.",
      ty_args: [],
      args: [{ name: "major", ty: "u64" }],
    },
  ],
  structs: [
    {
      name: "0x1::version::Version",
      fields: [{ name: "major", ty: "u64" }],
      abilities: ["copy", "drop", "store", "key"],
    },
  ],
  errors: {
    "0": { name: "ECONFIG", doc: "Error with config" },
    "1": {
      name: "EINVALID_MAJOR_VERSION_NUMBER",
      doc: "Tried to set an invalid major version for the VM. Major versions must be strictly increasing",
    },
  },
} as const;
