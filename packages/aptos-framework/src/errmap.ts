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
        doc: "The address provided didn't match the `aptos_framework` address.",
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
        name: "PROLOGUE_EACCOUNT_DNE",
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
        name: "PROLOGUE_ESCRIPT_NOT_ALLOWED",
      },
      "1009": {
        name: "PROLOGUE_EMODULE_NOT_ALLOWED",
      },
      "1010": {
        name: "PROLOGUE_EINVALID_WRITESET_SENDER",
      },
      "1011": {
        name: "PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG",
      },
      "1012": {
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
    "0x1::aptos_coin": {
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
    "0x1::aptos_governance": {
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
      "5": {
        name: "ENO_VOTING_POWER",
      },
    },
    "0x1::big_vector": {
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
      "0": {
        name: "EBLOCK_METADATA",
        doc: "The `BlockMetadata` resource is in an invalid state",
      },
      "1": {
        name: "EVM_OR_VALIDATOR",
        doc: "An invalid signer was provided. Expected the signer to be the VM or a Validator.",
      },
    },
    "0x1::bucket_table": {
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
    "0x1::capability": {
      "0": {
        name: "ECAP",
      },
      "1": {
        name: "EDELEGATE",
      },
    },
    "0x1::chain_id": {
      "0": {
        name: "ECHAIN_ID",
        doc: "The `ChainId` resource was not in the required state",
      },
    },
    "0x1::code": {
      "1": {
        name: "EMODULE_NAME_CLASH",
        doc: "A package is attempted to publish with module names clashing with modules published by other packages on this\naddress.",
      },
      "2": {
        name: "EUPGRADE_IMMUTABLE",
        doc: "A package is attempted to upgrade which is marked as immutable.",
      },
      "3": {
        name: "EUPGRADE_WEAKER_POLICY",
        doc: "A package is attempted to upgrade with a weaker policy than previously.",
      },
    },
    "0x1::coin": {
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
    },
    "0x1::comparator": {
      "0": {
        name: "EQUAL",
      },
    },
    "0x1::consensus_config": {
      "0": {
        name: "ECONFIG",
        doc: "Error with config",
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
    "0x1::genesis": {
      "1": {
        name: "EINVALID_EPOCH_DURATION",
        doc: "Invalid epoch duration.",
      },
    },
    "0x1::governance_proposal": {
      "1": {
        name: "ETOO_LONG",
      },
    },
    "0x1::guid": {
      "0": {
        name: "EGUID_GENERATOR_NOT_PUBLISHED",
        doc: "GUID generator must be published ahead of first usage of `create_with_capability` function.",
      },
    },
    "0x1::managed_coin": {
      "0": {
        name: "ENO_CAPABILITIES",
        doc: "When no capabilities (burn/mint) found on an account.",
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
    "0x1::reconfiguration": {
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
    "0x1::resource_account": {
      "0": {
        name: "ECONTAINER_NOT_PUBLISHED",
      },
    },
    "0x1::simple_map": {
      "0": {
        name: "EKEY_ALREADY_EXISTS",
      },
      "1": {
        name: "EKEY_NOT_FOUND",
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
      "17": {
        name: "EINVALID_STAKE_RANGE",
        doc: "Invalid required stake range, usually happens if min > max.",
      },
      "18": {
        name: "EINVALID_LOCKUP_VALUE",
        doc: "Invalid required stake lockup value.",
      },
      "19": {
        name: "EINVALID_REWARDS_RATE",
        doc: "Invalid rewards rate.",
      },
      "20": {
        name: "EINVALID_STAKE_AMOUNT",
        doc: "Invalid stake amount (usuaully 0).",
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
    "0x1::table": {
      "100": {
        name: "EALREADY_EXISTS",
      },
      "101": {
        name: "ENOT_FOUND",
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
    "0x1::vector": {
      "131072": {
        name: "EINDEX_OUT_OF_BOUNDS",
        doc: "The index into the vector is out of bounds",
      },
    },
    "0x1::version": {
      "0": {
        name: "ECONFIG",
        doc: "Error with config",
      },
      "1": {
        name: "EINVALID_MAJOR_VERSION_NUMBER",
        doc: "Tried to set an invalid major version for the VM. Major versions must be strictly increasing",
      },
    },
    "0x1::vm_config": {
      "0": {
        name: "ECONFIG",
        doc: "Error with config",
      },
      "1": {
        name: "EGAS_CONSTANT_INCONSISTENCY",
        doc: "The provided gas constants were inconsistent.",
      },
    },
    "0x1::voting": {
      "1": {
        name: "EPROPOSAL_EXECUTION_HASH_NOT_MATCHING",
        doc: "Error codes.",
      },
      "2": {
        name: "EPROPOSAL_CANNOT_BE_RESOLVED",
      },
      "3": {
        name: "EPROPOSAL_ALREADY_RESOLVED",
      },
      "4": {
        name: "EPROPOSAL_EMPTY_EXECUTION_HASH",
      },
    },
  },
} as const;
