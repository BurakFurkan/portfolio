import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ThreeWrapper from "./PhoneSection/ThreeWrapper";
import SplineWrapper from "./PhoneSection/SplineWrapper";
import { Spotlight } from "./PhoneSection/Spotlight";

const PhoneSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("robot");

  const tabs = [
    { id: "robot", label: t("robot_title") },
    { id: "phone", label: t("phone_model_title") },
  ];

  return (
    <Section name="threeD" id="threeD">
      <Inner>
        <TopRow
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <Label>/ 3D</Label>
            <Headline>{t("Do you want this in your app?")}</Headline>
          </div>

          <TabWrapper>
            <SwitchHint>{t("switch_view_hint") || "Switch view"}</SwitchHint>
            <TabBar>
              {tabs.map((tab) => (
                <TabBtn
                  key={tab.id}
                  $active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {activeTab === tab.id && <TabIndicator layoutId="tab-indicator" />}
                  <TabIcon>
                    {tab.id === "robot" ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="10" rx="2"/>
                        <circle cx="12" cy="5" r="2"/>
                        <line x1="12" y1="7" x2="12" y2="11"/>
                        <line x1="8" y1="16" x2="8" y2="16"/>
                        <line x1="16" y1="16" x2="16" y2="16"/>
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2"/>
                        <line x1="12" y1="18" x2="12.01" y2="18"/>
                      </svg>
                    )}
                  </TabIcon>
                  {tab.label}
                </TabBtn>
              ))}
            </TabBar>
          </TabWrapper>
        </TopRow>

        <TabPanels>
          <PanelGrid $visible={activeTab === "robot"}>
            <InfoCard>
              <Tech>{t("robot_tech")}</Tech>
              <CardTitle>{t("robot_title")}</CardTitle>
              <CardDesc>{t("robot_desc")}</CardDesc>
            </InfoCard>
            <SceneCard>
              <Spotlight fill="white" />
              <SplineWrapper />
            </SceneCard>
          </PanelGrid>

          <PanelGrid $visible={activeTab === "phone"}>
            <SceneCard>
              <ThreeWrapper />
            </SceneCard>
            <InfoCard $right>
              <Tech>{t("phone_model_tech")}</Tech>
              <CardTitle>{t("phone_model_title")}</CardTitle>
              <CardDesc>{t("phone_model_desc")}</CardDesc>
            </InfoCard>
          </PanelGrid>
        </TabPanels>
      </Inner>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  z-index: 2;
  background: transparent;
  padding: 120px 64px;
  @media (max-width: 900px) {
    padding: 80px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
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
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: ${(p) => p.theme.text_primary};
  line-height: 1.2;
`;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
`;

const SwitchHint = styled.span`
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(p) => p.theme.text_muted};
  opacity: 0.7;
`;

const TabBar = styled.div`
  display: flex;
  gap: 4px;
  background: ${(p) => p.theme.bg_card};
  border: 1px solid ${(p) => p.theme.accent_glow};
  border-radius: 10px;
  padding: 4px;
  box-shadow: 0 0 12px ${(p) => p.theme.accent_glow};
`;

const TabBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border: 1px solid ${(p) => (p.$active ? p.theme.accent + "55" : "transparent")};
  border-radius: 7px;
  background: transparent;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${(p) => (p.$active ? p.theme.text_primary : p.theme.text_muted)};
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${(p) => p.theme.text_primary};
  }
`;

const TabIcon = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const TabIndicator = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 7px;
  background: ${(p) => p.theme.accent_dim};
  z-index: -1;
`;

const TabPanels = styled.div`
  position: relative;
`;

const PanelGrid = styled.div`
  display: ${(p) => (p.$visible ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 420px;
  gap: 14px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const SceneCard = styled.div`
  position: relative;
  border: 1px solid ${(p) => p.theme.phone_border};
  border-radius: 12px;
  background: ${(p) => p.theme.phone_bg};
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 36px;
  border: 1px solid ${(p) => p.theme.border_color};
  border-radius: 12px;
  background: ${(p) => p.theme.bg_card};
  text-align: ${(p) => (p.$right ? "right" : "left")};
  align-items: ${(p) => (p.$right ? "flex-end" : "flex-start")};

  @media (max-width: 768px) {
    padding: 28px 24px;
    text-align: left;
    align-items: flex-start;
  }
`;

const Tech = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(p) => p.theme.accent};
  background: ${(p) => p.theme.accent_dim};
  border: 1px solid ${(p) => p.theme.accent_glow};
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 700;
  color: ${(p) => p.theme.text_primary};
  line-height: 1.2;
  margin-bottom: 14px;
`;

const CardDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: ${(p) => p.theme.text_secondary};
  max-width: 320px;
`;

export default PhoneSection;
