import React from "react";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonPrimaryTwo from "../button/ButtonPrimaryTwo";

const JobPost = ({
  jobTitle,
  companyName,
  industry,
  location,
  remoteType,
  experienceMin,
  experienceMax,
  salaryMin,
  salaryMax,
  totalEmployee,
  applyType,
}) => {
  return (
    <div className="w-[830px] py-4 px-4 flex gap-2 h-[320px] mb-6 bg-card border border-solid border-card-border box-border rounded-[10px]">
      <div>
        <img src="/netflix.png" alt="netflix-logo" />
      </div>
      <div>
        <div className="mb-6">
          <h2 className="text-2xl text-[#000]">{jobTitle}</h2>
          <p className="text-base text-[#000]">
            {companyName} - {industry}
          </p>
          <p className="text-base text-placeholder">{location}</p>
        </div>
        <p className="text-text-color mb-2">{remoteType}</p>
        <p className="mb-2">
          Experience ({experienceMin} - {experienceMax} years)
        </p>
        <p className="mb-2">
          INR (₹) {salaryMin} - {salaryMax} / Month
        </p>
        <p className="mb-6">{totalEmployee} employees</p>
        <div className=" flex gap-6">
          {applyType !== "External apply" ? (
            <ButtonPrimary>Apply Now</ButtonPrimary>
          ) : (
            <ButtonPrimaryTwo>External Apply</ButtonPrimaryTwo>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPost;
