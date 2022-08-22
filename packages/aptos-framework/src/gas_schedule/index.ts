/**
 * This module defines structs and methods to initialize VM configurations,
 * including different costs of running the VM.
 *
 * **Module ID:** `0x1::gas_schedule`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::gas_schedule::GasEntry` */
export interface IGasEntry {
  key: string;
  val: p.U64;
}

/** Type name: `0x1::gas_schedule::GasSchedule` */
export interface IGasSchedule {
  entries: ReadonlyArray<{
    key: string;
    val: p.U64;
  }>;
}

/** Payload arguments for {@link entry.set_gas_schedule}. */
export type SetGasScheduleArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    gas_schedule_blob: p.ByteString;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::gas_schedule" as const;
/** The name of the module. */
export const NAME = "gas_schedule" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "EINVALID_GAS_SCHEDULE",
    doc: "The provided gas schedule bytes are empty or invalid",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  set_gas_schedule: {
    name: "set_gas_schedule",
    doc: "This can be called by on-chain governance to update gas schedule.",
    ty_args: [],
    args: [
      {
        name: "gas_schedule_blob",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  GasSchedule: "0x1::gas_schedule::GasSchedule",
} as const;

/** All struct types. */
export const structs = {
  GasEntry: "0x1::gas_schedule::GasEntry",
  GasSchedule: "0x1::gas_schedule::GasSchedule",
} as const;

/** Payload generators for module `0x1::gas_schedule`. */
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
  "gas_schedule"
> as typeof moduleImpl;
