import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { accentBg, stats } from "@/data/campus";
import { Bar, Counter, PageHero, SectionHeading } from "@/components/site/kit";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Smart Campus" },
      { name: "description", content: "The vision, mission, achievements and sustainability programs behind Smart Campus." },
      { property: "og:title", content: "About — Smart Campus" },
      { property: "og:description", content: "A connected, technology-driven campus built around people." },
    ],
  }),
  component: About,
});

const mission = [
  { title: "Learn", desc: "Digital-first classrooms with measurable outcomes.", accent: "blue" as const },
  { title: "Innovate", desc: "Labs, incubation and research that ships.", accent: "coral" as const },
  { title: "Connect", desc: "Students, faculty and clubs on one platform.", accent: "mint" as const },
];

const sustainability = [
  { label: "Solar Energy", value: 64, accent: "yellow" as const },
  { label: "Waste Management", value: 82, accent: "mint" as const },
  { label: "Water Conservation", value: 71, accent: "blue" as const },
  { label: "Green Campus Cover", value: 58, accent: "purple" as const },
];

const faqs = [
  { q: "What makes this a smart campus?", a: "Every block, lab and service reports into one platform, so schedules, occupancy and events stay live." },
  { q: "Can visitors explore the campus?", a: "Yes — the Campus Explorer map and the virtual tour are open to everyone." },
  { q: "How do students join clubs?", a: "Each club card lists its next activity; students sign up through the Student Hub." },
];

function About() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        kicker="About"
        title="About Smart Campus"
        desc="A connected, technology-driven campus where systems serve people, not the other way round."
        accent="purple"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="rounded-2xl bg-card p-8 pop-lg">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Vision</p>
          <p className="mt-4 font-display text-2xl uppercase leading-tight sm:text-4xl">
            “Creating a connected learning environment where technology and people work together.”
          </p>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="Mission" title="Learn · Innovate · Connect" accent="coral" />
          <div className="grid gap-6 md:grid-cols-3">
            {mission.map((m) => (
              <div key={m.title} className={`rounded-xl ${accentBg[m.accent]} p-6 text-on-bright pop pop-hover`}>
                <h3 className="text-3xl uppercase">{m.title}</h3>
                <p className="mt-2 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-[3px] border-border bg-muted py-14">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Track record" title="Campus Achievements" accent="yellow" />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-card p-6 pop">
                <p className="font-display text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Green campus" title="Sustainability" accent="mint" />
            <div className="space-y-5">
              {sustainability.map((s) => (
                <Bar key={s.label} label={s.label} value={s.value} accent={s.accent} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Questions" title="Good to know" accent="blue" />
            <ul className="space-y-3">
              {faqs.map((f, i) => (
                <li key={f.q} className="rounded-xl bg-card pop">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base uppercase"
                  >
                    {f.q}
                    <span aria-hidden>{open === i ? "−" : "+"}</span>
                  </button>
                  {open === i ? <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
