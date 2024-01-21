import React, { createContext, useContext, useState, useEffect } from "react";
import en from "./languages/en.json";
import es from "./languages/es.json";
import pt from "./languages/pt.json";
import enFlag from "../assets/en.svg";
import esFlag from "../assets/es.svg";
import ptFlag from "../assets/pt.svg";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(en);
  const [languageIndex, setLanguageIndex] = useState(0);

  const languages = ["en", "es", "pt"];
  const flags = [enFlag, esFlag, ptFlag];
  const alts = ["English Flag", "Spanish Flag", "Portuguese Flag"];

  const getLanguageObject = (lang) => {
    switch (lang) {
      case "en":
        return { ...en, flag: enFlag, alt: "English" };
      case "es":
        return { ...es, flag: esFlag, alt: "Español" };
      case "pt":
        return { ...pt, flag: ptFlag, alt: "Português" };
      default:
        return { ...en, flag: enFlag, alt: "English" };
    }
  };

  const changeLanguage = () => {
    const nextLanguageIndex = (languageIndex + 1) % languages.length;
    setLanguageIndex(nextLanguageIndex);
    const nextLanguage = languages[nextLanguageIndex];
    const newLanguage = getLanguageObject(nextLanguage);
    setLanguage(newLanguage);
  };

  useEffect(() => {
    const browserLanguage = navigator.language.split("-")[0];
    const defaultLanguage = languages.includes(browserLanguage)
      ? browserLanguage
      : "en";
    const defaultIndex = languages.indexOf(defaultLanguage);
    setLanguageIndex(defaultIndex);
    setLanguage(getLanguageObject(defaultLanguage));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

LanguageProvider.defaultProps = {
  children: null,
};

export default LanguageProvider;
