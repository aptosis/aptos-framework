/**
 * Publishes configuration information for validators, and issues reconfiguration events
 * to synchronize configuration changes for the validators.
 *
 * **Module ID:** `0x1::reconfiguration`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Holds information about state of reconfiguration
 *
 * Type name: `0x1::reconfiguration::Configuration`
 */
export interface IConfiguration {
  /** Epoch number */
  epoch: p.U64;

  /** Time of last reconfiguration. Only changes on reconfiguration events. */
  last_reconfiguration_time: p.U64;

  /** Event handle for reconfiguration events */
  events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };
}

/**
 * Event that signals consensus to start a new epoch,
 * with new configuration information. This is also called a
 * "reconfiguration event"
 *
 * Type name: `0x1::reconfiguration::NewEpochEvent`
 */
export interface INewEpochEvent {
  epoch: p.U64;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::reconfiguration" as const;
/** The name of the module. */
export const NAME = "reconfiguration" as const;

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
    name: "ECONFIGURATION",
    doc: "The `Configuration` resource is in an invalid state",
  },
  "2": {
    name: "ECONFIG",
    doc: "A `Reconfiguration` resource is in an invalid state",
  },
  "3": {
    name: "EMODIFY_CAPABILITY",
    doc: "A `ModifyConfigCapability` is in a different state than was expected",
  },
  "4": {
    name: "EINVALID_BLOCK_TIME",
    doc: "An invalid block time was encountered.",
  },
  "5": {
    name: "EINVALID_GUID_FOR_EVENT",
    doc: "An invalid block time was encountered.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  Configuration: "0x1::reconfiguration::Configuration",
  DisableReconfiguration: "0x1::reconfiguration::DisableReconfiguration",
} as const;

/** All struct types. */
export const structs = {
  Configuration: "0x1::reconfiguration::Configuration",
  DisableReconfiguration: "0x1::reconfiguration::DisableReconfiguration",
  NewEpochEvent: "0x1::reconfiguration::NewEpochEvent",
} as const;

/** Payload generators for module `0x1::reconfiguration`. */
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
  "reconfiguration"
> as typeof moduleImpl;
