import React from "react";
import Label from "../Label";
import Input from "../Input";

const StepTwoForm = ({
  experienceMin,
  experienceMax,
  totalEmployee,
  applyType,
  onChangehandler,
  salaryMin,
  salaryMax,
  onNextclickHandler,
  setJdData,
  onSubmitHandler
}) => {
 

  return (
    <form className="mt-6">
      <div className="flex justify-between w-full gap-6 mb-6 items-end">
        <div className="w-full">
          <Label htmlFor={"experience"}>Experience</Label>
          <Input
            id={"experience"}
            type={"number"}
            placeholder={"Minimum"}
            name={"experienceMin"}
            value={experienceMin}
            onChange={onChangehandler}
          />
        </div>

        <div className="w-full">
          <Input
            id={"experience"}
            type={"number"}
            placeholder={"Maximum"}
            name={"experienceMax"}
            value={experienceMax}
            onChange={onChangehandler}
          />
        </div>
      </div>

      <div className="flex justify-between w-full gap-6 mb-6 items-end">
        <div className="w-full">
          <Label htmlFor={"salary"}>Salary</Label>
          <Input
            id={"salary"}
            type={"number"}
            placeholder={"Minimum"}
            value={salaryMin}
            name={"salaryMin"}
            onChange={onChangehandler}
          />
        </div>

        <div className="w-full">
          <Input
            id={"remote"}
            type={"number"}
            placeholder={"Maximum"}
            name={"salaryMax"}
            onChange={onChangehandler}
            value={salaryMax}
          />
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor={"totalemployee"}>Total employee</Label>
        <Input
          id={"totalemployee"}
          type={"number"}
          placeholder={"ex. 100"}
          name={"totalEmployee"}
          onChange={onChangehandler}
          value={totalEmployee}
        />
      </div>

      <div className="flex justify-between w-full gap-6 mb-6 items-end">
        <div className="w-full">
          <Label htmlFor={"location"}>Apply type</Label>
          <fieldset id="group1" className="py-2 flex gap-4">
            <div className="flex gap-1">
              <input
                className="w-5"
                type="radio"
                name="group1"
                onChange={_=> setJdData((prv) => ({ ...prv ,applyType:'Quick apply'}))}
                value={"Quick apply"}
              />
              <p className="text-placeholder font-normal text-sm">
                Quick apply
              </p>
            </div>
            <div className="flex gap-1">
              <input
                className="w-5"
                type="radio"
                name="group1"
                onChange={_=>setJdData(prv=>({...prv,applyType:'External apply'}))}
                value={"External apply"}
              />
              <p className="text-placeholder font-normal text-sm">
                External apply
              </p>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="flex items-center justify-end mt-24 w-full">
        <button
          className="bg-primary-color hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onSubmitHandler}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwoForm;
