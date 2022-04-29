require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    // rinkeby: {
    //   url: process.env.ALCHEMY_API_KEY_URL,
    //   accounts: [process.env.RINKEBY_PRIVATE_KEY],
    // },
    localhost: {
      url: 'http://127.0.0.1:8545',
      from: '0xd1d860E28883b155375AAECA9A3d38275fD6e2f5',
      accounts: "remote"
    }
  },
};
