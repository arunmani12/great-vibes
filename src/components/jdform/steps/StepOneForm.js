import React from "react";
import Label from "../../form/Label";
import Input from "../../form/Input";
import ButtonPrimary from "../../button/ButtonPrimary";

const StepOneForm = ({
  jobTitle,
  companyName,
  industry,
  location,
  remoteType,
  onChangehandler,
  onNextclickHandler,
  isFormValid,
}) => {
  return (
    <form className="mt-6">
      <div className="mb-6">
        <Label htmlFor={"jobtitile"}>
          Job title
          <span
            className={!isFormValid.jobTitle ? "text-err" : "text-text-color"}
          >
            *
          </span>
        </Label>
        <Input
          id={"jobtitile"}
          type={"text"}
          placeholder={"ex. UX UI Designer"}
          name={"jobTitle"}
          value={jobTitle}
          onChange={onChangehandler}
        />
      </div>

      <div className="mb-6">
        <Label htmlFor={"companyname"}>
          Company name
          <span
            className={
              !isFormValid.companyName ? "text-err" : "text-text-color"
            }
          >
            *
          </span>
        </Label>
        <Input
          id={"companyname"}
          type={"text"}
          placeholder={"ex. Google"}
          name={"companyName"}
          value={companyName}
          onChange={onChangehandler}
        />
      </div>

      <div className="mb-6">
        <Label htmlFor={"industry"}>
          Industry
          <span
            className={!isFormValid.industry ? "text-err" : "text-text-color"}
          >
            *
          </span>
        </Label>
        <Input
          id={"industry"}
          type={"text"}
          placeholder={"ex. Information Technology"}
          name={"industry"}
          value={industry}
          onChange={onChangehandler}
        />
      </div>

      <div className="flex justify-between w-full gap-6">
        <div className="w-full">
          <Label htmlFor={"location"}>
            Location
            <span
              className={!isFormValid.location ? "text-err" : "text-text-color"}
            >
              *
            </span>
          </Label>
          <Input
            id={"location"}
            type={"text"}
            placeholder={"ex. Chennai"}
            name={"location"}
            value={location}
            onChange={onChangehandler}
          />
        </div>

        <div className="w-full">
          <Label htmlFor={"remote"}>Remote type</Label>
          <Input
            id={"remote"}
            type={"text"}
            placeholder={"ex. In-office"}
            name="remoteType"
            value={remoteType}
            onChange={onChangehandler}
          />
        </div>
      </div>

      <div className="flex items-center justify-end mt-24 w-full">
        <ButtonPrimary onClick={onNextclickHandler}>Next</ButtonPrimary>
      </div>
    </form>
  );
};

export default StepOneForm;
