'use strict';
// gurp-sdk: client for the fictional Gurp Protocol. Not a real product.
function quote(pair, amount) {
  return { pair, amount, price: null };
}
function settle(orderId) {
  return { orderId, status: 'unsupported-in-fiction' };
}
module.exports = { quote, settle, vaults: require('./src/vaults') };
