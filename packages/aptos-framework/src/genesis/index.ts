/**
 * **Module ID:** `0x1::genesis`
 *
 * @module
 */
import type * as p from "@movingco/prelude";

/** Type name: `0x1::genesis::ValidatorConfiguration` */
export interface IValidatorConfiguration {
  owner_address: p.RawAddress;
  operator_address: p.RawAddress;
  voter_address: p.RawAddress;
  stake_amount: p.U64;
  consensus_pubkey: p.ByteString;
  proof_of_possession: p.ByteString;
  network_addresses: p.ByteString;
  full_node_network_addresses: p.ByteString;
}

export { idl } from "./idl.js";

/** The address of the module. */
export const ADDRESS = "0x1" as const;
/** The full module name. */
export const FULL_NAME = "0x1::genesis" as const;
/** The name of the module. */
export const NAME = "genesis" as const;

/** Module ID information. */
export const id = {
  ADDRESS,
  FULL_NAME,
  NAME,
} as const;

/** Module error codes. */
export const errorCodes = {} as const;

/** All module function IDLs. */
export const functions = {} as const;

/** All struct types with ability `key`. */
export const resources = {} as const;

/** All struct types. */
export const structs = {
  ValidatorConfiguration: "0x1::genesis::ValidatorConfiguration",
} as const;

/** Payload generators for module `0x1::genesis`. */
const moduleImpl = {
  ...id,
  errorCodes,
  functions,
  resources,
  structs,
} as const;

export const moduleDefinition = moduleImpl as p.MoveModuleDefinition<
  "0x1",
  "genesis"
> as typeof moduleImpl;
