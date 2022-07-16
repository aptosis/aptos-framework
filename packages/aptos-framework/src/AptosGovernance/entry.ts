/**
 * Entrypoint builders.
 *
 * @module
 */

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/**
 * Create a proposal with the backing `stake_pool`.
 * @param execution_hash Required. This is the hash of the resolution script. When the proposal is resolved,
 * only the exact script with matching hash can be successfully executed.
 */
export const create_proposal = ({
  args,
}: mod.CreateProposalArgs): payloads.CreateProposal => ({
  type: "script_function_payload",
  function: "0x1::AptosGovernance::create_proposal",
  type_arguments: [],
  arguments: [args.stake_pool, args.execution_hash],
});

/** Vote on proposal with `proposal_id` and voting power from `stake_pool`. */
export const vote = ({ args }: mod.VoteArgs): payloads.Vote => ({
  type: "script_function_payload",
  function: "0x1::AptosGovernance::vote",
  type_arguments: [],
  arguments: [args.stake_pool, args.proposal_id, args.should_pass],
});
