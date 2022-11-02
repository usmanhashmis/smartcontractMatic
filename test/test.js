const { expect, assert } = require("chai");
const { ethers } = require("hardhat");


describe("isContractmatic", function () {
  let paymentDeployed;
  let address1;
  let booster;

  beforeEach(async function () {
    const Boostermatic = await hre.ethers.getContractFactory("Boostermatic");
    [address1] = await ethers.getSigners();
    booster = await Boostermatic.deploy();
    paymentDeployed = await booster.deployed();

    console.log("Testing, PaymentDeloyed address: ", paymentDeployed.address);
   // this.timeout(10000);
  });

  it("1. Deposit successfully.", async function () {
   
    let result = await paymentDeployed.transfer({ value: 1});
    assert.isOk(result, "Fund Failed.");

    

  });
  
});