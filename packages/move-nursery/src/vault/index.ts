/**
 * A module which implements secure memory (called a *vault*) of some content which can only be operated
 * on if authorized by a signer. Authorization is managed by
 * [*capabilities*](https://en.wikipedia.org/wiki/Capability-based_security). The vault supports delegation
 * of capabilities to other signers (including revocation) as well as transfer of ownership.
 *
 * # Overview
 *
 * ## Capabilities
 *
 * Capabilities are unforgeable tokens which represent the right to perform a particular
 * operation on the vault. To acquire a capability instance, authentication via a signer is needed.
 * This signer must either be the owner of the vault, or someone the capability has been delegated to.
 * Once acquired, a capability can be passed to other functions to perform the operation it enables.
 * Specifically, those called functions do not need to have access to the original signer. This is a key
 * property of capability based security as it prevents granting more rights to code than needed.
 *
 * Capability instances are unforgeable because they are localized to transactions. They can only be
 * created by functions of this module, and as they do not have the Move language `store` or `key` abilities,
 * they cannot leak out of a transaction.
 *
 * Example:
 *
 * ```rust
 * struct Content has store { ssn: u64 }
 * ...
 * // Create new vault
 * vault::new(signer, b"My Vault", Content{ ssn: 525659745 });
 * ...
 * // Obtain a read capability
 * let read_cap = vault::acquire_read_cap<Content>(signer);
 * process(&read_cap)
 * ...
 * fun process(cap: &vault::ReadCap<Content>) {
 *     let accessor = vault::read_accessor(cap);
 *     let content = vault::borrow(accessor);
 *     << do something with `content: &Content` >>
 *     vault::release_read_accessor(accessor);
 * }
 * ```
 *
 * ## Delegation
 *
 * Delegation provides the option to delegate the right to acquire a vault capability to other
 * signers than the owner of the vault. Delegates still need to authenticate themselves using their
 * signer, similar as the owner does. All security arguments for owners apply also to delegates.
 * Delegation can be revoked removing previously granted rights from a delegate.
 *
 * Delegation can be configured to be transitive by granting the right to acquire a delegation capability
 * to delegates, which can then further delegate access rights.
 *
 * By default, when a vault is created, it does not support delegation. The owner of the vault
 * needs to explicitly enable delegation. This allows to create vaults which are not intended for delegation
 * and one does not need to worry about its misuse.
 *
 * Example:
 *
 * ```rust
 * vault::new(signer, b"My Vault", Content{ ssn: 525659745 });
 * // Enable delegation for this vault. Only the owning signer can do this.
 * vault::enable_delegation<Content>(signer);
 * ...
 * // Delegate read capability to some other signer.
 * let delegate_cap = vault::acquire_delegate_cap<Content>(signer);
 * vault::delegate_read_cap(&delegate_cap, other_signer);
 * ...
 * // Other signer can now acquire read cap
 * let read_cap = vault::acquire_read_cap<Content>(other_signer);
 * ...
 * // The granted capability can be revoked. There is no need to have the other signer for this.
 * vault::revoke_read_cap(&delegate_cap, signer::address_of(other_signer));
 * ```
 *
 * ## Abilities
 *
 * Currently, we require that the `Content` type of a vault has the `drop` ability in order to instantiate
 * a capability type like `ReadCap<Content>`. Without this, capabilities themselves would need to have an
 * explicit release function, which makes little sense as they are pure values. We expect the Move
 * language to have 'phantom type parameters' or similar features added, which will allows us to have
 * `ReadCap<Content>` droppable and copyable without `Content` needing the same.
 *
 * **Module ID:** `0x1::vault`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * A type describing a capability. This is used for functions like `Self::delegate` where we need to
 * specify capability types.
 *
 * Type name: `0x1::vault::CapType`
 */
export interface ICapType {
  code: number;
}

/**
 * A capability to delegate access to the vault.
 *
 * Type name: `0x1::vault::DelegateCap`
 */
export interface IDelegateCap {
  vault_address: p.RawAddress;
  authority: p.RawAddress;
}

/**
 * A modify accessor for the content of the vault.
 *
 * Type name: `0x1::vault::ModifyAccessor`
 */
