"use client";

import { useState, useEffect } from "react";
import { http, useAccount, useBalance } from "wagmi";
import { createPublicClient, parseAbiItem } from "viem";
import { goToNextStep } from "@/store/stepStore";
import { ChevronDown } from "lucide-react";
import { updateFormData } from "@/store/newContractStore";
import { addToast } from "@/store/toastStore";

const transports: Record<number, any> = {
  901: http('http://127.0.0.1:9545'),
  902: http('http://127.0.0.1:9546'),
};

const AmountStep = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDC"); // Default currency
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { address, chainId, chain } = useAccount(); // Get chainId from useAccount
  const [balance, setBalance] = useState("Fetching...");

  const tokenAddresses: Record<string, `0x${string}`> = {
    USDT: "0xD45B00b2DFfBada2FA18144cbB7d74eFD2e18acc",
    USDC: "0xbAe99e9bdD444a4787dB45Beacf44715681053D1",
  };

  useEffect(() => {
    if (address && chainId) {
      fetchBalance();
    }
  }, [address, chainId, currency]);

  const fetchBalance = async () => {
    try {
      if (!chain?.id || !address) return;
      const client = createPublicClient({ chain, transport: transports[chain?.id] }); // Initialize public client with chainId
      const tokenAddress = currency === "ETH" ? null : tokenAddresses[currency];

      if (currency === "ETH") {
        const balance = await client.getBalance({ address });
        setBalance(balance.toString());
      } else if (tokenAddress) {
        const logs = await client.getLogs({
          address: tokenAddress,
          event: parseAbiItem(
            "event Transfer(address indexed from, address indexed to, uint256 value)"
          ),
        });

        const filteredLogs = logs.filter(
          (log) => log.args?.to?.toLowerCase() === address?.toLowerCase()
        );

        const totalBalance = filteredLogs.reduce(
          (acc, log) => acc + BigInt(log.args?.value!),
          BigInt(0)
        );
        setBalance(totalBalance.toString());
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      setBalance("Error");
    }
  };

  const getCurrentBalance = () => {
    return balance === "Fetching..." || balance === "Error"
      ? balance
      : `${(Number(balance) / 1e18).toFixed(4)}`; // Format balance
  };

  const currencies = [
    { label: "ETH", icon: "/icons/eth.svg" },
    { label: "USDT", icon: "/icons/usdt.svg" },
    { label: "USDC", icon: "/icons/usdc.svg" },
  ];

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown state
  };

  const handleNextStep = () => {
    if (!amount.trim() || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      addToast("Enter a valid amount");
      return;
    }

    if (parseFloat(amount) > parseFloat(getCurrentBalance())) {
      addToast("Insufficient funds for this operation");
      return;
    }

    updateFormData({ amount, currency });
    goToNextStep();
  };

  return (
    <section className="mt-6 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700">You will send upon contract completion</span>
        <span className="text-gray-500 text-sm">
          Chain ID: <span className="font-bold">{chainId || "Unknown"}</span>
        </span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700">Your balance:</span>
        <span className="text-gray-500 text-sm">
          {currency} Balance: <a className="text-purple-500 cursor-pointer">{getCurrentBalance()}</a>
        </span>
      </div>

      <div className="relative flex items-center border rounded-md p-3">
        {/* Amount Input */}
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          className="flex-1 text-2xl font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Currency Selector */}
        <div className="relative">
          <button
            className="flex items-center gap-2 text-gray-900 bg-white px-4 py-2 border-l"
            onClick={toggleDropdown}
          >
            {/* Currency Icon */}
            <img src={currencies.find((c) => c.label === currency)?.icon} alt={currency} className="w-6 h-6" />
            {currency}
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md w-28 z-10">
              {currencies.map((cur) => (
                <button
                  key={cur.label}
                  className="flex items-center gap-2 w-full px-4 py-2 text-gray-900 hover:bg-gray-100"
                  onClick={() => handleCurrencyChange(cur.label)}
                >
                  <img src={cur.icon} alt={cur.label} className="w-5 h-5" />
                  {cur.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-2 text-gray-500 text-sm">
        {amount ? `$${(parseFloat(amount) * 1.01).toLocaleString()}` : "$0.00"}
      </div>

      {/* Done Button */}
      <button
        onClick={handleNextStep}
        className="mt-6 text-2xl inline-block bg-gradient-to-r border-2 border-gray-100 text-gray-100 from-[#c93ac3] to-[#7749ba] px-6 py-3 rounded-2xl"
      >
        DONE!
      </button>
    </section>
  );
};

export default AmountStep;
