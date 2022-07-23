/**
 * Module errors.
 *
 * @module
 */
export const EVAULT = {
  code: 0,
  name: "EVAULT",
} as const;

export const EDELEGATE = {
  code: 1,
  name: "EDELEGATE",
} as const;

export const EACCESSOR_IN_USE = {
  code: 2,
  name: "EACCESSOR_IN_USE",
} as const;

export const EACCESSOR_INCONSISTENCY = {
  code: 3,
  name: "EACCESSOR_INCONSISTENCY",
} as const;

export const EDELEGATE_TO_SELF = {
  code: 4,
  name: "EDELEGATE_TO_SELF",
} as const;

export const EDELEGATION_NOT_ENABLED = {
  code: 5,
  name: "EDELEGATION_NOT_ENABLED",
} as const;

export const EEVENT = {
  code: 6,
  name: "EEVENT",
} as const;
