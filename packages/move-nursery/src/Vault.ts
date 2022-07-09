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
 * ```move
 * struct Content has store { ssn: u64 }
 * ...
 * // Create new vault
 * Vault::new(signer, b"My Vault", Content{ ssn: 525659745 });
 * ...
 * // Obtain a read capability
 * let read_cap = Vault::acquire_read_cap<Content>(signer);
 * process(&read_cap)
 * ...
 * fun process(cap: &Vault::ReadCap<Content>) {
 *     let accessor = Vault::read_accessor(cap);
 *     let content = Vault::borrow(accessor);
 *     << do something with `content: &Content` >>
 *     Vault::release_read_accessor(accessor);
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
 * ```move
 * Vault::new(signer, b"My Vault", Content{ ssn: 525659745 });
 * // Enable delegation for this vault. Only the owning signer can do this.
 * Vault::enable_delegation<Content>(signer);
 * ...
 * // Delegate read capability to some other signer.
 * let delegate_cap = Vault::acquire_delegate_cap<Content>(signer);
 * Vault::delegate_read_cap(&delegate_cap, other_signer);
 * ...
 * // Other signer can now acquire read cap
 * let read_cap = Vault::acquire_read_cap<Content>(other_signer);
 * ...
 * // The granted capability can be revoked. There is no need to have the other signer for this.
 * Vault::revoke_read_cap(&delegate_cap, Signer::address_of(other_signer));
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
 * @module
 */
import type * as p from "@movingco/prelude";

/** Private. The vault representation. */
export type VaultData<_Content = unknown> = {
  /**
   * The content. If the option is empty, the content is currently moved into an
   * accessor in order to work with it.
   */
  content: {
    vec: ReadonlyArray<_Content>;
  };
};

/**
 * A type describing a capability. This is used for functions like `Self::delegate` where we need to
 * specify capability types.
 */
export type CapTypeData = {
  code: number;
};

/** A capability to delegate access to the vault. */
export type DelegateCapData<_Content = unknown> = {
  vault_address: p.RawAddress;
  authority: p.RawAddress;
};

/** A modify accessor for the content of the vault. */
export type ModifyAccessorData<_Content = unknown> = {
  content: _Content;
  vault_address: p.RawAddress;
};

/** A capability to modify the content of the vault. */
export type ModifyCapData<_Content = unknown> = {
  vault_address: p.RawAddress;
  authority: p.RawAddress;
};

/** A read accessor for the content of the vault. */
export type ReadAccessorData<_Content = unknown> = {
  content: _Content;
  vault_address: p.RawAddress;
};

/**
 * A capability to read the content of the vault. Notice that the capability cannot be
 * stored but can be freely copied and dropped.
 * TODO: remove `drop` on `Content` here and elsewhere once we have phantom type parameters.
 */
export type ReadCapData<_Content = unknown> = {
  vault_address: p.RawAddress;
  authority: p.RawAddress;
};

/** A capability to transfer ownership of the vault. */
export type TransferCapData<_Content = unknown> = {
  vault_address: p.RawAddress;
  authority: p.RawAddress;
};

/**
 * Private. A value stored at a delegates address pointing to the owner of the vault. Also
 * describes the capabilities granted to this delegate.
 */
export type VaultDelegateData<_Content = unknown> = {
  vault_address: p.RawAddress;
  granted_caps: ReadonlyArray<{
    code: number;
  }>;
};

/** An event which we generate on vault access delegation or revocation if event generation is enabled. */
export type VaultDelegateEventData = {
  metadata: p.ByteString;
  vault_address: p.RawAddress;
  authority: p.RawAddress;
  delegate: p.RawAddress;
  cap: {
    code: number;
  };
  is_revoked: boolean;
};

/** Private. If the vault supports delegation, information about the delegates. */
export type VaultDelegatesData<_Content = unknown> = {
  /** The currently authorized delegates. */
  delegates: ReadonlyArray<p.RawAddress>;
};

/** Private. If event generation is enabled, contains the event generators. */
export type VaultEventsData<_Content = unknown> = {
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
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };

  /** Event handle for vault transfer. */
  transfer_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: p.U64;

          /** Address that created the GUID */
          addr: p.RawAddress;
        };
      };
    };
  };
};

