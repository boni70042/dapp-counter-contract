/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers');

module.exports = {
    networks: {
        hardhat: {
            chainId: 31337
        }
    },
    solidity: '0.8.8'
};
