import { useState, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { theme1, theme2 } from "./components/Theme";
import { en, tr, de } from "./components/Languages";
import Sidebar from "./components/Sidebar";
import FpsCounter from "./components/FpsCounter";
import FloatingMusicPlayer from "./components/FloatingMusicPlayer";
import Home from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const PhoneSection = lazy(() => import("./components/PhoneSection"));
const ChartSection = lazy(() => import("./components/ChartSection"));

i18n.use(initReactI18next).init({
  resources: { en, tr, de },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function App() {
  const [activeTheme, setActiveTheme] = useState(theme1);
  const [activeLang, setActiveLang] = useState("en");

  const handleLangChange = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      {import.meta.env.DEV && <FpsCounter />}
      <Sidebar
        setActiveTheme={setActiveTheme}
        activeLang={activeLang}
        setActiveLang={handleLangChange}
      />
      <Main>
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Suspense fallback={<div style={{ height: "100vh", background: activeTheme.bg_primary }} />}>
          <PhoneSection />
          <ChartSection />
        </Suspense>
        <Contact />
      </Main>
      <FloatingMusicPlayer />
    </ThemeProvider>
  );
}

const Main = styled.main`
  margin-left: var(--sidebar-w, 56px);
  transition: margin-left 0.28s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 640px) {
    margin-left: 0;
    padding-bottom: calc(60px + env(safe-area-inset-bottom));
  }
`;

export default App;
