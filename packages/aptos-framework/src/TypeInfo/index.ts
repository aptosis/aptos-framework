/**
 * **Module ID:** `0x1::TypeInfo`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export type TypeInfoData = {
  account_address: string;
  module_name: string;
  struct_name: string;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::TypeInfo" as const;
/** The name of the module. */
export const NAME = "TypeInfo" as const;

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
