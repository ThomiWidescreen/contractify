"use client";

import { useStore } from "@nanostores/react";
import { CheckCircle } from "lucide-react";
import { formDataStore } from "@/store/newContractStore";

const ConfirmationStep = () => {
  const data = useStore(formDataStore);

  console.log({data})

  return (
    <section className="mt-6 p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Contract Title */}
      <h1 className="text-3xl font-bold text-purple-600">{data.name}</h1>

      {/* Contract Dates */}
      <div className="text-gray-700">
        <span className="font-medium">Start and End of the Contract:</span> {data.startDate} to {data.endDate}
      </div>

      {/* Contract Type */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">{data.contractType}</h2>
        <p className="text-gray-700 mt-2">
          This agreement is entered into on {data.startDate} by and between the contractor and the contractee. The contractor agrees to perform the services defined under this contract. The contractee agrees to pay the contractor the specified amount in the currency selected, following the agreed payment terms.
        </p>
      </div>

      {/* Wallets */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Contractor Wallet (Will Send the Payment)
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
            Contractee Wallet (Will Receive the Payment)
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
        <label className="block text-gray-700 text-sm font-medium mb-2">Arbitrators</label>
        <div className="space-y-2">
          {data.arbitrators?.map((arbitrator, index) => (
            <div key={index} className="text-gray-700">
              {arbitrator}
            </div>
          ))}
        </div>
      </div>

      {/* Total Amount */}
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">Total Contract Amount</label>
        <div className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
          {data.amount} <span className="text-gray-500 text-sm">{data.currency}</span>
        </div>
        {/* <div className="text-sm text-gray-500">Fee Included: {data.feeIncludedAmount}</div> */}
      </div>

      {/* Confirm Button */}
      <button
        onClick={() => alert("Contract confirmed!")}
        className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c93ac3] to-[#7749ba] text-white font-medium rounded-lg shadow-md hover:shadow-lg"
      >
        <CheckCircle className="w-6 h-6" />
        Confirm
      </button>
    </section>
  );
};

export default ConfirmationStep;
