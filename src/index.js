import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LanguageProvider from "./globalComponents/LanguageContext";
import { ShoppingCartProvider } from "./globalComponents/ShoppingCartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ShoppingCartProvider>
  </React.StrictMode>,
);

reportWebVitals();
