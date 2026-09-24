import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-campus.jpg";
import { accentBg, features, pulse, stats } from "@/data/campus";
import { Btn, Counter, Eyebrow, PopCard, SectionHeading, Shapes } from "@/components/site/kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Campus — One Campus. One Digital Experience." },
      {
        name: "description",
        content:
          "Welcome to the Smart Campus: digital classrooms, labs, events, clubs and facilities in one connected experience.",
      },
      { property: "og:title", content: "Smart Campus — One Campus. One Digital Experience." },
      {
        property: "og:description",
        content: "A connected digital campus where learning, people, ideas and technology come together.",
      },
    ],
  }),
  component: Index,
});

const personas = {
  Student: ["Classes", "Events", "Clubs", "Facilities"],
  Faculty: ["Research", "Students", "Schedule", "Events"],
  Visitor: ["About", "Admissions", "Facilities", "Contact"],
} as const;

type Persona = keyof typeof personas;

function Index() {
  const [persona, setPersona] = useState<Persona>("Student");

  return (
    <>
      <section className="relative overflow-hidden border-b-[3px] border-border bg-muted">
        <Shapes />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div className="reveal">
            <Eyebrow accent="mint">Innovation • Education • Community</Eyebrow>
            <h1 className="mt-5 text-6xl uppercase sm:text-7xl lg:text-8xl">
              Welcome to the
              <span className="mt-2 block text-primary">Smart Campus</span>
            </h1>
            <p className="mt-5 font-display text-xl uppercase tracking-tight">
              One Campus. One Digital Experience.
            </p>
            <p className="mt-3 max-w-lg text-base text-muted-foreground">
              A connected digital campus where learning, people, ideas and technology come together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/campus" variant="solid">
                Explore Campus
              </Btn>
              <Btn to="/dashboard" variant="bright">
                Open Dashboard
              </Btn>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-purple pop-sm" aria-hidden />
            <img
              src={heroImg}
              width={1408}
              height={1104}
              alt="Students and faculty across a futuristic smart campus"
              className="relative w-full rounded-2xl pop-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading eyebrow="By the numbers" title="Campus Statistics" accent="yellow" />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`rounded-xl ${accentBg[s.accent]} p-6 text-on-bright pop pop-hover ${i % 2 ? "md:translate-y-4" : ""}`}
            >
              <p className="font-display text-4xl sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-[3px] border-border bg-muted py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="What's inside"
            title="Smart Campus Features"
            desc="Six connected systems that run the everyday life of the campus."
            accent="blue"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Link key={f.title} to={f.to} className="block">
                <PopCard accent={f.accent} className="h-full">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-card text-base pop-sm">
                    ◆
                  </span>
                  <h3 className="mt-5 text-2xl uppercase">{f.title}</h3>
                  <p className="mt-2 text-sm">{f.desc}</p>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em]">Open →</p>
                </PopCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Live"
              title="Campus Pulse"
              desc="Real-time snapshot of what is happening across the campus right now."
              accent="mint"
            />
          </div>
          <div className="rounded-2xl bg-card p-6 pop-lg">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-display text-xl uppercase">Campus Pulse</p>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold uppercase text-on-bright pop-sm">
                Live
              </span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {pulse.map((p) => (
                <li key={p.label} className="flex items-center gap-3 rounded-lg bg-background px-4 py-3 pop-sm">
                  <span aria-hidden className="text-lg">
                    {p.icon}
                  </span>
                  <span className="flex-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    {p.label}
                  </span>
                  <span className="font-display text-base">{p.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t-[3px] border-border bg-muted py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Personalise"
            title="Discover your campus"
            desc="Tell us who you are and we will point you to what matters."
            accent="pink"
          />
          <div className="flex flex-wrap gap-3">
            {(Object.keys(personas) as Persona[]).map((p) => (
              <button
                key={p}
                onClick={() => setPersona(p)}
                aria-pressed={persona === p}
                className={`rounded-lg px-5 py-3 text-sm font-bold uppercase tracking-wide pop-sm ${
                  persona === p ? "bg-primary text-primary-foreground" : "bg-card"
                }`}
              >
                I'm {p === "Faculty" ? "Faculty" : `a ${p}`}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {personas[persona].map((item, i) => (
              <div key={item} className="reveal rounded-xl bg-card p-6 pop" style={{ animationDelay: `${i * 60}ms` }}>
                <p className="font-display text-2xl uppercase">{item}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  For {persona.toLowerCase()}s
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
