/**
 * This module defines a struct storing the publishing policies for the VM.
 *
 * **Module ID:** `0x1::transaction_publishing_option`
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
 *
 * Type name: `0x1::transaction_publishing_option::TransactionPublishingOption`
 */
export interface ITransactionPublishingOption {
  /**
   * Only script hashes in the following list can be executed by the network. If the vector is empty, no
   * limitation would be enforced.
   */
  script_allow_list: ReadonlyArray<p.ByteString>;

  /** Anyone can publish new module if this flag is set to true. */
  module_publishing_allowed: boolean;
}

/** Payload arguments for {@link entry.set_module_publishing_allowed}. */
export type SetModulePublishingAllowedArgs = {
  args: {
    /** IDL type: `Bool` */
    is_allowed: boolean;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::transaction_publishing_option" as const;
/** The name of the module. */
export const NAME = "transaction_publishing_option" as const;

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
    "0x1::transaction_publishing_option::TransactionPublishingOption",
} as const;

/** All struct types. */
export const structs = {
  TransactionPublishingOption:
    "0x1::transaction_publishing_option::TransactionPublishingOption",
} as const;

/** Payload generators for module `0x1::transaction_publishing_option`. */
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
  "transaction_publishing_option"
> as typeof moduleImpl;
