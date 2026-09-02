import { useEffect, type CSSProperties, type ReactNode } from "react";
import nebula from "@/assets/nebula-bg.jpg";
import lineart from "@/assets/enneagram-lineart.png";

/* ---------- Fixed cosmic backdrop behind the whole page ---------- */
export function CosmicBackdrop() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
        <img
          src={nebula}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div
          className="absolute inset-[-15%] blur-[2px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 46% at 6% 4%, oklch(0.55 0.15 295 / 55%), transparent 62%)," +
              "radial-gradient(ellipse 52% 44% at 96% 10%, oklch(0.75 0.13 75 / 45%), transparent 60%)," +
              "radial-gradient(ellipse 55% 48% at 12% 60%, oklch(0.45 0.09 200 / 60%), transparent 62%)," +
              "radial-gradient(ellipse 56% 48% at 86% 78%, oklch(0.55 0.15 295 / 40%), transparent 62%)",
          }}
        />
        <div className="stars-layer opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.1_0.02_225/25%),oklch(0.1_0.02_225/45%))]" />
      </div>
      <div className="grain" />
    </>
  );
}

/* ---------- Enneagram line-art symbol (SVG) ---------- */
export function Enneagram({
  className,
  style,
  stroke = "currentColor",
  numbers = false,
}: {
  className?: string;
  style?: CSSProperties;
  stroke?: string;
  numbers?: boolean;
}) {
  const pts = Array.from({ length: 9 }, (_, i) => {
    const a = (Math.PI * 2 * i) / 9 - Math.PI / 2;
    return [100 + 82 * Math.cos(a), 100 + 82 * Math.sin(a)] as const;
  });
  // point index: 0 = "9", 1 = "1", ... 8 = "8"
  const p = (n: number): readonly [number, number] => pts[n % 9] ?? [100, 100];
  const line = (a: number, b: number) =>
    `M${p(a)[0].toFixed(2)},${p(a)[1].toFixed(2)} L${p(b)[0].toFixed(2)},${p(b)[1].toFixed(2)}`;
  const hexPairs: [number, number][] = [[1, 4], [4, 2], [2, 8], [8, 5], [5, 7], [7, 1]];
  const triPairs: [number, number][] = [[0, 3], [3, 6], [6, 0]];
  const hexagram = hexPairs.map(([a, b]) => line(a, b)).join(" ");
  const triangle = triPairs.map(([a, b]) => line(a, b)).join(" ");
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} fill="none" aria-hidden>
      <circle cx="100" cy="100" r="82" stroke={stroke} strokeWidth="0.8" />
      <circle cx="100" cy="100" r="96" stroke={stroke} strokeWidth="0.4" strokeDasharray="2 4" />
      <path d={triangle} stroke={stroke} strokeWidth="0.9" />
      <path d={hexagram} stroke={stroke} strokeWidth="0.7" />
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="2.2" fill={stroke} />
          {numbers && (
            <text
              x={100 + 92 * Math.cos((Math.PI * 2 * i) / 9 - Math.PI / 2)}
              y={100 + 92 * Math.sin((Math.PI * 2 * i) / 9 - Math.PI / 2) + 3}
              fontSize="8"
              textAnchor="middle"
              fill={stroke}
              fontFamily="Fraunces, serif"
            >
              {i === 0 ? 9 : i}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

/* ---------- Generated sacred-geometry art, for big background use ---------- */
export function SacredArt({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <img
      src={lineart}
      alt=""
      loading="lazy"
      width={1024}
      height={1024}
      className={className}
      style={style}
    />
  );
}

/* ---------- Constellation: thin lines joining a few stars ---------- */
export function Constellation({ className, style }: { className?: string; style?: CSSProperties }) {
  const pts: [number, number][] = [
    [10, 20], [38, 8], [62, 26], [90, 14], [120, 40], [150, 22], [178, 46],
  ];
  return (
    <svg viewBox="0 0 190 60" className={className} style={style} fill="none" aria-hidden>
      <polyline
        points={pts.map((p) => p.join(",")).join(" ")}
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.6"
      />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.8 : 1.1} fill="currentColor" />
      ))}
    </svg>
  );
}

/* ---------- Four-point sparkle ---------- */
export function Sparkle({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden>
      <path d="M12 0c.6 7 5 11.4 12 12-7 .6-11.4 5-12 12-.6-7-5-11.4-12-12 7-.6 11.4-5 12-12z" />
    </svg>
  );
}

/* ---------- Twinkling star field with animated dots ---------- */
export function Twinkles({ count = 14, color = "gold" }: { count?: number; color?: "gold" | "purple" | "teal" }) {
  const colorClass = { gold: "text-gold-2", purple: "text-purple-2", teal: "text-teal-2" }[color];
  // deterministic pseudo-random positions for SSR/CSR parity
  const items = Array.from({ length: count }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const x = ((seed / 233280) * 100).toFixed(2);
    const y = (((seed * 7) % 233280) / 2332.8).toFixed(2);
    const size = 6 + ((i * 37) % 9);
    const delay = ((i * 0.7) % 4).toFixed(2);
    return { x, y, size, delay };
  });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((it, i) => (
        <Sparkle
          key={i}
          className={`absolute animate-twinkle ${colorClass}`}
          style={{
            left: `${it.x}%`,
            top: `${it.y}%`,
            width: it.size,
            height: it.size,
            animationDelay: `${it.delay}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Ornamental divider mark ---------- */
export function DividerMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 24" className={className} fill="none" aria-hidden>
      <line x1="0" y1="12" x2="44" y2="12" stroke="currentColor" strokeOpacity="0.4" />
      <line x1="76" y1="12" x2="120" y2="12" stroke="currentColor" strokeOpacity="0.4" />
      <circle cx="60" cy="12" r="9" stroke="currentColor" strokeWidth="0.8" />
      <path d="M60 3v18M51 12h18" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.7" />
      <circle cx="60" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

/* ---------- Scroll reveal hook (adds .in to .reveal elements) ---------- */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Section shell ---------- */
export function Section({
  id,
  tone,
  className = "",
  children,
}: {
  id?: string;
  tone?: "teal" | "purple" | "gold" | "aurora" | "none";
  className?: string;
  children: ReactNode;
}) {
  const toneClass =
    tone === "teal" ? "tone-teal" : tone === "purple" ? "tone-purple" : tone === "gold" ? "tone-gold" : tone === "aurora" ? "tone-aurora" : "";
  return (
    <section id={id} className={`relative overflow-hidden seam-top ${toneClass} ${className}`}>
      {children}
    </section>
  );
}
