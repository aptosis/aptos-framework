/**
 * Module errors.
 *
 * @module
 */
/** Package contains duplicate module names with existing modules publised in other packages on this address */
export const EMODULE_NAME_CLASH = {
  code: 1,
  name: "EMODULE_NAME_CLASH",
  doc: "Package contains duplicate module names with existing modules publised in other packages on this address",
} as const;

/** Cannot upgrade an immutable package */
export const EUPGRADE_IMMUTABLE = {
  code: 2,
  name: "EUPGRADE_IMMUTABLE",
  doc: "Cannot upgrade an immutable package",
} as const;

/** Cannot downgrade a package's upgradability policy */
export const EUPGRADE_WEAKER_POLICY = {
  code: 3,
  name: "EUPGRADE_WEAKER_POLICY",
  doc: "Cannot downgrade a package's upgradability policy",
} as const;

/** Cannot delete a module that was published in the same package */
export const EMODULE_MISSING = {
  code: 4,
  name: "EMODULE_MISSING",
  doc: "Cannot delete a module that was published in the same package",
} as const;
