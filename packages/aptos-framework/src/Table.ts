/**
 * Type of large-scale storage tables.
 * source: https://github.com/move-language/move/blob/1b6b7513dcc1a5c866f178ca5c1e74beb2ce181e/language/extensions/move-table-extension/sources/Table.move#L1
 *
 * This is a exact copy from the Move repo. It implements the Table type which supports individual table items to
 * be represented by separate global state items. The number of items and a unique handle are tracked on the table
 * struct itself, while the operations are implemented as native functions. No traversal is provided.
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type of tables */
export type TableData<_K = unknown, _V = unknown> = {
  handle: p.U128;
  length: p.U64;
};

/** Wrapper for values. Required for making values appear as resources in the implementation. */
export type BoxData<_V = unknown> = {
  val: _V;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Table",
  doc: "Type of large-scale storage tables.\nsource: https://github.com/move-language/move/blob/1b6b7513dcc1a5c866f178ca5c1e74beb2ce181e/language/extensions/move-table-extension/sources/Table.move#L1\n\nThis is a exact copy from the Move repo. It implements the Table type which supports individual table items to\nbe represented by separate global state items. The number of items and a unique handle are tracked on the table\nstruct itself, while the operations are implemented as native functions. No traversal is provided.",
  functions: [],
  structs: [
    {
      name: "0x1::Table::Table",
      doc: "Type of tables",
      fields: [
        { name: "handle", ty: "u128" },
        { name: "length", ty: "u64" },
      ],
      type_params: ["K", "V"],
      abilities: ["store"],
    },
    {
      name: "0x1::Table::Box",
      doc: "Wrapper for values. Required for making values appear as resources in the implementation.",
      fields: [{ name: "val", ty: { type_param: 0 } }],
      type_params: ["V"],
      abilities: ["drop", "store", "key"],
    },
  ],
  errors: {
    "100": { name: "EALREADY_EXISTS" },
    "101": { name: "ENOT_FOUND" },
    "102": { name: "ENOT_EMPTY" },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Table",
  /** The name of the module. */
  NAME: "Table",
} as const;

/** Module errors. */
export const errors = {
  EALREADY_EXISTS: {
    code: 100,
    name: "EALREADY_EXISTS",
  },
  ENOT_EMPTY: {
    code: 102,
    name: "ENOT_EMPTY",
  },
  ENOT_FOUND: {
    code: 101,
    name: "ENOT_FOUND",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "100": {
    name: "EALREADY_EXISTS",
  },
  "101": {
    name: "ENOT_FOUND",
  },
  "102": {
    name: "ENOT_EMPTY",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  Box: "0x1::Table::Box",
} as const;

/** All struct types. */
export const structs = {
  Box: "0x1::Table::Box",
  Table: "0x1::Table::Table",
} as const;

/** Payload generators for module `0x1::Table`. */
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
 * Type of large-scale storage tables.
 * source: https://github.com/move-language/move/blob/1b6b7513dcc1a5c866f178ca5c1e74beb2ce181e/language/extensions/move-table-extension/sources/Table.move#L1
 *
 * This is a exact copy from the Move repo. It implements the Table type which supports individual table items to
 * be represented by separate global state items. The number of items and a unique handle are tracked on the table
 * struct itself, while the operations are implemented as native functions. No traversal is provided.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Table"
> as typeof moduleImpl;
