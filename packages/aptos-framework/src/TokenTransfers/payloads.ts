/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/** Script function payload for `0x1::TokenTransfers::cancel_offer_script`. */
export type CancelOfferScript = {
  readonly type: "script_function_payload";
  readonly function: "0x1::TokenTransfers::cancel_offer_script";
  readonly arguments: [
    receiver: string,
    creator: string,
    collection: string,
    name: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::TokenTransfers::claim_script`. */
export type ClaimScript = {
  readonly type: "script_function_payload";
  readonly function: "0x1::TokenTransfers::claim_script";
  readonly arguments: [
    sender: string,
    creator: string,
    collection: string,
    name: string
  ];
  readonly type_arguments: [];
};

/** Script function payload for `0x1::TokenTransfers::offer_script`. */
export type OfferScript = {
  readonly type: "script_function_payload";
  readonly function: "0x1::TokenTransfers::offer_script";
  readonly arguments: [
    receiver: string,
    creator: string,
    collection: string,
    name: string,
    amount: string
  ];
  readonly type_arguments: [];
};
