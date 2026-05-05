import React, { Suspense, lazy, useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 0.9; }
`;

function SplineWrapper() {
  const ref = useRef(null);
  const splineAppRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [devVisible, setDevVisible] = useState(false);
  const isDev = import.meta.env.DEV;

  // Pause/resume only the render loop — never touch eventManager to avoid animation restart
  const pauseRender = () => {
    const app = splineAppRef.current;
    if (!app) return;
    app._renderer?.setAnimationLoop(null);
  };

  const resumeRender = () => {
    const app = splineAppRef.current;
    if (!app) return;
    app._renderer?.setAnimationLoop(app.render);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isDev) setDevVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setShouldLoad(true);
          resumeRender();
        } else {
          pauseRender();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDev]);

  const handleLoad = (spline) => {
    splineAppRef.current = spline;
    setLoaded(true);
    // If already scrolled out of view by the time scene finishes loading, pause render loop
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) spline._renderer?.setAnimationLoop(null);
    }
  };

  return (
    <Wrap ref={ref}>
      {shouldLoad && (
        <Suspense fallback={null}>
          <Spline scene={SCENE} onLoad={handleLoad} style={{ width: "100%", height: "100%" }} />
        </Suspense>
      )}

      {!loaded && (
        <Overlay>
          <Ring />
          <LoadingText>Loading 3D scene…</LoadingText>
        </Overlay>
      )}

      {isDev && (
        <>
          <DevLine $pos="top" $active={devVisible} />
          <DevLine $pos="bottom" $active={devVisible} />
          <DevBadge $active={devVisible}>
            {devVisible ? "● IN VIEW" : "○ OUT OF VIEW"}
          </DevBadge>
        </>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #0d0d0f;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: ${(p) => p.theme.phone_bg};
  z-index: 2;
`;

const Ring = styled.div`
  width: 36px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: ${(p) => p.theme.accent};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const LoadingText = styled.p`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: ${(p) => p.theme.text_muted};
  animation: ${pulse} 1.8s ease-in-out infinite;
`;

const DevLine = styled.div`
  position: absolute;
  ${(p) => p.$pos}: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${(p) => (p.$active ? "#B5FF00" : "#FF5FA0")};
  z-index: 9999;
  transition: background 0.2s ease;

  &::after {
    content: "${(p) => (p.$pos === "top" ? "▲ ENTER" : "▼ EXIT")}";
    position: absolute;
    ${(p) => (p.$pos === "top" ? "top: 4px" : "bottom: 4px")};
    left: 8px;
    font-family: monospace;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: ${(p) => (p.$active ? "#B5FF00" : "#FF5FA0")};
    opacity: 0.7;
  }
`;

const DevBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  font-family: monospace;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 3px 7px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.7);
  color: ${(p) => (p.$active ? "#B5FF00" : "#FF5FA0")};
  border: 1px solid ${(p) => (p.$active ? "#B5FF0044" : "#FF5FA044")};
  z-index: 9999;
  pointer-events: none;
  transition: color 0.2s ease, border-color 0.2s ease;
`;

export default SplineWrapper;
