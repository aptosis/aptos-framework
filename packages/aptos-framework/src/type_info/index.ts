/**
 * **Module ID:** `0x1::type_info`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::type_info::TypeInfo` */
export interface ITypeInfo {
  account_address: p.RawAddress;
  module_name: p.ByteString;
  struct_name: p.ByteString;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::type_info" as const;
/** The name of the module. */
export const NAME = "type_info" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  TypeInfo: "0x1::type_info::TypeInfo",
} as const;

/** Payload generators for module `0x1::type_info`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "type_info"
> as typeof moduleImpl;
