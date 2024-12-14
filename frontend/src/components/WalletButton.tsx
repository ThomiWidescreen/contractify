"use client";

import { useState, useEffect } from "react";
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import { ChevronRight, Copy, Power, Wallet } from "lucide-react";
import { ethers } from "ethers";
import { addToast } from "@/store/toastStore";

const WalletIcons: Record<string, string> = {
  MetaMask: "/icons/metamask.svg",
};

export const WalletOptions = () => {
  const { connectors, connect } = useConnect();

  return (
    <div className="grid gap-4">
      <p className="text-gray-600 text-sm">
        Choose your preferred wallet to connect.
      </p>
      <div className="grid gap-2">
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            className={`w-full flex items-center justify-between px-4 py-3 border rounded-lg transition-colors ${
              true
                ? "hover:bg-gray-100 cursor-pointer"
                : "cursor-not-allowed bg-gray-50 text-gray-400"
            }`}
          >
            <div className="flex items-center gap-2">
              {WalletIcons[connector.name] && (
                <img
                  src={WalletIcons[connector.name]}
                  className="h-10 w-10 text-gray-700"
                />
              )}
              <span className="text-sm text-black font-medium">
                {connector.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export const Account = () => {
  const { address, connector } = useAccount();
  const result = useBalance({
    address
  })
  const { disconnect } = useDisconnect();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [ethBalance, setEthBalance] = useState<string | null>(null);

  // Hardcoded USDT and USDC balances
  const usdtBalance = "1,000.00";
  const usdcBalance = "500.00";


  const copyAddress = () => {
    navigator.clipboard.writeText(address || "");
    addToast("Address copied to clipboard");
  };

  return (
    <div className="relative">
      {/* Account Dropdown Trigger */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 transition"
      >
        <Wallet className="h-5 w-5 text-gray-700" />
        <span className="text-sm font-medium text-black">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
        <ChevronRight className="h-4 w-4 text-gray-500" />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <div className="px-4 py-2 text-sm text-gray-600 border-b">
            {connector?.name || "Wallet"}
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 transition"
          >
            <Copy className="h-4 w-4 text-gray-700" />
            <span className="text-sm text-gray-900">View Balances</span>
          </button>
          <button
            onClick={copyAddress}
            className="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 transition"
          >
            <Copy className="h-4 w-4 text-gray-700" />
            <span className="text-sm text-gray-900">Copy Address</span>
          </button>
          <button
            onClick={() => {
              disconnect();
              setDropdownOpen(false);
            }}
            className="flex items-center w-full gap-2 px-4 py-2 text-red-600 hover:bg-red-100 transition"
          >
            <Power className="h-4 w-4" />
            <span className="text-sm">Disconnect</span>
          </button>
        </div>
      )}

      {/* Modal for Balances */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Wallet Balances
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">ETH:</span>
                <span className="text-gray-900">
                  {result.data?.value ? ethers.formatEther(result.data?.value) : "Loading..."}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">USDT:</span>
                <span className="text-gray-900">{usdtBalance}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">USDC:</span>
                <span className="text-gray-900">{usdcBalance}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ConnectWalletButton = () => {
  const { isConnected } = useAccount();
  const [dialogOpen, setDialogOpen] = useState(false);

  if (isConnected) return <Account />;

  return (
    <div>
      <button
        onClick={() => setDialogOpen(true)}
        className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 flex items-center gap-2"
      >
        <Wallet className="h-5 w-5 text-gray-700" />
        <span className="text-sm text-black font-medium">Connect Wallet</span>
      </button>

      {/* Wallet Selection Dialog */}
      {dialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setDialogOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Connect Wallet
            </h2>
            <WalletOptions />
          </div>
        </div>
      )}
    </div>
  );
};
