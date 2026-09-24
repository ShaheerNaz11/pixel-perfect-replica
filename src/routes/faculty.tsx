import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { accentBg, faculty } from "@/data/campus";
import { Counter, Modal, PageHero, SectionHeading } from "@/components/site/kit";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty Hub — Smart Campus" },
      { name: "description", content: "Faculty directory, teaching schedule, research projects, publications and patents at Smart Campus." },
      { property: "og:title", content: "Faculty Hub — Smart Campus" },
      { property: "og:description", content: "Meet the faculty and explore research and innovation on campus." },
    ],
  }),
  component: FacultyPage,
});

const cards = [
  { label: "Today's Classes", value: 4, accent: "blue" as const },
  { label: "Student Activities", value: 7, accent: "coral" as const },
  { label: "Research Projects", value: 12, accent: "purple" as const },
  { label: "Announcements", value: 3, accent: "yellow" as const },
];

const research = [
  { title: "Research Projects", value: "34 active", desc: "Funded work across AI, energy and smart infrastructure.", accent: "purple" as const },
  { title: "Publications", value: "216", desc: "Peer-reviewed papers published in the last three years.", accent: "blue" as const },
  { title: "Patents", value: "18 filed", desc: "Nine granted, including low-power IoT sensing.", accent: "coral" as const },
  { title: "Industry Collaboration", value: "26 partners", desc: "Joint labs and internships with product companies.", accent: "mint" as const },
];

function FacultyPage() {
  const [open, setOpen] = useState<number | null>(null);
  const person = open === null ? null : faculty[open];

  return (
    <>
      <PageHero
        kicker="Faculty Hub"
        title="Teaching & research"
        desc="Schedules, student activity and the research engine of the campus."
        accent="coral"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.label} className={`rounded-xl ${accentBg[c.accent]} p-6 text-on-bright pop pop-hover`}>
              <p className="font-display text-5xl">
                <Counter value={c.value} />
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em]">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-[3px] border-border bg-muted py-14">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Directory" title="Faculty Directory" accent="blue" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((f, i) => (
              <article key={f.name} className="rounded-xl bg-card p-6 pop pop-hover">
                <span className={`flex h-16 w-16 items-center justify-center rounded-full ${accentBg[f.accent]} font-display text-xl text-on-bright pop-sm`}>
                  {f.name.split(" ")[1]?.[0] ?? "F"}
                  {f.name.split(" ")[2]?.[0] ?? ""}
                </span>
                <h3 className="mt-4 text-xl uppercase">{f.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{f.role}</p>
                <p className="mt-3 text-sm">{f.dept}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.expertise}</p>
                <button
                  onClick={() => setOpen(i)}
                  className="mt-5 rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground pop-sm"
                >
                  Profile
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <SectionHeading eyebrow="Impact" title="Research & Innovation" accent="purple" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {research.map((r) => (
            <div key={r.title} className={`rounded-xl ${accentBg[r.accent]} p-6 text-on-bright pop pop-hover`}>
              <p className="text-xs font-bold uppercase tracking-[0.18em]">{r.title}</p>
              <p className="mt-3 font-display text-3xl">{r.value}</p>
              <p className="mt-2 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Modal open={person !== null} onClose={() => setOpen(null)}>
        {person ? (
          <div>
            <h2 className="text-2xl uppercase">{person.name}</h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
              {person.role} · {person.dept}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Expertise in {person.expertise}. Guides postgraduate research, leads a funded project and mentors student teams
              in campus hackathons.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                ["14", "Papers"],
                ["3", "Projects"],
                ["2", "Patents"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-lg bg-background p-3 pop-sm">
                  <p className="font-display text-xl">{v}</p>
                  <p className="text-xs uppercase text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
