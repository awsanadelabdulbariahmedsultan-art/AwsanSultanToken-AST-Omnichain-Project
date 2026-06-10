const hre = require("hardhat");

async main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("جاري نشر العقود باستخدام المحفظة:", deployer.address);

  // 1. نشر عملة AWSAN SULTAN TOKEN (AST)
  console.log("جاري نشر عملة AST الرقمية البالغ عددها 9041993000...");
  const Token = await hre.ethers.getContractFactory("AwsanSultanToken");
  const token = await Token.deploy();
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log("تم نشر العملة بنجاح! عنوان العقد هو:", tokenAddress);

  // 2. نشر الـ NFT باسم ASA AWSAN SULTAN ART
  console.log("جاري نشر عقد الـ NFT (ASA)...");
  const NFT = await hre.ethers.getContractFactory("AwsanSultanArt");
  const nft = await NFT.deploy();
  await nft.waitForDeployment();
  const nftAddress = await nft.getAddress();
  console.log("تم نشر الـ NFT بنجاح! عنوان العقد هو:", nftAddress);

  console.log("\n--- ملخص النشر ---");
  console.log(`عقد العملة (AST): ${tokenAddress}`);
  console.log(`عقد الـ NFT (ASA): ${nftAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
