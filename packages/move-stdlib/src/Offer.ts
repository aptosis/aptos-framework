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
 * @module
 */
import type * as p from "@movingco/prelude";

/** A wrapper around value `offered` that can be claimed by the address stored in `for`. */
export type OfferData<_Offered = unknown> = {
  offered: _Offered;
  for: p.RawAddress;
};

/** Entrypoint builders. */
export const entrypoints = {} as const;

/** The IDL of the module. */
export const idl = {
  module_id: "0x1::Offer",
  doc: "Provides a way to transfer structs from one account to another in two transactions.\nUnlike many languages, Move cannot move data from one account to another with\nsingle-signer transactions. As of this writing, ordinary transactions can only have\na single signer, and Move code can only store to an address (via `move_to`) if it\ncan supply a reference to a signer for the destination address (there are special case\nexceptions in Genesis and AptosAccount where there can temporarily be multiple signers).\n\nOffer solves this problem by providing an `Offer` resource.  To move a struct `T` from\naccount A to B, account A first publishes an `Offer<T>` resource at `address_of(A)`,\nusing the `Offer::create` function.\nThen account B, in a separate transaction, can move the struct `T` from the `Offer` at\nA's address to the desired destination. B accesses the resource using the `redeem` function,\nwhich aborts unless the `for` field is B's address (preventing other addresses from\naccessing the `T` that is intended only for B). A can also redeem the `T` value if B hasn't\nredeemed it.",
  functions: [],
  structs: [
    {
      name: "0x1::Offer::Offer",
      doc: "A wrapper around value `offered` that can be claimed by the address stored in `for`.",
      fields: [
        { name: "offered", ty: { type_param: 0 } },
        { name: "for", ty: "address" },
      ],
      type_params: ["Offered"],
      abilities: ["key"],
    },
  ],
  errors: {
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
  },
} as const;

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::Offer",
  /** The name of the module. */
  NAME: "Offer",
} as const;

/** Module errors. */
export const errors = {
  EOFFER_ALREADY_CREATED: {
    code: 1,
    name: "EOFFER_ALREADY_CREATED",
    doc: "Address already has an offer of this type.",
  },
  EOFFER_DNE_FOR_ACCOUNT: {
    code: 0,
    name: "EOFFER_DNE_FOR_ACCOUNT",
    doc: "An offer of the specified type for the account does not exist",
  },
  EOFFER_DOES_NOT_EXIST: {
    code: 2,
    name: "EOFFER_DOES_NOT_EXIST",
    doc: "Address does not have an offer of this type to redeem.",
  },
} as const;

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
  errors,
  errorCodes,
  functions,
  resources,
  structs,

  ...entrypoints,
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
