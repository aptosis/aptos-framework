/**
 * Publishes configuration information for validators, and issues reconfiguration events
 * to synchronize configuration changes for the validators.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Holds information about state of reconfiguration */
export type ConfigurationData = {
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
};

/**
 * Event that signals consensus to start a new epoch,
 * with new configuration information. This is also called a
 * "reconfiguration event"
 */
export type NewEpochEventData = {
  epoch: p.U64;
};

/** Entrypoint builders. */
export const entrypoints = {
  /** Force an epoch change. */
  force_reconfigure: (): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::Reconfiguration::force_reconfigure",
    type_arguments: [],
    arguments: [],
  }),
} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Reconfiguration",
  doc: "Publishes configuration information for validators, and issues reconfiguration events\nto synchronize configuration changes for the validators.",
  functions: [
    {
      name: "force_reconfigure",
      doc: "Force an epoch change.",
      ty_args: [],
      args: [],
    },
  ],
  structs: [
    {
      name: "0x1::Reconfiguration::Configuration",
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
              name: "0x1::Event::EventHandle",
              ty_args: [
                { struct: { name: "0x1::Reconfiguration::NewEpochEvent" } },
              ],
            },
          },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::Reconfiguration::DisableReconfiguration",
      doc: "Reconfiguration disabled if this resource occurs under LibraRoot.",
      fields: [{ name: "dummy_field", ty: "bool" }],
      abilities: ["key"],
    },
    {
      name: "0x1::Reconfiguration::NewEpochEvent",
      doc: 'Event that signals consensus to start a new epoch,\nwith new configuration information. This is also called a\n"reconfiguration event"',
      fields: [{ name: "epoch", ty: "u64" }],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
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
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Reconfiguration",
  /** The name of the module. */
  NAME: "Reconfiguration",
} as const;

/** Module errors. */
export const errors = {
  ECONFIG: {
    code: 1,
    name: "ECONFIG",
    doc: "A `Reconfiguration` resource is in an invalid state",
  },
  ECONFIGURATION: {
    code: 0,
    name: "ECONFIGURATION",
    doc: "The `Configuration` resource is in an invalid state",
  },
  EINVALID_BLOCK_TIME: {
    code: 3,
    name: "EINVALID_BLOCK_TIME",
    doc: "An invalid block time was encountered.",
  },
  EINVALID_GUID_FOR_EVENT: {
    code: 4,
    name: "EINVALID_GUID_FOR_EVENT",
    doc: "An invalid block time was encountered.",
  },
  EMODIFY_CAPABILITY: {
    code: 2,
    name: "EMODIFY_CAPABILITY",
    doc: "A `ModifyConfigCapability` is in a different state than was expected",
  },
} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/**
 * Publishes configuration information for validators, and issues reconfiguration events
 * to synchronize configuration changes for the validators.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Reconfiguration"
> as typeof moduleImpl;
