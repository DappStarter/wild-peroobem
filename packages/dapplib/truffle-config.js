require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot alien rice sad unable grace hat army gather'; 
let testAccounts = [
"0xffbb9e985e7c115e26be5ca0825898a8e9f6155e5110013eae38d7360d6b0484",
"0x39aec63ce2694d7566a50a5c80a3345c4aace81bcae2b7d4845f3dba69c4f49b",
"0x94762b7a1f886d562295b89a34d63e09bba29ae4fc5c0a369c798777fa769087",
"0x73a692835b948182dd77b5dbdfa30d780d16059e2e08ead38ce96628a973188b",
"0x87341c4d723301de3deddd686b7e4e5f54824eb86eb4f8b76fa3c41fd9ec139d",
"0x4caebd0631ac63ae1f47dadad3566a722e5feaefe72aea17de9ba5ce2edfcd8f",
"0x5a472f49b4345f3571b1778a944ea51e3ba93a9796188839db922ddc7100c0b9",
"0xa26933f9482fc3f88ec44169f12138f5a7ff972bfba4ebe78fa7f7def9e81904",
"0x60014407109b90f86c8e1f65c098ac0d488aad7ad2a04d3906c39f4eaa04bc4d",
"0x12486e0f94ab833dd0dd465d17d7f1e043f6e9ffaac435d9806285a23b07a416"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
