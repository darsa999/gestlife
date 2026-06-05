/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import en from "./en.json";
import ru from "./ru.json";
import es from "./es.json";
import ka from "./ka.json";

const translations = { en, ru, es, ka };

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem("gestlife_lang") || "ka";
  });

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLocale(lang);
      localStorage.setItem("gestlife_lang", lang);
    }
  };

  const t = (key, variables = {}) => {
    const keys = key.split(".");
    let value = translations[locale];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to English
        let fallback = translations["en"];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            fallback = null;
          }
        }
        value = fallback || key;
        break;
      }
    }

    if (typeof value === "string") {
      // Replace variables in format {{varName}}
      return Object.entries(variables).reduce((str, [k, v]) => {
        return str.replace(new RegExp(`\\{\\{\\s*${k}\\s*\\}\\}`, "g"), v);
      }, value);
    }
    return value;
  };

  return (
    <I18nContext.Provider value={{ t, locale, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return {
    t: context.t,
    i18n: {
      language: context.locale,
      changeLanguage: context.changeLanguage,
    },
  };
}
