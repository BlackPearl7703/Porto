import type { InternInterface } from "../../models/intern-interface";
import "./InternExperience.css";

export const InternExperienceCard = ({
  internInfo,
}: {
  internInfo: InternInterface;
}) => {
  return (
    <div className="relative group flex flex-col items-center justify-center h-58 overflow-hidden rounded-xl shadow-lg">
      {/* Background Image */}
      <img
        src={internInfo.bgImage}
        alt="Background"
        className="w-full h-full object-cover grayscale transition-transform duration-300 group-hover:scale-105 group-hover:grayscale-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

      {/* Content on Hover */}
      <div className="absolute inset-0 w-full px-4 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
          {internInfo.company}
        </h3>
        <p className="mb-1 text-md font-semibold text-white">
          {internInfo.position}
        </p>
        <p className="mb-2 text-sm text-gray-300">
          {internInfo.dates}
        </p>
        <p className="text-sm text-[#e7e5e4]">
          {internInfo.description}
        </p>
      </div>
    </div>
  );
};
