import React from "react";
import styled from "styled-components";
import TRFlag from "../../../assets/turkey-flag.png";
import USAFlag from "../../../assets/usa-flag.png";
import DEFlag from "../../../assets/germany-flag.png";

const langs = [
  { code: "en", src: USAFlag, alt: "English" },
  { code: "tr", src: TRFlag, alt: "Türkçe" },
  { code: "de", src: DEFlag, alt: "Deutsch" },
];

const LanguagePicker = ({ setActiveLang, lang, setLang }) => {
  return (
    <Container>
      {langs.map(({ code, src, alt }) => (
        <StyledImg
          key={code}
          src={src}
          alt={alt}
          $active={lang === code}
          onClick={() => {
            setActiveLang(code);
            setLang(code);
          }}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding-left: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const StyledImg = styled.img`
  width: 2.4rem;
  height: auto;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  opacity: ${(p) => (p.$active ? 1 : 0.35)};
  filter: ${(p) =>
    p.$active
      ? "drop-shadow(0 0 4px rgba(181,255,0,0.8))"
      : "none"};
  outline: ${(p) => (p.$active ? "1.5px solid rgba(181,255,0,0.55)" : "none")};
  outline-offset: 2px;
  border-radius: 2px;

  &:hover {
    opacity: 0.85;
    filter: drop-shadow(0 0 3px rgba(181,255,0,0.4)) !important;
  }
`;

export default LanguagePicker;
