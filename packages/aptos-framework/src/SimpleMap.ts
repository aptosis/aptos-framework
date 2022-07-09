/**
 * This module provides a solution for sorted maps, that is it has the properties that
 * 1) Keys point to Values
 * 2) Each Key must be unique
 * 3) A Key can be found within O(Log N) time
 * 4) The data is stored as a sorted by Key
 * 5) Adds and removals take O(N) time
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type ElementData<_Key = unknown, _Value = unknown> = {
  key: _Key;
  value: _Value;
};

export type SimpleMapData<_Key = unknown, _Value = unknown> = {
  data: ReadonlyArray<{
    key: _Key;
    value: _Value;
  }>;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::SimpleMap",
  doc: "This module provides a solution for sorted maps, that is it has the properties that\n1) Keys point to Values\n2) Each Key must be unique\n3) A Key can be found within O(Log N) time\n4) The data is stored as a sorted by Key\n5) Adds and removals take O(N) time",
  functions: [],
  structs: [
    {
      name: "0x1::SimpleMap::Element",
      fields: [
        { name: "key", ty: { type_param: 0 } },
        { name: "value", ty: { type_param: 1 } },
      ],
      type_params: ["Key", "Value"],
      abilities: ["store"],
    },
    {
      name: "0x1::SimpleMap::SimpleMap",
      fields: [
        {
          name: "data",
          ty: {
            vector: {
              struct: {
                name: "0x1::SimpleMap::Element",
                ty_args: [{ type_param: 0 }, { type_param: 1 }],
              },
            },
          },
        },
      ],
      type_params: ["Key", "Value"],
      abilities: ["store"],
    },
  ],
  errors: {
    "0": { name: "EKEY_ALREADY_EXISTS" },
    "1": { name: "EKEY_NOT_FOUND" },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::SimpleMap",
  /** The name of the module. */
  NAME: "SimpleMap",
} as const;

/** Module errors. */
export const errors = {
  EKEY_ALREADY_EXISTS: {
    code: 0,
    name: "EKEY_ALREADY_EXISTS",
  },
  EKEY_NOT_FOUND: {
    code: 1,
    name: "EKEY_NOT_FOUND",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EKEY_ALREADY_EXISTS",
  },
  "1": {
    name: "EKEY_NOT_FOUND",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Element: "0x1::SimpleMap::Element",
  SimpleMap: "0x1::SimpleMap::SimpleMap",
} as const;

/** Payload generators for module `0x1::SimpleMap`. */
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
 * This module provides a solution for sorted maps, that is it has the properties that
 * 1) Keys point to Values
 * 2) Each Key must be unique
 * 3) A Key can be found within O(Log N) time
 * 4) The data is stored as a sorted by Key
 * 5) Adds and removals take O(N) time
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "SimpleMap"
> as typeof moduleImpl;
