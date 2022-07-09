import type * as p from "@movingco/prelude";

/** A Scalable vector implementation based on tables, elements are grouped into buckets with `bucket_size`. */
export type BigVectorData<_T = unknown> = {
  buckets: {
    handle: p.U128;
    length: p.U64;
  };
  end_index: {
    bucket_index: p.U64;
    vec_index: p.U64;
  };
  num_buckets: p.U64;
  bucket_size: p.U64;
};

/** Index of the value in the buckets. */
export type BigVectorIndexData = {
  bucket_index: p.U64;
  vec_index: p.U64;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::BigVector",
  functions: [],
  structs: [
    {
      name: "0x1::BigVector::BigVector",
      doc: "A Scalable vector implementation based on tables, elements are grouped into buckets with `bucket_size`.",
      fields: [
        {
          name: "buckets",
          ty: {
            struct: {
              name: "0x1::Table::Table",
              ty_args: ["u64", { vector: { type_param: 0 } }],
            },
          },
        },
        {
          name: "end_index",
          ty: { struct: { name: "0x1::BigVector::BigVectorIndex" } },
        },
        { name: "num_buckets", ty: "u64" },
        { name: "bucket_size", ty: "u64" },
      ],
      type_params: ["T"],
      abilities: ["store"],
    },
    {
      name: "0x1::BigVector::BigVectorIndex",
      doc: "Index of the value in the buckets.",
      fields: [
        { name: "bucket_index", ty: "u64" },
        { name: "vec_index", ty: "u64" },
      ],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": {
      name: "EINDEX_OUT_OF_BOUNDS",
      doc: "The index into the vector is out of bounds",
    },
    "1": {
      name: "EOUT_OF_CAPACITY",
      doc: "Need to reserve more buckets for push_back_no_grow.",
    },
    "2": { name: "ENOT_EMPTY", doc: "Destory a non-empty vector." },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::BigVector",
  /** The name of the module. */
  NAME: "BigVector",
} as const;

/** Module errors. */
export const errors = {
  EINDEX_OUT_OF_BOUNDS: {
    code: 0,
    name: "EINDEX_OUT_OF_BOUNDS",
    doc: "The index into the vector is out of bounds",
  },
  ENOT_EMPTY: {
    code: 2,
    name: "ENOT_EMPTY",
    doc: "Destory a non-empty vector.",
  },
  EOUT_OF_CAPACITY: {
    code: 1,
    name: "EOUT_OF_CAPACITY",
    doc: "Need to reserve more buckets for push_back_no_grow.",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EINDEX_OUT_OF_BOUNDS",
    doc: "The index into the vector is out of bounds",
  },
  "1": {
    name: "EOUT_OF_CAPACITY",
    doc: "Need to reserve more buckets for push_back_no_grow.",
  },
  "2": {
    name: "ENOT_EMPTY",
    doc: "Destory a non-empty vector.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  BigVector: "0x1::BigVector::BigVector",
  BigVectorIndex: "0x1::BigVector::BigVectorIndex",
} as const;

/** Payload generators for module `0x1::BigVector`. */
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
  "BigVector"
> as typeof moduleImpl;
