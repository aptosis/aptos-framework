/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x3::property_map",
  doc: "PropertyMap is a specialization of SimpleMap for Tokens.\nIt maps a String key to a PropertyValue that consists of type (string) and value (vecotr<u8>)",
  functions: [],
  structs: [
    {
      name: "0x3::property_map::PropertyMap",
      fields: [
        {
          name: "map",
          ty: {
            struct: {
              name: "0x1::simple_map::SimpleMap",
              ty_args: [
                { struct: { name: "0x1::string::String" } },
                { struct: { name: "0x3::property_map::PropertyValue" } },
              ],
            },
          },
        },
      ],
      abilities: ["drop", "store"],
    },
    {
      name: "0x3::property_map::PropertyValue",
      fields: [
        { name: "value", ty: { vector: "u8" } },
        { name: "type", ty: { struct: { name: "0x1::string::String" } } },
      ],
      abilities: ["copy", "drop", "store"],
    },
  ],
  errors: {
    "1": { name: "EKEY_AREADY_EXIST_IN_PROPERTY_MAP" },
    "2": { name: "EPROPERTY_NUMBER_EXCEED_LIMIT" },
    "3": { name: "EPROPERTY_NOT_EXIST" },
    "4": { name: "EKEY_COUNT_NOT_MATCH_VALUE_COUNT" },
    "5": { name: "EKEY_COUNT_NOT_MATCH_TYPE_COUNT" },
  },
} as const;
