/**
 * Module errors.
 *
 * @module
 */
/** The address/account did not correspond to the core resource address */
export const ENOT_CORE_RESOURCE_ADDRESS = {
  code: 1,
  name: "ENOT_CORE_RESOURCE_ADDRESS",
  doc: "The address/account did not correspond to the core resource address",
} as const;

/** The operation can only be performed by the VM */
export const EVM = {
  code: 2,
  name: "EVM",
  doc: "The operation can only be performed by the VM",
} as const;

/** The address/account did not correspond to the core framework address */
export const ENOT_APTOS_FRAMEWORK_ADDRESS = {
  code: 3,
  name: "ENOT_APTOS_FRAMEWORK_ADDRESS",
  doc: "The address/account did not correspond to the core framework address",
} as const;
