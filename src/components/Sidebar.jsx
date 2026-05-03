import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import ThemePicker from "./PageComponents/Sidebar/ThemePicker";
import LanguagePicker from "./PageComponents/Sidebar/LanguagePicker";

const navItems = [
  { to: "home", icon: <HomeOutlinedIcon fontSize="small" />, labelKey: "Home" },
  { to: "about", icon: <InfoOutlinedIcon fontSize="small" />, labelKey: "About" },
  { to: "techno", icon: <ScienceOutlinedIcon fontSize="small" />, labelKey: "Technologies" },
  { to: "projects", icon: <DesignServicesOutlinedIcon fontSize="small" />, labelKey: "Projects" },
  { to: "threeD", icon: <ViewInArOutlinedIcon fontSize="small" />, label: "3D" },
  { to: "chart", icon: <TrendingUpOutlinedIcon fontSize="small" />, labelKey: "Charts" },
  { to: "contact", icon: <MailOutlinedIcon fontSize="small" />, labelKey: null, label: "Contact" },
];

const Sidebar = ({ setActiveTheme, setActiveLang }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [themeNumber, setThemeNumber] = useState(1);
  const [lang, setLang] = useState("en");
  const [expandedUtil, setExpandedUtil] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const ids = navItems.map((item) => item.to);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleUtilClick = (name) => {
    setExpandedUtil((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <DesktopSidebar
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => {
          setIsOpen(false);
          setExpandedUtil(null);
        }}
        $open={isOpen}
      >
        <Brand $open={isOpen}>
          <BrandText>
            B<BrandAccent>F</BrandAccent>T
          </BrandText>
        </Brand>

        <Nav>
          {navItems.map((item) => (
            <NavItem key={item.to}>
              <StyledLink
                to={item.to}
                smooth="easeInOutQuart"
                duration={400}
                offset={0}
                $active={activeSection === item.to}
              >
                <IconWrap>{item.icon}</IconWrap>
                <NavLabel $open={isOpen}>
                  {item.labelKey ? t(item.labelKey) : item.label}
                </NavLabel>
              </StyledLink>
            </NavItem>
          ))}
        </Nav>

        <Utilities>
          <UtilRow>
            <UtilBtn onClick={() => handleUtilClick("theme")} $active={expandedUtil === "theme"}>
              <PaletteOutlinedIcon fontSize="small" />
              {isOpen && <UtilLabel>{t("theme_label")}</UtilLabel>}
            </UtilBtn>
            {isOpen && expandedUtil === "theme" && (
              <UtilPanel>
                <ThemePicker
                  setActiveTheme={setActiveTheme}
                  themeNumber={themeNumber}
                  setThemeNumber={setThemeNumber}
                />
              </UtilPanel>
            )}
          </UtilRow>

          <UtilRow>
            <UtilBtn onClick={() => handleUtilClick("lang")} $active={expandedUtil === "lang"}>
              <TranslateOutlinedIcon fontSize="small" />
              {isOpen && <UtilLabel>{t("lang_label")}</UtilLabel>}
            </UtilBtn>
            {isOpen && expandedUtil === "lang" && (
              <UtilPanel>
                <LanguagePicker
                  setActiveLang={setActiveLang}
                  lang={lang}
                  setLang={setLang}
                />
              </UtilPanel>
            )}
          </UtilRow>
        </Utilities>
      </DesktopSidebar>

      {/* ── Mobile Bottom Navbar ── */}
      <MobileNav>
        {navItems.map((item) => (
          <MobileNavItem key={item.to}>
            <MobileNavLink
              to={item.to}
              smooth="easeInOutQuart"
              duration={400}
              offset={0}
              $active={activeSection === item.to}
            >
              <MobileIconWrap>{item.icon}</MobileIconWrap>
              <MobileNavLabel>
                {item.labelKey ? t(item.labelKey) : item.label}
              </MobileNavLabel>
            </MobileNavLink>
          </MobileNavItem>
        ))}

        {/* Settings Button */}
        <MobileNavItem>
          <MobileSettingsBtn onClick={() => setMobileMenuOpen(true)}>
            <MobileIconWrap>
              <TuneOutlinedIcon fontSize="small" />
            </MobileIconWrap>
            <MobileNavLabel>{t("settings") || "Settings"}</MobileNavLabel>
          </MobileSettingsBtn>
        </MobileNavItem>
      </MobileNav>

      {/* ── Mobile Settings Sheet ── */}
      {mobileMenuOpen && (
        <MobileSheetOverlay onClick={() => setMobileMenuOpen(false)}>
          <MobileSheet onClick={(e) => e.stopPropagation()}>
            <SheetHeader>
              <SheetTitle>
                B<SheetAccent>F</SheetAccent>T
              </SheetTitle>
              <CloseBtn onClick={() => setMobileMenuOpen(false)}>
                <CloseOutlinedIcon fontSize="small" />
              </CloseBtn>
            </SheetHeader>

            <SheetSection>
              <SheetSectionTitle>{t("theme_label") || "Theme"}</SheetSectionTitle>
              <ThemePicker
                setActiveTheme={setActiveTheme}
                themeNumber={themeNumber}
                setThemeNumber={setThemeNumber}
              />
            </SheetSection>

            <SheetSection>
              <SheetSectionTitle>{t("lang_label") || "Language"}</SheetSectionTitle>
              <LanguagePicker
                setActiveLang={setActiveLang}
                lang={lang}
                setLang={setLang}
              />
            </SheetSection>
          </MobileSheet>
        </MobileSheetOverlay>
      )}
    </>
  );
};

/* ─── Desktop Sidebar Styles ─── */

const DesktopSidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(p) => (p.$open ? "var(--sidebar-w-open, 228px)" : "var(--sidebar-w, 56px)")};
  background: ${(p) => p.theme.sidebar_bg};
  border-right: 1px solid ${(p) => p.theme.sidebar_border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 999;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media (max-width: 640px) {
    display: none;
  }
`;

const Brand = styled.div`
  height: 56px;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.$open ? "flex-start" : "center")};
  gap: 10px;
  padding: ${(p) => (p.$open ? "0 16px" : "0")};
  border-bottom: 1px solid ${(p) => p.theme.border_subtle};
  transition: padding 0.28s cubic-bezier(0.16, 1, 0.3, 1);
