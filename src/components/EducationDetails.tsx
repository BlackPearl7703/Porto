import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { educationInterface } from "../models/education-interface";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const EducationDetails = ({ Info }: { Info: educationInterface }) => {
  return (
    <div className="relative bg-white text-black px-3 py-4 rounded-lg">
      <FontAwesomeIcon
        size="2x"
        icon={faUserGraduate}
        className="rounded-full text-white bg-black p-4 z-20 absolute -left-24 top-15 "
      />

      <p className="text-lg font-bold"> {Info.degree}</p>
      <p className="text-lg font-bold"> {Info.institution}</p>
      <p className="text-red-500"> {Info.year}</p>
      <p> {Info.location}</p>
      <p className="text-red-500">{Info.score}</p>
      <p> {Info.description}</p>
    </div>


  );
};

export default EducationDetails;
