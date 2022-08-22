/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::reconfiguration",
  doc: "Publishes configuration information for validators, and issues reconfiguration events\nto synchronize configuration changes for the validators.",
  functions: [],
  structs: [
    {
      name: "0x1::reconfiguration::Configuration",
      doc: "Holds information about state of reconfiguration",
      fields: [
        { name: "epoch", doc: "Epoch number", ty: "u64" },
        {
          name: "last_reconfiguration_time",
          doc: "Time of last reconfiguration. Only changes on reconfiguration events.",
          ty: "u64",
        },
        {
          name: "events",
          doc: "Event handle for reconfiguration events",
          ty: {
            struct: {
              name: "0x1::event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::reconfiguration::NewEpochEvent" } },
              ],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::reconfiguration::DisableReconfiguration",
      doc: "Reconfiguration disabled if this resource occurs under LibraRoot.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: ["key"],
    },
    {
      name: "0x1::reconfiguration::NewEpochEvent",
      doc: 'Event that signals consensus to start a new epoch,\nwith new configuration information. This is also called a\n"reconfiguration event"',
      fields: [{ name: "epoch", ty: "u64" }],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
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
  },
} as const;
