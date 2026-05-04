import { useEffect, useState } from "react";
import styled from "styled-components";

const SECTIONS = ["home", "about", "techno", "projects", "threeD", "chart", "contact"];

function DevObserver() {
  const [entries, setEntries] = useState(() =>
    SECTIONS.reduce((acc, id) => ({ ...acc, [id]: false }), {})
  );
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((e) => {
          setEntries((prev) => ({ ...prev, [e.target.id]: e.isIntersecting }));
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrollY(Math.round(window.scrollY));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Panel>
      <Title>DEV / OBSERVER</Title>
      <Row>
        <Label>scrollY</Label>
        <Value>{scrollY}px</Value>
      </Row>
      <Divider />
      {SECTIONS.map((id) => (
        <Row key={id}>
          <Dot $active={entries[id]} />
          <SectionId $active={entries[id]}>{id}</SectionId>
        </Row>
      ))}
    </Panel>
  );
}

const Panel = styled.div`
  position: fixed;
  bottom: 80px;
  right: 12px;
  z-index: 9998;
  font-family: var(--font-mono, monospace);
  font-size: 0.68rem;
  background: rgba(0, 0, 0, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 8px 12px;
  backdrop-filter: blur(8px);
  pointer-events: none;
  min-width: 140px;

  @media (max-width: 640px) {
    bottom: 72px;
    right: 8px;
  }
`;

const Title = styled.div`
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  margin-bottom: 6px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 5px 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 1px 0;
`;

const Label = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.62rem;
`;

const Value = styled.span`
  color: #b5ff00;
  font-weight: 600;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(p) => (p.$active ? "#B5FF00" : "rgba(255,255,255,0.15)")};
  transition: background 0.2s ease;
  flex-shrink: 0;
`;

const SectionId = styled.span`
  color: ${(p) => (p.$active ? "#B5FF00" : "rgba(255,255,255,0.4)")};
  font-weight: ${(p) => (p.$active ? 700 : 400)};
  transition: color 0.2s ease, font-weight 0.2s ease;
`;

export default DevObserver;
