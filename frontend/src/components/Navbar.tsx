"use client";

import { MoreHorizontal } from "lucide-react";
import { ConnectWalletButton } from "./WalletButton";
import { Providers } from "./Providers";

const Navbar = () => {
  return (
    <header className=" p-4 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          CONTRAC <span className="font-normal inline-block -translate-x-1">TIFY</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <a
            href="#"
            className="text-black font-medium hover:text-purple-500"
          >
            New contract
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-purple-500"
          >
            My contracts
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-purple-500"
          >
            My Arbitrations
          </a>
        </nav>

        {/* Wallet Button and Menu */}
        <div className="flex items-center space-x-4">
          {/* <button className="px-4 py-2 border-2 border-black text-black rounded-lg hover:bg-gray-200">
            Connect Wallet
          </button> */}
          <ConnectWalletButton/>
          <button className="p-2">
            <MoreHorizontal className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </header>

  );
};

export default Navbar;
