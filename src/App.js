import { useState} from "react";
import { ThemeProvider } from "styled-components";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18next from 'i18next';
import { theme1,theme2 } from "./components/Theme";
import {en,tr} from "./components/Languages";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import PhoneSection from "./components/PhoneSection";
import ChartSection from "./components/ChartSection";
//import {translationsEn,translationsTr} from "./features/translations";

function App() {
  const [activeTheme,setActiveTheme]=useState(theme1);
  const [activeLang,setActiveLang]=useState("en");
  i18next.init({
    lng: activeLang, // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
      en: en,
      tr:tr
    }
  });

  return (
    <ThemeProvider theme={activeTheme}>
      <Sidebar setActiveTheme={setActiveTheme} activeLang={activeLang} setActiveLang={setActiveLang} />
      <Home />
      <Technologies />
      <PhoneSection />
      <ChartSection />
    </ThemeProvider>
  );
}

export default App;
