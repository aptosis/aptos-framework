/**
 * This module keeps a global wall clock that stores the current Unix time in microseconds.
 * It interacts with the other modules in the following ways:
 *
 * * Genesis: to initialize the timestamp
 * * ValidatorSystem, AptosAccount, Reconfiguration: to check if the current state is in the genesis state
 * * Block: to reach consensus on the global wall clock time
 *
 * This module moreover enables code to assert that it is running in genesis (`Self::assert_genesis`) or after
 * genesis (`Self::assert_operating`). These are essentially distinct states of the system. Specifically,
 * if `Self::assert_operating` succeeds, assumptions about invariants over the global state can be made
 * which reflect that the system has been successfully initialized.
 *
 * **Module ID:** `0x1::Timestamp`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** A singleton resource holding the current Unix time in microseconds */
export type CurrentTimeMicrosecondsData = {
  microseconds: string;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Timestamp" as const;
/** The name of the module. */
export const NAME = "Timestamp" as const;

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
    name: "ENOT_GENESIS",
    doc: "The blockchain is not in the genesis state anymore",
  },
  "1": {
    name: "ENOT_OPERATING",
    doc: "The blockchain is not in an operating state yet",
  },
  "2": {
    name: "ETIMESTAMP",
    doc: "An invalid timestamp was provided",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  CurrentTimeMicroseconds: "0x1::Timestamp::CurrentTimeMicroseconds",
} as const;

/** All struct types. */
export const structs = {
  CurrentTimeMicroseconds: "0x1::Timestamp::CurrentTimeMicroseconds",
} as const;

/** Payload generators for module `0x1::Timestamp`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * This module keeps a global wall clock that stores the current Unix time in microseconds.
 * It interacts with the other modules in the following ways:
 *
 * * Genesis: to initialize the timestamp
 * * ValidatorSystem, AptosAccount, Reconfiguration: to check if the current state is in the genesis state
 * * Block: to reach consensus on the global wall clock time
 *
 * This module moreover enables code to assert that it is running in genesis (`Self::assert_genesis`) or after
 * genesis (`Self::assert_operating`). These are essentially distinct states of the system. Specifically,
 * if `Self::assert_operating` succeeds, assumptions about invariants over the global state can be made
 * which reflect that the system has been successfully initialized.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Timestamp"
> as typeof moduleImpl;
