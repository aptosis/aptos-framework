/**
 * PropertyMap is a specialization of SimpleMap for Tokens.
 * It maps a String key to a PropertyValue that consists of type (string) and value (vecotr<u8>)
 *
 * **Module ID:** `0x2::property_map`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x2::property_map::PropertyMap` */
export interface IPropertyMap {
  map: {
    data: ReadonlyArray<{
      key: {
        bytes: p.ByteString;
      };
      value: {
        value: p.ByteString;
        type: {
          bytes: p.ByteString;
        };
      };
    }>;
  };
}

/** Type name: `0x2::property_map::PropertyValue` */
export interface IPropertyValue {
  value: p.ByteString;
  type: {
    bytes: p.ByteString;
  };
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x2" as const;
/** The full module name. */
export const FULL_NAME = "0x2::property_map" as const;
/** The name of the module. */
export const NAME = "property_map" as const;

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
    name: "EKEY_AREADY_EXIST_IN_PROPERTY_MAP",
  },
  "2": {
    name: "EPROPERTY_NUMBER_EXCEED_LIMIT",
  },
  "3": {
    name: "EPROPERTY_NOT_EXIST",
  },
  "4": {
    name: "EKEY_COUNT_NOT_MATCH_VALUE_COUNT",
  },
  "5": {
    name: "EKEY_COUNT_NOT_MATCH_TYPE_COUNT",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  PropertyMap: "0x2::property_map::PropertyMap",
  PropertyValue: "0x2::property_map::PropertyValue",
} as const;

/** Payload generators for module `0x2::property_map`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * PropertyMap is a specialization of SimpleMap for Tokens.
 * It maps a String key to a PropertyValue that consists of type (string) and value (vecotr<u8>)
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x2",
  "property_map"
> as typeof moduleImpl;
