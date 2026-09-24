import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { accentBg, type Accent } from "@/data/campus";

export function Shapes({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="floaty absolute left-[6%] top-10 h-16 w-16 rounded-full bg-yellow pop-sm" />
      <div className="absolute right-[8%] top-24 h-0 w-0 border-x-[26px] border-b-[44px] border-x-transparent border-b-coral" />
      <div className="floaty absolute bottom-10 left-[22%] h-12 w-12 rotate-12 bg-mint pop-sm" />
      <div className="absolute right-[18%] bottom-16 h-20 w-20 dotgrid" />
      <svg className="absolute left-1/2 top-6 h-8 w-32 -translate-x-1/2 text-pink" viewBox="0 0 120 24" fill="none">
        <path d="M2 12c8-14 16 14 24 0s16 14 24 0 16 14 24 0 16 14 24 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function Eyebrow({ children, accent = "coral" }: { children: ReactNode; accent?: Accent }) {
  return (
    <span className={`inline-block ${accentBg[accent]} px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-on-bright pop-sm`}>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  accent = "coral",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  accent?: Accent;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? <Eyebrow accent={accent}>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 text-4xl uppercase sm:text-5xl">{title}</h2>
      {desc ? <p className="mt-3 text-base text-muted-foreground">{desc}</p> : null}
    </div>
  );
}

export function PopCard({
  children,
  className = "",
  accent,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  accent?: Accent;
  as?: "div" | "article";
}) {
  const Tag = as;
  return (
    <Tag className={`pop pop-hover rounded-xl ${accent ? accentBg[accent] : "bg-card"} ${accent ? "text-on-bright" : ""} p-6 ${className}`}>
      {children}
    </Tag>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold uppercase tracking-wide pop-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function Btn({
  children,
  to,
  variant = "solid",
  onClick,
  className = "",
  type = "button",
}: {
  children: ReactNode;
  to?: string;
  variant?: "solid" | "bright" | "ghost";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}) {
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground"
      : variant === "bright"
        ? "bg-yellow text-on-bright"
        : "bg-card text-foreground";
  const cls = `${btnBase} ${styles} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSeen(true)),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function PageHero({
  kicker,
  title,
  desc,
  accent = "blue",
}: {
  kicker: string;
  title: string;
  desc: string;
  accent?: Accent;
}) {
  return (
    <header className="relative overflow-hidden border-b-[3px] border-border bg-muted py-16">
      <Shapes />
      <div className="relative mx-auto max-w-6xl px-5">
        <Eyebrow accent={accent}>{kicker}</Eyebrow>
        <h1 className="mt-4 text-5xl uppercase sm:text-7xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">{desc}</p>
      </div>
    </header>
  );
}

export function Chips({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide pop-sm transition-transform hover:-translate-y-0.5 ${
            value === o ? "bg-primary text-primary-foreground" : "bg-card text-foreground"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 p-4 sm:items-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0" onClick={onClose} aria-hidden />
      <div className="reveal relative w-full max-w-lg rounded-xl bg-card p-6 pop-lg">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 h-8 w-8 rounded-full bg-coral text-on-bright pop-sm"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export function Bar({ label, value, accent }: { label: string; value: number; accent: Accent }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="mb-1 flex items-center justify-between text-xs font-bold uppercase tracking-wide">
        <span>{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-5 w-full rounded-full bg-muted pop-sm">
        <div
          className={`h-full rounded-full ${accentBg[accent]} transition-[width] duration-1000 ease-out`}
          style={{ width: seen ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}
