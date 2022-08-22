/**
 * Module errors.
 *
 * @module
 */
/** When aggregator factory has already been published. */
export const EAGGREGATOR_FACTORY_EXISTS = {
  code: 1,
  name: "EAGGREGATOR_FACTORY_EXISTS",
  doc: "When aggregator factory has already been published.",
} as const;

/** When aggregator factory is published to not core framework address. */
export const ENOT_CORE_FRAMEWORK_ADDRESS = {
  code: 2,
  name: "ENOT_CORE_FRAMEWORK_ADDRESS",
  doc: "When aggregator factory is published to not core framework address.",
} as const;

/** When aggregator feature is not supported (raised by native code). */
export const ENOT_SUPPORTED = {
  code: 3,
  name: "ENOT_SUPPORTED",
  doc: "When aggregator feature is not supported (raised by native code).",
} as const;
