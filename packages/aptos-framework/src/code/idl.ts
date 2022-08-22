/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::code",
  doc: "This module supports functionality related to code management.",
  functions: [
    {
      name: "publish_package_txn",
      doc: "Same as `publish_package` but as an entry function which can be called as a transaction. Because\nof current restrictions for txn parameters, the metadata needs to be passed in serialized form.",
      ty_args: [],
      args: [
        { name: "pack_serialized", ty: { vector: "u8" } },
        { name: "code", ty: { vector: { vector: "u8" } } },
      ],
    },
  ],
  structs: [
    {
      name: "0x1::code::ModuleMetadata",
      doc: "Metadata about a module in a package.",
      fields: [
        {
          name: "name",
          doc: "Name of the module.",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "source",
          doc: "Source text, in compressed ascii.",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "source_map",
          doc: "Source map, in compressed BCS.",
          ty: { struct: { name: "0x1::string::String" } },
        },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::code::PackageMetadata",
      doc: "Metadata for a package. All byte blobs are represented as base64-of-gzipped-bytes",
      fields: [
        {
          name: "name",
          doc: "Name of this package.",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "upgrade_policy",
          doc: "The upgrade policy of this package.",
          ty: { struct: { name: "0x1::code::UpgradePolicy" } },
        },
        {
          name: "upgrade_number",
          doc: "The numbers of times this module has been upgraded. Also serves as the on-chain version.\nThis field will be automatically assigned on successful upgrade.",
          ty: "u64",
        },
        {
          name: "build_info",
          doc: "The BuildInfo, in the BuildInfo.yaml format.",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "manifest",
          doc: "The package manifest, in the Move.toml format.",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "modules",
          doc: "The list of modules installed by this package.",
          ty: { vector: { struct: { name: "0x1::code::ModuleMetadata" } } },
        },
        {
          name: "error_map",
          doc: "Error map, in compressed BCS",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "abis",
          doc: "ABIs, in compressed BCS",
          ty: { vector: { struct: { name: "0x1::string::String" } } },
        },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::code::PackageRegistry",
      doc: "The package registry at the given address.",
      fields: [
        {
          name: "packages",
          doc: "Packages installed at this address.",
          ty: { vector: { struct: { name: "0x1::code::PackageMetadata" } } },
        },
      ],
      abilities: ["key"],
    },
    {
      name: "0x1::code::UpgradePolicy",
      doc: "Describes an upgrade policy",
      fields: [{ name: "policy", ty: "u8" }],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "1": {
      name: "EMODULE_NAME_CLASH",
      doc: "Package contains duplicate module names with existing modules publised in other packages on this address",
    },
    "2": {
      name: "EUPGRADE_IMMUTABLE",
      doc: "Cannot upgrade an immutable package",
    },
    "3": {
      name: "EUPGRADE_WEAKER_POLICY",
      doc: "Cannot downgrade a package's upgradability policy",
    },
    "4": {
      name: "EMODULE_MISSING",
      doc: "Cannot delete a module that was published in the same package",
    },
  },
} as const;
