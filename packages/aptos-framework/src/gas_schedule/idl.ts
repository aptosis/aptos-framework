/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::gas_schedule",
  doc: "This module defines structs and methods to initialize VM configurations,\nincluding different costs of running the VM.",
  functions: [
    {
      name: "set_gas_schedule",
      doc: "This can be called by on-chain governance to update gas schedule.",
      ty_args: [],
      args: [{ name: "gas_schedule_blob", ty: { vector: "u8" } }],
    },
  ],
  structs: [
    {
      name: "0x1::gas_schedule::GasEntry",
      fields: [
        { name: "key", ty: { struct: { name: "0x1::string::String" } } },
        { name: "val", ty: "u64" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::gas_schedule::GasSchedule",
      fields: [
        {
          name: "entries",
          ty: { vector: { struct: { name: "0x1::gas_schedule::GasEntry" } } },
        },
      ],
      abilities: ["copy", "drop", "key"],
    },
  ],
  errors: {
    "1": {
      name: "EINVALID_GAS_SCHEDULE",
      doc: "The provided gas schedule bytes are empty or invalid",
    },
  },
} as const;
