/**
 * A module which defines the basic concept of
 * [*capabilities*](https://en.wikipedia.org/wiki/Capability-based_security) for managing access control.
 *
 * EXPERIMENTAL
 *
 * # Overview
 *
 * A capability is a unforgeable token which testifies that a signer has authorized a certain operation.
 * The token is valid during the transaction where it is obtained. Since the type `Capability::Cap` has
 * no ability to be stored in global memory, capabilities cannot leak out of a transaction. For every function
 * called within a transaction which has a capability as a parameter, it is guaranteed that the capability
 * has been obtained via a proper signer-based authorization step previously in the transaction's execution.
 *
 * ## Usage
 *
 * Initializing and acquiring capabilities is usually encapsulated in a module with a type
 * tag which can only be constructed by this module.
 *
 * ```
 * module Pkg::Feature {
 *   use Std::Capability::Cap;
 *
 *   /// A type tag used in Cap<Feature>. Only this module can create an instance,
 *   /// and there is no public function other than Self::acquire which returns a value of this type.
 *   /// This way, this module has full control how Cap<Feature> is given out.
 *   struct Feature has drop {}
 *
 *   /// Initializes this module.
 *   public fun initialize(s: &signer) {
 *     // Create capability. This happens once at module initialization time.
 *     // One needs to provide a witness for being the owner of Feature
 *     // in the 2nd parameter.
 *     <<additional conditions allowing to initialize this capability>>
 *     Capability::create<Feature>(s, &Feature{});
 *   }
 *
 *   /// Acquires the capability to work with this feature.
 *   public fun acquire(s: &signer): Cap<Feature> {
 *     <<additional conditions allowing to acquire this capability>>
 *     Capability::acquire<Feature>(s, &Feature{});
 *   }
 *
 *   /// Does something related to the feature. The caller must pass a Cap<Feature>.
 *   public fun do_something(_cap: Cap<Feature>) { ... }
 * }
 * ```
 *
 * ## Delegation
 *
 * Capabilities come with the optional feature of *delegation*. Via `Self::delegate`, an owner of a capability
 * can designate another signer to be also capable of acquiring the capability. Like the original creator,
 * the delegate needs to present his signer to obtain the capability in his transactions. Delegation can
 * be revoked via `Self::revoke`, removing this access right from the delegate.
 *
 * While the basic authorization mechanism for delegates is the same as with core capabilities, the
 * target of delegation might be subject of restrictions which need to be specified and verified. This can
 * be done via global invariants in the specification language. For example, in order to prevent delegation
 * all together for a capability, one can use the following invariant:
 *
 * ```
 *   invariant forall a: address where Capability::spec_has_cap<Feature>(a):
 *               len(Capability::spec_delegates<Feature>(a)) == 0;
 * ```
 *
 * Similarly, the following invariant would enforce that delegates, if existent, must satisfy a certain
 * predicate:
 *
 * ```
 *   invariant forall a: address where Capability::spec_has_cap<Feature>(a):
 *               forall d in Capability::spec_delegates<Feature>(a):
 *                  is_valid_delegate_for_feature(d);
 * ```
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** The token representing an acquired capability. Cannot be stored in memory, but copied and dropped freely. */
export type CapData<_Feature = unknown> = {
  root: p.RawAddress;
};

/** An internal data structure for representing a configured delegated capability. */
export type CapDelegateStateData<_Feature = unknown> = {
  root: p.RawAddress;
};

/** An internal data structure for representing a configured capability. */
export type CapStateData<_Feature = unknown> = {
  delegates: ReadonlyArray<p.RawAddress>;
};

/**
 * A linear version of a capability token. This can be used if an acquired capability should be enforced
 * to be used only once for an authorization.
 */
