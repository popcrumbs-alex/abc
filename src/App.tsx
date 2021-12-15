import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./pages/Landing";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export interface Theme {
  main: string;
  accent: string;
  light: string;
  secondary: string;
  maxWidth: string;
  mobileWidth: string;
}

export const ThemeContext = React.createContext({
  main: "#2F3061",
  accent: "#00A7E1",
  light: "#F5F3F5",
  secondary: "#136F63",
  maxWidth: "80%",
  mobileWidth: "90%",
});

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body,html {
  font-family: 'Raleway',sans-serif;
  font-size:16px;
}`;

function App() {
  const [theme, setTheme] = useState<Theme>({
    main: "#2F3061",
    accent: "#00A7E1",
    light: "#F5F3F5",
    secondary: "#136F63",
    maxWidth: "80%",
    mobileWidth: "90%",
  });

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path="/" />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
