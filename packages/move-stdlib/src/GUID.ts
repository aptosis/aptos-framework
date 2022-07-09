/**
 * A module for generating globally unique identifiers
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** A globally unique identifier derived from the sender's address and a counter */
export type GUIDData = {
  id: {
    /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
    creation_num: p.U64;

    /** Address that created the GUID */
    addr: p.RawAddress;
  };
};

/** A capability to create a privileged identifier on behalf of the given address */
export type CreateCapabilityData = {
  addr: p.RawAddress;
};

/** A generator for new GUIDs. */
export type GeneratorData = {
  /** A monotonically increasing counter */
  counter: p.U64;
};

/** A non-privileged identifier that can be freely created by anyone. Useful for looking up GUID's. */
export type IDData = {
  /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
  creation_num: p.U64;

  /** Address that created the GUID */
  addr: p.RawAddress;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::GUID",
  doc: "A module for generating globally unique identifiers",
  functions: [],
  structs: [
    {
      name: "0x1::GUID::GUID",
      doc: "A globally unique identifier derived from the sender's address and a counter",
      fields: [{ name: "id", ty: { struct: { name: "0x1::GUID::ID" } } }],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::GUID::CreateCapability",
      doc: "A capability to create a privileged identifier on behalf of the given address",
      fields: [{ name: "addr", ty: "address" }],
      abilities: ["drop", "store", "key"],
    },
    {
      name: "0x1::GUID::Generator",
      doc: "A generator for new GUIDs.",
      fields: [
        {
          name: "counter",
          doc: "A monotonically increasing counter",
          ty: "u64",
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::GUID::ID",
      doc: "A non-privileged identifier that can be freely created by anyone. Useful for looking up GUID's.",
      fields: [
        {
          name: "creation_num",
          doc: "If creation_num is `i`, this is the `i+1`th GUID created by `addr`",
          ty: "u64",
        },
        { name: "addr", doc: "Address that created the GUID", ty: "address" },
      ],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": {
      name: "EGUID_GENERATOR_NOT_PUBLISHED",
      doc: "GUID generator must be published ahead of first usage of `create_with_capability` function.",
    },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::GUID",
  /** The name of the module. */
  NAME: "GUID",
} as const;

/** Module errors. */
export const errors = {
  EGUID_GENERATOR_NOT_PUBLISHED: {
    code: 0,
    name: "EGUID_GENERATOR_NOT_PUBLISHED",
    doc: "GUID generator must be published ahead of first usage of `create_with_capability` function.",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EGUID_GENERATOR_NOT_PUBLISHED",
    doc: "GUID generator must be published ahead of first usage of `create_with_capability` function.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  CreateCapability: "0x1::GUID::CreateCapability",
  Generator: "0x1::GUID::Generator",
} as const;

/** All struct types. */
export const structs = {
  CreateCapability: "0x1::GUID::CreateCapability",
  GUID: "0x1::GUID::GUID",
  Generator: "0x1::GUID::Generator",
  ID: "0x1::GUID::ID",
} as const;

/** Payload generators for module `0x1::GUID`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** A module for generating globally unique identifiers */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "GUID"
> as typeof moduleImpl;
