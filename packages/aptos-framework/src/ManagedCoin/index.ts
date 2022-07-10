/**
 * ManagedCoin is built to make a simple walkthrough of the Coins module.
 * It contains scripts you will need to initialize, mint, burn, transfer coins.
 * By utilizing this current module, a developer can create his own coin and care less about mint and burn capabilities,
 *
 * **Module ID:** `0x1::ManagedCoin`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/**
 * Capabilities resource storing mint and burn capabilities.
 * The resource is stored on the account that initialized coin `CoinType`.
 */
export type CapabilitiesData<_CoinType = unknown> = {
  mint_cap: {
    dummy_field: boolean;
  };
  burn_cap: {
    dummy_field: boolean;
  };
};

/**
 * Payload arguments for {@link entry.burn}.
 */
export type BurnPayload = {
  args: {
    /** IDL type: `U64` */
    amount: p.U64;
  };
  typeArgs: {
    CoinType: string;
  };
};

/**
 * Payload arguments for {@link entry.initialize}.
 */
export type InitializePayload = {
  args: {
    /** IDL type: `Vector(U8)` */
    name: p.ByteString;
    /** IDL type: `Vector(U8)` */
    symbol: p.ByteString;
    /** IDL type: `U64` */
    decimals: p.U64;
    /** IDL type: `Bool` */
    monitor_supply: boolean;
  };
  typeArgs: {
    CoinType: string;
  };
};

/**
 * Payload arguments for {@link entry.mint}.
 */
export type MintPayload = {
  args: {
    /** IDL type: `Address` */
    dst_addr: p.RawAddress;
    /** IDL type: `U64` */
    amount: p.U64;
  };
  typeArgs: {
    CoinType: string;
  };
};

/**
 * Payload arguments for {@link entry.register}.
 */
export type RegisterPayload = {
  typeArgs: {
    CoinType: string;
  };
};

export * as entry from "./entry.js";
export { idl } from "./idl.js";

/** Module ID information. */
export const id = {
  /** The address of the module. */
  ADDRESS: "0x1",
  /** The full module name. */
  FULL_NAME: "0x1::ManagedCoin",
  /** The name of the module. */
  NAME: "ManagedCoin",
} as const;

export * as errors from "./errors.js";

/** Module error codes. */
export const errorCodes = {
  "0": {
    name: "ENO_CAPABILITIES",
    doc: "When no capabilities (burn/mint) found on an account.",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  burn: {
    name: "burn",
    doc: "Withdraw an `amount` of coin `CoinType` from `account` and burn it.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "amount",
        ty: "u64",
      },
    ],
  },
  initialize: {
    name: "initialize",
    doc: "Initialize new coin `CoinType` in Aptos Blockchain.\nMint and Burn Capabilities will be stored under `account` in `Capabilities` resource.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "name",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "symbol",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "decimals",
        ty: "u64",
      },
      {
        name: "monitor_supply",
        ty: "bool",
      },
    ],
  },
  mint: {
    name: "mint",
    doc: "Create new coins `CoinType` and deposit them into dst_addr's account.",
    ty_args: ["CoinType"],
    args: [
      {
        name: "dst_addr",
        ty: "address",
      },
      {
        name: "amount",
        ty: "u64",
      },
    ],
  },
  register: {
    name: "register",
    doc: "Creating a resource that stores balance of `CoinType` on user's account, withdraw and deposit event handlers.\nRequired if user wants to start accepting deposits of `CoinType` in his account.",
    ty_args: ["CoinType"],
    args: [],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  Capabilities: "0x1::ManagedCoin::Capabilities",
} as const;

/** All struct types. */
export const structs = {
  Capabilities: "0x1::ManagedCoin::Capabilities",
} as const;

/** Payload generators for module `0x1::ManagedCoin`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * ManagedCoin is built to make a simple walkthrough of the Coins module.
 * It contains scripts you will need to initialize, mint, burn, transfer coins.
 * By utilizing this current module, a developer can create his own coin and care less about mint and burn capabilities,
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "ManagedCoin"
> as typeof moduleImpl;
