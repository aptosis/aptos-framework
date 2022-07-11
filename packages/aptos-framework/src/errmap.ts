/**
 * Module containing all errors in this package.
 *
 * @module
 */

/** All errors in this package. */
export const errmap = {
  error_categories: {
    "1": {
      name: "INVALID_STATE",
      doc: "The system is in a state where the performed operation is not allowed. Example: call to a function only allowed\nin genesis.",
    },
    "2": {
      name: "REQUIRES_ADDRESS",
      doc: "The signer of a transaction does not have the expected address for this operation. Example: a call to a function\nwhich publishes a resource under a particular address.",
    },
    "3": {
      name: "REQUIRES_ROLE",
      doc: "The signer of a transaction does not have the expected  role for this operation. Example: a call to a function\nwhich requires the signer to have the role of treasury compliance.",
    },
    "4": {
      name: "REQUIRES_CAPABILITY",
      doc: "The signer of a transaction does not have a required capability.",
    },
    "5": {
      name: "NOT_PUBLISHED",
      doc: "A resource is required but not published. Example: access to non-existing AccountLimits resource.",
    },
    "6": {
      name: "ALREADY_PUBLISHED",
      doc: "Attempting to publish a resource that is already published. Example: calling an initialization function\ntwice.",
    },
    "7": {
      name: "INVALID_ARGUMENT",
      doc: "An argument provided to an operation is invalid. Example: a signing key has the wrong format.",
    },
    "8": {
      name: "LIMIT_EXCEEDED",
      doc: "A limit on an amount, e.g. a currency, is exceeded. Example: withdrawal of money after account limits window\nis exhausted.",
    },
    "10": {
      name: "INTERNAL",
      doc: "An internal error (bug) has occurred.",
    },
    "255": {
      name: "CUSTOM",
      doc: "A custom error category for extension points.",
    },
  },
  module_error_maps: {
    "0x1::ACL": {
      "0": {
        name: "ECONTAIN",
        doc: "The ACL already contains the address.",
      },
      "1": {
        name: "ENOT_CONTAIN",
        doc: "The ACL does not contain the address.",
      },
    },
    "0x1::ASCII": {
      "0": {
        name: "EINVALID_ASCII_CHARACTER",
        doc: "An invalid ASCII character was encountered when creating an ASCII string.",
      },
    },
    "0x1::Account": {
      "0": {
        name: "EACCOUNT",
        doc: "Account already existed",
      },
      "1": {
        name: "ESEQUENCE_NUMBER_TOO_BIG",
        doc: "Sequence number exceeded the maximum value for a u64",
      },
      "2": {
        name: "ENOT_APTOS_FRAMEWORK",
        doc: "The address provided didn't match the `AptosFramework` address.",
      },
      "3": {
        name: "EMALFORMED_AUTHENTICATION_KEY",
        doc: "The provided authentication had an invalid length",
      },
      "4": {
        name: "ECANNOT_CREATE_AT_VM_RESERVED",
      },
      "5": {
        name: "EGAS",
      },
      "6": {
        name: "ECANNOT_CREATE_AT_CORE_CODE",
      },
      "7": {
        name: "EADDR_NOT_MATCH_PREIMAGE",
      },
      "8": {
        name: "EWRITESET_NOT_ALLOWED",
      },
      "9": {
        name: "EMULTI_AGENT_NOT_SUPPORTED",
      },
      "10": {
        name: "EMODULE_NOT_ALLOWED",
      },
      "11": {
        name: "ESCRIPT_NOT_ALLOWED",
      },
    },
    "0x1::AptosGovernance": {
      "1": {
        name: "EINSUFFICIENT_PROPOSER_STAKE",
        doc: "Error codes.",
      },
      "2": {
        name: "ENOT_DELEGATED_VOTER",
      },
      "3": {
        name: "EINSUFFICIENT_STAKE_LOCKUP",
      },
      "4": {
        name: "EALREADY_VOTED",
      },
    },
    "0x1::BigVector": {
      "0": {
        name: "EINDEX_OUT_OF_BOUNDS",
        doc: "The index into the vector is out of bounds",
      },
      "1": {
        name: "EOUT_OF_CAPACITY",
        doc: "Need to reserve more buckets for push_back_no_grow.",
      },
      "2": {
        name: "ENOT_EMPTY",
        doc: "Destory a non-empty vector.",
      },
    },
    "0x1::BitVector": {
      "0": {
        name: "EINDEX",
        doc: "The provided index is out of bounds",
      },
      "1": {
        name: "ELENGTH",
        doc: "An invalid length of bitvector was given",
      },
    },
    "0x1::Block": {
      "0": {
        name: "EBLOCK_METADATA",
        doc: "The `BlockMetadata` resource is in an invalid state",
      },
      "1": {
        name: "EVM_OR_VALIDATOR",
        doc: "An invalid signer was provided. Expected the signer to be the VM or a Validator.",
      },
    },
    "0x1::BucketTable": {
      "0": {
        name: "ENOT_FOUND",
        doc: "Not found in the table;",
      },
      "1": {
        name: "EZERO_CAPACITY",
        doc: "Capacity should be larger than 0.",
      },
      "2": {
        name: "ENOT_EMPTY",
        doc: "Destroy non-empty hashmap.",
      },
      "3": {
        name: "EALREADY_EXIST",
        doc: "Key already exists",
      },
    },
    "0x1::Capability": {
      "0": {
        name: "ECAP",
      },
      "1": {
        name: "EDELEGATE",
      },
    },
    "0x1::ChainId": {
      "0": {
        name: "ECHAIN_ID",
        doc: "The `ChainId` resource was not in the required state",
      },
    },
    "0x1::Coin": {
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
    },
    "0x1::Comparator": {
      "0": {
        name: "EQUAL",
      },
    },
    "0x1::ConsensusConfig": {
      "0": {
        name: "ECONFIG",
        doc: "Error with config",
      },
    },
    "0x1::FixedPoint32": {
      "0": {
        name: "EDENOMINATOR",
        doc: "The denominator provided was zero",
      },
      "1": {
        name: "EDIVISION",
        doc: "The quotient value would be too large to be held in a `u64`",
      },
      "2": {
        name: "EMULTIPLICATION",
        doc: "The multiplied value would be too large to be held in a `u64`",
      },
      "3": {
        name: "EDIVISION_BY_ZERO",
        doc: "A division by zero was encountered",
      },
      "4": {
        name: "ERATIO_OUT_OF_RANGE",
        doc: "The computed ratio when converting to a `FixedPoint32` would be unrepresentable",
      },
    },
    "0x1::GUID": {
      "0": {
        name: "EGUID_GENERATOR_NOT_PUBLISHED",
        doc: "GUID generator must be published ahead of first usage of `create_with_capability` function.",
      },
    },
    "0x1::ManagedCoin": {
      "0": {
        name: "ENO_CAPABILITIES",
        doc: "When no capabilities (burn/mint) found on an account.",
      },
    },
    "0x1::Offer": {
      "0": {
        name: "EOFFER_DNE_FOR_ACCOUNT",
        doc: "An offer of the specified type for the account does not exist",
      },
      "1": {
        name: "EOFFER_ALREADY_CREATED",
        doc: "Address already has an offer of this type.",
      },
      "2": {
        name: "EOFFER_DOES_NOT_EXIST",
        doc: "Address does not have an offer of this type to redeem.",
      },
    },
    "0x1::Option": {
      "0": {
        name: "EOPTION_IS_SET",
        doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `Some` while it should be `None`.",
      },
      "1": {
        name: "EOPTION_NOT_SET",
        doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `None` while it should be `Some`.",
      },
    },
    "0x1::Reconfiguration": {
      "0": {
        name: "ECONFIGURATION",
        doc: "The `Configuration` resource is in an invalid state",
      },
      "1": {
        name: "ECONFIG",
        doc: "A `Reconfiguration` resource is in an invalid state",
      },
      "2": {
        name: "EMODIFY_CAPABILITY",
        doc: "A `ModifyConfigCapability` is in a different state than was expected",
      },
      "3": {
        name: "EINVALID_BLOCK_TIME",
        doc: "An invalid block time was encountered.",
      },
      "4": {
        name: "EINVALID_GUID_FOR_EVENT",
        doc: "An invalid block time was encountered.",
      },
    },
    "0x1::ResourceAccount": {
      "0": {
        name: "ECONTAINER_NOT_PUBLISHED",
      },
    },
    "0x1::SimpleMap": {
      "0": {
        name: "EKEY_ALREADY_EXISTS",
      },
      "1": {
        name: "EKEY_NOT_FOUND",
      },
    },
    "0x1::Stake": {
      "1": {
        name: "ELOCK_TIME_TOO_SHORT",
        doc: "Lockup period is shorter than required.",
      },
      "2": {
        name: "EWITHDRAW_NOT_ALLOWED",
        doc: "Withdraw not allowed, the stake is still locked.",
      },
      "3": {
        name: "EVALIDATOR_CONFIG",
        doc: "Validator Config not published.",
      },
      "4": {
        name: "ESTAKE_TOO_LOW",
        doc: "Not enough stake to join validator set.",
      },
      "5": {
        name: "ESTAKE_TOO_HIGH",
        doc: "Too much stake to join validator set.",
      },
      "6": {
        name: "EALREADY_ACTIVE_VALIDATOR",
        doc: "Account is already a validator or pending validator.",
      },
      "7": {
        name: "ENOT_VALIDATOR",
        doc: "Account is not a validator.",
      },
      "8": {
        name: "ELAST_VALIDATOR",
        doc: "Can't remove last validator.",
      },
      "9": {
        name: "ESTAKE_EXCEEDS_MAX",
        doc: "Total stake exceeds maximum allowed.",
      },
      "10": {
        name: "EALREADY_REGISTERED",
        doc: "Account is already registered as a validator candidate.",
      },
      "11": {
        name: "ENOT_OWNER",
        doc: "Account does not have the right ownership capability.",
      },
      "12": {
        name: "ENO_COINS_TO_WITHDRAW",
        doc: "No coins in inactive state to withdraw from specified pool.",
      },
      "13": {
        name: "ENOT_OPERATOR",
        doc: "Account does not have the right operator capability.",
      },
      "14": {
        name: "ELOCK_TIME_TOO_LONG",
        doc: "Lockup period is longer than allowed.",
      },
      "15": {
        name: "ENO_POST_GENESIS_VALIDATOR_SET_CHANGE_ALLOWED",
      },
      "16": {
        name: "EINVALID_PUBLIC_KEY",
        doc: "Invalid consensus public key",
      },
    },
    "0x1::SystemAddresses": {
      "0": {
        name: "ENOT_CORE_RESOURCE_ADDRESS",
        doc: "The address/account did not correspond to the core resource address",
      },
      "1": {
        name: "EVM",
        doc: "The operation can only be performed by the VM",
      },
      "2": {
        name: "ENOT_CORE_FRAMEWORK_ADDRESS",
        doc: "The address/account did not correspond to the core framework address",
      },
    },
    "0x1::Table": {
      "100": {
        name: "EALREADY_EXISTS",
      },
      "101": {
        name: "ENOT_FOUND",
      },
      "102": {
        name: "ENOT_EMPTY",
      },
    },
    "0x1::TestCoin": {
      "1": {
        name: "ENO_CAPABILITIES",
        doc: "Error codes",
      },
      "2": {
        name: "EALREADY_DELEGATED",
      },
      "3": {
        name: "EDELEGATION_NOT_FOUND",
      },
    },
    "0x1::Timestamp": {
      "0": {
        name: "ENOT_GENESIS",
        doc: "The blockchain is not in the genesis state anymore",
      },
      "1": {
        name: "ENOT_OPERATING",
        doc: "The blockchain is not in an operating state yet",
      },
      "2": {
        name: "ETIMESTAMP",
        doc: "An invalid timestamp was provided",
      },
    },
    "0x1::Token": {
      "0": {
        name: "EALREADY_HAS_BALANCE",
      },
      "1": {
        name: "EBALANCE_NOT_PUBLISHED",
      },
      "2": {
        name: "ECOLLECTIONS_NOT_PUBLISHED",
      },
      "3": {
        name: "ECOLLECTION_NOT_PUBLISHED",
      },
      "4": {
        name: "ECOLLECTION_ALREADY_EXISTS",
      },
      "5": {
        name: "ECREATE_WOULD_EXCEED_MAXIMUM",
      },
      "6": {
        name: "EINSUFFICIENT_BALANCE",
      },
      "7": {
        name: "EINVALID_COLLECTION_NAME",
      },
      "8": {
        name: "EINVALID_TOKEN_MERGE",
      },
      "9": {
        name: "EMINT_WOULD_EXCEED_MAXIMUM",
      },
      "10": {
        name: "ENO_BURN_CAPABILITY",
      },
      "11": {
        name: "ENO_MINT_CAPABILITY",
      },
      "12": {
        name: "ETOKEN_ALREADY_EXISTS",
      },
      "13": {
        name: "ETOKEN_NOT_PUBLISHED",
      },
      "14": {
        name: "ETOKEN_STORE_NOT_PUBLISHED",
      },
    },
    "0x1::TransactionPublishingOption": {
      "1": {
        name: "ECONFIG",
      },
    },
    "0x1::VMConfig": {
      "0": {
        name: "ECONFIG",
        doc: "Error with config",
      },
      "1": {
        name: "EGAS_CONSTANT_INCONSISTENCY",
        doc: "The provided gas constants were inconsistent.",
      },
    },
    "0x1::Vector": {
      "0": {
        name: "EINDEX_OUT_OF_BOUNDS",
        doc: "The index into the vector is out of bounds",
      },
    },
    "0x1::Version": {
      "0": {
        name: "ECONFIG",
        doc: "Error with config",
      },
      "1": {
        name: "EINVALID_MAJOR_VERSION_NUMBER",
        doc: "Tried to set an invalid major version for the VM. Major versions must be strictly increasing",
      },
    },
    "0x1::Voting": {
      "1": {
        name: "EPROPOSAL_EXECUTION_HASH_NOT_MATCHING",
        doc: "Error codes.",
      },
      "2": {
        name: "EPROPOSAL_CANNOT_BE_RESOLVED",
      },
    },
  },
} as const;
