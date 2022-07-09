/**
 * Access control list (ACL) module. An ACL is a list of account addresses who
 * have the access permission to a certain object.
 * This module uses a `vector` to represent the list, but can be refactored to
 * use a "set" instead when it's available in the language in the future.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type ACLData = {
  list: ReadonlyArray<p.RawAddress>;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::ACL",
  doc: 'Access control list (ACL) module. An ACL is a list of account addresses who\nhave the access permission to a certain object.\nThis module uses a `vector` to represent the list, but can be refactored to\nuse a "set" instead when it\'s available in the language in the future.',
  functions: [],
  structs: [
    {
      name: "0x1::ACL::ACL",
      fields: [{ name: "list", ty: { vector: "address" } }],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": { name: "ECONTAIN", doc: "The ACL already contains the address." },
    "1": { name: "ENOT_CONTAIN", doc: "The ACL does not contain the address." },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::ACL",
  /** The name of the module. */
  NAME: "ACL",
} as const;

/** Module errors. */
export const errors = {
  ECONTAIN: {
    code: 0,
    name: "ECONTAIN",
    doc: "The ACL already contains the address.",
  },
  ENOT_CONTAIN: {
    code: 1,
    name: "ENOT_CONTAIN",
    doc: "The ACL does not contain the address.",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "ECONTAIN",
    doc: "The ACL already contains the address.",
  },
  "1": {
    name: "ENOT_CONTAIN",
    doc: "The ACL does not contain the address.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  ACL: "0x1::ACL::ACL",
} as const;

/** Payload generators for module `0x1::ACL`. */
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
 * Access control list (ACL) module. An ACL is a list of account addresses who
 * have the access permission to a certain object.
 * This module uses a `vector` to represent the list, but can be refactored to
 * use a "set" instead when it's available in the language in the future.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ACL"
> as typeof moduleImpl;
