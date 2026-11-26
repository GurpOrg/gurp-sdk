'use strict';
// Vaults module (unreleased).
function depositToVault(vaultId, amount) {
  return { vaultId, amount, ok: true };
}
module.exports = { depositToVault };