/** An event which we generate on vault transfer if event generation is enabled. */
export type VaultTransferEventData = {
  metadata: p.ByteString;
  vault_address: p.RawAddress;
  authority: p.RawAddress;
  new_vault_address: p.RawAddress;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Vault",
  doc: 'A module which implements secure memory (called a *vault*) of some content which can only be operated\non if authorized by a signer. Authorization is managed by\n[*capabilities*](https://en.wikipedia.org/wiki/Capability-based_security). The vault supports delegation\nof capabilities to other signers (including revocation) as well as transfer of ownership.\n\n# Overview\n\n## Capabilities\n\nCapabilities are unforgeable tokens which represent the right to perform a particular\noperation on the vault. To acquire a capability instance, authentication via a signer is needed.\nThis signer must either be the owner of the vault, or someone the capability has been delegated to.\nOnce acquired, a capability can be passed to other functions to perform the operation it enables.\nSpecifically, those called functions do not need to have access to the original signer. This is a key\nproperty of capability based security as it prevents granting more rights to code than needed.\n\nCapability instances are unforgeable because they are localized to transactions. They can only be\ncreated by functions of this module, and as they do not have the Move language `store` or `key` abilities,\nthey cannot leak out of a transaction.\n\nExample:\n\n```move\nstruct Content has store { ssn: u64 }\n...\n// Create new vault\nVault::new(signer, b"My Vault", Content{ ssn: 525659745 });\n...\n// Obtain a read capability\nlet read_cap = Vault::acquire_read_cap<Content>(signer);\nprocess(&read_cap)\n...\nfun process(cap: &Vault::ReadCap<Content>) {\n    let accessor = Vault::read_accessor(cap);\n    let content = Vault::borrow(accessor);\n    << do something with `content: &Content` >>\n    Vault::release_read_accessor(accessor);\n}\n```\n\n## Delegation\n\nDelegation provides the option to delegate the right to acquire a vault capability to other\nsigners than the owner of the vault. Delegates still need to authenticate themselves using their\nsigner, similar as the owner does. All security arguments for owners apply also to delegates.\nDelegation can be revoked removing previously granted rights from a delegate.\n\nDelegation can be configured to be transitive by granting the right to acquire a delegation capability\nto delegates, which can then further delegate access rights.\n\nBy default, when a vault is created, it does not support delegation. The owner of the vault\nneeds to explicitly enable delegation. This allows to create vaults which are not intended for delegation\nand one does not need to worry about its misuse.\n\nExample:\n\n```move\nVault::new(signer, b"My Vault", Content{ ssn: 525659745 });\n// Enable delegation for this vault. Only the owning signer can do this.\nVault::enable_delegation<Content>(signer);\n...\n// Delegate read capability to some other signer.\nlet delegate_cap = Vault::acquire_delegate_cap<Content>(signer);\nVault::delegate_read_cap(&delegate_cap, other_signer);\n...\n// Other signer can now acquire read cap\nlet read_cap = Vault::acquire_read_cap<Content>(other_signer);\n...\n// The granted capability can be revoked. There is no need to have the other signer for this.\nVault::revoke_read_cap(&delegate_cap, Signer::address_of(other_signer));\n```\n\n## Abilities\n\nCurrently, we require that the `Content` type of a vault has the `drop` ability in order to instantiate\na capability type like `ReadCap<Content>`. Without this, capabilities themselves would need to have an\nexplicit release function, which makes little sense as they are pure values. We expect the Move\nlanguage to have \'phantom type parameters\' or similar features added, which will allows us to have\n`ReadCap<Content>` droppable and copyable without `Content` needing the same.',
  functions: [],
  structs: [
    {
      name: "0x1::Vault::Vault",
      doc: "Private. The vault representation.",
      fields: [
        {
          name: "content",
          doc: "The content. If the option is empty, the content is currently moved into an\naccessor in order to work with it.",
          ty: {
            struct: {
              name: "0x1::Option::Option",
              ty_args: [{ type_param: 0 }],
            },
          },
        },
      ],
      type_params: ["Content"],
      abilities: ["key"],
    },
    {
      name: "0x1::Vault::CapType",
      doc: "A type describing a capability. This is used for functions like `Self::delegate` where we need to\nspecify capability types.",
      fields: [{ name: "code", ty: "u8" }],
      abilities: ["copy", "drop", "store"],
    },
    {
      name: "0x1::Vault::DelegateCap",
      doc: "A capability to delegate access to the vault.",
      fields: [
        { name: "vault_address", ty: "address" },
        { name: "authority", ty: "address" },
      ],
      type_params: ["Content"],
      abilities: ["copy", "drop"],
    },
    {
      name: "0x1::Vault::ModifyAccessor",
      doc: "A modify accessor for the content of the vault.",
      fields: [
        { name: "content", ty: { type_param: 0 } },
        { name: "vault_address", ty: "address" },
      ],
      type_params: ["Content"],
      abilities: [],
    },
    {
      name: "0x1::Vault::ModifyCap",
      doc: "A capability to modify the content of the vault.",
      fields: [
        { name: "vault_address", ty: "address" },
        { name: "authority", ty: "address" },
      ],
      type_params: ["Content"],
      abilities: ["copy", "drop"],
    },
    {
      name: "0x1::Vault::ReadAccessor",
      doc: "A read accessor for the content of the vault.",
      fields: [
        { name: "content", ty: { type_param: 0 } },
        { name: "vault_address", ty: "address" },
      ],
      type_params: ["Content"],
      abilities: [],
    },
    {
      name: "0x1::Vault::ReadCap",
      doc: "A capability to read the content of the vault. Notice that the capability cannot be\nstored but can be freely copied and dropped.\nTODO: remove `drop` on `Content` here and elsewhere once we have phantom type parameters.",
      fields: [
        { name: "vault_address", ty: "address" },
        { name: "authority", ty: "address" },
      ],
      type_params: ["Content"],
      abilities: ["copy", "drop"],
    },
    {
      name: "0x1::Vault::TransferCap",
      doc: "A capability to transfer ownership of the vault.",
      fields: [
        { name: "vault_address", ty: "address" },
        { name: "authority", ty: "address" },
      ],
      type_params: ["Content"],
      abilities: ["copy", "drop"],
    },
    {
      name: "0x1::Vault::VaultDelegate",
      doc: "Private. A value stored at a delegates address pointing to the owner of the vault. Also\ndescribes the capabilities granted to this delegate.",
      fields: [
        { name: "vault_address", ty: "address" },
        {
          name: "granted_caps",
          ty: { vector: { struct: { name: "0x1::Vault::CapType" } } },
        },
      ],
      type_params: ["Content"],
      abilities: ["key"],
    },
    {
      name: "0x1::Vault::VaultDelegateEvent",
      doc: "An event which we generate on vault access delegation or revocation if event generation is enabled.",
      fields: [
        { name: "metadata", ty: { vector: "u8" } },
        { name: "vault_address", ty: "address" },
        { name: "authority", ty: "address" },
        { name: "delegate", ty: "address" },
        { name: "cap", ty: { struct: { name: "0x1::Vault::CapType" } } },
        { name: "is_revoked", ty: "bool" },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x1::Vault::VaultDelegates",
      doc: "Private. If the vault supports delegation, information about the delegates.",
      fields: [
        {
          name: "delegates",
          doc: "The currently authorized delegates.",
          ty: { vector: "address" },
        },
      ],
      type_params: ["Content"],
      abilities: ["key"],
    },
    {
      name: "0x1::Vault::VaultEvents",
      doc: "Private. If event generation is enabled, contains the event generators.",
      fields: [
        {
          name: "metadata",
          doc: "Metadata which identifies this vault. This information is used\nin events generated by this module.",
          ty: { vector: "u8" },
        },
        {
          name: "delegate_events",
          doc: "Event handle for vault delegation.",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Vault::VaultDelegateEvent" } }],
            },
          },
        },
        {
          name: "transfer_events",
          doc: "Event handle for vault transfer.",
          ty: {
            struct: {
              name: "0x1::Event::EventHandle",
              ty_args: [{ struct: { name: "0x1::Vault::VaultTransferEvent" } }],
            },
          },
        },
      ],
      type_params: ["Content"],
      abilities: ["key"],
    },
    {
      name: "0x1::Vault::VaultTransferEvent",
      doc: "An event which we generate on vault transfer if event generation is enabled.",
      fields: [
        { name: "metadata", ty: { vector: "u8" } },
        { name: "vault_address", ty: "address" },
        { name: "authority", ty: "address" },
        { name: "new_vault_address", ty: "address" },
      ],
      abilities: ["drop", "store"],
    },
  ],
  errors: {
    "0": { name: "EVAULT" },
    "1": { name: "EDELEGATE" },
    "2": { name: "EACCESSOR_IN_USE" },
    "3": { name: "EACCESSOR_INCONSISTENCY" },
    "4": { name: "EDELEGATE_TO_SELF" },
    "5": { name: "EDELEGATION_NOT_ENABLED" },
    "6": { name: "EEVENT" },
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Vault",
  /** The name of the module. */
  NAME: "Vault",
} as const;

