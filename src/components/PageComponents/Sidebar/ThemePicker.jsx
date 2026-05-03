import React from "react";
import styled from "styled-components";
import { theme1, theme2 } from "../../Theme";

const themes = [
  {
    id: 1,
    theme: theme1,
    label: "Dark",
    preview: ["#0A0A0B", "#B5FF00"],
  },
  {
    id: 2,
    theme: theme2,
    label: "Light",
    preview: ["#FAF9F7", "#2563EB"],
  },
];

const ThemePicker = ({ setActiveTheme, themeNumber, setThemeNumber }) => {
  return (
    <Container>
      {themes.map((t) => (
        <ThemeBtn
          key={t.id}
          $active={themeNumber === t.id}
          onClick={() => {
            setActiveTheme(t.theme);
            setThemeNumber(t.id);
          }}
          title={t.label}
        >
          <Swatch $a={t.preview[0]} $b={t.preview[1]} />
          <BtnLabel>{t.label}</BtnLabel>
        </ThemeBtn>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
`;

const ThemeBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background: ${(p) => (p.$active ? p.theme.accent_dim : "transparent")};
  border: 1px solid ${(p) => (p.$active ? p.theme.accent : p.theme.border_color)};
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${(p) => p.theme.accent};
  }
`;

const Swatch = styled.div`
  width: 36px;
  height: 24px;
  border-radius: 4px;
  background: linear-gradient(135deg, ${(p) => p.$a} 50%, ${(p) => p.$b} 50%);
`;

const BtnLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: ${(p) => p.theme.text_secondary};
  letter-spacing: 0.05em;
`;

export default ThemePicker;
