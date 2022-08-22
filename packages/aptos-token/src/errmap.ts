/**
 * Module containing all errors in this package.
 *
 * @module
 */

/** All errors in this package. */
export const errmap = {
  error_categories: {},
  module_error_maps: {
    "0x1::account": {
      "1": {
        name: "EACCOUNT_ALREADY_EXISTS",
        doc: "Account already exists",
      },
      "2": {
        name: "EACCOUNT_DOES_NOT_EXIST",
        doc: "Account does not exist",
      },
      "3": {
        name: "ESEQUENCE_NUMBER_TOO_BIG",
        doc: "Sequence number exceeds the maximum value for a u64",
      },
      "4": {
        name: "EMALFORMED_AUTHENTICATION_KEY",
        doc: "The provided authentication key has an invalid length",
      },
      "5": {
        name: "ECANNOT_RESERVED_ADDRESS",
        doc: "Cannot create account because address is reserved",
      },
      "6": {
        name: "EOUT_OF_GAS",
        doc: "Transaction exceeded its allocated max gas",
      },
      "7": {
        name: "EWRITESET_NOT_ALLOWED",
        doc: "Writesets are not allowed",
      },
      "8": {
        name: "EWRONG_CURRENT_PUBLIC_KEY",
        doc: "Specified current public key is not correct",
      },
      "9": {
        name: "EINVALID_PROOF_OF_KNOWLEDGE",
        doc: "Specified proof of knowledge required to prove ownership of a public key is invalid",
      },
      "10": {
        name: "ENO_CAPABILITY",
        doc: "The caller does not have a digital-signature-based capability to call this function",
      },
      "1001": {
        name: "PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY",
        doc: "Prologue errors. These are separated out from the other errors in this\nmodule since they are mapped separately to major VM statuses, and are\nimportant to the semantics of the system.",
      },
      "1002": {
        name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD",
      },
      "1003": {
        name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW",
      },
      "1004": {
        name: "PROLOGUE_EACCOUNT_DOES_NOT_EXIST",
      },
      "1005": {
        name: "PROLOGUE_ECANT_PAY_GAS_DEPOSIT",
      },
      "1006": {
        name: "PROLOGUE_ETRANSACTION_EXPIRED",
      },
      "1007": {
        name: "PROLOGUE_EBAD_CHAIN_ID",
      },
      "1008": {
        name: "PROLOGUE_EINVALID_WRITESET_SENDER",
      },
      "1009": {
        name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG",
      },
      "1010": {
        name: "PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH",
      },
    },
    "0x1::acl": {
      "0": {
        name: "ECONTAIN",
        doc: "The ACL already contains the address.",
      },
      "1": {
        name: "ENOT_CONTAIN",
        doc: "The ACL does not contain the address.",
      },
    },
    "0x1::aggregator": {
      "1": {
        name: "EAGGREGATOR_OVERFLOW",
        doc: "When the value of aggregator (actual or accumulated) overflows (raised\nby native code).",
      },
      "2": {
        name: "EAGGREGATOR_UNDERFLOW",
        doc: "When the value of aggregator (actual or accumulated) underflows, i.e goes\nbelow zero (raised by native code).",
      },
      "3": {
        name: "ENOT_SUPPORTED",
        doc: "When aggregator feature is not supported (raised by native code).",
      },
    },
    "0x1::aggregator_factory": {
      "1": {
        name: "EAGGREGATOR_FACTORY_EXISTS",
        doc: "When aggregator factory has already been published.",
      },
      "2": {
        name: "ENOT_CORE_FRAMEWORK_ADDRESS",
        doc: "When aggregator factory is published to not core framework address.",
      },
      "3": {
        name: "ENOT_SUPPORTED",
        doc: "When aggregator feature is not supported (raised by native code).",
      },
    },
    "0x1::aptos_coin": {
      "1": {
        name: "ENO_CAPABILITIES",
        doc: "Account does not have mint capability",
      },
      "2": {
        name: "EALREADY_DELEGATED",
        doc: "Mint capability has already been delegated to this specified address",
      },
      "3": {
        name: "EDELEGATION_NOT_FOUND",
        doc: "Cannot find delegation of mint capability to this account",
      },
    },
    "0x1::aptos_governance": {
      "1": {
        name: "EINSUFFICIENT_PROPOSER_STAKE",
        doc: "The specified stake pool does not have sufficient stake to create a proposal",
      },
      "2": {
        name: "ENOT_DELEGATED_VOTER",
        doc: "This account is not the designated voter of the specified stake pool",
      },
      "3": {
        name: "EINSUFFICIENT_STAKE_LOCKUP",
        doc: "The specified stake pool does not have long enough remaining lockup to create a proposal or vote",
      },
      "4": {
        name: "EALREADY_VOTED",
        doc: "The specified stake pool has already been used to vote on the same proposal",
      },
      "5": {
        name: "ENO_VOTING_POWER",
        doc: "The specified stake pool must be part of the validator set",
      },
      "6": {
        name: "EPROPOSAL_NOT_RESOLVABLE_YET",
        doc: "Proposal is not ready to be resolved. Waiting on time or votes",
      },
      "7": {
        name: "ESCRIPT_HASH_ALREADY_ADDED",
        doc: "Proposal's script hash has already been added to the approved list",
      },
      "8": {
        name: "EPROPOSAL_NOT_RESOLVED_YET",
        doc: "The proposal has not been resolved yet",
      },
      "9": {
        name: "EMETADATA_LOCATION_TOO_LONG",
        doc: "Metadata location cannot be longer than 256 chars",
      },
      "10": {
        name: "EMETADATA_HASH_TOO_LONG",
        doc: "Metadata hash cannot be longer than 256 chars",
      },
    },
    "0x1::big_vector": {
      "1": {
        name: "EINDEX_OUT_OF_BOUNDS",
        doc: "Vector index is out of bounds",
      },
      "2": {
        name: "EOUT_OF_CAPACITY",
        doc: "Vector is full",
      },
      "3": {
        name: "EVECTOR_NOT_EMPTY",
        doc: "Cannot destroy a non-empty vector",
      },
    },
    "0x1::bit_vector": {
      "131072": {
        name: "EINDEX",
        doc: "The provided index is out of bounds",
      },
      "131073": {
        name: "ELENGTH",
        doc: "An invalid length of bitvector was given",
      },
    },
    "0x1::block": {
      "1": {
        name: "ENUM_NEW_BLOCK_EVENTS_DOES_NOT_MATCH_BLOCK_HEIGHT",
        doc: "The number of new block events does not equal the current block height.",
      },
      "2": {
        name: "EINVALID_PROPOSER",
        doc: "An invalid proposer was provided. Expected the proposer to be the VM or an active validator.",
      },
      "3": {
        name: "EZERO_EPOCH_INTERVAL",
        doc: "Epoch interval cannot be 0.",
      },
    },
    "0x1::bls12381": {
      "1": {
        name: "EZERO_PUBKEYS",
        doc: "The caller was supposed to input one or more public keys.",
      },
    },
    "0x1::bucket_table": {
      "1": {
        name: "ENOT_FOUND",
        doc: "Key not found in the bucket table",
      },
      "2": {
        name: "EZERO_CAPACITY",
        doc: "Bucket table capacity must be larger than 0",
      },
      "3": {
        name: "ENOT_EMPTY",
        doc: "Cannot destroy non-empty hashmap",
      },
      "4": {
        name: "EALREADY_EXIST",
        doc: "Key already exists",
      },
    },
    "0x1::capability": {
      "1": {
        name: "ECAPABILITY_ALREADY_EXISTS",
        doc: "Capability resource already exists on the specified account",
      },
      "2": {
        name: "ECAPABILITY_NOT_FOUND",
        doc: "Capability resource not found",
      },
      "3": {
        name: "EDELEGATE",
        doc: "Account does not have delegated permissions",
      },
    },
    "0x1::code": {
      "1": {
        name: "EMODULE_NAME_CLASH",
        doc: "Package contains duplicate module names with existing modules publised in other packages on this address",
      },
      "2": {
        name: "EUPGRADE_IMMUTABLE",
        doc: "Cannot upgrade an immutable package",
      },
      "3": {
        name: "EUPGRADE_WEAKER_POLICY",
        doc: "Cannot downgrade a package's upgradability policy",
      },
      "4": {
        name: "EMODULE_MISSING",
        doc: "Cannot delete a module that was published in the same package",
      },
    },
    "0x1::coin": {
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
    },
    "0x1::comparator": {
      "0": {
        name: "EQUAL",
      },
    },
    "0x1::consensus_config": {
      "1": {
        name: "EINVALID_CONFIG",
        doc: "The provided on chain config bytes are empty or invalid",
      },
    },
    "0x1::ed25519": {
      "1": {
        name: "E_WRONG_PUBKEY_SIZE",
        doc: "Wrong number of bytes were given as input when deserializing an Ed25519 public key.",
      },
      "2": {
        name: "E_WRONG_SIGNATURE_SIZE",
        doc: "Wrong number of bytes were given as input when deserializing an Ed25519 signature.",
      },
    },
    "0x1::fixed_point32": {
      "65537": {
        name: "EDENOMINATOR",
        doc: "The denominator provided was zero",
      },
      "65540": {
        name: "EDIVISION_BY_ZERO",
        doc: "A division by zero was encountered",
      },
      "131074": {
        name: "EDIVISION",
        doc: "The quotient value would be too large to be held in a `u64`",
      },
      "131075": {
        name: "EMULTIPLICATION",
        doc: "The multiplied value would be too large to be held in a `u64`",
      },
      "131077": {
        name: "ERATIO_OUT_OF_RANGE",
        doc: "The computed ratio when converting to a `FixedPoint32` would be unrepresentable",
      },
    },
    "0x1::gas_schedule": {
      "1": {
        name: "EINVALID_GAS_SCHEDULE",
        doc: "The provided gas schedule bytes are empty or invalid",
      },
    },
    "0x1::guid": {
      "0": {
        name: "EGUID_GENERATOR_NOT_PUBLISHED",
        doc: "GUID generator must be published ahead of first usage of `create_with_capability` function.",
      },
    },
    "0x1::managed_coin": {
      "1": {
        name: "ENO_CAPABILITIES",
        doc: "Account has no capabilities (burn/mint).",
      },
    },
    "0x1::option": {
      "262144": {
        name: "EOPTION_IS_SET",
        doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `Some` while it should be `None`.",
      },
      "262145": {
        name: "EOPTION_NOT_SET",
        doc: "The `Option` is in an invalid state for the operation attempted.\nThe `Option` is `None` while it should be `Some`.",
      },
    },
    "0x1::optional_aggregator": {
      "1": {
        name: "EAGGREGATOR_OVERFLOW",
      },
      "2": {
        name: "EAGGREGATOR_UNDERFLOW",
      },
    },
    "0x1::reconfiguration": {
      "1": {
        name: "ECONFIGURATION",
        doc: "The `Configuration` resource is in an invalid state",
      },
      "2": {
        name: "ECONFIG",
        doc: "A `Reconfiguration` resource is in an invalid state",
      },
      "3": {
        name: "EMODIFY_CAPABILITY",
        doc: "A `ModifyConfigCapability` is in a different state than was expected",
      },
      "4": {
        name: "EINVALID_BLOCK_TIME",
        doc: "An invalid block time was encountered.",
      },
      "5": {
        name: "EINVALID_GUID_FOR_EVENT",
        doc: "An invalid block time was encountered.",
      },
    },
    "0x1::resource_account": {
      "1": {
        name: "ECONTAINER_NOT_PUBLISHED",
        doc: "Container resource not found in account",
      },
    },
    "0x1::secp256k1": {
      "1": {
        name: "E_DESERIALIZE",
        doc: "An error occurred while deserializing, for example due to wrong input size.",
      },
    },
    "0x1::simple_map": {
      "1": {
        name: "EKEY_ALREADY_EXISTS",
        doc: "Map key already exists",
      },
      "2": {
        name: "EKEY_NOT_FOUND",
        doc: "Map key is not found",
      },
    },
    "0x1::stake": {
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
        name: "ENO_COINS_TO_WITHDRAW",
        doc: "No coins in inactive state to withdraw from specified pool.",
      },
      "12": {
        name: "ENOT_OPERATOR",
        doc: "Account does not have the right operator capability.",
      },
      "13": {
        name: "ELOCK_TIME_TOO_LONG",
        doc: "Lockup period is longer than allowed.",
      },
      "14": {
        name: "ENO_POST_GENESIS_VALIDATOR_SET_CHANGE_ALLOWED",
      },
      "15": {
        name: "EINVALID_PUBLIC_KEY",
        doc: "Invalid consensus public key",
      },
      "16": {
        name: "EINVALID_STAKE_AMOUNT",
        doc: "Invalid stake amount (usuaully 0).",
      },
      "18": {
        name: "EVALIDATOR_SET_TOO_LARGE",
        doc: "Validator set exceeds the limit",
      },
      "19": {
        name: "EVOTING_POWER_INCREASE_EXCEEDS_LIMIT",
        doc: "Voting power increase has exceeded the limit for this current epoch.",
      },
    },
    "0x1::staking_config": {
      "1": {
        name: "EZERO_LOCKUP_DURATION",
        doc: "Stake lockup duration cannot be zero",
      },
      "2": {
        name: "EZERO_REWARDS_RATE_DENOMINATOR",
        doc: "Reward rate denominator cannot be zero",
      },
      "3": {
        name: "EINVALID_STAKE_RANGE",
        doc: "Specified stake range is invalid. Max must be greater than min",
      },
      "4": {
        name: "EINVALID_VOTING_POWER_INCREASE_LIMIT",
        doc: "The voting power increase limit percentage must be within (0, 50]",
      },
    },
    "0x1::string": {
      "1": {
        name: "EINVALID_UTF8",
        doc: "An invalid UTF8 encoding.",
      },
      "2": {
        name: "EINVALID_INDEX",
        doc: "Index out of range.",
      },
    },
    "0x1::system_addresses": {
      "1": {
        name: "ENOT_CORE_RESOURCE_ADDRESS",
        doc: "The address/account did not correspond to the core resource address",
      },
      "2": {
        name: "EVM",
        doc: "The operation can only be performed by the VM",
      },
      "3": {
        name: "ENOT_APTOS_FRAMEWORK_ADDRESS",
        doc: "The address/account did not correspond to the core framework address",
      },
    },
    "0x1::table_with_length": {
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
    "0x1::timestamp": {
      "1": {
        name: "ENOT_OPERATING",
        doc: "The blockchain is not in an operating state yet",
      },
      "2": {
        name: "EINVALID_TIMESTAMP",
        doc: "An invalid timestamp was provided",
      },
    },
    "0x1::vector": {
      "131072": {
        name: "EINDEX_OUT_OF_BOUNDS",
        doc: "The index into the vector is out of bounds",
      },
    },
    "0x1::version": {
      "1": {
        name: "EINVALID_MAJOR_VERSION_NUMBER",
        doc: "Specified major version number must be greater than current version number.",
      },
      "2": {
        name: "ENOT_AUTHORIZED",
        doc: "Account is not authorized to make this change.",
      },
    },
    "0x1::voting": {
      "1": {
        name: "EPROPOSAL_EXECUTION_HASH_NOT_MATCHING",
        doc: "Current script's execution hash does not match the specified proposal's",
      },
      "2": {
        name: "EPROPOSAL_CANNOT_BE_RESOLVED",
        doc: "Proposal cannot be resolved. Either voting duration has not passed, not enough votes, or fewer yes than no votes",
      },
      "3": {
        name: "EPROPOSAL_ALREADY_RESOLVED",
        doc: "Proposal cannot be resolved more than once",
      },
      "4": {
        name: "EPROPOSAL_EMPTY_EXECUTION_HASH",
        doc: "Proposal cannot contain an empty execution script hash",
      },
    },
    "0x3::property_map": {
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
    },
    "0x3::token": {
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
        name: "ECREATE_WOULD_EXCEED_COLLECTION_MAXIMUM",
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
        name: "EMINT_WOULD_EXCEED_TOKEN_MAXIMUM",
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
      "15": {
        name: "ETOKEN_SPLIT_AMOUNT_LARGER_THEN_TOKEN_AMOUNT",
      },
      "16": {
        name: "EFIELD_NOT_MUTABLE",
      },
      "17": {
        name: "ENO_MUTATE_CAPABILITY",
      },
      "18": {
        name: "ETOEKN_PROPERTY_EXISTED",
      },
      "19": {
        name: "ENO_TOKEN_IN_TOKEN_STORE",
      },
      "20": {
        name: "ENON_ZERO_PROPERTY_VERSION_ONLY_ONE_INSTANCE",
      },
      "21": {
        name: "EUSER_NOT_OPT_IN_DIRECT_TRANSFER",
      },
    },
    "0x3::token_coin_swap": {
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
    },
  },
} as const;
