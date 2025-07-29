import { educationData } from "../data/EducationData";
import EducationDetails from "./EducationDetails";

const Education = () => {
  return (
    <div className="relative border-l-4 border-red-500 pl-16 ml-4 space-y-8">
      <div>
        <h2 className="text-3xl text-[#a8a29e] font-bold">Education</h2>
      </div>
      <EducationDetails Info={educationData[0]} />
      <EducationDetails Info={educationData[1]} />
      <EducationDetails Info={educationData[2]} />
    </div>
  );
};

export default Education;
