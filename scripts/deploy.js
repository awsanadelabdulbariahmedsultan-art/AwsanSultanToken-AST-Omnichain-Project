import { ethers } from "ethers";
import hre from "hardhat";

async function main() {
  console.log("🚀 Initializing Awsan Sultan Ecosystem Deployment...");

  const TokenArtifact = await hre.artifacts.readArtifact("contracts/AwsanSultanToken.sol:AwsanSultanToken");
  const ArtArtifact = await hre.artifacts.readArtifact("contracts/AwsanSultanArt.sol:AwsanSultanArt");

  const networkUrl = hre.network.config.url;
  const privateKey = hre.network.config.accounts;

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
