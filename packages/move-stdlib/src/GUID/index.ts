/**
 * A module for generating globally unique identifiers
 *
 * **Module ID:** `0x1::GUID`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** A globally unique identifier derived from the sender's address and a counter */
export type GUIDData = {
  id: {
    /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
    creation_num: string;

    /** Address that created the GUID */
    addr: string;
  };
};

/** A capability to create a privileged identifier on behalf of the given address */
export type CreateCapabilityData = {
  addr: string;
};

/** A generator for new GUIDs. */
export type GeneratorData = {
  /** A monotonically increasing counter */
  counter: string;
};

/** A non-privileged identifier that can be freely created by anyone. Useful for looking up GUID's. */
export type IDData = {
  /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
  creation_num: string;

  /** Address that created the GUID */
  addr: string;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::GUID" as const;
/** The name of the module. */
export const NAME = "GUID" as const;

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
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** A module for generating globally unique identifiers */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "GUID"
> as typeof moduleImpl;
