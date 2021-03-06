/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::event",
  doc: "The Event module defines an `EventHandleGenerator` that is used to create\n`EventHandle`s with unique GUIDs. It contains a counter for the number\nof `EventHandle`s it generates. An `EventHandle` is used to count the number of\nevents emitted to a handle and emit events to the event store.",
  functions: [],
  structs: [
    {
      name: "0x1::event::EventHandle",
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
          ty: { struct: { name: "0x1::guid::GUID" } },
        },
      ],
      type_params: [{ name: "T", is_phantom: true }],
      abilities: ["store"],
    },
    {
      name: "0x1::event::EventHandleGenerator",
      doc: "Deprecated. Only kept around so Aptos clients know how to deserialize existing EventHandleGenerator's",
      fields: [
        { name: "counter", ty: "u64" },
        { name: "addr", ty: "address" },
      ],
      abilities: ["key"],
    },
  ],
  errors: {},
} as const;
