import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { mainTheme } from "./components/Theme";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import PhoneSection from "./components/PhoneSection";
import ChartSection from "./components/ChartSection";
//import {translationsEn,translationsTr} from "./features/translations";

function App() {

  const portalRoot = document.getElementById("sidebar")
  const SidebarPortal = () => createPortal(<Sidebar/>,portalRoot)

  return (
    <ThemeProvider theme={mainTheme}>
      <Container>
        <SidebarPortal/>
        <Home />
        <Technologies />
        <PhoneSection />
        <ChartSection />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin:0;
  padding: 0%;
  background: ${(props) => props.theme.main_bg};
  scroll-snap-type: y mandatory;

`;

export default App;
