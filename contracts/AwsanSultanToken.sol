// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AwsanSultanToken is ERC20, ERC20Permit, Ownable {
    
    string public constant CREATOR = "Eng. Awsan Adel Abdulbari Ahmed Sultan";
    string public constant CONTACT = "YEMEN | +967777852433 | awsan.sultan@gmail.com";
    uint256 public constant AST_SUPPLY = 9041993000 * 10**18;
    bool public paused = false;

    constructor() 
        ERC20("Awsan Sultan Token", "AST") 
        ERC20Permit("Awsan Sultan Token")
        Ownable(0x79Fd74aE9cD16838fD2bf61274CDa5c37dA1f714)     
    {
        _mint(owner(), AST_SUPPLY);
    }

    function setPaused(bool _state) external onlyOwner {
        paused = _state;
    }

    function _update(address from, address to, uint256 value) internal override(ERC20) {
        require(!paused, "System is paused for security maintenance");
        super._update(from, to, value);
    }
}
