import { useState, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { theme1, theme2 } from "./components/Theme";
import { en, tr, de } from "./components/Languages";
import Sidebar from "./components/Sidebar";
import FpsCounter from "./components/FpsCounter";
import DevObserver from "./components/DevObserver";
import FloatingMusicPlayer from "./components/FloatingMusicPlayer";
import CursorFlow from "./components/CursorFlow";
import Home from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ShaderAnimation from "./components/PageComponents/Technologies/ShaderAnimation";

const PhoneSection = lazy(() => import("./components/PhoneSection"));
const ChartSection = lazy(() => import("./components/ChartSection"));

i18n.use(initReactI18next).init({
  resources: { en, tr, de },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

document.documentElement.lang = "en";

function App() {
  const [activeTheme, setActiveTheme] = useState(theme1);
  const [activeLang, setActiveLang] = useState("en");
  const [devMode, setDevMode] = useState(false);

  const handleLangChange = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <CursorFlow theme={activeTheme} />
      {devMode && <FpsCounter />}
      {devMode && <DevObserver />}
      <Sidebar
        setActiveTheme={setActiveTheme}
        activeLang={activeLang}
        setActiveLang={handleLangChange}
        devMode={devMode}
        setDevMode={setDevMode}
      />
      <Main>
        <Home />
        <MiddleSections>
          <ShaderAnimation isLight={activeTheme.themeNo === 2} />
          <ShaderOverlay $isLight={activeTheme.themeNo === 2} />
          <About />
          <Technologies />
          <Projects />
          <Suspense fallback={<div style={{ height: "100vh" }} />}>
            <PhoneSection />
            <ChartSection />
          </Suspense>
        </MiddleSections>
        <Contact />
      </Main>
      <FloatingMusicPlayer />
    </ThemeProvider>
  );
}

const MiddleSections = styled.div`
  position: relative;
`;

const ShaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ $isLight }) => $isLight ? "rgba(255, 255, 255, 0.60)" : "rgba(0, 0, 0, 0.56)"};
  pointer-events: none;
  z-index: 1;
`;

const Main = styled.main`
  margin-left: var(--sidebar-w, 56px);
  transition: margin-left 0.28s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 640px) {
    margin-left: 0;
    padding-bottom: calc(60px + env(safe-area-inset-bottom));
  }
`;

export default App;
