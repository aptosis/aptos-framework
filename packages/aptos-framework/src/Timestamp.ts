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
 * @module
 */
import type * as p from "@movingco/prelude";

/** A singleton resource holding the current Unix time in microseconds */
export type CurrentTimeMicrosecondsData = {
  microseconds: p.U64;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Timestamp",
  doc: "This module keeps a global wall clock that stores the current Unix time in microseconds.\nIt interacts with the other modules in the following ways:\n\n* Genesis: to initialize the timestamp\n* ValidatorSystem, AptosAccount, Reconfiguration: to check if the current state is in the genesis state\n* Block: to reach consensus on the global wall clock time\n\nThis module moreover enables code to assert that it is running in genesis (`Self::assert_genesis`) or after\ngenesis (`Self::assert_operating`). These are essentially distinct states of the system. Specifically,\nif `Self::assert_operating` succeeds, assumptions about invariants over the global state can be made\nwhich reflect that the system has been successfully initialized.",
  functions: [],
  structs: [
    {
      name: "0x1::Timestamp::CurrentTimeMicroseconds",
      doc: "A singleton resource holding the current Unix time in microseconds",
      fields: [{ name: "microseconds", ty: "u64" }],
      abilities: ["key"],
    },
  ],
  errors: {
    "0": {
      name: "ENOT_GENESIS",
      doc: "The blockchain is not in the genesis state anymore",
    },
    "1": {
      name: "ENOT_OPERATING",
      doc: "The blockchain is not in an operating state yet",
    },
    "2": { name: "ETIMESTAMP", doc: "An invalid timestamp was provided" },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Timestamp",
  /** The name of the module. */
  NAME: "Timestamp",
} as const;

/** Module errors. */
export const errors = {
  ENOT_GENESIS: {
    code: 0,
    name: "ENOT_GENESIS",
    doc: "The blockchain is not in the genesis state anymore",
  },
  ENOT_OPERATING: {
    code: 1,
    name: "ENOT_OPERATING",
    doc: "The blockchain is not in an operating state yet",
  },
  ETIMESTAMP: {
    code: 2,
    name: "ETIMESTAMP",
    doc: "An invalid timestamp was provided",
  },
} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
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
