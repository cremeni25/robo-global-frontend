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

  function t(key: string): string {
    return resolve(dictionaries[lang], key);
  }

  return { t, lang };
}
