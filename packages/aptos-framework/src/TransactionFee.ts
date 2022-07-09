import type * as p from "@movingco/prelude";

export type TestCoinCapabilitiesData = {
  burn_cap: {
    dummy_field: boolean;
  };
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::TransactionFee",
  functions: [],
  structs: [
    {
      name: "0x1::TransactionFee::TestCoinCapabilities",
      fields: [
        {
          name: "burn_cap",
          ty: {
            struct: {
              name: "0x1::Coin::BurnCapability",
              ty_args: [{ struct: { name: "0x1::TestCoin::TestCoin" } }],
            },
          },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {},
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::TransactionFee",
  /** The name of the module. */
  NAME: "TransactionFee",
} as const;

/** Module errors. */
export const errors = {} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  TestCoinCapabilities: "0x1::TransactionFee::TestCoinCapabilities",
} as const;

/** All struct types. */
export const structs = {
  TestCoinCapabilities: "0x1::TransactionFee::TestCoinCapabilities",
} as const;

/** Payload generators for module `0x1::TransactionFee`. */
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
  "TransactionFee"
> as typeof moduleImpl;