`;

const BrandText = styled.span`
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: ${(p) => p.theme.text_primary};
  white-space: nowrap;
`;

const BrandAccent = styled.span`
  color: ${(p) => p.theme.accent};
  font-weight: 800;
`;

const Nav = styled.ul`
  flex: 1;
  list-style: none;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const NavItem = styled.li``;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  color: ${(p) => (p.$active ? p.theme.accent : p.theme.text_secondary)};
  background: ${(p) => (p.$active ? p.theme.accent_dim : "transparent")};

  &:hover {
    background: ${(p) => p.theme.sidebar_item_hover};
    color: ${(p) => p.theme.text_primary};
  }
`;

const IconWrap = styled.span`
  min-width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

const NavLabel = styled.span`
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transition: opacity 0.18s ease;
  color: inherit;
`;

const Utilities = styled.div`
  padding: 8px;
  border-top: 1px solid ${(p) => p.theme.border_subtle};
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 16px;
`;

const UtilRow = styled.div`
  position: relative;
`;

const UtilBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 6px;
  border: none;
  background: ${(p) => (p.$active ? p.theme.accent_dim : "transparent")};
  color: ${(p) => (p.$active ? p.theme.accent : p.theme.text_secondary)};
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: ${(p) => p.theme.sidebar_item_hover};
    color: ${(p) => p.theme.text_primary};
  }
`;

const UtilLabel = styled.span`
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
`;

const UtilPanel = styled.div`
  padding: 4px 0 8px 8px;
`;

/* ─── Mobile Bottom Navbar Styles ─── */

const MobileNav = styled.nav`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: ${(p) => p.theme.sidebar_bg};
    border-top: 1px solid ${(p) => p.theme.sidebar_border};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 999;
    align-items: stretch;
    padding: 0 4px;
    padding-bottom: env(safe-area-inset-bottom);
  }
`;

const MobileNavItem = styled.div`
  flex: 1;
  display: flex;
`;

const MobileNavLink = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  color: ${(p) => (p.$active ? p.theme.accent : p.theme.text_secondary)};
  background: ${(p) => (p.$active ? p.theme.accent_dim : "transparent")};
  border-radius: 8px;
  transition: color 0.15s ease, background 0.15s ease;
  padding: 4px 2px;

  &:hover,
  &:active {
    color: ${(p) => p.theme.accent};
    background: ${(p) => p.theme.sidebar_item_hover};
  }
`;

const MobileSettingsBtn = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: none;
  background: transparent;
  color: ${(p) => p.theme.text_secondary};
  cursor: pointer;
  border-radius: 8px;
  transition: color 0.15s ease, background 0.15s ease;
  padding: 4px 2px;

  &:hover,
  &:active {
    color: ${(p) => p.theme.accent};
    background: ${(p) => p.theme.sidebar_item_hover};
  }
`;

const MobileIconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

const MobileNavLabel = styled.span`
  font-family: var(--font-body);
  font-size: 0.6rem;
  font-weight: 500;
  white-space: nowrap;
  color: inherit;
  line-height: 1;
`;

/* ─── Mobile Settings Sheet Styles ─── */

const MobileSheetOverlay = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    align-items: flex-end;
    animation: fadeIn 0.2s ease;

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
`;

const MobileSheet = styled.div`
  width: 100%;
  background: ${(p) => p.theme.sidebar_bg};
  border-top: 1px solid ${(p) => p.theme.sidebar_border};
  border-radius: 16px 16px 0 0;
  padding: 16px 20px;
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
  animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
`;

const SheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SheetTitle = styled.span`
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: ${(p) => p.theme.text_primary};
`;

const SheetAccent = styled.span`
  color: ${(p) => p.theme.accent};
  font-weight: 800;
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background: ${(p) => p.theme.sidebar_item_hover};
  color: ${(p) => p.theme.text_secondary};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${(p) => p.theme.accent_dim};
    color: ${(p) => p.theme.accent};
  }
`;

const SheetSection = styled.div`
  margin-bottom: 20px;
`;

const SheetSectionTitle = styled.p`
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(p) => p.theme.text_secondary};
  margin-bottom: 10px;
`;

export default Sidebar;
