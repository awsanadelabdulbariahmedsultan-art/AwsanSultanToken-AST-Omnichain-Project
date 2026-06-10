// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AwsanSultanToken is ERC20, Ownable {
    // تحديد الإجمالي المعروض بدقة ليكون مطابقاً لعيد ميلادك: 9,041,993,000 عملة AST
    constructor() ERC20("AWSAN SULTAN TOKEN", "AST") Ownable(msg.sender) {
        _mint(msg.sender, 9041993000 * 10 ** decimals());
    }

    // دالة تتيح لك حرق جزء من العملات مستقبلاً لتقليل العرض وزيادة القيمة
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
