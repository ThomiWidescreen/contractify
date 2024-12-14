import { createConfig, http } from "wagmi";
import { metaMask, walletConnect } from "wagmi/connectors";
import { mainnet, sepolia, optimismGoerli, baseGoerli } from "wagmi/chains";
import { supersimL2A, supersimL2B } from "@eth-optimism/viem";
import { createClient } from "viem";

// Determine environment
const isProduction = process.env.NODE_ENV === "production";

// Define chains
const prodChains = [optimismGoerli, baseGoerli, sepolia];
const devChains = [supersimL2A, supersimL2B];
const chains = isProduction ? prodChains : devChains;

// Define transports for HTTP providers
// const transports = Object.fromEntries(
//     [supersimL2A, supersimL2B].map((chain) => [chain.id, http(chain.rpcUrls.default.http[0])])
// );

// Configure connectors
const connectors = [
  metaMask(),
//   walletConnect({
//     projectId: process.env.WALLET_CONNECT_PROJECT_ID || "",
//   }),
//   new BurnerConnector({ chains, options: { defaultChainId: chains[0].id } }),
];

// Create a Viem client for each chain
const client = ({ chain }: { chain?: typeof chains[number] }) => {
  return createClient({
    chain,
    transport: http(chain?.rpcUrls.default.http[0]),
  });
};

// Final Wagmi Configuration
export const wagmiConfig = () => {return createConfig({
    chains : [supersimL2A, supersimL2B],
connectors,
transports: {
    [supersimL2A.id]: http('http://127.0.0.1:9545'),
    [supersimL2B.id]: http('http://127.0.0.1:9546'),
  }
})}
