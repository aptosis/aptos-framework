/**
 * **Module ID:** `0x1::SystemAddresses`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::SystemAddresses" as const;
/** The name of the module. */
export const NAME = "SystemAddresses" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "ENOT_CORE_RESOURCE_ADDRESS",
    doc: "The address/account did not correspond to the core resource address",
  },
  "1": {
    name: "EVM",
    doc: "The operation can only be performed by the VM",
  },
  "2": {
    name: "ENOT_CORE_FRAMEWORK_ADDRESS",
    doc: "The address/account did not correspond to the core framework address",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::SystemAddresses`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "SystemAddresses"
> as typeof moduleImpl;
