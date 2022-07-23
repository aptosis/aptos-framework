/**
 * A module for
 * 1. Hold tokens escrow to prevent token been transferred
 * 2. List token for swapping with a targeted CoinType.
 * 3. Execute the swapping
 *
 * **Module ID:** `0x2::token_coin_swap`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * TokenCoinSwap records a swap ask for swapping token_amount with CoinType with a minimal price per token
 *
 * Type name: `0x2::token_coin_swap::TokenCoinSwap`
 */
export interface ITokenCoinSwap {
  token_amount: p.U64;
  min_price_per_token: p.U64;
}

/**
 * TokenEscrow holds the tokens that cannot be withdrawn or transferred
 *
 * Type name: `0x2::token_coin_swap::TokenEscrow`
 */
export interface ITokenEscrow {
  token: {
    id: {
      token_data_id: {
        creator: p.RawAddress;
        collection: string;
        name: string;
      };
      serial_number: p.U64;
    };
    value: p.U64;
  };
  locked_until_secs: p.U64;
}

/** Type name: `0x2::token_coin_swap::TokenListingEvent` */
export interface ITokenListingEvent {
  token_id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: string;
      name: string;
    };
    serial_number: p.U64;
  };
  amount: p.U64;
  min_price: p.U64;
  locked_until_secs: p.U64;
  coin_type_info: {
    account_address: p.RawAddress;
    module_name: p.ByteString;
    struct_name: p.ByteString;
  };
}

/**
 * The listing of all tokens for swapping stored at token owner's account
 *
 * Type name: `0x2::token_coin_swap::TokenListings`
 */
export interface ITokenListings {
  listings: {
    handle: p.U128;
    length: p.U64;
  };
  listing_events: {
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
  swap_events: {
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
 * TokenStoreEscrow holds a map of token id to their tokenEscrow
 *
 * Type name: `0x2::token_coin_swap::TokenStoreEscrow`
 */
export interface ITokenStoreEscrow {
  token_escrows: {
    handle: p.U128;
    length: p.U64;
  };
}

/** Type name: `0x2::token_coin_swap::TokenSwapEvent` */
export interface ITokenSwapEvent {
  token_id: {
    token_data_id: {
      creator: p.RawAddress;
      collection: string;
      name: string;
    };
    serial_number: p.U64;
  };
  token_buyer: p.RawAddress;
  token_amount: p.U64;
  coin_amount: p.U64;
  coin_type_info: {
    account_address: p.RawAddress;
    module_name: p.ByteString;
    struct_name: p.ByteString;
  };
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x2" as const;
/** The full module name. */
export const FULL_NAME = "0x2::token_coin_swap" as const;
/** The name of the module. */
export const NAME = "token_coin_swap" as const;

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
    name: "ETOKEN_ALREADY_LISTED",
  },
  "2": {
    name: "ETOKEN_LISTING_NOT_EXIST",
  },
  "3": {
    name: "ETOKEN_NOT_IN_ESCROW",
  },
  "4": {
    name: "ETOKEN_CANNOT_MOVE_OUT_OF_ESCROW_BEFORE_LOCKUP_TIME",
  },
  "5": {
    name: "ETOKEN_MIN_PRICE_NOT_MATCH",
  },
  "6": {
    name: "ETOKEN_AMOUNT_NOT_MATCH",
  },
  "7": {
    name: "ENOT_ENOUGH_COIN",
  },
} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {
  TokenListings: "0x2::token_coin_swap::TokenListings",
  TokenStoreEscrow: "0x2::token_coin_swap::TokenStoreEscrow",
} as const;

/** All struct types. */
export const structs = {
  TokenCoinSwap: "0x2::token_coin_swap::TokenCoinSwap",
  TokenEscrow: "0x2::token_coin_swap::TokenEscrow",
  TokenListingEvent: "0x2::token_coin_swap::TokenListingEvent",
  TokenListings: "0x2::token_coin_swap::TokenListings",
  TokenStoreEscrow: "0x2::token_coin_swap::TokenStoreEscrow",
  TokenSwapEvent: "0x2::token_coin_swap::TokenSwapEvent",
} as const;

/** Payload generators for module `0x2::token_coin_swap`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * A module for
 * 1. Hold tokens escrow to prevent token been transferred
 * 2. List token for swapping with a targeted CoinType.
 * 3. Execute the swapping
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x2",
  "token_coin_swap"
> as typeof moduleImpl;
