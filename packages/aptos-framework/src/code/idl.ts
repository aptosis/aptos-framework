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
          doc: "Source text.",
          ty: { struct: { name: "0x1::string::String" } },
        },
        {
          name: "source_map",
          doc: "Source map, in internal encoding",
          ty: { vector: "u8" },
        },
        {
          name: "abi",
          doc: "ABI, in JSON byte encoding.",
          ty: { vector: "u8" },
        },
      ],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::code::PackageMetadata",
      doc: "Metadata for a package.",
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
          doc: "Error map, in internal encoding.",
          ty: { vector: "u8" },
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
      doc: "A package is attempted to publish with module names clashing with modules published by other packages on this\naddress.",
    },
    "2": {
      name: "EUPGRADE_IMMUTABLE",
      doc: "A package is attempted to upgrade which is marked as immutable.",
    },
    "3": {
      name: "EUPGRADE_WEAKER_POLICY",
      doc: "A package is attempted to upgrade with a weaker policy than previously.",
    },
  },
} as const;
