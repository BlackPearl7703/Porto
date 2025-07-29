import type { Project } from "../models/project-interface";

export default function ProjectsCard({
  projectInfo,
}: {
  projectInfo: Project;
}) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg max-w-3/8">
      {/* Background Image */}
      <img
        src={projectInfo.image}
        alt={`${projectInfo.title} project`}
        className=" object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

      {/* Hover Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-bold mb-2">{projectInfo.title}</h3>
        <p className="text-sm mb-2">{projectInfo.description}</p>

        <div className="flex gap-4 text-sm underline">
          <a
            href={projectInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={projectInfo.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </div>

<div className="flex flex-wrap space-x-2 justify-center w-full">

      {projectInfo.technologies.length > 0 && (
        <div className="mt-3">
          {projectInfo.technologies.map((tech, index) => (
            <span
            key={index}
            className="text-xs mt-3 text-gray-300 bg-red-400 rounded-full px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      </div>
       {/* <p className="text-xs mt-3 text-gray-300 bg-red-400 rounded-full px-2 py-1">
          {projectInfo.technologies.join(", ")}
        </p> */}
      </div>
    </div>
  );
}