/** Module errors. */
export const errors = {
  EACCESSOR_INCONSISTENCY: {
    code: 3,
    name: "EACCESSOR_INCONSISTENCY",
  },
  EACCESSOR_IN_USE: {
    code: 2,
    name: "EACCESSOR_IN_USE",
  },
  EDELEGATE: {
    code: 1,
    name: "EDELEGATE",
  },
  EDELEGATE_TO_SELF: {
    code: 4,
    name: "EDELEGATE_TO_SELF",
  },
  EDELEGATION_NOT_ENABLED: {
    code: 5,
    name: "EDELEGATION_NOT_ENABLED",
  },
  EEVENT: {
    code: 6,
    name: "EEVENT",
  },
  EVAULT: {
    code: 0,
    name: "EVAULT",
  },
} as const;

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
  Vault: "0x1::Vault::Vault",
  VaultDelegate: "0x1::Vault::VaultDelegate",
  VaultDelegates: "0x1::Vault::VaultDelegates",
  VaultEvents: "0x1::Vault::VaultEvents",
} as const;

/** All struct types. */
export const structs = {
  CapType: "0x1::Vault::CapType",
  DelegateCap: "0x1::Vault::DelegateCap",
  ModifyAccessor: "0x1::Vault::ModifyAccessor",
  ModifyCap: "0x1::Vault::ModifyCap",
  ReadAccessor: "0x1::Vault::ReadAccessor",
  ReadCap: "0x1::Vault::ReadCap",
  TransferCap: "0x1::Vault::TransferCap",
  Vault: "0x1::Vault::Vault",
  VaultDelegate: "0x1::Vault::VaultDelegate",
  VaultDelegateEvent: "0x1::Vault::VaultDelegateEvent",
  VaultDelegates: "0x1::Vault::VaultDelegates",
  VaultEvents: "0x1::Vault::VaultEvents",
  VaultTransferEvent: "0x1::Vault::VaultTransferEvent",
} as const;

