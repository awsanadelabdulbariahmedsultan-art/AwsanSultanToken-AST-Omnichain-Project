import { ethers } from "ethers";
import hre from "hardhat";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  console.log("🚀 Initializing Awsan Sultan Ecosystem Deployment...");

  # جلب ملفات التجميع الخاصة بالعقود بدقة
  const TokenArtifact = await hre.artifacts.readArtifact("contracts/AwsanSultanToken.sol:AwsanSultanToken");
  const ArtArtifact = await hre.artifacts.readArtifact("contracts/AwsanSultanArt.sol:AwsanSultanArt");

  # قراءة الروابط والمفاتيح مباشرة من ملف .env لضمان الاستقرار التام
  const networkUrl = process.env.BASE_SEPOLIA_RPC_URL || "https://base.org";
  const privateKey = process.env.PRIVATE_KEY;

  if (!privateKey) {
    throw new Error("❌ PRIVATE_KEY is missing in your .env file!");
  }

  const provider = new ethers.JsonRpcProvider(networkUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  console.log("🔶 Deploying AST Token...");
  const TokenFactory = new ethers.ContractFactory(TokenArtifact.abi, TokenArtifact.bytecode, wallet);
  const token = await TokenFactory.deploy();
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log(`✅ AST Token Deployed at: ${tokenAddress}`);

  console.log("🎨 Deploying ASA Art...");
  const ArtFactory = new ethers.ContractFactory(ArtArtifact.abi, ArtArtifact.bytecode, wallet);
  const art = await ArtFactory.deploy();
  await art.waitForDeployment();
  const artAddress = await art.getAddress();
  console.log(`✅ ASA Art Deployed at: ${artAddress}`);
}

main().catch((error) => {
  console.error("❌ Deployment failed:");
  console.error(error);
  process.exitCode = 1;
});
