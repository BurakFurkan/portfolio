import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useReward } from "react-rewards";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const ROLE_KEYS = [
  "FrontEnd Developer",
  "Lifelong Learner",
  "Team Player",
  "Human",
];

export default function MainText() {
  const { t } = useTranslation();
  const { reward: r1, isAnimating: a1 } = useReward("rw1", "confetti");
  const { reward: r2, isAnimating: a2 } = useReward("rw2", "confetti");
  const { reward: r3, isAnimating: a3 } = useReward("rw3", "confetti");

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Greeting>{t("hi")}</Greeting>
        <Name>Burak Furkan<br />Tenekeci</Name>

        <RoleRow>
          <RolePrefix>{t("I'm a")}</RolePrefix>
          <Bracket>[</Bracket>
          <TickerClip>
            <RoleTicker>
              {ROLE_KEYS.map((key) => (
                <RoleItem key={key}>{t(key)}</RoleItem>
              ))}
            </RoleTicker>
          </TickerClip>
          <Bracket>]</Bracket>
        </RoleRow>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <CTARow>
          <CTALink to="projects" smooth="easeInOutQuart" duration={400} offset={0}>
            {t("view_projects")}
            <Arrow>→</Arrow>
          </CTALink>
        </CTARow>

        <Socials>
          <SocialBtn
            href="https://github.com/BurakFurkan"
            target="_blank"
            rel="noopener noreferrer"
            disabled={a1}
            onMouseEnter={r1}
            aria-label="GitHub"
          >
            <span id="rw1" />
            <GitHubIcon fontSize="small" />
          </SocialBtn>

          <SocialBtn
            href="https://www.linkedin.com/in/burak-furkan-tenekeci"
            target="_blank"
            rel="noopener noreferrer"
            disabled={a2}
            onMouseEnter={r2}
            aria-label="LinkedIn"
          >
            <span id="rw2" />
            <LinkedInIcon fontSize="small" />
          </SocialBtn>

          <SocialBtn
            href="mailto:furkan_te@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            disabled={a3}
            onMouseEnter={r3}
            aria-label="Email"
          >
            <span id="rw3" />
            <EmailOutlinedIcon fontSize="small" />
          </SocialBtn>
        </Socials>
      </motion.div>
    </Container>
  );
}

const tickerAnim = keyframes`
  0%, 12.66%, 100% { transform: translate3d(0, 0, 0);     }
  16.66%, 29.32%   { transform: translate3d(0, -2rem, 0); }
  33.32%, 45.98%   { transform: translate3d(0, -4rem, 0); }
  49.98%, 62.64%   { transform: translate3d(0, -6rem, 0); }
  66.64%, 79.3%    { transform: translate3d(0, -4rem, 0); }
  83.3%,  95.96%   { transform: translate3d(0, -2rem, 0); }
`;

const opacityAnim = keyframes`
  0%, 100% { opacity: 0; }
  50%      { opacity: 1; }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 560px;
`;

const Greeting = styled.p`
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(p) => p.theme.accent};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Name = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.08;
  color: ${(p) => p.theme.text_primary};
  margin-bottom: 20px;
`;

const RoleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RolePrefix = styled.span`
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 400;
  color: ${(p) => p.theme.text_secondary};
  white-space: nowrap;
`;

const Bracket = styled.span`
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  color: ${(p) => p.theme.accent};
  animation: ${opacityAnim} 2s infinite;
  flex-shrink: 0;
`;

const TickerClip = styled.div`
  overflow: hidden;
  height: 2rem;
`;

const RoleTicker = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${tickerAnim} 10s ease infinite;
`;

const RoleItem = styled.span`
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(p) => p.theme.accent};
  height: 2rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const CTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const CTALink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${(p) => p.theme.accent};
  color: #000;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${(p) => p.theme.accent_hover};
    transform: translateY(-2px);
  }
`;

const Arrow = styled.span`
  transition: transform 0.2s ease;
  ${CTALink}:hover & {
    transform: translateX(3px);
  }
`;


const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;

const SocialBtn = styled.a`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(p) => p.theme.border_color};
  border-radius: 6px;
  color: ${(p) => p.theme.text_secondary};
  background: ${(p) => p.theme.bg_card};
  cursor: pointer;
  transition: all 0.18s ease;

  & > span[id^="rw"] {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    border-color: ${(p) => p.theme.accent};
    color: ${(p) => p.theme.accent};
    background: ${(p) => p.theme.accent_dim};
    transform: translateY(-2px);
  }
`;
