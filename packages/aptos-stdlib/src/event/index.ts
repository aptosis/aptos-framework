/**
 * The Event module defines an `EventHandleGenerator` that is used to create
 * `EventHandle`s with unique GUIDs. It contains a counter for the number
 * of `EventHandle`s it generates. An `EventHandle` is used to count the number of
 * events emitted to a handle and emit events to the event store.
 *
 * **Module ID:** `0x1::event`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * A handle for an event such that:
 * 1. Other modules can emit events to this handle.
 * 2. Storage can use this handle to prove the total number of events that happened in the past.
 *
 * Type name: `0x1::event::EventHandle`
 */
export interface IEventHandle {
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
}

/**
 * Deprecated. Only kept around so Aptos clients know how to deserialize existing EventHandleGenerator's
 *
 * Type name: `0x1::event::EventHandleGenerator`
 */
export interface IEventHandleGenerator {
  counter: p.U64;
  addr: p.RawAddress;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::event" as const;
/** The name of the module. */
export const NAME = "event" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  EventHandleGenerator: "0x1::event::EventHandleGenerator",
} as const;

/** All struct types. */
export const structs = {
  EventHandle: "0x1::event::EventHandle",
  EventHandleGenerator: "0x1::event::EventHandleGenerator",
} as const;

/** Payload generators for module `0x1::event`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * The Event module defines an `EventHandleGenerator` that is used to create
 * `EventHandle`s with unique GUIDs. It contains a counter for the number
 * of `EventHandle`s it generates. An `EventHandle` is used to count the number of
 * events emitted to a handle and emit events to the event store.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "event"
> as typeof moduleImpl;
