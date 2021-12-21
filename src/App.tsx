import React, { Ref, useEffect, useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";

export interface Theme {
  main: string;
  accent: string;
  light: string;
  secondary: string;
  maxWidth: string;
  mobileWidth: string;
  formSection: HTMLElement | null;
  createFormRef: (val: HTMLElement | null) => void;
  servicesRef: HTMLElement | null;
  setServiceRef: (val: HTMLElement) => void;
  testimonialsRef: HTMLElement | null;
  setTestimonialsRef: (val: HTMLElement | null) => void;
}

export const ThemeContext = React.createContext({
  main: "#2F3061",
  accent: "#00A7E1",
  light: "#F5F3F5",
  secondary: "#136F63",
  maxWidth: "80%",
  mobileWidth: "90%",
  formSection: null,
  createFormRef: (val: HTMLElement | null) => {},
  servicesRef: null,
  setServiceRef: (val: HTMLElement | null) => {},
  testimonialsRef: null,
  setTestimonialsRef: (val: HTMLElement | null) => {},
});

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body,html {
  font-family: 'Raleway',sans-serif;
  font-size:16px;
}`;

function App() {
  const [formRef, setFormRef] = useState<HTMLElement | null>(null);
  const [servicesRef, setServiceRef] = useState<HTMLElement | null>(null);
  const [testimonialsRef, setTestimonialsRef] = useState<HTMLElement | null>(
    null
  );
  const [theme, setTheme] = useState<Theme>({
    main: "#2F3061",
    accent: "#00A7E1",
    light: "#F5F3F5",
    secondary: "#136F63",
    maxWidth: "80%",
    mobileWidth: "90%",
    servicesRef,
    formSection: formRef,
    testimonialsRef,
    createFormRef: (val: HTMLElement | null) => setFormRef(val),
    setServiceRef: (val: HTMLElement | null) => setServiceRef(val),
    setTestimonialsRef: (val: HTMLElement | null) => setTestimonialsRef(val),
  });

  useMemo(() => {
    if (formRef) {
      setTheme((prevState: Theme) => ({
        ...prevState,
        formSection: formRef,
      }));
    }
  }, [formRef]);

  useMemo(() => {
    if (testimonialsRef) {
      setTheme((prevTheme: Theme) => ({ ...prevTheme, testimonialsRef }));
    }
  }, [testimonialsRef]);

  useMemo(() => {
    if (servicesRef) {
      setTheme((prevTheme: Theme) => ({ ...prevTheme, servicesRef }));
    }
  }, [servicesRef]);

  console.log("theme", theme);

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
