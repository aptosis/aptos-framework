#!/usr/bin/env -S bash -xe

rm -fr packages/**/src
move-tsgen ./aptos-core/aptos-move/framework/aptos-framework --out-dir packages/aptos-framework/src
move-tsgen ./aptos-core/aptos-move/framework/aptos-stdlib --out-dir packages/aptos-stdlib/src
move-tsgen ./aptos-core/aptos-move/framework/aptos-token --out-dir packages/aptos-token/src
move-tsgen ./aptos-core/aptos-move/framework/move-stdlib --out-dir packages/move-stdlib/src
