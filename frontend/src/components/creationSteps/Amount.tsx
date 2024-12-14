"use client";

import { useState } from "react";
import { goToNextStep } from "@/store/stepStore";
import { ChevronDown } from "lucide-react";

const AmountStep = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDC"); // Default currency
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
  const balance = 235456789.22; // Hardcoded balance for now

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

  return (
    <section className="mt-6 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700">You will send upon contract completion</span>
        <span className="text-gray-500 text-sm">
          Balance: <a className="text-purple-500 cursor-pointer">{balance.toLocaleString()}</a>
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
        onClick={goToNextStep}
        className="mt-6 text-2xl inline-block bg-gradient-to-r border-2 border-gray-100 text-gray-100 from-[#c93ac3] to-[#7749ba] px-6 py-3 rounded-2xl"
      >
        DONE!
      </button>
    </section>
  );
};

export default AmountStep;
