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
 * **Module ID:** `0x1::Capability`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** The token representing an acquired capability. Cannot be stored in memory, but copied and dropped freely. */
export type CapData = {
  root: string;
};

/** An internal data structure for representing a configured delegated capability. */
export type CapDelegateStateData = {
  root: string;
};

/** An internal data structure for representing a configured capability. */
export type CapStateData = {
  delegates: ReadonlyArray<string>;
};

/**
 * A linear version of a capability token. This can be used if an acquired capability should be enforced
 * to be used only once for an authorization.
 */
export type LinearCapData = {
  root: string;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Capability" as const;
/** The name of the module. */
export const NAME = "Capability" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

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
  errorCodes,
  functions,
  resources,
  structs,
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
