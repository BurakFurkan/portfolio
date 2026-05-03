import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TechnoItem from "./PageComponents/Technologies/TechnoItem";
import { TechnologyList } from "./PageComponents/Technologies/TechnologyList";
import ShaderAnimation from "./PageComponents/Technologies/ShaderAnimation";

const Technologies = () => {
  const { t } = useTranslation();
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section name="techno" id="techno">
      <ShaderAnimation />
      <Overlay />

      <Content>
        <Header
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Label>/ {t("Technologies")}</Label>
          <Headline>{t("What I use")}</Headline>
        </Header>

        <Grid ref={gridRef}>
          {TechnologyList.map((tech, i) => (
            <ItemWrap key={tech.name} $visible={visible} $delay={i * 0.06}>
              <TechnoItem {...tech} />
            </ItemWrap>
          ))}
        </Grid>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 120px 64px;

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.52);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 56px;
`;

const Label = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 16px;
`;

const Headline = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 2px 32px rgba(0, 0, 0, 0.5);
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
    gap: 12px;
  }
`;

const ItemWrap = styled.div`
  opacity: 0;
  animation: ${({ $visible }) =>
    $visible
      ? css`${fadeUp} 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards`
      : "none"};
  animation-delay: ${({ $delay }) => $delay}s;
`;

export default Technologies;
