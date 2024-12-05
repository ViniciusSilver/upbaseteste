import { useState } from "react";
import "./App.css";
import { Input } from "./components/input/Input";
import { Step } from "./components/steps/Step";
import { Step2 } from "./components/steps/Step2";

function App() {
  const [formData, setFormData] = useState();
  const [currentStep, setCurrentStep] = useState(0);
  function handleButton(newStep) {
    if (newStep < 0 || newStep > 8) return;
    setCurrentStep(newStep);
  }
  const steps = [
    {
      number: 0,
      component: <Step setFormData={setFormData} />,
    },
    {
      number: 1,
      component: <Step2 setFormData={setFormData} />,
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
