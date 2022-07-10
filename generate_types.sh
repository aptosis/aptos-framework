#!/usr/bin/env -S bash -xe

rm -fr packages/**/src
move-tsgen ./aptos-core/aptos-move/framework/aptos-framework --out-dir packages/aptos-framework/src
move-tsgen ./aptos-core/aptos-move/framework/move-stdlib --out-dir packages/move-stdlib/src
move-tsgen ./aptos-core/aptos-move/framework/move-stdlib/nursery --out-dir packages/move-nursery/src
