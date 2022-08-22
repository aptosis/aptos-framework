/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::timestamp",
  doc: "This module keeps a global wall clock that stores the current Unix time in microseconds.\nIt interacts with the other modules in the following ways:\n\n* Genesis: to initialize the timestamp\n* ValidatorSystem, AptosAccount, Reconfiguration: to check if the current state is in the genesis state\n* Block: to reach consensus on the global wall clock time\n\nThis module moreover enables code to assert that it is running in genesis (`Self::assert_genesis`) or after\ngenesis (`Self::assert_operating`). These are essentially distinct states of the system. Specifically,\nif `Self::assert_operating` succeeds, assumptions about invariants over the global state can be made\nwhich reflect that the system has been successfully initialized.",
  functions: [],
  structs: [
    {
      name: "0x1::timestamp::CurrentTimeMicroseconds",
      doc: "A singleton resource holding the current Unix time in microseconds",
      fields: [{ name: "microseconds", ty: "u64" }],
      abilities: ["key"],
    },
  ],
  errors: {
    "1": {
      name: "ENOT_OPERATING",
      doc: "The blockchain is not in an operating state yet",
    },
    "2": {
      name: "EINVALID_TIMESTAMP",
      doc: "An invalid timestamp was provided",
    },
  },
} as const;
