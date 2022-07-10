/**
 * **Module ID:** `0x1::TypeInfo`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type TypeInfoData = {
  account_address: p.RawAddress;
  module_name: p.ByteString;
  struct_name: p.ByteString;
};

export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::TypeInfo",
  /** The name of the module. */
  NAME: "TypeInfo",
} as const;

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
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "TypeInfo"
> as typeof moduleImpl;
