/**
 * Module errors.
 *
 * @module
 */
/**
 * When the value of aggregator (actual or accumulated) overflows (raised
 * by native code).
 */
export const EAGGREGATOR_OVERFLOW = {
  code: 1,
  name: "EAGGREGATOR_OVERFLOW",
  doc: "When the value of aggregator (actual or accumulated) overflows (raised\nby native code).",
} as const;

/**
 * When the value of aggregator (actual or accumulated) underflows, i.e goes
 * below zero (raised by native code).
 */
export const EAGGREGATOR_UNDERFLOW = {
  code: 2,
  name: "EAGGREGATOR_UNDERFLOW",
  doc: "When the value of aggregator (actual or accumulated) underflows, i.e goes\nbelow zero (raised by native code).",
} as const;

/** When aggregator feature is not supported (raised by native code). */
export const ENOT_SUPPORTED = {
  code: 3,
  name: "ENOT_SUPPORTED",
  doc: "When aggregator feature is not supported (raised by native code).",
} as const;
