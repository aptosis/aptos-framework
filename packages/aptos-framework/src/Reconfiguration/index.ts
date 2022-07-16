/**
 * Publishes configuration information for validators, and issues reconfiguration events
 * to synchronize configuration changes for the validators.
 *
 * **Module ID:** `0x1::Reconfiguration`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Holds information about state of reconfiguration */
export type ConfigurationData = {
  /** Epoch number */
  epoch: string;

  /** Time of last reconfiguration. Only changes on reconfiguration events. */
  last_reconfiguration_time: string;

  /** Event handle for reconfiguration events */
  events: {
    /** Total number of events emitted to this event stream. */
    counter: string;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: string;

          /** Address that created the GUID */
          addr: string;
        };
      };
    };
  };
};

/**
 * Event that signals consensus to start a new epoch,
 * with new configuration information. This is also called a
 * "reconfiguration event"
 */
export type NewEpochEventData = {
  epoch: string;
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Reconfiguration" as const;
/** The name of the module. */
export const NAME = "Reconfiguration" as const;

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
    name: "ECONFIGURATION",
    doc: "The `Configuration` resource is in an invalid state",
  },
  "1": {
    name: "ECONFIG",
    doc: "A `Reconfiguration` resource is in an invalid state",
  },
  "2": {
    name: "EMODIFY_CAPABILITY",
    doc: "A `ModifyConfigCapability` is in a different state than was expected",
  },
  "3": {
    name: "EINVALID_BLOCK_TIME",
    doc: "An invalid block time was encountered.",
  },
  "4": {
    name: "EINVALID_GUID_FOR_EVENT",
    doc: "An invalid block time was encountered.",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  force_reconfigure: {
    name: "force_reconfigure",
    doc: "Force an epoch change.",
    ty_args: [],
    args: [],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  Configuration: "0x1::Reconfiguration::Configuration",
  DisableReconfiguration: "0x1::Reconfiguration::DisableReconfiguration",
} as const;

/** All struct types. */
export const structs = {
  Configuration: "0x1::Reconfiguration::Configuration",
  DisableReconfiguration: "0x1::Reconfiguration::DisableReconfiguration",
  NewEpochEvent: "0x1::Reconfiguration::NewEpochEvent",
} as const;

/** Payload generators for module `0x1::Reconfiguration`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Publishes configuration information for validators, and issues reconfiguration events
 * to synchronize configuration changes for the validators.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Reconfiguration"
> as typeof moduleImpl;
