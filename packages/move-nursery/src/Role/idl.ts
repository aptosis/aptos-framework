/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Role",
  doc: "A generic module for role-based access control (RBAC).",
  functions: [],
  structs: [
    {
      name: "0x1::Role::Role",
      fields: [{ name: "dummy_field", ty: "bool" }],
      type_params: ["Type"],
      abilities: ["key"],
    },
  ],
  errors: { "0": { name: "EROLE" } },
} as const;
