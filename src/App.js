import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { mainTheme } from "./components/Theme";
import Sidebar from "./components/Sidebar";
import PageTransition from "./components/PageTransition";
import ReactPageScroller from "react-page-scroller";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import PhoneSection from "./components/PhoneSection";
import ChartSection from "./components/ChartSection";
//import {translationsEn,translationsTr} from "./features/translations";

function App() {
  const portalRoot = document.getElementById("sidebar");
  const SidebarPortal = () => createPortal(<Sidebar />, portalRoot);

  return (
    <ThemeProvider theme={mainTheme}>
      <Sidebar />
      <Home />
      <Technologies />
      <PhoneSection />
      <ChartSection />
    </ThemeProvider>
  );
}

export default App;
