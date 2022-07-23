/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::vm_config",
  doc: "This module defines structs and methods to initialize VM configurations,\nincluding different costs of running the VM.",
  functions: [
    {
      name: "set_gas_constants",
      ty_args: [],
      args: [
        { name: "global_memory_per_byte_cost", ty: "u64" },
        { name: "global_memory_per_byte_write_cost", ty: "u64" },
        { name: "min_transaction_gas_units", ty: "u64" },
        { name: "large_transaction_cutoff", ty: "u64" },
        { name: "intrinsic_gas_per_byte", ty: "u64" },
        { name: "maximum_number_of_gas_units", ty: "u64" },
        { name: "min_price_per_gas_unit", ty: "u64" },
        { name: "max_price_per_gas_unit", ty: "u64" },
        { name: "max_transaction_size_in_bytes", ty: "u64" },
        { name: "gas_unit_scaling_factor", ty: "u64" },
        { name: "default_account_size", ty: "u64" },
      ],
    },
  ],
  structs: [
    {
      name: "0x1::vm_config::GasConstants",
      fields: [
        {
          name: "global_memory_per_byte_cost",
          doc: "The cost per-byte read from global storage.",
          ty: "u64",
        },
        {
          name: "global_memory_per_byte_write_cost",
          doc: "The cost per-byte written to storage.",
          ty: "u64",
        },
        {
          name: "min_transaction_gas_units",
          doc: "The flat minimum amount of gas required for any transaction.\nCharged at the start of execution.",
          ty: "u64",
        },
        {
          name: "large_transaction_cutoff",
          doc: "Any transaction over this size will be charged an additional amount per byte.",
          ty: "u64",
        },
        {
          name: "intrinsic_gas_per_byte",
          doc: "The units of gas to be charged per byte over the `large_transaction_cutoff` in addition to\n`min_transaction_gas_units` for transactions whose size exceeds `large_transaction_cutoff`.",
          ty: "u64",
        },
        {
          name: "maximum_number_of_gas_units",
          doc: "~5 microseconds should equal one unit of computational gas. We bound the maximum\ncomputational time of any given transaction at roughly 20 seconds. We want this number and\n`MAX_PRICE_PER_GAS_UNIT` to always satisfy the inequality that\nMAXIMUM_NUMBER_OF_GAS_UNITS * MAX_PRICE_PER_GAS_UNIT < min(u64::MAX, GasUnits<GasCarrier>::MAX)\nNB: The bound is set quite high since custom scripts aren't allowed except from predefined\nand vetted senders.",
          ty: "u64",
        },
        {
          name: "min_price_per_gas_unit",
          doc: "The minimum gas price that a transaction can be submitted with.",
          ty: "u64",
        },
        {
          name: "max_price_per_gas_unit",
          doc: "The maximum gas unit price that a transaction can be submitted with.",
          ty: "u64",
        },
        { name: "max_transaction_size_in_bytes", ty: "u64" },
        { name: "gas_unit_scaling_factor", ty: "u64" },
        { name: "default_account_size", ty: "u64" },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::vm_config::GasSchedule",
      doc: "The gas schedule keeps two separate schedules for the gas:\n* The instruction_schedule: This holds the gas for each bytecode instruction.\n* The native_schedule: This holds the gas for used (per-byte operated over) for each native\n  function.\nA couple notes:\n1. In the case that an instruction is deleted from the bytecode, that part of the cost schedule\n   still needs to remain the same; once a slot in the table is taken by an instruction, that is its\n   slot for the rest of time (since that instruction could already exist in a module on-chain).\n2. The initialization of the module will publish the instruction table to the root account\n   address, and will preload the vector with the gas schedule for instructions. The VM will then\n   load this into memory at the startup of each block.",
      fields: [
        { name: "instruction_schedule", ty: { vector: "u8" } },
        { name: "native_schedule", ty: { vector: "u8" } },
        {
          name: "gas_constants",
          ty: { struct: { name: "0x1::vm_config::GasConstants" } },
        },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::vm_config::VMConfig",
      doc: "The struct to hold config data needed to operate the VM.",
      fields: [
        {
          name: "gas_schedule",
          doc: "Cost of running the VM.",
          ty: { struct: { name: "0x1::vm_config::GasSchedule" } },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {
    "0": { name: "ECONFIG", doc: "Error with config" },
    "1": {
      name: "EGAS_CONSTANT_INCONSISTENCY",
      doc: "The provided gas constants were inconsistent.",
    },
  },
} as const;
