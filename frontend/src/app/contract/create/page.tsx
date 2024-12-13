"use client";

import { useStore } from "@nanostores/react";
import Amount from "@/components/creationSteps/Amount";
import Confirmation from "@/components/creationSteps/Confirmation";
import Information from "@/components/creationSteps/Information";
import Participants from "@/components/creationSteps/Participants";
import { currentStepStore } from "@/store/stepStore";

const steps = [
  {
    id: 1,
    title: "Create contracts in 3 simple steps!",
    label: "Information",
    description: "Perfect for freelancers and clients seeking trust and transparency",
    icon: "Contract",
    component: <Information />,
  },
  {
    id: 2,
    title: "Add the participants to the contract",
    label: "Participants",
    description: "Specify participants involved in the contract.",
    icon: "Participants",
    component: <Participants />,
  },
  {
    id: 3,
    title: "Set the financial details",
    label: "Amount",
    description: "Define the financial details of the contract.",
    icon: "Amount",
    component: <Amount />,
  },
  {
    id: 4,
    title: "Review and confirm",
    label: "Confirmation",
    description: "Review and confirm all details.",
    icon: "Confirmation",
    component: <Confirmation />,
  },
];

const CreateContract = () => {
  const currentStep = useStore(currentStepStore);

  return (
    <main className="w-3/4 mx-auto mt-10 p-6 bg-purple-100">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1
          className="text-5xl inline-block font-bold bg-gradient-to-r from-[#c93ac3] to-[#7749ba] bg-clip-text text-transparent"
        >
          {steps[currentStep - 1].title}
        </h1>
        <p className="text-gray-700 text-xl mt-2 font-medium">{steps[currentStep - 1].description}</p>
      </div>
 {/* Step Tracker */}
 <div className="flex items-center gap-10 justify-center">
        {steps.map((step, index) => {
          const isActive = index + 1 === currentStep;
          const isCompleted = index + 1 < currentStep;

          return (
            <section className="relative">
            <div key={step.id} className="flex flex-col-reverse items-center">
              {/* Step Icon */}
              <span className=" text-gray-700">{step.label}</span>
              <div
                className={`flex flex-col items-center rounded-full ${
                  isActive
                    ? "bg-gradient-to-r p-3 from-[#c93ac3] to-[#7749ba]"
                    : "border-2 border-transparent bg-gradient-to-r from-[#c93ac3] to-[#7749ba] bg-clip-border"
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-full ${
                    isActive || isCompleted ? "fill-current" : "stroke-current bg-purple-100"
                  }`}
                >
                  <img
                    src={`/icons/${step.icon}.svg`}
                    className={`w-8 h-8 ${
                      isActive || isCompleted ? "fill-current" : "stroke-current m-3"
                    }`}
                  />
                </div>
              </div>

              {/* Line between steps (except the last step) */}
              
            </div>
            {/* {index < steps.length - 1 && (
                <div className="w-10 h-0.5 bg-gray-700 mx-2 absolute translate-x-14  top-8"></div>
              )} */}
            </section>
          );
        })}
      </div>

      {/* Step Content */}
      <div className="mt-10 bg-opacity-30 bg-white p-10 rounded-2xl">{steps[currentStep - 1].component}</div>
    </main>
  );
};

export default CreateContract;