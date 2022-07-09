/**
 * Provides a framework for comparing two elements
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type ResultData = {
  inner: number;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Comparator",
  doc: "Provides a framework for comparing two elements",
  functions: [],
  structs: [
    {
      name: "0x1::Comparator::Result",
      fields: [{ name: "inner", ty: "u8" }],
      abilities: ["drop"],
    },
  ],
  errors: { "0": { name: "EQUAL" } },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Comparator",
  /** The name of the module. */
  NAME: "Comparator",
} as const;

/** Module errors. */
export const errors = {
  EQUAL: {
    code: 0,
    name: "EQUAL",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EQUAL",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Result: "0x1::Comparator::Result",
} as const;

/** Payload generators for module `0x1::Comparator`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** Provides a framework for comparing two elements */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Comparator"
> as typeof moduleImpl;
