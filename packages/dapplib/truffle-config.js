require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food stone royal mad million gown light army giggle'; 
let testAccounts = [
"0x158c5b77f7d432e8d6488eabf598ea9f7304450ba9c70fab9d91fd4d0d1bac55",
"0x294eb80bd7ae5c9e486ad4a85e498d570b4ce1e0d4bef01734cb0998f976c084",
"0x40dd68d42d51a27c61e5de3dced73a6a292e86cc42482188c273040a3dbb40c2",
"0x92105bd0243671a487637e1bf18513d6e791349497254e1fe7afb7b625487c16",
"0x24f2d1e73d5c4650354c66f1cc9b3124c204901f00c70e1be8cb9e4691f3d47c",
"0xe14a6212c653700daec138471811643f011c2bf9c624cda07efbf9d451a4f8e5",
"0xa49f3f1cb07c3ff0b53fa6e1eba8716f995722d8ef6e601b784424f10bf74de9",
"0x328465ead45b80ef6861ddd124525b253256088affe9d87d5aba8c20f78fd98e",
"0xdfb6468ad1c3fd2dcd1411d90e9b8259d48bab7592b975906aeaac6c362281be",
"0x0310465f8308e507e9b5d55a120ec3c6925dc90a5c4cb0f4a6eb89bd70b17374"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
