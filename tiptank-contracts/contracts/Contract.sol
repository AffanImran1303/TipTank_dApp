// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract TipTank {
    struct TippingMemo{
        string name;
        string message;
        address sender;
        uint256 time;
    }
    uint256 totalTips;
    address payable owner;

    event Tipped(
        string name,
        string message,
        address sender,
        uint256 time
    );

    constructor() {
        owner=payable(msg.sender);
    }

    function giveTip(string memory _name, string memory _message)public payable{
        require(msg.value>0,"Insufficient funds");
        totalTips++;
        payable(owner).transfer(msg.value);
        emit Tipped(_name,_message,msg.sender,block.timestamp);
    }

    function getTotalTips()public view returns(uint256){
        return totalTips;
    }
}