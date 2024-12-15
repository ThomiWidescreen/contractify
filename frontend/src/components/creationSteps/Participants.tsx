"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { updateFormData } from "@/store/newContractStore";
import { goToNextStep } from "@/store/stepStore";
import { Plus } from "lucide-react";
import { addToast } from "@/store/toastStore";

const ParticipantsStep = () => {
  const { address } = useAccount();

  const [formState, setFormState] = useState({
    contractorWallet: address || "",
    contracteeWallet: "",
    arbitrators: [""],
    chooseRandomArbitrators: false,
  });

  useEffect(() => {
    if (address) {
      setFormState((prev) => ({ ...prev, contractorWallet: address }));
    }
  }, [address]);

  const handleInputChange = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddArbitrator = () => {
    setFormState((prev) => ({
      ...prev,
      arbitrators: [...prev.arbitrators, ""],
    }));
  };

  const handleArbitratorChange = (index: number, value: string) => {
    const updatedArbitrators = [...formState.arbitrators];
    updatedArbitrators[index] = value;
    setFormState((prev) => ({
      ...prev,
      arbitrators: updatedArbitrators,
    }));
  };

  const toggleRandomArbitrators = () => {
    setFormState((prev) => ({
      ...prev,
      chooseRandomArbitrators: !prev.chooseRandomArbitrators,
    }));
  };

  const handleNextStep = () => {
    if (!formState.contractorWallet || !formState.contracteeWallet || formState.arbitrators.some(arbitrator => !arbitrator.trim())) {
      addToast("Please fill in all required fields before proceeding.");
      return;
    }
    updateFormData(formState);
    goToNextStep();
  };

  return (
    <section>
      <div className="mt-6 space-y-6">
        {/* Contractor Wallet */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Your Wallet</label>
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={formState.contractorWallet}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-4 text-sm whitespace-nowrap py-2 bg-white border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-300">
              Connect Another Wallet
            </button>
          </div>
        </div>

        {/* Contractee Wallet */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Contractee's Wallet</label>
          <input
            type="text"
            value={formState.contracteeWallet}
            onChange={(e) => handleInputChange("contracteeWallet", e.target.value)}
            placeholder="Enter the wallet to receive funds upon contract completion"
            className="w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Arbitrators */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Arbitrators</label>
          <div className="space-y-4">
            {formState.arbitrators.map((arbitrator, index) => (
              <div key={index} className="flex items-center gap-4">
                <input
                  type="text"
                  value={arbitrator}
                  onChange={(e) => handleArbitratorChange(index, e.target.value)}
                  placeholder="Enter the arbitrator's wallet (You can choose more than one)"
                  className="w-full p-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            ))}
            <button
              onClick={handleAddArbitrator}
              className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-300"
            >
              <Plus className="w-4 h-4" />
              Add Arbitrator
            </button>
          </div>
        </div>

        {/* Random Arbitrators */}
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={formState.chooseRandomArbitrators}
            onChange={toggleRandomArbitrators}
            className="w-5 h-5"
          />
          <label className="text-gray-700">Choose arbitrators randomly</label>
        </div>

        {/* Done Button */}
        <button
          onClick={handleNextStep}
          className="text-2xl inline-block bg-gradient-to-r border-2 border-gray-100 text-gray-100 from-[#c93ac3] to-[#7749ba] px-4 py-2 rounded-2xl"
        >
          DONE!
        </button>
      </div>
    </section>
  );
};

export default ParticipantsStep;
