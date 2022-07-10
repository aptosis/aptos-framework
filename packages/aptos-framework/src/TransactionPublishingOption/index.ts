/**
 * This module defines a struct storing the publishing policies for the VM.
 *
 * **Module ID:** `0x1::TransactionPublishingOption`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Defines and holds the publishing policies for the VM. There are three possible configurations:
 * 1. No module publishing, only allow-listed scripts are allowed.
 * 2. No module publishing, custom scripts are allowed.
 * 3. Both module publishing and custom scripts are allowed.
 * We represent these as the following resource.
 */
export type TransactionPublishingOptionData = {
  /**
   * Only script hashes in the following list can be executed by the network. If the vector is empty, no
   * limitation would be enforced.
   */
  script_allow_list: ReadonlyArray<p.ByteString>;

  /** Anyone can publish new module if this flag is set to true. */
  module_publishing_allowed: boolean;
};

/**
 * Payload arguments for {@link entry.set_module_publishing_allowed}.
 */
export type SetModulePublishingAllowedPayload = {
  args: {
    /** IDL type: `Bool` */
    is_allowed: boolean;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::TransactionPublishingOption" as const;
/** The name of the module. */
export const NAME = "TransactionPublishingOption" as const;

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
    name: "ECONFIG",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  set_module_publishing_allowed: {
    name: "set_module_publishing_allowed",
    ty_args: [],
    args: [
      {
        name: "is_allowed",
        ty: "bool",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  TransactionPublishingOption:
    "0x1::TransactionPublishingOption::TransactionPublishingOption",
} as const;

/** All struct types. */
export const structs = {
  TransactionPublishingOption:
    "0x1::TransactionPublishingOption::TransactionPublishingOption",
} as const;

/** Payload generators for module `0x1::TransactionPublishingOption`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module defines a struct storing the publishing policies for the VM. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "TransactionPublishingOption"
> as typeof moduleImpl;
