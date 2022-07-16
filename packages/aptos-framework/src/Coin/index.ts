/**
 * This module provides the foundation for typesafe Coins.
 *
 * **Module ID:** `0x1::Coin`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Main structure representing a coin/token in an account's custody. */
export type CoinData = {
  /** Amount of coin this address has. */
  value: string;
};

/**
 * Core data structures
 * Central coin events that are emitted for all coin stores.
 */
export type CoinEventsData = {
  register_events: {
    /** Total number of events emitted to this event stream. */
    counter: string;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: string;

          /** Address that created the GUID */
          addr: string;
        };
      };
    };
  };
};

/** Information about a specific coin type. Stored on the creator of the coin's account. */
export type CoinInfoData = {
  name: string;

  /**
   * Symbol of the coin, usually a shorter version of the name.
   * For example, Singapore Dollar is SGD.
   */
  symbol: string;

  /**
   * Number of decimals used to get its user representation.
   * For example, if `decimals` equals `2`, a balance of `505` coins should
   * be displayed to a user as `5.05` (`505 / 10 ** 2`).
   */
  decimals: string;

  /** Amount of this coin type in existence. */
  supply: {
    vec: ReadonlyArray<string>;
  };
};

/**
 * A holder of a specific coin types and associated event handles.
 * These are kept in a single resource to ensure locality of data.
 */
export type CoinStoreData = {
  coin: {
    /** Amount of coin this address has. */
    value: string;
  };
  deposit_events: {
    /** Total number of events emitted to this event stream. */
    counter: string;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: string;

          /** Address that created the GUID */
          addr: string;
        };
      };
    };
  };
  withdraw_events: {
    /** Total number of events emitted to this event stream. */
    counter: string;

    /** A globally unique ID for this event stream. */
    guid: {
      len_bytes: number;
      guid: {
        id: {
          /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
          creation_num: string;

          /** Address that created the GUID */
          addr: string;
        };
      };
    };
  };
};

/** Event emitted when some amount of a coin is deposited into an account. */
export type DepositEventData = {
  amount: string;
};

/** Set of data sent to the event stream when a new coin store is registered. */
export type RegisterEventData = {
  type_info: {
    account_address: string;
    module_name: string;
    struct_name: string;
  };
};

/** Event emitted when some amount of a coin is withdrawn from an account. */
export type WithdrawEventData = {
  amount: string;
};

/** Payload arguments for {@link entry.register}. */
export type RegisterArgs = {
  typeArgs: {
    CoinType: string;
  };
};

/** Payload arguments for {@link entry.transfer}. */
export type TransferArgs = {
  args: {
    /** IDL type: `Address` */
    to: string;
    /** IDL type: `U64` */
    amount: string;
  };
  typeArgs: {
    CoinType: string;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::Coin" as const;
/** The name of the module. */
export const NAME = "Coin" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "ECOIN_INFO_ADDRESS_MISMATCH",
    doc: "When address of account which is used to initilize a coin `CoinType`\ndoesn't match the deployer of module containining `CoinType`.",
  },
  "1": {
    name: "ECOIN_INFO_ALREADY_PUBLISHED",
    doc: "When `CoinType` is already initilized as a coin.",
  },
  "2": {
    name: "ECOIN_INFO_NOT_PUBLISHED",
    doc: "When `CoinType` hasn't been initialized as a coin.",
  },
  "3": {
    name: "ECOIN_STORE_ALREADY_PUBLISHED",
    doc: "When an account already has `CoinStore` registered for `CoinType`.",
  },
  "4": {
    name: "ECOIN_STORE_NOT_PUBLISHED",
    doc: "When an account hasn't registered `CoinStore` for `CoinType`.",
  },
  "5": {
    name: "EINSUFFICIENT_BALANCE",
    doc: "When there's not enough funds to withdraw from an account or from `Coin` resource.",
  },
  "6": {
    name: "EDESTRUCTION_OF_NONZERO_TOKEN",
    doc: "When destruction of `Coin` resource contains non-zero value attempted.",
  },
  "7": {
    name: "ETOTAL_SUPPLY_OVERFLOW",
    doc: "Total supply of the coin overflows. No additional coins can be minted.",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  register: {
    name: "register",
    doc: "Script function to register to receive a specific `CoinType`. An account that wants to hold a coin type\nhas to explicitly registers to do so. The register creates a special `CoinStore`\nto hold the specified `CoinType`.",
    ty_args: ["CoinType"],
    args: [],
  },
  transfer: {
    name: "transfer",
    doc: "Transfers `amount` of coins `CoinType` from `from` to `to`.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "to",
        ty: "address",
      },
      {
        name: "amount",
        ty: "u64",
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  BurnCapability: "0x1::Coin::BurnCapability",
  CoinEvents: "0x1::Coin::CoinEvents",
  CoinInfo: "0x1::Coin::CoinInfo",
  CoinStore: "0x1::Coin::CoinStore",
  MintCapability: "0x1::Coin::MintCapability",
} as const;

/** All struct types. */
export const structs = {
  BurnCapability: "0x1::Coin::BurnCapability",
  Coin: "0x1::Coin::Coin",
  CoinEvents: "0x1::Coin::CoinEvents",
  CoinInfo: "0x1::Coin::CoinInfo",
  CoinStore: "0x1::Coin::CoinStore",
  DepositEvent: "0x1::Coin::DepositEvent",
  MintCapability: "0x1::Coin::MintCapability",
  RegisterEvent: "0x1::Coin::RegisterEvent",
  WithdrawEvent: "0x1::Coin::WithdrawEvent",
} as const;

/** Payload generators for module `0x1::Coin`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/** This module provides the foundation for typesafe Coins. */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "Coin"
> as typeof moduleImpl;
