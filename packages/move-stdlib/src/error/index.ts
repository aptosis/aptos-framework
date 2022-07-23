/**
 * This module defines a set of canonical error codes which are optional to use by applications for the
 * `abort` and `assert!` features.
 *
 * Canonical error codes use the 3 lowest bytes of the u64 abort code range (the upper 5 bytes are free for other use).
 * Of those, the highest byte represents the *error category* and the lower two bytes the *error reason*.
 * Given an error category `0x1` and a reason `0x3`, a canonical abort code looks as `0x10003`.
 *
 * A module can use a canonical code with a constant declaration of the following form:
 *
 * ```
 * ///  An invalid ASCII character was encountered when creating a string.
 * const EINVALID_CHARACTER: u64 = 0x010003;
 * ```
 *
 * This code is both valid in the worlds with and without canonical errors. It can be used as a plain module local
 * error reason understand by the existing error map tooling, or as a canonical code.
 *
 * The actual canonical categories have been adopted from Google's canonical error codes, which in turn are derived
 * from Unix error codes [see here](https://cloud.google.com/apis/design/errors#handling_errors). Each code has an
 * associated HTTP error code which can be used in REST apis. The mapping from error code to http code is not 1:1;
 * error codes here are a bit richer than HTTP codes.
 *
 * **Module ID:** `0x1::error`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::error" as const;
/** The name of the module. */
export const NAME = "error" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::error`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * This module defines a set of canonical error codes which are optional to use by applications for the
 * `abort` and `assert!` features.
 *
 * Canonical error codes use the 3 lowest bytes of the u64 abort code range (the upper 5 bytes are free for other use).
 * Of those, the highest byte represents the *error category* and the lower two bytes the *error reason*.
 * Given an error category `0x1` and a reason `0x3`, a canonical abort code looks as `0x10003`.
 *
 * A module can use a canonical code with a constant declaration of the following form:
 *
 * ```
 * ///  An invalid ASCII character was encountered when creating a string.
 * const EINVALID_CHARACTER: u64 = 0x010003;
 * ```
 *
 * This code is both valid in the worlds with and without canonical errors. It can be used as a plain module local
 * error reason understand by the existing error map tooling, or as a canonical code.
 *
 * The actual canonical categories have been adopted from Google's canonical error codes, which in turn are derived
 * from Unix error codes [see here](https://cloud.google.com/apis/design/errors#handling_errors). Each code has an
 * associated HTTP error code which can be used in REST apis. The mapping from error code to http code is not 1:1;
 * error codes here are a bit richer than HTTP codes.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "error"
> as typeof moduleImpl;
