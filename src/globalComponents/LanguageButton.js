// import React, { useState, useEffect } from "react";
// import en from "./languages/en.json";
// import es from "./languages/es.json";
// import pt from "./languages/pt.json";
// import PropTypes from "prop-types";
// import enFlag from "../assets/en.svg";
// import esFlag from "../assets/es.svg";
// import ptFlag from "../assets/pt.svg";

// const LanguageButton = ({ setLanguage }) => {
//   const languageCodes = ["en", "es", "pt"];
//   const languages = ["English", "Español", "Português"];
//   const flags = [enFlag, esFlag, ptFlag];
//   const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const changeLanguage = () => {
//     const nextLanguageIndex = (currentLanguageIndex + 1) % languageCodes.length;
//     setCurrentLanguageIndex(nextLanguageIndex);
//     const nextLanguage = languageCodes[nextLanguageIndex];
//     setLanguage(getLanguageObject(nextLanguage));
//   };

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getLanguageObject = (lang) => {
//     switch (lang) {
//       case "en":
//         return en;
//       case "es":
//         return es;
//       case "pt":
//         return pt;
//       default:
//         return en;
//     }
//   };

//   return (
//     <div style={{ display: "flex", alignItems: "center" }}>
//       <button className="border-0 bg-transparent" onClick={changeLanguage}>
//         <img src={flags[currentLanguageIndex]} alt="Language Flag" />
//         {windowWidth < 810 && (
//           <span
//             style={{
//               fontSize: "20px",
//               fontFamily: "Century Gothic, sans-serif",
//               textTransform: "uppercase",
//               marginLeft: ".5rem"
//             }}
//           >
//             {languages[currentLanguageIndex]}
//           </span>
//         )}
//       </button>
//     </div>
//   );
// };

// LanguageButton.propTypes = {
//   setLanguage: PropTypes.func.isRequired,
// };

// export default LanguageButton;

// import React from "react";
// import { useLanguage } from "./LanguageContext";
// import enFlag from "../assets/en.svg";
// import esFlag from "../assets/es.svg";
// import ptFlag from "../assets/pt.svg";

// const LanguageButton = () => {
//   const { language, changeLanguage } = useLanguage();
//   const languageCodes = ["en", "es", "pt"];
//   const flags = [enFlag, esFlag, ptFlag];
//   const currentLanguageIndex = languageCodes.indexOf(language.code);

//   const handleLanguageChange = () => {
//     const nextLanguageIndex = (currentLanguageIndex + 1) % languageCodes.length;
//     const nextLanguage = languageCodes[nextLanguageIndex];
//     changeLanguage(nextLanguage);
//   };

//   return (
//     <div style={{ display: "flex", alignItems: "center" }}>
//       <button className="border-0 bg-transparent" onClick={handleLanguageChange}>
//         <img src={flags[currentLanguageIndex]} alt="Language Flag" />
//         {/* Restante do seu código aqui */}
//       </button>
//     </div>
//   );
// };

// export default LanguageButton;
// import React from "react";
// import { useLanguage } from "./LanguageContext";
// import enFlag from "../assets/en.svg";
// import esFlag from "../assets/es.svg";
// import ptFlag from "../assets/pt.svg";

// const LanguageButton = () => {
//   const { language, changeLanguage } = useLanguage();
//   const languageCodes = ["en", "es", "pt"];
//   const flags = {
//     en: enFlag,
//     es: esFlag,
//     pt: ptFlag
//   };
//   const currentLanguageCode = language.code;

//   const handleLanguageChange = () => {
//     const nextLanguageIndex = (languageCodes.indexOf(currentLanguageCode) + 1) % languageCodes.length;
//     const nextLanguageCode = languageCodes[nextLanguageIndex];
//     changeLanguage(nextLanguageCode);
//   };

//   return (
//     <div style={{ display: "flex", alignItems: "center" }}>
//       <button className="border-0 bg-transparent" onClick={handleLanguageChange}>
//         <img src={flags[currentLanguageCode]} alt="Language Flag" />
//       </button>
//     </div>
//   );
// };

// export default LanguageButton;

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext"; // Ajuste o caminho de importação conforme necessário

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
