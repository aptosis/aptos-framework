import type * as p from "@movingco/prelude";

export type TypeInfoData = {
  account_address: p.RawAddress;
  module_name: p.ByteString;
  struct_name: p.ByteString;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::TypeInfo",
  functions: [],
  structs: [
    {
      name: "0x1::TypeInfo::TypeInfo",
      fields: [
        { name: "account_address", ty: "address" },
        { name: "module_name", ty: { vector: "u8" } },
        { name: "struct_name", ty: { vector: "u8" } },
      ],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {},
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::TypeInfo",
  /** The name of the module. */
  NAME: "TypeInfo",
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
  TypeInfo: "0x1::TypeInfo::TypeInfo",
} as const;

/** Payload generators for module `0x1::TypeInfo`. */
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
  "TypeInfo"
> as typeof moduleImpl;
