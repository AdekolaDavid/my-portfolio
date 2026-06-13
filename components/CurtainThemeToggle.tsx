"use client";

import { useState, useCallback, useRef, useEffect, type ReactNode, type CSSProperties } from "react";

export type Theme = "light" | "dark";

export interface ThemeToggleProps {
  variant?: "default" | "appbar" | "icon";
  defaultTheme?: Theme;
  buttonSize?: number;
  duration?: number;
  onThemeChange?: (theme: Theme) => void;
  children?: ReactNode;
}

// ─── Custom Tokens tailored to your portfolio ────────────────────────
const TOKENS: Record<Theme, Record<string, string>> = {
  light: {
    pageBg:    "#f8fafc", // Clean, tech-forward light gray
    btnBg:     "#f8fafc",
    btnText:   "#0f172a",
    btnRing:   "rgba(0,0,0,0.15)",
  },
  dark: {
    pageBg:    "#0c0e14", // Matches your specific dark slate background
    btnBg:     "#050505",
    btnText:   "#22d3ee", // Cyan icon
    btnRing:   "rgba(34,211,238,0.25)",
  },
};

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

type CurtainPhase = "idle" | "falling" | "rising";
const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

export function ThemeToggle({ variant = "icon", defaultTheme = "dark", buttonSize = 36, duration = 600, onThemeChange }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [phase, setPhase] = useState<CurtainPhase>("idle");
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const curtainColorRef = useRef<string>("");
  const t = TOKENS[theme];

  useEffect(() => {
    if (typeof document !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark && theme !== "dark") setTheme("dark");
      else if (!isDark && theme !== "light") setTheme("light");
    }
  }, []);

  const toggle = useCallback(() => {
    if (phase !== "idle") return;
    const next: Theme = theme === "light" ? "dark" : "light";
    curtainColorRef.current = TOKENS[next].pageBg;
    setPhase("falling");

    setTimeout(() => {
      setTheme(next);
      onThemeChange?.(next);
      if (typeof document !== "undefined") {
        if (next === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      }
      setPhase("rising");
      setTimeout(() => setPhase("idle"), duration + 60);
    }, duration);
  }, [phase, theme, duration, onThemeChange]);

  const btnScale = pressed ? 0.96 : hovered ? 1.1 : 1;
  const btnStyle: CSSProperties = {
    position: "relative",
    width: buttonSize, height: buttonSize,
    borderRadius: "50%",
    border: "none", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    background: t.btnBg, color: t.btnText,
    boxShadow: `0 0 0 1px ${t.btnRing}`,
    zIndex: 9999, outline: "none",
    transition: "background 0.3s ease, color 0.3s ease, transform 0.15s ease, box-shadow 0.3s ease",
    flexShrink: 0,
  };

  const curtainStyle: CSSProperties = {
    position: "fixed", inset: 0,
    background: curtainColorRef.current,
    transformOrigin: "top",
    transform: phase === "falling" ? "scaleY(1)" : "scaleY(0)",
    transition: phase !== "idle" ? `transform ${duration}ms ${EASING}` : "none",
    zIndex: 9997, pointerEvents: "none",
  };

  return (
    <>
      <div aria-hidden="true" style={curtainStyle} />
      <button style={btnStyle} onClick={toggle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); setPressed(false); }} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}>
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </>
  );
}