/**
 * A module for generating globally unique identifiers
 *
 * **Module ID:** `0x1::guid`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * A capability to create a privileged identifier on behalf of the given address
 *
 * Type name: `0x1::guid::CreateCapability`
 */
export interface ICreateCapability {
  addr: p.RawAddress;
}

/**
 * A globally unique identifier derived from the sender's address and a counter
 *
 * Type name: `0x1::guid::GUID`
 */
export interface IGUID {
  id: {
    /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
    creation_num: p.U64;

    /** Address that created the GUID */
    addr: p.RawAddress;
  };
}

/**
 * A generator for new GUIDs.
 *
 * Type name: `0x1::guid::Generator`
 */
export interface IGenerator {
  /** A monotonically increasing counter */
  counter: p.U64;
}

/**
 * A non-privileged identifier that can be freely created by anyone. Useful for looking up GUID's.
 *
 * Type name: `0x1::guid::ID`
 */
export interface IID {
  /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
  creation_num: p.U64;

  /** Address that created the GUID */
  addr: p.RawAddress;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::guid" as const;
/** The name of the module. */
export const NAME = "guid" as const;

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
  CreateCapability: "0x1::guid::CreateCapability",
  Generator: "0x1::guid::Generator",
} as const;

/** All struct types. */
export const structs = {
  CreateCapability: "0x1::guid::CreateCapability",
  GUID: "0x1::guid::GUID",
  Generator: "0x1::guid::Generator",
  ID: "0x1::guid::ID",
} as const;

/** Payload generators for module `0x1::guid`. */
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
  "guid"
> as typeof moduleImpl;
