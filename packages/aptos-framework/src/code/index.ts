/**
 * This module supports functionality related to code management.
 *
 * **Module ID:** `0x1::code`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Metadata about a module in a package.
 *
 * Type name: `0x1::code::ModuleMetadata`
 */
export interface IModuleMetadata {
  /** Name of the module. */
  name: string;

  /** Source text. */
  source: string;

  /** Source map, in internal encoding */
  source_map: p.ByteString;

  /** ABI, in JSON byte encoding. */
  abi: p.ByteString;
}

/**
 * Metadata for a package.
 *
 * Type name: `0x1::code::PackageMetadata`
 */
export interface IPackageMetadata {
  /** Name of this package. */
  name: string;

  /** The upgrade policy of this package. */
  upgrade_policy: {
    policy: number;
  };

  /** The package manifest, in the Move.toml format. */
  manifest: string;

  /** The list of modules installed by this package. */
  modules: ReadonlyArray<{
    /** Name of the module. */
    name: string;

    /** Source text. */
    source: string;

    /** Source map, in internal encoding */
    source_map: p.ByteString;

    /** ABI, in JSON byte encoding. */
    abi: p.ByteString;
  }>;
}

/**
 * The package registry at the given address.
 *
 * Type name: `0x1::code::PackageRegistry`
 */
export interface IPackageRegistry {
  /** Packages installed at this address. */
  packages: ReadonlyArray<{
    /** Name of this package. */
    name: string;

    /** The upgrade policy of this package. */
    upgrade_policy: {
      policy: number;
    };

    /** The package manifest, in the Move.toml format. */
    manifest: string;

    /** The list of modules installed by this package. */
    modules: ReadonlyArray<{
      /** Name of the module. */
      name: string;

      /** Source text. */
      source: string;

      /** Source map, in internal encoding */
      source_map: p.ByteString;

      /** ABI, in JSON byte encoding. */
      abi: p.ByteString;
    }>;
  }>;
}

/**
 * Describes an upgrade policy
 *
 * Type name: `0x1::code::UpgradePolicy`
 */
export interface IUpgradePolicy {
  policy: number;
}

/** Payload arguments for {@link entry.publish_package_txn}. */
export type PublishPackageTxnArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    pack_serialized: p.ByteString;
    /** IDL type: `Vector(Vector(U8))` */
    code: ReadonlyArray<p.ByteString>;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::code" as const;
/** The name of the module. */
export const NAME = "code" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
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
} as const;

/** All module function IDLs. */
export const functions = {
  publish_package_txn: {
    name: "publish_package_txn",
    doc: "Same as `publish_package` but as an entry function which can be called as a transaction. Because\nof current restrictions for txn parameters, the metadata needs to be passed in serialized form.",
    ty_args: [],
    args: [
      {
        name: "pack_serialized",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "code",
        ty: {
          vector: {
            vector: "u8",
          },
        },
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  PackageRegistry: "0x1::code::PackageRegistry",
} as const;

/** All struct types. */
export const structs = {
  ModuleMetadata: "0x1::code::ModuleMetadata",
  PackageMetadata: "0x1::code::PackageMetadata",
  PackageRegistry: "0x1::code::PackageRegistry",
  UpgradePolicy: "0x1::code::UpgradePolicy",
} as const;

/** Payload generators for module `0x1::code`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module supports functionality related to code management. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "code"
> as typeof moduleImpl;