export type LinearCapData<_Feature = unknown> = {
  root: p.RawAddress;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Capability",
  doc: "A module which defines the basic concept of\n[*capabilities*](https://en.wikipedia.org/wiki/Capability-based_security) for managing access control.\n\nEXPERIMENTAL\n\n# Overview\n\nA capability is a unforgeable token which testifies that a signer has authorized a certain operation.\nThe token is valid during the transaction where it is obtained. Since the type `Capability::Cap` has\nno ability to be stored in global memory, capabilities cannot leak out of a transaction. For every function\ncalled within a transaction which has a capability as a parameter, it is guaranteed that the capability\nhas been obtained via a proper signer-based authorization step previously in the transaction's execution.\n\n## Usage\n\nInitializing and acquiring capabilities is usually encapsulated in a module with a type\ntag which can only be constructed by this module.\n\n```\nmodule Pkg::Feature {\n  use Std::Capability::Cap;\n\n  /// A type tag used in Cap<Feature>. Only this module can create an instance,\n  /// and there is no public function other than Self::acquire which returns a value of this type.\n  /// This way, this module has full control how Cap<Feature> is given out.\n  struct Feature has drop {}\n\n  /// Initializes this module.\n  public fun initialize(s: &signer) {\n    // Create capability. This happens once at module initialization time.\n    // One needs to provide a witness for being the owner of Feature\n    // in the 2nd parameter.\n    <<additional conditions allowing to initialize this capability>>\n    Capability::create<Feature>(s, &Feature{});\n  }\n\n  /// Acquires the capability to work with this feature.\n  public fun acquire(s: &signer): Cap<Feature> {\n    <<additional conditions allowing to acquire this capability>>\n    Capability::acquire<Feature>(s, &Feature{});\n  }\n\n  /// Does something related to the feature. The caller must pass a Cap<Feature>.\n  public fun do_something(_cap: Cap<Feature>) { ... }\n}\n```\n\n## Delegation\n\nCapabilities come with the optional feature of *delegation*. Via `Self::delegate`, an owner of a capability\ncan designate another signer to be also capable of acquiring the capability. Like the original creator,\nthe delegate needs to present his signer to obtain the capability in his transactions. Delegation can\nbe revoked via `Self::revoke`, removing this access right from the delegate.\n\nWhile the basic authorization mechanism for delegates is the same as with core capabilities, the\ntarget of delegation might be subject of restrictions which need to be specified and verified. This can\nbe done via global invariants in the specification language. For example, in order to prevent delegation\nall together for a capability, one can use the following invariant:\n\n```\n  invariant forall a: address where Capability::spec_has_cap<Feature>(a):\n              len(Capability::spec_delegates<Feature>(a)) == 0;\n```\n\nSimilarly, the following invariant would enforce that delegates, if existent, must satisfy a certain\npredicate:\n\n```\n  invariant forall a: address where Capability::spec_has_cap<Feature>(a):\n              forall d in Capability::spec_delegates<Feature>(a):\n                 is_valid_delegate_for_feature(d);\n```",
  functions: [],
  structs: [
    {
      name: "0x1::Capability::Cap",
      doc: "The token representing an acquired capability. Cannot be stored in memory, but copied and dropped freely.",
      fields: [{ name: "root", ty: "address" }],
      type_params: ["Feature"],
      abilities: ["copy", "drop"],
    },
    {
      name: "0x1::Capability::CapDelegateState",
      doc: "An internal data structure for representing a configured delegated capability.",
      fields: [{ name: "root", ty: "address" }],
      type_params: ["Feature"],
      abilities: ["key"],
    },
    {
      name: "0x1::Capability::CapState",
      doc: "An internal data structure for representing a configured capability.",
      fields: [{ name: "delegates", ty: { vector: "address" } }],
      type_params: ["Feature"],
      abilities: ["key"],
    },
    {
      name: "0x1::Capability::LinearCap",
      doc: "A linear version of a capability token. This can be used if an acquired capability should be enforced\nto be used only once for an authorization.",
      fields: [{ name: "root", ty: "address" }],
      type_params: ["Feature"],
      abilities: ["drop"],
    },
  ],
  errors: { "0": { name: "ECAP" }, "1": { name: "EDELEGATE" } },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Capability",
  /** The name of the module. */
  NAME: "Capability",
} as const;

