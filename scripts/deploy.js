import hre from "hardhat";

async function main() {
  console.log("🚀 جاري البدء في نشر منظومة أوسان سلطان الرقمية...");

  // استخراج مكتبة ethers البرمجية من داخل بيئة التشغيل الحالية
  const { ethers } = hre;

  // نشر عقد عملة Awsan Sultan Token (AST)
  const Token = await ethers.getContractFactory("AwsanSultanToken");
  const token = await Token.deploy();
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log(`✅ تم نشر عملة (AST) بنجاح على العنوان: ${tokenAddress}`);

  // نشر عقد الفن الرقمي Awsan Sultan Art (ASA)
  const Art = await ethers.getContractFactory("AwsanSultanArt");
  const art = await Art.deploy();
  await art.waitForDeployment();
  const artAddress = await art.getAddress();
  console.log(`✅ تم نشر فن (ASA) بنجاح على العنوان: ${artAddress}`);
}

main().catch((error) => {
  console.error("❌ حدث خطأ أثناء عملية النشر:");
  console.error(error);
  process.exitCode = 1;
});
