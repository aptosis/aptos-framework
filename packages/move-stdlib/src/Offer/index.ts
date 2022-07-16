/**
 * Provides a way to transfer structs from one account to another in two transactions.
 * Unlike many languages, Move cannot move data from one account to another with
 * single-signer transactions. As of this writing, ordinary transactions can only have
 * a single signer, and Move code can only store to an address (via `move_to`) if it
 * can supply a reference to a signer for the destination address (there are special case
 * exceptions in Genesis and AptosAccount where there can temporarily be multiple signers).
 *
 * Offer solves this problem by providing an `Offer` resource.  To move a struct `T` from
 * account A to B, account A first publishes an `Offer<T>` resource at `address_of(A)`,
 * using the `Offer::create` function.
 * Then account B, in a separate transaction, can move the struct `T` from the `Offer` at
 * A's address to the desired destination. B accesses the resource using the `redeem` function,
 * which aborts unless the `for` field is B's address (preventing other addresses from
 * accessing the `T` that is intended only for B). A can also redeem the `T` value if B hasn't
 * redeemed it.
 *
 * **Module ID:** `0x1::Offer`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** A wrapper around value `offered` that can be claimed by the address stored in `for`. */
export type OfferData<_Offered = unknown> = {
  offered: _Offered;
  for: string;
};

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Offer" as const;
/** The name of the module. */
export const NAME = "Offer" as const;

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
    name: "EOFFER_DNE_FOR_ACCOUNT",
    doc: "An offer of the specified type for the account does not exist",
  },
  "1": {
    name: "EOFFER_ALREADY_CREATED",
    doc: "Address already has an offer of this type.",
  },
  "2": {
    name: "EOFFER_DOES_NOT_EXIST",
    doc: "Address does not have an offer of this type to redeem.",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  Offer: "0x1::Offer::Offer",
} as const;

/** All struct types. */
export const structs = {
  Offer: "0x1::Offer::Offer",
} as const;

/** Payload generators for module `0x1::Offer`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * Provides a way to transfer structs from one account to another in two transactions.
 * Unlike many languages, Move cannot move data from one account to another with
 * single-signer transactions. As of this writing, ordinary transactions can only have
 * a single signer, and Move code can only store to an address (via `move_to`) if it
 * can supply a reference to a signer for the destination address (there are special case
 * exceptions in Genesis and AptosAccount where there can temporarily be multiple signers).
 *
 * Offer solves this problem by providing an `Offer` resource.  To move a struct `T` from
 * account A to B, account A first publishes an `Offer<T>` resource at `address_of(A)`,
 * using the `Offer::create` function.
 * Then account B, in a separate transaction, can move the struct `T` from the `Offer` at
 * A's address to the desired destination. B accesses the resource using the `redeem` function,
 * which aborts unless the `for` field is B's address (preventing other addresses from
 * accessing the `T` that is intended only for B). A can also redeem the `T` value if B hasn't
 * redeemed it.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Offer"
> as typeof moduleImpl;