/** Module errors. */
export const errors = {
  ECAP: {
    code: 0,
    name: "ECAP",
  },
  EDELEGATE: {
    code: 1,
    name: "EDELEGATE",
  },
} as const;

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "ECAP",
  },
  "1": {
    name: "EDELEGATE",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  CapDelegateState: "0x1::Capability::CapDelegateState",
  CapState: "0x1::Capability::CapState",
} as const;

/** All struct types. */
export const structs = {
  Cap: "0x1::Capability::Cap",
  CapDelegateState: "0x1::Capability::CapDelegateState",
  CapState: "0x1::Capability::CapState",
  LinearCap: "0x1::Capability::LinearCap",
} as const;

/** Payload generators for module `0x1::Capability`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

/**
 * A module which defines the basic concept of
 * [*capabilities*](https://en.wikipedia.org/wiki/Capability-based_security) for managing access control.
 *
 * EXPERIMENTAL
 *
 * # Overview
 *
 * A capability is a unforgeable token which testifies that a signer has authorized a certain operation.
 * The token is valid during the transaction where it is obtained. Since the type `Capability::Cap` has
 * no ability to be stored in global memory, capabilities cannot leak out of a transaction. For every function
 * called within a transaction which has a capability as a parameter, it is guaranteed that the capability
 * has been obtained via a proper signer-based authorization step previously in the transaction's execution.
 *
 * ## Usage
 *
 * Initializing and acquiring capabilities is usually encapsulated in a module with a type
 * tag which can only be constructed by this module.
 *
 * ```
 * module Pkg::Feature {
 *   use Std::Capability::Cap;
 *
 *   /// A type tag used in Cap<Feature>. Only this module can create an instance,
 *   /// and there is no public function other than Self::acquire which returns a value of this type.
 *   /// This way, this module has full control how Cap<Feature> is given out.
 *   struct Feature has drop {}
 *
 *   /// Initializes this module.
 *   public fun initialize(s: &signer) {
 *     // Create capability. This happens once at module initialization time.
 *     // One needs to provide a witness for being the owner of Feature
 *     // in the 2nd parameter.
 *     <<additional conditions allowing to initialize this capability>>
 *     Capability::create<Feature>(s, &Feature{});
 *   }
 *
 *   /// Acquires the capability to work with this feature.
 *   public fun acquire(s: &signer): Cap<Feature> {
 *     <<additional conditions allowing to acquire this capability>>
 *     Capability::acquire<Feature>(s, &Feature{});
 *   }
 *
 *   /// Does something related to the feature. The caller must pass a Cap<Feature>.
 *   public fun do_something(_cap: Cap<Feature>) { ... }
 * }
 * ```
 *
 * ## Delegation
 *
 * Capabilities come with the optional feature of *delegation*. Via `Self::delegate`, an owner of a capability
 * can designate another signer to be also capable of acquiring the capability. Like the original creator,
 * the delegate needs to present his signer to obtain the capability in his transactions. Delegation can
 * be revoked via `Self::revoke`, removing this access right from the delegate.
 *
 * While the basic authorization mechanism for delegates is the same as with core capabilities, the
 * target of delegation might be subject of restrictions which need to be specified and verified. This can
 * be done via global invariants in the specification language. For example, in order to prevent delegation
 * all together for a capability, one can use the following invariant:
 *
 * ```
 *   invariant forall a: address where Capability::spec_has_cap<Feature>(a):
 *               len(Capability::spec_delegates<Feature>(a)) == 0;
 * ```
 *
 * Similarly, the following invariant would enforce that delegates, if existent, must satisfy a certain
 * predicate:
 *
 * ```
 *   invariant forall a: address where Capability::spec_has_cap<Feature>(a):
 *               forall d in Capability::spec_delegates<Feature>(a):
 *                  is_valid_delegate_for_feature(d);
 * ```
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Capability"
> as typeof moduleImpl;
