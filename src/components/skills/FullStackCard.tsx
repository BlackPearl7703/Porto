

export const FullStackCard = () => {
  const specialMap: { [key: string]: string } = {
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

  const techs = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "React.js",
    "MongoDB",
    "Express.js",
    "Node.js",
    "NestJS",
    "Redux",
    "Docker",
    "Git",
    "GitLab",
    "Vercel",
  ];

  function getTechLogo(tech: string) {
    const normalized =
      specialMap[tech] || tech.toLowerCase().replace(/\s|\./g, "");
    return `https://raw.githubusercontent.com/github/explore/main/topics/${normalized}/${normalized}.png`;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
      {techs.map((tech) => (
        <div
          key={tech}
          className="flex flex-col items-center p-2 rounded-lg hover:scale-105 hover:bg-white/10 transition-all duration-200"
        >
          <img
            src={getTechLogo(tech)}
            alt={tech}
            onError={(e) =>
              (e.currentTarget.src =
                "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg")
            }
            className="w-14 h-14 object-contain bg-white rounded-md shadow"
          />
          <p className="mt-2 text-sm text-white text-center">{tech}</p>
        </div>
      ))}
    </div>
  );
};
