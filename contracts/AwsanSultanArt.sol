// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";

contract AwsanSultanArt is ERC721Enumerable, ERC2981, Ownable {
    
    string public constant CREATOR = "Eng. Awsan Adel Abdulbari Ahmed Sultan";
    string public constant CONTACT = "YEMEN | +967777852433 | awsan.sultan@gmail.com";
    uint256 public constant MAX_NFT_SUPPLY = 45000;
    
    bool public paused = false; 
    string private _baseTokenURI;

    constructor() 
        ERC721("Awsan Sultan Art", "ASA")
        Ownable(msg.sender) 
    {
        _setDefaultRoyalty(msg.sender, 1000); // 10% عوائد ثابتة للمهندس أوسان تجريبياً
    }

    function setPaused(bool _state) external onlyOwner {
        paused = _state;
    }

    function _update(address to, uint256 tokenId, address auth) internal override(ERC721Enumerable) returns (address) {
        require(!paused, "System is paused for security maintenance");
        return super._update(to, tokenId, auth);
    }

    function setBaseURI(string memory baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function contractURI() public pure returns (string memory) {
        return "https://github.com";
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721Enumerable, ERC2981) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
