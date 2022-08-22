/**
 * This module provides an API for aggregatable integers that allow addition,
 * subtraction, and reading.
 *
 * Design rationale (V1)
 * =====================
 * Aggregator can be seen as a parellizable integer that supports addition,
 * subtraction and reading. The first version (V1) of aggregator has the
 * the following specification.
 *
 * add(value: u128)
 *   Speculatively adds a `value` to aggregator. This is a cheap operation
 *   which is easly parallelizable. If the result of addition overflows a
 *   `limit` (one of aggregator's fields), an error is produced and the
 *   execution aborts.
 *
 * sub(value: u128)
 *   Subtracts a `value` from aggregator. This is an expensive operation
 *   which is non-parallelizable. It reads the value of the aggregator, and
 *   the tries to subtract. If the result goes below zero, an error is produced
 *   and the execution aborts.
 *
 * read(): u128
 *   Reads (materializes) the value of an aggregator. This is an expensive
 *   operation which usually involves reading from the storage.
 *
 * destroy()
 *   Destriys and aggregator, also cleaning up storage if necessary.
 *
 * Note that there is no constructor in `Aggregator` API. This is done on purpose.
 * For every aggregator, we need to know where its value is stored on chain.
 * Currently, Move does not allow fine grained access to struct fields. For
 * example, given a struct
 *
 *   struct Foo<A> has key {
 *       a: A,
 *       b: u128,
 *   }
 *
 * there is no way of getting a value of `Foo::a` without hardcoding the layout
 * of `Foo` and the field offset. To mitigate this problem, one can use a table.
 * Every item stored in the table is uniqely identified by (handle, key) pair:
 * `handle` identifies a table instance, `key` identifies an item within the table.
 *
 * So how is this related to aggregator? Well, aggregator can reuse the table's
 * approach for fine-grained storage. However, since native functions only see a
 * reference to aggregator, we must ensure that both `handle` and `key` are
 * included as fields. Therefore, the struct looks like
 *
 *  struct Aggregator {
 *      handle: u128,
 *      key: u128,
 *      ..
 *  }
 *
 * Remaining question is how to generate this (handle, key) pair. For that, we have
 * a dedicated struct called `AggregatorFactory` which is responsible for constructing
 * aggregators. See `aggregator_factory.move` for more details.
 *
 * Advice to users (V1)
 * ====================
 * Users are encouraged to use "cheap" operations (e.g. additions) to exploit the
 * parallelism in execution.
 *
 * **Module ID:** `0x1::aggregator`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::aggregator::Aggregator` */
export interface IAggregator {
  handle: p.U128;
  key: p.U128;
  limit: p.U128;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::aggregator" as const;
/** The name of the module. */
export const NAME = "aggregator" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "1": {
    name: "EAGGREGATOR_OVERFLOW",
    doc: "When the value of aggregator (actual or accumulated) overflows (raised\nby native code).",
  },
  "2": {
    name: "EAGGREGATOR_UNDERFLOW",
    doc: "When the value of aggregator (actual or accumulated) underflows, i.e goes\nbelow zero (raised by native code).",
  },
  "3": {
    name: "ENOT_SUPPORTED",
    doc: "When aggregator feature is not supported (raised by native code).",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Aggregator: "0x1::aggregator::Aggregator",
} as const;

/** Payload generators for module `0x1::aggregator`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * This module provides an API for aggregatable integers that allow addition,
 * subtraction, and reading.
 *
 * Design rationale (V1)
 * =====================
 * Aggregator can be seen as a parellizable integer that supports addition,
 * subtraction and reading. The first version (V1) of aggregator has the
 * the following specification.
 *
 * add(value: u128)
 *   Speculatively adds a `value` to aggregator. This is a cheap operation
 *   which is easly parallelizable. If the result of addition overflows a
 *   `limit` (one of aggregator's fields), an error is produced and the
 *   execution aborts.
 *
 * sub(value: u128)
 *   Subtracts a `value` from aggregator. This is an expensive operation
 *   which is non-parallelizable. It reads the value of the aggregator, and
 *   the tries to subtract. If the result goes below zero, an error is produced
 *   and the execution aborts.
 *
 * read(): u128
 *   Reads (materializes) the value of an aggregator. This is an expensive
 *   operation which usually involves reading from the storage.
 *
 * destroy()
 *   Destriys and aggregator, also cleaning up storage if necessary.
 *
 * Note that there is no constructor in `Aggregator` API. This is done on purpose.
 * For every aggregator, we need to know where its value is stored on chain.
 * Currently, Move does not allow fine grained access to struct fields. For
 * example, given a struct
 *
 *   struct Foo<A> has key {
 *       a: A,
 *       b: u128,
 *   }
 *
 * there is no way of getting a value of `Foo::a` without hardcoding the layout
 * of `Foo` and the field offset. To mitigate this problem, one can use a table.
 * Every item stored in the table is uniqely identified by (handle, key) pair:
 * `handle` identifies a table instance, `key` identifies an item within the table.
 *
 * So how is this related to aggregator? Well, aggregator can reuse the table's
 * approach for fine-grained storage. However, since native functions only see a
 * reference to aggregator, we must ensure that both `handle` and `key` are
 * included as fields. Therefore, the struct looks like
 *
 *  struct Aggregator {
 *      handle: u128,
 *      key: u128,
 *      ..
 *  }
 *
 * Remaining question is how to generate this (handle, key) pair. For that, we have
 * a dedicated struct called `AggregatorFactory` which is responsible for constructing
 * aggregators. See `aggregator_factory.move` for more details.
 *
 * Advice to users (V1)
 * ====================
 * Users are encouraged to use "cheap" operations (e.g. additions) to exploit the
 * parallelism in execution.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "aggregator"
> as typeof moduleImpl;
