import { ethers } from "ethers";
import hre from "hardhat";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  console.log("🚀 Initializing Deployment via Secure Ethereum Sepolia Alchemy Node...");

  const TokenArtifact = await hre.artifacts.readArtifact("contracts/AwsanSultanToken.sol:AwsanSultanToken");
  const ArtArtifact = await hre.artifacts.readArtifact("contracts/AwsanSultanArt.sol:AwsanSultanArt");

  const networkUrl = process.env.ETH_SEPOLIA_RPC_URL;
  const privateKey = process.env.PRIVATE_KEY;

  if (!networkUrl) {
    throw new Error("❌ ETH_SEPOLIA_RPC_URL is missing in your .env file!");
  }
  if (!privateKey) {
    throw new Error("❌ PRIVATE_KEY is missing in your .env file!");
  }

  const provider = new ethers.JsonRpcProvider(networkUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  console.log("🔶 Deploying AST Token to Ethereum Sepolia Blockchain...");
  const TokenFactory = new ethers.ContractFactory(TokenArtifact.abi, TokenArtifact.bytecode, wallet);
  const token = await TokenFactory.deploy();
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log(`✅ AST Token Deployed successfully at: ${tokenAddress}`);

  console.log("🎨 Deploying ASA Art to Ethereum Sepolia Blockchain...");
  const ArtFactory = new ethers.ContractFactory(ArtArtifact.abi, ArtArtifact.bytecode, wallet);
  const art = await ArtFactory.deploy();
  await art.waitForDeployment();
  const artAddress = await art.getAddress();
  console.log(`✅ ASA Art Deployed successfully at: ${artAddress}`);
}

main().catch((error) => {
  console.error("❌ Deployment failed:");
  console.error(error);
  process.exitCode = 1;
});
