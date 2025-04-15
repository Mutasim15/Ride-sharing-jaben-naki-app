import React, { useState } from "react";
import UserForm from "./UserForm";
import PassengerForm from "./PassengerForm";

const PassengerRegistration = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(


  {
    passenger: {
      "name": "",
      "dateOfBirth": "",
      "contactNumber": ""
    },
    user: {
      "email": "",
      "userName": "",
      "password": ""
    },

  }
  );

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleSubmit = () => {
    console.log("Final Submission:", data);
    setData({
      user: { email: "", userName: "", password: "" },
      passenger: { name: "", dateOfBirth: "", contactNumber: "" }
    });
    setStep(1);
  };
  
  return (
    <div className="min-h-screen bg-[#2d2d2d] flex items-center justify-center">
      <div className="bg-[#3a3a3a] rounded-2xl p-8 max-w-md w-full shadow-lg flex items-center justify-center">
        {step === 1 ? (
          <UserForm data={data} setData={setData} nextStep={nextStep} />
        ) : (
          <PassengerForm data={data} setData={setData} handleSubmit={handleSubmit} handlePrevious={prevStep} />
        )}
      </div>
    </div>
  );
};

export default PassengerRegistration;
