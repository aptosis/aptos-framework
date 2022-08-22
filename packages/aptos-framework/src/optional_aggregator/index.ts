/**
 * This module provides an interface to aggregate integers either via
 * aggregator (parallelizable) or via normal integers.
 *
 * **Module ID:** `0x1::optional_aggregator`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Wrapper around integer to have a custom overflow limit. Note that
 * Move has no traits (and trait bounds), so integer value must be u128.
 * `Integer` provides API to add/subtract and read, just like `Aggregator`.
 *
 * Type name: `0x1::optional_aggregator::Integer`
 */
export interface IInteger {
  value: p.U128;
  limit: p.U128;
}

/**
 * Struct that contains either an aggregator or a normal integer, both
 * overflowing on limit.
 *
 * Type name: `0x1::optional_aggregator::OptionalAggregator`
 */
export interface IOptionalAggregator {
  aggregator: {
    vec: ReadonlyArray<{
      handle: p.U128;
      key: p.U128;
      limit: p.U128;
    }>;
  };
  integer: {
    vec: ReadonlyArray<{
      value: p.U128;
      limit: p.U128;
    }>;
  };
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::optional_aggregator" as const;
/** The name of the module. */
export const NAME = "optional_aggregator" as const;

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
  },
  "2": {
    name: "EAGGREGATOR_UNDERFLOW",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  Integer: "0x1::optional_aggregator::Integer",
  OptionalAggregator: "0x1::optional_aggregator::OptionalAggregator",
} as const;

/** Payload generators for module `0x1::optional_aggregator`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * This module provides an interface to aggregate integers either via
 * aggregator (parallelizable) or via normal integers.
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "optional_aggregator"
> as typeof moduleImpl;
