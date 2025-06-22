import internData from "../data/internData";
import { InternExperienceCard } from "./skills/InternExperienceCard";

const Experience = () => {
  return (
    <div
      className="text-black flex flex-col justify-end items-center
      rounded-xl p-4 "
    >
      <p className="text-4xl  text-white mb-5  ">About me </p>
      <div
        className="flex flex-col justify-center items-center border-2 p-4
      shadow-lg  border-white rounded-md "
      >
        <p className="text-2xl font-bold italic mb-5 underline">Internships</p>

        <div
          className="flex
      justify-center space-x-6 items-center"
        >
          {/* cimpress */}
          <InternExperienceCard internInfo={internData[0]} />

          {/* summer intern */}
          <InternExperienceCard internInfo={internData[1]} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
