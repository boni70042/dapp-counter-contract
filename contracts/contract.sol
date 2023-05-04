// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Counter {
    uint public count;

     function get() public view returns (uint) {
        return count;
    }

    function inc() public payable {
        require(msg.value == 0.1 ether, "Not enough fund");
        count += 1;
    }

    function dec() public payable {
        require(msg.value == 0.1 ether, "Not enough fund");
        count -= 1;
    }
}
