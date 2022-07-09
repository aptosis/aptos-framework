/**
 * Maintains the version number for the blockchain.
 *
 * @module
 */
import * as p from "@movingco/prelude";

export type VersionData = {
  major: p.U64;
};

/**
 * Payload arguments for {@link VersionModule.set_version}.
 */
export type SetVersionPayload = {
  args: {
    /** IDL type: `U64` */
    major: p.U64;
  };
};

/** Entrypoint builders. */
export const entrypoints = {
  /** Updates the major version to a larger version. */
  set_version: ({ args }: SetVersionPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::Version::set_version",
    type_arguments: [],
    arguments: [p.serializers.u64(args.major)],
  }),
} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Version",
  doc: "Maintains the version number for the blockchain.",
  functions: [
    {
      name: "set_version",
      doc: "Updates the major version to a larger version.",
      ty_args: [],
      args: [{ name: "major", ty: "u64" }],
    },
  ],
  structs: [
    {
      name: "0x1::Version::Version",
      fields: [{ name: "major", ty: "u64" }],
      abilities: ["copy", "drop", "store", "key"],
    },
  ],
  errors: {
    "0": { name: "ECONFIG", doc: "Error with config" },
    "1": {
      name: "EINVALID_MAJOR_VERSION_NUMBER",
      doc: "Tried to set an invalid major version for the VM. Major versions must be strictly increasing",
    },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Version",
  /** The name of the module. */
  NAME: "Version",
} as const;

/** Module errors. */
export const errors = {
  ECONFIG: {
    code: 0,
    name: "ECONFIG",
    doc: "Error with config",
  },
  EINVALID_MAJOR_VERSION_NUMBER: {
    code: 1,
    name: "EINVALID_MAJOR_VERSION_NUMBER",
    doc: "Tried to set an invalid major version for the VM. Major versions must be strictly increasing",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "ECONFIG",
    doc: "Error with config",
  },
  "1": {
    name: "EINVALID_MAJOR_VERSION_NUMBER",
    doc: "Tried to set an invalid major version for the VM. Major versions must be strictly increasing",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  set_version: {
    name: "set_version",
    doc: "Updates the major version to a larger version.",
    ty_args: [],
    args: [
      {
        name: "major",
        ty: "u64",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  Version: "0x1::Version::Version",
} as const;

/** All struct types. */
export const structs = {
  Version: "0x1::Version::Version",
} as const;

/** Payload generators for module `0x1::Version`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** Maintains the version number for the blockchain. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Version"
> as typeof moduleImpl;
