/**
 * This module provides foundations to create aggregators in the system.
 *
 * Design rationale (V1)
 * =====================
 * First, we encourage the reader to see rationale of `Aggregator` in
 * `aggregator.move`.
 *
 * Recall that the value of any aggregator can be identified in storage by
 * (handle, key) pair. How this pair can be generated? Short answer: with
 * `AggregatorFactory`!
 *
 * `AggregatorFactory` is a struct that can be stored as a resource on some
 * account and which contains a `phantom_table` field. When the factory is
 * initialized, we initialize this table. Importantly, table initialization
 * only generates a uniue table `handle` - something we can reuse.
 *
 * When the user wants to create a new aggregator, he/she calls a constructor
 * provided by the factory (`create_aggregator(..)`). This constructor generates
 * a unique key, which with the handle is used to initialize `Aggregator` struct.
 *
 * Use cases
 * =========
 * We limit the usage of `AggregatorFactory` by only storing it on the core
 * account.
 *
 * When something whants to use an aggregator, the factory is queried and an
 * aggregator instance is created. Once aggregator is no longer in use, it
 * should be destroyed by the user.
 *
 * **Module ID:** `0x1::aggregator_factory`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Struct that creates aggregators.
 *
 * Type name: `0x1::aggregator_factory::AggregatorFactory`
 */
export interface IAggregatorFactory {
  phantom_table: {
    handle: p.U128;
  };
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::aggregator_factory" as const;
/** The name of the module. */
export const NAME = "aggregator_factory" as const;

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
    name: "EAGGREGATOR_FACTORY_EXISTS",
    doc: "When aggregator factory has already been published.",
  },
  "2": {
    name: "ENOT_CORE_FRAMEWORK_ADDRESS",
    doc: "When aggregator factory is published to not core framework address.",
  },
  "3": {
    name: "ENOT_SUPPORTED",
    doc: "When aggregator feature is not supported (raised by native code).",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  AggregatorFactory: "0x1::aggregator_factory::AggregatorFactory",
} as const;

/** All struct types. */
export const structs = {
  AggregatorFactory: "0x1::aggregator_factory::AggregatorFactory",
} as const;

/** Payload generators for module `0x1::aggregator_factory`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * This module provides foundations to create aggregators in the system.
 *
 * Design rationale (V1)
 * =====================
 * First, we encourage the reader to see rationale of `Aggregator` in
 * `aggregator.move`.
 *
 * Recall that the value of any aggregator can be identified in storage by
 * (handle, key) pair. How this pair can be generated? Short answer: with
 * `AggregatorFactory`!
 *
 * `AggregatorFactory` is a struct that can be stored as a resource on some
 * account and which contains a `phantom_table` field. When the factory is
 * initialized, we initialize this table. Importantly, table initialization
 * only generates a uniue table `handle` - something we can reuse.
 *
 * When the user wants to create a new aggregator, he/she calls a constructor
 * provided by the factory (`create_aggregator(..)`). This constructor generates
 * a unique key, which with the handle is used to initialize `Aggregator` struct.
 *
 * Use cases
 * =========
 * We limit the usage of `AggregatorFactory` by only storing it on the core
 * account.
 *
 * When something whants to use an aggregator, the factory is queried and an
 * aggregator instance is created. Once aggregator is no longer in use, it
 * should be destroyed by the user.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "aggregator_factory"
> as typeof moduleImpl;
