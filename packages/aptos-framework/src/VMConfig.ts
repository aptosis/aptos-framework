/**
 * This module defines structs and methods to initialize VM configurations,
 * including different costs of running the VM.
 *
 * @module
 */
import * as p from "@movingco/prelude";

/** The struct to hold config data needed to operate the VM. */
export type VMConfigData = {
  /** Cost of running the VM. */
  gas_schedule: {
    instruction_schedule: p.ByteString;
    native_schedule: p.ByteString;
    gas_constants: {
      /** The cost per-byte read from global storage. */
      global_memory_per_byte_cost: p.U64;

      /** The cost per-byte written to storage. */
      global_memory_per_byte_write_cost: p.U64;

      /**
       * The flat minimum amount of gas required for any transaction.
       * Charged at the start of execution.
       */
      min_transaction_gas_units: p.U64;

      /** Any transaction over this size will be charged an additional amount per byte. */
      large_transaction_cutoff: p.U64;

      /**
       * The units of gas to be charged per byte over the `large_transaction_cutoff` in addition to
       * `min_transaction_gas_units` for transactions whose size exceeds `large_transaction_cutoff`.
       */
      intrinsic_gas_per_byte: p.U64;

      /**
       * ~5 microseconds should equal one unit of computational gas. We bound the maximum
       * computational time of any given transaction at roughly 20 seconds. We want this number and
       * `MAX_PRICE_PER_GAS_UNIT` to always satisfy the inequality that
       * MAXIMUM_NUMBER_OF_GAS_UNITS * MAX_PRICE_PER_GAS_UNIT < min(u64::MAX, GasUnits<GasCarrier>::MAX)
       * NB: The bound is set quite high since custom scripts aren't allowed except from predefined
       * and vetted senders.
       */
      maximum_number_of_gas_units: p.U64;

      /** The minimum gas price that a transaction can be submitted with. */
      min_price_per_gas_unit: p.U64;

      /** The maximum gas unit price that a transaction can be submitted with. */
      max_price_per_gas_unit: p.U64;
      max_transaction_size_in_bytes: p.U64;
      gas_unit_scaling_factor: p.U64;
      default_account_size: p.U64;
    };
  };
};

export type GasConstantsData = {
  /** The cost per-byte read from global storage. */
  global_memory_per_byte_cost: p.U64;

  /** The cost per-byte written to storage. */
  global_memory_per_byte_write_cost: p.U64;

  /**
   * The flat minimum amount of gas required for any transaction.
   * Charged at the start of execution.
   */
  min_transaction_gas_units: p.U64;

  /** Any transaction over this size will be charged an additional amount per byte. */
  large_transaction_cutoff: p.U64;

  /**
   * The units of gas to be charged per byte over the `large_transaction_cutoff` in addition to
   * `min_transaction_gas_units` for transactions whose size exceeds `large_transaction_cutoff`.
   */
  intrinsic_gas_per_byte: p.U64;

  /**
   * ~5 microseconds should equal one unit of computational gas. We bound the maximum
   * computational time of any given transaction at roughly 20 seconds. We want this number and
   * `MAX_PRICE_PER_GAS_UNIT` to always satisfy the inequality that
   * MAXIMUM_NUMBER_OF_GAS_UNITS * MAX_PRICE_PER_GAS_UNIT < min(u64::MAX, GasUnits<GasCarrier>::MAX)
   * NB: The bound is set quite high since custom scripts aren't allowed except from predefined
   * and vetted senders.
   */
  maximum_number_of_gas_units: p.U64;

  /** The minimum gas price that a transaction can be submitted with. */
  min_price_per_gas_unit: p.U64;

  /** The maximum gas unit price that a transaction can be submitted with. */
  max_price_per_gas_unit: p.U64;
  max_transaction_size_in_bytes: p.U64;
  gas_unit_scaling_factor: p.U64;
  default_account_size: p.U64;
};

