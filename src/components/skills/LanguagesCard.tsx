export default function LanguagesCard() {
  const languages = ["JavaScript", "TypeScript", "C++", "SQL"];

  const getLanguageLogo = (language: any) => {
    // Normalize the language name to match GitHub topic folder naming
    const topic = language
      .toLowerCase()
      .replace("++", "pp")
      .replace("#", "sharp");
    return `https://raw.githubusercontent.com/github/explore/main/topics/${topic}/${topic}.png`;
  };
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 p-4">
      {languages.map((lang) => (
        <div key={lang} className="flex flex-col items-center">
          <img
            src={getLanguageLogo(lang)}
            alt={`${lang} logo`}
            className="w-16 mr-2"
          />
          <p className="mt-2 text-sm text-white text-center">{lang}</p>
        </div>
      ))}
    </div>
  );
}
