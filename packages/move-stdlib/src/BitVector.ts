import type * as p from "@movingco/prelude";

export type BitVectorData = {
  length: p.U64;
  bit_field: ReadonlyArray<boolean>;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::BitVector",
  functions: [],
  structs: [
    {
      name: "0x1::BitVector::BitVector",
      fields: [
        { name: "length", ty: "u64" },
        { name: "bit_field", ty: { vector: "bool" } },
      ],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": { name: "EINDEX", doc: "The provided index is out of bounds" },
    "1": { name: "ELENGTH", doc: "An invalid length of bitvector was given" },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::BitVector",
  /** The name of the module. */
  NAME: "BitVector",
} as const;

/** Module errors. */
export const errors = {
  EINDEX: {
    code: 0,
    name: "EINDEX",
    doc: "The provided index is out of bounds",
  },
  ELENGTH: {
    code: 1,
    name: "ELENGTH",
    doc: "An invalid length of bitvector was given",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "EINDEX",
    doc: "The provided index is out of bounds",
  },
  "1": {
    name: "ELENGTH",
    doc: "An invalid length of bitvector was given",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  BitVector: "0x1::BitVector::BitVector",
} as const;

/** Payload generators for module `0x1::BitVector`. */
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
  "BitVector"
> as typeof moduleImpl;
