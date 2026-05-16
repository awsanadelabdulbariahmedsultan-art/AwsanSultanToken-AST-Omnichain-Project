// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Awsan Sultan Token (AST)
 * @dev Where Engineering Excellence Meets Decentralized Innovation.
 * Exclusive Property of Eng. Awsan Adel Abdulbari Ahmed Sultan.
 */
contract AwsanSultanToken is ERC20, ERC20Permit, Ownable {
    
    // توثيق الملكية الفكرية الثابتة غير القابلة للتعديل في البلوكشين
    string public constant CREATOR = "Eng. Awsan Adel Abdulbari Ahmed Sultan";
    string public constant CREATOR_ID = "ID 01010305468";
    string public constant LOCATION = "Yemen";
    
    constructor() 
        ERC20("Awsan Sultan Token", "AST") 
        ERC20Permit("Awsan Sultan Token") 
        Ownable(msg.sender) 
    {
        // سك المعروض الإجمالي التكريمي: 9,041,993,000 توكن مع 18 خانة عشرية
        _mint(msg.sender, 9041993000 * 10 ** decimals());
    }
}
