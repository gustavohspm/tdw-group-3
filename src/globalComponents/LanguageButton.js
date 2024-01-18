import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const LanguageButton = () => {
  const { language, changeLanguage } = useLanguage();
  const flagSrc = language.flag;
  const altText = `Flag of ${language.alt}`;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button className="border-0 bg-transparent" onClick={changeLanguage}>
        <img src={flagSrc} alt={altText} />
        {windowWidth < 810 && (
          <span
            style={{
              fontSize: "20px",
              fontFamily: "Century Gothic, sans-serif",
              textTransform: "uppercase",
              marginLeft: ".5rem",
            }}
          >
            {language.alt}
          </span>
        )}
      </button>
    </div>
  );
};

export default LanguageButton;
