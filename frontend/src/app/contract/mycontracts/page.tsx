"use client";

import { useState } from "react";

const contracts = [
  {
    id: 1,
    title: "The best contract ever",
    status: "Initiated",
    role: "Payer",
    amount: "1,125,258.23",
    currency: "USDC",
  },
  {
    id: 2,
    title: "Freelance Service Agreement",
    status: "Accepted",
    role: "Payer",
    amount: "1,125,258.23",
    currency: "USDC",
  },
  {
    id: 3,
    title: "Independent Contractor Agreement",
    status: "Completed",
    role: "Payer",
    amount: "1,125,258.23",
    currency: "USDC",
  },
  {
    id: 4,
    title: "Creative Collaboration Contract",
    status: "Canceled",
    role: "Payer",
    amount: "1,125,258.23",
    currency: "USDC",
  },
  {
    id: 5,
    title: "Project-Based Work Agreement",
    status: "Dispute",
    role: "Payer",
    amount: "1,125,258.23",
    currency: "USDC",
  },
];

const statusColors: Record<string, string> = {
  Initiated: "text-blue-600 bg-blue-100",
  Accepted: "text-green-600 bg-green-100",
  Completed: "text-purple-600 bg-purple-100",
  Canceled: "text-red-600 bg-red-100",
  Dispute: "text-yellow-600 bg-yellow-100",
};

const MyContracts = () => {
  const [selectedContract, setSelectedContract] = useState(null);

  const handleViewContract = (contractId: number) => {
    console.log("Viewing contract:", contractId);
    // Navigate to contract details page
  };

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">My contracts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contracts.map((contract) => (
          <div
            key={contract.id}
            className="bg-white rounded-lg shadow-lg p-4 border relative"
          >
            {/* Role */}
            <div className="absolute top-4 left-4 text-sm text-gray-600">
              {contract.role}
            </div>

            {/* Status */}
            <div
              className={`absolute top-4 right-4 px-2 py-1 rounded-full text-sm font-medium ${
                statusColors[contract.status]
              }`}
            >
              {contract.status}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {contract.title}
            </h2>

            {/* Amount */}
            <div className="flex items-center text-gray-700 mb-4">
              <img
                src="/icons/usdc.svg"
                alt={contract.currency}
                className="w-5 h-5 mr-2"
              />
              <span className="text-lg font-bold">{contract.amount}</span>
            </div>

            {/* View Button */}
            <button
              onClick={() => handleViewContract(contract.id)}
              className="w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyContracts;
