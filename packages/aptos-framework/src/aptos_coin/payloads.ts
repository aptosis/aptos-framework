/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::aptos_coin::mint`.
 *
 * Create new test coins and deposit them into dst_addr's account.
 */
export type Mint = {
  readonly type: "script_function_payload";
  readonly function: "0x1::aptos_coin::mint";
  readonly arguments: [dst_addr: string, amount: string];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::aptos_coin::claim_mint_capability`.
 *
 * Claim the delegated mint capability and destroy the delegated token.
 */
export type ClaimMintCapability = {
  readonly type: "script_function_payload";
  readonly function: "0x1::aptos_coin::claim_mint_capability";
  readonly arguments: [];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::aptos_coin::delegate_mint_capability`.
 *
 * Create delegated token for the address so the account could claim MintCapability later.
 */
export type DelegateMintCapability = {
  readonly type: "script_function_payload";
  readonly function: "0x1::aptos_coin::delegate_mint_capability";
  readonly arguments: [to: string];
  readonly type_arguments: [];
};
