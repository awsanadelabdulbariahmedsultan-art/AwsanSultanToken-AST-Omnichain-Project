// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title Awsan Sultan Ecosystem (AST & NFT)
 * @author Eng. Awsan Adel Abdulbari Ahmed Sultan
 * @notice Intellectual Property & Software Rights Registered
 * @dev Identity: ID.01010305468 | YEMEN | Phone: 00967777852433
 * @dev Email: awsan.sultan@gmail.com
 * @dev GitHub: https://github.com
 */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract AwsanSultanUniversal is ERC20, ERC20Permit, ERC721Enumerable {
    
    // --- توثيق الملكية الفكرية السيادي ---
    string public constant CREATOR = "Eng. Awsan Adel Abdulbari Ahmed Sultan";
    string public constant LICENSE_ID = "ID 01010305468";
    string public constant CONTACT_INFO = "YEMEN | +967777852433 | awsan.sultan@gmail.com";

    // --- المعايير العددية المتفق عليها ---
    uint256 public constant AST_SUPPLY = 9041993000 * 10**18; // تاريخ الميلاد
    uint256 public constant MAX_NFT_SUPPLY = 45000; // عدد قطع الفن

    // العنوان السيادي للمهندس أوسان (Rabby Wallet)
    address public immutable OWNER_WALLET = 0x79fd74ae9cd16838fd2bf61274cda5c37da1f714;

    constructor() 
        ERC20("Awsan Sultan Token", "AST") 
        ERC20Permit("Awsan Sultan Token")
        ERC721("Awsan Sultan Art", "ASA")
    {
        _mint(OWNER_WALLET, AST_SUPPLY);
    }

    // إثبات الملكية برمجياً للجهات الخارجية
    function verifyOwnership() external pure returns (string memory, string memory) {
        return (CREATOR, LICENSE_ID);
    }
}
