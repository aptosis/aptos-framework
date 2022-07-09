import type * as p from "@movingco/prelude";

/** An iterable table implementation based on double linked list. */
export type IterableTableData<_K = unknown, _V = unknown> = {
  inner: {
    handle: p.U128;
    length: p.U64;
  };
  head: {
    vec: ReadonlyArray<_K>;
  };
  tail: {
    vec: ReadonlyArray<_K>;
  };
};

/** The iterable wrapper around value, points to previous and next key if any. */
export type IterableValueData<_K = unknown, _V = unknown> = {
  val: _V;
  prev: {
    vec: ReadonlyArray<_K>;
  };
  next: {
    vec: ReadonlyArray<_K>;
  };
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::IterableTable",
  functions: [],
  structs: [
    {
      name: "0x1::IterableTable::IterableTable",
      doc: "An iterable table implementation based on double linked list.",
      fields: [
        {
          name: "inner",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: [
                { type_param: 0 },
                {
                  struct: {
                    name: "0x1::IterableTable::IterableValue",
                    ty_args: [{ type_param: 0 }, { type_param: 1 }],
                  },
                },
              ],
            },
          },
        },
        {
          name: "head",
          ty: {
            struct: {
              name: "0x1::Option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
        {
          name: "tail",
          ty: {
            struct: {
              name: "0x1::Option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
      ],
      type_params: ["K", "V"],
      abilities: ["store"],
    },
    {
      name: "0x1::IterableTable::IterableValue",
      doc: "The iterable wrapper around value, points to previous and next key if any.",
      fields: [
        { name: "val", ty: { type_param: 1 } },
        {
          name: "prev",
          ty: {
            struct: {
              name: "0x1::Option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
        {
          name: "next",
          ty: {
            struct: {
              name: "0x1::Option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
      ],
      type_params: ["K", "V"],
      abilities: ["store"],
    },
  ],
  errors: {},
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::IterableTable",
  /** The name of the module. */
  NAME: "IterableTable",
} as const;

/** Module errors. */
export const errors = {} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  IterableTable: "0x1::IterableTable::IterableTable",
  IterableValue: "0x1::IterableTable::IterableValue",
} as const;

/** Payload generators for module `0x1::IterableTable`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "IterableTable"
> as typeof moduleImpl;
