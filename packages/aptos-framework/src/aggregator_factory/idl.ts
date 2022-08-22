/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::aggregator_factory",
  doc: "This module provides foundations to create aggregators in the system.\n\nDesign rationale (V1)\n=====================\nFirst, we encourage the reader to see rationale of `Aggregator` in\n`aggregator.move`.\n\nRecall that the value of any aggregator can be identified in storage by\n(handle, key) pair. How this pair can be generated? Short answer: with\n`AggregatorFactory`!\n\n`AggregatorFactory` is a struct that can be stored as a resource on some\naccount and which contains a `phantom_table` field. When the factory is\ninitialized, we initialize this table. Importantly, table initialization\nonly generates a uniue table `handle` - something we can reuse.\n\nWhen the user wants to create a new aggregator, he/she calls a constructor\nprovided by the factory (`create_aggregator(..)`). This constructor generates\na unique key, which with the handle is used to initialize `Aggregator` struct.\n\nUse cases\n=========\nWe limit the usage of `AggregatorFactory` by only storing it on the core\naccount.\n\nWhen something whants to use an aggregator, the factory is queried and an\naggregator instance is created. Once aggregator is no longer in use, it\nshould be destroyed by the user.",
  functions: [],
  structs: [
    {
      name: "0x1::aggregator_factory::AggregatorFactory",
      doc: "Struct that creates aggregators.",
      fields: [
        {
          name: "phantom_table",
          ty: {
            struct: { name: "0x1::table::Table", ty_args: ["u128", "u128"] },
          },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {
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
  },
} as const;
