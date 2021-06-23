var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

module.exports = {
  networks: {
    development: {
      provider: function() {
<<<<<<< HEAD
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
=======
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 10);
>>>>>>> 2304f8d9925b89cbfcb3a0d8f02ae866d413f71b
      },
      network_id: '*',
      gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};