'use client';
import bigVectorTwo from '@/../public/big-vector-two.png';
import bigVectorOne from '@/../public/big-vector-one.png';
import logo from '@/../public/Shape.png';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import OnboardingStepOne from '@/features/onboarding/onboardingStepOne';
import OnboardingStepTwo from '@/features/onboarding/onboardingStepTwo';
import OnboardingStepThree from '@/features/onboarding/onboardingStepThree';

interface FormData {
  companyName: string;
  website: string;
  integration: string[];
  cloudProvider: string;
  region: string;
  domainName: string;
}

const Auth = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    website: '',
    integration: [],
    cloudProvider: '',
    region: '',
    domainName: '',
  });

  // Disable back button
  useEffect(() => {
    const disableBack = () => {
      window.history.pushState(null, '', window.location.pathname);
      window.onpopstate = () => {
        window.history.pushState(null, '', window.location.pathname);
      };
    };

    disableBack();

    return () => {
      window.onpopstate = null;
    };
  }, []);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('Onboarding complete!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return <OnboardingStepOne handleNext={handleNext} formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <OnboardingStepTwo handleNext={handleNext} formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <OnboardingStepThree formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />;
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-[373px] relative left-[-24rem] top-[10rem]">
        <div className="auth w-full max-w-sm">
          <div className="flex justify-center my-5 items-center gap-2 pl-2">
            <Image src={logo} alt="logo" className="h-8 w-8" />
            <span className="font-inter font-bold text-primaryTextColor text-lg">
              Communicate.so
            </span>
          </div>
          {renderForm()}
        </div>
      </div>

      <div className="fixed top-[-1rem] right-96">
        <Image src={bigVectorOne} alt="logo" className="w-[360px] h-[460px]" />
      </div>
      <div className="fixed bottom-[-1rem] right-12">
        <Image src={bigVectorTwo} alt="logo" className="w-[280px] h-[340px]" />
      </div>
    </>
  );
};

export default Auth;