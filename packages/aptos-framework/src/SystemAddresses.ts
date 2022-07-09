import type * as p from "@movingco/prelude";

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::SystemAddresses",
  functions: [],
  structs: [],
  errors: {
    "0": {
      name: "ENOT_CORE_RESOURCE_ADDRESS",
      doc: "The address/account did not correspond to the core resource address",
    },
    "1": { name: "EVM", doc: "The operation can only be performed by the VM" },
    "2": {
      name: "ENOT_CORE_FRAMEWORK_ADDRESS",
      doc: "The address/account did not correspond to the core framework address",
    },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::SystemAddresses",
  /** The name of the module. */
  NAME: "SystemAddresses",
} as const;

/** Module errors. */
export const errors = {
  ENOT_CORE_FRAMEWORK_ADDRESS: {
    code: 2,
    name: "ENOT_CORE_FRAMEWORK_ADDRESS",
    doc: "The address/account did not correspond to the core framework address",
  },
  ENOT_CORE_RESOURCE_ADDRESS: {
    code: 0,
    name: "ENOT_CORE_RESOURCE_ADDRESS",
    doc: "The address/account did not correspond to the core resource address",
  },
  EVM: {
    code: 1,
    name: "EVM",
    doc: "The operation can only be performed by the VM",
  },
} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "SystemAddresses"
> as typeof moduleImpl;
