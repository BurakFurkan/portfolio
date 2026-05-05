import React, { useRef, useState, useEffect, memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BarChart from "./PageComponents/ChartSection/BarChart";
import DoughnutChart from "./PageComponents/ChartSection/DoughnutChart";
import LineChart from "./PageComponents/ChartSection/LineChart";
import RadarChart from "./PageComponents/ChartSection/RadarChart";
import PolarChart from "./PageComponents/ChartSection/PolarChart";

const ChartSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          // Stagger chart mounts to spread animation load across frames
          [0, 120, 240, 360, 480].forEach((delay, i) => {
            setTimeout(() => setVisibleCount(i + 1), delay);
          });
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section name="chart" id="chart" ref={sectionRef}>
      <Header>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Label>/ {t("Charts")}</Label>
          <Headline>{t("charts_headline")}</Headline>
        </motion.div>
      </Header>

      <Grid>
        {visibleCount >= 1 && <DoughnutChart />}
        {visibleCount >= 2 && <BarChart />}
        {visibleCount >= 3 && <LineChart />}
        {visibleCount >= 4 && <RadarChart />}
        {visibleCount >= 5 && <PolarChart />}
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  z-index: 2;
  background: transparent;
  padding: 120px 64px;
  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

const Header = styled.div`
  max-width: 1100px;
  margin: 0 auto 48px;
`;

const Label = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(p) => p.theme.accent};
  margin-bottom: 16px;
`;

const Headline = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${(p) => p.theme.text_primary};
`;

const Grid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 120px);
  gap: 16px;
  min-height: 740px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    min-height: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default memo(ChartSection);
