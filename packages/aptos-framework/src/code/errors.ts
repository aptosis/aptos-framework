/**
 * Module errors.
 *
 * @module
 */
/**
 * A package is attempted to publish with module names clashing with modules published by other packages on this
 * address.
 */
export const EMODULE_NAME_CLASH = {
  code: 1,
  name: "EMODULE_NAME_CLASH",
  doc: "A package is attempted to publish with module names clashing with modules published by other packages on this\naddress.",
} as const;

/** A package is attempted to upgrade which is marked as immutable. */
export const EUPGRADE_IMMUTABLE = {
  code: 2,
  name: "EUPGRADE_IMMUTABLE",
  doc: "A package is attempted to upgrade which is marked as immutable.",
} as const;

/** A package is attempted to upgrade with a weaker policy than previously. */
export const EUPGRADE_WEAKER_POLICY = {
  code: 3,
  name: "EUPGRADE_WEAKER_POLICY",
  doc: "A package is attempted to upgrade with a weaker policy than previously.",
} as const;
