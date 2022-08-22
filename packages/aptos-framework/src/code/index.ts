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

  /** Source text, in compressed ascii. */
  source: string;

  /** Source map, in compressed BCS. */
  source_map: string;
}

/**
 * Metadata for a package. All byte blobs are represented as base64-of-gzipped-bytes
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

  /**
   * The numbers of times this module has been upgraded. Also serves as the on-chain version.
   * This field will be automatically assigned on successful upgrade.
   */
  upgrade_number: p.U64;

  /** The BuildInfo, in the BuildInfo.yaml format. */
  build_info: string;

  /** The package manifest, in the Move.toml format. */
  manifest: string;

  /** The list of modules installed by this package. */
  modules: ReadonlyArray<{
    /** Name of the module. */
    name: string;

    /** Source text, in compressed ascii. */
    source: string;

    /** Source map, in compressed BCS. */
    source_map: string;
  }>;

  /** Error map, in compressed BCS */
  error_map: string;

  /** ABIs, in compressed BCS */
  abis: ReadonlyArray<string>;
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

    /**
     * The numbers of times this module has been upgraded. Also serves as the on-chain version.
     * This field will be automatically assigned on successful upgrade.
     */
    upgrade_number: p.U64;

    /** The BuildInfo, in the BuildInfo.yaml format. */
    build_info: string;

    /** The package manifest, in the Move.toml format. */
    manifest: string;

    /** The list of modules installed by this package. */
    modules: ReadonlyArray<{
      /** Name of the module. */
      name: string;

      /** Source text, in compressed ascii. */
      source: string;

      /** Source map, in compressed BCS. */
      source_map: string;
    }>;

    /** Error map, in compressed BCS */
    error_map: string;

    /** ABIs, in compressed BCS */
    abis: ReadonlyArray<string>;
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
