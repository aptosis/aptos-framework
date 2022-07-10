/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Option",
  doc: "This module defines the Option type and its methods to represent and handle an optional value.",
  functions: [],
  structs: [
    {
      name: "0x1::Option::Option",
      doc: "Abstraction of a value that may or may not be present. Implemented with a vector of size\nzero or one because Move bytecode does not have ADTs.",
      fields: [{ name: "vec", ty: { vector: { type_param: 0 } } }],
      type_params: ["Element"],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "0": {
      name: "EOPTION_IS_SET",
      doc: "The `Option` is in an invalid state for the operation attempted.\n The `Option` is `Some` while it should be `None`.",
    },
    "1": {
      name: "EOPTION_NOT_SET",
      doc: "The `Option` is in an invalid state for the operation attempted.\n The `Option` is `None` while it should be `Some`.",
    },
  },
} as const;
