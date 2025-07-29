import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { educationInterface } from "../models/education-interface";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const EducationDetails = ({ Info }: { Info: educationInterface }) => {
  return (
    <div className="relative bg-[#e7e5e4] text-black px-3 py-4 rounded-lg">
      <FontAwesomeIcon
        size="2x"
        icon={faUserGraduate}
        className="rounded-full text-white bg-[#a8a29e] p-4 z-20 absolute -left-24 top-15 "
      />

      <div className=" space-y-1">
        <h3 className="text-xl font-bold">{Info.degree}</h3>
        <p className="text-md font-semibold">{Info.institution}</p>
        <div className="flex justify-between text-sm text-gray-700">
          <span>{Info.location}</span>
          <span>{Info.year}</span>
        </div>
        <p className="text-sm text-green-600 font-medium">{Info.score}</p>
        <p className="text-sm mt-2 text-gray-800">{Info.description}</p>
      </div>
    </div>


  );
};

export default EducationDetails;
