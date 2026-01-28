import { useMemo } from "react";
import pt from "./pt";
import en from "./en";
import es from "./es";
import { useLanguage } from "../contexts/LanguageContext";

const dictionaries = { pt, en, es };

function resolve(obj: any, path: string): string {
  return path.split(".").reduce((acc, part) => acc?.[part], obj) ?? path;
}

export function useI18n() {
  const { lang } = useLanguage();

  const dictionary = useMemo(() => {
    return dictionaries[lang];
  }, [lang]);

  function t(key: string): string {
    return resolve(dictionary, key);
  }

  return { t, lang };
}