export interface IModifyAccessor<_Content = unknown> {
  content: _Content;
  vault_address: p.RawAddress;
}

/**
 * A capability to modify the content of the vault.
 *
 * Type name: `0x1::vault::ModifyCap`
 */
export interface IModifyCap {
  vault_address: p.RawAddress;
  authority: p.RawAddress;
}

/**
 * A read accessor for the content of the vault.
 *
 * Type name: `0x1::vault::ReadAccessor`
 */
export interface IReadAccessor<_Content = unknown> {
  content: _Content;
  vault_address: p.RawAddress;
}

/**
 * A capability to read the content of the vault. Notice that the capability cannot be
 * stored but can be freely copied and dropped.
 * TODO: remove `drop` on `Content` here and elsewhere once we have phantom type parameters.
 *
 * Type name: `0x1::vault::ReadCap`
 */
export interface IReadCap {
  vault_address: p.RawAddress;
  authority: p.RawAddress;
}

/**
 * A capability to transfer ownership of the vault.
 *
 * Type name: `0x1::vault::TransferCap`
 */
export interface ITransferCap {
  vault_address: p.RawAddress;
  authority: p.RawAddress;
}

/**
 * Private. The vault representation.
 *
 * Type name: `0x1::vault::Vault`
 */
export interface IVault<_Content = unknown> {
  /**
   * The content. If the option is empty, the content is currently moved into an
   * accessor in order to work with it.
   */
  content: {
    vec: ReadonlyArray<_Content>;
  };
}

/**
 * Private. A value stored at a delegates address pointing to the owner of the vault. Also
 * describes the capabilities granted to this delegate.
 *
 * Type name: `0x1::vault::VaultDelegate`
 */
export interface IVaultDelegate {
  vault_address: p.RawAddress;
  granted_caps: ReadonlyArray<{
    code: number;
  }>;
}

/**
 * An event which we generate on vault access delegation or revocation if event generation is enabled.
 *
 * Type name: `0x1::vault::VaultDelegateEvent`
 */
export interface IVaultDelegateEvent {
  metadata: p.ByteString;
  vault_address: p.RawAddress;
  authority: p.RawAddress;
  delegate: p.RawAddress;
  cap: {
    code: number;
  };
  is_revoked: boolean;
}

/**
 * Private. If the vault supports delegation, information about the delegates.
 *
 * Type name: `0x1::vault::VaultDelegates`
 */
export interface IVaultDelegates {
  /** The currently authorized delegates. */
  delegates: ReadonlyArray<p.RawAddress>;
}

/**
 * Private. If event generation is enabled, contains the event generators.
 *
 * Type name: `0x1::vault::VaultEvents`
 */
export interface IVaultEvents {
  /**
   * Metadata which identifies this vault. This information is used
   * in events generated by this module.
   */
  metadata: p.ByteString;

  /** Event handle for vault delegation. */
  delegate_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };

  /** Event handle for vault transfer. */
  transfer_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };
}

/**
 * An event which we generate on vault transfer if event generation is enabled.
 *
 * Type name: `0x1::vault::VaultTransferEvent`
 */
export interface IVaultTransferEvent {
  metadata: p.ByteString;
  vault_address: p.RawAddress;
  authority: p.RawAddress;
  new_vault_address: p.RawAddress;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::vault" as const;
/** The name of the module. */
export const NAME = "vault" as const;

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
    name: "EVAULT",
  },
  "1": {
    name: "EDELEGATE",
  },
  "2": {
    name: "EACCESSOR_IN_USE",
  },
  "3": {
    name: "EACCESSOR_INCONSISTENCY",
  },
  "4": {
    name: "EDELEGATE_TO_SELF",
  },
  "5": {
    name: "EDELEGATION_NOT_ENABLED",
  },
  "6": {
    name: "EEVENT",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  Vault: "0x1::vault::Vault",
  VaultDelegate: "0x1::vault::VaultDelegate",
  VaultDelegates: "0x1::vault::VaultDelegates",
  VaultEvents: "0x1::vault::VaultEvents",
} as const;

