/**
 * This module defines the Option type and its methods to represent and handle an optional value.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Abstraction of a value that may or may not be present. Implemented with a vector of size
 * zero or one because Move bytecode does not have ADTs.
 */
export type OptionData<_Element = unknown> = {
  vec: ReadonlyArray<_Element>;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Option",
  doc: "This module defines the Option type and its methods to represent and handle an optional value.",
  functions: [],
  structs: [
    {
      name: "0x1::Option::Option",
      doc: "Abstraction of a value that may or may not be present. Implemented with a vector of size\nzero or one because Move bytecode does not have ADTs.",
      fields: [{ name: "vec", ty: { vector: { type_param: 0 } } }],
      type_params: ["Element"],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": {
      name: "EOPTION_IS_SET",
      doc: "The `Option` is in an invalid state for the operation attempted.\n The `Option` is `Some` while it should be `None`.",
    },
    "1": {
      name: "EOPTION_NOT_SET",
      doc: "The `Option` is in an invalid state for the operation attempted.\n The `Option` is `None` while it should be `Some`.",
    },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Option",
  /** The name of the module. */
  NAME: "Option",
} as const;

/** Module errors. */
export const errors = {
  EOPTION_IS_SET: {
    code: 0,
    name: "EOPTION_IS_SET",
    doc: "The `Option` is in an invalid state for the operation attempted.\n The `Option` is `Some` while it should be `None`.",
  },
  EOPTION_NOT_SET: {
    code: 1,
    name: "EOPTION_NOT_SET",
    doc: "The `Option` is in an invalid state for the operation attempted.\n The `Option` is `None` while it should be `Some`.",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EOPTION_IS_SET",
    doc: "The `Option` is in an invalid state for the operation attempted.\n The `Option` is `Some` while it should be `None`.",
  },
  "1": {
    name: "EOPTION_NOT_SET",
    doc: "The `Option` is in an invalid state for the operation attempted.\n The `Option` is `None` while it should be `Some`.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Option: "0x1::Option::Option",
} as const;

/** Payload generators for module `0x1::Option`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/** This module defines the Option type and its methods to represent and handle an optional value. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Option"
> as typeof moduleImpl;
