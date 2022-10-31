// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Booster {
  address owner;
  mapping(address => uint256) public accountBalances;

  event PaymentAdded(address user, uint256 amount, uint256 timestamp);

modifier onlyOwner(){
    require(msg.sender!=owner,"only owner can call this");
    _;
}
  constructor() {
    owner = msg.sender;
  }

  //  function deposit() external payable {
  //   }

  function fund() external payable{
    require (msg.value > 0, "Empty transact");
    //payable(address(this)).transfer(msg.value);
    accountBalances[msg.sender]=msg.value;
    emit PaymentAdded(msg.sender, msg.value, block.timestamp);

  }
  function withdraw() public payable  {
    payable(owner).transfer(address(this).balance);
  }

  function balance() public view returns (uint256){
    return payable(address(this)).balance;
  }
}