/** All struct types. */
export const structs = {
  CapType: "0x1::vault::CapType",
  DelegateCap: "0x1::vault::DelegateCap",
  ModifyAccessor: "0x1::vault::ModifyAccessor",
  ModifyCap: "0x1::vault::ModifyCap",
  ReadAccessor: "0x1::vault::ReadAccessor",
  ReadCap: "0x1::vault::ReadCap",
  TransferCap: "0x1::vault::TransferCap",
  Vault: "0x1::vault::Vault",
  VaultDelegate: "0x1::vault::VaultDelegate",
  VaultDelegateEvent: "0x1::vault::VaultDelegateEvent",
  VaultDelegates: "0x1::vault::VaultDelegates",
  VaultEvents: "0x1::vault::VaultEvents",
  VaultTransferEvent: "0x1::vault::VaultTransferEvent",
} as const;

/** Payload generators for module `0x1::vault`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * A module which implements secure memory (called a *vault*) of some content which can only be operated
 * on if authorized by a signer. Authorization is managed by
 * [*capabilities*](https://en.wikipedia.org/wiki/Capability-based_security). The vault supports delegation
 * of capabilities to other signers (including revocation) as well as transfer of ownership.
 *
 * # Overview
 *
 * ## Capabilities
 *
 * Capabilities are unforgeable tokens which represent the right to perform a particular
 * operation on the vault. To acquire a capability instance, authentication via a signer is needed.
 * This signer must either be the owner of the vault, or someone the capability has been delegated to.
 * Once acquired, a capability can be passed to other functions to perform the operation it enables.
 * Specifically, those called functions do not need to have access to the original signer. This is a key
 * property of capability based security as it prevents granting more rights to code than needed.
 *
 * Capability instances are unforgeable because they are localized to transactions. They can only be
 * created by functions of this module, and as they do not have the Move language `store` or `key` abilities,
 * they cannot leak out of a transaction.
 *
 * Example:
 *
 * ```rust
 * struct Content has store { ssn: u64 }
 * ...
 * // Create new vault
 * vault::new(signer, b"My Vault", Content{ ssn: 525659745 });
 * ...
 * // Obtain a read capability
 * let read_cap = vault::acquire_read_cap<Content>(signer);
 * process(&read_cap)
 * ...
 * fun process(cap: &vault::ReadCap<Content>) {
 *     let accessor = vault::read_accessor(cap);
 *     let content = vault::borrow(accessor);
 *     << do something with `content: &Content` >>
 *     vault::release_read_accessor(accessor);
 * }
 * ```
 *
 * ## Delegation
 *
 * Delegation provides the option to delegate the right to acquire a vault capability to other
 * signers than the owner of the vault. Delegates still need to authenticate themselves using their
 * signer, similar as the owner does. All security arguments for owners apply also to delegates.
 * Delegation can be revoked removing previously granted rights from a delegate.
 *
 * Delegation can be configured to be transitive by granting the right to acquire a delegation capability
 * to delegates, which can then further delegate access rights.
 *
 * By default, when a vault is created, it does not support delegation. The owner of the vault
 * needs to explicitly enable delegation. This allows to create vaults which are not intended for delegation
 * and one does not need to worry about its misuse.
 *
 * Example:
 *
 * ```rust
 * vault::new(signer, b"My Vault", Content{ ssn: 525659745 });
 * // Enable delegation for this vault. Only the owning signer can do this.
 * vault::enable_delegation<Content>(signer);
 * ...
 * // Delegate read capability to some other signer.
 * let delegate_cap = vault::acquire_delegate_cap<Content>(signer);
 * vault::delegate_read_cap(&delegate_cap, other_signer);
 * ...
 * // Other signer can now acquire read cap
 * let read_cap = vault::acquire_read_cap<Content>(other_signer);
 * ...
 * // The granted capability can be revoked. There is no need to have the other signer for this.
 * vault::revoke_read_cap(&delegate_cap, signer::address_of(other_signer));
 * ```
 *
 * ## Abilities
 *
 * Currently, we require that the `Content` type of a vault has the `drop` ability in order to instantiate
 * a capability type like `ReadCap<Content>`. Without this, capabilities themselves would need to have an
 * explicit release function, which makes little sense as they are pure values. We expect the Move
 * language to have 'phantom type parameters' or similar features added, which will allows us to have
 * `ReadCap<Content>` droppable and copyable without `Content` needing the same.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "vault"
> as typeof moduleImpl;
