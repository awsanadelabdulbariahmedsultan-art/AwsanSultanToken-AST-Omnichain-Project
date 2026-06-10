import { ethers } from "ethers";
import hre from "hardhat";

async function main() {
  console.log("🚀 جاري البدء في نشر منظومة أوسان سلطان الرقمية...");

  // جلب ملفات التجميع (Artifacts) الخاصة بالعقود من بيئة Hardhat
  const TokenArtifact = await hre.artifacts.readArtifact("AwsanSultanToken");
  const ArtArtifact = await hre.artifacts.readArtifact("AwsanSultanArt");

  // تجهيز المزود والمحفظة من المتغيرات البيئية السرية المتواجدة في .env
  const provider = new ethers.JsonRpcProvider(hre.network.config.url);
  const wallet = new ethers.Wallet(hre.network.config.accounts[0], provider);

  // 1. نشر عقد عملة Awsan Sultan Token (AST)
  console.log("🔶 جاري بث عقد عملة AST...");
  const TokenFactory = new ethers.ContractFactory(TokenArtifact.abi, TokenArtifact.bytecode, wallet);
  const token = await TokenFactory.deploy();
  await token.waitForDeployment();
  console.log(`✅ تم نشر عملة (AST) بنجاح على العنوان: ${await token.getAddress()}`);

  // 2. نشر عقد الفن الرقمي Awsan Sultan Art (ASA)
  console.log("🎨 جاري بث عقد فن ASA...");
  const ArtFactory = new ethers.ContractFactory(ArtArtifact.abi, ArtArtifact.bytecode, wallet);
  const art = await ArtFactory.deploy();
  await art.waitForDeployment();
  console.log(`✅ تم نشر فن (ASA) بنجاح على العنوان: ${await art.getAddress()}`);
}

main().catch((error) => {
  console.error("❌ حدث خطأ أثناء عملية النشر:");
  console.error(error);
  process.exitCode = 1;
});
