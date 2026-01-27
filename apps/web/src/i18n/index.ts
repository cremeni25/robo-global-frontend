import { pt } from "./pt";
import { en } from "./en";
import { es } from "./es";

export type Lang = "pt" | "en" | "es";

const dictionaries = { pt, en, es };

let currentLang: Lang =
  (localStorage.getItem("lang") as Lang) ||
  (navigator.language.startsWith("en")
    ? "en"
    : navigator.language.startsWith("es")
    ? "es"
    : "pt");

export function setLang(lang: Lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
}

export function getLang(): Lang {
  return currentLang;
}

export function t(path: string): string {
  const keys = path.split(".");
  let value: any = dictionaries[currentLang];

  for (const key of keys) {
    value = value?.[key];
  }

  return value ?? path;
}
