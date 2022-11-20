import React from "react";
import styled from "styled-components";
import TRFlag from "../../../assets/turkey-flag.png";
import USAFlag from "../../../assets/usa-flag.png";

const LanguagePicker = ({ setActiveLang,lang,setLang }) => {

  return (
    <Container>
      <StyledImg
        src={USAFlag}
        alt="eng"
        style={{
          filter: lang === "en" ? "drop-shadow(0 0 0.7rem #dfdfdebf)" : "none",
        }}
        onClick={() => {
          setActiveLang("en");
          setLang("en");
        }}
      />
      <StyledImg
        src={TRFlag}
        alt="tr"
        style={{
          filter: lang === "tr" ? "drop-shadow(0 0 0.7rem #dfdfdebf)" : "none",
        }}
        onClick={() => {
          setActiveLang("tr");
          setLang("tr");
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: 80px;
  padding-left: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const StyledImg = styled.img`
  width: 4rem;
  height: auto;
  cursor: pointer;
  transition: all ease-in-out 0.15s;

  &:hover {
    filter: drop-shadow(0 0 1.5rem #dfdfdebf) !important;
  }
`;

export default LanguagePicker;
