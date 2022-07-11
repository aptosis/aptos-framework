/**
 * Module errors.
 *
 * @module
 */
/**
 * The `Option` is in an invalid state for the operation attempted.
 * The `Option` is `Some` while it should be `None`.
 */
export const EOPTION_IS_SET = {
  code: 0,
  name: "EOPTION_IS_SET",
  doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `Some` while it should be `None`.",
} as const;

/**
 * The `Option` is in an invalid state for the operation attempted.
 * The `Option` is `None` while it should be `Some`.
 */
export const EOPTION_NOT_SET = {
  code: 1,
  name: "EOPTION_NOT_SET",
  doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `None` while it should be `Some`.",
} as const;
