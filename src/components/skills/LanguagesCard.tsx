export default function LanguagesCard() {
  const languages = ["JavaScript", "TypeScript", "C++", "SQL"];

  const getLanguageLogo = (language: string) => {
    const topic = language
      .toLowerCase()
      .replace("++", "pp")
      .replace("#", "sharp");

    return `https://raw.githubusercontent.com/github/explore/main/topics/${topic}/${topic}.png`;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
      {languages.map((lang) => (
        <div
          key={lang}
          className="flex flex-col items-center p-2 rounded-lg hover:scale-105 hover:bg-white/10 transition-all duration-200"
        >
          <img
            src={getLanguageLogo(lang)}
            alt={`${lang} logo`}
            onError={(e) =>
              (e.currentTarget.src =
                "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg")
            }
            className="w-14 h-14 object-contain bg-white rounded-md shadow"
            loading="lazy"
          />
          <p className="mt-2 text-sm text-white text-center">{lang}</p>
        </div>
      ))}
    </div>
  );
}
