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
    <div className="min-h-screen bg-[#2d2d2d] flex items-center justify-center">
      <div className="bg-[#3a3a3a] rounded-2xl p-8 max-w-md w-full shadow-lg flex items-center justify-center">
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
