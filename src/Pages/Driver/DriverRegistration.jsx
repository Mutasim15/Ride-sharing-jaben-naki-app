import React, { useState } from "react";
import DriverUserForm from "./DriverUserForm";
import DriverDetailsForm from "./DriverDetailsForm";
import CarDetailsForm from "./CarDetailsForm";

const DriverRegistration = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    email: "",
    userName: "",
    password: "",
    driver: {
      name: "",
      dateOfBirth: "",
      contactNumber: "",
      isActive: false,
      profileImg: ""
    },
    carDetails: {
      carSerialNo: "",
      category: "",
      carImg: "",
      carColor: ""
    }
  });

  const resetStep = () => {
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-[#0F0F1D] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md bg-[#1F1F2E] rounded-xl p-6 shadow-lg text-white space-y-4">
        {step === 1 && (
          <DriverUserForm
            data={data}
            setData={setData}
            nextStep={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <DriverDetailsForm
            data={data}
            setData={setData}
            nextStep={() => setStep(3)}
            previousStep={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <CarDetailsForm
            data={data}
            setData={setData}
            previousStep={() => setStep(2)}
            resetStep={resetStep}
          />
        )}
      </div>
    </div>
  );
};

export default DriverRegistration;
