"use client";

import { CheckCircle } from "lucide-react";

const ConfirmationStep = () => {
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

  return (
    <section className="mt-6 p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Contract Title */}
      <h1 className="text-3xl font-bold text-purple-600">{data.contractName}</h1>

      {/* Contract Dates */}
      <div className="text-gray-700">
        <span className="font-medium">{"Start and End of the Contract:"}</span>{" "}
        {data.startDate} to {data.endDate}
      </div>

      {/* Contract Type */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">{data.contractType}</h2>
        <p className="text-gray-700 mt-2">
          {"This agreement is entered into on [Date] by and between [Freelancer's Full Name] ('Freelancer') and [Client's Full Name/Company Name] ('Client'). The Freelancer agrees to perform [specific service, e.g., 'web design services'] for the Client, as detailed in the attached project description. The Client agrees to pay the Freelancer a total fee of [amount, e.g., '$1,000'], payable [payment terms, e.g., '100% upon project completion'] to the following wallet: [Freelancer's crypto wallet address (It will be completed automatically)]."}
        </p>
      </div>

      {/* Wallets */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            {"Contractor Wallet (Will Send the Payment)"}
          </label>
          <input
            type="text"
            value={data.contractorWallet}
            readOnly
            className="w-full p-3 border rounded-md bg-gray-100 text-gray-900"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            {"Contractee Wallet (Will Receive the Payment)"}
          </label>
          <input
            type="text"
            value={data.contracteeWallet}
            readOnly
            className="w-full p-3 border rounded-md bg-gray-100 text-gray-900"
          />
        </div>
      </div>

      {/* Arbitrators */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">{"Arbitrators"}</label>
        <div className="space-y-2">
          {data.arbitrators.map((arbitrator, index) => (
            <div key={index} className="text-gray-700">
              {arbitrator}
            </div>
          ))}
        </div>
      </div>

      {/* Total Amount */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          {"Total Contract Amount"}
        </label>
        <div className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
          {data.amount} <span className="text-gray-500 text-sm">{data.currency}</span>
        </div>
        <div className="text-sm text-gray-500">${data.feeIncludedAmount}</div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={() => alert("Contract confirmed!")}
        className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c93ac3] to-[#7749ba] text-white font-medium rounded-lg shadow-md hover:shadow-lg"
      >
        <CheckCircle className="w-6 h-6" />
        {"Confirm"}
      </button>
    </section>
  );
};

export default ConfirmationStep;