/**
 * The gas schedule keeps two separate schedules for the gas:
 * * The instruction_schedule: This holds the gas for each bytecode instruction.
 * * The native_schedule: This holds the gas for used (per-byte operated over) for each native
 *   function.
 * A couple notes:
 * 1. In the case that an instruction is deleted from the bytecode, that part of the cost schedule
 *    still needs to remain the same; once a slot in the table is taken by an instruction, that is its
 *    slot for the rest of time (since that instruction could already exist in a module on-chain).
 * 2. The initialization of the module will publish the instruction table to the root account
 *    address, and will preload the vector with the gas schedule for instructions. The VM will then
 *    load this into memory at the startup of each block.
 */
export type GasScheduleData = {
  instruction_schedule: p.ByteString;
  native_schedule: p.ByteString;
  gas_constants: {
    /** The cost per-byte read from global storage. */
    global_memory_per_byte_cost: p.U64;

    /** The cost per-byte written to storage. */
    global_memory_per_byte_write_cost: p.U64;

    /**
     * The flat minimum amount of gas required for any transaction.
     * Charged at the start of execution.
     */
    min_transaction_gas_units: p.U64;

    /** Any transaction over this size will be charged an additional amount per byte. */
    large_transaction_cutoff: p.U64;

    /**
     * The units of gas to be charged per byte over the `large_transaction_cutoff` in addition to
     * `min_transaction_gas_units` for transactions whose size exceeds `large_transaction_cutoff`.
     */
    intrinsic_gas_per_byte: p.U64;

    /**
     * ~5 microseconds should equal one unit of computational gas. We bound the maximum
     * computational time of any given transaction at roughly 20 seconds. We want this number and
     * `MAX_PRICE_PER_GAS_UNIT` to always satisfy the inequality that
     * MAXIMUM_NUMBER_OF_GAS_UNITS * MAX_PRICE_PER_GAS_UNIT < min(u64::MAX, GasUnits<GasCarrier>::MAX)
     * NB: The bound is set quite high since custom scripts aren't allowed except from predefined
     * and vetted senders.
     */
    maximum_number_of_gas_units: p.U64;

    /** The minimum gas price that a transaction can be submitted with. */
    min_price_per_gas_unit: p.U64;

    /** The maximum gas unit price that a transaction can be submitted with. */
    max_price_per_gas_unit: p.U64;
    max_transaction_size_in_bytes: p.U64;
    gas_unit_scaling_factor: p.U64;
    default_account_size: p.U64;
  };
};

/**
 * Payload arguments for {@link VMConfigModule.set_gas_constants}.
 */
export type SetGasConstantsPayload = {
  args: {
    /** IDL type: `U64` */
    global_memory_per_byte_cost: p.U64;
    /** IDL type: `U64` */
    global_memory_per_byte_write_cost: p.U64;
    /** IDL type: `U64` */
    min_transaction_gas_units: p.U64;
    /** IDL type: `U64` */
    large_transaction_cutoff: p.U64;
    /** IDL type: `U64` */
    intrinsic_gas_per_byte: p.U64;
    /** IDL type: `U64` */
    maximum_number_of_gas_units: p.U64;
    /** IDL type: `U64` */
    min_price_per_gas_unit: p.U64;
    /** IDL type: `U64` */
    max_price_per_gas_unit: p.U64;
    /** IDL type: `U64` */
    max_transaction_size_in_bytes: p.U64;
    /** IDL type: `U64` */
    gas_unit_scaling_factor: p.U64;
    /** IDL type: `U64` */
    default_account_size: p.U64;
  };
};

