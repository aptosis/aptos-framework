/**
 * The IDL of the module.
 *
 * @module
 */
/** The IDL of the module. */
export const idl = {
  module_id: "0x1::resource_account",
  doc: "A resource account is used to manage resources independent of an account managed by a user.\nThis contains several utilities to make using resource accounts more effective.\n\nA dev wishing to use resource accounts for a liquidity pool, would likely do the following:\n1. Create a new account using `Resourceaccount::create_resource_account`. This creates the\naccount, stores the `signer_cap` within a `Resourceaccount::Container`, and rotates the key to\nthe current accounts authentication key or a provided authentication key.\n2. Define the LiquidityPool module's address to be the same as the resource account.\n3. Construct a ModuleBundle payload for the resource account using the authentication key used\nin step 1.\n4. In the LiquidityPool module's `init_module` function, call `retrieve_resource_account_cap`\nwhich will retrive the `signer_cap` and rotate the resource account's authentication key to\n`0x0`, effectively locking it off.\n5. When adding a new coin, the liquidity pool will load the capability and hence the signer to\nregister and store new LiquidityCoin resources.\n\nCode snippets to help:\n```\nfun init_module(source: &signer) {\n  let dev_address = @DEV_ADDR;\n  let signer_cap = retrieve_resource_account_cap(&source, dev_address);\n  let lp_signer = create_signer_with_capability(&signer_cap);\n  let lp = LiquidityPoolInfo { signer_cap: signer_cap, ... };\n  move_to(&lp_signer, lp);\n}\n```\n\nLater on during a coin registration:\n```\npublic fun add_coin<X, Y>(lp: &LP, x: Coin<x>, y: Coin<y>) {\n    if(!exists<LiquidityCoin<X, Y>(LP::Address(lp), LiquidityCoin<X, Y>)) {\n        let mint, burn = Coin::initialize<LiquidityCoin<X, Y>>(...);\n        move_to(&create_signer_with_capability(&lp.cap), LiquidityCoin<X, Y>{ mint, burn });\n    }\n    ...\n}\n```",
  functions: [
    {
      name: "create_resource_account",
      doc: "Creates a new resource account and rotates the authentication key to either\nthe optional auth key if it is non-empty (though auth keys are 32-bytes)\nor the source accounts current auth key.",
      ty_args: [],
      args: [
        { name: "seed", ty: { vector: "u8" } },
        { name: "optional_auth_key", ty: { vector: "u8" } },
      ],
    },
  ],
  structs: [
    {
      name: "0x1::resource_account::Container",
      fields: [
        {
          name: "store",
          ty: {
            struct: {
              name: "0x1::simple_map::SimpleMap",
              ty_args: [
                "address",
                { struct: { name: "0x1::account::SignerCapability" } },
              ],
            },
          },
        },
      ],
      abilities: ["key"],
    },
  ],
  errors: {
    "1": {
      name: "ECONTAINER_NOT_PUBLISHED",
      doc: "Container resource not found in account",
    },
  },
} as const;
