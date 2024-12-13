import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MarketplaceModule = buildModule("MarketplaceDeployment", (m) => {

  // Deploy the contract
  const marketplace = m.contract("Marketplace", [], {
    // Optional: Additional deployment parameters
  });

  // Return the deployed contract for potential further use
  return { marketplace };
});

export default MarketplaceModule;
