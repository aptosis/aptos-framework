/**
 * This module provides the foundation for typesafe Coins.
 *
 * **Module ID:** `0x1::coin`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Main structure representing a coin/token in an account's custody.
 *
 * Type name: `0x1::coin::Coin`
 */
export interface ICoin {
  /** Amount of coin this address has. */
  value: p.U64;
}

/**
 * Core data structures
 * Central coin events that are emitted for all coin stores.
 *
 * Type name: `0x1::coin::CoinEvents`
 */
export interface ICoinEvents {
  register_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };
}

/**
 * Information about a specific coin type. Stored on the creator of the coin's account.
 *
 * Type name: `0x1::coin::CoinInfo`
 */
export interface ICoinInfo {
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
  decimals: p.U64;

  /** Amount of this coin type in existence. */
  supply: {
    vec: ReadonlyArray<p.U128>;
  };
}

/**
 * A holder of a specific coin types and associated event handles.
 * These are kept in a single resource to ensure locality of data.
 *
 * Type name: `0x1::coin::CoinStore`
 */
export interface ICoinStore {
  coin: {
    /** Amount of coin this address has. */
    value: p.U64;
  };
  deposit_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };
  withdraw_events: {
    /** Total number of events emitted to this event stream. */
    counter: p.U64;

    /** A globally unique ID for this event stream. */
    guid: {
      id: {
        /** If creation_num is `i`, this is the `i+1`th GUID created by `addr` */
        creation_num: p.U64;

        /** Address that created the GUID */
        addr: p.RawAddress;
      };
    };
  };
}

/**
 * Event emitted when some amount of a coin is deposited into an account.
 *
 * Type name: `0x1::coin::DepositEvent`
 */
export interface IDepositEvent {
  amount: p.U64;
}

/**
 * Set of data sent to the event stream when a new coin store is registered.
 *
 * Type name: `0x1::coin::RegisterEvent`
 */
export interface IRegisterEvent {
  type_info: {
    account_address: p.RawAddress;
    module_name: p.ByteString;
    struct_name: p.ByteString;
  };
}

/**
 * Event emitted when some amount of a coin is withdrawn from an account.
 *
 * Type name: `0x1::coin::WithdrawEvent`
 */
export interface IWithdrawEvent {
  amount: p.U64;
}

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
    to: p.RawAddress;
    /** IDL type: `U64` */
    amount: p.U64;
  };
  typeArgs: {
    CoinType: string;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::coin" as const;
/** The name of the module. */
export const NAME = "coin" as const;

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
  "8": {
    name: "EINVALID_COIN_AMOUNT",
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
  BurnCapability: "0x1::coin::BurnCapability",
  CoinEvents: "0x1::coin::CoinEvents",
  CoinInfo: "0x1::coin::CoinInfo",
  CoinStore: "0x1::coin::CoinStore",
  MintCapability: "0x1::coin::MintCapability",
} as const;

/** All struct types. */
export const structs = {
  BurnCapability: "0x1::coin::BurnCapability",
  Coin: "0x1::coin::Coin",
  CoinEvents: "0x1::coin::CoinEvents",
  CoinInfo: "0x1::coin::CoinInfo",
  CoinStore: "0x1::coin::CoinStore",
  DepositEvent: "0x1::coin::DepositEvent",
  MintCapability: "0x1::coin::MintCapability",
  RegisterEvent: "0x1::coin::RegisterEvent",
  WithdrawEvent: "0x1::coin::WithdrawEvent",
} as const;

/** Payload generators for module `0x1::coin`. */
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
  "coin"
> as typeof moduleImpl;
