import { ethers } from "ethers";
import hre from "hardhat";

async function main() {
  console.log("🚀 جاري البدء في نشر منظومة أوسان سلطان الرقمية الحاسمة...");

  # تحديد المسارات الدقيقة لمنع تضارب النسخ القديمة والجديدة
  const TokenArtifact = await hre.artifacts.readArtifact("contracts/AwsanSultanToken.sol:AwsanSultanToken");
  const ArtArtifact = await hre.artifacts.readArtifact("contracts/AwsanSultanArt.sol:AwsanSultanArt");

  # استخراج إعدادات الشبكة والمحفظة المشفرة من ملف .env
  const networkUrl = hre.network.config.url;
  const privateKey = hre.network.config.accounts[0];

  const provider = new ethers.JsonRpcProvider(networkUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  # 1. نشر عقد عملة Awsan Sultan Token (AST)
  console.log("🔶 جاري بث عقد عملة AST على شبكة Base...");
  const TokenFactory = new ethers.ContractFactory(TokenArtifact.abi, TokenArtifact.bytecode, wallet);
  const token = await TokenFactory.deploy();
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log(`✅ تم نشر عملة (AST) بنجاح على العنوان: ${tokenAddress}`);

  # 2. نشر عقد الفن الرقمي Awsan Sultan Art (ASA)
  console.log("🎨 جاري بث عقد فن ASA على شبكة Base...");
  const ArtFactory = new ethers.ContractFactory(ArtArtifact.abi, ArtArtifact.bytecode, wallet);
  const art = await ArtFactory.deploy();
  await art.waitForDeployment();
  const artAddress = await art.getAddress();
  console.log(`✅ تم نشر فن (ASA) بنجاح على العنوان: ${artAddress}`);
}

main().catch((error) => {
  console.error("❌ حدث خطأ أثناء عملية النشر:");
  console.error(error);
  process.exitCode = 1;
});
