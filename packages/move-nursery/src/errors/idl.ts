/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::errors",
  doc: "Module defining error codes used in Move aborts throughout the framework.\n\nA `u64` error code is constructed from two values:\n\n 1. The *error category* which is encoded in the lower 8 bits of the code. Error categories are\n    declared in this module and are globally unique across the Aptos framework. There is a limited\n    fixed set of predefined categories, and the framework is guaranteed to use those consistently.\n\n 2. The *error reason* which is encoded in the remaining 56 bits of the code. The reason is a unique\n    number relative to the module which raised the error and can be used to obtain more information about\n    the error at hand. It is mostly used for diagnosis purposes. Error reasons may change over time as the\n    framework evolves.\n\n>TODO: determine what kind of stability guarantees we give about reasons/associated module.",
  functions: [],
  structs: [],
  errors: {},
} as const;
