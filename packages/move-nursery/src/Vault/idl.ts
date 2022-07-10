/**
 * The IDL of the module.
 *
 * @module
 */
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
