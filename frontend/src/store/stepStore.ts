import { atom } from "nanostores";

// Define the store to track the current step
const currentStepStore = atom(1);

// Define the total number of steps (update this based on your steps array length)
const totalSteps = 4;

// Function to get the current step
const getCurrentStep = () => currentStepStore.get();

// Function to navigate to the next step
const goToNextStep = () => {
  const currentStep = currentStepStore.get();
  if (currentStep < totalSteps) {
    currentStepStore.set(currentStep + 1);
  }
};

// Function to navigate to the previous step
const goToPreviousStep = () => {
  const currentStep = currentStepStore.get();
  if (currentStep > 1) {
    currentStepStore.set(currentStep - 1);
  }
};

// Export the store and navigation functions
export { currentStepStore, getCurrentStep, goToNextStep, goToPreviousStep };
