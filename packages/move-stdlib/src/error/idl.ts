/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::error",
  doc: "This module defines a set of canonical error codes which are optional to use by applications for the\n`abort` and `assert!` features.\n\nCanonical error codes use the 3 lowest bytes of the u64 abort code range (the upper 5 bytes are free for other use).\nOf those, the highest byte represents the *error category* and the lower two bytes the *error reason*.\nGiven an error category `0x1` and a reason `0x3`, a canonical abort code looks as `0x10003`.\n\nA module can use a canonical code with a constant declaration of the following form:\n\n```\n///  An invalid ASCII character was encountered when creating a string.\nconst EINVALID_CHARACTER: u64 = 0x010003;\n```\n\nThis code is both valid in the worlds with and without canonical errors. It can be used as a plain module local\nerror reason understand by the existing error map tooling, or as a canonical code.\n\nThe actual canonical categories have been adopted from Google's canonical error codes, which in turn are derived\nfrom Unix error codes [see here](https://cloud.google.com/apis/design/errors#handling_errors). Each code has an\nassociated HTTP error code which can be used in REST apis. The mapping from error code to http code is not 1:1;\nerror codes here are a bit richer than HTTP codes.",
  functions: [],
  structs: [],
  errors: {},
} as const;
