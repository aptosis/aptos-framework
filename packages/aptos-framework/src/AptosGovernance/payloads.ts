/**
 * Entrypoint script function payloads.
 *
 * @module
 */

/**
 * Script function payload for `0x1::AptosGovernance::create_proposal`.
 *
 * Create a proposal with the backing `stake_pool`.
 * @param execution_hash Required. This is the hash of the resolution script. When the proposal is resolved,
 * only the exact script with matching hash can be successfully executed.
 */
export type CreateProposal = {
  readonly type: "script_function_payload";
  readonly function: "0x1::AptosGovernance::create_proposal";
  readonly arguments: [stake_pool: string, execution_hash: string];
  readonly type_arguments: [];
};

/**
 * Script function payload for `0x1::AptosGovernance::vote`.
 *
 * Vote on proposal with `proposal_id` and voting power from `stake_pool`.
 */
export type Vote = {
  readonly type: "script_function_payload";
  readonly function: "0x1::AptosGovernance::vote";
  readonly arguments: [
    stake_pool: string,
    proposal_id: string,
    should_pass: boolean
  ];
  readonly type_arguments: [];
};
