const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("isContractmatic", function () {
  let paymentDeployed;
  let address1;
  let booster;

  beforeEach(async function () {
    const Booster = await hre.ethers.getContractFactory("Booster");
    [address1] = await ethers.getSigners();
    booster = await Booster.deploy();
    paymentDeployed = await booster.deployed();

    console.log("Testing, PaymentDeloyed address: ", paymentDeployed.address)
  });

  it("1. Deposit successfully.", async function () {
    let result = await paymentDeployed.fund({ value: 1});
    assert.isOk(result, "Fund Failed.");

  });
  // it("it should test methods",function(){
  //   this.timeout(0);
  // });
});