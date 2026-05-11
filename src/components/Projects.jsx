import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import {
  FoodMedia,
  DashboardMedia,
  ShopMedia,
} from "./PageComponents/Projects/MediaWrapper";

const projectsData = [
  {
    id: 1,
    active: true,
    title: "Food App",
    descKey: "project_food_desc",
    image: FoodMedia[0],
    tags: ["React", "Redux", "Styled Components", "REST API"],
    liveUrl: "https://bft-food-app.vercel.app/",
    githubUrl: "https://github.com/BurakFurkan/react-food-app",
    color: "#FF6B35",
    images: [FoodMedia[0], FoodMedia[1], FoodMedia[2], FoodMedia[3]],
  },
  {
    id: 2,
    active: true,
    title: "Admin Dashboard",
    descKey: "project_dashboard_desc",
    image: DashboardMedia[0],
    tags: ["React", "Chart.js", "Material UI", "Responsive"],
    liveUrl: "https://admin-dashboard-burakfurkan.vercel.app/",
    githubUrl: "https://github.com/BurakFurkan/admin-dashboard",
    color: "#4A8BFF",
    images: [DashboardMedia[0], DashboardMedia[1], DashboardMedia[2], DashboardMedia[3]],
  },
  {
    id: 3,
    active: true,
    title: "Shop App",
    descKey: "project_shop_desc",
    image: ShopMedia[0],
    tags: ["React", "Redux Toolkit", "Styled Components", "E-Commerce"],
    liveUrl: "",
    githubUrl: "https://github.com/BurakFurkan/shopping-app",
    color: "#B5FF00",
    images: [ShopMedia[0], ShopMedia[1], ShopMedia[2]],
  },
  {
    id: 4,
    active: false,
    title: "Architecture Site",
    descKey: "project_arch_desc",
    image: null,
    tags: ["React", "Next.js", "Vercel", "SEO"],
    liveUrl: "https://bmartmimarlik.com.tr/",
    githubUrl: null,
    color: "#B57BFF",
    images: [],
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  return (
    <Section name="projects" id="projects">
      <Inner>
        <Header>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Label>/ {t("Projects")}</Label>
            <Headline>{t("MyProjects")}</Headline>
          </motion.div>
        </Header>

        <Grid>
          {projectsData.filter((p) => p.active).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <Card onClick={() => setSelected(project)} $featured={i === 0}>
                <CardThumb $color={project.color}>
                  {project.image ? (
                    <ThumbImg src={project.image} alt={project.title} loading="lazy" />
                  ) : (
                    <ThumbPlaceholder $color={project.color}>
                      <LanguageOutlinedIcon style={{ fontSize: "2.5rem", opacity: 0.4 }} />
                    </ThumbPlaceholder>
                  )}
                  <CardOverlay />
                  <CardNum $color={project.color}>0{project.id}</CardNum>
                </CardThumb>

                <CardBody>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDesc>{t(project.descKey)}</CardDesc>
                  <TagRow>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagRow>
                  <CardLinks onClick={(e) => e.stopPropagation()}>
                    <CardLink href={project.liveUrl} target="_blank" rel="noopener noreferrer" $primary>
                      <LanguageOutlinedIcon style={{ fontSize: "0.9rem" }} />
                      {t("project_live")}
                    </CardLink>
                    {project.githubUrl && (
                      <CardLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon style={{ fontSize: "0.9rem" }} />
                        {t("project_code")}
                      </CardLink>
                    )}
                  </CardLinks>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Inner>

      <AnimatePresence>
        {selected && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <Modal
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader $color={selected.color}>
                <ModalTitle>{selected.title}</ModalTitle>
                <CloseBtn onClick={() => setSelected(null)}>
                  <CloseIcon fontSize="small" />
                </CloseBtn>
              </ModalHeader>

              {selected.images.length > 0 && (
                <ModalImgGrid>
                  {selected.images.slice(0, 4).map((img, i) => (
                    <ModalImg key={i} src={img} alt="" loading="lazy" />
                  ))}
                </ModalImgGrid>
              )}

              <ModalBody>
                <p>{t(selected.descKey)}</p>
                <TagRow>
                  {selected.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagRow>
                <ModalLinks>
                  <ModalLink href={selected.liveUrl} target="_blank" rel="noopener noreferrer" $primary>
                    <LanguageOutlinedIcon style={{ fontSize: "1rem" }} />
                    {t("project_view_live")}
                  </ModalLink>
                  {selected.githubUrl && (
                    <ModalLink href={selected.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GitHubIcon style={{ fontSize: "1rem" }} />
                      {t("project_source_code")}
                    </ModalLink>
                  )}
                </ModalLinks>
              </ModalBody>
            </Modal>
          </Overlay>
        )}
      </AnimatePresence>
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

const Header = styled.div`
  margin-bottom: 56px;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid ${(p) => p.theme.border_color};
  border-radius: 10px;
  overflow: hidden;
  background: ${(p) => p.theme.bg_card};
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  ${(p) => p.$featured && "grid-column: 1 / -1;"}

  &:hover {
    border-color: ${(p) => p.theme.accent};
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${(p) => p.theme.accent_glow};
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1 !important;
  }
`;

const CardThumb = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: ${(p) => `${p.$color}22`};
`;

const ThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`;

const ThumbPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => `${p.$color}18`};
  color: ${(p) => p.$color};
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3) 100%);
`;

const CardNum = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  color: ${(p) => p.$color};
  background: rgba(0,0,0,0.5);
  padding: 4px 8px;
  border-radius: 4px;
  backdrop-filter: blur(8px);
`;

const CardBody = styled.div`
  padding: 20px 24px 24px;
`;

const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: ${(p) => p.theme.text_primary};
  margin-bottom: 8px;
`;

const CardDesc = styled.p`
  font-size: 0.875rem;
  line-height: 1.65;
  color: ${(p) => p.theme.text_secondary};
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 3px 8px;
  border-radius: 4px;
  background: ${(p) => p.theme.accent_dim};
  color: ${(p) => p.theme.accent};
  border: 1px solid ${(p) => p.theme.accent_glow};
`;

const CardLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
  border: 1px solid ${(p) => (p.$primary ? p.theme.accent : p.theme.border_color)};
  background: ${(p) => (p.$primary ? p.theme.accent_dim : "transparent")};
  color: ${(p) => (p.$primary ? p.theme.accent : p.theme.text_secondary)};

  &:hover {
    background: ${(p) => (p.$primary ? p.theme.accent : p.theme.border_color)};
    color: ${(p) => (p.$primary ? "#000" : p.theme.text_primary)};
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  backdrop-filter: blur(4px);
`;

const Modal = styled(motion.div)`
  background: ${(p) => p.theme.bg_elevated};
  border: 1px solid ${(p) => p.theme.border_color};
  border-radius: 12px;
  max-width: 720px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${(p) => p.theme.border_color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 3px solid ${(p) => p.$color};
`;

const ModalTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(p) => p.theme.text_primary};
`;

const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: ${(p) => p.theme.bg_card};
  color: ${(p) => p.theme.text_secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &:hover {
    background: ${(p) => p.theme.border_color};
    color: ${(p) => p.theme.text_primary};
  }
`;

const ModalImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: top;
`;

const ModalBody = styled.div`
  padding: 24px;

  p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: ${(p) => p.theme.text_secondary};
    margin-bottom: 16px;
  }
`;

const ModalLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ModalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.18s ease;
  border: 1px solid ${(p) => (p.$primary ? p.theme.accent : p.theme.border_color)};
  background: ${(p) => (p.$primary ? p.theme.accent : "transparent")};
  color: ${(p) => (p.$primary ? "#000" : p.theme.text_secondary)};

  &:hover {
    opacity: 0.85;
  }
`;
