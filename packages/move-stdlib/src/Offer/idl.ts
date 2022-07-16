/**
 * The IDL of the module.
 *
 * @module
 */
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
      type_params: [{ name: "Offered" }],
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
