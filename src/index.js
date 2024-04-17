import React from "react";
import ReactDOM from "react-dom/client";
import "./component/index.css";
import { QuizProvider } from "./context/QuizContext";
import App from "./component/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
