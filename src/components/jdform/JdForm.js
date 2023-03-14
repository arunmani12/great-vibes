import React, { useState } from "react";
import StepOneForm from "./steps/StepOneForm";
import StepTwoForm from "./steps/StepTwoForm";
import axios from "axios";
import Loading from "../loader/Loading";

const JdForm = ({setModelIsopen,setData}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [isFormValid, setIsFormValid] = useState({
    jobTitle: true,
    companyName: true,
    industry: true,
    location: true,
  });

  const [jdData, setJdData] = useState({
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
    experienceMin: null,
    experienceMax: null,
    salaryMin: null,
    salaryMax: null,
    totalEmployee: "",
    applyType: "",
  });


  const onSubmitHandler = () => {
    setLoading(true);
    axios
      .post("https://640c507394ce1239b0aa0b08.mockapi.io/jd", jdData)
      .then(_=> {
        axios.get("https://640c507394ce1239b0aa0b08.mockapi.io/jd")
          .then(res=>{
            setData(res.data)
            setLoading(false);
            setModelIsopen(prv=>!prv)
          })
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const onChangehandler = (e) => {
    setJdData((prv) => ({
      ...prv,
      [e.target.name]: e.target.value,
    }));
  };

  const onNextclickHandler = () => {
    const { jobTitle, companyName, industry, location } = jdData;

    const newState = {
      jobTitle: !jobTitle.length ? false : true,
      companyName: !companyName.length ? false : true,
      industry: !industry.length ? false : true,
      location: !location.length ? false : true,
    };

    setIsFormValid(newState);

    if (
      !newState.jobTitle ||
      !newState.industry ||
      !newState.companyName ||
      !newState.location
    ) {
      return;
    }

    setCurrentStep((prv) => prv + 1);
  };

  const FormHeader = () => (
    <div className="flex justify-between h-7 ">
      <p className="text-xl">Create a job</p>
      <p className="text-lg">Step {currentStep}</p>
    </div>
  );

  return (
    <div className=" w-full h-full flex items-center justify-center">

      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
          <Loading />
        </div>
      )}

      <div className="w-[577px] h-[564px] p-8 bg-card border-solid border-[1px] border-card-border box-border rounded-[10px]">
        <FormHeader />
        {currentStep === 1 ? (
          <StepOneForm
            jobTitle={jdData.jobTitle}
            companyName={jdData.companyName}
            industry={jdData.industry}
            location={jdData.location}
            remoteType={jdData.remoteType}
            onChangehandler={onChangehandler}
            onNextclickHandler={onNextclickHandler}
            isFormValid={isFormValid}
          />
        ) : (
          <StepTwoForm
            experienceMin={jdData.experienceMin}
            experienceMax={jdData.experienceMax}
            totalEmployee={jdData.totalEmployee}
            salaryMin={jdData.salaryMin}
            salaryMax={jdData.salaryMax}
            applyType={jdData.applyType}
            onChangehandler={onChangehandler}
            onNextclickHandler={onNextclickHandler}
            setJdData={setJdData}
            onSubmitHandler={onSubmitHandler}
          />
        )}
      </div>
    </div>
  );
};

export default JdForm;
