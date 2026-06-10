// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title Awsan Sultan Ecosystem (AST & ASA)
 * @author Eng. Awsan Adel Abdulbari Ahmed Sultan
 * @notice Intellectual Property & Software Rights Registered - ID 01010305468
 */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";

contract AwsanSultanUniversal is ERC20, ERC20Permit, ERC721Enumerable, ERC2981, Ownable {
    
    // بيانات الملكية الثابتة
    string public constant CREATOR = "Eng. Awsan Adel Abdulbari Ahmed Sultan";
    string public constant CONTACT = "YEMEN | +967777852433 | awsan.sultan@gmail.com";
    
    // القيم العددية السيادية
    uint256 public constant AST_SUPPLY = 9041993000 * 10**18;
    uint256 public constant MAX_NFT_SUPPLY = 45000;
    
    bool public paused = false; // لمسة التجميد
    string private _baseTokenURI;

    constructor() 
        ERC20("Awsan Sultan Token", "AST") 
        ERC20Permit("Awsan Sultan Token")
        ERC721("Awsan Sultan Art", "ASA")
        Ownable(0x79fd74ae9cd16838fd2bf61274cda5c37da1f714) 
    {
        _mint(owner(), AST_SUPPLY);
        _setDefaultRoyalty(owner(), 1000); // 10% أرباح ملكية للمهندس أوسان
    }

    // دالة تفعيل التجميد للقفل في حالات الطوارئ
    function setPaused(bool _state) external onlyOwner {
        paused = _state;
    }

    // تعديل وظيفة التحويل لتشمل شرط التوقف (تجميد العمليات)
    function _update(address to, uint256 tokenId, address auth) internal override(ERC721Enumerable) returns (address) {
        require(!paused, "System is paused for security maintenance");
        return super._update(to, tokenId, auth);
    }

    // دوال الربط الفني والقانوني
    function setBaseURI(string memory baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function contractURI() public pure returns (string memory) {
        return "https://github.com/awsanadelabdulbariahmedsultan-art/AwsanSultanToken-AST-Omnichain-Project";
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721Enumerable, ERC2981) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
