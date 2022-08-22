/**
 * This module provides the foundation for typesafe Coins.
 *
 * **Module ID:** `0x1::coin`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Core data structures
 * Main structure representing a coin/token in an account's custody.
 *
 * Type name: `0x1::coin::Coin`
 */
export interface ICoin {
  /** Amount of coin this address has. */
  value: p.U64;
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
  decimals: number;

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
  frozen: boolean;
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
 * Event emitted when some amount of a coin is withdrawn from an account.
 *
 * Type name: `0x1::coin::WithdrawEvent`
 */
export interface IWithdrawEvent {
  amount: p.U64;
}

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
  "1": {
    name: "ECOIN_INFO_ADDRESS_MISMATCH",
    doc: "Address of account which is used to initialize a coin `CoinType` doesn't match the deployer of module",
  },
  "2": {
    name: "ECOIN_INFO_ALREADY_PUBLISHED",
    doc: "`CoinType` is already initialized as a coin",
  },
  "3": {
    name: "ECOIN_INFO_NOT_PUBLISHED",
    doc: "`CoinType` hasn't been initialized as a coin",
  },
  "4": {
    name: "ECOIN_STORE_ALREADY_PUBLISHED",
    doc: "Account already has `CoinStore` registered for `CoinType`",
  },
  "5": {
    name: "ECOIN_STORE_NOT_PUBLISHED",
    doc: "Account hasn't registered `CoinStore` for `CoinType`",
  },
  "6": {
    name: "EINSUFFICIENT_BALANCE",
    doc: "Not enough coins to complete transaction",
  },
  "7": {
    name: "EDESTRUCTION_OF_NONZERO_TOKEN",
    doc: "Cannot destroy non-zero coins",
  },
  "8": {
    name: "ETOTAL_SUPPLY_OVERFLOW",
    doc: "Total supply of the coin has overflown. No additional coins can be minted",
  },
  "9": {
    name: "EZERO_COIN_AMOUNT",
    doc: "Coin amount cannot be zero",
  },
  "10": {
    name: "EFROZEN",
    doc: "CoinStore is frozen. Coins cannot be deposited or withdrawn",
  },
} as const;

/** All module function IDLs. */
export const functions = {
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
  CoinInfo: "0x1::coin::CoinInfo",
  CoinStore: "0x1::coin::CoinStore",
} as const;

/** All struct types. */
export const structs = {
  BurnCapability: "0x1::coin::BurnCapability",
  Coin: "0x1::coin::Coin",
  CoinInfo: "0x1::coin::CoinInfo",
  CoinStore: "0x1::coin::CoinStore",
  DepositEvent: "0x1::coin::DepositEvent",
  FreezeCapability: "0x1::coin::FreezeCapability",
  MintCapability: "0x1::coin::MintCapability",
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
