export const FullStackCard = () => {
  const specialMap = {
    "C++": "cpp",
    "C#": "csharp",
    "Node.js": "nodejs",
    "Express.js": "express",
    "React.js": "react",
    "Next.js": "nextjs",
    "NestJS": "nestjs",
    "Tailwind CSS": "tailwind",
    "MongoDB": "mongodb",
    "PostgreSQL": "postgresql",
    "Redux": "redux",
    "Vercel": "vercel",
    "Netlify": "netlify",
    "GitLab CI/CD": "gitlabcicd",
    "daisyui": "daisyui",
    "react-flow": "reactflow",
  };

  function getTechLogo(tech: string) {
    // Normalize and map special cases

    const normalized =
      specialMap[tech] || tech.toLowerCase().replace(/\s|\./g, "");

    return `https://raw.githubusercontent.com/github/explore/main/topics/${normalized}/${normalized}.png`;
  }

  const techs = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "React.js",
    // "daisyui",
    // "GitLab CI/CD",
    "MongoDB",
    "Express.js",
    "Node.js",
    // "reactflow",
    //   "Next.js",
    "NestJS",
    "Redux",
    "Docker",
    "Git",
    "GitLab",
    //   "PostgreSQL",
    "Vercel",
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 p-4">
      {techs.map((tech) => (
        <div key={tech} className="flex flex-col items-center">
          <img
            src={getTechLogo(tech)}
            alt={tech}
            className="w-14 h-14 object-contain"
          />
          <p className="mt-2 text-sm text-white text-center">{tech}</p>
        </div>
      ))}
    </div>
  );
};
