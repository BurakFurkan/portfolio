import { useEffect, useRef } from "react";

// Matrix character pool: katakana + latin + digits
const MATRIX_CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
  "@#$%&";

function randChar() {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
}

export default function CursorFlow({ theme }) {
  const glowRef = useRef(null);
  const coreRef = useRef(null);

  const isDark = !theme || theme.themeNo === 1;

  // Theme-aware colors
  const accentColor = isDark ? "#b5ff00" : "#2563EB";
  const accentGlow  = isDark
    ? "0 0 6px #b5ff00, 0 0 12px rgba(181,255,0,0.5)"
    : "0 0 6px #2563EB, 0 0 12px rgba(37,99,235,0.5)";
  const blendMode     = isDark ? "screen" : "multiply";
  const glowBg        = isDark
    ? "radial-gradient(circle, rgba(181,255,0,0.22), rgba(181,255,0,0.08), transparent 70%)"
    : "radial-gradient(circle, rgba(37,99,235,0.25), rgba(37,99,235,0.10), transparent 70%)";
  const coreGradient  = isDark
    ? "radial-gradient(circle, #ffffff 0%, #d4ff4d 45%, #b5ff00 100%)"
    : "radial-gradient(circle, #5b9cf6 0%, #2563EB 45%, #1D4ED8 100%)";
  const coreShadow    = isDark
    ? "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(181,255,0,0.8), 0 0 40px rgba(181,255,0,0.4)"
    : "0 0 10px rgba(37,99,235,0.6),   0 0 20px rgba(37,99,235,0.8), 0 0 40px rgba(37,99,235,0.4)";

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const glow = glowRef.current;
    const core = coreRef.current;

    // Keep glow element updated for the current theme
    glow.style.background   = glowBg;
    glow.style.mixBlendMode = blendMode;
    core.style.background   = coreGradient;
    core.style.boxShadow    = coreShadow;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX  = mouseX;
    let glowY  = mouseY;
    let lastX  = mouseX;
    let lastY  = mouseY;
    let rafId;

    function spawnChar(x, y, isBurst = false) {
      const el = document.createElement("span");

      const offsetX  = (Math.random() - 0.5) * (isBurst ? 40 : 18);
      const fontSize = isBurst ? 10 + Math.random() * 10 : 12 + Math.random() * 8;
      const duration = isBurst ? 500 + Math.random() * 400 : 600 + Math.random() * 500;
      const fallDist = isBurst ? 40 + Math.random() * 60  : 30 + Math.random() * 40;
      const color     = accentColor;
      const glowColor = accentGlow;

      el.textContent = randChar();
      Object.assign(el.style, {
        position:     "fixed",
        pointerEvents:"none",
        left:         `${x + offsetX}px`,
        top:          `${y}px`,
        fontFamily:   "'JetBrains Mono', 'Courier New', monospace",
        fontSize:     `${fontSize}px`,
        fontWeight:   "700",
        color,
        textShadow:   glowColor,
        opacity:      "1",
        zIndex:       "9998",
        userSelect:   "none",
        lineHeight:   "1",
        animation:    `cf-matrixFall ${duration}ms linear forwards`,
      });
      el.style.setProperty("--fall", `${fallDist}px`);

      document.body.appendChild(el);

      const mutateAt = duration * 0.4;
      const mutTimer = setTimeout(() => {
        if (el.isConnected) el.textContent = randChar();
      }, mutateAt);

      setTimeout(() => {
        clearTimeout(mutTimer);
        el.remove();
      }, duration + 50);
    }

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const dx    = mouseX - lastX;
      const dy    = mouseY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      core.style.left = `${mouseX}px`;
      core.style.top  = `${mouseY}px`;

      spawnChar(mouseX, mouseY);
      if (speed > 20) spawnChar(mouseX, mouseY);

      lastX = mouseX;
      lastY = mouseY;
    }

    function onMouseDown() {
      for (let i = 0; i < 8; i++) spawnChar(mouseX, mouseY, true);
      core.style.transform = "translate(-50%, -50%) scale(1.8)";
      glow.style.transform = "translate(-50%, -50%) scale(1.2)";
    }

    function onMouseUp() {
      core.style.transform = "translate(-50%, -50%) scale(1)";
      glow.style.transform = "translate(-50%, -50%) scale(1)";
    }

    function animate() {
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;
      glow.style.left = `${glowX}px`;
      glow.style.top  = `${glowY}px`;
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup",   onMouseUp);
    rafId = requestAnimationFrame(animate);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup",   onMouseUp);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = "";
    };
  }, [isDark]); // re-run when theme switches

  return (
    <>
      <style>{`
        @keyframes cf-matrixFall {
          0%   { opacity: 1;   transform: translateY(0)            scale(1);   }
          60%  { opacity: 0.7;                                                  }
          100% { opacity: 0;   transform: translateY(var(--fall))  scale(0.7); }
        }
      `}</style>

      {/* Glow halo */}
      <div
        ref={glowRef}
        style={{
          position:     "fixed",
          pointerEvents:"none",
          borderRadius: "50%",
          transform:    "translate(-50%, -50%)",
          width:        "140px",
          height:       "140px",
          background:   glowBg,
          filter:       "blur(10px)",
          mixBlendMode: blendMode,
          zIndex:       9999,
          top:          0,
          left:         0,
          transition:   "transform 0.1s ease",
        }}
      />

      {/* Cursor core */}
      <div
        ref={coreRef}
        style={{
          position:     "fixed",
          pointerEvents:"none",
          borderRadius: "50%",
          transform:    "translate(-50%, -50%)",
          width:        "14px",
          height:       "14px",
          background:   coreGradient,
          boxShadow:    coreShadow,
          zIndex:       10000,
          top:          0,
          left:         0,
          transition:   "transform 0.1s ease",
        }}
      />
    </>
  );
}
