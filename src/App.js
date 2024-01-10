// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LanguageButton from './globalComponents/LanguageButton';
import Home from './components/Home';
import ClothDetails from './components/ClothDetails';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import en from './globalComponents/languages/en.json';
import es from './globalComponents/languages/es.json';
import pt from './globalComponents/languages/pt.json';

export default function App() {
  //const [language, setLanguage] = useState(en);

  return (
    // <div style={{ display: "block", width: 700, padding: 30 }}>
    //               <h4>{language.splashScreen["1stImageDescription"]}</h4>
    //   <span>{language.splashScreen["1stImageTitle"]}</span>
    //   <LanguageButton setLanguage={setLanguage} />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloth-details" element={<ClothDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
