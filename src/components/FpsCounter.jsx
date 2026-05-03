import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function FpsCounter() {
  const [fps, setFps] = useState(0);
  const frameRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const rafRef = useRef(null);

  useEffect(() => {
    const tick = (now) => {
      frameRef.current++;
      const delta = now - lastTimeRef.current;
      if (delta >= 500) {
        setFps(Math.round((frameRef.current / delta) * 1000));
        frameRef.current = 0;
        lastTimeRef.current = now;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const color = fps >= 55 ? "#B5FF00" : fps >= 30 ? "#FFD060" : "#FF5FA0";

  return (
    <Badge style={{ color }}>
      {fps} <span>fps</span>
    </Badge>
  );
}

const Badge = styled.div`
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 9999;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 5px;
  backdrop-filter: blur(8px);
  pointer-events: none;
  letter-spacing: 0.04em;

  span {
    font-weight: 400;
    opacity: 0.6;
    font-size: 0.65rem;
  }
`;

export default FpsCounter;
