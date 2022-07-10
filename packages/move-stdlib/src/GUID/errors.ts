/**
 * Module errors.
 *
 * @module
 */
/** GUID generator must be published ahead of first usage of `create_with_capability` function. */
export const EGUID_GENERATOR_NOT_PUBLISHED = {
  code: 0,
  name: "EGUID_GENERATOR_NOT_PUBLISHED",
  doc: "GUID generator must be published ahead of first usage of `create_with_capability` function.",
} as const;
