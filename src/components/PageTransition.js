import React from "react";
import Home from "../components/Home";
import Technologies from "../components/Technologies";
import PhoneSection from "../components/PhoneSection";
import ChartSection from "../components/ChartSection";
import ReactPageScroller from "react-page-scroller";
import styled from "styled-components";


function PageTransition() {
  return (
    <Container>
      <ReactPageScroller>

          <Home />
          <Technologies />
          <PhoneSection />
          <ChartSection />

      </ReactPageScroller>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0%;
  background: ${(props) => props.theme.main_bg};
  scroll-snap-type: y mandatory;
`;

export default PageTransition;
