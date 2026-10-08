import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Language = "pt" | "en" | "es";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {\n    const saved = localStorage.getItem("rg_lang");\n    if (saved === "pt" || saved === "en" || saved === "es") return saved;\n    const browser = navigator.language.toLowerCase().split("-")[0];\n    return browser === "en" || browser === "es" ? browser : "pt";\n  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Language) => {
    localStorage.setItem("rg_lang", newLang);
    setLangState(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
