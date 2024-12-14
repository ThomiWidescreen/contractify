"use client";

import Navbar from "@/components/Navbar";
import { ArrowBigRightDash, PlaneIcon, SendHorizonalIcon } from "lucide-react";
import React, { useState } from "react";

const data = {
  contractName: "The best contract ever",
  contractType: "Freelancing",
  startDate: "December 12th",
  endDate: "January 12th",
  contractorWallet: "0x5273E34as84asd48as8vad56D5GHC5B686E93f7a5",
  contracteeWallet: "0x527d5fa5adf49savbekaas86sa53sad54aslsdE5ads4a",
  arbitrators: [
    "0xAB5801a7D398351b8bE11C439e05C5B3259aec9B",
    "0xAbC1234567890Def1234567890aBc1234567890D",
    "0xF1a2B3c4D5E6F7890aBc1234567890Def1234567",
    "0x12345abc67890Def1234567890aBc1234567890E",
  ],
  amount: "1,234,567.89",
  feeIncludedAmount: "1,234,580.40",
  currency: "USDC",
};

const messages = [
  {
    sender: "Payer",
    address: "0xAB5801a7D398351b8bE11C439e05C5B3259aec9B",
    message: "Hi Alex, thanks for taking the time to chat. I’m looking for someone to design a logo for my new startup. Are you available for this project?",
  },
  {
    sender: "Contractor",
    address: "0x5ad5asd5af51af5sfv564c5asd45c454ac5dv45s4v85s",
    message: "Hi! Thanks for reaching out. Yes, I’m available. Could you tell me a bit more about the style you’re looking for and your timeline?",
  },
  {
    sender: "Payer",
    address: "0xAB5801a7D398351b8bE11C439e05C5B3259aec9B",
    message: "Sure. I think the introduction could be more engaging, and the third section needs a bit more detail about the statistics.",
  },
  {
    sender: "Payer",
    address: "0xAB5801a7D398351b8bE11C439e05C5B3259aec9B",
    message: "Sure. I think the introduction could be more engaging, and the third section needs a bit more detail about the statistics.",
  },
  {
    sender: "Contractor",
    address: "0x5ad5asd5af51af5sfv564c5asd45c454ac5dv45s4v85s",
    message: "Hi! Thanks for reaching out. Yes, I’m available. Could you tell me a bit more about the style you’re looking for and your timeline?",
  },
];

const ContractDetailPage = () => {
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          sender: "Contractor",
          address: "0x5ad5asd5af51af5sfv564c5asd45c454ac5dv45s4v85s",
          message: newMessage,
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="flex w-3/4 mx-auto h-screen flex-col rounded-xl lg:flex-row lg:space-x-6 p-6  min-h-screen">
      {/* Left Column: Contract Details */}
      <div className="flex-1 bg-white bg-opacity-25 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-purple-600 mb-4">{data.contractName}</h1>

        <div className="text-gray-700 mb-4">
          <span className="font-medium">Start and End of the Contract: </span>
          {data.startDate} to {data.endDate}
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{data.contractType}</h2>
          <p className="text-gray-700 mt-2">
            This agreement is entered into on [Date] by and between Freelancer and Client. The Freelancer agrees to
            perform the specified services as detailed in the attached project description. Payment details and other
            conditions are outlined below.
          </p>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contractor Wallet (Will Send the Payment)
            </label>
            <input
              type="text"
              value={data.contractorWallet}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-100 text-gray-900"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contractee Wallet (Will Receive the Payment)
            </label>
            <input
              type="text"
              value={data.contracteeWallet}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-100 text-gray-900"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Arbitrators</label>
          <div className="space-y-1">
            {data.arbitrators.map((arbitrator, index) => (
              <div key={index} className="text-gray-700">
                {arbitrator}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Total Contract Amount</label>
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-900">
            {data.amount} <span className="text-sm text-gray-500">{data.currency}</span>
          </div>
          <div className="text-sm text-gray-500">${data.feeIncludedAmount}</div>
        </div>
      </div>

      {/* Right Column: Chat */}
      <div className="flex-1 bg-[#ecebff] p-6 rounded-lg shadow-md flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {chatMessages.map((message, index) => (
            <div>
              <span className="text-sm whitespace-nowrap text-gray-500">
                <span className="font-semibold">{message.sender}</span> <span className="text-[10px]">({message.address})</span>
              </span>
              <div
              key={index}
              className={`p-4 rounded-lg ${
                message.sender === "Contractor" ? "bg-[#c7e5fd] self-end" : "bg-gray-100 self-start"
              }`}
            >
              
              <p className="text-gray-700 mt-1">{message.message}</p>
            </div>
            </div>
           
          ))}
        </div>

        <div className="flex items-center mt-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write your response"
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 p-3 bg-gradient-to-r hover:scale-110 transition-all from-[#c93ac3] to-[#7749ba] text-white rounded-full -rotate-[45deg] "
          >
            <SendHorizonalIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    </>
  )
};

export default ContractDetailPage;
