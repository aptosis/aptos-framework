/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::aggregator",
  doc: "This module provides an API for aggregatable integers that allow addition,\nsubtraction, and reading.\n\nDesign rationale (V1)\n=====================\nAggregator can be seen as a parellizable integer that supports addition,\nsubtraction and reading. The first version (V1) of aggregator has the\nthe following specification.\n\nadd(value: u128)\n  Speculatively adds a `value` to aggregator. This is a cheap operation\n  which is easly parallelizable. If the result of addition overflows a\n  `limit` (one of aggregator's fields), an error is produced and the\n  execution aborts.\n\nsub(value: u128)\n  Subtracts a `value` from aggregator. This is an expensive operation\n  which is non-parallelizable. It reads the value of the aggregator, and\n  the tries to subtract. If the result goes below zero, an error is produced\n  and the execution aborts.\n\nread(): u128\n  Reads (materializes) the value of an aggregator. This is an expensive\n  operation which usually involves reading from the storage.\n\ndestroy()\n  Destriys and aggregator, also cleaning up storage if necessary.\n\nNote that there is no constructor in `Aggregator` API. This is done on purpose.\nFor every aggregator, we need to know where its value is stored on chain.\nCurrently, Move does not allow fine grained access to struct fields. For\nexample, given a struct\n\n  struct Foo<A> has key {\n      a: A,\n      b: u128,\n  }\n\nthere is no way of getting a value of `Foo::a` without hardcoding the layout\nof `Foo` and the field offset. To mitigate this problem, one can use a table.\nEvery item stored in the table is uniqely identified by (handle, key) pair:\n`handle` identifies a table instance, `key` identifies an item within the table.\n\nSo how is this related to aggregator? Well, aggregator can reuse the table's\napproach for fine-grained storage. However, since native functions only see a\nreference to aggregator, we must ensure that both `handle` and `key` are\nincluded as fields. Therefore, the struct looks like\n\n struct Aggregator {\n     handle: u128,\n     key: u128,\n     ..\n }\n\nRemaining question is how to generate this (handle, key) pair. For that, we have\na dedicated struct called `AggregatorFactory` which is responsible for constructing\naggregators. See `aggregator_factory.move` for more details.\n\nAdvice to users (V1)\n====================\nUsers are encouraged to use \"cheap\" operations (e.g. additions) to exploit the\nparallelism in execution.",
  functions: [],
  structs: [
    {
      name: "0x1::aggregator::Aggregator",
      fields: [
        { name: "handle", ty: "u128" },
        { name: "key", ty: "u128" },
        { name: "limit", ty: "u128" },
      ],
      abilities: ["store"],
    },
  ],
  errors: {
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
  },
} as const;