/** Payload generators for module `0x1::Vault`. */
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
 * ```move
 * struct Content has store { ssn: u64 }
 * ...
 * // Create new vault
 * Vault::new(signer, b"My Vault", Content{ ssn: 525659745 });
 * ...
 * // Obtain a read capability
 * let read_cap = Vault::acquire_read_cap<Content>(signer);
 * process(&read_cap)
 * ...
 * fun process(cap: &Vault::ReadCap<Content>) {
 *     let accessor = Vault::read_accessor(cap);
 *     let content = Vault::borrow(accessor);
 *     << do something with `content: &Content` >>
 *     Vault::release_read_accessor(accessor);
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
 * ```move
 * Vault::new(signer, b"My Vault", Content{ ssn: 525659745 });
 * // Enable delegation for this vault. Only the owning signer can do this.
 * Vault::enable_delegation<Content>(signer);
 * ...
 * // Delegate read capability to some other signer.
 * let delegate_cap = Vault::acquire_delegate_cap<Content>(signer);
 * Vault::delegate_read_cap(&delegate_cap, other_signer);
 * ...
 * // Other signer can now acquire read cap
 * let read_cap = Vault::acquire_read_cap<Content>(other_signer);
 * ...
 * // The granted capability can be revoked. There is no need to have the other signer for this.
 * Vault::revoke_read_cap(&delegate_cap, Signer::address_of(other_signer));
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
  "Vault"
> as typeof moduleImpl;
