import { useState } from "react";
import "./App.css";
import { Input } from "./components/input/Input";
import { Step } from "./components/steps/Step";
import { Step2 } from "./components/steps/Step2";
import { Step1 } from "./components/steps/Step1";
import { Step3 } from "./components/steps/Step3";

function App() {
  const [formData, setFormData] = useState();
  const [currentStep, setCurrentStep] = useState(0);
  function handleButton(newStep) {
    if (newStep < 0 || newStep > 8) return;
    setCurrentStep(newStep);
  }

  const handleSteps = {
    increment: () => handleButton(currentStep + 1),
    decrement: () => handleButton(currentStep - 1)
  }

  const steps = [
    {
      number: 0,
      component: <Step1 handleSteps={handleSteps} />,
    },
    {
      number: 1,
      component: (
        <Step setFormData={setFormData} handleSteps={handleSteps} />
      ),
    },
    {
      number: 2,
      component: (
        <Step2 setFormData={setFormData} handleSteps={handleSteps} />
      ),
    },
    {
      number: 3,
      component: (
        <Step3 setFormData={setFormData} handleSteps={handleSteps} />
      ),
    },
  ];
  
  const result = steps.find((step) => step.number === currentStep);
  return (
    <>
      <span>{currentStep}</span>
      <button onClick={() => handleButton(currentStep + 1)}>+</button>
      <button onClick={() => handleButton(currentStep - 1)}>-</button>
      {result ? result.component : console.log("Não é objeto.")}
    </>
  );
}

export default App;
