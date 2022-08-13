{
  description = "A simple Nix Flake for developing in Aptos Move.";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    move-nix.url = "github:movingco/move.nix";
  };

  outputs = { self, nixpkgs, flake-utils, move-nix, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      {
        packages = {
          inherit (move-nix.packages.${system}) aptos;
        };
        devShells = {
          default = move-nix.devShells.${system}.aptos;
        };
      });
}
