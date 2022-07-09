import type * as p from "@movingco/prelude";

/**
 * Payload arguments for {@link GenesisModule.create_initialize_validators}.
 */
export type CreateInitializeValidatorsPayload = {
  args: {
    /** IDL type: `Vector(Address)` */
    owners: ReadonlyArray<p.RawAddress>;
    /** IDL type: `Vector(Vector(U8))` */
    consensus_pubkeys: ReadonlyArray<p.ByteString>;
    /** IDL type: `Vector(Vector(U8))` */
    proof_of_possession: ReadonlyArray<p.ByteString>;
    /** IDL type: `Vector(Vector(U8))` */
    validator_network_addresses: ReadonlyArray<p.ByteString>;
    /** IDL type: `Vector(Vector(U8))` */
    full_node_network_addresses: ReadonlyArray<p.ByteString>;
    /** IDL type: `Vector(U64)` */
    staking_distribution: ReadonlyArray<p.U64>;
  };
};

/** Entrypoint builders. */
export const entrypoints = {
  /**
   * Sets up the initial validator set for the network.
   * The validator "owner" accounts, and their authentication
   * Addresses (and keys) are encoded in the `owners`
   * Each validator signs consensus messages with the private key corresponding to the Ed25519
   * public key in `consensus_pubkeys`.
   * Finally, each validator must specify the network address
   * (see types/src/network_address/mod.rs) for itself and its full nodes.
   *
   * Network address fields are a vector per account, where each entry is a vector of addresses
   * encoded in a single BCS byte array.
   */
  create_initialize_validators: ({
    args,
  }: CreateInitializeValidatorsPayload): p.ScriptFunctionPayload => ({
    type: "script_function_payload",
    function: "0x1::Genesis::create_initialize_validators",
    type_arguments: [],
    arguments: [
      args.owners,
      args.consensus_pubkeys,
      args.proof_of_possession,
      args.validator_network_addresses,
      args.full_node_network_addresses,
      args.staking_distribution,
    ],
  }),
} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Genesis",
  functions: [
    {
      name: "create_initialize_validators",
      doc: 'Sets up the initial validator set for the network.\nThe validator "owner" accounts, and their authentication\nAddresses (and keys) are encoded in the `owners`\nEach validator signs consensus messages with the private key corresponding to the Ed25519\npublic key in `consensus_pubkeys`.\nFinally, each validator must specify the network address\n(see types/src/network_address/mod.rs) for itself and its full nodes.\n\nNetwork address fields are a vector per account, where each entry is a vector of addresses\nencoded in a single BCS byte array.',
      ty_args: [],
      args: [
        { name: "owners", ty: { vector: "address" } },
        { name: "consensus_pubkeys", ty: { vector: { vector: "u8" } } },
        { name: "proof_of_possession", ty: { vector: { vector: "u8" } } },
        {
          name: "validator_network_addresses",
          ty: { vector: { vector: "u8" } },
        },
        {
          name: "full_node_network_addresses",
          ty: { vector: { vector: "u8" } },
        },
        { name: "staking_distribution", ty: { vector: "u64" } },
      ],
    },
  ],
  structs: [],
  errors: {},
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Genesis",
  /** The name of the module. */
  NAME: "Genesis",
} as const;

/** Module errors. */
export const errors = {} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {
  create_initialize_validators: {
    name: "create_initialize_validators",
    doc: 'Sets up the initial validator set for the network.\nThe validator "owner" accounts, and their authentication\nAddresses (and keys) are encoded in the `owners`\nEach validator signs consensus messages with the private key corresponding to the Ed25519\npublic key in `consensus_pubkeys`.\nFinally, each validator must specify the network address\n(see types/src/network_address/mod.rs) for itself and its full nodes.\n\nNetwork address fields are a vector per account, where each entry is a vector of addresses\nencoded in a single BCS byte array.',
    ty_args: [],
    args: [
      {
        name: "owners",
        ty: {
          vector: "address",
        },
      },
      {
        name: "consensus_pubkeys",
        ty: {
          vector: {
            vector: "u8",
          },
        },
      },
      {
        name: "proof_of_possession",
        ty: {
          vector: {
            vector: "u8",
          },
        },
      },
      {
        name: "validator_network_addresses",
        ty: {
          vector: {
            vector: "u8",
          },
        },
      },
      {
        name: "full_node_network_addresses",
        ty: {
          vector: {
            vector: "u8",
          },
        },
      },
      {
        name: "staking_distribution",
        ty: {
          vector: "u64",
        },
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::Genesis`. */
const moduleImpl = {
  ...id,
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Genesis"
> as typeof moduleImpl;
