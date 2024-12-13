"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import remarkGfm from "remark-gfm";
import "react-mde/lib/styles/css/react-mde-all.css";

const InformationStep = () => {
  const [contractDetails, setContractDetails] = useState({
    type: "Freelancing",
    name: "",
    startDate: "",
    endDate: "",
    content: "Freelancing contract template here...",
  });

  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const contractTypes = ["Freelancing", "E-commerce", "Content", "Blank Contract"];

  const handleInputChange = (field: string, value: string) => {
    setContractDetails((prev) => ({ ...prev, [field]: value }));
  };

  const enhanceWithAI = () => {
    // Simulate AI enhancement logic
    alert("Enhancing contract content with AI...");
    setContractDetails((prev) => ({
      ...prev,
      content: prev.content + "\n\n**Enhanced Content Added by AI**",
    }));
  };

  return (
    <section>
      {/* Contract Form */}
      <div className="mt-6">
        {/* Contract Name and Dates */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Contract Name and Dates
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              value={contractDetails.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter contract name"
              className="flex-1 p-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="date"
              value={contractDetails.startDate}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
              className="w-1/3 p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="date"
              value={contractDetails.endDate}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
              className="w-1/3 p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Contract Type */}
        <div className="flex space-x-4 mb-4">
          {contractTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleInputChange("type", type)}
              className={`px-4 py-2 rounded-full ${
                contractDetails.type === type
                  ? "bg-gray-800 text-white"
                  : "bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Markdown Editor */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Contract Content (Markdown Supported)
          </label>
          <ReactMde
            value={contractDetails.content}
            onChange={(value) => handleInputChange("content", value)}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>)
            }
            childProps={{
              writeButton: {
                tabIndex: -1,
              },
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={enhanceWithAI}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Enhance with AI
          </button>
        </div>
      </div>
    </section>
  );
};

export default InformationStep;
