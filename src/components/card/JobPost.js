import React from "react";

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
            <button
              className="bg-primary-color hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Apply Now
            </button>
          ) : (
            <button
              className="bg-white border border-primary-color text-primary-color font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              External Apply
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPost;