/** Entrypoint builders. */
export const entrypoints = {
  set_gas_constants: ({
    args,
  }: SetGasConstantsPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::VMConfig::set_gas_constants",
    type_arguments: [],
    arguments: [
      p.serializers.u64(args.global_memory_per_byte_cost),
      p.serializers.u64(args.global_memory_per_byte_write_cost),
      p.serializers.u64(args.min_transaction_gas_units),
      p.serializers.u64(args.large_transaction_cutoff),
      p.serializers.u64(args.intrinsic_gas_per_byte),
      p.serializers.u64(args.maximum_number_of_gas_units),
      p.serializers.u64(args.min_price_per_gas_unit),
      p.serializers.u64(args.max_price_per_gas_unit),
      p.serializers.u64(args.max_transaction_size_in_bytes),
      p.serializers.u64(args.gas_unit_scaling_factor),
      p.serializers.u64(args.default_account_size),
    ],
  }),
} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::VMConfig",
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
      name: "0x1::VMConfig::VMConfig",
      doc: "The struct to hold config data needed to operate the VM.",
      fields: [
        {
          name: "gas_schedule",
          doc: "Cost of running the VM.",
          ty: { struct: { name: "0x1::VMConfig::GasSchedule" } },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::VMConfig::GasConstants",
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
      name: "0x1::VMConfig::GasSchedule",
      doc: "The gas schedule keeps two separate schedules for the gas:\n* The instruction_schedule: This holds the gas for each bytecode instruction.\n* The native_schedule: This holds the gas for used (per-byte operated over) for each native\n  function.\nA couple notes:\n1. In the case that an instruction is deleted from the bytecode, that part of the cost schedule\n   still needs to remain the same; once a slot in the table is taken by an instruction, that is its\n   slot for the rest of time (since that instruction could already exist in a module on-chain).\n2. The initialization of the module will publish the instruction table to the root account\n   address, and will preload the vector with the gas schedule for instructions. The VM will then\n   load this into memory at the startup of each block.",
      fields: [
        { name: "instruction_schedule", ty: { vector: "u8" } },
        { name: "native_schedule", ty: { vector: "u8" } },
        {
          name: "gas_constants",
          ty: { struct: { name: "0x1::VMConfig::GasConstants" } },
        },
      ],
      abilities: ["copy", "drop", "store"],
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

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::VMConfig",
  /** The name of the module. */
  NAME: "VMConfig",
} as const;

/** Module errors. */
export const errors = {
  ECONFIG: {
    code: 0,
    name: "ECONFIG",
    doc: "Error with config",
  },
  EGAS_CONSTANT_INCONSISTENCY: {
    code: 1,
    name: "EGAS_CONSTANT_INCONSISTENCY",
    doc: "The provided gas constants were inconsistent.",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "ECONFIG",
    doc: "Error with config",
  },
  "1": {
    name: "EGAS_CONSTANT_INCONSISTENCY",
    doc: "The provided gas constants were inconsistent.",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  set_gas_constants: {
    name: "set_gas_constants",
    ty_args: [],
    args: [
      {
        name: "global_memory_per_byte_cost",
        ty: "u64",
      },
      {
        name: "global_memory_per_byte_write_cost",
        ty: "u64",
      },
      {
        name: "min_transaction_gas_units",
        ty: "u64",
      },
      {
        name: "large_transaction_cutoff",
        ty: "u64",
      },
      {
        name: "intrinsic_gas_per_byte",
        ty: "u64",
      },
      {
        name: "maximum_number_of_gas_units",
        ty: "u64",
      },
      {
        name: "min_price_per_gas_unit",
        ty: "u64",
      },
      {
        name: "max_price_per_gas_unit",
        ty: "u64",
      },
      {
        name: "max_transaction_size_in_bytes",
        ty: "u64",
      },
      {
        name: "gas_unit_scaling_factor",
        ty: "u64",
      },
      {
        name: "default_account_size",
        ty: "u64",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  VMConfig: "0x1::VMConfig::VMConfig",
} as const;

/** All struct types. */
export const structs = {
  GasConstants: "0x1::VMConfig::GasConstants",
  GasSchedule: "0x1::VMConfig::GasSchedule",
  VMConfig: "0x1::VMConfig::VMConfig",
} as const;

/** Payload generators for module `0x1::VMConfig`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/**
 * This module defines structs and methods to initialize VM configurations,
 * including different costs of running the VM.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "VMConfig"
> as typeof moduleImpl;
