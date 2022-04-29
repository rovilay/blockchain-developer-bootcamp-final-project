const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so VotiContract here is a factory for instances of our Voti contract.
  */
  const VotiContract = await ethers.getContractFactory("Voti");

  // deploy the contract
  const voti = await VotiContract.deploy();

  // print the address of the deployed contract
  console.log(
    "Voti Contract deployed to:",
    voti.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
