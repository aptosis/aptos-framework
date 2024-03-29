/**
 * A resource account is used to manage resources independent of an account managed by a user.
 * This contains several utilities to make using resource accounts more effective.
 *
 * A dev wishing to use resource accounts for a liquidity pool, would likely do the following:
 * 1. Create a new account using `Resourceaccount::create_resource_account`. This creates the
 * account, stores the `signer_cap` within a `Resourceaccount::Container`, and rotates the key to
 * the current accounts authentication key or a provided authentication key.
 * 2. Define the LiquidityPool module's address to be the same as the resource account.
 * 3. Construct a ModuleBundle payload for the resource account using the authentication key used
 * in step 1.
 * 4. In the LiquidityPool module's `init_module` function, call `retrieve_resource_account_cap`
 * which will retrive the `signer_cap` and rotate the resource account's authentication key to
 * `0x0`, effectively locking it off.
 * 5. When adding a new coin, the liquidity pool will load the capability and hence the signer to
 * register and store new LiquidityCoin resources.
 *
 * Code snippets to help:
 * ```
 * fun init_module(source: &signer) {
 *   let dev_address = @DEV_ADDR;
 *   let signer_cap = retrieve_resource_account_cap(&source, dev_address);
 *   let lp_signer = create_signer_with_capability(&signer_cap);
 *   let lp = LiquidityPoolInfo { signer_cap: signer_cap, ... };
 *   move_to(&lp_signer, lp);
 * }
 * ```
 *
 * Later on during a coin registration:
 * ```
 * public fun add_coin<X, Y>(lp: &LP, x: Coin<x>, y: Coin<y>) {
 *     if(!exists<LiquidityCoin<X, Y>(LP::Address(lp), LiquidityCoin<X, Y>)) {
 *         let mint, burn = Coin::initialize<LiquidityCoin<X, Y>>(...);
 *         move_to(&create_signer_with_capability(&lp.cap), LiquidityCoin<X, Y>{ mint, burn });
 *     }
 *     ...
 * }
 * ```
 *
 * **Module ID:** `0x1::resource_account`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::resource_account::Container` */
export interface IContainer {
  store: {
    data: ReadonlyArray<{
      key: p.RawAddress;
      value: {
        account: p.RawAddress;
      };
    }>;
  };
}

/** Payload arguments for {@link entry.create_resource_account}. */
export type CreateResourceAccountArgs = {
  args: {
    /** IDL type: `Vector(U8)` */
    seed: p.ByteString;
    /** IDL type: `Vector(U8)` */
    optional_auth_key: p.ByteString;
  };
};

export * as entry from "./entry.js";
export * as entryNames from "./entryNames.js";
export { idl } from "./idl.js";
export * as payloads from "./payloads.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::resource_account" as const;
/** The name of the module. */
export const NAME = "resource_account" as const;

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
    name: "ECONTAINER_NOT_PUBLISHED",
    doc: "Container resource not found in account",
  },
} as const;

/** All module function IDLs. */
export const functions = {
  create_resource_account: {
    name: "create_resource_account",
    doc: "Creates a new resource account and rotates the authentication key to either\nthe optional auth key if it is non-empty (though auth keys are 32-bytes)\nor the source accounts current auth key.",
    ty_args: [],
    args: [
      {
        name: "seed",
        ty: {
          vector: "u8",
        },
      },
      {
        name: "optional_auth_key",
        ty: {
          vector: "u8",
        },
      },
    ],
  },
} as const;

/** All struct types with ability `key`. */
export const resources = {
  Container: "0x1::resource_account::Container",
} as const;

/** All struct types. */
export const structs = {
  Container: "0x1::resource_account::Container",
} as const;

/** Payload generators for module `0x1::resource_account`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

/**
 * A resource account is used to manage resources independent of an account managed by a user.
 * This contains several utilities to make using resource accounts more effective.
 *
 * A dev wishing to use resource accounts for a liquidity pool, would likely do the following:
 * 1. Create a new account using `Resourceaccount::create_resource_account`. This creates the
 * account, stores the `signer_cap` within a `Resourceaccount::Container`, and rotates the key to
 * the current accounts authentication key or a provided authentication key.
 * 2. Define the LiquidityPool module's address to be the same as the resource account.
 * 3. Construct a ModuleBundle payload for the resource account using the authentication key used
 * in step 1.
 * 4. In the LiquidityPool module's `init_module` function, call `retrieve_resource_account_cap`
 * which will retrive the `signer_cap` and rotate the resource account's authentication key to
 * `0x0`, effectively locking it off.
 * 5. When adding a new coin, the liquidity pool will load the capability and hence the signer to
 * register and store new LiquidityCoin resources.
 *
 * Code snippets to help:
 * ```
 * fun init_module(source: &signer) {
 *   let dev_address = @DEV_ADDR;
 *   let signer_cap = retrieve_resource_account_cap(&source, dev_address);
 *   let lp_signer = create_signer_with_capability(&signer_cap);
 *   let lp = LiquidityPoolInfo { signer_cap: signer_cap, ... };
 *   move_to(&lp_signer, lp);
 * }
 * ```
 *
 * Later on during a coin registration:
 * ```
 * public fun add_coin<X, Y>(lp: &LP, x: Coin<x>, y: Coin<y>) {
 *     if(!exists<LiquidityCoin<X, Y>(LP::Address(lp), LiquidityCoin<X, Y>)) {
 *         let mint, burn = Coin::initialize<LiquidityCoin<X, Y>>(...);
 *         move_to(&create_signer_with_capability(&lp.cap), LiquidityCoin<X, Y>{ mint, burn });
 *     }
 *     ...
 * }
 * ```
 */
export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "resource_account"
> as typeof moduleImpl;
