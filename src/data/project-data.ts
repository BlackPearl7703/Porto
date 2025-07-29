import type { Project } from "../models/project-interface";

const projectData: Project[] = [
 {
    id:Math.random().toString(36).substring(2, 9),
    title: "Gamini",
    description: "A web application for accessing indian railway information, including train schedules, PNR status, and more.",
    image: "./src/assets/gamini.png",
    githubUrl: "https://github.com/yourusername/gamini",
    liveUrl: "https://yourusername.github.io/gamini/",
    technologies: ["React", "Tailwind CSS"],
    tags: ["Web Development", "Full Stack", "React"],
  },
  {
    id:Math.random().toString(36).substring(2, 9),
    title: "Infit",
    description: "A fitness web application to suggest workouts based on user preferences and goals.",
    image: "./src/assets/infit.png",
    githubUrl: "https://github.com/yourusername/infit",
    liveUrl: "https://yourusername.github.io/infit/",
    technologies: ["React", "Tailwind CSS"],
    tags: ["Web Development", "Frontend", "Gym"],
  }
 
];

export default projectData;
