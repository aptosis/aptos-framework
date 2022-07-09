/**
 * The Event module defines an `EventHandleGenerator` that is used to create
 * `EventHandle`s with unique GUIDs. It contains a counter for the number
 * of `EventHandle`s it generates. An `EventHandle` is used to count the number of
 * events emitted to a handle and emit events to the event store.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * A handle for an event such that:
 * 1. Other modules can emit events to this handle.
 * 2. Storage can use this handle to prove the total number of events that happened in the past.
 */
export type EventHandleData<_T = unknown> = {
  /** Total number of events emitted to this event stream. */
  counter: p.U64;

  /** A globally unique ID for this event stream. */
  guid: {
    len_bytes: number;
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };
};

/** Deprecated. Only kept around so Aptos clients know how to deserialize existing EventHandleGenerator's */
export type EventHandleGeneratorData = {
  counter: p.U64;
  addr: p.RawAddress;
};

/** Wrapper for a GUID for layout compatibility with legacy EventHandle id's */
export type GUIDWrapperData = {
  len_bytes: number;
  guid: {
    id: {
      /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
      creation_num: p.U64;

      /** Address that created the GUID */
      addr: p.RawAddress;
    };
  };
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Event",
  doc: "The Event module defines an `EventHandleGenerator` that is used to create\n`EventHandle`s with unique GUIDs. It contains a counter for the number\nof `EventHandle`s it generates. An `EventHandle` is used to count the number of\nevents emitted to a handle and emit events to the event store.",
  functions: [],
  structs: [
    {
      name: "0x1::Event::EventHandle",
      doc: "A handle for an event such that:\n1. Other modules can emit events to this handle.\n2. Storage can use this handle to prove the total number of events that happened in the past.",
      fields: [
        {
          name: "counter",
          doc: "Total number of events emitted to this event stream.",
          ty: "u64",
        },
        {
          name: "guid",
          doc: "A globally unique ID for this event stream.",
          ty: { struct: { name: "0x1::Event::GUIDWrapper" } },
        },
      ],
      type_params: ["T"],
      abilities: ["store"],
    },
    {
      name: "0x1::Event::EventHandleGenerator",
      doc: "Deprecated. Only kept around so Aptos clients know how to deserialize existing EventHandleGenerator's",
      fields: [
        { name: "counter", ty: "u64" },
        { name: "addr", ty: "address" },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::Event::GUIDWrapper",
      doc: "Wrapper for a GUID for layout compatibility with legacy EventHandle id's",
      fields: [
        { name: "len_bytes", ty: "u8" },
        { name: "guid", ty: { struct: { name: "0x1::GUID::GUID" } } },
      ],
      abilities: ["drop", "store"],
    },
  ],
  errors: {},
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Event",
  /** The name of the module. */
  NAME: "Event",
} as const;

/** Module errors. */
export const errors = {} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  EventHandleGenerator: "0x1::Event::EventHandleGenerator",
} as const;

/** All struct types. */
export const structs = {
  EventHandle: "0x1::Event::EventHandle",
  EventHandleGenerator: "0x1::Event::EventHandleGenerator",
  GUIDWrapper: "0x1::Event::GUIDWrapper",
} as const;

/** Payload generators for module `0x1::Event`. */
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
 * The Event module defines an `EventHandleGenerator` that is used to create
 * `EventHandle`s with unique GUIDs. It contains a counter for the number
 * of `EventHandle`s it generates. An `EventHandle` is used to count the number of
 * events emitted to a handle and emit events to the event store.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Event"
> as typeof moduleImpl;
