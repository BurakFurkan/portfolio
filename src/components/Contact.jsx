import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CheckIcon from "@mui/icons-material/Check";

// split to avoid plain-text scraping
const CONTACT = ["furkan_te", "\x40", "hotmail.com"].join("");

/* ── keyframes ─────────────────────────────────────────────────────────────── */

const glitch = keyframes`
  0%,
  70%,
  100% {
    transform: translateX(0);
    text-shadow: none;
  }
  72% {
    transform: translateX(-3px);
    text-shadow:
       6px 0 #0ff,
      -6px 0 #f00;
  }
  74% {
    transform: translateX(-3px);
    text-shadow:
       6px 0 #0ff,
      -6px 0 #f00;
  }
  78% {
    transform: translateX(3px);
    text-shadow:
      -6px 0 #0ff,
       6px 0 #f00;
  }
  80% {
    transform: translateX(3px);
    text-shadow:
      -6px 0 #0ff,
       6px 0 #f00;
  }
  84% {
    transform: translateX(-2px);
    text-shadow:
       4px 0 #0ff,
      -4px 0 #f00;
  }
  86% {
    transform: translateX(-2px);
    text-shadow:
       4px 0 #0ff,
      -4px 0 #f00;
  }
  94% {
    transform: translateX(0);
    text-shadow: none;
  }
`;

const fudge = keyframes`
  from { transform: translate(0, 0); }
  to   { transform: translate(0, 2%); }
`;

/* ── component ─────────────────────────────────────────────────────────────── */

export default function Contact() {
  const { t } = useTranslation();
  const headlineText = t("contact_headline");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section name="contact" id="contact">
      <Scanlines />

      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Label>/ {t("Contact")}</Label>

          <GlitchWrap style={{ transform: "rotate(350deg)" }}>
            <GlitchGlow aria-hidden="true">{headlineText}</GlitchGlow>
            <GlitchText>{headlineText}</GlitchText>
          </GlitchWrap>

          <Sub>{t("contact_sub")}</Sub>

          <Actions>
            <EmailBtn as="button" onClick={handleCopy} $copied={copied}>
              {copied
                ? <><CheckIcon style={{ fontSize: "1.1rem" }} />{t("copied")}</>
                : <><EmailOutlinedIcon style={{ fontSize: "1.1rem" }} />{t("send_email")}</>
              }
            </EmailBtn>

            <SocialLinks>
              <SocialLink href="https://github.com/BurakFurkan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon fontSize="small" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/burak-furkan-tenekeci" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon fontSize="small" />
              </SocialLink>
            </SocialLinks>
          </Actions>
        </motion.div>

        <Footer>
          <FooterText>© 2022 Burak Furkan Tenekeci</FooterText>
        </Footer>
      </Inner>
    </Section>
  );
}

/* ── styles ────────────────────────────────────────────────────────────────── */

const Section = styled.section`
  background-color: ${(p) => p.theme.bg_primary};
  padding: 120px 64px 80px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 60% at 50% 100%, ${(p) => p.theme.accent_glow}, transparent);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 24px;
    min-height: auto;
  }
`;

const Scanlines = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255, 255, 255, 0.04) 0.5%,
      transparent 1%
    );
    animation: ${fudge} 7s ease-in-out alternate infinite;
    will-change: transform;
  }
`;

const Inner = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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

const GlitchWrap = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
`;

const GlitchGlow = styled.span`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  text-shadow: 0 0 120px ${(p) => p.theme.accent};
  pointer-events: none;
  white-space: pre-wrap;
`;

const GlitchText = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  color: ${(p) => p.theme.text_primary};
  position: relative;
  animation: ${glitch} 2.2s ease-in-out infinite;
`;

const Sub = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${(p) => p.theme.text_secondary};
  max-width: 480px;
  margin-top: 60px;
  margin-bottom: 48px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const EmailBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: ${(p) => p.$copied ? p.theme.accent_dim : p.theme.accent};
  color: ${(p) => p.$copied ? p.theme.accent : "#000"};
  border: 1px solid ${(p) => p.$copied ? p.theme.accent : "transparent"};
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 160px;
  justify-content: center;

  &:hover {
    background: ${(p) => p.$copied ? p.theme.accent_dim : p.theme.accent_hover};
    transform: translateY(-2px);
  }
  &:active { transform: translateY(0); }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(p) => p.theme.border_color};
  border-radius: 6px;
  color: ${(p) => p.theme.text_secondary};
  background: ${(p) => p.theme.bg_card};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(p) => p.theme.accent};
    color: ${(p) => p.theme.accent};
    background: ${(p) => p.theme.accent_dim};
  }
`;

const Footer = styled.div`
  margin-top: 80px;
  padding-top: 32px;
  border-top: 1px solid ${(p) => p.theme.border_subtle};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const FooterText = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: ${(p) => p.theme.text_muted};
  letter-spacing: 0.04em;
`;
