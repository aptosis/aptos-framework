/**
 * This module defines structs and methods to initialize VM configurations,
 * including different costs of running the VM.
 *
 * **Module ID:** `0x1::vm_config`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::vm_config::GasConstants` */
export interface IGasConstants {
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
}

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
 *
 * Type name: `0x1::vm_config::GasSchedule`
 */
export interface IGasSchedule {
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
}

/**
 * The struct to hold config data needed to operate the VM.
 *
 * Type name: `0x1::vm_config::VMConfig`
 */
export interface IVMConfig {
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
}

/** Payload arguments for {@link entry.set_gas_constants}. */
export type SetGasConstantsArgs = {
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

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::vm_config" as const;
/** The name of the module. */
export const NAME = "vm_config" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

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
  VMConfig: "0x1::vm_config::VMConfig",
} as const;

/** All struct types. */
export const structs = {
  GasConstants: "0x1::vm_config::GasConstants",
  GasSchedule: "0x1::vm_config::GasSchedule",
  VMConfig: "0x1::vm_config::VMConfig",
} as const;

/** Payload generators for module `0x1::vm_config`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * This module defines structs and methods to initialize VM configurations,
 * including different costs of running the VM.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "vm_config"
> as typeof moduleImpl;
