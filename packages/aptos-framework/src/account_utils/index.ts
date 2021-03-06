/**
 * **Module ID:** `0x1::account_utils`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Payload arguments for {@link entry.create_and_fund_account}. */
export type CreateAndFundAccountArgs = {
  args: {
    /** IDL type: `Address` */
    account: p.RawAddress;
    /** IDL type: `U64` */
    amount: p.U64;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::account_utils" as const;
/** The name of the module. */
export const NAME = "account_utils" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {
  create_and_fund_account: {
    name: "create_and_fund_account",
    ty_args: [],
    args: [
      {
        name: "account",
        ty: "address",
      },
      {
        name: "amount",
        ty: "u64",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {} as const;

/** Payload generators for module `0x1::account_utils`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "account_utils"
> as typeof moduleImpl;
