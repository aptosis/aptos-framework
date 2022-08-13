/**
 * Module errors.
 *
 * @module
 */
/** Invalid required stake lockup value. */
export const EINVALID_LOCKUP_VALUE = {
  code: 1,
  name: "EINVALID_LOCKUP_VALUE",
  doc: "Invalid required stake lockup value.",
} as const;

/** Invalid rewards rate. */
export const EINVALID_REWARDS_RATE = {
  code: 2,
  name: "EINVALID_REWARDS_RATE",
  doc: "Invalid rewards rate.",
} as const;

/** Invalid required stake range, usually happens if min > max. */
export const EINVALID_STAKE_RANGE = {
  code: 3,
  name: "EINVALID_STAKE_RANGE",
  doc: "Invalid required stake range, usually happens if min > max.",
} as const;
