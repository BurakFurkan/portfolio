import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const stats = [
  { value: "3+", key: "years_exp" },
  { value: "10+", key: "projects_built" },
  { value: "3", key: "live_apps" },
];

const serviceKeys = [
  { num: "01", titleKey: "service_01_title", descKey: "service_01_desc" },
  { num: "02", titleKey: "service_02_title", descKey: "service_02_desc" },
  { num: "03", titleKey: "service_03_title", descKey: "service_03_desc" },
];

export default function About() {
  const { t } = useTranslation();
  return (
    <Section name="about" id="about">
      <Inner>
        <TopRow>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Label>/ {t("About")}</Label>
            <Headline>{t("about_headline")}</Headline>
          </motion.div>

          <StatsRow>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <StatCard>
                  <StatValue>{s.value}</StatValue>
                  <StatLabel>{t(s.key)}</StatLabel>
                </StatCard>
              </motion.div>
            ))}
          </StatsRow>
        </TopRow>

        <BioGrid>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Bio>
              <p>{t("about_bio_1")}</p>
              <p>{t("about_bio_2")}</p>
            </Bio>
          </motion.div>
        </BioGrid>

        <Divider />

        <ServicesGrid>
          {serviceKeys.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ height: "100%" }}
            >
              <ServiceCard>
                <ServiceNum>{s.num}</ServiceNum>
                <ServiceTitle>{t(s.titleKey)}</ServiceTitle>
                <ServiceDesc>{t(s.descKey)}</ServiceDesc>
              </ServiceCard>
            </motion.div>
          ))}
        </ServicesGrid>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  z-index: 2;
  background: transparent;
  padding: 120px 64px;
  @media (max-width: 768px) {
    padding: 80px 24px 80px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;
  margin-bottom: 64px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Label = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(p) => p.theme.accent};
  margin-bottom: 20px;
`;

const Headline = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  color: ${(p) => p.theme.text_primary};
  white-space: pre-line;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 32px;
  flex-shrink: 0;
  align-items: flex-start;
  padding-top: 8px;

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 20px 24px;
  border: 1px solid ${(p) => p.theme.border_color};
  border-radius: 8px;
  background: ${(p) => p.theme.bg_card};
  min-width: 88px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${(p) => p.theme.accent};
  }
`;

const StatValue = styled.p`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: ${(p) => p.theme.accent};
  line-height: 1;
  margin-bottom: 6px;
`;

const StatLabel = styled.p`
  font-size: 0.75rem;
  color: ${(p) => p.theme.text_secondary};
  font-weight: 400;
  white-space: nowrap;
`;

const BioGrid = styled.div`
  margin-bottom: 56px;
`;

const Bio = styled.div`
  max-width: 580px;

  p {
    font-size: 1.05rem;
    line-height: 1.75;
    color: ${(p) => p.theme.text_secondary};

    & + p {
      margin-top: 16px;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${(p) => p.theme.border_color};
  margin-bottom: 56px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ServiceCard = styled.div`
  padding: 28px 24px;
  border: 1px solid ${(p) => p.theme.border_color};
  border-radius: 8px;
  background: ${(p) => p.theme.bg_card};
  height: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: ${(p) => p.theme.accent};
    background: ${(p) => p.theme.bg_card_hover};
  }
`;

const ServiceNum = styled.p`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: ${(p) => p.theme.accent};
  margin-bottom: 12px;
  letter-spacing: 0.08em;
`;

const ServiceTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: ${(p) => p.theme.text_primary};
  margin-bottom: 10px;
`;

const ServiceDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${(p) => p.theme.text_secondary};
`;
