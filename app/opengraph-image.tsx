import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Adekola David — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          padding: "72px",
          color: "#ffffff",
          fontFamily: "monospace",
        }}
      >
        {/* Top bar: fake terminal chrome */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 18, height: 18, borderRadius: 999, background: "#ef4444" }} />
          <div style={{ width: 18, height: 18, borderRadius: 999, background: "#facc15" }} />
          <div style={{ width: 18, height: 18, borderRadius: 999, background: "#22c55e" }} />
          <span style={{ marginLeft: 16, fontSize: 22, color: "#94a3b8" }}>
            user@lrd_d.dev:~
          </span>
        </div>

        {/* Middle: name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 30, color: "#3b82f6", fontWeight: 700, letterSpacing: 2 }}>
            STATUS: AVAILABLE FOR WORK
          </span>
          <span
            style={{
              marginTop: 24,
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Adekola David
          </span>
          <span style={{ marginTop: 20, fontSize: 40, color: "#cbd5e1", fontWeight: 700 }}>
            Full Stack Developer
          </span>
        </div>

        {/* Bottom: tech tags */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Next.js", "React", "Flutter", "Supabase"].map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                border: "3px solid #ffffff",
                padding: "10px 20px",
                fontSize: 22,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
