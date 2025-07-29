import projectData from "../data/project-data";
import ProjectsCard from "./ProjectCard";

export default function Projects() {
  return (
   <section className="h-screen  flex flex-col ">
  <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
    <h2 className="text-3xl font-bold text-white text-center mb-11">
      My Projects
    </h2>

    <div className="flex flex-wrap items-center justify-center gap-3 max-h-7/8 mx-auto">
      {projectData.map((project) => (
        <ProjectsCard key={project.id} projectInfo={project} />
      ))}
    </div>
  </div>
</section>

  );
}
