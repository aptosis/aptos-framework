/**
 * Entrypoint builders.
 *
 * @module
 */
import * as p from "@movingco/prelude";

import type * as mod from "./index.js";
import type * as payloads from "./payloads.js";
/**
 * Same as `publish_package` but as an entry function which can be called as a transaction. Because
 * of current restrictions for txn parameters, the metadata needs to be passed in serialized form.
 */
export const publish_package_txn = ({
  args,
}: mod.PublishPackageTxnArgs): payloads.PublishPackageTxn => ({
  type: "script_function_payload",
  function: "0x1::code::publish_package_txn",
  type_arguments: [],
  arguments: [
    p.serializers.hexString(args.pack_serialized),
    args.code.map((inner_args__code) =>
      p.serializers.hexString(inner_args__code)
    ),
  ],
});
