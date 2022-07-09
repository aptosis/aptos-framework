/**
 * A generic module for role-based access control (RBAC).
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Role",
  doc: "A generic module for role-based access control (RBAC).",
  functions: [],
  structs: [
    {
      name: "0x1::Role::Role",
      fields: [{ name: "dummy_field", ty: "bool" }],
      type_params: ["Type"],
      abilities: ["key"],
    },
  ],
  errors: { "0": { name: "EROLE" } },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Role",
  /** The name of the module. */
  NAME: "Role",
} as const;

/** Module errors. */
export const errors = {
  EROLE: {
    code: 0,
    name: "EROLE",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EROLE",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  Role: "0x1::Role::Role",
} as const;

/** All struct types. */
export const structs = {
  Role: "0x1::Role::Role",
} as const;

/** Payload generators for module `0x1::Role`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** A generic module for role-based access control (RBAC). */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Role"
> as typeof moduleImpl;
