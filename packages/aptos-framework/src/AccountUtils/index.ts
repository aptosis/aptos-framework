/**
 * **Module ID:** `0x1::AccountUtils`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Payload arguments for {@link entry.create_and_fund_account}.
 */
export type CreateAndFundAccountPayload = {
  args: {
    /** IDL type: `Address` */
    account: p.RawAddress;
    /** IDL type: `U64` */
    amount: p.U64;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::AccountUtils",
  /** The name of the module. */
  NAME: "AccountUtils",
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

/** Payload generators for module `0x1::AccountUtils`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "AccountUtils"
> as typeof moduleImpl;
