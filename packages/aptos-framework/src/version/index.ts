/**
 * Maintains the version number for the blockchain.
 *
 * **Module ID:** `0x1::version`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::version::Version` */
export interface IVersion {
  major: p.U64;
}

/** Payload arguments for {@link entry.set_version}. */
export type SetVersionArgs = {
  args: {
    /** IDL type: `U64` */
    major: p.U64;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::version" as const;
/** The name of the module. */
export const NAME = "version" as const;

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
    doc: "Updates the major version to a larger version.\nThis is only used in test environments and outside of them, the core resources account shouldn't exist.",
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
  Version: "0x1::version::Version",
} as const;

/** All struct types. */
export const structs = {
  Version: "0x1::version::Version",
} as const;

/** Payload generators for module `0x1::version`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** Maintains the version number for the blockchain. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "version"
> as typeof moduleImpl;
