/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/** Script function payload for `0x1::AccountUtils::create_and_fund_account`. */
export type CreateAndFundAccount = {
  readonly type: "script_function_payload";
  readonly function: "0x1::AccountUtils::create_and_fund_account";
  readonly arguments: [account: string, amount: string];
  readonly type_arguments: [];
};
