"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import remarkGfm from "remark-gfm";
import { Sparkles, Loader } from "lucide-react";
import "react-mde/lib/styles/css/react-mde-all.css";
import { enhanceWithAI } from "@/utils/enhance";
import contractTemplates from "@/utils/templates";
import { goToNextStep } from "@/store/stepStore";

const InformationStep = () => {
  const [contractDetails, setContractDetails] = useState({
    type: "Freelancing",
    name: "",
    startDate: "",
    endDate: "",
    content: contractTemplates["Freelancing"],
  });

  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
  const [isLoading, setIsLoading] = useState(false);

  const contractTypes = Object.keys(contractTemplates);

  const handleInputChange = (field: string, value: string) => {
    setContractDetails((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "type" ? { content: contractTemplates[value] } : {}),
    }));
  };

  const handleEnhanceWithAI = async () => {
    setIsLoading(true); // Show loader
    const enhancedContent = await enhanceWithAI(contractDetails.type, contractDetails.content);
    setIsLoading(false); // Hide loader

    if (enhancedContent) {
      setContractDetails((prev) => ({
        ...prev,
        content: enhancedContent,
      }));
      alert("Contract content enhanced successfully!");
    }
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
              className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="date"
              value={contractDetails.startDate}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
              className="w-1/3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="date"
              value={contractDetails.endDate}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
              className="w-1/3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Contract Type */}
        <div className="flex space-x-4 mb-4">
          {contractTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleInputChange("type", type)}
              className={`px-4 py-2 whitespace-nowrap rounded-full ${
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
        <div className="mb-4 relative">
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
            classes={{
              textArea: "text-black",
              preview: "text-black bg-white",
              reactMde: "text-black",
            }}
          />

          {/* Floating Enhance Button */}
          <button
            onClick={handleEnhanceWithAI}
            disabled={isLoading}
            className={`absolute bottom-4 right-4 flex items-center font-medium px-4 py-2 rounded-md shadow-lg ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-500 text-white hover:bg-blue-600"
            }`}
          >
            {isLoading ? (
              <>
                Enhancing
                <Loader className="ml-2 w-4 h-4 animate-spin" />
              </>
            ) : (
              <>
                Enhance
                <Sparkles className="ml-2 w-4 h-4" />
              </>
            )}
          </button>
        </div>
      <button onClick={goToNextStep} className="text-2xl inline-block bg-gradient-to-r border-2 border-gray-100 text-gray-100 from-[#c93ac3] to-[#7749ba] px-4 py-2 rounded-2xl">Done!</button>

      </div>
    </section>
  );
};

export default InformationStep;
