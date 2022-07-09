#!/usr/bin/env -S bash -xe

move-tsgen ./aptos-core/aptos-move/framework/aptos-framework --out-dir packages/aptos-framework/src
move-tsgen ./aptos-core/aptos-move/framework/move-stdlib --out-dir packages/aptos-std/src
move-tsgen ./aptos-core/aptos-move/framework/move-stdlib/nursery --out-dir packages/aptos-move-nursery/src
