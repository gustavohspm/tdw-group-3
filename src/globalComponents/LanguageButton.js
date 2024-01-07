import React, { useState } from "react";
import en from "./languages/en.json";
import es from "./languages/es.json";
import pt from "./languages/pt.json";
import PropTypes from "prop-types";

const LanguageButton = ({ setLanguage }) => {
  const languages = ["en", "es", "pt"];
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  const changeLanguage = () => {
    const nextLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    setCurrentLanguageIndex(nextLanguageIndex);
    const nextLanguage = languages[nextLanguageIndex];
    setLanguage(getLanguageObject(nextLanguage));
  };

  const getLanguageObject = (lang) => {
    switch (lang) {
      case "en":
        return en;
      case "es":
        return es;
      case "pt":
        return pt;
      default:
        return en;
    }
  };

  return (
    <div>
      <button onClick={changeLanguage}>
        {languages[currentLanguageIndex].toUpperCase()}
      </button>
    </div>
  );
};

LanguageButton.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};

export default LanguageButton;
