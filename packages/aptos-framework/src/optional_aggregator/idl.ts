/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::optional_aggregator",
  doc: "This module provides an interface to aggregate integers either via\naggregator (parallelizable) or via normal integers.",
  functions: [],
  structs: [
    {
      name: "0x1::optional_aggregator::Integer",
      doc: "Wrapper around integer to have a custom overflow limit. Note that\nMove has no traits (and trait bounds), so integer value must be u128.\n`Integer` provides API to add/subtract and read, just like `Aggregator`.",
      fields: [
        { name: "value", ty: "u128" },
        { name: "limit", ty: "u128" },
      ],
      abilities: ["store"],
    },
    {
      name: "0x1::optional_aggregator::OptionalAggregator",
      doc: "Struct that contains either an aggregator or a normal integer, both\noverflowing on limit.",
      fields: [
        {
          name: "aggregator",
          ty: {
            struct: {
              name: "0x1::option::Option",
              ty_args: [{ struct: { name: "0x1::aggregator::Aggregator" } }],
            },
          },
        },
        {
          name: "integer",
          ty: {
            struct: {
              name: "0x1::option::Option",
              ty_args: [
                { struct: { name: "0x1::optional_aggregator::Integer" } },
              ],
            },
          },
        },
      ],
      abilities: ["store"],
    },
  ],
  errors: {
    "1": { name: "EAGGREGATOR_OVERFLOW" },
    "2": { name: "EAGGREGATOR_UNDERFLOW" },
  },
} as const;
