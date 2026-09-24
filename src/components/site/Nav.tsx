import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { searchIndex } from "@/data/campus";
import { Modal } from "./kit";

const links = [
  { to: "/", label: "Home" },
  { to: "/campus", label: "Campus" },
  { to: "/academics", label: "Academics" },
  { to: "/students", label: "Students" },
  { to: "/faculty", label: "Faculty" },
  { to: "/events", label: "Events" },
  { to: "/community", label: "Community" },
  { to: "/facilities", label: "Facilities" },
  { to: "/about", label: "About" },
];

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("sc-theme");
    const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("sc-theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

function SearchBox({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return searchIndex
      .filter((i) => i.label.toLowerCase().includes(term) || i.hint.toLowerCase().includes(term) || i.group.toLowerCase().includes(term))
      .slice(0, 12);
  }, [q]);
  const groups = useMemo(() => {
    const map = new Map<string, typeof results>();
    results.forEach((r) => map.set(r.group, [...(map.get(r.group) ?? []), r]));
    return [...map.entries()];
  }, [results]);

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-2xl uppercase">Search campus</h2>
      <input
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Faculty, events, clubs, labs…"
        className="mt-4 w-full rounded-lg bg-background px-4 py-3 text-sm pop-sm outline-none"
      />
      <div className="mt-4 max-h-72 space-y-4 overflow-auto">
        {q && groups.length === 0 ? (
          <p className="text-sm text-muted-foreground">No matches yet — try “AI”, “hackathon” or “library”.</p>
        ) : null}
        {groups.map(([group, items]) => (
          <div key={group}>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{group}</p>
            <ul className="space-y-2">
              {items.map((i) => (
                <li key={i.group + i.label}>
                  <Link
                    to={i.to}
                    onClick={onClose}
                    className="block rounded-lg bg-background px-3 py-2 pop-sm hover:-translate-y-0.5"
                  >
                    <span className="block text-sm font-bold">{i.label}</span>
                    <span className="block text-xs text-muted-foreground">{i.hint}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export function Nav() {
  const { dark, toggle } = useTheme();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b-[3px] border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenu(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-coral text-on-bright pop-sm">◆</span>
          <span className="font-display text-lg uppercase leading-none">
            Smart<br className="hidden sm:block" />Campus
          </span>
        </Link>

        <ul className="ml-4 hidden flex-1 items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-yellow text-on-bright pop-sm" }}
                className="rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wide hover:bg-muted"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setSearch(true)}
            aria-label="Search"
            className="h-9 w-9 rounded-lg bg-card pop-sm"
          >
            🔍
          </button>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-9 w-9 rounded-lg bg-mint text-on-bright pop-sm"
          >
            {dark ? "☀" : "☾"}
          </button>
          <Link
            to="/dashboard"
            className="hidden rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground pop-sm sm:inline-block"
          >
            Dashboard
          </Link>
          <span className="hidden h-9 w-9 items-center justify-center rounded-full bg-purple text-xs font-bold text-on-bright pop-sm sm:flex">
            SN
          </span>
          <button
            onClick={() => setMenu((m) => !m)}
            aria-label="Menu"
            aria-expanded={menu}
            className="h-9 w-9 rounded-lg bg-card pop-sm xl:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {menu ? (
        <div className="border-t-[3px] border-border bg-card px-5 py-4 xl:hidden">
          <ul className="grid grid-cols-2 gap-2">
            {[...links, { to: "/dashboard", label: "Dashboard" }].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setMenu(false)}
                  className="block rounded-md bg-background px-3 py-2 text-xs font-bold uppercase pop-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <SearchBox open={search} onClose={() => setSearch(false)} />
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t-[3px] border-border bg-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-3xl uppercase leading-none">Smart Campus</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            One campus. One digital experience. Learning, people, ideas and technology in one place.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {links.slice(1, 6).map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="rounded-md bg-card px-3 py-2 text-xs font-bold uppercase pop-sm">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t-[3px] border-border px-5 py-4 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
        © 2026 Smart Campus · Innovation • Education • Community
      </div>
    </footer>
  );
}
